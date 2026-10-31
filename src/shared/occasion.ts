import { css, html, svg } from 'lit';
/** Occasion presets: palette + ornament. */
export const OCC: Record<string, { bg: string; fg: string; acc: string; label: string; orn: 'lantern' | 'star' | 'palm' | 'geo' | 'tag' }> = {
  ramadan: { bg: 'radial-gradient(900px 500px at 80% -10%, #3b2a6b, transparent 60%), #120d26', fg: '#f6efe0', acc: '#e7c27a', label: 'رمضان كريم', orn: 'lantern' },
  eid: { bg: 'radial-gradient(900px 500px at 20% -10%, #6b2a52, transparent 60%), #1c0f22', fg: '#fff4f8', acc: '#f2c6a0', label: 'عيدكم مبارك', orn: 'star' },
  national: { bg: 'radial-gradient(900px 500px at 80% 0, #0f7a45, transparent 60%), #06331f', fg: '#f2fff7', acc: '#ffffff', label: 'اليوم الوطني', orn: 'palm' },
  founding: { bg: 'radial-gradient(900px 500px at 80% 0, #7a4b22, transparent 60%), #2a170a', fg: '#fbf1e2', acc: '#e3b26a', label: 'يوم التأسيس', orn: 'geo' },
  friday: { bg: 'radial-gradient(900px 500px at 80% 0, #2a2a2a, transparent 60%), #050505', fg: '#ffffff', acc: '#ffffff', label: 'الجمعة البيضاء', orn: 'tag' },
};
export const occ = (k?: unknown) => OCC[String((Array.isArray(k) ? (k[0] as { value?: string })?.value : k) ?? 'ramadan')] ?? OCC.ramadan;
export const occCss = css`
  .occ { position: relative; overflow: hidden; color: var(--o-fg); background: var(--o-bg); }
  .orn { position: absolute; pointer-events: none; color: var(--o-acc); }
  .sway { transform-origin: top center; animation: sway 6s ease-in-out infinite; } @keyframes sway { 50% { transform: rotate(4deg); } }
  .tw { animation: tw 3s ease-in-out infinite; } @keyframes tw { 50% { opacity: .25; transform: scale(.8); } }
  .gold { color: var(--o-acc); }
`;
const lantern = (x: number, h: number, s: number, d: number) => svg`<g transform="translate(${x} 0)"><g class="sway" style="animation-delay:${d}s"><line x1="0" y1="0" x2="0" y2="${h}" stroke="currentColor" stroke-opacity=".5"/>
  <g transform="translate(0 ${h}) scale(${s})"><path d="M-10 0h20l6 10h-32z" fill="currentColor"/><path d="M-16 10h32l-4 40h-24z" fill="currentColor" fill-opacity=".18" stroke="currentColor"/>
  <circle cx="0" cy="30" r="7" fill="currentColor" fill-opacity=".9"><animate attributeName="fill-opacity" values=".9;.4;.9" dur="2.4s" repeatCount="indefinite"/></circle><path d="M-12 50h24l-6 8h-12z" fill="currentColor"/></g></g></g>`;
const star = (x: number, y: number, r: number, d: number) => svg`<path class="tw" style="animation-delay:${d}s;transform-box:fill-box;transform-origin:center" d="M${x} ${y - r}L${x + r * .3} ${y - r * .3}L${x + r} ${y}L${x + r * .3} ${y + r * .3}L${x} ${y + r}L${x - r * .3} ${y + r * .3}L${x - r} ${y}L${x - r * .3} ${y - r * .3}Z" fill="currentColor"/>`;
/** Decorative layer drawn on the side of the section. */
export function ornament(kind: string) {
  const stars = [[40, 300, 6, 0], [120, 230, 4, .6], [230, 330, 5, 1.2], [300, 250, 3, .3], [180, 400, 4, 1.8], [80, 420, 3, 2.2]].map(([x, y, r, d]) => star(x, y, r, d));
  const body = kind === 'lantern' ? svg`${lantern(70, 110, 2.1, 0)}${lantern(170, 210, 1.6, .8)}${lantern(270, 60, 2.4, 1.6)}<path d="M340 250a52 52 0 1 0 0 104a66 66 0 0 1 0-104z" fill="currentColor" opacity=".9"/>${stars}`
    : kind === 'star' ? svg`<path d="M290 120a80 80 0 1 0 0 160a100 100 0 0 1 0-160z" fill="currentColor"/>${stars}${star(250, 120, 10, .4)}${star(110, 160, 8, 1)}`
    : kind === 'palm' ? svg`<g fill="currentColor" opacity=".9"><path d="M200 470c4-80 2-150-6-210h10c6 60 8 130 4 210z"/>${[-70, -35, 0, 35, 70, 110, -110].map((a) => svg`<path transform="rotate(${a} 200 260)" d="M200 260c40-30 90-30 120-10c-40-6-80 0-120 10z"/>`)}</g>
        <g fill="none" stroke="currentColor" stroke-width="5" opacity=".9"><path d="M90 420l200-120" /><path d="M110 300l160 120"/></g>${stars}`
    : kind === 'geo' ? svg`<g fill="none" stroke="currentColor" stroke-opacity=".7">${[0, 1, 2, 3].map((i) => svg`<rect x="${120 + i * 14}" y="${150 + i * 14}" width="${180 - i * 28}" height="${180 - i * 28}" transform="rotate(45 210 240)"/>`)}<circle cx="210" cy="240" r="140" stroke-dasharray="3 7"/></g>${stars}`
    : svg`<g fill="none" stroke="currentColor" stroke-width="3"><path d="M160 140h120l60 60v40l-120 120l-120-120v-100z" fill="currentColor" fill-opacity=".08"/><circle cx="300" cy="180" r="10"/></g><text x="200" y="270" font-size="64" font-weight="900" fill="currentColor" text-anchor="middle">%</text>${stars}`;
  return html`<svg class="orn" viewBox="0 0 400 480" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style="inset-inline-end:2%;top:0;bottom:0;height:100%;width:min(46%,460px);opacity:.95">${body}</svg>`;
}
