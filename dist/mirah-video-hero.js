import { css as f, LitElement as u, html as a } from "lit";
import { property as h, state as b } from "lit/decorators.js";
const g = f`
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
`, l = () => window.Salla, x = () => {
  var e, t, o, n, i;
  try {
    const r = ((t = (e = l()) == null ? void 0 : e.lang) == null ? void 0 : t.locale) ?? ((i = (n = (o = l()) == null ? void 0 : o.config) == null ? void 0 : n.get) == null ? void 0 : i.call(n, "user.language_code"));
    if (typeof r == "string" && r) return r.slice(0, 2);
  } catch {
  }
  return (document.documentElement.lang || "ar").slice(0, 2);
}, s = (e) => {
  if (e == null) return "";
  if (typeof e == "string") {
    const t = e.trim();
    if (t.startsWith("{") && t.endsWith("}"))
      try {
        return s(JSON.parse(t));
      } catch {
      }
    return e;
  }
  if (typeof e == "number" || typeof e == "boolean") return String(e);
  if (typeof e == "object") {
    const t = e, o = t[x()] ?? t.ar ?? t.en ?? Object.values(t).find((n) => typeof n == "string" && n);
    return typeof o == "string" ? o : "";
  }
  return "";
}, y = () => matchMedia("(prefers-reduced-motion: reduce)").matches, v = (e) => e ? `--tf-custom:${e}` : "";
var w = Object.defineProperty, m = (e, t, o, n) => {
  for (var i = void 0, r = e.length - 1, c; r >= 0; r--)
    (c = e[r]) && (i = c(t, o, i) || i);
  return i && w(t, o, i), i;
};
const d = class d extends u {
  constructor() {
    super(...arguments), this.muted = !0;
  }
  render() {
    var i;
    const t = this.config ?? {}, o = (i = navigator.connection) == null ? void 0 : i.saveData, n = (s(t.title) || "أناقة تتحرك معك").split(" ");
    return a`<section class="h" style="min-height:${t.height ?? 85}vh;${v(t.color)}">
      ${t.video && !y() && !o ? a`<video src=${t.video} poster=${t.poster ?? ""} autoplay loop playsinline .muted=${this.muted} preload="metadata"></video>` : t.poster ? a`<img class="po" src=${t.poster} alt="" />` : ""}
      <div class="ov" style="opacity:${(t.overlay ?? 70) / 100}"></div>
      <div class="in">${s(t.eyebrow) ? a`<span class="eyebrow">${s(t.eyebrow)}</span>` : ""}
        <h1>${n.map((r, c) => a`<span style="animation-delay:${0.08 * c}s">${r}&nbsp;</span>`)}</h1>
        ${s(t.subtitle) ? a`<p>${s(t.subtitle)}</p>` : ""}${s(t.button) && t.link ? a`<a class="btn" href=${t.link}>${s(t.button)} ←</a>` : ""}</div>
      ${t.video ? a`<button class="snd" aria-label=${this.muted ? "تشغيل الصوت" : "كتم الصوت"} @click=${() => this.muted = !this.muted}>${this.muted ? "🔇" : "🔊"}</button>` : ""}
    </section>`;
  }
};
d.styles = [g, f`
    .h { position: relative; overflow: hidden; color: #fff; display: grid; align-items: end; background: #0f0c18; }
    video, .po { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .ov { position: absolute; inset: 0; background: linear-gradient(0deg, #000d 0, #0000 65%); }
    .in { position: relative; z-index: 1; max-width: 1240px; width: 100%; margin: 0 auto; padding: clamp(28px, 6vw, 80px) clamp(16px, 4vw, 32px); }
    h1 { margin: 6px 0 12px; font-size: clamp(34px, 6.4vw, 84px); line-height: 1.1; font-weight: 800; max-width: 16ch; }
    h1 span { display: inline-block; opacity: 0; transform: translateY(30px); animation: up .9s cubic-bezier(.2,.8,.2,1) forwards; }
    @keyframes up { to { opacity: 1; transform: none; } }
    p { max-width: 52ch; opacity: .85; font-size: clamp(15px, 1.8vw, 19px); line-height: 1.8; margin: 0 0 24px; animation: up 1s .5s both; }
    .btn { animation: up 1s .7s both; }
    .snd { position: absolute; z-index: 2; bottom: 22px; inset-inline-end: 22px; width: 46px; height: 46px; border-radius: 50%; border: 1px solid #fff6; background: #0005; color: #fff; cursor: pointer; font-size: 18px; backdrop-filter: blur(6px); }
  `];
let p = d;
m([
  h({ type: Object })
], p.prototype, "config");
m([
  b()
], p.prototype, "muted");
typeof p < "u" && p.registerSallaComponent("salla-mirah-video-hero");
export {
  p as default
};
