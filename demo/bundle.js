var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js
var t, e, s, o, n, r, i, S, c;
var init_css_tag = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/css-tag.js"() {
    t = globalThis;
    e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    s = Symbol();
    o = /* @__PURE__ */ new WeakMap();
    n = class {
      constructor(t3, e5, o7) {
        if (this._$cssResult$ = true, o7 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3, this.t = e5;
      }
      get styleSheet() {
        let t3 = this.o;
        const s5 = this.t;
        if (e && void 0 === t3) {
          const e5 = void 0 !== s5 && 1 === s5.length;
          e5 && (t3 = o.get(s5)), void 0 === t3 && ((this.o = t3 = new CSSStyleSheet()).replaceSync(this.cssText), e5 && o.set(s5, t3));
        }
        return t3;
      }
      toString() {
        return this.cssText;
      }
    };
    r = (t3) => new n("string" == typeof t3 ? t3 : t3 + "", void 0, s);
    i = (t3, ...e5) => {
      const o7 = 1 === t3.length ? t3[0] : e5.reduce((e6, s5, o8) => e6 + ((t4) => {
        if (true === t4._$cssResult$) return t4.cssText;
        if ("number" == typeof t4) return t4;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(s5) + t3[o8 + 1], t3[0]);
      return new n(o7, t3, s);
    };
    S = (s5, o7) => {
      if (e) s5.adoptedStyleSheets = o7.map((t3) => t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet);
      else for (const e5 of o7) {
        const o8 = document.createElement("style"), n6 = t.litNonce;
        void 0 !== n6 && o8.setAttribute("nonce", n6), o8.textContent = e5.cssText, s5.appendChild(o8);
      }
    };
    c = e ? (t3) => t3 : (t3) => t3 instanceof CSSStyleSheet ? ((t4) => {
      let e5 = "";
      for (const s5 of t4.cssRules) e5 += s5.cssText;
      return r(e5);
    })(t3) : t3;
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js
var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
var init_reactive_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/reactive-element.js"() {
    init_css_tag();
    init_css_tag();
    ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
    a = globalThis;
    c2 = a.trustedTypes;
    l = c2 ? c2.emptyScript : "";
    p = a.reactiveElementPolyfillSupport;
    d = (t3, s5) => t3;
    u = { toAttribute(t3, s5) {
      switch (s5) {
        case Boolean:
          t3 = t3 ? l : null;
          break;
        case Object:
        case Array:
          t3 = null == t3 ? t3 : JSON.stringify(t3);
      }
      return t3;
    }, fromAttribute(t3, s5) {
      let i6 = t3;
      switch (s5) {
        case Boolean:
          i6 = null !== t3;
          break;
        case Number:
          i6 = null === t3 ? null : Number(t3);
          break;
        case Object:
        case Array:
          try {
            i6 = JSON.parse(t3);
          } catch (t4) {
            i6 = null;
          }
      }
      return i6;
    } };
    f = (t3, s5) => !i2(t3, s5);
    b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
    Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
    y = class extends HTMLElement {
      static addInitializer(t3) {
        this._$Ei(), (this.l ??= []).push(t3);
      }
      static get observedAttributes() {
        return this.finalize(), this._$Eh && [...this._$Eh.keys()];
      }
      static createProperty(t3, s5 = b) {
        if (s5.state && (s5.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t3) && ((s5 = Object.create(s5)).wrapped = true), this.elementProperties.set(t3, s5), !s5.noAccessor) {
          const i6 = Symbol(), h3 = this.getPropertyDescriptor(t3, i6, s5);
          void 0 !== h3 && e2(this.prototype, t3, h3);
        }
      }
      static getPropertyDescriptor(t3, s5, i6) {
        const { get: e5, set: r7 } = h(this.prototype, t3) ?? { get() {
          return this[s5];
        }, set(t4) {
          this[s5] = t4;
        } };
        return { get: e5, set(s6) {
          const h3 = e5?.call(this);
          r7?.call(this, s6), this.requestUpdate(t3, h3, i6);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) ?? b;
      }
      static _$Ei() {
        if (this.hasOwnProperty(d("elementProperties"))) return;
        const t3 = n2(this);
        t3.finalize(), void 0 !== t3.l && (this.l = [...t3.l]), this.elementProperties = new Map(t3.elementProperties);
      }
      static finalize() {
        if (this.hasOwnProperty(d("finalized"))) return;
        if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
          const t4 = this.properties, s5 = [...r2(t4), ...o2(t4)];
          for (const i6 of s5) this.createProperty(i6, t4[i6]);
        }
        const t3 = this[Symbol.metadata];
        if (null !== t3) {
          const s5 = litPropertyMetadata.get(t3);
          if (void 0 !== s5) for (const [t4, i6] of s5) this.elementProperties.set(t4, i6);
        }
        this._$Eh = /* @__PURE__ */ new Map();
        for (const [t4, s5] of this.elementProperties) {
          const i6 = this._$Eu(t4, s5);
          void 0 !== i6 && this._$Eh.set(i6, t4);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
      }
      static finalizeStyles(s5) {
        const i6 = [];
        if (Array.isArray(s5)) {
          const e5 = new Set(s5.flat(1 / 0).reverse());
          for (const s6 of e5) i6.unshift(c(s6));
        } else void 0 !== s5 && i6.push(c(s5));
        return i6;
      }
      static _$Eu(t3, s5) {
        const i6 = s5.attribute;
        return false === i6 ? void 0 : "string" == typeof i6 ? i6 : "string" == typeof t3 ? t3.toLowerCase() : void 0;
      }
      constructor() {
        super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
      }
      _$Ev() {
        this._$ES = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t3) => t3(this));
      }
      addController(t3) {
        (this._$EO ??= /* @__PURE__ */ new Set()).add(t3), void 0 !== this.renderRoot && this.isConnected && t3.hostConnected?.();
      }
      removeController(t3) {
        this._$EO?.delete(t3);
      }
      _$E_() {
        const t3 = /* @__PURE__ */ new Map(), s5 = this.constructor.elementProperties;
        for (const i6 of s5.keys()) this.hasOwnProperty(i6) && (t3.set(i6, this[i6]), delete this[i6]);
        t3.size > 0 && (this._$Ep = t3);
      }
      createRenderRoot() {
        const t3 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return S(t3, this.constructor.elementStyles), t3;
      }
      connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t3) => t3.hostConnected?.());
      }
      enableUpdating(t3) {
      }
      disconnectedCallback() {
        this._$EO?.forEach((t3) => t3.hostDisconnected?.());
      }
      attributeChangedCallback(t3, s5, i6) {
        this._$AK(t3, i6);
      }
      _$ET(t3, s5) {
        const i6 = this.constructor.elementProperties.get(t3), e5 = this.constructor._$Eu(t3, i6);
        if (void 0 !== e5 && true === i6.reflect) {
          const h3 = (void 0 !== i6.converter?.toAttribute ? i6.converter : u).toAttribute(s5, i6.type);
          this._$Em = t3, null == h3 ? this.removeAttribute(e5) : this.setAttribute(e5, h3), this._$Em = null;
        }
      }
      _$AK(t3, s5) {
        const i6 = this.constructor, e5 = i6._$Eh.get(t3);
        if (void 0 !== e5 && this._$Em !== e5) {
          const t4 = i6.getPropertyOptions(e5), h3 = "function" == typeof t4.converter ? { fromAttribute: t4.converter } : void 0 !== t4.converter?.fromAttribute ? t4.converter : u;
          this._$Em = e5;
          const r7 = h3.fromAttribute(s5, t4.type);
          this[e5] = r7 ?? this._$Ej?.get(e5) ?? r7, this._$Em = null;
        }
      }
      requestUpdate(t3, s5, i6, e5 = false, h3) {
        if (void 0 !== t3) {
          const r7 = this.constructor;
          if (false === e5 && (h3 = this[t3]), i6 ??= r7.getPropertyOptions(t3), !((i6.hasChanged ?? f)(h3, s5) || i6.useDefault && i6.reflect && h3 === this._$Ej?.get(t3) && !this.hasAttribute(r7._$Eu(t3, i6)))) return;
          this.C(t3, s5, i6);
        }
        false === this.isUpdatePending && (this._$ES = this._$EP());
      }
      C(t3, s5, { useDefault: i6, reflect: e5, wrapped: h3 }, r7) {
        i6 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t3) && (this._$Ej.set(t3, r7 ?? s5 ?? this[t3]), true !== h3 || void 0 !== r7) || (this._$AL.has(t3) || (this.hasUpdated || i6 || (s5 = void 0), this._$AL.set(t3, s5)), true === e5 && this._$Em !== t3 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t3));
      }
      async _$EP() {
        this.isUpdatePending = true;
        try {
          await this._$ES;
        } catch (t4) {
          Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return null != t3 && await t3, !this.isUpdatePending;
      }
      scheduleUpdate() {
        return this.performUpdate();
      }
      performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
          if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
            for (const [t5, s6] of this._$Ep) this[t5] = s6;
            this._$Ep = void 0;
          }
          const t4 = this.constructor.elementProperties;
          if (t4.size > 0) for (const [s6, i6] of t4) {
            const { wrapped: t5 } = i6, e5 = this[s6];
            true !== t5 || this._$AL.has(s6) || void 0 === e5 || this.C(s6, void 0, i6, e5);
          }
        }
        let t3 = false;
        const s5 = this._$AL;
        try {
          t3 = this.shouldUpdate(s5), t3 ? (this.willUpdate(s5), this._$EO?.forEach((t4) => t4.hostUpdate?.()), this.update(s5)) : this._$EM();
        } catch (s6) {
          throw t3 = false, this._$EM(), s6;
        }
        t3 && this._$AE(s5);
      }
      willUpdate(t3) {
      }
      _$AE(t3) {
        this._$EO?.forEach((t4) => t4.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
      }
      _$EM() {
        this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this._$ES;
      }
      shouldUpdate(t3) {
        return true;
      }
      update(t3) {
        this._$Eq &&= this._$Eq.forEach((t4) => this._$ET(t4, this[t4])), this._$EM();
      }
      updated(t3) {
      }
      firstUpdated(t3) {
      }
    };
    y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js
