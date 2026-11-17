-- ربط الموقع بالمحتوى من لوحة التحكم
-- 1) تصنيفات الموقع غير الموجودة في قاعدة البيانات، حتى تظهر في نموذج المشروع
insert into categories (key, name_ar, name_en, sort) values
  ('corp', 'أفلام مؤسسية', 'Corporate', 7),
  ('ai',   'AI',           'AI',        8)
on conflict (key) do nothing;
-- 2) مقالان أزيلا من الموقع سابقاً (بلا محتوى حقيقي): يبقيان مسودة في لوحة التحكم بدل الظهور تلقائياً
update posts set published = false where slug in ('video-vs-stills-social','medical-drama-bts');
