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
    ? new Date(r.created_at).toLocaleString("ar-SA-u-nu-latn", { timeZone: "Asia/Riyadh", dateStyle: "medium", timeStyle: "short" })
    : "";
  const rows: [string, string][] = [
    ["الاسم", esc(r.name)],
    ["الجهة / الشركة", esc(r.company) || "—"],
    ["البريد", r.email ? `<a href="mailto:${esc(r.email)}" dir="ltr">${esc(r.email)}</a>` : "—"],
    ["الجوال", r.phone ? `<a href="tel:${esc(r.phone)}" dir="ltr">${esc(r.phone)}</a>` : "—"],
    ["الخدمة", esc(r.service) || "—"],
    ["الميزانية", esc(r.budget) || "—"],
  ];
  const table = rows.map(([k, v]) =>
    `<tr><td style="padding:8px 0;color:#777;width:120px;vertical-align:top">${k}</td><td style="padding:8px 0;color:#111">${v}</td></tr>`
  ).join("");
  const html = `<div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;font-size:15px;line-height:1.8;max-width:600px">
  <h2 style="margin:0 0 4px;font-size:20px">طلب جديد من الموقع</h2>
  <p style="margin:0 0 18px;color:#777;font-size:13px">${esc(when)}</p>
  <table style="border-collapse:collapse;width:100%">${table}</table>
  <h3 style="margin:22px 0 8px;font-size:15px">تفاصيل المشروع</h3>
  <div style="white-space:pre-wrap;background:#f5f5f7;border-radius:8px;padding:14px">${esc(r.message)}</div>
  <p style="margin-top:22px;color:#777;font-size:13px">للرد على العميل: اضغط «رد» مباشرة. الرسالة محفوظة أيضاً في لوحة التحكم ← الرسائل.</p>
</div>`;
  const text = rows.map(([k]) => k).map((k, i) => `${k}: ${[r.name, r.company, r.email, r.phone, r.service, r.budget][i] ?? "—"}`)
    .join("\n") + `\n\nتفاصيل المشروع:\n${r.message ?? ""}`;
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
