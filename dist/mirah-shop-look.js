import { css as v, LitElement as $, html as c } from "lit";
import { property as p, state as h } from "lit/decorators.js";
const k = v`
  :host { display: block; --tf-accent: var(--tf-custom, var(--color-primary, #c9a45c)); --tf-ink: #0f0c18; --tf-ivory: #f6f1e7; --tf-mut: #a59bc2;
    --tf-gold: linear-gradient(135deg, #f5d68a, #c9a45c 55%, #9a7634); font-family: inherit; direction: inherit; }
  :host([hidden]) { display: none; }
  *, *::before, *::after { box-sizing: border-box; }
  .wrap { max-width: 1240px; margin: 0 auto; padding: clamp(28px, 5vw, 64px) clamp(16px, 4vw, 32px); }
  .eyebrow { display: inline-block; letter-spacing: .28em; font-size: 12px; text-transform: uppercase; color: var(--tf-accent); margin-bottom: 10px; }
  h2.title { margin: 0 0 8px; font-size: clamp(24px, 3.4vw, 40px); line-height: 1.25; font-weight: 800; }
  .sub { margin: 0 0 28px; opacity: .7; font-size: clamp(14px, 1.6vw, 17px); line-height: 1.8; }
  .btn { display: inline-flex; align-items: center; gap: 8px; border: 0; cursor: pointer; text-decoration: none; font: inherit; font-weight: 700;
    padding: 13px 26px; border-radius: 999px; background: var(--tf-accent); color: #fff; transition: transform .25s, box-shadow .25s; }
  .btn:hover { transform: translateY(-2px); box-shadow: 0 14px 30px -12px var(--tf-accent); }
  .btn.ghost { background: transparent; color: inherit; border: 1px solid currentColor; }
  .dark { background: radial-gradient(1000px 500px at 85% -10%, #2c1d55 0, transparent 60%), #0f0c18; color: var(--tf-ivory); }
  .skel { background: linear-gradient(90deg, #8881 0, #8882 50%, #8881 100%); background-size: 200% 100%; animation: sk 1.4s infinite; border-radius: 14px; }
  @keyframes sk { to { background-position: -200% 0; } }
  @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }
`, f = () => window.Salla, w = async () => {
  var t, e;
  try {
    await ((e = (t = f()) == null ? void 0 : t.onReady) == null ? void 0 : e.call(t));
  } catch {
  }
}, x = (t, e) => (document.documentElement.lang || "ar").startsWith("en") ? e : t, l = (t) => {
  const e = typeof t == "object" && t ? t.amount : t, i = Number(e);
  return Number.isFinite(i) ? i : 0;
};
function z(t) {
  var r, n, o, a, s, y;
  const e = l(t == null ? void 0 : t.sale_price) && l(t == null ? void 0 : t.sale_price) < l((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? l(t == null ? void 0 : t.sale_price) : l(t == null ? void 0 : t.price), i = Math.max(l(t == null ? void 0 : t.regular_price), l(t == null ? void 0 : t.price), e);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((r = t == null ? void 0 : t.image) == null ? void 0 : r.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((o = (n = t == null ? void 0 : t.images) == null ? void 0 : n[0]) == null ? void 0 : o.url) ?? ""),
    price: e,
    regular: i,
    rating: l(((a = t == null ? void 0 : t.rating) == null ? void 0 : a.stars) ?? ((s = t == null ? void 0 : t.rating) == null ? void 0 : s.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: l((y = t == null ? void 0 : t.rating) == null ? void 0 : y.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : l(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const _ = (t) => (Array.isArray(t) ? t : []).map((e) => Number(typeof e == "object" && e ? e.value : e)).filter((e) => Number.isFinite(e) && e > 0);
async function S(t) {
  return await w(), (await Promise.all(_(t).map((i) => {
    var r, n, o, a;
    return (a = (o = (n = (r = f()) == null ? void 0 : r.product) == null ? void 0 : n.api) == null ? void 0 : o.getDetails) == null ? void 0 : a.call(o, i).then((s) => z(s == null ? void 0 : s.data)).catch(() => null);
  }))).filter((i) => !!i && !!i.name);
}
const g = (t) => {
  var e, i;
  try {
    return ((i = (e = f()) == null ? void 0 : e.money) == null ? void 0 : i.call(e, t)) ?? `${t} ${x("ر.س", "SAR")}`;
  } catch {
    return `${t} ${x("ر.س", "SAR")}`;
  }
};
async function j(t) {
  var e, i, r;
  await w();
  try {
    await ((r = (i = (e = f()) == null ? void 0 : e.cart) == null ? void 0 : i.addItem) == null ? void 0 : r.call(i, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function q(t) {
  var e, i;
  try {
    (i = (e = f()) == null ? void 0 : e.success) == null || i.call(e, t);
  } catch {
  }
}
const A = () => {
  var t, e, i, r, n;
  try {
    const o = ((e = (t = f()) == null ? void 0 : t.lang) == null ? void 0 : e.locale) ?? ((n = (r = (i = f()) == null ? void 0 : i.config) == null ? void 0 : r.get) == null ? void 0 : n.call(r, "user.language_code"));
    if (typeof o == "string" && o) return o.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, u = (t) => {
  if (t == null) return "";
  if (typeof t == "string") {
    const e = t.trim();
    if (e.startsWith("{") && e.endsWith("}"))
      try {
        return u(JSON.parse(e));
      } catch {
      }
    return t;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const e = t, i = e[A()] ?? e.ar ?? e.en ?? Object.values(e).find((r) => typeof r == "string" && r);
    return typeof i == "string" ? i : "";
  }
  return "";
}, N = (t) => t ? `--tf-custom:${t}` : "";
var C = Object.defineProperty, m = (t, e, i, r) => {
  for (var n = void 0, o = t.length - 1, a; o >= 0; o--)
    (a = t[o]) && (n = a(e, i, n) || n);
  return n && C(e, i, n), n;
};
const b = class b extends $ {
  constructor() {
    super(...arguments), this.list = null, this.off = /* @__PURE__ */ new Set(), this.busy = !1, this.seq = 0;
  }
  willUpdate(e) {
    var i;
    if (e.has("config")) {
      const r = ++this.seq;
      this.list = null, S((i = this.config) == null ? void 0 : i.products).then((n) => {
        r === this.seq && (this.list = n);
      });
    }
  }
  toggle(e) {
    const i = new Set(this.off);
    i.has(e) ? i.delete(e) : i.add(e), this.off = i;
  }
  async addAll(e) {
    this.busy = !0;
    for (const i of e) await j(i.id);
    this.busy = !1, q(`أُضيفت ${e.length} قطع للسلة ✓`);
  }
  render() {
    const e = this.config ?? {}, i = this.list ?? [], r = i.filter((a) => a.available && !this.off.has(a.id)), n = r.reduce((a, s) => a + s.price, 0), o = r.reduce((a, s) => a + s.regular, 0);
    return c`<div class="wrap" style=${N(e.color)}><span class="eyebrow">👗 أكمل الإطلالة</span><h2 class="title">${u(e.title) || "الإطلالة كاملة"}</h2>${u(e.subtitle) ? c`<p class="sub">${u(e.subtitle)}</p>` : ""}
      <div class="g">${e.image ? c`<div class="hero"><img src=${e.image} alt="" loading="lazy" /></div>` : ""}
        <div>${this.list === null ? c`<div class="skel" style="height:320px"></div>` : i.map((a) => c`<label class="it ${this.off.has(a.id) || !a.available ? "off" : ""}">
            <input type="checkbox" .checked=${a.available && !this.off.has(a.id)} ?disabled=${!a.available} @change=${() => this.toggle(a.id)} />
            <img src=${a.image} alt="" loading="lazy" /><a href=${a.url} @click=${(s) => s.stopPropagation()}>${a.name}${a.available ? "" : c` <small>(غير متوفر)</small>`}</a><b>${g(a.price)}</b></label>`)}
          <div class="sum dark"><div>المجموع (${r.length} قطع)<br /><b>${g(n)}</b>${o > n ? c`<s>${g(o)}</s><span class="sv">وفّرت ${g(o - n)}</span>` : ""}${u(e.note) ? c`<span class="sv">${u(e.note)}</span>` : ""}</div>
            <button class="btn" ?disabled=${!r.length || this.busy} @click=${() => this.addAll(r)}>${this.busy ? "جاري الإضافة…" : "أضف الإطلالة للسلة"}</button></div></div></div></div>`;
  }
};
b.styles = [k, v`
    .g { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(20px, 4vw, 48px); align-items: stretch; }
    @media (max-width: 860px) { .g { grid-template-columns: 1fr; } }
    .hero { border-radius: 28px; overflow: hidden; min-height: 420px; position: relative; } .hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .it { display: grid; grid-template-columns: 26px 84px 1fr auto; gap: 14px; align-items: center; padding: 12px; border-radius: 18px; border: 1px solid #00000010; background: #fff; margin-bottom: 10px; transition: opacity .3s, border-color .3s; cursor: pointer; }
    .it.off { opacity: .45; } .it:not(.off) { border-color: color-mix(in srgb, var(--tf-accent) 45%, transparent); }
    .it img { width: 84px; height: 84px; object-fit: cover; border-radius: 14px; } .it a { color: inherit; text-decoration: none; font-weight: 700; font-size: 15px; }
    .it b { color: var(--tf-accent); white-space: nowrap; } input { width: 20px; height: 20px; accent-color: var(--tf-accent); }
    .sum { margin-top: 16px; padding: 18px; border-radius: 20px; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
    .sum b { font-size: 24px; } .sum s { opacity: .5; margin-inline-start: 8px; } .sv { color: #7ee2a8; font-size: 13px; display: block; }
  `];
let d = b;
m([
  p({ type: Object })
], d.prototype, "config");
m([
  h()
], d.prototype, "list");
m([
  h()
], d.prototype, "off");
m([
  h()
], d.prototype, "busy");
typeof d < "u" && d.registerSallaComponent("salla-mirah-shop-look");
export {
  d as default
};
