-- ═══════════════════════════════════════════════════════════
--  Blue — إشعار بريدي لكل رسالة جديدة (inquiries → Edge Function notify-inquiry)
--  كلمة السر المشتركة محفوظة في Vault باسم notify_secret، ونفسها في أسرار الدالة NOTIFY_SECRET
-- ═══════════════════════════════════════════════════════════
create extension if not exists pg_net;

create or replace function public.notify_inquiry() returns trigger
language plpgsql security definer set search_path = public, extensions as $$
declare s text;
begin
  select decrypted_secret into s from vault.decrypted_secrets where name = 'notify_secret' limit 1;
  if s is null then return new; end if;
  perform net.http_post(
    url     := 'https://fiqwmxniyuljjxeadlhx.supabase.co/functions/v1/notify-inquiry',
    headers := jsonb_build_object('Content-Type','application/json','x-notify-secret', s),
    body    := jsonb_build_object('record', to_jsonb(new))
  );
  return new;
exception when others then
  return new;  -- الإشعار لا يمنع حفظ الرسالة أبداً
end $$;

revoke all on function public.notify_inquiry() from public, anon, authenticated;

drop trigger if exists inquiries_notify on public.inquiries;
create trigger inquiries_notify after insert on public.inquiries
  for each row execute function public.notify_inquiry();