function V(t3, i6) {
  if (!u2(t3) || !t3.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i6) : i6;
}
function M(t3, i6, s5 = t3, e5) {
  if (i6 === E) return i6;
  let h3 = void 0 !== e5 ? s5._$Co?.[e5] : s5._$Cl;
  const o7 = a2(i6) ? void 0 : i6._$litDirective$;
  return h3?.constructor !== o7 && (h3?._$AO?.(false), void 0 === o7 ? h3 = void 0 : (h3 = new o7(t3), h3._$AT(t3, s5, e5)), void 0 !== e5 ? (s5._$Co ??= [])[e5] = h3 : s5._$Cl = h3), void 0 !== h3 && (i6 = M(t3, h3._$AS(t3, i6.values), h3, e5)), i6;
}
var t2, i3, s2, e3, h2, o3, n3, r3, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, P, N, S2, R, k, H, I, L, z, Z, B, D;
var init_lit_html = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/lit-html.js"() {
    t2 = globalThis;
    i3 = (t3) => t3;
    s2 = t2.trustedTypes;
    e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t3) => t3 }) : void 0;
    h2 = "$lit$";
    o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
    n3 = "?" + o3;
    r3 = `<${n3}>`;
    l2 = document;
    c3 = () => l2.createComment("");
    a2 = (t3) => null === t3 || "object" != typeof t3 && "function" != typeof t3;
    u2 = Array.isArray;
    d2 = (t3) => u2(t3) || "function" == typeof t3?.[Symbol.iterator];
    f2 = "[ 	\n\f\r]";
    v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    _ = /-->/g;
    m = />/g;
    p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
    g = /'/g;
    $ = /"/g;
    y2 = /^(?:script|style|textarea|title)$/i;
    x = (t3) => (i6, ...s5) => ({ _$litType$: t3, strings: i6, values: s5 });
    b2 = x(1);
    w = x(2);
    T = x(3);
    E = Symbol.for("lit-noChange");
    A = Symbol.for("lit-nothing");
    C = /* @__PURE__ */ new WeakMap();
    P = l2.createTreeWalker(l2, 129);
    N = (t3, i6) => {
      const s5 = t3.length - 1, e5 = [];
      let n6, l6 = 2 === i6 ? "<svg>" : 3 === i6 ? "<math>" : "", c6 = v;
      for (let i7 = 0; i7 < s5; i7++) {
        const s6 = t3[i7];
        let a4, u7, d7 = -1, f7 = 0;
        for (; f7 < s6.length && (c6.lastIndex = f7, u7 = c6.exec(s6), null !== u7); ) f7 = c6.lastIndex, c6 === v ? "!--" === u7[1] ? c6 = _ : void 0 !== u7[1] ? c6 = m : void 0 !== u7[2] ? (y2.test(u7[2]) && (n6 = RegExp("</" + u7[2], "g")), c6 = p2) : void 0 !== u7[3] && (c6 = p2) : c6 === p2 ? ">" === u7[0] ? (c6 = n6 ?? v, d7 = -1) : void 0 === u7[1] ? d7 = -2 : (d7 = c6.lastIndex - u7[2].length, a4 = u7[1], c6 = void 0 === u7[3] ? p2 : '"' === u7[3] ? $ : g) : c6 === $ || c6 === g ? c6 = p2 : c6 === _ || c6 === m ? c6 = v : (c6 = p2, n6 = void 0);
        const x6 = c6 === p2 && t3[i7 + 1].startsWith("/>") ? " " : "";
        l6 += c6 === v ? s6 + r3 : d7 >= 0 ? (e5.push(a4), s6.slice(0, d7) + h2 + s6.slice(d7) + o3 + x6) : s6 + o3 + (-2 === d7 ? i7 : x6);
      }
      return [V(t3, l6 + (t3[s5] || "<?>") + (2 === i6 ? "</svg>" : 3 === i6 ? "</math>" : "")), e5];
    };
    S2 = class _S {
      constructor({ strings: t3, _$litType$: i6 }, e5) {
        let r7;
        this.parts = [];
        let l6 = 0, a4 = 0;
        const u7 = t3.length - 1, d7 = this.parts, [f7, v4] = N(t3, i6);
        if (this.el = _S.createElement(f7, e5), P.currentNode = this.el.content, 2 === i6 || 3 === i6) {
          const t4 = this.el.content.firstChild;
          t4.replaceWith(...t4.childNodes);
        }
        for (; null !== (r7 = P.nextNode()) && d7.length < u7; ) {
          if (1 === r7.nodeType) {
            if (r7.hasAttributes()) for (const t4 of r7.getAttributeNames()) if (t4.endsWith(h2)) {
              const i7 = v4[a4++], s5 = r7.getAttribute(t4).split(o3), e6 = /([.?@])?(.*)/.exec(i7);
              d7.push({ type: 1, index: l6, name: e6[2], strings: s5, ctor: "." === e6[1] ? I : "?" === e6[1] ? L : "@" === e6[1] ? z : H }), r7.removeAttribute(t4);
            } else t4.startsWith(o3) && (d7.push({ type: 6, index: l6 }), r7.removeAttribute(t4));
            if (y2.test(r7.tagName)) {
              const t4 = r7.textContent.split(o3), i7 = t4.length - 1;
              if (i7 > 0) {
                r7.textContent = s2 ? s2.emptyScript : "";
                for (let s5 = 0; s5 < i7; s5++) r7.append(t4[s5], c3()), P.nextNode(), d7.push({ type: 2, index: ++l6 });
                r7.append(t4[i7], c3());
              }
            }
          } else if (8 === r7.nodeType) if (r7.data === n3) d7.push({ type: 2, index: l6 });
          else {
            let t4 = -1;
            for (; -1 !== (t4 = r7.data.indexOf(o3, t4 + 1)); ) d7.push({ type: 7, index: l6 }), t4 += o3.length - 1;
          }
          l6++;
        }
      }
      static createElement(t3, i6) {
        const s5 = l2.createElement("template");
        return s5.innerHTML = t3, s5;
      }
    };
    R = class {
      constructor(t3, i6) {
        this._$AV = [], this._$AN = void 0, this._$AD = t3, this._$AM = i6;
      }
      get parentNode() {
        return this._$AM.parentNode;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      u(t3) {
        const { el: { content: i6 }, parts: s5 } = this._$AD, e5 = (t3?.creationScope ?? l2).importNode(i6, true);
        P.currentNode = e5;
        let h3 = P.nextNode(), o7 = 0, n6 = 0, r7 = s5[0];
        for (; void 0 !== r7; ) {
          if (o7 === r7.index) {
            let i7;
            2 === r7.type ? i7 = new k(h3, h3.nextSibling, this, t3) : 1 === r7.type ? i7 = new r7.ctor(h3, r7.name, r7.strings, this, t3) : 6 === r7.type && (i7 = new Z(h3, this, t3)), this._$AV.push(i7), r7 = s5[++n6];
          }
          o7 !== r7?.index && (h3 = P.nextNode(), o7++);
        }
        return P.currentNode = l2, e5;
      }
      p(t3) {
        let i6 = 0;
        for (const s5 of this._$AV) void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t3, s5, i6), i6 += s5.strings.length - 2) : s5._$AI(t3[i6])), i6++;
      }
    };
    k = class _k {
      get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
      }
      constructor(t3, i6, s5, e5) {
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t3, this._$AB = i6, this._$AM = s5, this.options = e5, this._$Cv = e5?.isConnected ?? true;
      }
      get parentNode() {
        let t3 = this._$AA.parentNode;
        const i6 = this._$AM;
        return void 0 !== i6 && 11 === t3?.nodeType && (t3 = i6.parentNode), t3;
      }
      get startNode() {
        return this._$AA;
      }
      get endNode() {
        return this._$AB;
      }
      _$AI(t3, i6 = this) {
        t3 = M(this, t3, i6), a2(t3) ? t3 === A || null == t3 || "" === t3 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t3 !== this._$AH && t3 !== E && this._(t3) : void 0 !== t3._$litType$ ? this.$(t3) : void 0 !== t3.nodeType ? this.T(t3) : d2(t3) ? this.k(t3) : this._(t3);
      }
      O(t3) {
        return this._$AA.parentNode.insertBefore(t3, this._$AB);
      }
      T(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.O(t3));
      }
      _(t3) {
        this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t3 : this.T(l2.createTextNode(t3)), this._$AH = t3;
      }
      $(t3) {
        const { values: i6, _$litType$: s5 } = t3, e5 = "number" == typeof s5 ? this._$AC(t3) : (void 0 === s5.el && (s5.el = S2.createElement(V(s5.h, s5.h[0]), this.options)), s5);
        if (this._$AH?._$AD === e5) this._$AH.p(i6);
        else {
          const t4 = new R(e5, this), s6 = t4.u(this.options);
          t4.p(i6), this.T(s6), this._$AH = t4;
        }
      }
      _$AC(t3) {
        let i6 = C.get(t3.strings);
        return void 0 === i6 && C.set(t3.strings, i6 = new S2(t3)), i6;
      }
      k(t3) {
        u2(this._$AH) || (this._$AH = [], this._$AR());
        const i6 = this._$AH;
        let s5, e5 = 0;
        for (const h3 of t3) e5 === i6.length ? i6.push(s5 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s5 = i6[e5], s5._$AI(h3), e5++;
        e5 < i6.length && (this._$AR(s5 && s5._$AB.nextSibling, e5), i6.length = e5);
      }
      _$AR(t3 = this._$AA.nextSibling, s5) {
        for (this._$AP?.(false, true, s5); t3 !== this._$AB; ) {
          const s6 = i3(t3).nextSibling;
          i3(t3).remove(), t3 = s6;
        }
      }
      setConnected(t3) {
        void 0 === this._$AM && (this._$Cv = t3, this._$AP?.(t3));
      }
    };
    H = class {
      get tagName() {
        return this.element.tagName;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      constructor(t3, i6, s5, e5, h3) {
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t3, this.name = i6, this._$AM = e5, this.options = h3, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = A;
      }
      _$AI(t3, i6 = this, s5, e5) {
        const h3 = this.strings;
        let o7 = false;
        if (void 0 === h3) t3 = M(this, t3, i6, 0), o7 = !a2(t3) || t3 !== this._$AH && t3 !== E, o7 && (this._$AH = t3);
        else {
          const e6 = t3;
          let n6, r7;
          for (t3 = h3[0], n6 = 0; n6 < h3.length - 1; n6++) r7 = M(this, e6[s5 + n6], i6, n6), r7 === E && (r7 = this._$AH[n6]), o7 ||= !a2(r7) || r7 !== this._$AH[n6], r7 === A ? t3 = A : t3 !== A && (t3 += (r7 ?? "") + h3[n6 + 1]), this._$AH[n6] = r7;
        }
        o7 && !e5 && this.j(t3);
      }
      j(t3) {
        t3 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 ?? "");
      }
    };
    I = class extends H {
      constructor() {
        super(...arguments), this.type = 3;
      }
      j(t3) {
        this.element[this.name] = t3 === A ? void 0 : t3;
      }
    };
    L = class extends H {
      constructor() {
        super(...arguments), this.type = 4;
      }
      j(t3) {
        this.element.toggleAttribute(this.name, !!t3 && t3 !== A);
      }
    };
    z = class extends H {
      constructor(t3, i6, s5, e5, h3) {
        super(t3, i6, s5, e5, h3), this.type = 5;
      }
      _$AI(t3, i6 = this) {
        if ((t3 = M(this, t3, i6, 0) ?? A) === E) return;
        const s5 = this._$AH, e5 = t3 === A && s5 !== A || t3.capture !== s5.capture || t3.once !== s5.once || t3.passive !== s5.passive, h3 = t3 !== A && (s5 === A || e5);
        e5 && this.element.removeEventListener(this.name, this, s5), h3 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
      }
      handleEvent(t3) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t3) : this._$AH.handleEvent(t3);
      }
    };
    Z = class {
      constructor(t3, i6, s5) {
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s5;
      }
      get _$AU() {
        return this._$AM._$AU;
      }
      _$AI(t3) {
        M(this, t3);
      }
    };
    B = t2.litHtmlPolyfillSupport;
    B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.3");
    D = (t3, i6, s5) => {
      const e5 = s5?.renderBefore ?? i6;
      let h3 = e5._$litPart$;
      if (void 0 === h3) {
        const t4 = s5?.renderBefore ?? null;
        e5._$litPart$ = h3 = new k(i6.insertBefore(c3(), t4), t4, void 0, s5 ?? {});
      }
      return h3._$AI(t3), h3;
    };
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js
var s3, i4, o4;
var init_lit_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-element@4.2.2/node_modules/lit-element/lit-element.js"() {
    init_reactive_element();
    init_reactive_element();
    init_lit_html();
    init_lit_html();
    s3 = globalThis;
    i4 = class extends y {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
      }
      createRenderRoot() {
        const t3 = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t3.firstChild, t3;
      }
      update(t3) {
        const r7 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Do = D(r7, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(true);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(false);
      }
      render() {
        return E;
      }
    };
    i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
    o4 = s3.litElementPolyfillSupport;
    o4?.({ LitElement: i4 });
    (s3.litElementVersions ??= []).push("4.2.2");
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js
var init_is_server = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit-html@3.3.3/node_modules/lit-html/is-server.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js
var init_lit = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/index.js"() {
    init_reactive_element();
    init_lit_html();
    init_lit_element();
    init_is_server();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js
