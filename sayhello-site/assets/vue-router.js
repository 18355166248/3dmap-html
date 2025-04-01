/*!
 * vue-router v4.2.1
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const pt = typeof window < "u";
function Xl(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const W = Object.assign;
function Mn(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = xe(r) ? r.map(e) : e(r);
  }
  return n;
}
const Ft = () => {},
  xe = Array.isArray,
  Gl = /\/$/,
  ec = (e) => e.replace(Gl, "");
function Ln(e, t, n = "/") {
  let s,
    r = {},
    o = "",
    i = "";
  const c = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    c < l && c >= 0 && (l = -1),
    l > -1 &&
      ((s = t.slice(0, l)),
      (o = t.slice(l + 1, c > -1 ? c : t.length)),
      (r = e(o))),
    c > -1 && ((s = s || t.slice(0, c)), (i = t.slice(c, t.length))),
    (s = rc(s ?? t, n)),
    { fullPath: s + (o && "?") + o + i, path: s, query: r, hash: i }
  );
}
function tc(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Gs(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function nc(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    Rt(t.matched[s], n.matched[r]) &&
    ho(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Rt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ho(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!sc(e[n], t[n])) return !1;
  return !0;
}
function sc(e, t) {
  return xe(e) ? er(e, t) : xe(t) ? er(t, e) : e === t;
}
function er(e, t) {
  return xe(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function rc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/"),
    r = s[s.length - 1];
  (r === ".." || r === ".") && s.push("");
  let o = n.length - 1,
    i,
    c;
  for (i = 0; i < s.length; i++)
    if (((c = s[i]), c !== "."))
      if (c === "..") o > 1 && o--;
      else break;
  return (
    n.slice(0, o).join("/") +
    "/" +
    s.slice(i - (i === s.length ? 1 : 0)).join("/")
  );
}
var qt;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(qt || (qt = {}));
var jt;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(jt || (jt = {}));
function oc(e) {
  if (!e)
    if (pt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ec(e);
}
const ic = /^[^#]+#/;
function lc(e, t) {
  return e.replace(ic, "#") + t;
}
function cc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const xn = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function uc(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = cc(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function tr(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Wn = new Map();
function fc(e, t) {
  Wn.set(e, t);
}
function ac(e) {
  const t = Wn.get(e);
  return Wn.delete(e), t;
}
let dc = () => location.protocol + "//" + location.host;
function po(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let c = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = r.slice(c);
    return l[0] !== "/" && (l = "/" + l), Gs(l, "");
  }
  return Gs(n, e) + s + r;
}
function hc(e, t, n, s) {
  let r = [],
    o = [],
    i = null;
  const c = ({ state: m }) => {
    const b = po(e, location),
      A = n.value,
      M = t.value;
    let j = 0;
    if (m) {
      if (((n.value = b), (t.value = m), i && i === A)) {
        i = null;
        return;
      }
      j = M ? m.position - M.position : 0;
    } else s(b);
    r.forEach((D) => {
      D(n.value, A, {
        delta: j,
        type: qt.pop,
        direction: j ? (j > 0 ? jt.forward : jt.back) : jt.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function f(m) {
    r.push(m);
    const b = () => {
      const A = r.indexOf(m);
      A > -1 && r.splice(A, 1);
    };
    return o.push(b), b;
  }
  function d() {
    const { history: m } = window;
    m.state && m.replaceState(W({}, m.state, { scroll: xn() }), "");
  }
  function h() {
    for (const m of o) m();
    (o = []),
      window.removeEventListener("popstate", c),
      window.removeEventListener("beforeunload", d);
  }
  return (
    window.addEventListener("popstate", c),
    window.addEventListener("beforeunload", d, { passive: !0 }),
    { pauseListeners: l, listen: f, destroy: h }
  );
}
function nr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? xn() : null,
  };
}
function pc(e) {
  const { history: t, location: n } = window,
    s = { value: po(e, n) },
    r = { value: t.state };
  r.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function o(l, f, d) {
    const h = e.indexOf("#"),
      m =
        h > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(h)) + l
          : dc() + e + l;
    try {
      t[d ? "replaceState" : "pushState"](f, "", m), (r.value = f);
    } catch (b) {
      console.error(b), n[d ? "replace" : "assign"](m);
    }
  }
  function i(l, f) {
    const d = W({}, t.state, nr(r.value.back, l, r.value.forward, !0), f, {
      position: r.value.position,
    });
    o(l, d, !0), (s.value = l);
  }
  function c(l, f) {
    const d = W({}, r.value, t.state, { forward: l, scroll: xn() });
    o(d.current, d, !0);
    const h = W({}, nr(s.value, l, null), { position: d.position + 1 }, f);
    o(l, h, !1), (s.value = l);
  }
  return { location: s, state: r, push: c, replace: i };
}
function mc(e) {
  e = oc(e);
  const t = pc(e),
    n = hc(e, t.state, t.location, t.replace);
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const r = W(
    { location: "", base: e, go: s, createHref: lc.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
// createWebHashHistory
function _c(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    mc(e)
  );
}
function gc(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function mo(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const qe = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  _o = Symbol("");
var sr;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(sr || (sr = {}));
function xt(e, t) {
  return W(new Error(), { type: e, [_o]: !0 }, t);
}
function Fe(e, t) {
  return e instanceof Error && _o in e && (t == null || !!(e.type & t));
}
const rr = "[^/]+?",
  vc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Ec = /[.+*?^${}()[\]/\\]/g;
function yc(e, t) {
  const n = W({}, vc, t),
    s = [];
  let r = n.start ? "^" : "";
  const o = [];
  for (const f of e) {
    const d = f.length ? [] : [90];
    n.strict && !f.length && (r += "/");
    for (let h = 0; h < f.length; h++) {
      const m = f[h];
      let b = 40 + (n.sensitive ? 0.25 : 0);
      if (m.type === 0)
        h || (r += "/"), (r += m.value.replace(Ec, "\\$&")), (b += 40);
      else if (m.type === 1) {
        const { value: A, repeatable: M, optional: j, regexp: D } = m;
        o.push({ name: A, repeatable: M, optional: j });
        const H = D || rr;
        if (H !== rr) {
          b += 10;
          try {
            new RegExp(`(${H})`);
          } catch (V) {
            throw new Error(
              `Invalid custom RegExp for param "${A}" (${H}): ` + V.message
            );
          }
        }
        let U = M ? `((?:${H})(?:/(?:${H}))*)` : `(${H})`;
        h || (U = j && f.length < 2 ? `(?:/${U})` : "/" + U),
          j && (U += "?"),
          (r += U),
          (b += 20),
          j && (b += -8),
          M && (b += -20),
          H === ".*" && (b += -50);
      }
      d.push(b);
    }
    s.push(d);
  }
  if (n.strict && n.end) {
    const f = s.length - 1;
    s[f][s[f].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function c(f) {
    const d = f.match(i),
      h = {};
    if (!d) return null;
    for (let m = 1; m < d.length; m++) {
      const b = d[m] || "",
        A = o[m - 1];
      h[A.name] = b && A.repeatable ? b.split("/") : b;
    }
    return h;
  }
  function l(f) {
    let d = "",
      h = !1;
    for (const m of e) {
      (!h || !d.endsWith("/")) && (d += "/"), (h = !1);
      for (const b of m)
        if (b.type === 0) d += b.value;
        else if (b.type === 1) {
          const { value: A, repeatable: M, optional: j } = b,
            D = A in f ? f[A] : "";
          if (xe(D) && !M)
            throw new Error(
              `Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`
            );
          const H = xe(D) ? D.join("/") : D;
          if (!H)
            if (j)
              m.length < 2 &&
                (d.endsWith("/") ? (d = d.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${A}"`);
          d += H;
        }
    }
    return d || "/";
  }
  return { re: i, score: s, keys: o, parse: c, stringify: l };
}
function bc(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function wc(e, t) {
  let n = 0;
  const s = e.score,
    r = t.score;
  for (; n < s.length && n < r.length; ) {
    const o = bc(s[n], r[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (or(s)) return 1;
    if (or(r)) return -1;
  }
  return r.length - s.length;
}
function or(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Rc = { type: 0, value: "" },
  xc = /[a-zA-Z0-9_]/;
function Pc(e) {
  if (!e) return [[]];
  if (e === "/") return [[Rc]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(b) {
    throw new Error(`ERR (${n})/"${f}": ${b}`);
  }
  let n = 0,
    s = n;
  const r = [];
  let o;
  function i() {
    o && r.push(o), (o = []);
  }
  let c = 0,
    l,
    f = "",
    d = "";
  function h() {
    f &&
      (n === 0
        ? o.push({ type: 0, value: f })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: f,
            regexp: d,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (f = ""));
  }
  function m() {
    f += l;
  }
  for (; c < e.length; ) {
    if (((l = e[c++]), l === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (f && h(), i()) : l === ":" ? (h(), (n = 1)) : m();
        break;
      case 4:
        m(), (n = s);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : xc.test(l)
          ? m()
          : (h(), (n = 0), l !== "*" && l !== "?" && l !== "+" && c--);
        break;
      case 2:
        l === ")"
          ? d[d.length - 1] == "\\"
            ? (d = d.slice(0, -1) + l)
            : (n = 3)
          : (d += l);
        break;
      case 3:
        h(), (n = 0), l !== "*" && l !== "?" && l !== "+" && c--, (d = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), h(), i(), r;
}
function Cc(e, t, n) {
  const s = yc(Pc(e.path), n),
    r = W(s, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Oc(e, t) {
  const n = [],
    s = new Map();
  t = cr({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(d) {
    return s.get(d);
  }
  function o(d, h, m) {
    const b = !m,
      A = Ac(d);
    A.aliasOf = m && m.record;
    const M = cr(t, d),
      j = [A];
    if ("alias" in d) {
      const U = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const V of U)
        j.push(
          W({}, A, {
            components: m ? m.record.components : A.components,
            path: V,
            aliasOf: m ? m.record : A,
          })
        );
    }
    let D, H;
    for (const U of j) {
      const { path: V } = U;
      if (h && V[0] !== "/") {
        const re = h.record.path,
          ue = re[re.length - 1] === "/" ? "" : "/";
        U.path = h.record.path + (V && ue + V);
      }
      if (
        ((D = Cc(U, h, M)),
        m
          ? m.alias.push(D)
          : ((H = H || D),
            H !== D && H.alias.push(D),
            b && d.name && !lr(D) && i(d.name)),
        A.children)
      ) {
        const re = A.children;
        for (let ue = 0; ue < re.length; ue++)
          o(re[ue], D, m && m.children[ue]);
      }
      (m = m || D),
        ((D.record.components && Object.keys(D.record.components).length) ||
          D.record.name ||
          D.record.redirect) &&
          l(D);
    }
    return H
      ? () => {
          i(H);
        }
      : Ft;
  }
  function i(d) {
    if (mo(d)) {
      const h = s.get(d);
      h &&
        (s.delete(d),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(i),
        h.alias.forEach(i));
    } else {
      const h = n.indexOf(d);
      h > -1 &&
        (n.splice(h, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(i),
        d.alias.forEach(i));
    }
  }
  function c() {
    return n;
  }
  function l(d) {
    let h = 0;
    for (
      ;
      h < n.length &&
      wc(d, n[h]) >= 0 &&
      (d.record.path !== n[h].record.path || !go(d, n[h]));

    )
      h++;
    n.splice(h, 0, d), d.record.name && !lr(d) && s.set(d.record.name, d);
  }
  function f(d, h) {
    let m,
      b = {},
      A,
      M;
    if ("name" in d && d.name) {
      if (((m = s.get(d.name)), !m)) throw xt(1, { location: d });
      (M = m.record.name),
        (b = W(
          ir(
            h.params,
            m.keys.filter((H) => !H.optional).map((H) => H.name)
          ),
          d.params &&
            ir(
              d.params,
              m.keys.map((H) => H.name)
            )
        )),
        (A = m.stringify(b));
    } else if ("path" in d)
      (A = d.path),
        (m = n.find((H) => H.re.test(A))),
        m && ((b = m.parse(A)), (M = m.record.name));
    else {
      if (((m = h.name ? s.get(h.name) : n.find((H) => H.re.test(h.path))), !m))
        throw xt(1, { location: d, currentLocation: h });
      (M = m.record.name),
        (b = W({}, h.params, d.params)),
        (A = m.stringify(b));
    }
    const j = [];
    let D = m;
    for (; D; ) j.unshift(D.record), (D = D.parent);
    return { name: M, path: A, params: b, matched: j, meta: Ic(j) };
  }
  return (
    e.forEach((d) => o(d)),
    {
      addRoute: o,
      resolve: f,
      removeRoute: i,
      getRoutes: c,
      getRecordMatcher: r,
    }
  );
}
function ir(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function Ac(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Tc(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function Tc(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "boolean" ? n : n[s];
  return t;
}
function lr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Ic(e) {
  return e.reduce((t, n) => W(t, n.meta), {});
}
function cr(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function go(e, t) {
  return t.children.some((n) => n === e || go(e, n));
}
const vo = /#/g,
  Mc = /&/g,
  Lc = /\//g,
  Sc = /=/g,
  Dc = /\?/g,
  Eo = /\+/g,
  Hc = /%5B/g,
  Vc = /%5D/g,
  yo = /%5E/g,
  Nc = /%60/g,
  bo = /%7B/g,
  Fc = /%7C/g,
  wo = /%7D/g,
  jc = /%20/g;
function _s(e) {
  return encodeURI("" + e)
    .replace(Fc, "|")
    .replace(Hc, "[")
    .replace(Vc, "]");
}
function $c(e) {
  return _s(e).replace(bo, "{").replace(wo, "}").replace(yo, "^");
}
function Zn(e) {
  return _s(e)
    .replace(Eo, "%2B")
    .replace(jc, "+")
    .replace(vo, "%23")
    .replace(Mc, "%26")
    .replace(Nc, "`")
    .replace(bo, "{")
    .replace(wo, "}")
    .replace(yo, "^");
}
function kc(e) {
  return Zn(e).replace(Sc, "%3D");
}
function Bc(e) {
  return _s(e).replace(vo, "%23").replace(Dc, "%3F");
}
function Uc(e) {
  return e == null ? "" : Bc(e).replace(Lc, "%2F");
}
function an(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Kc(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(Eo, " "),
      i = o.indexOf("="),
      c = an(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : an(o.slice(i + 1));
    if (c in t) {
      let f = t[c];
      xe(f) || (f = t[c] = [f]), f.push(l);
    } else t[c] = l;
  }
  return t;
}
function ur(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = kc(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (xe(s) ? s.map((o) => o && Zn(o)) : [s && Zn(s)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function zc(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = xe(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const qc = Symbol(""),
  fr = Symbol(""),
  gs = Symbol(""),
  vs = Symbol(""),
  Qn = Symbol("");
function Lt() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const r = e.indexOf(s);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function Ze(e, t, n, s, r) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((i, c) => {
      const l = (h) => {
          h === !1
            ? c(xt(4, { from: n, to: t }))
            : h instanceof Error
            ? c(h)
            : gc(h)
            ? c(xt(2, { from: t, to: h }))
            : (o &&
                s.enterCallbacks[r] === o &&
                typeof h == "function" &&
                o.push(h),
              i());
        },
        f = e.call(s && s.instances[r], t, n, l);
      let d = Promise.resolve(f);
      e.length < 3 && (d = d.then(l)), d.catch((h) => c(h));
    });
}
function Sn(e, t, n, s) {
  const r = [];
  for (const o of e)
    for (const i in o.components) {
      let c = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (Wc(c)) {
          const f = (c.__vccOpts || c)[t];
          f && r.push(Ze(f, n, s, o, i));
        } else {
          let l = c();
          r.push(() =>
            l.then((f) => {
              if (!f)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                );
              const d = Xl(f) ? f.default : f;
              o.components[i] = d;
              const m = (d.__vccOpts || d)[t];
              return m && Ze(m, n, s, o, i)();
            })
          );
        }
    }
  return r;
}
function Wc(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function ar(e) {
  const t = Vue.inject(gs),
    n = Vue.inject(vs),
    s = Vue.computed(() => t.resolve(Vue.unref(e.to))),
    r = Vue.computed(() => {
      const { matched: l } = s.value,
        { length: f } = l,
        d = l[f - 1],
        h = n.matched;
      if (!d || !h.length) return -1;
      const m = h.findIndex(Rt.bind(null, d));
      if (m > -1) return m;
      const b = dr(l[f - 2]);
      return f > 1 && dr(d) === b && h[h.length - 1].path !== b
        ? h.findIndex(Rt.bind(null, l[f - 2]))
        : m;
    }),
    o = Vue.computed(() => r.value > -1 && Yc(n.params, s.value.params)),
    i = Vue.computed(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        ho(n.params, s.value.params)
    );
  function c(l = {}) {
    return Jc(l)
      ? t[Vue.unref(e.replace) ? "replace" : "push"](Vue.unref(e.to)).catch(Ft)
      : Promise.resolve();
  }
  return {
    route: s,
    href: Vue.computed(() => s.value.href),
    isActive: o,
    isExactActive: i,
    navigate: c,
  };
}
const Zc = Vue.defineComponent({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: ar,
    setup(e, { slots: t }) {
      const n = Vue.reactive(ar(e)),
        { options: s } = Vue.inject(gs),
        r = Vue.computed(() => ({
          [hr(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [hr(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : Vue.h(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              o
            );
      };
    },
  }),
  Qc = Zc;
function Jc(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Yc(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!xe(r) || r.length !== s.length || s.some((o, i) => o !== r[i]))
      return !1;
  }
  return !0;
}
function dr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const hr = (e, t, n) => e ?? t ?? n,
  Xc = Vue.defineComponent({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Vue.inject(Qn),
        r = Vue.computed(() => e.route || s.value),
        o = Vue.inject(fr, 0),
        i = Vue.computed(() => {
          let f = Vue.unref(o);
          const { matched: d } = r.value;
          let h;
          for (; (h = d[f]) && !h.components; ) f++;
          return f;
        }),
        c = Vue.computed(() => r.value.matched[i.value]);
      Vue.provide(
        fr,
        Vue.computed(() => i.value + 1)
      ),
        Vue.provide(qc, c),
        Vue.provide(Qn, r);
      const l = Vue.ref();
      return (
        Vue.watch(
          () => [l.value, c.value, e.name],
          ([f, d, h], [m, b, A]) => {
            d &&
              ((d.instances[h] = f),
              b &&
                b !== d &&
                f &&
                f === m &&
                (d.leaveGuards.size || (d.leaveGuards = b.leaveGuards),
                d.updateGuards.size || (d.updateGuards = b.updateGuards))),
              f &&
                d &&
                (!b || !Rt(d, b) || !m) &&
                (d.enterCallbacks[h] || []).forEach((M) => M(f));
          },
          { flush: "post" }
        ),
        () => {
          const f = r.value,
            d = e.name,
            h = c.value,
            m = h && h.components[d];
          if (!m) return pr(n.default, { Component: m, route: f });
          const b = h.props[d],
            A = b
              ? b === !0
                ? f.params
                : typeof b == "function"
                ? b(f)
                : b
              : null,
            j = Vue.h(
              m,
              W({}, A, t, {
                onVnodeUnmounted: (D) => {
                  D.component.isUnmounted && (h.instances[d] = null);
                },
                ref: l,
              })
            );
          return pr(n.default, { Component: j, route: f }) || j;
        }
      );
    },
  });
function pr(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const Gc = Xc;
// createRouter
function eu(e) {
  const t = Oc(e.routes, e),
    n = e.parseQuery || Kc,
    s = e.stringifyQuery || ur,
    r = e.history,
    o = Lt(),
    i = Lt(),
    c = Lt(),
    l = Vue.shallowRef(qe);
  let f = qe;
  pt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const d = Mn.bind(null, (g) => "" + g),
    h = Mn.bind(null, Uc),
    m = Mn.bind(null, an);
  function b(g, C) {
    let x, T;
    return (
      mo(g) ? ((x = t.getRecordMatcher(g)), (T = C)) : (T = g), t.addRoute(T, x)
    );
  }
  function A(g) {
    const C = t.getRecordMatcher(g);
    C && t.removeRoute(C);
  }
  function M() {
    return t.getRoutes().map((g) => g.record);
  }
  function j(g) {
    return !!t.getRecordMatcher(g);
  }
  function D(g, C) {
    if (((C = W({}, C || l.value)), typeof g == "string")) {
      const p = Ln(n, g, C.path),
        _ = t.resolve({ path: p.path }, C),
        v = r.createHref(p.fullPath);
      return W(p, _, {
        params: m(_.params),
        hash: an(p.hash),
        redirectedFrom: void 0,
        href: v,
      });
    }
    let x;
    if ("path" in g) x = W({}, g, { path: Ln(n, g.path, C.path).path });
    else {
      const p = W({}, g.params);
      for (const _ in p) p[_] == null && delete p[_];
      (x = W({}, g, { params: h(p) })), (C.params = h(C.params));
    }
    const T = t.resolve(x, C),
      q = g.hash || "";
    T.params = d(m(T.params));
    const u = tc(s, W({}, g, { hash: $c(q), path: T.path })),
      a = r.createHref(u);
    return W(
      { fullPath: u, hash: q, query: s === ur ? zc(g.query) : g.query || {} },
      T,
      { redirectedFrom: void 0, href: a }
    );
  }
  function H(g) {
    return typeof g == "string" ? Ln(n, g, l.value.path) : W({}, g);
  }
  function U(g, C) {
    if (f !== g) return xt(8, { from: C, to: g });
  }
  function V(g) {
    return Pe(g);
  }
  function re(g) {
    return V(W(H(g), { replace: !0 }));
  }
  function ue(g) {
    const C = g.matched[g.matched.length - 1];
    if (C && C.redirect) {
      const { redirect: x } = C;
      let T = typeof x == "function" ? x(g) : x;
      return (
        typeof T == "string" &&
          ((T = T.includes("?") || T.includes("#") ? (T = H(T)) : { path: T }),
          (T.params = {})),
        W(
          { query: g.query, hash: g.hash, params: "path" in T ? {} : g.params },
          T
        )
      );
    }
  }
  function Pe(g, C) {
    const x = (f = D(g)),
      T = l.value,
      q = g.state,
      u = g.force,
      a = g.replace === !0,
      p = ue(x);
    if (p)
      return Pe(
        W(H(p), {
          state: typeof p == "object" ? W({}, q, p.state) : q,
          force: u,
          replace: a,
        }),
        C || x
      );
    const _ = x;
    _.redirectedFrom = C;
    let v;
    return (
      !u && nc(s, T, x) && ((v = xt(16, { to: _, from: T })), Ae(T, T, !0, !1)),
      (v ? Promise.resolve(v) : Ce(_, T))
        .catch((E) => (Fe(E) ? (Fe(E, 2) ? E : Ke(E)) : z(E, _, T)))
        .then((E) => {
          if (E) {
            if (Fe(E, 2))
              return Pe(
                W({ replace: a }, H(E.to), {
                  state: typeof E.to == "object" ? W({}, q, E.to.state) : q,
                  force: u,
                }),
                C || _
              );
          } else E = Xe(_, T, !0, a, q);
          return Ue(_, T, E), E;
        })
    );
  }
  function Ve(g, C) {
    const x = U(g, C);
    return x ? Promise.reject(x) : Promise.resolve();
  }
  function lt(g) {
    const C = ft.values().next().value;
    return C && typeof C.runWithContext == "function"
      ? C.runWithContext(g)
      : g();
  }
  function Ce(g, C) {
    let x;
    const [T, q, u] = tu(g, C);
    x = Sn(T.reverse(), "beforeRouteLeave", g, C);
    for (const p of T)
      p.leaveGuards.forEach((_) => {
        x.push(Ze(_, g, C));
      });
    const a = Ve.bind(null, g, C);
    return (
      x.push(a),
      oe(x)
        .then(() => {
          x = [];
          for (const p of o.list()) x.push(Ze(p, g, C));
          return x.push(a), oe(x);
        })
        .then(() => {
          x = Sn(q, "beforeRouteUpdate", g, C);
          for (const p of q)
            p.updateGuards.forEach((_) => {
              x.push(Ze(_, g, C));
            });
          return x.push(a), oe(x);
        })
        .then(() => {
          x = [];
          for (const p of g.matched)
            if (p.beforeEnter && !C.matched.includes(p))
              if (xe(p.beforeEnter))
                for (const _ of p.beforeEnter) x.push(Ze(_, g, C));
              else x.push(Ze(p.beforeEnter, g, C));
          return x.push(a), oe(x);
        })
        .then(
          () => (
            g.matched.forEach((p) => (p.enterCallbacks = {})),
            (x = Sn(u, "beforeRouteEnter", g, C)),
            x.push(a),
            oe(x)
          )
        )
        .then(() => {
          x = [];
          for (const p of i.list()) x.push(Ze(p, g, C));
          return x.push(a), oe(x);
        })
        .catch((p) => (Fe(p, 8) ? p : Promise.reject(p)))
    );
  }
  function Ue(g, C, x) {
    for (const T of c.list()) lt(() => T(g, C, x));
  }
  function Xe(g, C, x, T, q) {
    const u = U(g, C);
    if (u) return u;
    const a = C === qe,
      p = pt ? history.state : {};
    x &&
      (T || a
        ? r.replace(g.fullPath, W({ scroll: a && p && p.scroll }, q))
        : r.push(g.fullPath, q)),
      (l.value = g),
      Ae(g, C, x, a),
      Ke();
  }
  let Oe;
  function Tt() {
    Oe ||
      (Oe = r.listen((g, C, x) => {
        if (!Wt.listening) return;
        const T = D(g),
          q = ue(T);
        if (q) {
          Pe(W(q, { replace: !0 }), T).catch(Ft);
          return;
        }
        f = T;
        const u = l.value;
        pt && fc(tr(u.fullPath, x.delta), xn()),
          Ce(T, u)
            .catch((a) =>
              Fe(a, 12)
                ? a
                : Fe(a, 2)
                ? (Pe(a.to, T)
                    .then((p) => {
                      Fe(p, 20) &&
                        !x.delta &&
                        x.type === qt.pop &&
                        r.go(-1, !1);
                    })
                    .catch(Ft),
                  Promise.reject())
                : (x.delta && r.go(-x.delta, !1), z(a, T, u))
            )
            .then((a) => {
              (a = a || Xe(T, u, !1)),
                a &&
                  (x.delta && !Fe(a, 8)
                    ? r.go(-x.delta, !1)
                    : x.type === qt.pop && Fe(a, 20) && r.go(-1, !1)),
                Ue(T, u, a);
            })
            .catch(Ft);
      }));
  }
  let ct = Lt(),
    te = Lt(),
    Q;
  function z(g, C, x) {
    Ke(g);
    const T = te.list();
    return (
      T.length ? T.forEach((q) => q(g, C, x)) : console.error(g),
      Promise.reject(g)
    );
  }
  function Ne() {
    return Q && l.value !== qe
      ? Promise.resolve()
      : new Promise((g, C) => {
          ct.add([g, C]);
        });
  }
  function Ke(g) {
    return (
      Q ||
        ((Q = !g),
        Tt(),
        ct.list().forEach(([C, x]) => (g ? x(g) : C())),
        ct.reset()),
      g
    );
  }
  function Ae(g, C, x, T) {
    const { scrollBehavior: q } = e;
    if (!pt || !q) return Promise.resolve();
    const u =
      (!x && ac(tr(g.fullPath, 0))) ||
      ((T || !x) && history.state && history.state.scroll) ||
      null;
    return $r()
      .then(() => q(g, C, u))
      .then((a) => a && uc(a))
      .catch((a) => z(a, g, C));
  }
  const de = (g) => r.go(g);
  let ut;
  const ft = new Set(),
    Wt = {
      currentRoute: l,
      listening: !0,
      addRoute: b,
      removeRoute: A,
      hasRoute: j,
      getRoutes: M,
      resolve: D,
      options: e,
      push: V,
      replace: re,
      go: de,
      back: () => de(-1),
      forward: () => de(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: te.add,
      isReady: Ne,
      install(g) {
        const C = this;
        g.component("RouterLink", Qc),
          g.component("RouterView", Gc),
          (g.config.globalProperties.$router = C),
          Object.defineProperty(g.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Vue.unref(l),
          }),
          pt &&
            !ut &&
            l.value === qe &&
            ((ut = !0), V(r.location).catch((q) => {}));
        const x = {};
        for (const q in qe) x[q] = Vue.computed(() => l.value[q]);
        g.provide(gs, C), g.provide(vs, Vue.reactive(x)), g.provide(Qn, l);
        const T = g.unmount;
        ft.add(g),
          (g.unmount = function () {
            ft.delete(g),
              ft.size < 1 &&
                ((f = qe),
                Oe && Oe(),
                (Oe = null),
                (l.value = qe),
                (ut = !1),
                (Q = !1)),
              T();
          });
      },
    };
  function oe(g) {
    return g.reduce((C, x) => C.then(() => lt(x)), Promise.resolve());
  }
  return Wt;
}
function tu(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const c = t.matched[i];
    c && (e.matched.find((f) => Rt(f, c)) ? s.push(c) : n.push(c));
    const l = e.matched[i];
    l && (t.matched.find((f) => Rt(f, l)) || r.push(l));
  }
  return [n, s, r];
}
function nu() {
  return Vue.inject(vs);
}
