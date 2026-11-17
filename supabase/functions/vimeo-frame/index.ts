// Blue — صورة غلاف من لقطة في فيديو Vimeo
// لوحة التحكم ترسل {video_url, time} → نطلب من Vimeo صورة بدقة كاملة من تلك اللحظة،
// نحفظها في مخزن الصور (media/covers) ونعيد رابطها.
// السر المطلوب في Supabase → Edge Functions → Secrets:
//   VIMEO_TOKEN  رمز وصول من developer.vimeo.com بصلاحيات Public و Private و Edit و Upload
// النشر: supabase functions deploy vimeo-frame --no-verify-jwt  (الدالة تتحقق من صلاحية المستخدم بنفسها، وطلب CORS المسبق لا يحمل رمز دخول)
import { createClient } from "npm:@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const vimeoId = (u: string) => (u.match(/vimeo\.com\/(?:video\/|channels\/[\w-]+\/)?(\d+)/) || [])[1];
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method" }, 405);

  const token = Deno.env.get("VIMEO_TOKEN");
  if (!token) return json({ error: "no_token" }, 500);

  // من يطلب؟ يجب أن يملك صلاحية المشاريع
  const url = Deno.env.get("SUPABASE_URL")!;
  const auth = req.headers.get("Authorization") ?? "";
  const asUser = createClient(url, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: auth } } });
  const { data: ok } = await asUser.rpc("has_perm", { p: "projects" });
  if (ok !== true) return json({ error: "not_allowed" }, 403);

  let body: { video_url?: string; time?: number };
  try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
  const id = vimeoId(body.video_url ?? "");
  const time = Math.max(0, Number(body.time) || 0);
  if (!id) return json({ error: "not_vimeo" }, 400);

  const V = { Authorization: `Bearer ${token}`, Accept: "application/vnd.vimeo.*+json;version=3.4", "Content-Type": "application/json" };

  // صورة جديدة من اللحظة المطلوبة (غير مفعّلة، فلا تتغيّر صورة الفيديو على Vimeo)
  const mk = await fetch(`https://api.vimeo.com/videos/${id}/pictures`, {
    method: "POST", headers: V, body: JSON.stringify({ time, active: false }),
  });
  if (!mk.ok) {
    const t = await mk.text();
    console.error("vimeo create", mk.status, t);
    const code = mk.status === 401 ? "bad_token" : /scope/i.test(t) ? "scope" : mk.status === 403 || mk.status === 404 ? "no_access" : "vimeo";
    return json({ error: code, detail: t.slice(0, 300) }, 502);
  }
  const pic = await mk.json();

  // Vimeo قد يحتاج ثوانٍ لتجهيز الصورة: ننتظر حتى تصبح جاهزة
  let sizes = pic.sizes as { width: number; link: string }[] | undefined;
  for (let i = 0; i < 8 && !(sizes && sizes.length); i++) {
    await sleep(1200);
    const r = await fetch(`https://api.vimeo.com${pic.uri}`, { headers: V });
    if (r.ok) sizes = (await r.json()).sizes;
  }
  if (!sizes || !sizes.length) return json({ error: "not_ready" }, 504);
  const best = sizes.reduce((a, b) => (b.width > a.width ? b : a));

  let img: Response | null = null;
  for (let i = 0; i < 6; i++) {
    img = await fetch(best.link);
    if (img.ok && (img.headers.get("content-type") ?? "").startsWith("image/")) break;
    await sleep(1200);
  }
  if (!img || !img.ok) return json({ error: "download" }, 502);
  const bytes = new Uint8Array(await img.arrayBuffer());

  // حفظ في مخزن الموقع، ثم حذف الصورة المؤقتة من Vimeo
  const admin = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const path = `covers/${id}-${Math.round(time * 10)}-${Date.now().toString(36)}.jpg`;
  const up = await admin.storage.from("media").upload(path, bytes, { contentType: "image/jpeg", cacheControl: "31536000" });
  if (up.error) return json({ error: "upload", detail: up.error.message }, 500);
  fetch(`https://api.vimeo.com${pic.uri}`, { method: "DELETE", headers: V }).catch(() => {});

  return json({ url: admin.storage.from("media").getPublicUrl(path).data.publicUrl, width: best.width });
});
