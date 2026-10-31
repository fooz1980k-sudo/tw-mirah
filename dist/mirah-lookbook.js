import { css as h, LitElement as w, html as c } from "lit";
import { property as $, state as y } from "lit/decorators.js";
const k = h`
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
`, m = () => window.Salla, v = async () => {
  var t, i;
  try {
    await ((i = (t = m()) == null ? void 0 : t.onReady) == null ? void 0 : i.call(t));
  } catch {
  }
}, x = (t, i) => (document.documentElement.lang || "ar").startsWith("en") ? i : t, s = (t) => {
  const i = typeof t == "object" && t ? t.amount : t, a = Number(i);
  return Number.isFinite(a) ? a : 0;
};
function z(t) {
  var e, r, o, n, d, p;
  const i = s(t == null ? void 0 : t.sale_price) && s(t == null ? void 0 : t.sale_price) < s((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? s(t == null ? void 0 : t.sale_price) : s(t == null ? void 0 : t.price), a = Math.max(s(t == null ? void 0 : t.regular_price), s(t == null ? void 0 : t.price), i);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((e = t == null ? void 0 : t.image) == null ? void 0 : e.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((o = (r = t == null ? void 0 : t.images) == null ? void 0 : r[0]) == null ? void 0 : o.url) ?? ""),
    price: i,
    regular: a,
    rating: s(((n = t == null ? void 0 : t.rating) == null ? void 0 : n.stars) ?? ((d = t == null ? void 0 : t.rating) == null ? void 0 : d.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: s((p = t == null ? void 0 : t.rating) == null ? void 0 : p.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : s(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const u = (t) => (Array.isArray(t) ? t : []).map((i) => Number(typeof i == "object" && i ? i.value : i)).filter((i) => Number.isFinite(i) && i > 0);
async function _(t) {
  return await v(), (await Promise.all(u(t).map((a) => {
    var e, r, o, n;
    return (n = (o = (r = (e = m()) == null ? void 0 : e.product) == null ? void 0 : r.api) == null ? void 0 : o.getDetails) == null ? void 0 : n.call(o, a).then((d) => z(d == null ? void 0 : d.data)).catch(() => null);
  }))).filter((a) => !!a && !!a.name);
}
const S = (t) => {
  var i, a;
  try {
    return ((a = (i = m()) == null ? void 0 : i.money) == null ? void 0 : a.call(i, t)) ?? `${t} ${x("ر.س", "SAR")}`;
  } catch {
    return `${t} ${x("ر.س", "SAR")}`;
  }
};
async function q(t) {
  var i, a, e;
  await v();
  try {
    await ((e = (a = (i = m()) == null ? void 0 : i.cart) == null ? void 0 : a.addItem) == null ? void 0 : e.call(a, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function j(t) {
  var i, a;
  try {
    (a = (i = m()) == null ? void 0 : i.success) == null || a.call(i, t);
  } catch {
  }
}
const f = (t) => String(t && typeof t == "object" ? t[(document.documentElement.lang || "ar").slice(0, 2)] ?? t.ar ?? "" : t ?? ""), N = (t) => t ? `--tf-custom:${t}` : "";
var C = Object.defineProperty, g = (t, i, a, e) => {
  for (var r = void 0, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (r = n(i, a, r) || r);
  return r && C(i, a, r), r;
};
const b = class b extends w {
  constructor() {
    super(...arguments), this.map = /* @__PURE__ */ new Map(), this.active = -1, this.seq = 0;
  }
  willUpdate(i) {
    var r;
    if (!i.has("config")) return;
    const a = ++this.seq, e = (((r = this.config) == null ? void 0 : r.spots) ?? []).flatMap((o) => u(o.product).slice(0, 1));
    _(e.map((o) => ({ value: o }))).then((o) => {
      a === this.seq && (this.map = new Map(o.map((n) => [n.id, n])));
    });
  }
  card(i, a) {
    const e = this.map.get(u(i.product)[0]);
    if (!e) return "";
    const r = Number(i.x ?? 50), o = Number(i.y ?? 50), n = `${r > 60 ? `right:${100 - r + 4}%` : `left:${r + 4}%`};top:${Math.min(o, 70)}%`;
    return c`<div class="pop" style=${n} role="dialog" aria-label=${e.name}><button class="x" aria-label="إغلاق" @click=${() => this.active = -1}>×</button>
      <img src=${e.image} alt="" /><div><a href=${e.url}>${e.name}</a><b>${S(e.price)}</b>
      <button class="btn" ?disabled=${!e.available} @click=${async () => {
      await q(e.id), j("أُضيف للسلة ✓");
    }}>${e.available ? "أضف للسلة" : "غير متوفر"}</button></div></div>`;
  }
  render() {
    const i = this.config ?? {}, a = i.spots ?? [];
    return i.image ? c`<div class="wrap" style=${N(i.color)}><span class="eyebrow">✨ تسوّق الإطلالة</span>${f(i.title) ? c`<h2 class="title">${f(i.title)}</h2>` : ""}${f(i.subtitle) ? c`<p class="sub">${f(i.subtitle)}</p>` : ""}
      <div class="stage"><div class="pic"><img src=${i.image} alt=${f(i.title)} />
        ${a.map((e, r) => this.map.get(u(e.product)[0]) ? c`<button class="dot ${this.active === r ? "on" : ""}" style="left:${e.x ?? 50}%;top:${e.y ?? 50}%" aria-label="عرض المنتج ${r + 1}" @click=${() => this.active = this.active === r ? -1 : r}>+</button>` : "")}</div>
        ${this.active >= 0 && a[this.active] ? this.card(a[this.active], this.active) : ""}</div>
      <div class="list">${a.map((e, r) => {
      const o = this.map.get(u(e.product)[0]);
      return o ? c`<button class="chip ${this.active === r ? "on" : ""}" @click=${() => this.active = r}>${o.name}</button>` : "";
    })}</div></div>` : c`<div class="wrap"><p class="sub">أضف صورة الإطلالة ونقاط المنتجات من إعدادات العنصر.</p></div>`;
  }
};
b.styles = [k, h`
    .stage { position: relative; } .pic { position: relative; border-radius: 28px; overflow: hidden; background: #eee; }
    .pic > img { display: block; width: 100%; max-height: 82vh; object-fit: cover; }
    .dot { position: absolute; width: 34px; height: 34px; margin: -17px; border-radius: 50%; border: 0; cursor: pointer; background: #fff; box-shadow: 0 6px 20px #0006; display: grid; place-items: center; font-weight: 800; color: #1b1408; font-size: 18px; transition: transform .3s; }
    .dot::before { content: ''; position: absolute; inset: -8px; border-radius: 50%; border: 2px solid #fff; animation: ping 2s infinite; }
    .dot:hover, .dot.on { transform: scale(1.15); background: var(--tf-accent); color: #fff; }
    @keyframes ping { 0% { transform: scale(.7); opacity: 1; } 100% { transform: scale(1.6); opacity: 0; } }
    .pop { position: absolute; width: 250px; background: #fffffff2; backdrop-filter: blur(10px); color: #1b1408; border-radius: 20px; padding: 10px; box-shadow: 0 30px 60px -20px #0008; display: grid; grid-template-columns: 76px 1fr; gap: 12px; align-items: center; animation: in .35s ease; z-index: 2; }
    @keyframes in { from { opacity: 0; transform: translateY(8px); } }
    .pop img { width: 76px; height: 76px; object-fit: cover; border-radius: 14px; } .pop a { color: inherit; text-decoration: none; font-weight: 700; font-size: 14px; line-height: 1.5; display: block; }
    .pop b { color: var(--tf-accent); font-size: 15px; } .pop .btn { padding: 7px 14px; font-size: 13px; margin-top: 6px; }
    .x { position: absolute; top: 6px; inset-inline-end: 8px; border: 0; background: none; cursor: pointer; font-size: 18px; opacity: .5; }
    @media (max-width: 600px) { .stage { overflow: visible; } .pic > img { border-radius: 22px; } .pop { position: relative; left: auto !important; right: auto !important; top: auto !important; width: auto; margin-top: 10px; } }
    .list { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 16px; } .chip { border: 1px solid #0000001a; border-radius: 99px; padding: 8px 14px; font: inherit; font-size: 14px; background: #fff; cursor: pointer; }
    .chip.on { border-color: var(--tf-accent); color: var(--tf-accent); font-weight: 700; }
  `];
let l = b;
g([
  $({ type: Object })
], l.prototype, "config");
g([
  y()
], l.prototype, "map");
g([
  y()
], l.prototype, "active");
typeof l < "u" && l.registerSallaComponent("salla-mirah-lookbook");
export {
  l as default
};
