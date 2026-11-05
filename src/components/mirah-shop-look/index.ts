import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { base } from '../../shared/styles';
import { addToCart, money, Prod, products, style, toast, localizedString } from '../../shared/salla';

/** "Complete the look": one hero image + the pieces, each toggleable, with a live total and one-tap add-all. */
export default class MirahShopLook extends LitElement {
  @property({ type: Object }) config?: { title?: unknown; subtitle?: unknown; image?: string; products?: unknown; note?: unknown; color?: string };
  @state() private list: Prod[] | null = null;
  @state() private off = new Set<number>();
  @state() private busy = false;
  private seq = 0;
  static styles = [base, css`
    .g { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(20px, 4vw, 48px); align-items: stretch; }
    @media (max-width: 860px) { .g { grid-template-columns: 1fr; } }
    .hero { border-radius: 28px; overflow: hidden; min-height: 420px; position: relative; } .hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
    .it { display: grid; grid-template-columns: 26px 84px 1fr auto; gap: 14px; align-items: center; padding: 12px; border-radius: 18px; border: 1px solid #00000010; background: #fff; margin-bottom: 10px; transition: opacity .3s, border-color .3s; cursor: pointer; }
    .it.off { opacity: .45; } .it:not(.off) { border-color: color-mix(in srgb, var(--tf-accent) 45%, transparent); }
    .it img { width: 84px; height: 84px; object-fit: cover; border-radius: 14px; } .it a { color: inherit; text-decoration: none; font-weight: 700; font-size: 15px; }
    .it b { color: var(--tf-accent); white-space: nowrap; } input { width: 20px; height: 20px; accent-color: var(--tf-accent); }
    .sum { margin-top: 16px; padding: 18px; border-radius: 20px; display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
    .sum b { font-size: 24px; } .sum s { opacity: .5; margin-inline-start: 8px; } .sv { color: #7ee2a8; font-size: 13px; display: block; }
  `];
  willUpdate(ch: Map<string, unknown>) { if (ch.has('config')) { const n = ++this.seq; this.list = null; products(this.config?.products).then((l) => { if (n === this.seq) this.list = l; }); } }
  private toggle(id: number) { const s = new Set(this.off); s.has(id) ? s.delete(id) : s.add(id); this.off = s; }
  private async addAll(sel: Prod[]) { this.busy = true; for (const p of sel) await addToCart(p.id); this.busy = false; toast(`أُضيفت ${sel.length} قطع للسلة ✓`); }
  render() {
    const c = this.config ?? {}; const list = this.list ?? []; const sel = list.filter((p) => p.available && !this.off.has(p.id));
    const tot = sel.reduce((a, p) => a + p.price, 0), reg = sel.reduce((a, p) => a + p.regular, 0);
    return html`<div class="wrap" style=${style(c.color)}><span class="eyebrow">👗 أكمل الإطلالة</span><h2 class="title">${localizedString(c.title) || 'الإطلالة كاملة'}</h2>${localizedString(c.subtitle) ? html`<p class="sub">${localizedString(c.subtitle)}</p>` : ''}
      <div class="g">${c.image ? html`<div class="hero"><img src=${c.image} alt="" loading="lazy" /></div>` : ''}
        <div>${this.list === null ? html`<div class="skel" style="height:320px"></div>` : list.map((p) => html`<label class="it ${this.off.has(p.id) || !p.available ? 'off' : ''}">
            <input type="checkbox" .checked=${p.available && !this.off.has(p.id)} ?disabled=${!p.available} @change=${() => this.toggle(p.id)} />
            <img src=${p.image} alt="" loading="lazy" /><a href=${p.url} @click=${(e: Event) => e.stopPropagation()}>${p.name}${p.available ? '' : html` <small>(غير متوفر)</small>`}</a><b>${money(p.price)}</b></label>`)}
          <div class="sum dark"><div>المجموع (${sel.length} قطع)<br /><b>${money(tot)}</b>${reg > tot ? html`<s>${money(reg)}</s><span class="sv">وفّرت ${money(reg - tot)}</span>` : ''}${localizedString(c.note) ? html`<span class="sv">${localizedString(c.note)}</span>` : ''}</div>
            <button class="btn" ?disabled=${!sel.length || this.busy} @click=${() => this.addAll(sel)}>${this.busy ? 'جاري الإضافة…' : 'أضف الإطلالة للسلة'}</button></div></div></div></div>`;
  }
}
