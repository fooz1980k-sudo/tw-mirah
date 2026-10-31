import { css as d, LitElement as m, html as s } from "lit";
import { property as h, state as g } from "lit/decorators.js";
const b = d`
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
`, o = (i) => String(i && typeof i == "object" ? i[(document.documentElement.lang || "ar").slice(0, 2)] ?? i.ar ?? "" : i ?? ""), x = (i) => i ? `--tf-custom:${i}` : "";
var u = Object.defineProperty, f = (i, t, n, a) => {
  for (var e = void 0, r = i.length - 1, p; r >= 0; r--)
    (p = i[r]) && (e = p(t, n, e) || e);
  return e && u(t, n, e), e;
};
const c = class c extends m {
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
    const t = this.config ?? {}, n = this.imgs(), a = n[this.open];
    return s`<div class="wrap" style="--cols:${t.columns ?? 3};${x(t.color)}"><div class="hd"><div><span class="eyebrow">📸 من عالمنا</span>${o(t.title) ? s`<h2 class="title">${o(t.title)}</h2>` : ""}${o(t.subtitle) ? s`<p class="sub">${o(t.subtitle)}</p>` : ""}</div>
        ${t.handle ? s`<a href=${t.handle} target="_blank" rel="noopener">تابعنا ←</a>` : ""}</div>
      <div class="m">${n.map((e, r) => s`<button @click=${() => this.open = r} aria-label="تكبير الصورة ${r + 1}"><img src=${e.image} alt=${o(e.caption)} loading="lazy" />${o(e.caption) ? s`<small>${o(e.caption)}</small>` : ""}</button>`)}</div>
      ${a ? s`<div class="lb" role="dialog" aria-modal="true" @click=${(e) => e.target === e.currentTarget && (this.open = -1)}
          @touchstart=${(e) => this.sx = e.touches[0].clientX} @touchend=${(e) => {
      const r = e.changedTouches[0].clientX - this.sx;
      Math.abs(r) > 50 && this.go(r < 0 ? 1 : -1);
    }}>
        <div><img src=${a.image} alt=${o(a.caption)} />${o(a.caption) || a.link ? s`<p>${o(a.caption)} ${a.link ? s`<a href=${a.link}>تسوّق ←</a>` : ""}</p>` : ""}</div>
        <span class="ct">${this.open + 1} / ${n.length}</span><button class="nv cl" aria-label="إغلاق" @click=${() => this.open = -1}>×</button>
        <button class="nv" style="right:18px" aria-label="السابق" @click=${() => this.go(-1)}>›</button><button class="nv" style="left:18px" aria-label="التالي" @click=${() => this.go(1)}>‹</button></div>` : ""}</div>`;
  }
};
c.styles = [b, d`
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
let l = c;
f([
  h({ type: Object })
], l.prototype, "config");
f([
  g()
], l.prototype, "open");
typeof l < "u" && l.registerSallaComponent("salla-mirah-gallery");
export {
  l as default
};
