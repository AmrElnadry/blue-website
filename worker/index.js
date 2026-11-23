// Blue — خادم صغير أمام الملفات الثابتة لشيء واحد فقط:
// طلبات الفيديو الجزئية (Range). آيفون وسفاري لا يشغّلان الفيديو بدونها.
// كل ما عدا ملفات الفيديو يُخدم مباشرة من الملفات الثابتة كما هو.
export default {
  async fetch(req, env) {
    const range = req.headers.get("Range");
    const url = new URL(req.url);
    if (!range || !/\.mp4$/i.test(url.pathname) || req.method !== "GET") return env.ASSETS.fetch(req);

    const res = await env.ASSETS.fetch(new Request(url.toString(), { method: "GET" }));
    if (res.status !== 200) return res;
    const buf = await res.arrayBuffer();
    const size = buf.byteLength;
    const m = /bytes=(\d*)-(\d*)/.exec(range);
    if (!m || (m[1] === "" && m[2] === "")) return new Response(buf, { status: 200, headers: res.headers });
    let start, end;
    if (m[1] === "") { start = Math.max(0, size - Number(m[2])); end = size - 1; }
    else { start = Number(m[1]); end = m[2] === "" ? size - 1 : Math.min(Number(m[2]), size - 1); }
    if (start >= size || start > end)
      return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });

    const h = new Headers(res.headers);
    h.set("Content-Range", `bytes ${start}-${end}/${size}`);
    h.set("Content-Length", String(end - start + 1));
    h.set("Accept-Ranges", "bytes");
    return new Response(buf.slice(start, end + 1), { status: 206, headers: h });
  },
};
