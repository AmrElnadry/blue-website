-- ═══════════════════════════════════════════════════════════
--  صلاحيات قابلة للتجميع لكل عضو (تُطبَّق بعد roles.sql)
--   owner  = صلاحيات كاملة
--   editor = ما في perms فقط:  'projects' إضافة المشاريع وتعديلها
--                              'posts'    إضافة مقالات المدونة وتعديلها
--  الحذف وباقي الأقسام للمالك فقط.
-- ═══════════════════════════════════════════════════════════

alter table public.team add column if not exists perms text[] not null default '{}';
alter table public.team drop constraint if exists team_perms_check;
alter table public.team add constraint team_perms_check
  check (perms <@ array['projects','posts']::text[]);
-- المحررون الحاليون (من النسخة السابقة) كانت صلاحيتهم المشاريع
update public.team set perms = array['projects'] where role = 'editor' and perms = '{}';

create or replace function public.has_perm(p text) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.team
    where user_id = auth.uid() and (role = 'owner' or p = any(perms)))
$$;
revoke all on function public.has_perm(text) from public, anon;
grant execute on function public.has_perm(text) to authenticated;

-- إضافة عضو أو تعديل صلاحياته (للمالك فقط)
drop function if exists public.team_add(text, text);
create or replace function public.team_add(p_email text, p_role text, p_perms text[] default '{}')
returns text language plpgsql security definer set search_path = public as $$
declare uid uuid; ps text[];
begin
  if public.my_role() is distinct from 'owner' then raise exception 'not allowed'; end if;
  if p_role not in ('owner','editor') then raise exception 'bad role'; end if;
  ps := case when p_role = 'owner' then '{}'::text[]
             else array(select distinct x from unnest(coalesce(p_perms,'{}')) x
                        where x in ('projects','posts')) end;
  if p_role = 'editor' and cardinality(ps) = 0 then return 'no_perms'; end if;
  select id into uid from auth.users where lower(email) = lower(trim(p_email));
  if uid is null then return 'no_user'; end if;
  if uid = auth.uid() and p_role <> 'owner' then return 'self'; end if;
  insert into public.team (user_id, email, role, perms) values (uid, lower(trim(p_email)), p_role, ps)
  on conflict (user_id) do update set role = excluded.role, perms = excluded.perms;
  return 'ok';
end $$;
revoke all on function public.team_add(text, text, text[]) from public, anon;
grant execute on function public.team_add(text, text, text[]) to authenticated;

-- المشاريع والمدونة: رؤية الكل (حتى المخفي)، إضافة، تعديل — بدون حذف
do $$
declare t text;
begin
  foreach t in array array['projects','posts'] loop
    execute format('drop policy if exists p_editor_sel on %I', t);
    execute format('drop policy if exists p_editor_ins on %I', t);
    execute format('drop policy if exists p_editor_upd on %I', t);
    execute format('create policy p_editor_sel on %I for select to authenticated using (public.has_perm(%L))', t, t);
    execute format('create policy p_editor_ins on %I for insert to authenticated with check (public.has_perm(%L))', t, t);
    execute format('create policy p_editor_upd on %I for update to authenticated using (public.has_perm(%L)) with check (public.has_perm(%L))', t, t, t);
  end loop;
end $$;

-- رفع الصور لمن لديه أي صلاحية
drop policy if exists media_write on storage.objects;
create policy media_write on storage.objects for insert to authenticated
  with check (bucket_id = 'media' and (public.has_perm('projects') or public.has_perm('posts')));