var init_custom_element = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/custom-element.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js
function n4(t3) {
  return (e5, o7) => "object" == typeof o7 ? r4(t3, e5, o7) : ((t4, e6, o8) => {
    const r7 = e6.hasOwnProperty(o8);
    return e6.constructor.createProperty(o8, t4), r7 ? Object.getOwnPropertyDescriptor(e6, o8) : void 0;
  })(t3, e5, o7);
}
var o5, r4;
var init_property = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/property.js"() {
    init_reactive_element();
    o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
    r4 = (t3 = o5, e5, r7) => {
      const { kind: n6, metadata: i6 } = r7;
      let s5 = globalThis.litPropertyMetadata.get(i6);
      if (void 0 === s5 && globalThis.litPropertyMetadata.set(i6, s5 = /* @__PURE__ */ new Map()), "setter" === n6 && ((t3 = Object.create(t3)).wrapped = true), s5.set(r7.name, t3), "accessor" === n6) {
        const { name: o7 } = r7;
        return { set(r8) {
          const n7 = e5.get.call(this);
          e5.set.call(this, r8), this.requestUpdate(o7, n7, t3, true, r8);
        }, init(e6) {
          return void 0 !== e6 && this.C(o7, void 0, t3, e6), e6;
        } };
      }
      if ("setter" === n6) {
        const { name: o7 } = r7;
        return function(r8) {
          const n7 = this[o7];
          e5.call(this, r8), this.requestUpdate(o7, n7, t3, true, r8);
        };
      }
      throw Error("Unsupported decorator location: " + n6);
    };
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js
function r5(r7) {
  return n4({ ...r7, state: true, attribute: false });
}
var init_state = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/state.js"() {
    init_property();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js
