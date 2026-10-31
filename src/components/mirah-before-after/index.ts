import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { style, txt } from '../../shared/salla';

/** Draggable before/after comparison (mouse, touch and keyboard). */
export default class MirahBeforeAfter extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; before?: string; after?: string; before_label?: unknown; after_label?: unknown; button?: unknown; link?: string; color?: string };
  @state() private pos = 50;
  static styles = [base, css`
    .cmp { position: relative; border-radius: 28px; overflow: hidden; aspect-ratio: 16/9; user-select: none; touch-action: pan-y; cursor: ew-resize; background: #ddd; }
    @media (max-width: 600px) { .cmp { aspect-ratio: 4/5; } }
    .cmp img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; pointer-events: none; }
    .top { position: absolute; inset: 0; } .h { position: absolute; top: 0; bottom: 0; width: 3px; margin-inline-start: -1.5px; background: #fff; box-shadow: 0 0 20px #0006; }
    .k { position: absolute; top: 50%; left: 50%; width: 56px; height: 56px; transform: translate(-50%, -50%); border-radius: 50%; background: #fff; color: #1b1408; display: grid; place-items: center; font-size: 20px; box-shadow: 0 10px 30px #0005; outline: none; }
    .k:focus-visible { box-shadow: 0 0 0 4px var(--tf-accent); }
    .lb { position: absolute; bottom: 18px; padding: 8px 16px; border-radius: 99px; background: #0009; color: #fff; font-size: 14px; font-weight: 700; backdrop-filter: blur(6px); }
    .foot { margin-top: 20px; text-align: center; }
  `];
  private set(e: PointerEvent) { const r = this.renderRoot.querySelector('.cmp')!.getBoundingClientRect(); this.pos = Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)); }
  private down = (e: PointerEvent) => { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); this.set(e); };
  private move = (e: PointerEvent) => { if ((e.currentTarget as HTMLElement).hasPointerCapture(e.pointerId)) this.set(e); };
  private key = (e: KeyboardEvent) => { if (e.key === 'ArrowLeft') this.pos = Math.max(0, this.pos - 5); if (e.key === 'ArrowRight') this.pos = Math.min(100, this.pos + 5); };
  render() {
    const c = this.config ?? {};
    if (!c.before || !c.after) return html`<div class="wrap"><p class="sub">أضف صورة «قبل» وصورة «بعد» من إعدادات العنصر.</p></div>`;
    return html`<div class="wrap" style=${style(c.color)}><span class="eyebrow">↔ الفرق واضح</span>${txt(c.title) ? html`<h2 class="title">${txt(c.title)}</h2>` : ''}${txt(c.subtitle) ? html`<p class="sub">${txt(c.subtitle)}</p>` : ''}
      <div class="cmp" dir="ltr" @pointerdown=${this.down} @pointermove=${this.move}>
        <img src=${c.after} alt=${txt(c.after_label) || 'بعد'} />
        <div class="top" style="clip-path:inset(0 ${100 - this.pos}% 0 0)"><img src=${c.before} alt=${txt(c.before_label) || 'قبل'} /></div>
        <span class="lb" style="left:18px">${txt(c.before_label) || 'قبل'}</span><span class="lb" style="right:18px">${txt(c.after_label) || 'بعد'}</span>
        <div class="h" style="left:${this.pos}%"><div class="k" tabindex="0" role="slider" aria-label="اسحب للمقارنة" aria-valuenow=${Math.round(this.pos)} aria-valuemin="0" aria-valuemax="100" @keydown=${this.key}>⇆</div></div></div>
      ${txt(c.button) && c.link ? html`<div class="foot"><a class="btn" href=${c.link}>${txt(c.button)} ←</a></div>` : ''}</div>`;
  }
}
