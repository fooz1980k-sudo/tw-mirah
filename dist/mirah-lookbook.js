import { css as x, LitElement as w, html as c } from "lit";
import { property as $, state as y } from "lit/decorators.js";
const k = x`
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
`, l = () => window.Salla, v = async () => {
  var t, i;
  try {
    await ((i = (t = l()) == null ? void 0 : t.onReady) == null ? void 0 : i.call(t));
  } catch {
  }
}, h = (t, i) => (document.documentElement.lang || "ar").startsWith("en") ? i : t, s = (t) => {
  const i = typeof t == "object" && t ? t.amount : t, e = Number(i);
  return Number.isFinite(e) ? e : 0;
};
function z(t) {
  var a, r, o, n, f, b;
  const i = s(t == null ? void 0 : t.sale_price) && s(t == null ? void 0 : t.sale_price) < s((t == null ? void 0 : t.regular_price) ?? (t == null ? void 0 : t.price)) ? s(t == null ? void 0 : t.sale_price) : s(t == null ? void 0 : t.price), e = Math.max(s(t == null ? void 0 : t.regular_price), s(t == null ? void 0 : t.price), i);
  return {
    id: Number(t == null ? void 0 : t.id),
    name: String((t == null ? void 0 : t.name) ?? ""),
    url: String((t == null ? void 0 : t.url) ?? "#"),
    image: String(((a = t == null ? void 0 : t.image) == null ? void 0 : a.url) ?? (t == null ? void 0 : t.main_image) ?? (t == null ? void 0 : t.thumbnail) ?? ((o = (r = t == null ? void 0 : t.images) == null ? void 0 : r[0]) == null ? void 0 : o.url) ?? ""),
    price: i,
    regular: e,
    rating: s(((n = t == null ? void 0 : t.rating) == null ? void 0 : n.stars) ?? ((f = t == null ? void 0 : t.rating) == null ? void 0 : f.rate) ?? (t == null ? void 0 : t.rating)),
    ratingCount: s((b = t == null ? void 0 : t.rating) == null ? void 0 : b.count),
    qty: (t == null ? void 0 : t.quantity) == null || t != null && t.unlimited_quantity ? null : s(t == null ? void 0 : t.quantity),
    available: (t == null ? void 0 : t.is_available) !== !1 && (t == null ? void 0 : t.status) !== "out"
  };
}
const m = (t) => (Array.isArray(t) ? t : []).map((i) => Number(typeof i == "object" && i ? i.value : i)).filter((i) => Number.isFinite(i) && i > 0);
async function _(t) {
  return await v(), (await Promise.all(m(t).map((e) => {
    var a, r, o, n;
    return (n = (o = (r = (a = l()) == null ? void 0 : a.product) == null ? void 0 : r.api) == null ? void 0 : o.getDetails) == null ? void 0 : n.call(o, e).then((f) => z(f == null ? void 0 : f.data)).catch(() => null);
  }))).filter((e) => !!e && !!e.name);
}
const S = (t) => {
  var i, e;
  try {
    return ((e = (i = l()) == null ? void 0 : i.money) == null ? void 0 : e.call(i, t)) ?? `${t} ${h("ر.س", "SAR")}`;
  } catch {
    return `${t} ${h("ر.س", "SAR")}`;
  }
};
async function j(t) {
  var i, e, a;
  await v();
  try {
    await ((a = (e = (i = l()) == null ? void 0 : i.cart) == null ? void 0 : e.addItem) == null ? void 0 : a.call(e, { id: t, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t}`;
  }
}
function q(t) {
  var i, e;
  try {
    (e = (i = l()) == null ? void 0 : i.success) == null || e.call(i, t);
  } catch {
  }
}
const N = () => {
  var t, i, e, a, r;
  try {
    const o = ((i = (t = l()) == null ? void 0 : t.lang) == null ? void 0 : i.locale) ?? ((r = (a = (e = l()) == null ? void 0 : e.config) == null ? void 0 : a.get) == null ? void 0 : r.call(a, "user.language_code"));
    if (typeof o == "string" && o) return o.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, u = (t) => {
  if (t == null) return "";
  if (typeof t == "string") {
    const i = t.trim();
    if (i.startsWith("{") && i.endsWith("}"))
      try {
        return u(JSON.parse(i));
      } catch {
      }
    return t;
  }
  if (typeof t == "number" || typeof t == "boolean") return String(t);
  if (typeof t == "object") {
    const i = t, e = i[N()] ?? i.ar ?? i.en ?? Object.values(i).find((a) => typeof a == "string" && a);
    return typeof e == "string" ? e : "";
  }
  return "";
}, C = (t) => t ? `--tf-custom:${t}` : "";
var A = Object.defineProperty, g = (t, i, e, a) => {
  for (var r = void 0, o = t.length - 1, n; o >= 0; o--)
    (n = t[o]) && (r = n(i, e, r) || r);
  return r && A(i, e, r), r;
};
const p = class p extends w {
  constructor() {
    super(...arguments), this.map = /* @__PURE__ */ new Map(), this.active = -1, this.seq = 0;
  }
  willUpdate(i) {
    var r;
    if (!i.has("config")) return;
    const e = ++this.seq, a = (((r = this.config) == null ? void 0 : r.spots) ?? []).flatMap((o) => m(o.product).slice(0, 1));
    _(a.map((o) => ({ value: o }))).then((o) => {
      e === this.seq && (this.map = new Map(o.map((n) => [n.id, n])));
    });
  }
  card(i, e) {
    const a = this.map.get(m(i.product)[0]);
    if (!a) return "";
    const r = Number(i.x ?? 50), o = Number(i.y ?? 50), n = `${r > 60 ? `right:${100 - r + 4}%` : `left:${r + 4}%`};top:${Math.min(o, 70)}%`;
    return c`<div class="pop" style=${n} role="dialog" aria-label=${a.name}><button class="x" aria-label="إغلاق" @click=${() => this.active = -1}>×</button>
      <img src=${a.image} alt="" /><div><a href=${a.url}>${a.name}</a><b>${S(a.price)}</b>
      <button class="btn" ?disabled=${!a.available} @click=${async () => {
      await j(a.id), q("أُضيف للسلة ✓");
    }}>${a.available ? "أضف للسلة" : "غير متوفر"}</button></div></div>`;
  }
  render() {
    const i = this.config ?? {}, e = i.spots ?? [];
    return i.image ? c`<div class="wrap" style=${C(i.color)}><span class="eyebrow">✨ تسوّق الإطلالة</span>${u(i.title) ? c`<h2 class="title">${u(i.title)}</h2>` : ""}${u(i.subtitle) ? c`<p class="sub">${u(i.subtitle)}</p>` : ""}
      <div class="stage"><div class="pic"><img src=${i.image} alt=${u(i.title)} />
        ${e.map((a, r) => this.map.get(m(a.product)[0]) ? c`<button class="dot ${this.active === r ? "on" : ""}" style="left:${a.x ?? 50}%;top:${a.y ?? 50}%" aria-label="عرض المنتج ${r + 1}" @click=${() => this.active = this.active === r ? -1 : r}>+</button>` : "")}</div>
        ${this.active >= 0 && e[this.active] ? this.card(e[this.active], this.active) : ""}</div>
      <div class="list">${e.map((a, r) => {
      const o = this.map.get(m(a.product)[0]);
      return o ? c`<button class="chip ${this.active === r ? "on" : ""}" @click=${() => this.active = r}>${o.name}</button>` : "";
    })}</div></div>` : c`<div class="wrap"><p class="sub">أضف صورة الإطلالة ونقاط المنتجات من إعدادات العنصر.</p></div>`;
  }
};
p.styles = [k, x`
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
let d = p;
g([
  $({ type: Object })
], d.prototype, "config");
g([
  y()
], d.prototype, "map");
g([
  y()
], d.prototype, "active");
typeof d < "u" && d.registerSallaComponent("salla-mirah-lookbook");
export {
  d as default
};