var init_event_options = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/event-options.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js
var init_base = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/base.js"() {
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js
var init_query = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js
var init_query_all = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-all.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js
var init_query_async = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-async.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
var init_query_assigned_elements = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
var init_query_assigned_nodes = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/@lit+reactive-element@2.1.2/node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
    init_base();
  }
});

// ../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js
var init_decorators = __esm({
  "../../../tuhfa-bundle/node_modules/.pnpm/lit@3.3.3/node_modules/lit/decorators.js"() {
    init_custom_element();
    init_property();
    init_state();
    init_event_options();
    init_query();
    init_query_all();
    init_query_async();
    init_query_assigned_elements();
    init_query_assigned_nodes();
  }
});

// ../dist/mirah-lookbook.js
var mirah_lookbook_exports = {};
__export(mirah_lookbook_exports, {
  default: () => l3
});
function z2(t3) {
  var e5, r7, o7, n6, d7, p5;
  const i6 = s4(t3 == null ? void 0 : t3.sale_price) && s4(t3 == null ? void 0 : t3.sale_price) < s4((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)) ? s4(t3 == null ? void 0 : t3.sale_price) : s4(t3 == null ? void 0 : t3.price), a4 = Math.max(s4(t3 == null ? void 0 : t3.regular_price), s4(t3 == null ? void 0 : t3.price), i6);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((e5 = t3 == null ? void 0 : t3.image) == null ? void 0 : e5.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? ((o7 = (r7 = t3 == null ? void 0 : t3.images) == null ? void 0 : r7[0]) == null ? void 0 : o7.url) ?? ""),
    price: i6,
    regular: a4,
    rating: s4(((n6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : n6.stars) ?? ((d7 = t3 == null ? void 0 : t3.rating) == null ? void 0 : d7.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: s4((p5 = t3 == null ? void 0 : t3.rating) == null ? void 0 : p5.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : s4(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out"
  };
}
async function _2(t3) {
  return await v2(), (await Promise.all(u3(t3).map((a4) => {
    var e5, r7, o7, n6;
    return (n6 = (o7 = (r7 = (e5 = m2()) == null ? void 0 : e5.product) == null ? void 0 : r7.api) == null ? void 0 : o7.getDetails) == null ? void 0 : n6.call(o7, a4).then((d7) => z2(d7 == null ? void 0 : d7.data)).catch(() => null);
  }))).filter((a4) => !!a4 && !!a4.name);
}
async function q(t3) {
  var i6, a4, e5;
  await v2();
  try {
    await ((e5 = (a4 = (i6 = m2()) == null ? void 0 : i6.cart) == null ? void 0 : a4.addItem) == null ? void 0 : e5.call(a4, { id: t3, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t3}`;
  }
}
function j(t3) {
  var i6, a4;
  try {
    (a4 = (i6 = m2()) == null ? void 0 : i6.success) == null || a4.call(i6, t3);
  } catch {
  }
}
var k2, m2, v2, x2, s4, u3, S3, f3, N2, C2, g2, b3, l3;
var init_mirah_lookbook = __esm({
  "../dist/mirah-lookbook.js"() {
    "use strict";
    init_lit();
    init_decorators();
    k2 = i`
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
`;
    m2 = () => window.Salla;
    v2 = async () => {
      var t3, i6;
      try {
        await ((i6 = (t3 = m2()) == null ? void 0 : t3.onReady) == null ? void 0 : i6.call(t3));
      } catch {
      }
    };
    x2 = (t3, i6) => (document.documentElement.lang || "ar").startsWith("en") ? i6 : t3;
    s4 = (t3) => {
      const i6 = typeof t3 == "object" && t3 ? t3.amount : t3, a4 = Number(i6);
      return Number.isFinite(a4) ? a4 : 0;
    };
    u3 = (t3) => (Array.isArray(t3) ? t3 : []).map((i6) => Number(typeof i6 == "object" && i6 ? i6.value : i6)).filter((i6) => Number.isFinite(i6) && i6 > 0);
    S3 = (t3) => {
      var i6, a4;
      try {
        return ((a4 = (i6 = m2()) == null ? void 0 : i6.money) == null ? void 0 : a4.call(i6, t3)) ?? `${t3} ${x2("\u0631.\u0633", "SAR")}`;
      } catch {
        return `${t3} ${x2("\u0631.\u0633", "SAR")}`;
      }
    };
    f3 = (t3) => String(t3 && typeof t3 == "object" ? t3[(document.documentElement.lang || "ar").slice(0, 2)] ?? t3.ar ?? "" : t3 ?? "");
    N2 = (t3) => t3 ? `--tf-custom:${t3}` : "";
    C2 = Object.defineProperty;
    g2 = (t3, i6, a4, e5) => {
      for (var r7 = void 0, o7 = t3.length - 1, n6; o7 >= 0; o7--)
        (n6 = t3[o7]) && (r7 = n6(i6, a4, r7) || r7);
      return r7 && C2(i6, a4, r7), r7;
    };
    b3 = class b4 extends i4 {
      constructor() {
        super(...arguments), this.map = /* @__PURE__ */ new Map(), this.active = -1, this.seq = 0;
      }
      willUpdate(i6) {
        var r7;
        if (!i6.has("config")) return;
        const a4 = ++this.seq, e5 = (((r7 = this.config) == null ? void 0 : r7.spots) ?? []).flatMap((o7) => u3(o7.product).slice(0, 1));
        _2(e5.map((o7) => ({ value: o7 }))).then((o7) => {
          a4 === this.seq && (this.map = new Map(o7.map((n6) => [n6.id, n6])));
        });
      }
      card(i6, a4) {
        const e5 = this.map.get(u3(i6.product)[0]);
        if (!e5) return "";
        const r7 = Number(i6.x ?? 50), o7 = Number(i6.y ?? 50), n6 = `${r7 > 60 ? `right:${100 - r7 + 4}%` : `left:${r7 + 4}%`};top:${Math.min(o7, 70)}%`;
        return b2`<div class="pop" style=${n6} role="dialog" aria-label=${e5.name}><button class="x" aria-label="إغلاق" @click=${() => this.active = -1}>×</button>
      <img src=${e5.image} alt="" /><div><a href=${e5.url}>${e5.name}</a><b>${S3(e5.price)}</b>
      <button class="btn" ?disabled=${!e5.available} @click=${async () => {
          await q(e5.id), j("\u0623\u064F\u0636\u064A\u0641 \u0644\u0644\u0633\u0644\u0629 \u2713");
        }}>${e5.available ? "\u0623\u0636\u0641 \u0644\u0644\u0633\u0644\u0629" : "\u063A\u064A\u0631 \u0645\u062A\u0648\u0641\u0631"}</button></div></div>`;
      }
      render() {
        const i6 = this.config ?? {}, a4 = i6.spots ?? [];
        return i6.image ? b2`<div class="wrap" style=${N2(i6.color)}><span class="eyebrow">✨ تسوّق الإطلالة</span>${f3(i6.title) ? b2`<h2 class="title">${f3(i6.title)}</h2>` : ""}${f3(i6.subtitle) ? b2`<p class="sub">${f3(i6.subtitle)}</p>` : ""}
      <div class="stage"><div class="pic"><img src=${i6.image} alt=${f3(i6.title)} />
        ${a4.map((e5, r7) => this.map.get(u3(e5.product)[0]) ? b2`<button class="dot ${this.active === r7 ? "on" : ""}" style="left:${e5.x ?? 50}%;top:${e5.y ?? 50}%" aria-label="عرض المنتج ${r7 + 1}" @click=${() => this.active = this.active === r7 ? -1 : r7}>+</button>` : "")}</div>
        ${this.active >= 0 && a4[this.active] ? this.card(a4[this.active], this.active) : ""}</div>
      <div class="list">${a4.map((e5, r7) => {
          const o7 = this.map.get(u3(e5.product)[0]);
          return o7 ? b2`<button class="chip ${this.active === r7 ? "on" : ""}" @click=${() => this.active = r7}>${o7.name}</button>` : "";
        })}</div></div>` : b2`<div class="wrap"><p class="sub">أضف صورة الإطلالة ونقاط المنتجات من إعدادات العنصر.</p></div>`;
      }
    };
    b3.styles = [k2, i`
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
    l3 = b3;
    g2([
      n4({ type: Object })
    ], l3.prototype, "config");
    g2([
      r5()
    ], l3.prototype, "map");
    g2([
      r5()
    ], l3.prototype, "active");
    typeof l3 < "u" && l3.registerSallaComponent("salla-mirah-lookbook");
  }
});

// ../dist/mirah-before-after.js
var mirah_before_after_exports = {};
__export(mirah_before_after_exports, {
  default: () => r6
});
var x3, i5, m3, u4, d3, p3, r6;
var init_mirah_before_after = __esm({
  "../dist/mirah-before-after.js"() {
    "use strict";
    init_lit();
    init_decorators();
    x3 = i`
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
`;
    i5 = (e5) => String(e5 && typeof e5 == "object" ? e5[(document.documentElement.lang || "ar").slice(0, 2)] ?? e5.ar ?? "" : e5 ?? "");
    m3 = (e5) => e5 ? `--tf-custom:${e5}` : "";
    u4 = Object.defineProperty;
    d3 = (e5, t3, a4, g5) => {
      for (var o7 = void 0, n6 = e5.length - 1, l6; n6 >= 0; n6--)
        (l6 = e5[n6]) && (o7 = l6(t3, a4, o7) || o7);
      return o7 && u4(t3, a4, o7), o7;
    };
    p3 = class p4 extends i4 {
      constructor() {
        super(...arguments), this.pos = 50, this.down = (t3) => {
          t3.currentTarget.setPointerCapture(t3.pointerId), this.set(t3);
        }, this.move = (t3) => {
          t3.currentTarget.hasPointerCapture(t3.pointerId) && this.set(t3);
        }, this.key = (t3) => {
          t3.key === "ArrowLeft" && (this.pos = Math.max(0, this.pos - 5)), t3.key === "ArrowRight" && (this.pos = Math.min(100, this.pos + 5));
        };
      }
      set(t3) {
        const a4 = this.renderRoot.querySelector(".cmp").getBoundingClientRect();
        this.pos = Math.min(100, Math.max(0, (t3.clientX - a4.left) / a4.width * 100));
      }
      render() {
        const t3 = this.config ?? {};
        return !t3.before || !t3.after ? b2`<div class="wrap"><p class="sub">أضف صورة «قبل» وصورة «بعد» من إعدادات العنصر.</p></div>` : b2`<div class="wrap" style=${m3(t3.color)}><span class="eyebrow">↔ الفرق واضح</span>${i5(t3.title) ? b2`<h2 class="title">${i5(t3.title)}</h2>` : ""}${i5(t3.subtitle) ? b2`<p class="sub">${i5(t3.subtitle)}</p>` : ""}
      <div class="cmp" dir="ltr" @pointerdown=${this.down} @pointermove=${this.move}>
        <img src=${t3.after} alt=${i5(t3.after_label) || "\u0628\u0639\u062F"} />
        <div class="top" style="clip-path:inset(0 ${100 - this.pos}% 0 0)"><img src=${t3.before} alt=${i5(t3.before_label) || "\u0642\u0628\u0644"} /></div>
        <span class="lb" style="left:18px">${i5(t3.before_label) || "\u0642\u0628\u0644"}</span><span class="lb" style="right:18px">${i5(t3.after_label) || "\u0628\u0639\u062F"}</span>
        <div class="h" style="left:${this.pos}%"><div class="k" tabindex="0" role="slider" aria-label="اسحب للمقارنة" aria-valuenow=${Math.round(this.pos)} aria-valuemin="0" aria-valuemax="100" @keydown=${this.key}>⇆</div></div></div>
      ${i5(t3.button) && t3.link ? b2`<div class="foot"><a class="btn" href=${t3.link}>${i5(t3.button)} ←</a></div>` : ""}</div>`;
      }
    };
    p3.styles = [x3, i`
    .cmp { position: relative; border-radius: 28px; overflow: hidden; aspect-ratio: 16/9; user-select: none; touch-action: pan-y; cursor: ew-resize; background: #ddd; }
    @media (max-width: 600px) { .cmp { aspect-ratio: 4/5; } }
    .cmp img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; pointer-events: none; }
    .top { position: absolute; inset: 0; } .h { position: absolute; top: 0; bottom: 0; width: 3px; margin-inline-start: -1.5px; background: #fff; box-shadow: 0 0 20px #0006; }
    .k { position: absolute; top: 50%; left: 50%; width: 56px; height: 56px; transform: translate(-50%, -50%); border-radius: 50%; background: #fff; color: #1b1408; display: grid; place-items: center; font-size: 20px; box-shadow: 0 10px 30px #0005; outline: none; }
    .k:focus-visible { box-shadow: 0 0 0 4px var(--tf-accent); }
    .lb { position: absolute; bottom: 18px; padding: 8px 16px; border-radius: 99px; background: #0009; color: #fff; font-size: 14px; font-weight: 700; backdrop-filter: blur(6px); }
    .foot { margin-top: 20px; text-align: center; }
  `];
    r6 = p3;
    d3([
      n4({ type: Object })
    ], r6.prototype, "config");
    d3([
      r5()
    ], r6.prototype, "pos");
    typeof r6 < "u" && r6.registerSallaComponent("salla-mirah-before-after");
  }
});

// ../dist/mirah-video-hero.js
var mirah_video_hero_exports = {};
__export(mirah_video_hero_exports, {
  default: () => a3
});
var x4, n5, b5, g3, v3, f4, d4, a3;
var init_mirah_video_hero = __esm({
  "../dist/mirah-video-hero.js"() {
    "use strict";
    init_lit();
    init_decorators();
    x4 = i`
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
`;
    n5 = (e5) => String(e5 && typeof e5 == "object" ? e5[(document.documentElement.lang || "ar").slice(0, 2)] ?? e5.ar ?? "" : e5 ?? "");
    b5 = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
    g3 = (e5) => e5 ? `--tf-custom:${e5}` : "";
    v3 = Object.defineProperty;
    f4 = (e5, t3, s5, c6) => {
      for (var i6 = void 0, r7 = e5.length - 1, p5; r7 >= 0; r7--)
        (p5 = e5[r7]) && (i6 = p5(t3, s5, i6) || i6);
      return i6 && v3(t3, s5, i6), i6;
    };
    d4 = class d5 extends i4 {
      constructor() {
        super(...arguments), this.muted = true;
      }
      render() {
        var i6;
        const t3 = this.config ?? {}, s5 = (i6 = navigator.connection) == null ? void 0 : i6.saveData, c6 = (n5(t3.title) || "\u0623\u0646\u0627\u0642\u0629 \u062A\u062A\u062D\u0631\u0643 \u0645\u0639\u0643").split(" ");
        return b2`<section class="h" style="min-height:${t3.height ?? 85}vh;${g3(t3.color)}">
      ${t3.video && !b5() && !s5 ? b2`<video src=${t3.video} poster=${t3.poster ?? ""} autoplay loop playsinline .muted=${this.muted} preload="metadata"></video>` : t3.poster ? b2`<img class="po" src=${t3.poster} alt="" />` : ""}
      <div class="ov" style="opacity:${(t3.overlay ?? 70) / 100}"></div>
      <div class="in">${n5(t3.eyebrow) ? b2`<span class="eyebrow">${n5(t3.eyebrow)}</span>` : ""}
        <h1>${c6.map((r7, p5) => b2`<span style="animation-delay:${0.08 * p5}s">${r7}&nbsp;</span>`)}</h1>
        ${n5(t3.subtitle) ? b2`<p>${n5(t3.subtitle)}</p>` : ""}${n5(t3.button) && t3.link ? b2`<a class="btn" href=${t3.link}>${n5(t3.button)} ←</a>` : ""}</div>
      ${t3.video ? b2`<button class="snd" aria-label=${this.muted ? "\u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u0635\u0648\u062A" : "\u0643\u062A\u0645 \u0627\u0644\u0635\u0648\u062A"} @click=${() => this.muted = !this.muted}>${this.muted ? "\u{1F507}" : "\u{1F50A}"}</button>` : ""}
    </section>`;
      }
    };
    d4.styles = [x4, i`
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
    a3 = d4;
    f4([
      n4({ type: Object })
    ], a3.prototype, "config");
    f4([
      r5()
    ], a3.prototype, "muted");
    typeof a3 < "u" && a3.registerSallaComponent("salla-mirah-video-hero");
  }
});

// ../dist/mirah-gallery.js
var mirah_gallery_exports = {};
__export(mirah_gallery_exports, {
  default: () => l4
});
var b6, o6, x5, u5, f5, c4, l4;
var init_mirah_gallery = __esm({
  "../dist/mirah-gallery.js"() {
    "use strict";
    init_lit();
    init_decorators();
    b6 = i`
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
`;
    o6 = (i6) => String(i6 && typeof i6 == "object" ? i6[(document.documentElement.lang || "ar").slice(0, 2)] ?? i6.ar ?? "" : i6 ?? "");
    x5 = (i6) => i6 ? `--tf-custom:${i6}` : "";
    u5 = Object.defineProperty;
    f5 = (i6, t3, n6, a4) => {
      for (var e5 = void 0, r7 = i6.length - 1, p5; r7 >= 0; r7--)
        (p5 = i6[r7]) && (e5 = p5(t3, n6, e5) || e5);
      return e5 && u5(t3, n6, e5), e5;
    };
    c4 = class c5 extends i4 {
      constructor() {
        super(...arguments), this.open = -1, this.sx = 0, this.key = (t3) => {
          this.open < 0 || (t3.key === "Escape" && (this.open = -1), t3.key === "ArrowLeft" && this.go(1), t3.key === "ArrowRight" && this.go(-1));
        };
      }
      imgs() {
        var t3;
        return (((t3 = this.config) == null ? void 0 : t3.images) ?? []).filter((n6) => n6.image);
      }
      go(t3) {
        const n6 = this.imgs().length;
        this.open = (this.open + t3 + n6) % n6;
      }
      connectedCallback() {
        super.connectedCallback(), addEventListener("keydown", this.key);
      }
      disconnectedCallback() {
        super.disconnectedCallback(), removeEventListener("keydown", this.key);
      }
      render() {
        const t3 = this.config ?? {}, n6 = this.imgs(), a4 = n6[this.open];
        return b2`<div class="wrap" style="--cols:${t3.columns ?? 3};${x5(t3.color)}"><div class="hd"><div><span class="eyebrow">📸 من عالمنا</span>${o6(t3.title) ? b2`<h2 class="title">${o6(t3.title)}</h2>` : ""}${o6(t3.subtitle) ? b2`<p class="sub">${o6(t3.subtitle)}</p>` : ""}</div>
        ${t3.handle ? b2`<a href=${t3.handle} target="_blank" rel="noopener">تابعنا ←</a>` : ""}</div>
      <div class="m">${n6.map((e5, r7) => b2`<button @click=${() => this.open = r7} aria-label="تكبير الصورة ${r7 + 1}"><img src=${e5.image} alt=${o6(e5.caption)} loading="lazy" />${o6(e5.caption) ? b2`<small>${o6(e5.caption)}</small>` : ""}</button>`)}</div>
      ${a4 ? b2`<div class="lb" role="dialog" aria-modal="true" @click=${(e5) => e5.target === e5.currentTarget && (this.open = -1)}
          @touchstart=${(e5) => this.sx = e5.touches[0].clientX} @touchend=${(e5) => {
          const r7 = e5.changedTouches[0].clientX - this.sx;
          Math.abs(r7) > 50 && this.go(r7 < 0 ? 1 : -1);
        }}>
        <div><img src=${a4.image} alt=${o6(a4.caption)} />${o6(a4.caption) || a4.link ? b2`<p>${o6(a4.caption)} ${a4.link ? b2`<a href=${a4.link}>تسوّق ←</a>` : ""}</p>` : ""}</div>
        <span class="ct">${this.open + 1} / ${n6.length}</span><button class="nv cl" aria-label="إغلاق" @click=${() => this.open = -1}>×</button>
        <button class="nv" style="right:18px" aria-label="السابق" @click=${() => this.go(-1)}>›</button><button class="nv" style="left:18px" aria-label="التالي" @click=${() => this.go(1)}>‹</button></div>` : ""}</div>`;
      }
    };
    c4.styles = [b6, i`
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
    l4 = c4;
    f5([
      n4({ type: Object })
    ], l4.prototype, "config");
    f5([
      r5()
    ], l4.prototype, "open");
    typeof l4 < "u" && l4.registerSallaComponent("salla-mirah-gallery");
  }
});

// ../dist/mirah-shop-look.js
var mirah_shop_look_exports = {};
__export(mirah_shop_look_exports, {
  default: () => d6
});
function z3(t3) {
  var n6, r7, s5, a4, o7, x6;
  const i6 = l5(t3 == null ? void 0 : t3.sale_price) && l5(t3 == null ? void 0 : t3.sale_price) < l5((t3 == null ? void 0 : t3.regular_price) ?? (t3 == null ? void 0 : t3.price)) ? l5(t3 == null ? void 0 : t3.sale_price) : l5(t3 == null ? void 0 : t3.price), e5 = Math.max(l5(t3 == null ? void 0 : t3.regular_price), l5(t3 == null ? void 0 : t3.price), i6);
  return {
    id: Number(t3 == null ? void 0 : t3.id),
    name: String((t3 == null ? void 0 : t3.name) ?? ""),
    url: String((t3 == null ? void 0 : t3.url) ?? "#"),
    image: String(((n6 = t3 == null ? void 0 : t3.image) == null ? void 0 : n6.url) ?? (t3 == null ? void 0 : t3.main_image) ?? (t3 == null ? void 0 : t3.thumbnail) ?? ((s5 = (r7 = t3 == null ? void 0 : t3.images) == null ? void 0 : r7[0]) == null ? void 0 : s5.url) ?? ""),
    price: i6,
    regular: e5,
    rating: l5(((a4 = t3 == null ? void 0 : t3.rating) == null ? void 0 : a4.stars) ?? ((o7 = t3 == null ? void 0 : t3.rating) == null ? void 0 : o7.rate) ?? (t3 == null ? void 0 : t3.rating)),
    ratingCount: l5((x6 = t3 == null ? void 0 : t3.rating) == null ? void 0 : x6.count),
    qty: (t3 == null ? void 0 : t3.quantity) == null || t3 != null && t3.unlimited_quantity ? null : l5(t3 == null ? void 0 : t3.quantity),
    available: (t3 == null ? void 0 : t3.is_available) !== false && (t3 == null ? void 0 : t3.status) !== "out"
  };
}
async function S4(t3) {
  return await w2(), (await Promise.all(_3(t3).map((e5) => {
    var n6, r7, s5, a4;
    return (a4 = (s5 = (r7 = (n6 = u6()) == null ? void 0 : n6.product) == null ? void 0 : r7.api) == null ? void 0 : s5.getDetails) == null ? void 0 : a4.call(s5, e5).then((o7) => z3(o7 == null ? void 0 : o7.data)).catch(() => null);
  }))).filter((e5) => !!e5 && !!e5.name);
}
async function j2(t3) {
  var i6, e5, n6;
  await w2();
  try {
    await ((n6 = (e5 = (i6 = u6()) == null ? void 0 : i6.cart) == null ? void 0 : e5.addItem) == null ? void 0 : n6.call(e5, { id: t3, quantity: 1 }));
  } catch {
    location.href = `${location.origin}/p${t3}`;
  }
}
function q2(t3) {
  var i6, e5;
  try {
    (e5 = (i6 = u6()) == null ? void 0 : i6.success) == null || e5.call(i6, t3);
  } catch {
  }
}
var k3, u6, w2, y3, l5, _3, g4, f6, A2, C3, m4, b7, d6;
var init_mirah_shop_look = __esm({
  "../dist/mirah-shop-look.js"() {
    "use strict";
    init_lit();
    init_decorators();
    k3 = i`
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
`;
    u6 = () => window.Salla;
    w2 = async () => {
      var t3, i6;
      try {
        await ((i6 = (t3 = u6()) == null ? void 0 : t3.onReady) == null ? void 0 : i6.call(t3));
      } catch {
      }
    };
    y3 = (t3, i6) => (document.documentElement.lang || "ar").startsWith("en") ? i6 : t3;
    l5 = (t3) => {
      const i6 = typeof t3 == "object" && t3 ? t3.amount : t3, e5 = Number(i6);
      return Number.isFinite(e5) ? e5 : 0;
    };
    _3 = (t3) => (Array.isArray(t3) ? t3 : []).map((i6) => Number(typeof i6 == "object" && i6 ? i6.value : i6)).filter((i6) => Number.isFinite(i6) && i6 > 0);
    g4 = (t3) => {
      var i6, e5;
      try {
        return ((e5 = (i6 = u6()) == null ? void 0 : i6.money) == null ? void 0 : e5.call(i6, t3)) ?? `${t3} ${y3("\u0631.\u0633", "SAR")}`;
      } catch {
        return `${t3} ${y3("\u0631.\u0633", "SAR")}`;
      }
    };
    f6 = (t3) => String(t3 && typeof t3 == "object" ? t3[(document.documentElement.lang || "ar").slice(0, 2)] ?? t3.ar ?? "" : t3 ?? "");
    A2 = (t3) => t3 ? `--tf-custom:${t3}` : "";
    C3 = Object.defineProperty;
    m4 = (t3, i6, e5, n6) => {
      for (var r7 = void 0, s5 = t3.length - 1, a4; s5 >= 0; s5--)
        (a4 = t3[s5]) && (r7 = a4(i6, e5, r7) || r7);
      return r7 && C3(i6, e5, r7), r7;
    };
    b7 = class b8 extends i4 {
      constructor() {
        super(...arguments), this.list = null, this.off = /* @__PURE__ */ new Set(), this.busy = false, this.seq = 0;
      }
      willUpdate(i6) {
        var e5;
        if (i6.has("config")) {
          const n6 = ++this.seq;
          this.list = null, S4((e5 = this.config) == null ? void 0 : e5.products).then((r7) => {
            n6 === this.seq && (this.list = r7);
          });
        }
      }
      toggle(i6) {
        const e5 = new Set(this.off);
        e5.has(i6) ? e5.delete(i6) : e5.add(i6), this.off = e5;
      }
      async addAll(i6) {
        this.busy = true;
        for (const e5 of i6) await j2(e5.id);
        this.busy = false, q2(`\u0623\u064F\u0636\u064A\u0641\u062A ${i6.length} \u0642\u0637\u0639 \u0644\u0644\u0633\u0644\u0629 \u2713`);
      }
      render() {
        const i6 = this.config ?? {}, e5 = this.list ?? [], n6 = e5.filter((a4) => a4.available && !this.off.has(a4.id)), r7 = n6.reduce((a4, o7) => a4 + o7.price, 0), s5 = n6.reduce((a4, o7) => a4 + o7.regular, 0);
        return b2`<div class="wrap" style=${A2(i6.color)}><span class="eyebrow">👗 أكمل الإطلالة</span><h2 class="title">${f6(i6.title) || "\u0627\u0644\u0625\u0637\u0644\u0627\u0644\u0629 \u0643\u0627\u0645\u0644\u0629"}</h2>${f6(i6.subtitle) ? b2`<p class="sub">${f6(i6.subtitle)}</p>` : ""}
      <div class="g">${i6.image ? b2`<div class="hero"><img src=${i6.image} alt="" loading="lazy" /></div>` : ""}
        <div>${this.list === null ? b2`<div class="skel" style="height:320px"></div>` : e5.map((a4) => b2`<label class="it ${this.off.has(a4.id) || !a4.available ? "off" : ""}">
            <input type="checkbox" .checked=${a4.available && !this.off.has(a4.id)} ?disabled=${!a4.available} @change=${() => this.toggle(a4.id)} />
            <img src=${a4.image} alt="" loading="lazy" /><a href=${a4.url} @click=${(o7) => o7.stopPropagation()}>${a4.name}${a4.available ? "" : b2` <small>(غير متوفر)</small>`}</a><b>${g4(a4.price)}</b></label>`)}
          <div class="sum dark"><div>المجموع (${n6.length} قطع)<br /><b>${g4(r7)}</b>${s5 > r7 ? b2`<s>${g4(s5)}</s><span class="sv">وفّرت ${g4(s5 - r7)}</span>` : ""}${f6(i6.note) ? b2`<span class="sv">${f6(i6.note)}</span>` : ""}</div>
            <button class="btn" ?disabled=${!n6.length || this.busy} @click=${() => this.addAll(n6)}>${this.busy ? "\u062C\u0627\u0631\u064A \u0627\u0644\u0625\u0636\u0627\u0641\u0629\u2026" : "\u0623\u0636\u0641 \u0627\u0644\u0625\u0637\u0644\u0627\u0644\u0629 \u0644\u0644\u0633\u0644\u0629"}</button></div></div></div></div>`;
      }
    };
    b7.styles = [k3, i`
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
    d6 = b7;
    m4([
      n4({ type: Object })
    ], d6.prototype, "config");
    m4([
      r5()
    ], d6.prototype, "list");
    m4([
      r5()
    ], d6.prototype, "off");
    m4([
      r5()
    ], d6.prototype, "busy");
    typeof d6 < "u" && d6.registerSallaComponent("salla-mirah-shop-look");
  }
});

// entry.js
init_lit();
i4.registerSallaComponent = function(n6) {
  if (!customElements.get(n6)) customElements.define(n6, this);
};
await Promise.resolve().then(() => (init_mirah_lookbook(), mirah_lookbook_exports));
await Promise.resolve().then(() => (init_mirah_before_after(), mirah_before_after_exports));
await Promise.resolve().then(() => (init_mirah_video_hero(), mirah_video_hero_exports));
await Promise.resolve().then(() => (init_mirah_gallery(), mirah_gallery_exports));
await Promise.resolve().then(() => (init_mirah_shop_look(), mirah_shop_look_exports));
window.__ready = true;
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
