import { css as c, LitElement as f, html as s } from "lit";
import { property as b, state as h } from "lit/decorators.js";
const x = c`
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
`, i = (e) => String(e && typeof e == "object" ? e[(document.documentElement.lang || "ar").slice(0, 2)] ?? e.ar ?? "" : e ?? ""), m = (e) => e ? `--tf-custom:${e}` : "";
var u = Object.defineProperty, d = (e, t, a, g) => {
  for (var o = void 0, n = e.length - 1, l; n >= 0; n--)
    (l = e[n]) && (o = l(t, a, o) || o);
  return o && u(t, a, o), o;
};
const p = class p extends f {
  constructor() {
    super(...arguments), this.pos = 50, this.down = (t) => {
      t.currentTarget.setPointerCapture(t.pointerId), this.set(t);
    }, this.move = (t) => {
      t.currentTarget.hasPointerCapture(t.pointerId) && this.set(t);
    }, this.key = (t) => {
      t.key === "ArrowLeft" && (this.pos = Math.max(0, this.pos - 5)), t.key === "ArrowRight" && (this.pos = Math.min(100, this.pos + 5));
    };
  }
  set(t) {
    const a = this.renderRoot.querySelector(".cmp").getBoundingClientRect();
    this.pos = Math.min(100, Math.max(0, (t.clientX - a.left) / a.width * 100));
  }
  render() {
    const t = this.config ?? {};
    return !t.before || !t.after ? s`<div class="wrap"><p class="sub">أضف صورة «قبل» وصورة «بعد» من إعدادات العنصر.</p></div>` : s`<div class="wrap" style=${m(t.color)}><span class="eyebrow">↔ الفرق واضح</span>${i(t.title) ? s`<h2 class="title">${i(t.title)}</h2>` : ""}${i(t.subtitle) ? s`<p class="sub">${i(t.subtitle)}</p>` : ""}
      <div class="cmp" dir="ltr" @pointerdown=${this.down} @pointermove=${this.move}>
        <img src=${t.after} alt=${i(t.after_label) || "بعد"} />
        <div class="top" style="clip-path:inset(0 ${100 - this.pos}% 0 0)"><img src=${t.before} alt=${i(t.before_label) || "قبل"} /></div>
        <span class="lb" style="left:18px">${i(t.before_label) || "قبل"}</span><span class="lb" style="right:18px">${i(t.after_label) || "بعد"}</span>
        <div class="h" style="left:${this.pos}%"><div class="k" tabindex="0" role="slider" aria-label="اسحب للمقارنة" aria-valuenow=${Math.round(this.pos)} aria-valuemin="0" aria-valuemax="100" @keydown=${this.key}>⇆</div></div></div>
      ${i(t.button) && t.link ? s`<div class="foot"><a class="btn" href=${t.link}>${i(t.button)} ←</a></div>` : ""}</div>`;
  }
};
p.styles = [x, c`
    .cmp { position: relative; border-radius: 28px; overflow: hidden; aspect-ratio: 16/9; user-select: none; touch-action: pan-y; cursor: ew-resize; background: #ddd; }
    @media (max-width: 600px) { .cmp { aspect-ratio: 4/5; } }
    .cmp img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; pointer-events: none; }
    .top { position: absolute; inset: 0; } .h { position: absolute; top: 0; bottom: 0; width: 3px; margin-inline-start: -1.5px; background: #fff; box-shadow: 0 0 20px #0006; }
    .k { position: absolute; top: 50%; left: 50%; width: 56px; height: 56px; transform: translate(-50%, -50%); border-radius: 50%; background: #fff; color: #1b1408; display: grid; place-items: center; font-size: 20px; box-shadow: 0 10px 30px #0005; outline: none; }
    .k:focus-visible { box-shadow: 0 0 0 4px var(--tf-accent); }
    .lb { position: absolute; bottom: 18px; padding: 8px 16px; border-radius: 99px; background: #0009; color: #fff; font-size: 14px; font-weight: 700; backdrop-filter: blur(6px); }
    .foot { margin-top: 20px; text-align: center; }
  `];
let r = p;
d([
  b({ type: Object })
], r.prototype, "config");
d([
  h()
], r.prototype, "pos");
typeof r < "u" && r.registerSallaComponent("salla-mirah-before-after");
export {
  r as default
};
