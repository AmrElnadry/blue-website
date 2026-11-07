// Blue — إشعار بريدي لكل رسالة جديدة من نموذج التواصل
// يُستدعى من قاعدة البيانات (trigger على جدول inquiries) ويرسل عبر Resend.
// الأسرار المطلوبة في Supabase → Edge Functions → Secrets:
//   RESEND_API_KEY   مفتاح Resend
//   NOTIFY_SECRET    كلمة سرّ مشتركة مع الـ trigger (تمنع أي أحد آخر من استدعاء الدالة)
// اختيارية: NOTIFY_TO (الافتراضي contact@blue-network.sa)، NOTIFY_FROM

const TO = Deno.env.get("NOTIFY_TO") ?? "contact@blue-network.sa";
const FROM = Deno.env.get("NOTIFY_FROM") ?? "Blue Website <website@blue-network.sa>";

type Inquiry = {
  id?: string; name?: string; email?: string; phone?: string | null; company?: string | null;
  service?: string | null; budget?: string | null; message?: string | null; created_at?: string;
};

const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

function render(r: Inquiry) {
  const when = r.created_at
    ? new Date(r.created_at).toLocaleString("ar-SA-u-nu-latn-ca-gregory", { timeZone: "Asia/Riyadh", dateStyle: "long", timeStyle: "short" })
    : "";
  // نفس خط الموقع (Tajawal). Apple Mail و iOS يحمّلانه؛ Gmail وOutlook يتجاهلان الخطوط الخارجية فيظهر البديل.
  const FONT = "'Tajawal','IBM Plex Sans Arabic','Segoe UI',Tahoma,Arial,sans-serif";
  // البريد والجوال إنجليزيان: نعزلهما باتجاه LTR حتى لا ينقلب ترتيب الرموز داخل السطر العربي.
  const ltr = (s: string) => `<span dir="ltr" style="unicode-bidi:isolate;direction:ltr">${s}</span>`;
  const rows: [string, string][] = [
    ["الاسم", esc(r.name)],
    ["الجهة / الشركة", esc(r.company) || "—"],
    ["البريد", r.email ? ltr(`<a href="mailto:${esc(r.email)}" style="color:#2f8fe0;text-decoration:none">${esc(r.email)}</a>`) : "—"],
    ["الجوال", r.phone ? ltr(`<a href="tel:${esc(r.phone)}" style="color:#2f8fe0;text-decoration:none">${esc(r.phone)}</a>`) : "—"],
    ["الخدمة", esc(r.service) || "—"],
    ["الميزانية", esc(r.budget) || "—"],
  ];
  const td = `font-family:${FONT};font-size:15px;line-height:1.7;padding:9px 0;border-bottom:1px solid #eeeef0;text-align:right;vertical-align:top`;
  const table = rows.map(([k, v]) =>
    `<tr><td dir="rtl" align="right" width="130" style="${td};color:#777;width:130px">${k}</td><td dir="rtl" align="right" style="${td};color:#111">${v}</td></tr>`
  ).join("");
  const html = `<!doctype html>
<html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
<style>body,table,td,div,p,h1,h2{font-family:${FONT}!important}</style></head>
<body dir="rtl" style="margin:0;padding:0;background:#f5f5f7;direction:rtl;text-align:right">
<table role="presentation" dir="rtl" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f5f7;direction:rtl"><tr><td align="center" style="padding:28px 14px">
<table role="presentation" dir="rtl" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;direction:rtl"><tr><td dir="rtl" align="right" style="padding:30px 28px;text-align:right;direction:rtl;font-family:${FONT};color:#111">
  <h1 dir="rtl" style="margin:0 0 4px;font-family:${FONT};font-size:22px;font-weight:700;text-align:right">طلب جديد من الموقع</h1>
  <p dir="rtl" style="margin:0 0 20px;font-family:${FONT};color:#777;font-size:13px;text-align:right">${esc(when)}</p>
  <table role="presentation" dir="rtl" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;direction:rtl">${table}</table>
  <h2 dir="rtl" style="margin:24px 0 8px;font-family:${FONT};font-size:16px;font-weight:700;text-align:right">تفاصيل المشروع</h2>
  <div dir="auto" style="white-space:pre-wrap;background:#f5f5f7;border-radius:10px;padding:14px 16px;font-family:${FONT};font-size:15px;line-height:1.8;text-align:start">${esc(r.message)}</div>
  <p dir="rtl" style="margin:24px 0 0;font-family:${FONT};color:#777;font-size:13px;line-height:1.7;text-align:right">للرد على العميل اضغط «رد» مباشرة، والرسالة محفوظة أيضاً في لوحة التحكم ← الرسائل</p>
</td></tr></table>
</td></tr></table>
</body></html>`;
  // نسخة النص العادي: علامة RLM في بداية كل سطر تجعل البرامج تعرضه من اليمين لليسار.
  const RLM = "‏";
  const vals = [r.name, r.company, r.email, r.phone, r.service, r.budget];
  const text = rows.map(([k], i) => `${RLM}${k}: ${vals[i] || "—"}`).join("\n") +
    `\n\n${RLM}تفاصيل المشروع:\n${(r.message ?? "").split("\n").map((l) => RLM + l).join("\n")}`;
  return { html, text };
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const secret = Deno.env.get("NOTIFY_SECRET");
  if (!secret || req.headers.get("x-notify-secret") !== secret) return new Response("Unauthorized", { status: 401 });
  const key = Deno.env.get("RESEND_API_KEY");
  if (!key) return new Response("RESEND_API_KEY missing", { status: 500 });

  let r: Inquiry;
  try { const body = await req.json(); r = body.record ?? body; } catch { return new Response("Bad JSON", { status: 400 }); }

  const { html, text } = render(r);
  const subject = `طلب جديد: ${r.name ?? "بدون اسم"}${r.service ? " — " + r.service : ""}`.slice(0, 180);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [TO], subject, html, text, ...(r.email ? { reply_to: r.email } : {}) }),
  });
  const out = await res.text();
  if (!res.ok) console.error("resend", res.status, out);
  return new Response(out, { status: res.ok ? 200 : 502, headers: { "Content-Type": "application/json" } });
});
