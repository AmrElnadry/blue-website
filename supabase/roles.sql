-- ═══════════════════════════════════════════════════════════
--  الصلاحيات: مالك (كل شيء) ومحرر (إضافة المشاريع وتعديلها فقط)
--  أي حساب ليس له صف في جدول team لا يملك أي صلاحية في لوحة التحكم.
-- ═══════════════════════════════════════════════════════════

create table if not exists public.team (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  email      text not null,
  role       text not null check (role in ('owner','editor')),
  created_at timestamptz not null default now()
);
alter table public.team enable row level security;

-- دور المستخدم الحالي (security definer حتى لا تدور السياسات حول نفسها)
create or replace function public.my_role() returns text
language sql stable security definer set search_path = public as $$
  select role from public.team where user_id = auth.uid()
$$;
revoke all on function public.my_role() from public, anon;
grant execute on function public.my_role() to authenticated;

-- كل الحسابات الموجودة الآن تصبح «مالك» حتى لا يُغلق الباب على أحد
insert into public.team (user_id, email, role)
select id, coalesce(email, ''), 'owner' from auth.users
on conflict (user_id) do nothing;

-- جدول الفريق: كل شخص يرى صفه، والمالك يدير الجميع
drop policy if exists team_self  on public.team;
create policy team_self on public.team for select to authenticated using (user_id = auth.uid());
drop policy if exists team_owner on public.team;
create policy team_owner on public.team for all to authenticated
  using (public.my_role() = 'owner') with check (public.my_role() = 'owner');

-- المالك يضيف عضواً بالبريد (يجب أن يكون الحساب منشأ في Supabase أولاً)
create or replace function public.team_add(p_email text, p_role text) returns text
language plpgsql security definer set search_path = public as $$
declare uid uuid;
begin
  if public.my_role() is distinct from 'owner' then raise exception 'not allowed'; end if;
  if p_role not in ('owner','editor') then raise exception 'bad role'; end if;
  select id into uid from auth.users where lower(email) = lower(trim(p_email));
  if uid is null then return 'no_user'; end if;
  insert into public.team (user_id, email, role) values (uid, lower(trim(p_email)), p_role)
  on conflict (user_id) do update set role = excluded.role;
  return 'ok';
end $$;
revoke all on function public.team_add(text, text) from public, anon;
grant execute on function public.team_add(text, text) to authenticated;

-- الجداول: المالك فقط بدل «أي مستخدم مسجّل»
do $$
declare t text;
begin
  foreach t in array array['categories','projects','service_phases','services',
                           'posts','clients','inquiries','settings']
  loop
    execute format('drop policy if exists p_admin on %I', t);
    execute format('drop policy if exists p_owner on %I', t);
    execute format(
      'create policy p_owner on %I for all to authenticated
         using (public.my_role() = ''owner'') with check (public.my_role() = ''owner'')', t);
  end loop;
end $$;

-- المحرر: يرى كل المشاريع (حتى المخفية)، ويضيف ويعدّل، ولا يحذف
drop policy if exists p_editor_sel on projects;
create policy p_editor_sel on projects for select to authenticated using (public.my_role() = 'editor');
drop policy if exists p_editor_ins on projects;
create policy p_editor_ins on projects for insert to authenticated with check (public.my_role() = 'editor');
drop policy if exists p_editor_upd on projects;
create policy p_editor_upd on projects for update to authenticated
  using (public.my_role() = 'editor') with check (public.my_role() = 'editor');

-- الملفات: المالك والمحرر يرفعان الصور، والتعديل والحذف للمالك
drop policy if exists media_write  on storage.objects;
create policy media_write on storage.objects for insert to authenticated
  with check (bucket_id = 'media' and public.my_role() in ('owner','editor'));
drop policy if exists media_update on storage.objects;
create policy media_update on storage.objects for update to authenticated
  using (bucket_id = 'media' and public.my_role() = 'owner');
drop policy if exists media_delete on storage.objects;
create policy media_delete on storage.objects for delete to authenticated
  using (bucket_id = 'media' and public.my_role() = 'owner');
