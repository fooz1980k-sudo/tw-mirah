import { css, html } from 'lit';
import { addToCart, money, Prod, toast } from './salla';
/** Shared luxury product card (used across bundles). */
export const cardCss = css`
  .pc { display: flex; flex-direction: column; border-radius: 20px; overflow: hidden; background: #fff; color: #1b1408; border: 1px solid #0000000d; transition: transform .35s, box-shadow .35s; position: relative; }
  .pc:hover { transform: translateY(-6px); box-shadow: 0 24px 50px -24px #0006; }
  .pc .ph { aspect-ratio: 1; overflow: hidden; background: #f3eee4; display: block; } .pc .ph img { width: 100%; height: 100%; object-fit: cover; transition: transform .8s; }
  .pc:hover .ph img { transform: scale(1.07); }
  .pc .bd { padding: 14px 14px 16px; display: grid; gap: 6px; flex: 1; }
  .pc .nm { font-weight: 700; font-size: 15px; line-height: 1.5; color: inherit; text-decoration: none; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .pc .pr { display: flex; gap: 8px; align-items: baseline; flex-wrap: wrap; } .pc .pr b { color: var(--tf-accent); font-size: 17px; } .pc .pr s { opacity: .45; font-size: 13px; }
  .pc .add { margin-top: auto; justify-content: center; padding: 10px 16px; font-size: 14px; }
  .pc .add[disabled] { opacity: .45; cursor: not-allowed; transform: none; box-shadow: none; }
  .pc .tag { position: absolute; top: 12px; inset-inline-start: 12px; z-index: 1; font-size: 12px; font-weight: 800; padding: 5px 10px; border-radius: 999px; background: var(--tf-accent); color: #fff; }
`;
export const card = (p: Prod, tag = '') => html`<article class="pc">${tag ? html`<span class="tag">${tag}</span>` : ''}
  <a class="ph" href=${p.url}><img src=${p.image} alt=${p.name} loading="lazy" /></a>
  <div class="bd"><a class="nm" href=${p.url}>${p.name}</a>
    <div class="pr"><b>${money(p.price)}</b>${p.regular > p.price ? html`<s>${money(p.regular)}</s>` : ''}</div>
    <button class="btn add" ?disabled=${!p.available} @click=${async () => { await addToCart(p.id); toast('أُضيف للسلة ✓'); }}>${p.available ? 'أضف للسلة' : 'غير متوفر'}</button></div></article>`;
export const skel = (n = 4) => html`${Array.from({ length: n }, () => html`<div class="skel" style="aspect-ratio:.72"></div>`)}`;
