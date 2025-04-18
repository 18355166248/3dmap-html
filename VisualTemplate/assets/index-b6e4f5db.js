(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();
/**
 * @vue/shared v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Gn(e, t) {
  const n = new Set(e.split(","));
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const J = {},
  gt = [],
  ye = () => {},
  To = () => !1,
  dn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Zn = (e) => e.startsWith("onUpdate:"),
  re = Object.assign,
  Qn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Mo = Object.prototype.hasOwnProperty,
  U = (e, t) => Mo.call(e, t),
  N = Array.isArray,
  mt = (e) => hn(e) === "[object Map]",
  pr = (e) => hn(e) === "[object Set]",
  $ = (e) => typeof e == "function",
  te = (e) => typeof e == "string",
  lt = (e) => typeof e == "symbol",
  X = (e) => e !== null && typeof e == "object",
  gr = (e) => (X(e) || $(e)) && $(e.then) && $(e.catch),
  mr = Object.prototype.toString,
  hn = (e) => mr.call(e),
  Io = (e) => hn(e).slice(8, -1),
  _r = (e) => hn(e) === "[object Object]",
  Yn = (e) =>
    te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  At = Gn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  pn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Ho = /-(\w)/g,
  Le = pn((e) => e.replace(Ho, (t, n) => (n ? n.toUpperCase() : ""))),
  Lo = /\B([A-Z])/g,
  wt = pn((e) => e.replace(Lo, "-$1").toLowerCase()),
  gn = pn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Cn = pn((e) => (e ? `on${gn(e)}` : "")),
  Ye = (e, t) => !Object.is(e, t),
  Rn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  yr = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: s,
      value: n,
    });
  },
  No = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let ys;
const vr = () =>
  ys ||
  (ys =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Jn(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = te(s) ? $o(s) : Jn(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (te(e) || X(e)) return e;
}
const Fo = /;(?![^(]*\))/g,
  jo = /:([^]+)/,
  Vo = /\/\*[^]*?\*\//g;
function $o(e) {
  const t = {};
  return (
    e
      .replace(Vo, "")
      .split(Fo)
      .forEach((n) => {
        if (n) {
          const s = n.split(jo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function mn(e) {
  let t = "";
  if (te(e)) t = e;
  else if (N(e))
    for (let n = 0; n < e.length; n++) {
      const s = mn(e[n]);
      s && (t += s + " ");
    }
  else if (X(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Bo =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  ko = Gn(Bo);
function br(e) {
  return !!e || e === "";
}
const Su = (e) =>
    te(e)
      ? e
      : e == null
      ? ""
      : N(e) || (X(e) && (e.toString === mr || !$(e.toString)))
      ? JSON.stringify(e, Er, 2)
      : String(e),
  Er = (e, t) =>
    t && t.__v_isRef
      ? Er(e, t.value)
      : mt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], o) => ((n[Sn(s, o) + " =>"] = r), n),
            {}
          ),
        }
      : pr(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Sn(n)) }
      : lt(t)
      ? Sn(t)
      : X(t) && !N(t) && !_r(t)
      ? String(t)
      : t,
  Sn = (e, t = "") => {
    var n;
    return lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ee;
class Uo {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ee),
      !t && Ee && (this.index = (Ee.scopes || (Ee.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return (Ee = this), t();
      } finally {
        Ee = n;
      }
    }
  }
  on() {
    Ee = this;
  }
  off() {
    Ee = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Do(e, t = Ee) {
  t && t.active && t.effects.push(e);
}
function Ko() {
  return Ee;
}
let ot;
class Xn {
  constructor(t, n, s, r) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Do(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), Je();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (qo(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Xe();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Ze,
      n = ot;
    try {
      return (Ze = !0), (ot = this), this._runnings++, vs(this), this.fn();
    } finally {
      bs(this), this._runnings--, (ot = n), (Ze = t);
    }
  }
  stop() {
    this.active &&
      (vs(this), bs(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function qo(e) {
  return e.value;
}
function vs(e) {
  e._trackId++, (e._depsLength = 0);
}
function bs(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) wr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function wr(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let Ze = !0,
  Nn = 0;
const xr = [];
function Je() {
  xr.push(Ze), (Ze = !1);
}
function Xe() {
  const e = xr.pop();
  Ze = e === void 0 ? !0 : e;
}
function es() {
  Nn++;
}
function ts() {
  for (Nn--; !Nn && Fn.length; ) Fn.shift()();
}
function Cr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && wr(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const Fn = [];
function Rr(e, t, n) {
  es();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t &&
      (r ?? (r = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0),
      (s._dirtyLevel = t)),
      s._shouldSchedule &&
        (r ?? (r = e.get(s) === s._trackId)) &&
        (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
          s._dirtyLevel !== 2 &&
          ((s._shouldSchedule = !1), s.scheduler && Fn.push(s.scheduler)));
  }
  ts();
}
const Sr = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  on = new WeakMap(),
  it = Symbol(""),
  jn = Symbol("");
function me(e, t, n) {
  if (Ze && ot) {
    let s = on.get(e);
    s || on.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Sr(() => s.delete(n)))), Cr(ot, r);
  }
}
function je(e, t, n, s, r, o) {
  const i = on.get(e);
  if (!i) return;
  let u = [];
  if (t === "clear") u = [...i.values()];
  else if (n === "length" && N(e)) {
    const l = Number(s);
    i.forEach((d, f) => {
      (f === "length" || (!lt(f) && f >= l)) && u.push(d);
    });
  } else
    switch ((n !== void 0 && u.push(i.get(n)), t)) {
      case "add":
        N(e)
          ? Yn(n) && u.push(i.get("length"))
          : (u.push(i.get(it)), mt(e) && u.push(i.get(jn)));
        break;
      case "delete":
        N(e) || (u.push(i.get(it)), mt(e) && u.push(i.get(jn)));
        break;
      case "set":
        mt(e) && u.push(i.get(it));
        break;
    }
  es();
  for (const l of u) l && Rr(l, 4);
  ts();
}
function Wo(e, t) {
  const n = on.get(e);
  return n && n.get(t);
}
const zo = Gn("__proto__,__v_isRef,__isVue"),
  Pr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(lt)
  ),
  Es = Go();
function Go() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = D(this);
        for (let o = 0, i = this.length; o < i; o++) me(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(D)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Je(), es();
        const s = D(this)[t].apply(this, n);
        return ts(), Xe(), s;
      };
    }),
    e
  );
}
function Zo(e) {
  lt(e) || (e = String(e));
  const t = D(this);
  return me(t, "has", e), t.hasOwnProperty(e);
}
class Or {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return s === (r ? (o ? ci : Ir) : o ? Mr : Tr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const i = N(t);
    if (!r) {
      if (i && U(Es, n)) return Reflect.get(Es, n, s);
      if (n === "hasOwnProperty") return Zo;
    }
    const u = Reflect.get(t, n, s);
    return (lt(n) ? Pr.has(n) : zo(n)) || (r || me(t, "get", n), o)
      ? u
      : de(u)
      ? i && Yn(n)
        ? u
        : u.value
      : X(u)
      ? r
        ? Lr(u)
        : Kt(u)
      : u;
  }
}
class Ar extends Or {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const l = jt(o);
      if (
        (!ln(s) && !jt(s) && ((o = D(o)), (s = D(s))), !N(t) && de(o) && !de(s))
      )
        return l ? !1 : ((o.value = s), !0);
    }
    const i = N(t) && Yn(n) ? Number(n) < t.length : U(t, n),
      u = Reflect.set(t, n, s, r);
    return (
      t === D(r) && (i ? Ye(s, o) && je(t, "set", n, s) : je(t, "add", n, s)), u
    );
  }
  deleteProperty(t, n) {
    const s = U(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && je(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!lt(n) || !Pr.has(n)) && me(t, "has", n), s;
  }
  ownKeys(t) {
    return me(t, "iterate", N(t) ? "length" : it), Reflect.ownKeys(t);
  }
}
class Qo extends Or {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Yo = new Ar(),
  Jo = new Qo(),
  Xo = new Ar(!0);
const ns = (e) => e,
  _n = (e) => Reflect.getPrototypeOf(e);
function zt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = D(e),
    o = D(t);
  n || (Ye(t, o) && me(r, "get", t), me(r, "get", o));
  const { has: i } = _n(r),
    u = s ? ns : n ? os : Vt;
  if (i.call(r, t)) return u(e.get(t));
  if (i.call(r, o)) return u(e.get(o));
  e !== r && e.get(t);
}
function Gt(e, t = !1) {
  const n = this.__v_raw,
    s = D(n),
    r = D(e);
  return (
    t || (Ye(e, r) && me(s, "has", e), me(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function Zt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && me(D(e), "iterate", it), Reflect.get(e, "size", e)
  );
}
function ws(e) {
  e = D(e);
  const t = D(this);
  return _n(t).has.call(t, e) || (t.add(e), je(t, "add", e, e)), this;
}
function xs(e, t) {
  t = D(t);
  const n = D(this),
    { has: s, get: r } = _n(n);
  let o = s.call(n, e);
  o || ((e = D(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? Ye(t, i) && je(n, "set", e, t) : je(n, "add", e, t), this
  );
}
function Cs(e) {
  const t = D(this),
    { has: n, get: s } = _n(t);
  let r = n.call(t, e);
  r || ((e = D(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && je(t, "delete", e, void 0), o;
}
function Rs() {
  const e = D(this),
    t = e.size !== 0,
    n = e.clear();
  return t && je(e, "clear", void 0, void 0), n;
}
function Qt(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      u = D(i),
      l = t ? ns : e ? os : Vt;
    return (
      !e && me(u, "iterate", it), i.forEach((d, f) => s.call(r, l(d), l(f), o))
    );
  };
}
function Yt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = D(r),
      i = mt(o),
      u = e === "entries" || (e === Symbol.iterator && i),
      l = e === "keys" && i,
      d = r[e](...s),
      f = n ? ns : t ? os : Vt;
    return (
      !t && me(o, "iterate", l ? jn : it),
      {
        next() {
          const { value: h, done: p } = d.next();
          return p
            ? { value: h, done: p }
            : { value: u ? [f(h[0]), f(h[1])] : f(h), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function De(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ei() {
  const e = {
      get(o) {
        return zt(this, o);
      },
      get size() {
        return Zt(this);
      },
      has: Gt,
      add: ws,
      set: xs,
      delete: Cs,
      clear: Rs,
      forEach: Qt(!1, !1),
    },
    t = {
      get(o) {
        return zt(this, o, !1, !0);
      },
      get size() {
        return Zt(this);
      },
      has: Gt,
      add: ws,
      set: xs,
      delete: Cs,
      clear: Rs,
      forEach: Qt(!1, !0),
    },
    n = {
      get(o) {
        return zt(this, o, !0);
      },
      get size() {
        return Zt(this, !0);
      },
      has(o) {
        return Gt.call(this, o, !0);
      },
      add: De("add"),
      set: De("set"),
      delete: De("delete"),
      clear: De("clear"),
      forEach: Qt(!0, !1),
    },
    s = {
      get(o) {
        return zt(this, o, !0, !0);
      },
      get size() {
        return Zt(this, !0);
      },
      has(o) {
        return Gt.call(this, o, !0);
      },
      add: De("add"),
      set: De("set"),
      delete: De("delete"),
      clear: De("clear"),
      forEach: Qt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Yt(o, !1, !1)),
        (n[o] = Yt(o, !0, !1)),
        (t[o] = Yt(o, !1, !0)),
        (s[o] = Yt(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [ti, ni, si, ri] = ei();
function ss(e, t) {
  const n = t ? (e ? ri : si) : e ? ni : ti;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(U(n, r) && r in s ? n : s, r, o);
}
const oi = { get: ss(!1, !1) },
  ii = { get: ss(!1, !0) },
  li = { get: ss(!0, !1) };
const Tr = new WeakMap(),
  Mr = new WeakMap(),
  Ir = new WeakMap(),
  ci = new WeakMap();
function ui(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function fi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ui(Io(e));
}
function Kt(e) {
  return jt(e) ? e : rs(e, !1, Yo, oi, Tr);
}
function Hr(e) {
  return rs(e, !1, Xo, ii, Mr);
}
function Lr(e) {
  return rs(e, !0, Jo, li, Ir);
}
function rs(e, t, n, s, r) {
  if (!X(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = fi(e);
  if (i === 0) return e;
  const u = new Proxy(e, i === 2 ? s : n);
  return r.set(e, u), u;
}
function Tt(e) {
  return jt(e) ? Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function jt(e) {
  return !!(e && e.__v_isReadonly);
}
function ln(e) {
  return !!(e && e.__v_isShallow);
}
function Nr(e) {
  return e ? !!e.__v_raw : !1;
}
function D(e) {
  const t = e && e.__v_raw;
  return t ? D(t) : e;
}
function ai(e) {
  return Object.isExtensible(e) && yr(e, "__v_skip", !0), e;
}
const Vt = (e) => (X(e) ? Kt(e) : e),
  os = (e) => (X(e) ? Lr(e) : e);
class Fr {
  constructor(t, n, s, r) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Xn(
        () => t(this._value),
        () => Xt(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = D(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Ye(t._value, (t._value = t.effect.run())) &&
        Xt(t, 4),
      jr(t),
      t.effect._dirtyLevel >= 2 && Xt(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function di(e, t, n = !1) {
  let s, r;
  const o = $(e);
  return (
    o ? ((s = e), (r = ye)) : ((s = e.get), (r = e.set)),
    new Fr(s, r, o || !r, n)
  );
}
function jr(e) {
  var t;
  Ze &&
    ot &&
    ((e = D(e)),
    Cr(
      ot,
      (t = e.dep) != null
        ? t
        : (e.dep = Sr(() => (e.dep = void 0), e instanceof Fr ? e : void 0))
    ));
}
function Xt(e, t = 4, n) {
  e = D(e);
  const s = e.dep;
  s && Rr(s, t);
}
function de(e) {
  return !!(e && e.__v_isRef === !0);
}
function hi(e) {
  return Vr(e, !1);
}
function pi(e) {
  return Vr(e, !0);
}
function Vr(e, t) {
  return de(e) ? e : new gi(e, t);
}
class gi {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : D(t)),
      (this._value = n ? t : Vt(t));
  }
  get value() {
    return jr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || ln(t) || jt(t);
    (t = n ? t : D(t)),
      Ye(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Vt(t)), Xt(this, 4));
  }
}
function Ve(e) {
  return de(e) ? e.value : e;
}
const mi = {
  get: (e, t, n) => Ve(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return de(r) && !de(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function $r(e) {
  return Tt(e) ? e : new Proxy(e, mi);
}
function Pu(e) {
  const t = N(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = yi(e, n);
  return t;
}
class _i {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Wo(D(this._object), this._key);
  }
}
function yi(e, t, n) {
  const s = e[t];
  return de(s) ? s : new _i(e, t, n);
}
/**
 * @vue/runtime-core v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Qe(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    yn(r, t, n);
  }
}
function Re(e, t, n, s) {
  if ($(e)) {
    const r = Qe(e, t, n, s);
    return (
      r &&
        gr(r) &&
        r.catch((o) => {
          yn(o, t, n);
        }),
      r
    );
  }
  if (N(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++) r.push(Re(e[o], t, n, s));
    return r;
  }
}
function yn(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let f = 0; f < d.length; f++) if (d[f](e, i, u) === !1) return;
      }
      o = o.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Je(), Qe(l, null, 10, [e, i, u]), Xe();
      return;
    }
  }
  vi(e, n, r, s);
}
function vi(e, t, n, s = !0) {
  console.error(e);
}
let $t = !1,
  Vn = !1;
const le = [];
let He = 0;
const _t = [];
let qe = null,
  rt = 0;
const Br = Promise.resolve();
let is = null;
function kr(e) {
  const t = is || Br;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bi(e) {
  let t = He + 1,
    n = le.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = le[s],
      o = Bt(r);
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function ls(e) {
  (!le.length || !le.includes(e, $t && e.allowRecurse ? He + 1 : He)) &&
    (e.id == null ? le.push(e) : le.splice(bi(e.id), 0, e), Ur());
}
function Ur() {
  !$t && !Vn && ((Vn = !0), (is = Br.then(Kr)));
}
function Ei(e) {
  const t = le.indexOf(e);
  t > He && le.splice(t, 1);
}
function wi(e) {
  N(e)
    ? _t.push(...e)
    : (!qe || !qe.includes(e, e.allowRecurse ? rt + 1 : rt)) && _t.push(e),
    Ur();
}
function Ss(e, t, n = $t ? He + 1 : 0) {
  for (; n < le.length; n++) {
    const s = le[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue;
      le.splice(n, 1), n--, s();
    }
  }
}
function Dr(e) {
  if (_t.length) {
    const t = [...new Set(_t)].sort((n, s) => Bt(n) - Bt(s));
    if (((_t.length = 0), qe)) {
      qe.push(...t);
      return;
    }
    for (qe = t, rt = 0; rt < qe.length; rt++) qe[rt]();
    (qe = null), (rt = 0);
  }
}
const Bt = (e) => (e.id == null ? 1 / 0 : e.id),
  xi = (e, t) => {
    const n = Bt(e) - Bt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Kr(e) {
  (Vn = !1), ($t = !0), le.sort(xi);
  const t = ye;
  try {
    for (He = 0; He < le.length; He++) {
      const n = le[He];
      n && n.active !== !1 && Qe(n, null, 14);
    }
  } finally {
    (He = 0),
      (le.length = 0),
      Dr(),
      ($t = !1),
      (is = null),
      (le.length || _t.length) && Kr();
  }
}
function Ci(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || J;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const f = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: h, trim: p } = s[f] || J;
    p && (r = n.map((v) => (te(v) ? v.trim() : v))), h && (r = n.map(No));
  }
  let u,
    l = s[(u = Cn(t))] || s[(u = Cn(Le(t)))];
  !l && o && (l = s[(u = Cn(wt(t)))]), l && Re(l, e, 6, r);
  const d = s[u + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[u]) return;
    (e.emitted[u] = !0), Re(d, e, 6, r);
  }
}
function qr(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    u = !1;
  if (!$(e)) {
    const l = (d) => {
      const f = qr(d, t, !0);
      f && ((u = !0), re(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !o && !u
    ? (X(e) && s.set(e, null), null)
    : (N(o) ? o.forEach((l) => (i[l] = null)) : re(i, o),
      X(e) && s.set(e, i),
      i);
}
function vn(e, t) {
  return !e || !dn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      U(e, t[0].toLowerCase() + t.slice(1)) || U(e, wt(t)) || U(e, t));
}
let ce = null,
  Wr = null;
function cn(e) {
  const t = ce;
  return (ce = e), (Wr = (e && e.type.__scopeId) || null), t;
}
function Ri(e, t = ce, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && js(-1);
    const o = cn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      cn(o), s._d && js(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Pn(e) {
  const {
      type: t,
      vnode: n,
      proxy: s,
      withProxy: r,
      propsOptions: [o],
      slots: i,
      attrs: u,
      emit: l,
      render: d,
      renderCache: f,
      props: h,
      data: p,
      setupState: v,
      ctx: O,
      inheritAttrs: L,
    } = e,
    B = cn(e);
  let M, I;
  try {
    if (n.shapeFlag & 4) {
      const K = r || s,
        ee = K;
      (M = Ie(d.call(ee, K, f, h, v, p, O))), (I = u);
    } else {
      const K = t;
      (M = Ie(
        K.length > 1 ? K(h, { attrs: u, slots: i, emit: l }) : K(h, null)
      )),
        (I = t.props ? u : Si(u));
    }
  } catch (K) {
    (Lt.length = 0), yn(K, e, 1), (M = ae(yt));
  }
  let j = M;
  if (I && L !== !1) {
    const K = Object.keys(I),
      { shapeFlag: ee } = j;
    K.length &&
      ee & 7 &&
      (o && K.some(Zn) && (I = Pi(I, o)), (j = vt(j, I, !1, !0)));
  }
  return (
    n.dirs &&
      ((j = vt(j, null, !1, !0)),
      (j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (j.transition = n.transition),
    (M = j),
    cn(B),
    M
  );
}
const Si = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || dn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  Pi = (e, t) => {
    const n = {};
    for (const s in e) (!Zn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Oi(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: u, patchFlag: l } = t,
    d = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return s ? Ps(s, i, d) : !!i;
    if (l & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const p = f[h];
        if (i[p] !== s[p] && !vn(d, p)) return !0;
      }
    }
  } else
    return (r || u) && (!u || !u.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Ps(s, i, d)
        : !0
      : !!i;
  return !1;
}
function Ps(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !vn(n, o)) return !0;
  }
  return !1;
}
function Ai({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const zr = "components";
function Ti(e, t) {
  return Ii(zr, e, !0, t) || e;
}
const Mi = Symbol.for("v-ndc");
function Ii(e, t, n = !0, s = !1) {
  const r = ce || oe;
  if (r) {
    const o = r.type;
    if (e === zr) {
      const u = Sl(o, !1);
      if (u && (u === t || u === Le(t) || u === gn(Le(t)))) return o;
    }
    const i = Os(r[e] || o[e], t) || Os(r.appContext[e], t);
    return !i && s ? o : i;
  }
}
function Os(e, t) {
  return e && (e[t] || e[Le(t)] || e[gn(Le(t))]);
}
const Hi = (e) => e.__isSuspense;
function Li(e, t) {
  t && t.pendingBranch
    ? N(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : wi(e);
}
const Ni = Symbol.for("v-scx"),
  Fi = () => $e(Ni);
function Ou(e, t) {
  return cs(e, null, t);
}
const Jt = {};
function en(e, t, n) {
  return cs(e, t, n);
}
function cs(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: u } = J
) {
  if (t && o) {
    const V = t;
    t = (...ue) => {
      V(...ue), ee();
    };
  }
  const l = oe,
    d = (V) => (s === !0 ? V : pt(V, s === !1 ? 1 : void 0));
  let f,
    h = !1,
    p = !1;
  if (
    (de(e)
      ? ((f = () => e.value), (h = ln(e)))
      : Tt(e)
      ? ((f = () => d(e)), (h = !0))
      : N(e)
      ? ((p = !0),
        (h = e.some((V) => Tt(V) || ln(V))),
        (f = () =>
          e.map((V) => {
            if (de(V)) return V.value;
            if (Tt(V)) return d(V);
            if ($(V)) return Qe(V, l, 2);
          })))
      : $(e)
      ? t
        ? (f = () => Qe(e, l, 2))
        : (f = () => (v && v(), Re(e, l, 3, [O])))
      : (f = ye),
    t && s)
  ) {
    const V = f;
    f = () => pt(V());
  }
  let v,
    O = (V) => {
      v = j.onStop = () => {
        Qe(V, l, 4), (v = j.onStop = void 0);
      };
    },
    L;
  if (wn)
    if (
      ((O = ye),
      t ? n && Re(t, l, 3, [f(), p ? [] : void 0, O]) : f(),
      r === "sync")
    ) {
      const V = Fi();
      L = V.__watcherHandles || (V.__watcherHandles = []);
    } else return ye;
  let B = p ? new Array(e.length).fill(Jt) : Jt;
  const M = () => {
    if (!(!j.active || !j.dirty))
      if (t) {
        const V = j.run();
        (s || h || (p ? V.some((ue, ve) => Ye(ue, B[ve])) : Ye(V, B))) &&
          (v && v(),
          Re(t, l, 3, [V, B === Jt ? void 0 : p && B[0] === Jt ? [] : B, O]),
          (B = V));
      } else j.run();
  };
  M.allowRecurse = !!t;
  let I;
  r === "sync"
    ? (I = M)
    : r === "post"
    ? (I = () => pe(M, l && l.suspense))
    : ((M.pre = !0), l && (M.id = l.uid), (I = () => ls(M)));
  const j = new Xn(f, ye, I),
    K = Ko(),
    ee = () => {
      j.stop(), K && Qn(K.effects, j);
    };
  return (
    t
      ? n
        ? M()
        : (B = j.run())
      : r === "post"
      ? pe(j.run.bind(j), l && l.suspense)
      : j.run(),
    L && L.push(ee),
    ee
  );
}
function ji(e, t, n) {
  const s = this.proxy,
    r = te(e) ? (e.includes(".") ? Gr(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  $(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = qt(this),
    u = cs(r, o.bind(s), n);
  return i(), u;
}
function Gr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function pt(e, t = 1 / 0, n) {
  if (t <= 0 || !X(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, de(e))) pt(e.value, t, n);
  else if (N(e)) for (let s = 0; s < e.length; s++) pt(e[s], t, n);
  else if (pr(e) || mt(e))
    e.forEach((s) => {
      pt(s, t, n);
    });
  else if (_r(e)) for (const s in e) pt(e[s], t, n);
  return e;
}
function nt(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const u = r[i];
    o && (u.oldValue = o[i].value);
    let l = u.dir[s];
    l && (Je(), Re(l, n, 8, [e.el, u, e, t]), Xe());
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Zr(e, t) {
  return $(e) ? (() => re({ name: e.name }, t, { setup: e }))() : e;
}
const Mt = (e) => !!e.type.__asyncLoader,
  Qr = (e) => e.type.__isKeepAlive;
function Vi(e, t) {
  Yr(e, "a", t);
}
function $i(e, t) {
  Yr(e, "da", t);
}
function Yr(e, t, n = oe) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((bn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      Qr(r.parent.vnode) && Bi(s, t, n, r), (r = r.parent);
  }
}
function Bi(e, t, n, s) {
  const r = bn(t, e, s, !0);
  Xr(() => {
    Qn(s[t], r);
  }, n);
}
function bn(e, t, n = oe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          Je();
          const u = qt(n),
            l = Re(t, n, e, i);
          return u(), Xe(), l;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Be =
    (e) =>
    (t, n = oe) =>
      (!wn || e === "sp") && bn(e, (...s) => t(...s), n),
  ki = Be("bm"),
  Jr = Be("m"),
  Ui = Be("bu"),
  Di = Be("u"),
  Ki = Be("bum"),
  Xr = Be("um"),
  qi = Be("sp"),
  Wi = Be("rtg"),
  zi = Be("rtc");
function Gi(e, t = oe) {
  bn("ec", e, t);
}
function Au(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (N(e) || te(e)) {
    r = new Array(e.length);
    for (let i = 0, u = e.length; i < u; i++)
      r[i] = t(e[i], i, void 0, o && o[i]);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++) r[i] = t(i + 1, i, void 0, o && o[i]);
  } else if (X(e))
    if (e[Symbol.iterator])
      r = Array.from(e, (i, u) => t(i, u, void 0, o && o[u]));
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let u = 0, l = i.length; u < l; u++) {
        const d = i[u];
        r[u] = t(e[d], d, u, o && o[u]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
function Tu(e, t, n = {}, s, r) {
  if (ce.isCE || (ce.parent && Mt(ce.parent) && ce.parent.isCE))
    return t !== "default" && (n.name = t), ae("slot", n, s && s());
  let o = e[t];
  o && o._c && (o._d = !1), dt();
  const i = o && eo(o(n)),
    u = pl(
      we,
      { key: n.key || (i && i.key) || `_${t}` },
      i || (s ? s() : []),
      i && e._ === 1 ? 64 : -2
    );
  return (
    !r && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]),
    o && o._c && (o._d = !0),
    u
  );
}
function eo(e) {
  return e.some((t) =>
    fn(t) ? !(t.type === yt || (t.type === we && !eo(t.children))) : !0
  )
    ? e
    : null;
}
const $n = (e) => (e ? (mo(e) ? ds(e) || e.proxy : $n(e.parent)) : null),
  It = re(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => $n(e.parent),
    $root: (e) => $n(e.root),
    $emit: (e) => e.emit,
    $options: (e) => us(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), ls(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = kr.bind(e.proxy)),
    $watch: (e) => ji.bind(e),
  }),
  On = (e, t) => e !== J && !e.__isScriptSetup && U(e, t),
  Zi = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: u,
        appContext: l,
      } = e;
      let d;
      if (t[0] !== "$") {
        const v = i[t];
        if (v !== void 0)
          switch (v) {
            case 1:
              return s[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return o[t];
          }
        else {
          if (On(s, t)) return (i[t] = 1), s[t];
          if (r !== J && U(r, t)) return (i[t] = 2), r[t];
          if ((d = e.propsOptions[0]) && U(d, t)) return (i[t] = 3), o[t];
          if (n !== J && U(n, t)) return (i[t] = 4), n[t];
          Bn && (i[t] = 0);
        }
      }
      const f = It[t];
      let h, p;
      if (f) return t === "$attrs" && me(e.attrs, "get", ""), f(e);
      if ((h = u.__cssModules) && (h = h[t])) return h;
      if (n !== J && U(n, t)) return (i[t] = 4), n[t];
      if (((p = l.config.globalProperties), U(p, t))) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: o } = e;
      return On(r, t)
        ? ((r[t] = n), !0)
        : s !== J && U(s, t)
        ? ((s[t] = n), !0)
        : U(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: o,
        },
      },
      i
    ) {
      let u;
      return (
        !!n[i] ||
        (e !== J && U(e, i)) ||
        On(t, i) ||
        ((u = o[0]) && U(u, i)) ||
        U(s, i) ||
        U(It, i) ||
        U(r.config.globalProperties, i)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : U(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function As(e) {
  return N(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Bn = !0;
function Qi(e) {
  const t = us(e),
    n = e.proxy,
    s = e.ctx;
  (Bn = !1), t.beforeCreate && Ts(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: u,
    provide: l,
    inject: d,
    created: f,
    beforeMount: h,
    mounted: p,
    beforeUpdate: v,
    updated: O,
    activated: L,
    deactivated: B,
    beforeDestroy: M,
    beforeUnmount: I,
    destroyed: j,
    unmounted: K,
    render: ee,
    renderTracked: V,
    renderTriggered: ue,
    errorCaptured: ve,
    serverPrefetch: et,
    expose: Pe,
    inheritAttrs: ke,
    components: tt,
    directives: Oe,
    filters: xt,
  } = t;
  if ((d && Yi(d, s, null), i))
    for (const G in i) {
      const q = i[G];
      $(q) && (s[G] = q.bind(n));
    }
  if (r) {
    const G = r.call(n, n);
    X(G) && (e.data = Kt(G));
  }
  if (((Bn = !0), o))
    for (const G in o) {
      const q = o[G],
        Ne = $(q) ? q.bind(n, n) : $(q.get) ? q.get.bind(n, n) : ye,
        Ue = !$(q) && $(q.set) ? q.set.bind(n) : ye,
        Ae = xe({ get: Ne, set: Ue });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (he) => (Ae.value = he),
      });
    }
  if (u) for (const G in u) to(u[G], s, n, G);
  if (l) {
    const G = $(l) ? l.call(n) : l;
    Reflect.ownKeys(G).forEach((q) => {
      tn(q, G[q]);
    });
  }
  f && Ts(f, e, "c");
  function ne(G, q) {
    N(q) ? q.forEach((Ne) => G(Ne.bind(n))) : q && G(q.bind(n));
  }
  if (
    (ne(ki, h),
    ne(Jr, p),
    ne(Ui, v),
    ne(Di, O),
    ne(Vi, L),
    ne($i, B),
    ne(Gi, ve),
    ne(zi, V),
    ne(Wi, ue),
    ne(Ki, I),
    ne(Xr, K),
    ne(qi, et),
    N(Pe))
  )
    if (Pe.length) {
      const G = e.exposed || (e.exposed = {});
      Pe.forEach((q) => {
        Object.defineProperty(G, q, {
          get: () => n[q],
          set: (Ne) => (n[q] = Ne),
        });
      });
    } else e.exposed || (e.exposed = {});
  ee && e.render === ye && (e.render = ee),
    ke != null && (e.inheritAttrs = ke),
    tt && (e.components = tt),
    Oe && (e.directives = Oe);
}
function Yi(e, t, n = ye) {
  N(e) && (e = kn(e));
  for (const s in e) {
    const r = e[s];
    let o;
    X(r)
      ? "default" in r
        ? (o = $e(r.from || s, r.default, !0))
        : (o = $e(r.from || s))
      : (o = $e(r)),
      de(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o);
  }
}
function Ts(e, t, n) {
  Re(N(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function to(e, t, n, s) {
  const r = s.includes(".") ? Gr(n, s) : () => n[s];
  if (te(e)) {
    const o = t[e];
    $(o) && en(r, o);
  } else if ($(e)) en(r, e.bind(n));
  else if (X(e))
    if (N(e)) e.forEach((o) => to(o, t, n, s));
    else {
      const o = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(o) && en(r, o, e);
    }
}
function us(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    u = o.get(t);
  let l;
  return (
    u
      ? (l = u)
      : !r.length && !n && !s
      ? (l = t)
      : ((l = {}), r.length && r.forEach((d) => un(l, d, i, !0)), un(l, t, i)),
    X(t) && o.set(t, l),
    l
  );
}
function un(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && un(e, o, n, !0), r && r.forEach((i) => un(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const u = Ji[i] || (n && n[i]);
      e[i] = u ? u(e[i], t[i]) : t[i];
    }
  return e;
}
const Ji = {
  data: Ms,
  props: Is,
  emits: Is,
  methods: Ot,
  computed: Ot,
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  components: Ot,
  directives: Ot,
  watch: el,
  provide: Ms,
  inject: Xi,
};
function Ms(e, t) {
  return t
    ? e
      ? function () {
          return re(
            $(e) ? e.call(this, this) : e,
            $(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Xi(e, t) {
  return Ot(kn(e), kn(t));
}
function kn(e) {
  if (N(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ot(e, t) {
  return e ? re(Object.create(null), e, t) : t;
}
function Is(e, t) {
  return e
    ? N(e) && N(t)
      ? [...new Set([...e, ...t])]
      : re(Object.create(null), As(e), As(t ?? {}))
    : t;
}
function el(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = re(Object.create(null), e);
  for (const s in t) n[s] = fe(e[s], t[s]);
  return n;
}
function no() {
  return {
    app: null,
    config: {
      isNativeTag: To,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let tl = 0;
function nl(e, t) {
  return function (s, r = null) {
    $(s) || (s = re({}, s)), r != null && !X(r) && (r = null);
    const o = no(),
      i = new WeakSet();
    let u = !1;
    const l = (o.app = {
      _uid: tl++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Ol,
      get config() {
        return o.config;
      },
      set config(d) {},
      use(d, ...f) {
        return (
          i.has(d) ||
            (d && $(d.install)
              ? (i.add(d), d.install(l, ...f))
              : $(d) && (i.add(d), d(l, ...f))),
          l
        );
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), l;
      },
      component(d, f) {
        return f ? ((o.components[d] = f), l) : o.components[d];
      },
      directive(d, f) {
        return f ? ((o.directives[d] = f), l) : o.directives[d];
      },
      mount(d, f, h) {
        if (!u) {
          const p = ae(s, r);
          return (
            (p.appContext = o),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            f && t ? t(p, d) : e(p, d, h),
            (u = !0),
            (l._container = d),
            (d.__vue_app__ = l),
            ds(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        u && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(d, f) {
        return (o.provides[d] = f), l;
      },
      runWithContext(d) {
        const f = Ht;
        Ht = l;
        try {
          return d();
        } finally {
          Ht = f;
        }
      },
    });
    return l;
  };
}
let Ht = null;
function tn(e, t) {
  if (oe) {
    let n = oe.provides;
    const s = oe.parent && oe.parent.provides;
    s === n && (n = oe.provides = Object.create(s)), (n[e] = t);
  }
}
function $e(e, t, n = !1) {
  const s = oe || ce;
  if (s || Ht) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Ht._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && $(t) ? t.call(s && s.proxy) : t;
  }
}
const so = {},
  ro = () => Object.create(so),
  oo = (e) => Object.getPrototypeOf(e) === so;
function sl(e, t, n, s = !1) {
  const r = {},
    o = ro();
  (e.propsDefaults = Object.create(null)), io(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : Hr(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function rl(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    u = D(r),
    [l] = e.propsOptions;
  let d = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let p = f[h];
        if (vn(e.emitsOptions, p)) continue;
        const v = t[p];
        if (l)
          if (U(o, p)) v !== o[p] && ((o[p] = v), (d = !0));
          else {
            const O = Le(p);
            r[O] = Un(l, u, O, v, e, !1);
          }
        else v !== o[p] && ((o[p] = v), (d = !0));
      }
    }
  } else {
    io(e, t, r, o) && (d = !0);
    let f;
    for (const h in u)
      (!t || (!U(t, h) && ((f = wt(h)) === h || !U(t, f)))) &&
        (l
          ? n &&
            (n[h] !== void 0 || n[f] !== void 0) &&
            (r[h] = Un(l, u, h, void 0, e, !0))
          : delete r[h]);
    if (o !== u) for (const h in o) (!t || !U(t, h)) && (delete o[h], (d = !0));
  }
  d && je(e.attrs, "set", "");
}
function io(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    u;
  if (t)
    for (let l in t) {
      if (At(l)) continue;
      const d = t[l];
      let f;
      r && U(r, (f = Le(l)))
        ? !o || !o.includes(f)
          ? (n[f] = d)
          : ((u || (u = {}))[f] = d)
        : vn(e.emitsOptions, l) ||
          ((!(l in s) || d !== s[l]) && ((s[l] = d), (i = !0)));
    }
  if (o) {
    const l = D(n),
      d = u || J;
    for (let f = 0; f < o.length; f++) {
      const h = o[f];
      n[h] = Un(r, l, h, d[h], e, !U(d, h));
    }
  }
  return i;
}
function Un(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const u = U(i, "default");
    if (u && s === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && $(l)) {
        const { propsDefaults: d } = r;
        if (n in d) s = d[n];
        else {
          const f = qt(r);
          (s = d[n] = l.call(null, t)), f();
        }
      } else s = l;
    }
    i[0] &&
      (o && !u ? (s = !1) : i[1] && (s === "" || s === wt(n)) && (s = !0));
  }
  return s;
}
function lo(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    u = [];
  let l = !1;
  if (!$(e)) {
    const f = (h) => {
      l = !0;
      const [p, v] = lo(h, t, !0);
      re(i, p), v && u.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(f),
      e.extends && f(e.extends),
      e.mixins && e.mixins.forEach(f);
  }
  if (!o && !l) return X(e) && s.set(e, gt), gt;
  if (N(o))
    for (let f = 0; f < o.length; f++) {
      const h = Le(o[f]);
      Hs(h) && (i[h] = J);
    }
  else if (o)
    for (const f in o) {
      const h = Le(f);
      if (Hs(h)) {
        const p = o[f],
          v = (i[h] = N(p) || $(p) ? { type: p } : re({}, p));
        if (v) {
          const O = Fs(Boolean, v.type),
            L = Fs(String, v.type);
          (v[0] = O > -1),
            (v[1] = L < 0 || O < L),
            (O > -1 || U(v, "default")) && u.push(h);
        }
      }
    }
  const d = [i, u];
  return X(e) && s.set(e, d), d;
}
function Hs(e) {
  return e[0] !== "$" && !At(e);
}
function Ls(e) {
  return e === null
    ? "null"
    : typeof e == "function"
    ? e.name || ""
    : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function Ns(e, t) {
  return Ls(e) === Ls(t);
}
function Fs(e, t) {
  return N(t) ? t.findIndex((n) => Ns(n, e)) : $(t) && Ns(t, e) ? 0 : -1;
}
const co = (e) => e[0] === "_" || e === "$stable",
  fs = (e) => (N(e) ? e.map(Ie) : [Ie(e)]),
  ol = (e, t, n) => {
    if (t._n) return t;
    const s = Ri((...r) => fs(t(...r)), n);
    return (s._c = !1), s;
  },
  uo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (co(r)) continue;
      const o = e[r];
      if ($(o)) t[r] = ol(r, o, s);
      else if (o != null) {
        const i = fs(o);
        t[r] = () => i;
      }
    }
  },
  fo = (e, t) => {
    const n = fs(t);
    e.slots.default = () => n;
  },
  il = (e, t) => {
    const n = (e.slots = ro());
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (re(n, t), yr(n, "_", s, !0)) : uo(t, n);
    } else t && fo(e, t);
  },
  ll = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = J;
    if (s.shapeFlag & 32) {
      const u = t._;
      u
        ? n && u === 1
          ? (o = !1)
          : (re(r, t), !n && u === 1 && delete r._)
        : ((o = !t.$stable), uo(t, r)),
        (i = t);
    } else t && (fo(e, t), (i = { default: 1 }));
    if (o) for (const u in r) !co(u) && i[u] == null && delete r[u];
  };
function Dn(e, t, n, s, r = !1) {
  if (N(e)) {
    e.forEach((p, v) => Dn(p, t && (N(t) ? t[v] : t), n, s, r));
    return;
  }
  if (Mt(s) && !r) return;
  const o = s.shapeFlag & 4 ? ds(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: u, r: l } = e,
    d = t && t.r,
    f = u.refs === J ? (u.refs = {}) : u.refs,
    h = u.setupState;
  if (
    (d != null &&
      d !== l &&
      (te(d)
        ? ((f[d] = null), U(h, d) && (h[d] = null))
        : de(d) && (d.value = null)),
    $(l))
  )
    Qe(l, u, 12, [i, f]);
  else {
    const p = te(l),
      v = de(l);
    if (p || v) {
      const O = () => {
        if (e.f) {
          const L = p ? (U(h, l) ? h[l] : f[l]) : l.value;
          r
            ? N(L) && Qn(L, o)
            : N(L)
            ? L.includes(o) || L.push(o)
            : p
            ? ((f[l] = [o]), U(h, l) && (h[l] = f[l]))
            : ((l.value = [o]), e.k && (f[e.k] = l.value));
        } else
          p
            ? ((f[l] = i), U(h, l) && (h[l] = i))
            : v && ((l.value = i), e.k && (f[e.k] = i));
      };
      i ? ((O.id = -1), pe(O, n)) : O();
    }
  }
}
const pe = Li;
function cl(e) {
  return ul(e);
}
function ul(e, t) {
  const n = vr();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: u,
      createComment: l,
      setText: d,
      setElementText: f,
      parentNode: h,
      nextSibling: p,
      setScopeId: v = ye,
      insertStaticContent: O,
    } = e,
    L = (
      c,
      a,
      g,
      y = null,
      m = null,
      w = null,
      R = void 0,
      E = null,
      x = !!a.dynamicChildren
    ) => {
      if (c === a) return;
      c && !St(c, a) && ((y = _(c)), he(c, m, w, !0), (c = null)),
        a.patchFlag === -2 && ((x = !1), (a.dynamicChildren = null));
      const { type: b, ref: P, shapeFlag: H } = a;
      switch (b) {
        case En:
          B(c, a, g, y);
          break;
        case yt:
          M(c, a, g, y);
          break;
        case nn:
          c == null && I(a, g, y, R);
          break;
        case we:
          tt(c, a, g, y, m, w, R, E, x);
          break;
        default:
          H & 1
            ? ee(c, a, g, y, m, w, R, E, x)
            : H & 6
            ? Oe(c, a, g, y, m, w, R, E, x)
            : (H & 64 || H & 128) && b.process(c, a, g, y, m, w, R, E, x, A);
      }
      P != null && m && Dn(P, c && c.ref, w, a || c, !a);
    },
    B = (c, a, g, y) => {
      if (c == null) s((a.el = u(a.children)), g, y);
      else {
        const m = (a.el = c.el);
        a.children !== c.children && d(m, a.children);
      }
    },
    M = (c, a, g, y) => {
      c == null ? s((a.el = l(a.children || "")), g, y) : (a.el = c.el);
    },
    I = (c, a, g, y) => {
      [c.el, c.anchor] = O(c.children, a, g, y, c.el, c.anchor);
    },
    j = ({ el: c, anchor: a }, g, y) => {
      let m;
      for (; c && c !== a; ) (m = p(c)), s(c, g, y), (c = m);
      s(a, g, y);
    },
    K = ({ el: c, anchor: a }) => {
      let g;
      for (; c && c !== a; ) (g = p(c)), r(c), (c = g);
      r(a);
    },
    ee = (c, a, g, y, m, w, R, E, x) => {
      a.type === "svg" ? (R = "svg") : a.type === "math" && (R = "mathml"),
        c == null ? V(a, g, y, m, w, R, E, x) : et(c, a, m, w, R, E, x);
    },
    V = (c, a, g, y, m, w, R, E) => {
      let x, b;
      const { props: P, shapeFlag: H, transition: T, dirs: F } = c;
      if (
        ((x = c.el = i(c.type, w, P && P.is, P)),
        H & 8
          ? f(x, c.children)
          : H & 16 && ve(c.children, x, null, y, m, An(c, w), R, E),
        F && nt(c, null, y, "created"),
        ue(x, c, c.scopeId, R, y),
        P)
      ) {
        for (const Z in P)
          Z !== "value" &&
            !At(Z) &&
            o(x, Z, null, P[Z], w, c.children, y, m, ie);
        "value" in P && o(x, "value", null, P.value, w),
          (b = P.onVnodeBeforeMount) && Me(b, y, c);
      }
      F && nt(c, null, y, "beforeMount");
      const k = fl(m, T);
      k && T.beforeEnter(x),
        s(x, a, g),
        ((b = P && P.onVnodeMounted) || k || F) &&
          pe(() => {
            b && Me(b, y, c), k && T.enter(x), F && nt(c, null, y, "mounted");
          }, m);
    },
    ue = (c, a, g, y, m) => {
      if ((g && v(c, g), y)) for (let w = 0; w < y.length; w++) v(c, y[w]);
      if (m) {
        let w = m.subTree;
        if (a === w) {
          const R = m.vnode;
          ue(c, R, R.scopeId, R.slotScopeIds, m.parent);
        }
      }
    },
    ve = (c, a, g, y, m, w, R, E, x = 0) => {
      for (let b = x; b < c.length; b++) {
        const P = (c[b] = E ? We(c[b]) : Ie(c[b]));
        L(null, P, a, g, y, m, w, R, E);
      }
    },
    et = (c, a, g, y, m, w, R) => {
      const E = (a.el = c.el);
      let { patchFlag: x, dynamicChildren: b, dirs: P } = a;
      x |= c.patchFlag & 16;
      const H = c.props || J,
        T = a.props || J;
      let F;
      if (
        (g && st(g, !1),
        (F = T.onVnodeBeforeUpdate) && Me(F, g, a, c),
        P && nt(a, c, g, "beforeUpdate"),
        g && st(g, !0),
        b
          ? Pe(c.dynamicChildren, b, E, g, y, An(a, m), w)
          : R || q(c, a, E, null, g, y, An(a, m), w, !1),
        x > 0)
      ) {
        if (x & 16) ke(E, a, H, T, g, y, m);
        else if (
          (x & 2 && H.class !== T.class && o(E, "class", null, T.class, m),
          x & 4 && o(E, "style", H.style, T.style, m),
          x & 8)
        ) {
          const k = a.dynamicProps;
          for (let Z = 0; Z < k.length; Z++) {
            const Y = k[Z],
              se = H[Y],
              be = T[Y];
            (be !== se || Y === "value") &&
              o(E, Y, se, be, m, c.children, g, y, ie);
          }
        }
        x & 1 && c.children !== a.children && f(E, a.children);
      } else !R && b == null && ke(E, a, H, T, g, y, m);
      ((F = T.onVnodeUpdated) || P) &&
        pe(() => {
          F && Me(F, g, a, c), P && nt(a, c, g, "updated");
        }, y);
    },
    Pe = (c, a, g, y, m, w, R) => {
      for (let E = 0; E < a.length; E++) {
        const x = c[E],
          b = a[E],
          P =
            x.el && (x.type === we || !St(x, b) || x.shapeFlag & 70)
              ? h(x.el)
              : g;
        L(x, b, P, null, y, m, w, R, !0);
      }
    },
    ke = (c, a, g, y, m, w, R) => {
      if (g !== y) {
        if (g !== J)
          for (const E in g)
            !At(E) && !(E in y) && o(c, E, g[E], null, R, a.children, m, w, ie);
        for (const E in y) {
          if (At(E)) continue;
          const x = y[E],
            b = g[E];
          x !== b && E !== "value" && o(c, E, b, x, R, a.children, m, w, ie);
        }
        "value" in y && o(c, "value", g.value, y.value, R);
      }
    },
    tt = (c, a, g, y, m, w, R, E, x) => {
      const b = (a.el = c ? c.el : u("")),
        P = (a.anchor = c ? c.anchor : u(""));
      let { patchFlag: H, dynamicChildren: T, slotScopeIds: F } = a;
      F && (E = E ? E.concat(F) : F),
        c == null
          ? (s(b, g, y), s(P, g, y), ve(a.children || [], g, P, m, w, R, E, x))
          : H > 0 && H & 64 && T && c.dynamicChildren
          ? (Pe(c.dynamicChildren, T, g, m, w, R, E),
            (a.key != null || (m && a === m.subTree)) && ao(c, a, !0))
          : q(c, a, g, P, m, w, R, E, x);
    },
    Oe = (c, a, g, y, m, w, R, E, x) => {
      (a.slotScopeIds = E),
        c == null
          ? a.shapeFlag & 512
            ? m.ctx.activate(a, g, y, R, x)
            : xt(a, g, y, m, w, R, x)
          : ct(c, a, x);
    },
    xt = (c, a, g, y, m, w, R) => {
      const E = (c.component = El(c, y, m));
      if ((Qr(c) && (E.ctx.renderer = A), wl(E), E.asyncDep)) {
        if ((m && m.registerDep(E, ne), !c.el)) {
          const x = (E.subTree = ae(yt));
          M(null, x, a, g);
        }
      } else ne(E, c, a, g, m, w, R);
    },
    ct = (c, a, g) => {
      const y = (a.component = c.component);
      if (Oi(c, a, g))
        if (y.asyncDep && !y.asyncResolved) {
          G(y, a, g);
          return;
        } else (y.next = a), Ei(y.update), (y.effect.dirty = !0), y.update();
      else (a.el = c.el), (y.vnode = a);
    },
    ne = (c, a, g, y, m, w, R) => {
      const E = () => {
          if (c.isMounted) {
            let { next: P, bu: H, u: T, parent: F, vnode: k } = c;
            {
              const at = ho(c);
              if (at) {
                P && ((P.el = k.el), G(c, P, R)),
                  at.asyncDep.then(() => {
                    c.isUnmounted || E();
                  });
                return;
              }
            }
            let Z = P,
              Y;
            st(c, !1),
              P ? ((P.el = k.el), G(c, P, R)) : (P = k),
              H && Rn(H),
              (Y = P.props && P.props.onVnodeBeforeUpdate) && Me(Y, F, P, k),
              st(c, !0);
            const se = Pn(c),
              be = c.subTree;
            (c.subTree = se),
              L(be, se, h(be.el), _(be), c, m, w),
              (P.el = se.el),
              Z === null && Ai(c, se.el),
              T && pe(T, m),
              (Y = P.props && P.props.onVnodeUpdated) &&
                pe(() => Me(Y, F, P, k), m);
          } else {
            let P;
            const { el: H, props: T } = a,
              { bm: F, m: k, parent: Z } = c,
              Y = Mt(a);
            if (
              (st(c, !1),
              F && Rn(F),
              !Y && (P = T && T.onVnodeBeforeMount) && Me(P, Z, a),
              st(c, !0),
              H && Q)
            ) {
              const se = () => {
                (c.subTree = Pn(c)), Q(H, c.subTree, c, m, null);
              };
              Y
                ? a.type.__asyncLoader().then(() => !c.isUnmounted && se())
                : se();
            } else {
              const se = (c.subTree = Pn(c));
              L(null, se, g, y, c, m, w), (a.el = se.el);
            }
            if ((k && pe(k, m), !Y && (P = T && T.onVnodeMounted))) {
              const se = a;
              pe(() => Me(P, Z, se), m);
            }
            (a.shapeFlag & 256 ||
              (Z && Mt(Z.vnode) && Z.vnode.shapeFlag & 256)) &&
              c.a &&
              pe(c.a, m),
              (c.isMounted = !0),
              (a = g = y = null);
          }
        },
        x = (c.effect = new Xn(E, ye, () => ls(b), c.scope)),
        b = (c.update = () => {
          x.dirty && x.run();
        });
      (b.id = c.uid), st(c, !0), b();
    },
    G = (c, a, g) => {
      a.component = c;
      const y = c.vnode.props;
      (c.vnode = a),
        (c.next = null),
        rl(c, a.props, y, g),
        ll(c, a.children, g),
        Je(),
        Ss(c),
        Xe();
    },
    q = (c, a, g, y, m, w, R, E, x = !1) => {
      const b = c && c.children,
        P = c ? c.shapeFlag : 0,
        H = a.children,
        { patchFlag: T, shapeFlag: F } = a;
      if (T > 0) {
        if (T & 128) {
          Ue(b, H, g, y, m, w, R, E, x);
          return;
        } else if (T & 256) {
          Ne(b, H, g, y, m, w, R, E, x);
          return;
        }
      }
      F & 8
        ? (P & 16 && ie(b, m, w), H !== b && f(g, H))
        : P & 16
        ? F & 16
          ? Ue(b, H, g, y, m, w, R, E, x)
          : ie(b, m, w, !0)
        : (P & 8 && f(g, ""), F & 16 && ve(H, g, y, m, w, R, E, x));
    },
    Ne = (c, a, g, y, m, w, R, E, x) => {
      (c = c || gt), (a = a || gt);
      const b = c.length,
        P = a.length,
        H = Math.min(b, P);
      let T;
      for (T = 0; T < H; T++) {
        const F = (a[T] = x ? We(a[T]) : Ie(a[T]));
        L(c[T], F, g, null, m, w, R, E, x);
      }
      b > P ? ie(c, m, w, !0, !1, H) : ve(a, g, y, m, w, R, E, x, H);
    },
    Ue = (c, a, g, y, m, w, R, E, x) => {
      let b = 0;
      const P = a.length;
      let H = c.length - 1,
        T = P - 1;
      for (; b <= H && b <= T; ) {
        const F = c[b],
          k = (a[b] = x ? We(a[b]) : Ie(a[b]));
        if (St(F, k)) L(F, k, g, null, m, w, R, E, x);
        else break;
        b++;
      }
      for (; b <= H && b <= T; ) {
        const F = c[H],
          k = (a[T] = x ? We(a[T]) : Ie(a[T]));
        if (St(F, k)) L(F, k, g, null, m, w, R, E, x);
        else break;
        H--, T--;
      }
      if (b > H) {
        if (b <= T) {
          const F = T + 1,
            k = F < P ? a[F].el : y;
          for (; b <= T; )
            L(null, (a[b] = x ? We(a[b]) : Ie(a[b])), g, k, m, w, R, E, x), b++;
        }
      } else if (b > T) for (; b <= H; ) he(c[b], m, w, !0), b++;
      else {
        const F = b,
          k = b,
          Z = new Map();
        for (b = k; b <= T; b++) {
          const _e = (a[b] = x ? We(a[b]) : Ie(a[b]));
          _e.key != null && Z.set(_e.key, b);
        }
        let Y,
          se = 0;
        const be = T - k + 1;
        let at = !1,
          gs = 0;
        const Ct = new Array(be);
        for (b = 0; b < be; b++) Ct[b] = 0;
        for (b = F; b <= H; b++) {
          const _e = c[b];
          if (se >= be) {
            he(_e, m, w, !0);
            continue;
          }
          let Te;
          if (_e.key != null) Te = Z.get(_e.key);
          else
            for (Y = k; Y <= T; Y++)
              if (Ct[Y - k] === 0 && St(_e, a[Y])) {
                Te = Y;
                break;
              }
          Te === void 0
            ? he(_e, m, w, !0)
            : ((Ct[Te - k] = b + 1),
              Te >= gs ? (gs = Te) : (at = !0),
              L(_e, a[Te], g, null, m, w, R, E, x),
              se++);
        }
        const ms = at ? al(Ct) : gt;
        for (Y = ms.length - 1, b = be - 1; b >= 0; b--) {
          const _e = k + b,
            Te = a[_e],
            _s = _e + 1 < P ? a[_e + 1].el : y;
          Ct[b] === 0
            ? L(null, Te, g, _s, m, w, R, E, x)
            : at && (Y < 0 || b !== ms[Y] ? Ae(Te, g, _s, 2) : Y--);
        }
      }
    },
    Ae = (c, a, g, y, m = null) => {
      const { el: w, type: R, transition: E, children: x, shapeFlag: b } = c;
      if (b & 6) {
        Ae(c.component.subTree, a, g, y);
        return;
      }
      if (b & 128) {
        c.suspense.move(a, g, y);
        return;
      }
      if (b & 64) {
        R.move(c, a, g, A);
        return;
      }
      if (R === we) {
        s(w, a, g);
        for (let H = 0; H < x.length; H++) Ae(x[H], a, g, y);
        s(c.anchor, a, g);
        return;
      }
      if (R === nn) {
        j(c, a, g);
        return;
      }
      if (y !== 2 && b & 1 && E)
        if (y === 0) E.beforeEnter(w), s(w, a, g), pe(() => E.enter(w), m);
        else {
          const { leave: H, delayLeave: T, afterLeave: F } = E,
            k = () => s(w, a, g),
            Z = () => {
              H(w, () => {
                k(), F && F();
              });
            };
          T ? T(w, k, Z) : Z();
        }
      else s(w, a, g);
    },
    he = (c, a, g, y = !1, m = !1) => {
      const {
        type: w,
        props: R,
        ref: E,
        children: x,
        dynamicChildren: b,
        shapeFlag: P,
        patchFlag: H,
        dirs: T,
      } = c;
      if ((E != null && Dn(E, null, g, c, !0), P & 256)) {
        a.ctx.deactivate(c);
        return;
      }
      const F = P & 1 && T,
        k = !Mt(c);
      let Z;
      if ((k && (Z = R && R.onVnodeBeforeUnmount) && Me(Z, a, c), P & 6))
        Wt(c.component, g, y);
      else {
        if (P & 128) {
          c.suspense.unmount(g, y);
          return;
        }
        F && nt(c, null, a, "beforeUnmount"),
          P & 64
            ? c.type.remove(c, a, g, m, A, y)
            : b && (w !== we || (H > 0 && H & 64))
            ? ie(b, a, g, !1, !0)
            : ((w === we && H & 384) || (!m && P & 16)) && ie(x, a, g),
          y && ut(c);
      }
      ((k && (Z = R && R.onVnodeUnmounted)) || F) &&
        pe(() => {
          Z && Me(Z, a, c), F && nt(c, null, a, "unmounted");
        }, g);
    },
    ut = (c) => {
      const { type: a, el: g, anchor: y, transition: m } = c;
      if (a === we) {
        ft(g, y);
        return;
      }
      if (a === nn) {
        K(c);
        return;
      }
      const w = () => {
        r(g), m && !m.persisted && m.afterLeave && m.afterLeave();
      };
      if (c.shapeFlag & 1 && m && !m.persisted) {
        const { leave: R, delayLeave: E } = m,
          x = () => R(g, w);
        E ? E(c.el, w, x) : x();
      } else w();
    },
    ft = (c, a) => {
      let g;
      for (; c !== a; ) (g = p(c)), r(c), (c = g);
      r(a);
    },
    Wt = (c, a, g) => {
      const { bum: y, scope: m, update: w, subTree: R, um: E } = c;
      y && Rn(y),
        m.stop(),
        w && ((w.active = !1), he(R, c, a, g)),
        E && pe(E, a),
        pe(() => {
          c.isUnmounted = !0;
        }, a),
        a &&
          a.pendingBranch &&
          !a.isUnmounted &&
          c.asyncDep &&
          !c.asyncResolved &&
          c.suspenseId === a.pendingId &&
          (a.deps--, a.deps === 0 && a.resolve());
    },
    ie = (c, a, g, y = !1, m = !1, w = 0) => {
      for (let R = w; R < c.length; R++) he(c[R], a, g, y, m);
    },
    _ = (c) =>
      c.shapeFlag & 6
        ? _(c.component.subTree)
        : c.shapeFlag & 128
        ? c.suspense.next()
        : p(c.anchor || c.el);
  let S = !1;
  const C = (c, a, g) => {
      c == null
        ? a._vnode && he(a._vnode, null, null, !0)
        : L(a._vnode || null, c, a, null, null, null, g),
        S || ((S = !0), Ss(), Dr(), (S = !1)),
        (a._vnode = c);
    },
    A = {
      p: L,
      um: he,
      m: Ae,
      r: ut,
      mt: xt,
      mc: ve,
      pc: q,
      pbc: Pe,
      n: _,
      o: e,
    };
  let W, Q;
  return t && ([W, Q] = t(A)), { render: C, hydrate: W, createApp: nl(C, W) };
}
function An({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function st({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function fl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ao(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (N(s) && N(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let u = r[o];
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) &&
          ((u = r[o] = We(r[o])), (u.el = i.el)),
        n || ao(i, u)),
        u.type === En && (u.el = i.el);
    }
}
function al(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, u;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const d = e[s];
    if (d !== 0) {
      if (((r = n[n.length - 1]), e[r] < d)) {
        (t[s] = r), n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        (u = (o + i) >> 1), e[n[u]] < d ? (o = u + 1) : (i = u);
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s));
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; ) (n[o] = i), (i = t[i]);
  return n;
}
function ho(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : ho(t);
}
const dl = (e) => e.__isTeleport,
  we = Symbol.for("v-fgt"),
  En = Symbol.for("v-txt"),
  yt = Symbol.for("v-cmt"),
  nn = Symbol.for("v-stc"),
  Lt = [];
let Ce = null;
function dt(e = !1) {
  Lt.push((Ce = e ? null : []));
}
function hl() {
  Lt.pop(), (Ce = Lt[Lt.length - 1] || null);
}
let kt = 1;
function js(e) {
  kt += e;
}
function po(e) {
  return (
    (e.dynamicChildren = kt > 0 ? Ce || gt : null),
    hl(),
    kt > 0 && Ce && Ce.push(e),
    e
  );
}
function Rt(e, t, n, s, r, o) {
  return po(ge(e, t, n, s, r, o, !0));
}
function pl(e, t, n, s, r) {
  return po(ae(e, t, n, s, r, !0));
}
function fn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  return e.type === t.type && e.key === t.key;
}
const go = ({ key: e }) => e ?? null,
  sn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? te(e) || de(e) || $(e)
        ? { i: ce, r: e, k: t, f: !!n }
        : e
      : null
  );
function ge(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === we ? 0 : 1,
  i = !1,
  u = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && go(t),
    ref: t && sn(t),
    scopeId: Wr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ce,
  };
  return (
    u
      ? (as(l, n), o & 128 && e.normalize(l))
      : n && (l.shapeFlag |= te(n) ? 8 : 16),
    kt > 0 &&
      !i &&
      Ce &&
      (l.patchFlag > 0 || o & 6) &&
      l.patchFlag !== 32 &&
      Ce.push(l),
    l
  );
}
const ae = gl;
function gl(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Mi) && (e = yt), fn(e))) {
    const u = vt(e, t, !0);
    return (
      n && as(u, n),
      kt > 0 &&
        !o &&
        Ce &&
        (u.shapeFlag & 6 ? (Ce[Ce.indexOf(e)] = u) : Ce.push(u)),
      (u.patchFlag |= -2),
      u
    );
  }
  if ((Pl(e) && (e = e.__vccOpts), t)) {
    t = ml(t);
    let { class: u, style: l } = t;
    u && !te(u) && (t.class = mn(u)),
      X(l) && (Nr(l) && !N(l) && (l = re({}, l)), (t.style = Jn(l)));
  }
  const i = te(e) ? 1 : Hi(e) ? 128 : dl(e) ? 64 : X(e) ? 4 : $(e) ? 2 : 0;
  return ge(e, t, n, s, r, i, o, !0);
}
function ml(e) {
  return e ? (Nr(e) || oo(e) ? re({}, e) : e) : null;
}
function vt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: u, transition: l } = e,
    d = t ? yl(r || {}, t) : r,
    f = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && go(d),
      ref:
        t && t.ref
          ? n && o
            ? N(o)
              ? o.concat(sn(t))
              : [o, sn(t)]
            : sn(t)
          : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: u,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== we ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && vt(e.ssContent),
      ssFallback: e.ssFallback && vt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return l && s && (f.transition = l.clone(f)), f;
}
function _l(e = " ", t = 0) {
  return ae(En, null, e, t);
}
function Mu(e, t) {
  const n = ae(nn, null, e);
  return (n.staticCount = t), n;
}
function Ie(e) {
  return e == null || typeof e == "boolean"
    ? ae(yt)
    : N(e)
    ? ae(we, null, e.slice())
    : typeof e == "object"
    ? We(e)
    : ae(En, null, String(e));
}
function We(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : vt(e);
}
function as(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (N(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), as(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !oo(t)
        ? (t._ctx = ce)
        : r === 3 &&
          ce &&
          (ce.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    $(t)
      ? ((t = { default: t, _ctx: ce }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [_l(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function yl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = mn([t.class, s.class]));
      else if (r === "style") t.style = Jn([t.style, s.style]);
      else if (dn(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(N(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Me(e, t, n, s = null) {
  Re(e, t, 7, [n, s]);
}
const vl = no();
let bl = 0;
function El(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || vl,
    o = {
      uid: bl++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Uo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: lo(s, r),
      emitsOptions: qr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: J,
      inheritAttrs: s.inheritAttrs,
      ctx: J,
      data: J,
      props: J,
      attrs: J,
      slots: J,
      refs: J,
      setupState: J,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Ci.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let oe = null;
const Iu = () => oe || ce;
let an, Kn;
{
  const e = vr(),
    t = (n, s) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(s),
        (o) => {
          r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
        }
      );
    };
  (an = t("__VUE_INSTANCE_SETTERS__", (n) => (oe = n))),
    (Kn = t("__VUE_SSR_SETTERS__", (n) => (wn = n)));
}
const qt = (e) => {
    const t = oe;
    return (
      an(e),
      e.scope.on(),
      () => {
        e.scope.off(), an(t);
      }
    );
  },
  Vs = () => {
    oe && oe.scope.off(), an(null);
  };
function mo(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function wl(e, t = !1) {
  t && Kn(t);
  const { props: n, children: s } = e.vnode,
    r = mo(e);
  sl(e, n, r, t), il(e, s);
  const o = r ? xl(e, t) : void 0;
  return t && Kn(!1), o;
}
function xl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Zi));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? Rl(e) : null),
      o = qt(e);
    Je();
    const i = Qe(s, e, 0, [e.props, r]);
    if ((Xe(), o(), gr(i))) {
      if ((i.then(Vs, Vs), t))
        return i
          .then((u) => {
            $s(e, u, t);
          })
          .catch((u) => {
            yn(u, e, 0);
          });
      e.asyncDep = i;
    } else $s(e, i, t);
  } else _o(e, t);
}
function $s(e, t, n) {
  $(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : X(t) && (e.setupState = $r(t)),
    _o(e, n);
}
let Bs;
function _o(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Bs && !s.render) {
      const r = s.template || us(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: u, compilerOptions: l } = s,
          d = re(re({ isCustomElement: o, delimiters: u }, i), l);
        s.render = Bs(r, d);
      }
    }
    e.render = s.render || ye;
  }
  {
    const r = qt(e);
    Je();
    try {
      Qi(e);
    } finally {
      Xe(), r();
    }
  }
}
const Cl = {
  get(e, t) {
    return me(e, "get", ""), e[t];
  },
};
function Rl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Cl),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ds(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy($r(ai(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in It) return It[n](e);
        },
        has(t, n) {
          return n in t || n in It;
        },
      }))
    );
}
function Sl(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Pl(e) {
  return $(e) && "__vccOpts" in e;
}
const xe = (e, t) => di(e, t, wn);
function yo(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? X(t) && !N(t)
      ? fn(t)
        ? ae(e, null, [t])
        : ae(e, t)
      : ae(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && fn(n) && (n = [n]),
      ae(e, t, n));
}
const Ol = "3.4.27";
/**
 * @vue/runtime-dom v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Al = "http://www.w3.org/2000/svg",
  Tl = "http://www.w3.org/1998/Math/MathML",
  ze = typeof document < "u" ? document : null,
  ks = ze && ze.createElement("template"),
  Ml = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r =
        t === "svg"
          ? ze.createElementNS(Al, e)
          : t === "mathml"
          ? ze.createElementNS(Tl, e)
          : ze.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => ze.createTextNode(e),
    createComment: (e) => ze.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ze.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (r && (r === o || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling));

        );
      else {
        ks.innerHTML =
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e;
        const u = ks.content;
        if (s === "svg" || s === "mathml") {
          const l = u.firstChild;
          for (; l.firstChild; ) u.appendChild(l.firstChild);
          u.removeChild(l);
        }
        t.insertBefore(u, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Il = Symbol("_vtc");
function Hl(e, t, n) {
  const s = e[Il];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Us = Symbol("_vod"),
  Ll = Symbol("_vsh"),
  Nl = Symbol(""),
  Fl = /(^|;)\s*display\s*:/;
function jl(e, t, n) {
  const s = e.style,
    r = te(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (te(t))
        for (const i of t.split(";")) {
          const u = i.slice(0, i.indexOf(":")).trim();
          n[u] == null && rn(s, u, "");
        }
      else for (const i in t) n[i] == null && rn(s, i, "");
    for (const i in n) i === "display" && (o = !0), rn(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[Nl];
      i && (n += ";" + i), (s.cssText = n), (o = Fl.test(n));
    }
  } else t && e.removeAttribute("style");
  Us in e && ((e[Us] = o ? s.display : ""), e[Ll] && (s.display = "none"));
}
const Ds = /\s*!important$/;
function rn(e, t, n) {
  if (N(n)) n.forEach((s) => rn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Vl(e, t);
    Ds.test(n)
      ? e.setProperty(wt(s), n.replace(Ds, ""), "important")
      : (e[s] = n);
  }
}
const Ks = ["Webkit", "Moz", "ms"],
  Tn = {};
function Vl(e, t) {
  const n = Tn[t];
  if (n) return n;
  let s = Le(t);
  if (s !== "filter" && s in e) return (Tn[t] = s);
  s = gn(s);
  for (let r = 0; r < Ks.length; r++) {
    const o = Ks[r] + s;
    if (o in e) return (Tn[t] = o);
  }
  return t;
}
const qs = "http://www.w3.org/1999/xlink";
function $l(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(qs, t.slice(6, t.length))
      : e.setAttributeNS(qs, t, n);
  else {
    const o = ko(t);
    n == null || (o && !br(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function Bl(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  const u = e.tagName;
  if (t === "value" && u !== "PROGRESS" && !u.includes("-")) {
    const d = u === "OPTION" ? e.getAttribute("value") || "" : e.value,
      f = n ?? "";
    (d !== f || !("_value" in e)) && (e.value = f),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean"
      ? (n = br(n))
      : n == null && d === "string"
      ? ((n = ""), (l = !0))
      : d === "number" && ((n = 0), (l = !0));
  }
  try {
    e[t] = n;
  } catch {}
  l && e.removeAttribute(t);
}
function kl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ul(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ws = Symbol("_vei");
function Dl(e, t, n, s, r = null) {
  const o = e[Ws] || (e[Ws] = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [u, l] = Kl(t);
    if (s) {
      const d = (o[t] = zl(s, r));
      kl(e, u, d, l);
    } else i && (Ul(e, u, i, l), (o[t] = void 0));
  }
}
const zs = /(?:Once|Passive|Capture)$/;
function Kl(e) {
  let t;
  if (zs.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(zs)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : wt(e.slice(2)), t];
}
let Mn = 0;
const ql = Promise.resolve(),
  Wl = () => Mn || (ql.then(() => (Mn = 0)), (Mn = Date.now()));
function zl(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Re(Gl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Wl()), n;
}
function Gl(e, t) {
  if (N(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Gs = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Zl = (e, t, n, s, r, o, i, u, l) => {
    const d = r === "svg";
    t === "class"
      ? Hl(e, s, d)
      : t === "style"
      ? jl(e, n, s)
      : dn(t)
      ? Zn(t) || Dl(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : Ql(e, t, s, d)
        )
      ? Bl(e, t, s, o, i, u, l)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        $l(e, t, s, d));
  };
function Ql(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Gs(t) && $(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Gs(t) && te(n) ? !1 : t in e;
}
const Yl = re({ patchProp: Zl }, Ml);
let Zs;
function Jl() {
  return Zs || (Zs = cl(Yl));
}
const Xl = (...e) => {
  const t = Jl().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = tc(s);
      if (!r) return;
      const o = t._component;
      !$(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, ec(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function ec(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function tc(e) {
  return te(e) ? document.querySelector(e) : e;
}
const nc = "modulepreload",
  sc = function (e) {
    return "/VisualTemplate/" + e;
  },
  Qs = {},
  rc = function (t, n, s) {
    if (!n || n.length === 0) return t();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = sc(o)), o in Qs)) return;
        Qs[o] = !0;
        const i = o.endsWith(".css"),
          u = i ? '[rel="stylesheet"]' : "";
        if (!!s)
          for (let f = r.length - 1; f >= 0; f--) {
            const h = r[f];
            if (h.href === o && (!i || h.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${u}`)) return;
        const d = document.createElement("link");
        if (
          ((d.rel = i ? "stylesheet" : nc),
          i || ((d.as = "script"), (d.crossOrigin = "")),
          (d.href = o),
          document.head.appendChild(d),
          i)
        )
          return new Promise((f, h) => {
            d.addEventListener("load", f),
              d.addEventListener("error", () =>
                h(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    )
      .then(() => t())
      .catch((o) => {
        const i = new Event("vite:preloadError", { cancelable: !0 });
        if (((i.payload = o), window.dispatchEvent(i), !i.defaultPrevented))
          throw o;
      });
  };
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const ht = typeof document < "u";
function oc(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const z = Object.assign;
function In(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = Se(r) ? r.map(e) : e(r);
  }
  return n;
}
const Nt = () => {},
  Se = Array.isArray,
  vo = /#/g,
  ic = /&/g,
  lc = /\//g,
  cc = /=/g,
  uc = /\?/g,
  bo = /\+/g,
  fc = /%5B/g,
  ac = /%5D/g,
  Eo = /%5E/g,
  dc = /%60/g,
  wo = /%7B/g,
  hc = /%7C/g,
  xo = /%7D/g,
  pc = /%20/g;
function hs(e) {
  return encodeURI("" + e)
    .replace(hc, "|")
    .replace(fc, "[")
    .replace(ac, "]");
}
function gc(e) {
  return hs(e).replace(wo, "{").replace(xo, "}").replace(Eo, "^");
}
function qn(e) {
  return hs(e)
    .replace(bo, "%2B")
    .replace(pc, "+")
    .replace(vo, "%23")
    .replace(ic, "%26")
    .replace(dc, "`")
    .replace(wo, "{")
    .replace(xo, "}")
    .replace(Eo, "^");
}
function mc(e) {
  return qn(e).replace(cc, "%3D");
}
function _c(e) {
  return hs(e).replace(vo, "%23").replace(uc, "%3F");
}
function yc(e) {
  return e == null ? "" : _c(e).replace(lc, "%2F");
}
function Ut(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const vc = /\/$/,
  bc = (e) => e.replace(vc, "");
function Hn(e, t, n = "/") {
  let s,
    r = {},
    o = "",
    i = "";
  const u = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    u < l && u >= 0 && (l = -1),
    l > -1 &&
      ((s = t.slice(0, l)),
      (o = t.slice(l + 1, u > -1 ? u : t.length)),
      (r = e(o))),
    u > -1 && ((s = s || t.slice(0, u)), (i = t.slice(u, t.length))),
    (s = Cc(s ?? t, n)),
    { fullPath: s + (o && "?") + o + i, path: s, query: r, hash: Ut(i) }
  );
}
function Ec(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function Ys(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function wc(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    bt(t.matched[s], n.matched[r]) &&
    Co(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function bt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Co(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!xc(e[n], t[n])) return !1;
  return !0;
}
function xc(e, t) {
  return Se(e) ? Js(e, t) : Se(t) ? Js(t, e) : e === t;
}
function Js(e, t) {
  return Se(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function Cc(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/"),
    r = s[s.length - 1];
  (r === ".." || r === ".") && s.push("");
  let o = n.length - 1,
    i,
    u;
  for (i = 0; i < s.length; i++)
    if (((u = s[i]), u !== "."))
      if (u === "..") o > 1 && o--;
      else break;
  return n.slice(0, o).join("/") + "/" + s.slice(i).join("/");
}
var Dt;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Dt || (Dt = {}));
var Ft;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ft || (Ft = {}));
function Rc(e) {
  if (!e)
    if (ht) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), bc(e);
}
const Sc = /^[^#]+#/;
function Pc(e, t) {
  return e.replace(Sc, "#") + t;
}
function Oc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const xn = () => ({ left: window.scrollX, top: window.scrollY });
function Ac(e) {
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
    t = Oc(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function Xs(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Wn = new Map();
function Tc(e, t) {
  Wn.set(e, t);
}
function Mc(e) {
  const t = Wn.get(e);
  return Wn.delete(e), t;
}
let Ic = () => location.protocol + "//" + location.host;
function Ro(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let u = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      l = r.slice(u);
    return l[0] !== "/" && (l = "/" + l), Ys(l, "");
  }
  return Ys(n, e) + s + r;
}
function Hc(e, t, n, s) {
  let r = [],
    o = [],
    i = null;
  const u = ({ state: p }) => {
    const v = Ro(e, location),
      O = n.value,
      L = t.value;
    let B = 0;
    if (p) {
      if (((n.value = v), (t.value = p), i && i === O)) {
        i = null;
        return;
      }
      B = L ? p.position - L.position : 0;
    } else s(v);
    r.forEach((M) => {
      M(n.value, O, {
        delta: B,
        type: Dt.pop,
        direction: B ? (B > 0 ? Ft.forward : Ft.back) : Ft.unknown,
      });
    });
  };
  function l() {
    i = n.value;
  }
  function d(p) {
    r.push(p);
    const v = () => {
      const O = r.indexOf(p);
      O > -1 && r.splice(O, 1);
    };
    return o.push(v), v;
  }
  function f() {
    const { history: p } = window;
    p.state && p.replaceState(z({}, p.state, { scroll: xn() }), "");
  }
  function h() {
    for (const p of o) p();
    (o = []),
      window.removeEventListener("popstate", u),
      window.removeEventListener("beforeunload", f);
  }
  return (
    window.addEventListener("popstate", u),
    window.addEventListener("beforeunload", f, { passive: !0 }),
    { pauseListeners: l, listen: d, destroy: h }
  );
}
function er(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? xn() : null,
  };
}
function Lc(e) {
  const { history: t, location: n } = window,
    s = { value: Ro(e, n) },
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
  function o(l, d, f) {
    const h = e.indexOf("#"),
      p =
        h > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(h)) + l
          : Ic() + e + l;
    try {
      t[f ? "replaceState" : "pushState"](d, "", p), (r.value = d);
    } catch (v) {
      console.error(v), n[f ? "replace" : "assign"](p);
    }
  }
  function i(l, d) {
    const f = z({}, t.state, er(r.value.back, l, r.value.forward, !0), d, {
      position: r.value.position,
    });
    o(l, f, !0), (s.value = l);
  }
  function u(l, d) {
    const f = z({}, r.value, t.state, { forward: l, scroll: xn() });
    o(f.current, f, !0);
    const h = z({}, er(s.value, l, null), { position: f.position + 1 }, d);
    o(l, h, !1), (s.value = l);
  }
  return { location: s, state: r, push: u, replace: i };
}
function Nc(e) {
  e = Rc(e);
  const t = Lc(e),
    n = Hc(e, t.state, t.location, t.replace);
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const r = z(
    { location: "", base: e, go: s, createHref: Pc.bind(null, e) },
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
function Fc(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    Nc(e)
  );
}
function jc(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function So(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ke = {
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
  Po = Symbol("");
var tr;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(tr || (tr = {}));
function Et(e, t) {
  return z(new Error(), { type: e, [Po]: !0 }, t);
}
function Fe(e, t) {
  return e instanceof Error && Po in e && (t == null || !!(e.type & t));
}
const nr = "[^/]+?",
  Vc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  $c = /[.+*?^${}()[\]/\\]/g;
function Bc(e, t) {
  const n = z({}, Vc, t),
    s = [];
  let r = n.start ? "^" : "";
  const o = [];
  for (const d of e) {
    const f = d.length ? [] : [90];
    n.strict && !d.length && (r += "/");
    for (let h = 0; h < d.length; h++) {
      const p = d[h];
      let v = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        h || (r += "/"), (r += p.value.replace($c, "\\$&")), (v += 40);
      else if (p.type === 1) {
        const { value: O, repeatable: L, optional: B, regexp: M } = p;
        o.push({ name: O, repeatable: L, optional: B });
        const I = M || nr;
        if (I !== nr) {
          v += 10;
          try {
            new RegExp(`(${I})`);
          } catch (K) {
            throw new Error(
              `Invalid custom RegExp for param "${O}" (${I}): ` + K.message
            );
          }
        }
        let j = L ? `((?:${I})(?:/(?:${I}))*)` : `(${I})`;
        h || (j = B && d.length < 2 ? `(?:/${j})` : "/" + j),
          B && (j += "?"),
          (r += j),
          (v += 20),
          B && (v += -8),
          L && (v += -20),
          I === ".*" && (v += -50);
      }
      f.push(v);
    }
    s.push(f);
  }
  if (n.strict && n.end) {
    const d = s.length - 1;
    s[d][s[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function u(d) {
    const f = d.match(i),
      h = {};
    if (!f) return null;
    for (let p = 1; p < f.length; p++) {
      const v = f[p] || "",
        O = o[p - 1];
      h[O.name] = v && O.repeatable ? v.split("/") : v;
    }
    return h;
  }
  function l(d) {
    let f = "",
      h = !1;
    for (const p of e) {
      (!h || !f.endsWith("/")) && (f += "/"), (h = !1);
      for (const v of p)
        if (v.type === 0) f += v.value;
        else if (v.type === 1) {
          const { value: O, repeatable: L, optional: B } = v,
            M = O in d ? d[O] : "";
          if (Se(M) && !L)
            throw new Error(
              `Provided param "${O}" is an array but it is not repeatable (* or + modifiers)`
            );
          const I = Se(M) ? M.join("/") : M;
          if (!I)
            if (B)
              p.length < 2 &&
                (f.endsWith("/") ? (f = f.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${O}"`);
          f += I;
        }
    }
    return f || "/";
  }
  return { re: i, score: s, keys: o, parse: u, stringify: l };
}
function kc(e, t) {
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
function Uc(e, t) {
  let n = 0;
  const s = e.score,
    r = t.score;
  for (; n < s.length && n < r.length; ) {
    const o = kc(s[n], r[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (sr(s)) return 1;
    if (sr(r)) return -1;
  }
  return r.length - s.length;
}
function sr(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Dc = { type: 0, value: "" },
  Kc = /[a-zA-Z0-9_]/;
function qc(e) {
  if (!e) return [[]];
  if (e === "/") return [[Dc]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(v) {
    throw new Error(`ERR (${n})/"${d}": ${v}`);
  }
  let n = 0,
    s = n;
  const r = [];
  let o;
  function i() {
    o && r.push(o), (o = []);
  }
  let u = 0,
    l,
    d = "",
    f = "";
  function h() {
    d &&
      (n === 0
        ? o.push({ type: 0, value: d })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: d,
            regexp: f,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (d = ""));
  }
  function p() {
    d += l;
  }
  for (; u < e.length; ) {
    if (((l = e[u++]), l === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (d && h(), i()) : l === ":" ? (h(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = s);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : Kc.test(l)
          ? p()
          : (h(), (n = 0), l !== "*" && l !== "?" && l !== "+" && u--);
        break;
      case 2:
        l === ")"
          ? f[f.length - 1] == "\\"
            ? (f = f.slice(0, -1) + l)
            : (n = 3)
          : (f += l);
        break;
      case 3:
        h(), (n = 0), l !== "*" && l !== "?" && l !== "+" && u--, (f = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), h(), i(), r;
}
function Wc(e, t, n) {
  const s = Bc(qc(e.path), n),
    r = z(s, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function zc(e, t) {
  const n = [],
    s = new Map();
  t = ir({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(f) {
    return s.get(f);
  }
  function o(f, h, p) {
    const v = !p,
      O = Gc(f);
    O.aliasOf = p && p.record;
    const L = ir(t, f),
      B = [O];
    if ("alias" in f) {
      const j = typeof f.alias == "string" ? [f.alias] : f.alias;
      for (const K of j)
        B.push(
          z({}, O, {
            components: p ? p.record.components : O.components,
            path: K,
            aliasOf: p ? p.record : O,
          })
        );
    }
    let M, I;
    for (const j of B) {
      const { path: K } = j;
      if (h && K[0] !== "/") {
        const ee = h.record.path,
          V = ee[ee.length - 1] === "/" ? "" : "/";
        j.path = h.record.path + (K && V + K);
      }
      if (
        ((M = Wc(j, h, L)),
        p
          ? p.alias.push(M)
          : ((I = I || M),
            I !== M && I.alias.push(M),
            v && f.name && !or(M) && i(f.name)),
        O.children)
      ) {
        const ee = O.children;
        for (let V = 0; V < ee.length; V++) o(ee[V], M, p && p.children[V]);
      }
      (p = p || M),
        ((M.record.components && Object.keys(M.record.components).length) ||
          M.record.name ||
          M.record.redirect) &&
          l(M);
    }
    return I
      ? () => {
          i(I);
        }
      : Nt;
  }
  function i(f) {
    if (So(f)) {
      const h = s.get(f);
      h &&
        (s.delete(f),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(i),
        h.alias.forEach(i));
    } else {
      const h = n.indexOf(f);
      h > -1 &&
        (n.splice(h, 1),
        f.record.name && s.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function u() {
    return n;
  }
  function l(f) {
    let h = 0;
    for (
      ;
      h < n.length &&
      Uc(f, n[h]) >= 0 &&
      (f.record.path !== n[h].record.path || !Oo(f, n[h]));

    )
      h++;
    n.splice(h, 0, f), f.record.name && !or(f) && s.set(f.record.name, f);
  }
  function d(f, h) {
    let p,
      v = {},
      O,
      L;
    if ("name" in f && f.name) {
      if (((p = s.get(f.name)), !p)) throw Et(1, { location: f });
      (L = p.record.name),
        (v = z(
          rr(
            h.params,
            p.keys
              .filter((I) => !I.optional)
              .concat(p.parent ? p.parent.keys.filter((I) => I.optional) : [])
              .map((I) => I.name)
          ),
          f.params &&
            rr(
              f.params,
              p.keys.map((I) => I.name)
            )
        )),
        (O = p.stringify(v));
    } else if (f.path != null)
      (O = f.path),
        (p = n.find((I) => I.re.test(O))),
        p && ((v = p.parse(O)), (L = p.record.name));
    else {
      if (((p = h.name ? s.get(h.name) : n.find((I) => I.re.test(h.path))), !p))
        throw Et(1, { location: f, currentLocation: h });
      (L = p.record.name),
        (v = z({}, h.params, f.params)),
        (O = p.stringify(v));
    }
    const B = [];
    let M = p;
    for (; M; ) B.unshift(M.record), (M = M.parent);
    return { name: L, path: O, params: v, matched: B, meta: Qc(B) };
  }
  return (
    e.forEach((f) => o(f)),
    {
      addRoute: o,
      resolve: d,
      removeRoute: i,
      getRoutes: u,
      getRecordMatcher: r,
    }
  );
}
function rr(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function Gc(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Zc(e),
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
function Zc(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function or(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Qc(e) {
  return e.reduce((t, n) => z(t, n.meta), {});
}
function ir(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function Oo(e, t) {
  return t.children.some((n) => n === e || Oo(e, n));
}
function Yc(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(bo, " "),
      i = o.indexOf("="),
      u = Ut(i < 0 ? o : o.slice(0, i)),
      l = i < 0 ? null : Ut(o.slice(i + 1));
    if (u in t) {
      let d = t[u];
      Se(d) || (d = t[u] = [d]), d.push(l);
    } else t[u] = l;
  }
  return t;
}
function lr(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = mc(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Se(s) ? s.map((o) => o && qn(o)) : [s && qn(s)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function Jc(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = Se(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const Xc = Symbol(""),
  cr = Symbol(""),
  ps = Symbol(""),
  Ao = Symbol(""),
  zn = Symbol("");
function Pt() {
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
  return { add: t, list: () => e.slice(), reset: n };
}
function Ge(e, t, n, s, r, o = (i) => i()) {
  const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((u, l) => {
      const d = (p) => {
          p === !1
            ? l(Et(4, { from: n, to: t }))
            : p instanceof Error
            ? l(p)
            : jc(p)
            ? l(Et(2, { from: t, to: p }))
            : (i &&
                s.enterCallbacks[r] === i &&
                typeof p == "function" &&
                i.push(p),
              u());
        },
        f = o(() => e.call(s && s.instances[r], t, n, d));
      let h = Promise.resolve(f);
      e.length < 3 && (h = h.then(d)), h.catch((p) => l(p));
    });
}
function Ln(e, t, n, s, r = (o) => o()) {
  const o = [];
  for (const i of e)
    for (const u in i.components) {
      let l = i.components[u];
      if (!(t !== "beforeRouteEnter" && !i.instances[u]))
        if (eu(l)) {
          const f = (l.__vccOpts || l)[t];
          f && o.push(Ge(f, n, s, i, u, r));
        } else {
          let d = l();
          o.push(() =>
            d.then((f) => {
              if (!f)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${u}" at "${i.path}"`)
                );
              const h = oc(f) ? f.default : f;
              i.components[u] = h;
              const v = (h.__vccOpts || h)[t];
              return v && Ge(v, n, s, i, u, r)();
            })
          );
        }
    }
  return o;
}
function eu(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function ur(e) {
  const t = $e(ps),
    n = $e(Ao),
    s = xe(() => {
      const l = Ve(e.to);
      return t.resolve(l);
    }),
    r = xe(() => {
      const { matched: l } = s.value,
        { length: d } = l,
        f = l[d - 1],
        h = n.matched;
      if (!f || !h.length) return -1;
      const p = h.findIndex(bt.bind(null, f));
      if (p > -1) return p;
      const v = fr(l[d - 2]);
      return d > 1 && fr(f) === v && h[h.length - 1].path !== v
        ? h.findIndex(bt.bind(null, l[d - 2]))
        : p;
    }),
    o = xe(() => r.value > -1 && ru(n.params, s.value.params)),
    i = xe(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        Co(n.params, s.value.params)
    );
  function u(l = {}) {
    return su(l)
      ? t[Ve(e.replace) ? "replace" : "push"](Ve(e.to)).catch(Nt)
      : Promise.resolve();
  }
  return {
    route: s,
    href: xe(() => s.value.href),
    isActive: o,
    isExactActive: i,
    navigate: u,
  };
}
const tu = Zr({
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
    useLink: ur,
    setup(e, { slots: t }) {
      const n = Kt(ur(e)),
        { options: s } = $e(ps),
        r = xe(() => ({
          [ar(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [ar(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : yo(
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
  nu = tu;
function su(e) {
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
function ru(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!Se(r) || r.length !== s.length || s.some((o, i) => o !== r[i]))
      return !1;
  }
  return !0;
}
function fr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const ar = (e, t, n) => e ?? t ?? n,
  ou = Zr({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = $e(zn),
        r = xe(() => e.route || s.value),
        o = $e(cr, 0),
        i = xe(() => {
          let d = Ve(o);
          const { matched: f } = r.value;
          let h;
          for (; (h = f[d]) && !h.components; ) d++;
          return d;
        }),
        u = xe(() => r.value.matched[i.value]);
      tn(
        cr,
        xe(() => i.value + 1)
      ),
        tn(Xc, u),
        tn(zn, r);
      const l = hi();
      return (
        en(
          () => [l.value, u.value, e.name],
          ([d, f, h], [p, v, O]) => {
            f &&
              ((f.instances[h] = d),
              v &&
                v !== f &&
                d &&
                d === p &&
                (f.leaveGuards.size || (f.leaveGuards = v.leaveGuards),
                f.updateGuards.size || (f.updateGuards = v.updateGuards))),
              d &&
                f &&
                (!v || !bt(f, v) || !p) &&
                (f.enterCallbacks[h] || []).forEach((L) => L(d));
          },
          { flush: "post" }
        ),
        () => {
          const d = r.value,
            f = e.name,
            h = u.value,
            p = h && h.components[f];
          if (!p) return dr(n.default, { Component: p, route: d });
          const v = h.props[f],
            O = v
              ? v === !0
                ? d.params
                : typeof v == "function"
                ? v(d)
                : v
              : null,
            B = yo(
              p,
              z({}, O, t, {
                onVnodeUnmounted: (M) => {
                  M.component.isUnmounted && (h.instances[f] = null);
                },
                ref: l,
              })
            );
          return dr(n.default, { Component: B, route: d }) || B;
        }
      );
    },
  });
function dr(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const iu = ou;
function lu(e) {
  const t = zc(e.routes, e),
    n = e.parseQuery || Yc,
    s = e.stringifyQuery || lr,
    r = e.history,
    o = Pt(),
    i = Pt(),
    u = Pt(),
    l = pi(Ke);
  let d = Ke;
  ht &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const f = In.bind(null, (_) => "" + _),
    h = In.bind(null, yc),
    p = In.bind(null, Ut);
  function v(_, S) {
    let C, A;
    return (
      So(_) ? ((C = t.getRecordMatcher(_)), (A = S)) : (A = _), t.addRoute(A, C)
    );
  }
  function O(_) {
    const S = t.getRecordMatcher(_);
    S && t.removeRoute(S);
  }
  function L() {
    return t.getRoutes().map((_) => _.record);
  }
  function B(_) {
    return !!t.getRecordMatcher(_);
  }
  function M(_, S) {
    if (((S = z({}, S || l.value)), typeof _ == "string")) {
      const a = Hn(n, _, S.path),
        g = t.resolve({ path: a.path }, S),
        y = r.createHref(a.fullPath);
      return z(a, g, {
        params: p(g.params),
        hash: Ut(a.hash),
        redirectedFrom: void 0,
        href: y,
      });
    }
    let C;
    if (_.path != null) C = z({}, _, { path: Hn(n, _.path, S.path).path });
    else {
      const a = z({}, _.params);
      for (const g in a) a[g] == null && delete a[g];
      (C = z({}, _, { params: h(a) })), (S.params = h(S.params));
    }
    const A = t.resolve(C, S),
      W = _.hash || "";
    A.params = f(p(A.params));
    const Q = Ec(s, z({}, _, { hash: gc(W), path: A.path })),
      c = r.createHref(Q);
    return z(
      { fullPath: Q, hash: W, query: s === lr ? Jc(_.query) : _.query || {} },
      A,
      { redirectedFrom: void 0, href: c }
    );
  }
  function I(_) {
    return typeof _ == "string" ? Hn(n, _, l.value.path) : z({}, _);
  }
  function j(_, S) {
    if (d !== _) return Et(8, { from: S, to: _ });
  }
  function K(_) {
    return ue(_);
  }
  function ee(_) {
    return K(z(I(_), { replace: !0 }));
  }
  function V(_) {
    const S = _.matched[_.matched.length - 1];
    if (S && S.redirect) {
      const { redirect: C } = S;
      let A = typeof C == "function" ? C(_) : C;
      return (
        typeof A == "string" &&
          ((A = A.includes("?") || A.includes("#") ? (A = I(A)) : { path: A }),
          (A.params = {})),
        z(
          {
            query: _.query,
            hash: _.hash,
            params: A.path != null ? {} : _.params,
          },
          A
        )
      );
    }
  }
  function ue(_, S) {
    const C = (d = M(_)),
      A = l.value,
      W = _.state,
      Q = _.force,
      c = _.replace === !0,
      a = V(C);
    if (a)
      return ue(
        z(I(a), {
          state: typeof a == "object" ? z({}, W, a.state) : W,
          force: Q,
          replace: c,
        }),
        S || C
      );
    const g = C;
    g.redirectedFrom = S;
    let y;
    return (
      !Q && wc(s, A, C) && ((y = Et(16, { to: g, from: A })), Ae(A, A, !0, !1)),
      (y ? Promise.resolve(y) : Pe(g, A))
        .catch((m) => (Fe(m) ? (Fe(m, 2) ? m : Ue(m)) : q(m, g, A)))
        .then((m) => {
          if (m) {
            if (Fe(m, 2))
              return ue(
                z({ replace: c }, I(m.to), {
                  state: typeof m.to == "object" ? z({}, W, m.to.state) : W,
                  force: Q,
                }),
                S || g
              );
          } else m = tt(g, A, !0, c, W);
          return ke(g, A, m), m;
        })
    );
  }
  function ve(_, S) {
    const C = j(_, S);
    return C ? Promise.reject(C) : Promise.resolve();
  }
  function et(_) {
    const S = ft.values().next().value;
    return S && typeof S.runWithContext == "function"
      ? S.runWithContext(_)
      : _();
  }
  function Pe(_, S) {
    let C;
    const [A, W, Q] = cu(_, S);
    C = Ln(A.reverse(), "beforeRouteLeave", _, S);
    for (const a of A)
      a.leaveGuards.forEach((g) => {
        C.push(Ge(g, _, S));
      });
    const c = ve.bind(null, _, S);
    return (
      C.push(c),
      ie(C)
        .then(() => {
          C = [];
          for (const a of o.list()) C.push(Ge(a, _, S));
          return C.push(c), ie(C);
        })
        .then(() => {
          C = Ln(W, "beforeRouteUpdate", _, S);
          for (const a of W)
            a.updateGuards.forEach((g) => {
              C.push(Ge(g, _, S));
            });
          return C.push(c), ie(C);
        })
        .then(() => {
          C = [];
          for (const a of Q)
            if (a.beforeEnter)
              if (Se(a.beforeEnter))
                for (const g of a.beforeEnter) C.push(Ge(g, _, S));
              else C.push(Ge(a.beforeEnter, _, S));
          return C.push(c), ie(C);
        })
        .then(
          () => (
            _.matched.forEach((a) => (a.enterCallbacks = {})),
            (C = Ln(Q, "beforeRouteEnter", _, S, et)),
            C.push(c),
            ie(C)
          )
        )
        .then(() => {
          C = [];
          for (const a of i.list()) C.push(Ge(a, _, S));
          return C.push(c), ie(C);
        })
        .catch((a) => (Fe(a, 8) ? a : Promise.reject(a)))
    );
  }
  function ke(_, S, C) {
    u.list().forEach((A) => et(() => A(_, S, C)));
  }
  function tt(_, S, C, A, W) {
    const Q = j(_, S);
    if (Q) return Q;
    const c = S === Ke,
      a = ht ? history.state : {};
    C &&
      (A || c
        ? r.replace(_.fullPath, z({ scroll: c && a && a.scroll }, W))
        : r.push(_.fullPath, W)),
      (l.value = _),
      Ae(_, S, C, c),
      Ue();
  }
  let Oe;
  function xt() {
    Oe ||
      (Oe = r.listen((_, S, C) => {
        if (!Wt.listening) return;
        const A = M(_),
          W = V(A);
        if (W) {
          ue(z(W, { replace: !0 }), A).catch(Nt);
          return;
        }
        d = A;
        const Q = l.value;
        ht && Tc(Xs(Q.fullPath, C.delta), xn()),
          Pe(A, Q)
            .catch((c) =>
              Fe(c, 12)
                ? c
                : Fe(c, 2)
                ? (ue(c.to, A)
                    .then((a) => {
                      Fe(a, 20) &&
                        !C.delta &&
                        C.type === Dt.pop &&
                        r.go(-1, !1);
                    })
                    .catch(Nt),
                  Promise.reject())
                : (C.delta && r.go(-C.delta, !1), q(c, A, Q))
            )
            .then((c) => {
              (c = c || tt(A, Q, !1)),
                c &&
                  (C.delta && !Fe(c, 8)
                    ? r.go(-C.delta, !1)
                    : C.type === Dt.pop && Fe(c, 20) && r.go(-1, !1)),
                ke(A, Q, c);
            })
            .catch(Nt);
      }));
  }
  let ct = Pt(),
    ne = Pt(),
    G;
  function q(_, S, C) {
    Ue(_);
    const A = ne.list();
    return (
      A.length ? A.forEach((W) => W(_, S, C)) : console.error(_),
      Promise.reject(_)
    );
  }
  function Ne() {
    return G && l.value !== Ke
      ? Promise.resolve()
      : new Promise((_, S) => {
          ct.add([_, S]);
        });
  }
  function Ue(_) {
    return (
      G ||
        ((G = !_),
        xt(),
        ct.list().forEach(([S, C]) => (_ ? C(_) : S())),
        ct.reset()),
      _
    );
  }
  function Ae(_, S, C, A) {
    const { scrollBehavior: W } = e;
    if (!ht || !W) return Promise.resolve();
    const Q =
      (!C && Mc(Xs(_.fullPath, 0))) ||
      ((A || !C) && history.state && history.state.scroll) ||
      null;
    return kr()
      .then(() => W(_, S, Q))
      .then((c) => c && Ac(c))
      .catch((c) => q(c, _, S));
  }
  const he = (_) => r.go(_);
  let ut;
  const ft = new Set(),
    Wt = {
      currentRoute: l,
      listening: !0,
      addRoute: v,
      removeRoute: O,
      hasRoute: B,
      getRoutes: L,
      resolve: M,
      options: e,
      push: K,
      replace: ee,
      go: he,
      back: () => he(-1),
      forward: () => he(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: u.add,
      onError: ne.add,
      isReady: Ne,
      install(_) {
        const S = this;
        _.component("RouterLink", nu),
          _.component("RouterView", iu),
          (_.config.globalProperties.$router = S),
          Object.defineProperty(_.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Ve(l),
          }),
          ht &&
            !ut &&
            l.value === Ke &&
            ((ut = !0), K(r.location).catch((W) => {}));
        const C = {};
        for (const W in Ke)
          Object.defineProperty(C, W, {
            get: () => l.value[W],
            enumerable: !0,
          });
        _.provide(ps, S), _.provide(Ao, Hr(C)), _.provide(zn, l);
        const A = _.unmount;
        ft.add(_),
          (_.unmount = function () {
            ft.delete(_),
              ft.size < 1 &&
                ((d = Ke),
                Oe && Oe(),
                (Oe = null),
                (l.value = Ke),
                (ut = !1),
                (G = !1)),
              A();
          });
      },
    };
  function ie(_) {
    return _.reduce((S, C) => S.then(() => et(C)), Promise.resolve());
  }
  return Wt;
}
function cu(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const u = t.matched[i];
    u && (e.matched.find((d) => bt(d, u)) ? s.push(u) : n.push(u));
    const l = e.matched[i];
    l && (t.matched.find((d) => bt(d, l)) || r.push(l));
  }
  return [n, s, r];
}
const hr = () =>
    rc(
      () => import("./index-361e7662.js"),
      ["assets/index-361e7662.js", "assets/index-3dd937ec.css"]
    ),
  uu = lu({
    history: Fc(),
    routes: [
      { path: "/", redirect: "/gdMap", component: hr },
      { path: "/gdMap", component: hr },
      { path: "/:pathMatch(.*)", redirect: "/" },
    ],
  }),
  fu = "/VisualTemplate/assets/qrcode-42ca0273.png",
  au = "/VisualTemplate/assets/qrcode-szxs-be3deddd.png";
const du = { class: "root-app" },
  hu = { key: 0, class: "buy-btn" },
  pu = ge("span", null, "购买", -1),
  gu = ge("span", null, "源码", -1),
  mu = [pu, gu],
  _u = {
    key: 1,
    class: "icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  yu = ge(
    "path",
    {
      d: "M13.1297 15.999V14.5494H11.6483V16L13.1297 15.999ZM15.3406 16C15.7033 16 16 15.7033 16 15.3407V14.5494H14.5802V15.999M5.80224 1.45056V5.80225H1.45055V1.45056H5.80224ZM6.59345 0H0.659334C0.296707 0 0 0.296708 0 0.659336V6.59345C0 6.9561 0.296707 7.25279 0.659334 7.25279H6.59343C6.95606 7.25279 7.25277 6.95608 7.25277 6.59345V0.659336C7.25279 0.296708 6.95608 0 6.59345 0ZM2.90113 3.62642C2.90113 3.81877 2.97754 4.00325 3.11356 4.13927C3.24957 4.27528 3.43405 4.3517 3.62641 4.3517C3.81876 4.3517 4.00324 4.27528 4.13925 4.13927C4.27527 4.00325 4.35168 3.81877 4.35168 3.62642C4.35168 3.43406 4.27527 3.24958 4.13925 3.11357C4.00324 2.97755 3.81876 2.90114 3.62641 2.90114C3.43405 2.90114 3.24957 2.97755 3.11356 3.11357C2.97754 3.24958 2.90113 3.43406 2.90113 3.62642ZM14.5494 1.45056V5.80225H10.1978V1.45056H14.5494ZM15.3406 0H9.40654C9.0439 0 8.74721 0.296708 8.74721 0.659336V6.59345C8.74721 6.9561 9.04392 7.25279 9.40654 7.25279H15.3406C15.7033 7.25279 16 6.95608 16 6.59345V0.659336C16 0.296708 15.7033 0 15.3406 0ZM11.6483 3.62642C11.6483 3.81877 11.7247 4.00325 11.8607 4.13927C11.9968 4.27528 12.1812 4.3517 12.3736 4.3517C12.5659 4.3517 12.7504 4.27528 12.8864 4.13927C13.0225 4.00325 13.0989 3.81877 13.0989 3.62642C13.0989 3.43406 13.0225 3.24958 12.8864 3.11357C12.7504 2.97755 12.5659 2.90114 12.3736 2.90114C12.1812 2.90114 11.9968 2.97755 11.8607 3.11357C11.7247 3.24958 11.6483 3.43406 11.6483 3.62642ZM5.80224 10.1977V14.5494H1.45055V10.1977H5.80224ZM6.59345 8.74719H0.659334C0.296707 8.74719 0 9.0439 0 9.40653V15.3406C0 15.7033 0.296707 16 0.659334 16H6.59343C6.95608 16 7.25277 15.7033 7.25277 15.3406V9.40653C7.25279 9.0439 6.95608 8.74719 6.59345 8.74719ZM2.90113 12.3736C2.90113 12.5659 2.97754 12.7504 3.11356 12.8864C3.24957 13.0224 3.43405 13.0989 3.62641 13.0989C3.81876 13.0989 4.00324 13.0224 4.13925 12.8864C4.27527 12.7504 4.35168 12.5659 4.35168 12.3736C4.35168 12.1812 4.27527 11.9968 4.13925 11.8607C4.00324 11.7247 3.81876 11.6483 3.62641 11.6483C3.43405 11.6483 3.24957 11.7247 3.11356 11.8607C2.97754 11.9968 2.90113 12.1812 2.90113 12.3736ZM15.3406 8.74719H14.5319V11.6483H13.0814V8.74719H9.40654C9.0439 8.74719 8.74721 9.0439 8.74721 9.40653V15.3406C8.74721 15.7033 9.04392 16 9.40654 16H10.1978V14.5494V13.0989V11.6483H11.6483V13.0989H16V9.40653C16 9.0439 15.7033 8.74719 15.3406 8.74719Z",
      fill: "#999",
    },
    null,
    -1
  ),
  vu = [yu],
  bu = { class: "qrcode-fixed-card" },
  Eu = { key: 0, class: "qrcode-pic", src: fu, alt: "" },
  wu = { key: 1, class: "qrcode-pic", src: au, alt: "" },
  xu = ge(
    "div",
    { class: "content-us" },
    [
      ge("p", { class: "title" }, "Three.js 3d前端特效"),
      ge("p", { class: "desc" }, [
        ge("span", null, "承接数据可视化前端制作/源码出售"),
        ge("span", null, "欢迎咨询合作"),
      ]),
      ge("p", { class: "tips" }, "微信扫码，联系我们"),
    ],
    -1
  ),
  Cu = {
    __name: "App",
    setup(e) {
      let t = null,
        n = Kt({ isHover: !1 });
      function s() {
        clearTimeout(t), (n.isHover = !0);
      }
      function r() {
        clearTimeout(t),
          (t = setTimeout(() => {
            n.isHover = !1;
          }, 2e3));
      }
      function o() {
        {
          (document.oncontextmenu = function () {
            event.returnValue = !1;
          }),
            (document.onkeydown =
              document.onkeyup =
              document.onkeypress =
                function (l) {
                  let d =
                    l || window.event || arguments.callee.caller.arguments[0];
                  if (d && d.keyCode == 123) return (d.returnValue = !1), !1;
                });
          var i = new Image();
          Object.defineProperty(i, "id", {
            get: function () {
              window.location.href = "https://www.baidu.com";
            },
          });
          //   setInterval(function () {
          //     u();
          //   }, 2e3);
          // var u = function () {
          //   function l(d) {
          //     ("" + d / d).length !== 1 || d % 20 === 0
          //       ? function () {}.constructor("debugger")()
          //       : function () {}.constructor("debugger")(),
          //       l(++d);
          //   }
          //   try {
          //     l(0);
          //   } catch {}
          // };
          // u();
        }
      }
      return (
        Jr(() => {
          o(),
            setTimeout(() => {
              (n.isHover = !0),
                (t = setTimeout(() => {
                  n.isHover = !1;
                }, 2e3));
            }, 500);
        }),
        (i, u) => {
          const l = Ti("router-view");
          return (
            dt(),
            Rt("div", du, [
              ae(l),
              ge(
                "div",
                { class: mn(["qrcode-fixed", { active: Ve(n).isHover }]) },
                [
                  ge(
                    "div",
                    {
                      class: "qrcode-fixed-btn",
                      onMouseenter: s,
                      onMouseleave: r,
                    },
                    [
                      Ve(n).mode
                        ? (dt(), Rt("svg", _u, vu))
                        : (dt(), Rt("div", hu, mu)),
                    ],
                    32
                  ),
                  ge("div", bu, [
                    Ve(n).mode ? (dt(), Rt("img", wu)) : (dt(), Rt("img", Eu)),
                    xu,
                  ]),
                ],
                2
              ),
            ])
          );
        }
      );
    },
  };
let Ru = Xl(Cu);
Ru.use(uu).mount("#app");
export {
  Ri as A,
  Kt as B,
  _l as C,
  pl as D,
  we as F,
  ge as a,
  hi as b,
  Rt as c,
  xe as d,
  Jr as e,
  Jn as f,
  Iu as g,
  Tu as h,
  Mu as i,
  ae as j,
  $e as k,
  Zr as l,
  Pu as m,
  mn as n,
  dt as o,
  tn as p,
  Ou as q,
  Au as r,
  pi as s,
  Su as t,
  Ve as u,
  Ki as v,
  en as w,
  yo as x,
  kr as y,
  de as z,
};
