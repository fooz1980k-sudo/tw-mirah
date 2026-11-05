import { css as f, LitElement as m, html as s } from "lit";
import { property as h, state as u } from "lit/decorators.js";
const b = f`
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
`, d = () => window.Salla, x = () => {
  var i, t, n, o, e;
  try {
    const a = ((t = (i = d()) == null ? void 0 : i.lang) == null ? void 0 : t.locale) ?? ((e = (o = (n = d()) == null ? void 0 : n.config) == null ? void 0 : o.get) == null ? void 0 : e.call(o, "user.language_code"));
    if (typeof a == "string" && a) return a.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, r = (i) => {
  if (i == null) return "";
  if (typeof i == "string") {
    const t = i.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return r(JSON.parse(t));
      } catch {
      }
    return i;
  }
  if (typeof i == "number" || typeof i == "boolean") return String(i);
  if (typeof i == "object") {
    const t = i, n = t[x()] ?? t.ar ?? t.en ?? Object.values(t).find((o) => typeof o == "string" && o);
    return typeof n == "string" ? n : "";
  }
  return "";
}, y = (i) => i ? `--tf-custom:${i}` : "";
var k = Object.defineProperty, g = (i, t, n, o) => {
  for (var e = void 0, a = i.length - 1, p; a >= 0; a--)
    (p = i[a]) && (e = p(t, n, e) || e);
  return e && k(t, n, e), e;
};
const l = class l extends m {
  constructor() {
    super(...arguments), this.open = -1, this.sx = 0, this.key = (t) => {
      this.open < 0 || (t.key === "Escape" && (this.open = -1), t.key === "ArrowLeft" && this.go(1), t.key === "ArrowRight" && this.go(-1));
    };
  }
  imgs() {
    var t;
    return (((t = this.config) == null ? void 0 : t.images) ?? []).filter((n) => n.image);
  }
  go(t) {
    const n = this.imgs().length;
    this.open = (this.open + t + n) % n;
  }
  connectedCallback() {
    super.connectedCallback(), addEventListener("keydown", this.key);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), removeEventListener("keydown", this.key);
  }
  render() {
    const t = this.config ?? {}, n = this.imgs(), o = n[this.open];
    return s`<div class="wrap" style="--cols:${t.columns ?? 3};${y(t.color)}"><div class="hd"><div><span class="eyebrow">📸 من عالمنا</span>${r(t.title) ? s`<h2 class="title">${r(t.title)}</h2>` : ""}${r(t.subtitle) ? s`<p class="sub">${r(t.subtitle)}</p>` : ""}</div>
        ${t.handle ? s`<a href=${t.handle} target="_blank" rel="noopener">تابعنا ←</a>` : ""}</div>
      <div class="m">${n.map((e, a) => s`<button @click=${() => this.open = a} aria-label="تكبير الصورة ${a + 1}"><img src=${e.image} alt=${r(e.caption)} loading="lazy" />${r(e.caption) ? s`<small>${r(e.caption)}</small>` : ""}</button>`)}</div>
      ${o ? s`<div class="lb" role="dialog" aria-modal="true" @click=${(e) => e.target === e.currentTarget && (this.open = -1)}
          @touchstart=${(e) => this.sx = e.touches[0].clientX} @touchend=${(e) => {
      const a = e.changedTouches[0].clientX - this.sx;
      Math.abs(a) > 50 && this.go(a < 0 ? 1 : -1);
    }}>
        <div><img src=${o.image} alt=${r(o.caption)} />${r(o.caption) || o.link ? s`<p>${r(o.caption)} ${o.link ? s`<a href=${o.link}>تسوّق ←</a>` : ""}</p>` : ""}</div>
        <span class="ct">${this.open + 1} / ${n.length}</span><button class="nv cl" aria-label="إغلاق" @click=${() => this.open = -1}>×</button>
        <button class="nv" style="right:18px" aria-label="السابق" @click=${() => this.go(-1)}>›</button><button class="nv" style="left:18px" aria-label="التالي" @click=${() => this.go(1)}>‹</button></div>` : ""}</div>`;
  }
};
l.styles = [b, f`
    .m { columns: var(--cols, 3) 240px; column-gap: 14px; }
    .m button { all: unset; display: block; margin-bottom: 14px; border-radius: 20px; overflow: hidden; cursor: zoom-in; position: relative; break-inside: avoid; width: 100%; }
    .m button:focus-visible { outline: 3px solid var(--tf-accent); }
    .m img { width: 100%; display: block; transition: transform .8s, filter .5s; } .m button:hover img { transform: scale(1.05); filter: brightness(.8); }
    .m small { position: absolute; inset-inline: 14px; bottom: 12px; color: #fff; font-weight: 700; opacity: 0; transform: translateY(8px); transition: .4s; } .m button:hover small { opacity: 1; transform: none; }
    .lb { position: fixed; inset: 0; z-index: 9999; background: #0b0910f2; display: grid; place-items: center; animation: f .3s; } @keyframes f { from { opacity: 0; } }
    .lb img { max-width: 92vw; max-height: 80vh; border-radius: 16px; box-shadow: 0 40px 80px #000a; }
    .lb p { color: #fff; text-align: center; margin: 14px 0 0; } .lb a { color: var(--tf-accent); }
    .nv { position: fixed; top: 50%; width: 52px; height: 52px; margin-top: -26px; border-radius: 50%; border: 1px solid #fff4; background: #fff1; color: #fff; font-size: 22px; cursor: pointer; }
    .cl { position: fixed; top: 18px; inset-inline-end: 18px; } .ct { position: fixed; top: 26px; inset-inline-start: 24px; color: #fff9; font-size: 14px; }
    .hd { display: flex; justify-content: space-between; align-items: end; gap: 12px; flex-wrap: wrap; } .hd a { color: var(--tf-accent); font-weight: 700; text-decoration: none; }
  `];
let c = l;
g([
  h({ type: Object })
], c.prototype, "config");
g([
  u()
], c.prototype, "open");
typeof c < "u" && c.registerSallaComponent("salla-mirah-gallery");
export {
  c as default
};
