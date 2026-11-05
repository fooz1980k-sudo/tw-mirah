import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { addToCart, ids, money, Prod, products, style, toast, localizedString } from '../../shared/salla';

type Spot = { x?: number; y?: number; product?: unknown };
/** Shoppable photo: pulsing hotspots on the image open a live product card with add-to-cart. */
export default class MirahLookbook extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; image?: string; spots?: Spot[]; color?: string };
  @state() private map = new Map<number, Prod>();
  @state() private active = -1;
  private seq = 0;
  static styles = [base, css`
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
  willUpdate(ch: Map<string, unknown>) {
    if (!ch.has('config')) return; const n = ++this.seq;
    const sel = (this.config?.spots ?? []).flatMap((s) => ids(s.product).slice(0, 1));
    products(sel.map((value) => ({ value }))).then((l) => { if (n === this.seq) this.map = new Map(l.map((p) => [p.id, p])); });
  }
  private card(s: Spot, i: number) {
    const p = this.map.get(ids(s.product)[0]); if (!p) return '';
    const x = Number(s.x ?? 50), y = Number(s.y ?? 50);
    const pos = `${x > 60 ? `right:${100 - x + 4}%` : `left:${x + 4}%`};top:${Math.min(y, 70)}%`;
    return html`<div class="pop" style=${pos} role="dialog" aria-label=${p.name}><button class="x" aria-label="إغلاق" @click=${() => (this.active = -1)}>×</button>
      <img src=${p.image} alt="" /><div><a href=${p.url}>${p.name}</a><b>${money(p.price)}</b>
      <button class="btn" ?disabled=${!p.available} @click=${async () => { await addToCart(p.id); toast('أُضيف للسلة ✓'); }}>${p.available ? 'أضف للسلة' : 'غير متوفر'}</button></div></div>`;
  }
  render() {
    const c = this.config ?? {}; const spots = c.spots ?? [];
    if (!c.image) return html`<div class="wrap"><p class="sub">أضف صورة الإطلالة ونقاط المنتجات من إعدادات العنصر.</p></div>`;
    return html`<div class="wrap" style=${style(c.color)}><span class="eyebrow">✨ تسوّق الإطلالة</span>${localizedString(c.title) ? html`<h2 class="title">${localizedString(c.title)}</h2>` : ''}${localizedString(c.subtitle) ? html`<p class="sub">${localizedString(c.subtitle)}</p>` : ''}
      <div class="stage"><div class="pic"><img src=${c.image} alt=${localizedString(c.title)} />
        ${spots.map((s, i) => this.map.get(ids(s.product)[0]) ? html`<button class="dot ${this.active === i ? 'on' : ''}" style="left:${s.x ?? 50}%;top:${s.y ?? 50}%" aria-label="عرض المنتج ${i + 1}" @click=${() => (this.active = this.active === i ? -1 : i)}>+</button>` : '')}</div>
        ${this.active >= 0 && spots[this.active] ? this.card(spots[this.active], this.active) : ''}</div>
      <div class="list">${spots.map((s, i) => { const p = this.map.get(ids(s.product)[0]); return p ? html`<button class="chip ${this.active === i ? 'on' : ''}" @click=${() => (this.active = i)}>${p.name}</button>` : ''; })}</div></div>`;
  }
}
