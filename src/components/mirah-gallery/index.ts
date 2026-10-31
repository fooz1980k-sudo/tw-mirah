import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { style, txt } from '../../shared/salla';

type Pic = { image?: string; caption?: unknown; link?: string };
/** Masonry gallery with a full-screen lightbox (swipe, arrows, Esc). */
export default class MirahGallery extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; images?: Pic[]; columns?: number; handle?: string; color?: string };
  @state() private open = -1;
  private sx = 0;
  static styles = [base, css`
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
  private imgs() { return (this.config?.images ?? []).filter((i) => i.image); }
  private go(d: number) { const n = this.imgs().length; this.open = (this.open + d + n) % n; }
  private key = (e: KeyboardEvent) => { if (this.open < 0) return; if (e.key === 'Escape') this.open = -1; if (e.key === 'ArrowLeft') this.go(1); if (e.key === 'ArrowRight') this.go(-1); };
  connectedCallback() { super.connectedCallback(); addEventListener('keydown', this.key); }
  disconnectedCallback() { super.disconnectedCallback(); removeEventListener('keydown', this.key); }
  render() {
    const c = this.config ?? {}; const imgs = this.imgs(); const cur = imgs[this.open];
    return html`<div class="wrap" style="--cols:${c.columns ?? 3};${style(c.color)}"><div class="hd"><div><span class="eyebrow">📸 من عالمنا</span>${txt(c.title) ? html`<h2 class="title">${txt(c.title)}</h2>` : ''}${txt(c.subtitle) ? html`<p class="sub">${txt(c.subtitle)}</p>` : ''}</div>
        ${c.handle ? html`<a href=${c.handle} target="_blank" rel="noopener">تابعنا ←</a>` : ''}</div>
      <div class="m">${imgs.map((p, i) => html`<button @click=${() => (this.open = i)} aria-label="تكبير الصورة ${i + 1}"><img src=${p.image} alt=${txt(p.caption)} loading="lazy" />${txt(p.caption) ? html`<small>${txt(p.caption)}</small>` : ''}</button>`)}</div>
      ${cur ? html`<div class="lb" role="dialog" aria-modal="true" @click=${(e: Event) => e.target === e.currentTarget && (this.open = -1)}
          @touchstart=${(e: TouchEvent) => (this.sx = e.touches[0].clientX)} @touchend=${(e: TouchEvent) => { const d = e.changedTouches[0].clientX - this.sx; if (Math.abs(d) > 50) this.go(d < 0 ? 1 : -1); }}>
        <div><img src=${cur.image} alt=${txt(cur.caption)} />${txt(cur.caption) || cur.link ? html`<p>${txt(cur.caption)} ${cur.link ? html`<a href=${cur.link}>تسوّق ←</a>` : ''}</p>` : ''}</div>
        <span class="ct">${this.open + 1} / ${imgs.length}</span><button class="nv cl" aria-label="إغلاق" @click=${() => (this.open = -1)}>×</button>
        <button class="nv" style="right:18px" aria-label="السابق" @click=${() => this.go(-1)}>›</button><button class="nv" style="left:18px" aria-label="التالي" @click=${() => this.go(1)}>‹</button></div>` : ''}</div>`;
  }
}
