import { LitElement } from 'lit';
LitElement.registerSallaComponent = function (n) { if (!customElements.get(n)) customElements.define(n, this); };
await import('../dist/mirah-lookbook.js');
await import('../dist/mirah-before-after.js');
await import('../dist/mirah-video-hero.js');
await import('../dist/mirah-gallery.js');
await import('../dist/mirah-shop-look.js');
window.__ready = true;
