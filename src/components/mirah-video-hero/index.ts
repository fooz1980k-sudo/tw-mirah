import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { reduced, style, localizedString } from '../../shared/salla';

/** Full-bleed muted video hero with a cinematic text reveal; falls back to the poster when motion is reduced or data saver is on. */
export default class MirahVideoHero extends LitElement {
  @property({ type: Object }) config?: { video?: string; poster?: string; eyebrow?: unknown; title?: unknown; subtitle?: unknown; button?: unknown; link?: string; height?: number; overlay?: number; color?: string };
  @state() private muted = true;
  static styles = [base, css`
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
  render() {
    const c = this.config ?? {}; const save = (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData;
    const words = (localizedString(c.title) || 'أناقة تتحرك معك').split(' ');
    return html`<section class="h" style="min-height:${c.height ?? 85}vh;${style(c.color)}">
      ${c.video && !reduced() && !save ? html`<video src=${c.video} poster=${c.poster ?? ''} autoplay loop playsinline .muted=${this.muted} preload="metadata"></video>` : c.poster ? html`<img class="po" src=${c.poster} alt="" />` : ''}
      <div class="ov" style="opacity:${(c.overlay ?? 70) / 100}"></div>
      <div class="in">${localizedString(c.eyebrow) ? html`<span class="eyebrow">${localizedString(c.eyebrow)}</span>` : ''}
        <h1>${words.map((w, i) => html`<span style="animation-delay:${0.08 * i}s">${w}&nbsp;</span>`)}</h1>
        ${localizedString(c.subtitle) ? html`<p>${localizedString(c.subtitle)}</p>` : ''}${localizedString(c.button) && c.link ? html`<a class="btn" href=${c.link}>${localizedString(c.button)} ←</a>` : ''}</div>
      ${c.video ? html`<button class="snd" aria-label=${this.muted ? 'تشغيل الصوت' : 'كتم الصوت'} @click=${() => (this.muted = !this.muted)}>${this.muted ? '🔇' : '🔊'}</button>` : ''}
    </section>`;
  }
}
