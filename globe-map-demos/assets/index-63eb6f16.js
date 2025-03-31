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
 * @vue/shared v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Yn(e, t) {
  const n = new Set(e.split(","));
  return t ? (s) => n.has(s.toLowerCase()) : (s) => n.has(s);
}
const J = {},
  _t = [],
  _e = () => {},
  Mo = () => !1,
  an = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Jn = (e) => e.startsWith("onUpdate:"),
  oe = Object.assign,
  Xn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  To = Object.prototype.hasOwnProperty,
  U = (e, t) => To.call(e, t),
  F = Array.isArray,
  yt = (e) => dn(e) === "[object Map]",
  _r = (e) => dn(e) === "[object Set]",
  k = (e) => typeof e == "function",
  te = (e) => typeof e == "string",
  Rt = (e) => typeof e == "symbol",
  X = (e) => e !== null && typeof e == "object",
  yr = (e) => (X(e) || k(e)) && k(e.then) && k(e.catch),
  vr = Object.prototype.toString,
  dn = (e) => vr.call(e),
  Io = (e) => dn(e).slice(8, -1),
  br = (e) => dn(e) === "[object Object]",
  es = (e) =>
    te(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Yt = Yn(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  hn = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Lo = /-(\w)/g,
  Ne = hn((e) => e.replace(Lo, (t, n) => (n ? n.toUpperCase() : ""))),
  Ho = /\B([A-Z])/g,
  Pt = hn((e) => e.replace(Ho, "-$1").toLowerCase()),
  pn = hn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Cn = hn((e) => (e ? `on${pn(e)}` : "")),
  Xe = (e, t) => !Object.is(e, t),
  Rn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  sn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  No = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let Es;
const Er = () =>
  Es ||
  (Es =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function ts(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        r = te(s) ? jo(s) : ts(s);
      if (r) for (const o in r) t[o] = r[o];
    }
    return t;
  } else if (te(e) || X(e)) return e;
}
const Fo = /;(?![^(]*\))/g,
  Vo = /:([^]+)/,
  $o = /\/\*[^]*?\*\//g;
function jo(e) {
  const t = {};
  return (
    e
      .replace($o, "")
      .split(Fo)
      .forEach((n) => {
        if (n) {
          const s = n.split(Vo);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function gn(e) {
  let t = "";
  if (te(e)) t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = gn(e[n]);
      s && (t += s + " ");
    }
  else if (X(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const ko =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Bo = Yn(ko);
function wr(e) {
  return !!e || e === "";
}
const Nu = (e) =>
    te(e)
      ? e
      : e == null
      ? ""
      : F(e) || (X(e) && (e.toString === vr || !k(e.toString)))
      ? JSON.stringify(e, xr, 2)
      : String(e),
  xr = (e, t) =>
    t && t.__v_isRef
      ? xr(e, t.value)
      : yt(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, r], o) => ((n[Pn(s, o) + " =>"] = r), n),
            {}
          ),
        }
      : _r(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => Pn(n)) }
      : Rt(t)
      ? Pn(t)
      : X(t) && !F(t) && !br(t)
      ? String(t)
      : t,
  Pn = (e, t = "") => {
    var n;
    return Rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let be;
class Uo {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = be),
      !t && be && (this.index = (be.scopes || (be.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = be;
      try {
        return (be = this), t();
      } finally {
        be = n;
      }
    }
  }
  on() {
    be = this;
  }
  off() {
    be = this.parent;
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
function Do(e, t = be) {
  t && t.active && t.effects.push(e);
}
function Ko() {
  return be;
}
let ot;
class ns {
  constructor(t, n, s, r) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 2),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Do(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      ct();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (zo(n.computed), this._dirtyLevel >= 2)) break;
      }
      this._dirtyLevel < 2 && (this._dirtyLevel = 0), ut();
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 2 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = Ye,
      n = ot;
    try {
      return (Ye = !0), (ot = this), this._runnings++, ws(this), this.fn();
    } finally {
      xs(this), this._runnings--, (ot = n), (Ye = t);
    }
  }
  stop() {
    var t;
    this.active &&
      (ws(this),
      xs(this),
      (t = this.onStop) == null || t.call(this),
      (this.active = !1));
  }
}
function zo(e) {
  return e.value;
}
function ws(e) {
  e._trackId++, (e._depsLength = 0);
}
function xs(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Cr(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Cr(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let Ye = !0,
  Nn = 0;
const Rr = [];
function ct() {
  Rr.push(Ye), (Ye = !1);
}
function ut() {
  const e = Rr.pop();
  Ye = e === void 0 ? !0 : e;
}
function ss() {
  Nn++;
}
function rs() {
  for (Nn--; !Nn && Fn.length; ) Fn.shift()();
}
function Pr(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Cr(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const Fn = [];
function Sr(e, t, n) {
  ss();
  for (const s of e.keys())
    if (s._dirtyLevel < t && e.get(s) === s._trackId) {
      const r = s._dirtyLevel;
      (s._dirtyLevel = t), r === 0 && ((s._shouldSchedule = !0), s.trigger());
    }
  Or(e), rs();
}
function Or(e) {
  for (const t of e.keys())
    t.scheduler &&
      t._shouldSchedule &&
      (!t._runnings || t.allowRecurse) &&
      e.get(t) === t._trackId &&
      ((t._shouldSchedule = !1), Fn.push(t.scheduler));
}
const Ar = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  Vn = new WeakMap(),
  it = Symbol(""),
  $n = Symbol("");
function pe(e, t, n) {
  if (Ye && ot) {
    let s = Vn.get(e);
    s || Vn.set(e, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = Ar(() => s.delete(n)))), Pr(ot, r);
  }
}
function je(e, t, n, s, r, o) {
  const i = Vn.get(e);
  if (!i) return;
  let u = [];
  if (t === "clear") u = [...i.values()];
  else if (n === "length" && F(e)) {
    const c = Number(s);
    i.forEach((d, a) => {
      (a === "length" || (!Rt(a) && a >= c)) && u.push(d);
    });
  } else
    switch ((n !== void 0 && u.push(i.get(n)), t)) {
      case "add":
        F(e)
          ? es(n) && u.push(i.get("length"))
          : (u.push(i.get(it)), yt(e) && u.push(i.get($n)));
        break;
      case "delete":
        F(e) || (u.push(i.get(it)), yt(e) && u.push(i.get($n)));
        break;
      case "set":
        yt(e) && u.push(i.get(it));
        break;
    }
  ss();
  for (const c of u) c && Sr(c, 2);
  rs();
}
const Wo = Yn("__proto__,__v_isRef,__isVue"),
  Mr = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Rt)
  ),
  Cs = qo();
function qo() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = D(this);
        for (let o = 0, i = this.length; o < i; o++) pe(s, "get", o + "");
        const r = s[t](...n);
        return r === -1 || r === !1 ? s[t](...n.map(D)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        ct(), ss();
        const s = D(this)[t].apply(this, n);
        return rs(), ut(), s;
      };
    }),
    e
  );
}
function Go(e) {
  const t = D(this);
  return pe(t, "has", e), t.hasOwnProperty(e);
}
class Tr {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._shallow = n);
  }
  get(t, n, s) {
    const r = this._isReadonly,
      o = this._shallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return o;
    if (n === "__v_raw")
      return s === (r ? (o ? li : Nr) : o ? Hr : Lr).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0;
    const i = F(t);
    if (!r) {
      if (i && U(Cs, n)) return Reflect.get(Cs, n, s);
      if (n === "hasOwnProperty") return Go;
    }
    const u = Reflect.get(t, n, s);
    return (Rt(n) ? Mr.has(n) : Wo(n)) || (r || pe(t, "get", n), o)
      ? u
      : ge(u)
      ? i && es(n)
        ? u
        : u.value
      : X(u)
      ? r
        ? Vr(u)
        : Ut(u)
      : u;
  }
}
class Ir extends Tr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._shallow) {
      const c = Et(o);
      if (
        (!rn(s) && !Et(s) && ((o = D(o)), (s = D(s))), !F(t) && ge(o) && !ge(s))
      )
        return c ? !1 : ((o.value = s), !0);
    }
    const i = F(t) && es(n) ? Number(n) < t.length : U(t, n),
      u = Reflect.set(t, n, s, r);
    return (
      t === D(r) && (i ? Xe(s, o) && je(t, "set", n, s) : je(t, "add", n, s)), u
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
    return (!Rt(n) || !Mr.has(n)) && pe(t, "has", n), s;
  }
  ownKeys(t) {
    return pe(t, "iterate", F(t) ? "length" : it), Reflect.ownKeys(t);
  }
}
class Zo extends Tr {
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
const Qo = new Ir(),
  Yo = new Zo(),
  Jo = new Ir(!0),
  os = (e) => e,
  mn = (e) => Reflect.getPrototypeOf(e);
function zt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = D(e),
    o = D(t);
  n || (Xe(t, o) && pe(r, "get", t), pe(r, "get", o));
  const { has: i } = mn(r),
    u = s ? os : n ? cs : Vt;
  if (i.call(r, t)) return u(e.get(t));
  if (i.call(r, o)) return u(e.get(o));
  e !== r && e.get(t);
}
function Wt(e, t = !1) {
  const n = this.__v_raw,
    s = D(n),
    r = D(e);
  return (
    t || (Xe(e, r) && pe(s, "has", e), pe(s, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function qt(e, t = !1) {
  return (
    (e = e.__v_raw), !t && pe(D(e), "iterate", it), Reflect.get(e, "size", e)
  );
}
function Rs(e) {
  e = D(e);
  const t = D(this);
  return mn(t).has.call(t, e) || (t.add(e), je(t, "add", e, e)), this;
}
function Ps(e, t) {
  t = D(t);
  const n = D(this),
    { has: s, get: r } = mn(n);
  let o = s.call(n, e);
  o || ((e = D(e)), (o = s.call(n, e)));
  const i = r.call(n, e);
  return (
    n.set(e, t), o ? Xe(t, i) && je(n, "set", e, t) : je(n, "add", e, t), this
  );
}
function Ss(e) {
  const t = D(this),
    { has: n, get: s } = mn(t);
  let r = n.call(t, e);
  r || ((e = D(e)), (r = n.call(t, e))), s && s.call(t, e);
  const o = t.delete(e);
  return r && je(t, "delete", e, void 0), o;
}
function Os() {
  const e = D(this),
    t = e.size !== 0,
    n = e.clear();
  return t && je(e, "clear", void 0, void 0), n;
}
function Gt(e, t) {
  return function (s, r) {
    const o = this,
      i = o.__v_raw,
      u = D(i),
      c = t ? os : e ? cs : Vt;
    return (
      !e && pe(u, "iterate", it), i.forEach((d, a) => s.call(r, c(d), c(a), o))
    );
  };
}
function Zt(e, t, n) {
  return function (...s) {
    const r = this.__v_raw,
      o = D(r),
      i = yt(o),
      u = e === "entries" || (e === Symbol.iterator && i),
      c = e === "keys" && i,
      d = r[e](...s),
      a = n ? os : t ? cs : Vt;
    return (
      !t && pe(o, "iterate", c ? $n : it),
      {
        next() {
          const { value: h, done: p } = d.next();
          return p
            ? { value: h, done: p }
            : { value: u ? [a(h[0]), a(h[1])] : a(h), done: p };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ke(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Xo() {
  const e = {
      get(o) {
        return zt(this, o);
      },
      get size() {
        return qt(this);
      },
      has: Wt,
      add: Rs,
      set: Ps,
      delete: Ss,
      clear: Os,
      forEach: Gt(!1, !1),
    },
    t = {
      get(o) {
        return zt(this, o, !1, !0);
      },
      get size() {
        return qt(this);
      },
      has: Wt,
      add: Rs,
      set: Ps,
      delete: Ss,
      clear: Os,
      forEach: Gt(!1, !0),
    },
    n = {
      get(o) {
        return zt(this, o, !0);
      },
      get size() {
        return qt(this, !0);
      },
      has(o) {
        return Wt.call(this, o, !0);
      },
      add: Ke("add"),
      set: Ke("set"),
      delete: Ke("delete"),
      clear: Ke("clear"),
      forEach: Gt(!0, !1),
    },
    s = {
      get(o) {
        return zt(this, o, !0, !0);
      },
      get size() {
        return qt(this, !0);
      },
      has(o) {
        return Wt.call(this, o, !0);
      },
      add: Ke("add"),
      set: Ke("set"),
      delete: Ke("delete"),
      clear: Ke("clear"),
      forEach: Gt(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = Zt(o, !1, !1)),
        (n[o] = Zt(o, !0, !1)),
        (t[o] = Zt(o, !1, !0)),
        (s[o] = Zt(o, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [ei, ti, ni, si] = Xo();
function is(e, t) {
  const n = t ? (e ? si : ni) : e ? ti : ei;
  return (s, r, o) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? s
      : Reflect.get(U(n, r) && r in s ? n : s, r, o);
}
const ri = { get: is(!1, !1) },
  oi = { get: is(!1, !0) },
  ii = { get: is(!0, !1) },
  Lr = new WeakMap(),
  Hr = new WeakMap(),
  Nr = new WeakMap(),
  li = new WeakMap();
function ci(e) {
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
function ui(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ci(Io(e));
}
function Ut(e) {
  return Et(e) ? e : ls(e, !1, Qo, ri, Lr);
}
function Fr(e) {
  return ls(e, !1, Jo, oi, Hr);
}
function Vr(e) {
  return ls(e, !0, Yo, ii, Nr);
}
function ls(e, t, n, s, r) {
  if (!X(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const o = r.get(e);
  if (o) return o;
  const i = ui(e);
  if (i === 0) return e;
  const u = new Proxy(e, i === 2 ? s : n);
  return r.set(e, u), u;
}
function vt(e) {
  return Et(e) ? vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Et(e) {
  return !!(e && e.__v_isReadonly);
}
function rn(e) {
  return !!(e && e.__v_isShallow);
}
function $r(e) {
  return vt(e) || Et(e);
}
function D(e) {
  const t = e && e.__v_raw;
  return t ? D(t) : e;
}
function jr(e) {
  return sn(e, "__v_skip", !0), e;
}
const Vt = (e) => (X(e) ? Ut(e) : e),
  cs = (e) => (X(e) ? Vr(e) : e);
class kr {
  constructor(t, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new ns(
        () => t(this._value),
        () => Jt(this, 1),
        () => this.dep && Or(this.dep)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = D(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        Xe(t._value, (t._value = t.effect.run())) &&
        Jt(t, 2),
      Br(t),
      t.effect._dirtyLevel >= 1 && Jt(t, 1),
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
function fi(e, t, n = !1) {
  let s, r;
  const o = k(e);
  return (
    o ? ((s = e), (r = _e)) : ((s = e.get), (r = e.set)),
    new kr(s, r, o || !r, n)
  );
}
function Br(e) {
  Ye &&
    ot &&
    ((e = D(e)),
    Pr(
      ot,
      e.dep ||
        (e.dep = Ar(() => (e.dep = void 0), e instanceof kr ? e : void 0))
    ));
}
function Jt(e, t = 2, n) {
  e = D(e);
  const s = e.dep;
  s && Sr(s, t);
}
function ge(e) {
  return !!(e && e.__v_isRef === !0);
}
function ai(e) {
  return Ur(e, !1);
}
function di(e) {
  return Ur(e, !0);
}
function Ur(e, t) {
  return ge(e) ? e : new hi(e, t);
}
class hi {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : D(t)),
      (this._value = n ? t : Vt(t));
  }
  get value() {
    return Br(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || rn(t) || Et(t);
    (t = n ? t : D(t)),
      Xe(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : Vt(t)), Jt(this, 2));
  }
}
function Ee(e) {
  return ge(e) ? e.value : e;
}
const pi = {
  get: (e, t, n) => Ee(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ge(r) && !ge(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function Dr(e) {
  return vt(e) ? e : new Proxy(e, pi);
}
/**
 * @vue/runtime-core v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Je(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    _n(o, t, n);
  }
  return r;
}
function Re(e, t, n, s) {
  if (k(e)) {
    const o = Je(e, t, n, s);
    return (
      o &&
        yr(o) &&
        o.catch((i) => {
          _n(i, t, n);
        }),
      o
    );
  }
  const r = [];
  for (let o = 0; o < e.length; o++) r.push(Re(e[o], t, n, s));
  return r;
}
function _n(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let a = 0; a < d.length; a++) if (d[a](e, i, u) === !1) return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Je(c, null, 10, [e, i, u]);
      return;
    }
  }
  gi(e, n, r, s);
}
function gi(e, t, n, s = !0) {
  console.error(e);
}
let $t = !1,
  jn = !1;
const le = [];
let Le = 0;
const bt = [];
let qe = null,
  rt = 0;
const Kr = Promise.resolve();
let us = null;
function zr(e) {
  const t = us || Kr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function mi(e) {
  let t = Le + 1,
    n = le.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1,
      r = le[s],
      o = jt(r);
    o < e || (o === e && r.pre) ? (t = s + 1) : (n = s);
  }
  return t;
}
function fs(e) {
  (!le.length || !le.includes(e, $t && e.allowRecurse ? Le + 1 : Le)) &&
    (e.id == null ? le.push(e) : le.splice(mi(e.id), 0, e), Wr());
}
function Wr() {
  !$t && !jn && ((jn = !0), (us = Kr.then(Gr)));
}
function _i(e) {
  const t = le.indexOf(e);
  t > Le && le.splice(t, 1);
}
function yi(e) {
  F(e)
    ? bt.push(...e)
    : (!qe || !qe.includes(e, e.allowRecurse ? rt + 1 : rt)) && bt.push(e),
    Wr();
}
function As(e, t, n = $t ? Le + 1 : 0) {
  for (; n < le.length; n++) {
    const s = le[n];
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue;
      le.splice(n, 1), n--, s();
    }
  }
}
function qr(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort((n, s) => jt(n) - jt(s));
    if (((bt.length = 0), qe)) {
      qe.push(...t);
      return;
    }
    for (qe = t, rt = 0; rt < qe.length; rt++) qe[rt]();
    (qe = null), (rt = 0);
  }
}
const jt = (e) => (e.id == null ? 1 / 0 : e.id),
  vi = (e, t) => {
    const n = jt(e) - jt(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Gr(e) {
  (jn = !1), ($t = !0), le.sort(vi);
  const t = _e;
  try {
    for (Le = 0; Le < le.length; Le++) {
      const n = le[Le];
      n && n.active !== !1 && Je(n, null, 14);
    }
  } finally {
    (Le = 0),
      (le.length = 0),
      qr(),
      ($t = !1),
      (us = null),
      (le.length || bt.length) && Gr();
  }
}
function bi(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || J;
  let r = n;
  const o = t.startsWith("update:"),
    i = o && t.slice(7);
  if (i && i in s) {
    const a = `${i === "modelValue" ? "model" : i}Modifiers`,
      { number: h, trim: p } = s[a] || J;
    p && (r = n.map((v) => (te(v) ? v.trim() : v))), h && (r = n.map(No));
  }
  let u,
    c = s[(u = Cn(t))] || s[(u = Cn(Ne(t)))];
  !c && o && (c = s[(u = Cn(Pt(t)))]), c && Re(c, e, 6, r);
  const d = s[u + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[u]) return;
    (e.emitted[u] = !0), Re(d, e, 6, r);
  }
}
function Zr(e, t, n = !1) {
  const s = t.emitsCache,
    r = s.get(e);
  if (r !== void 0) return r;
  const o = e.emits;
  let i = {},
    u = !1;
  if (!k(e)) {
    const c = (d) => {
      const a = Zr(d, t, !0);
      a && ((u = !0), oe(i, a));
    };
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c);
  }
  return !o && !u
    ? (X(e) && s.set(e, null), null)
    : (F(o) ? o.forEach((c) => (i[c] = null)) : oe(i, o),
      X(e) && s.set(e, i),
      i);
}
function yn(e, t) {
  return !e || !an(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      U(e, t[0].toLowerCase() + t.slice(1)) || U(e, Pt(t)) || U(e, t));
}
let xe = null,
  Qr = null;
function on(e) {
  const t = xe;
  return (xe = e), (Qr = (e && e.type.__scopeId) || null), t;
}
function Ei(e, t = xe, n) {
  if (!t || e._n) return e;
  const s = (...r) => {
    s._d && ks(-1);
    const o = on(t);
    let i;
    try {
      i = e(...r);
    } finally {
      on(o), s._d && ks(1);
    }
    return i;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function Sn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: o,
    propsOptions: [i],
    slots: u,
    attrs: c,
    emit: d,
    render: a,
    renderCache: h,
    data: p,
    setupState: v,
    ctx: A,
    inheritAttrs: L,
  } = e;
  let H, M;
  const V = on(e);
  try {
    if (n.shapeFlag & 4) {
      const K = r || s,
        ee = K;
      (H = Ie(a.call(ee, K, h, o, v, p, A))), (M = c);
    } else {
      const K = t;
      (H = Ie(
        K.length > 1 ? K(o, { attrs: c, slots: u, emit: d }) : K(o, null)
      )),
        (M = t.props ? c : wi(c));
    }
  } catch (K) {
    (Ht.length = 0), _n(K, e, 1), (H = ae(lt));
  }
  let $ = H;
  if (M && L !== !1) {
    const K = Object.keys(M),
      { shapeFlag: ee } = $;
    K.length && ee & 7 && (i && K.some(Jn) && (M = xi(M, i)), ($ = wt($, M)));
  }
  return (
    n.dirs && (($ = wt($)), ($.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs)),
    n.transition && ($.transition = n.transition),
    (H = $),
    on(V),
    H
  );
}
const wi = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || an(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  xi = (e, t) => {
    const n = {};
    for (const s in e) (!Jn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Ci(e, t, n) {
  const { props: s, children: r, component: o } = e,
    { props: i, children: u, patchFlag: c } = t,
    d = o.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? Ms(s, i, d) : !!i;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let h = 0; h < a.length; h++) {
        const p = a[h];
        if (i[p] !== s[p] && !yn(d, p)) return !0;
      }
    }
  } else
    return (r || u) && (!u || !u.$stable)
      ? !0
      : s === i
      ? !1
      : s
      ? i
        ? Ms(s, i, d)
        : !0
      : !!i;
  return !1;
}
function Ms(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !yn(n, o)) return !0;
  }
  return !1;
}
function Ri({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const Yr = "components";
function Pi(e, t) {
  return Oi(Yr, e, !0, t) || e;
}
const Si = Symbol.for("v-ndc");
function Oi(e, t, n = !0, s = !1) {
  const r = xe || ce;
  if (r) {
    const o = r.type;
    if (e === Yr) {
      const u = wl(o, !1);
      if (u && (u === t || u === Ne(t) || u === pn(Ne(t)))) return o;
    }
    const i = Ts(r[e] || o[e], t) || Ts(r.appContext[e], t);
    return !i && s ? o : i;
  }
}
function Ts(e, t) {
  return e && (e[t] || e[Ne(t)] || e[pn(Ne(t))]);
}
const Ai = (e) => e.__isSuspense;
function Mi(e, t) {
  t && t.pendingBranch
    ? F(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : yi(e);
}
const Ti = Symbol.for("v-scx"),
  Ii = () => He(Ti),
  Qt = {};
function It(e, t, n) {
  return Jr(e, t, n);
}
function Jr(
  e,
  t,
  { immediate: n, deep: s, flush: r, once: o, onTrack: i, onTrigger: u } = J
) {
  if (t && o) {
    const j = t;
    t = (...ue) => {
      j(...ue), ee();
    };
  }
  const c = ce,
    d = (j) => (s === !0 ? j : mt(j, s === !1 ? 1 : void 0));
  let a,
    h = !1,
    p = !1;
  if (
    (ge(e)
      ? ((a = () => e.value), (h = rn(e)))
      : vt(e)
      ? ((a = () => d(e)), (h = !0))
      : F(e)
      ? ((p = !0),
        (h = e.some((j) => vt(j) || rn(j))),
        (a = () =>
          e.map((j) => {
            if (ge(j)) return j.value;
            if (vt(j)) return d(j);
            if (k(j)) return Je(j, c, 2);
          })))
      : k(e)
      ? t
        ? (a = () => Je(e, c, 2))
        : (a = () => (v && v(), Re(e, c, 3, [A])))
      : (a = _e),
    t && s)
  ) {
    const j = a;
    a = () => mt(j());
  }
  let v,
    A = (j) => {
      v = $.onStop = () => {
        Je(j, c, 4), (v = $.onStop = void 0);
      };
    },
    L;
  if (wn)
    if (
      ((A = _e),
      t ? n && Re(t, c, 3, [a(), p ? [] : void 0, A]) : a(),
      r === "sync")
    ) {
      const j = Ii();
      L = j.__watcherHandles || (j.__watcherHandles = []);
    } else return _e;
  let H = p ? new Array(e.length).fill(Qt) : Qt;
  const M = () => {
    if (!(!$.active || !$.dirty))
      if (t) {
        const j = $.run();
        (s || h || (p ? j.some((ue, ye) => Xe(ue, H[ye])) : Xe(j, H))) &&
          (v && v(),
          Re(t, c, 3, [j, H === Qt ? void 0 : p && H[0] === Qt ? [] : H, A]),
          (H = j));
      } else $.run();
  };
  M.allowRecurse = !!t;
  let V;
  r === "sync"
    ? (V = M)
    : r === "post"
    ? (V = () => he(M, c && c.suspense))
    : ((M.pre = !0), c && (M.id = c.uid), (V = () => fs(M)));
  const $ = new ns(a, _e, V),
    K = Ko(),
    ee = () => {
      $.stop(), K && Xn(K.effects, $);
    };
  return (
    t
      ? n
        ? M()
        : (H = $.run())
      : r === "post"
      ? he($.run.bind($), c && c.suspense)
      : $.run(),
    L && L.push(ee),
    ee
  );
}
function Li(e, t, n) {
  const s = this.proxy,
    r = te(e) ? (e.includes(".") ? Xr(s, e) : () => s[e]) : e.bind(s, s);
  let o;
  k(t) ? (o = t) : ((o = t.handler), (n = t));
  const i = Dt(this),
    u = Jr(r, o.bind(s), n);
  return i(), u;
}
function Xr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function mt(e, t, n = 0, s) {
  if (!X(e) || e.__v_skip) return e;
  if (t && t > 0) {
    if (n >= t) return e;
    n++;
  }
  if (((s = s || new Set()), s.has(e))) return e;
  if ((s.add(e), ge(e))) mt(e.value, t, n, s);
  else if (F(e)) for (let r = 0; r < e.length; r++) mt(e[r], t, n, s);
  else if (_r(e) || yt(e))
    e.forEach((r) => {
      mt(r, t, n, s);
    });
  else if (br(e)) for (const r in e) mt(e[r], t, n, s);
  return e;
}
function tt(e, t, n, s) {
  const r = e.dirs,
    o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const u = r[i];
    o && (u.oldValue = o[i].value);
    let c = u.dir[s];
    c && (ct(), Re(c, n, 8, [e.el, u, e, t]), ut());
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function eo(e, t) {
  return k(e) ? (() => oe({ name: e.name }, t, { setup: e }))() : e;
}
const Xt = (e) => !!e.type.__asyncLoader,
  to = (e) => e.type.__isKeepAlive;
function Hi(e, t) {
  no(e, "a", t);
}
function Ni(e, t) {
  no(e, "da", t);
}
function no(e, t, n = ce) {
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
  if ((vn(t, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      to(r.parent.vnode) && Fi(s, t, n, r), (r = r.parent);
  }
}
function Fi(e, t, n, s) {
  const r = vn(t, e, s, !0);
  ro(() => {
    Xn(s[t], r);
  }, n);
}
function vn(e, t, n = ce, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return;
          ct();
          const u = Dt(n),
            c = Re(t, n, e, i);
          return u(), ut(), c;
        });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const ke =
    (e) =>
    (t, n = ce) =>
      (!wn || e === "sp") && vn(e, (...s) => t(...s), n),
  Vi = ke("bm"),
  so = ke("m"),
  $i = ke("bu"),
  ji = ke("u"),
  ki = ke("bum"),
  ro = ke("um"),
  Bi = ke("sp"),
  Ui = ke("rtg"),
  Di = ke("rtc");
function Ki(e, t = ce) {
  vn("ec", e, t);
}
function Fu(e, t, n, s) {
  let r;
  const o = n && n[s];
  if (F(e) || te(e)) {
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
      for (let u = 0, c = i.length; u < c; u++) {
        const d = i[u];
        r[u] = t(e[d], d, u, o && o[u]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
const kn = (e) => (e ? (_o(e) ? ps(e) || e.proxy : kn(e.parent)) : null),
  Lt = oe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => kn(e.parent),
    $root: (e) => kn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => as(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), fs(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = zr.bind(e.proxy)),
    $watch: (e) => Li.bind(e),
  }),
  On = (e, t) => e !== J && !e.__isScriptSetup && U(e, t),
  zi = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: o,
        accessCache: i,
        type: u,
        appContext: c,
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
      const a = Lt[t];
      let h, p;
      if (a) return t === "$attrs" && pe(e, "get", t), a(e);
      if ((h = u.__cssModules) && (h = h[t])) return h;
      if (n !== J && U(n, t)) return (i[t] = 4), n[t];
      if (((p = c.config.globalProperties), U(p, t))) return p[t];
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
        U(Lt, i) ||
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
function Is(e) {
  return F(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Bn = !0;
function Wi(e) {
  const t = as(e),
    n = e.proxy,
    s = e.ctx;
  (Bn = !1), t.beforeCreate && Ls(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: o,
    methods: i,
    watch: u,
    provide: c,
    inject: d,
    created: a,
    beforeMount: h,
    mounted: p,
    beforeUpdate: v,
    updated: A,
    activated: L,
    deactivated: H,
    beforeDestroy: M,
    beforeUnmount: V,
    destroyed: $,
    unmounted: K,
    render: ee,
    renderTracked: j,
    renderTriggered: ue,
    errorCaptured: ye,
    serverPrefetch: ft,
    expose: Se,
    inheritAttrs: Ue,
    components: et,
    directives: Oe,
    filters: St,
  } = t;
  if ((d && qi(d, s, null), i))
    for (const G in i) {
      const z = i[G];
      k(z) && (s[G] = z.bind(n));
    }
  if (r) {
    const G = r.call(n, n);
    X(G) && (e.data = Ut(G));
  }
  if (((Bn = !0), o))
    for (const G in o) {
      const z = o[G],
        Fe = k(z) ? z.bind(n, n) : k(z.get) ? z.get.bind(n, n) : _e,
        De = !k(z) && k(z.set) ? z.set.bind(n) : _e,
        Ae = we({ get: Fe, set: De });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => Ae.value,
        set: (de) => (Ae.value = de),
      });
    }
  if (u) for (const G in u) oo(u[G], s, n, G);
  if (c) {
    const G = k(c) ? c.call(n) : c;
    Reflect.ownKeys(G).forEach((z) => {
      en(z, G[z]);
    });
  }
  a && Ls(a, e, "c");
  function ne(G, z) {
    F(z) ? z.forEach((Fe) => G(Fe.bind(n))) : z && G(z.bind(n));
  }
  if (
    (ne(Vi, h),
    ne(so, p),
    ne($i, v),
    ne(ji, A),
    ne(Hi, L),
    ne(Ni, H),
    ne(Ki, ye),
    ne(Di, j),
    ne(Ui, ue),
    ne(ki, V),
    ne(ro, K),
    ne(Bi, ft),
    F(Se))
  )
    if (Se.length) {
      const G = e.exposed || (e.exposed = {});
      Se.forEach((z) => {
        Object.defineProperty(G, z, {
          get: () => n[z],
          set: (Fe) => (n[z] = Fe),
        });
      });
    } else e.exposed || (e.exposed = {});
  ee && e.render === _e && (e.render = ee),
    Ue != null && (e.inheritAttrs = Ue),
    et && (e.components = et),
    Oe && (e.directives = Oe);
}
function qi(e, t, n = _e) {
  F(e) && (e = Un(e));
  for (const s in e) {
    const r = e[s];
    let o;
    X(r)
      ? "default" in r
        ? (o = He(r.from || s, r.default, !0))
        : (o = He(r.from || s))
      : (o = He(r)),
      ge(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (i) => (o.value = i),
          })
        : (t[s] = o);
  }
}
function Ls(e, t, n) {
  Re(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function oo(e, t, n, s) {
  const r = s.includes(".") ? Xr(n, s) : () => n[s];
  if (te(e)) {
    const o = t[e];
    k(o) && It(r, o);
  } else if (k(e)) It(r, e.bind(n));
  else if (X(e))
    if (F(e)) e.forEach((o) => oo(o, t, n, s));
    else {
      const o = k(e.handler) ? e.handler.bind(n) : t[e.handler];
      k(o) && It(r, o, e);
    }
}
function as(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: r,
      optionsCache: o,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    u = o.get(t);
  let c;
  return (
    u
      ? (c = u)
      : !r.length && !n && !s
      ? (c = t)
      : ((c = {}), r.length && r.forEach((d) => ln(c, d, i, !0)), ln(c, t, i)),
    X(t) && o.set(t, c),
    c
  );
}
function ln(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && ln(e, o, n, !0), r && r.forEach((i) => ln(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const u = Gi[i] || (n && n[i]);
      e[i] = u ? u(e[i], t[i]) : t[i];
    }
  return e;
}
const Gi = {
  data: Hs,
  props: Ns,
  emits: Ns,
  methods: Tt,
  computed: Tt,
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
  components: Tt,
  directives: Tt,
  watch: Qi,
  provide: Hs,
  inject: Zi,
};
function Hs(e, t) {
  return t
    ? e
      ? function () {
          return oe(
            k(e) ? e.call(this, this) : e,
            k(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Zi(e, t) {
  return Tt(Un(e), Un(t));
}
function Un(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tt(e, t) {
  return e ? oe(Object.create(null), e, t) : t;
}
function Ns(e, t) {
  return e
    ? F(e) && F(t)
      ? [...new Set([...e, ...t])]
      : oe(Object.create(null), Is(e), Is(t ?? {}))
    : t;
}
function Qi(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = oe(Object.create(null), e);
  for (const s in t) n[s] = fe(e[s], t[s]);
  return n;
}
function io() {
  return {
    app: null,
    config: {
      isNativeTag: Mo,
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
let Yi = 0;
function Ji(e, t) {
  return function (s, r = null) {
    k(s) || (s = oe({}, s)), r != null && !X(r) && (r = null);
    const o = io(),
      i = new WeakSet();
    let u = !1;
    const c = (o.app = {
      _uid: Yi++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Cl,
      get config() {
        return o.config;
      },
      set config(d) {},
      use(d, ...a) {
        return (
          i.has(d) ||
            (d && k(d.install)
              ? (i.add(d), d.install(c, ...a))
              : k(d) && (i.add(d), d(c, ...a))),
          c
        );
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), c;
      },
      component(d, a) {
        return a ? ((o.components[d] = a), c) : o.components[d];
      },
      directive(d, a) {
        return a ? ((o.directives[d] = a), c) : o.directives[d];
      },
      mount(d, a, h) {
        if (!u) {
          const p = ae(s, r);
          return (
            (p.appContext = o),
            h === !0 ? (h = "svg") : h === !1 && (h = void 0),
            a && t ? t(p, d) : e(p, d, h),
            (u = !0),
            (c._container = d),
            (d.__vue_app__ = c),
            ps(p.component) || p.component.proxy
          );
        }
      },
      unmount() {
        u && (e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, a) {
        return (o.provides[d] = a), c;
      },
      runWithContext(d) {
        cn = c;
        try {
          return d();
        } finally {
          cn = null;
        }
      },
    });
    return c;
  };
}
let cn = null;
function en(e, t) {
  if (ce) {
    let n = ce.provides;
    const s = ce.parent && ce.parent.provides;
    s === n && (n = ce.provides = Object.create(s)), (n[e] = t);
  }
}
function He(e, t, n = !1) {
  const s = ce || xe;
  if (s || cn) {
    const r = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : cn._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && k(t) ? t.call(s && s.proxy) : t;
  }
}
function Xi(e, t, n, s = !1) {
  const r = {},
    o = {};
  sn(o, En, 1), (e.propsDefaults = Object.create(null)), lo(e, t, r, o);
  for (const i in e.propsOptions[0]) i in r || (r[i] = void 0);
  n ? (e.props = s ? r : Fr(r)) : e.type.props ? (e.props = r) : (e.props = o),
    (e.attrs = o);
}
function el(e, t, n, s) {
  const {
      props: r,
      attrs: o,
      vnode: { patchFlag: i },
    } = e,
    u = D(r),
    [c] = e.propsOptions;
  let d = !1;
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const a = e.vnode.dynamicProps;
      for (let h = 0; h < a.length; h++) {
        let p = a[h];
        if (yn(e.emitsOptions, p)) continue;
        const v = t[p];
        if (c)
          if (U(o, p)) v !== o[p] && ((o[p] = v), (d = !0));
          else {
            const A = Ne(p);
            r[A] = Dn(c, u, A, v, e, !1);
          }
        else v !== o[p] && ((o[p] = v), (d = !0));
      }
    }
  } else {
    lo(e, t, r, o) && (d = !0);
    let a;
    for (const h in u)
      (!t || (!U(t, h) && ((a = Pt(h)) === h || !U(t, a)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[a] !== void 0) &&
            (r[h] = Dn(c, u, h, void 0, e, !0))
          : delete r[h]);
    if (o !== u) for (const h in o) (!t || !U(t, h)) && (delete o[h], (d = !0));
  }
  d && je(e, "set", "$attrs");
}
function lo(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1,
    u;
  if (t)
    for (let c in t) {
      if (Yt(c)) continue;
      const d = t[c];
      let a;
      r && U(r, (a = Ne(c)))
        ? !o || !o.includes(a)
          ? (n[a] = d)
          : ((u || (u = {}))[a] = d)
        : yn(e.emitsOptions, c) ||
          ((!(c in s) || d !== s[c]) && ((s[c] = d), (i = !0)));
    }
  if (o) {
    const c = D(n),
      d = u || J;
    for (let a = 0; a < o.length; a++) {
      const h = o[a];
      n[h] = Dn(r, c, h, d[h], e, !U(d, h));
    }
  }
  return i;
}
function Dn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const u = U(i, "default");
    if (u && s === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && k(c)) {
        const { propsDefaults: d } = r;
        if (n in d) s = d[n];
        else {
          const a = Dt(r);
          (s = d[n] = c.call(null, t)), a();
        }
      } else s = c;
    }
    i[0] &&
      (o && !u ? (s = !1) : i[1] && (s === "" || s === Pt(n)) && (s = !0));
  }
  return s;
}
function co(e, t, n = !1) {
  const s = t.propsCache,
    r = s.get(e);
  if (r) return r;
  const o = e.props,
    i = {},
    u = [];
  let c = !1;
  if (!k(e)) {
    const a = (h) => {
      c = !0;
      const [p, v] = co(h, t, !0);
      oe(i, p), v && u.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  if (!o && !c) return X(e) && s.set(e, _t), _t;
  if (F(o))
    for (let a = 0; a < o.length; a++) {
      const h = Ne(o[a]);
      Fs(h) && (i[h] = J);
    }
  else if (o)
    for (const a in o) {
      const h = Ne(a);
      if (Fs(h)) {
        const p = o[a],
          v = (i[h] = F(p) || k(p) ? { type: p } : oe({}, p));
        if (v) {
          const A = js(Boolean, v.type),
            L = js(String, v.type);
          (v[0] = A > -1),
            (v[1] = L < 0 || A < L),
            (A > -1 || U(v, "default")) && u.push(h);
        }
      }
    }
  const d = [i, u];
  return X(e) && s.set(e, d), d;
}
function Fs(e) {
  return e[0] !== "$";
}
function Vs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function $s(e, t) {
  return Vs(e) === Vs(t);
}
function js(e, t) {
  return F(t) ? t.findIndex((n) => $s(n, e)) : k(t) && $s(t, e) ? 0 : -1;
}
const uo = (e) => e[0] === "_" || e === "$stable",
  ds = (e) => (F(e) ? e.map(Ie) : [Ie(e)]),
  tl = (e, t, n) => {
    if (t._n) return t;
    const s = Ei((...r) => ds(t(...r)), n);
    return (s._c = !1), s;
  },
  fo = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (uo(r)) continue;
      const o = e[r];
      if (k(o)) t[r] = tl(r, o, s);
      else if (o != null) {
        const i = ds(o);
        t[r] = () => i;
      }
    }
  },
  ao = (e, t) => {
    const n = ds(t);
    e.slots.default = () => n;
  },
  nl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = D(t)), sn(t, "_", n)) : fo(t, (e.slots = {}));
    } else (e.slots = {}), t && ao(e, t);
    sn(e.slots, En, 1);
  },
  sl = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let o = !0,
      i = J;
    if (s.shapeFlag & 32) {
      const u = t._;
      u
        ? n && u === 1
          ? (o = !1)
          : (oe(r, t), !n && u === 1 && delete r._)
        : ((o = !t.$stable), fo(t, r)),
        (i = t);
    } else t && (ao(e, t), (i = { default: 1 }));
    if (o) for (const u in r) !uo(u) && i[u] == null && delete r[u];
  };
function Kn(e, t, n, s, r = !1) {
  if (F(e)) {
    e.forEach((p, v) => Kn(p, t && (F(t) ? t[v] : t), n, s, r));
    return;
  }
  if (Xt(s) && !r) return;
  const o = s.shapeFlag & 4 ? ps(s.component) || s.component.proxy : s.el,
    i = r ? null : o,
    { i: u, r: c } = e,
    d = t && t.r,
    a = u.refs === J ? (u.refs = {}) : u.refs,
    h = u.setupState;
  if (
    (d != null &&
      d !== c &&
      (te(d)
        ? ((a[d] = null), U(h, d) && (h[d] = null))
        : ge(d) && (d.value = null)),
    k(c))
  )
    Je(c, u, 12, [i, a]);
  else {
    const p = te(c),
      v = ge(c),
      A = e.f;
    if (p || v) {
      const L = () => {
        if (A) {
          const H = p ? (U(h, c) ? h[c] : a[c]) : c.value;
          r
            ? F(H) && Xn(H, o)
            : F(H)
            ? H.includes(o) || H.push(o)
            : p
            ? ((a[c] = [o]), U(h, c) && (h[c] = a[c]))
            : ((c.value = [o]), e.k && (a[e.k] = c.value));
        } else
          p
            ? ((a[c] = i), U(h, c) && (h[c] = i))
            : v && ((c.value = i), e.k && (a[e.k] = i));
      };
      r || A ? L() : ((L.id = -1), he(L, n));
    }
  }
}
const he = Mi;
function rl(e) {
  return ol(e);
}
function ol(e, t) {
  const n = Er();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: o,
      createElement: i,
      createText: u,
      createComment: c,
      setText: d,
      setElementText: a,
      parentNode: h,
      nextSibling: p,
      setScopeId: v = _e,
      insertStaticContent: A,
    } = e,
    L = (
      l,
      f,
      g,
      y = null,
      m = null,
      w = null,
      R = void 0,
      E = null,
      x = !!f.dynamicChildren
    ) => {
      if (l === f) return;
      l && !At(l, f) && ((y = _(l)), de(l, m, w, !0), (l = null)),
        f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null));
      const { type: b, ref: S, shapeFlag: I } = f;
      switch (b) {
        case bn:
          H(l, f, g, y);
          break;
        case lt:
          M(l, f, g, y);
          break;
        case tn:
          l == null && V(f, g, y, R);
          break;
        case $e:
          et(l, f, g, y, m, w, R, E, x);
          break;
        default:
          I & 1
            ? ee(l, f, g, y, m, w, R, E, x)
            : I & 6
            ? Oe(l, f, g, y, m, w, R, E, x)
            : (I & 64 || I & 128) && b.process(l, f, g, y, m, w, R, E, x, O);
      }
      S != null && m && Kn(S, l && l.ref, w, f || l, !f);
    },
    H = (l, f, g, y) => {
      if (l == null) s((f.el = u(f.children)), g, y);
      else {
        const m = (f.el = l.el);
        f.children !== l.children && d(m, f.children);
      }
    },
    M = (l, f, g, y) => {
      l == null ? s((f.el = c(f.children || "")), g, y) : (f.el = l.el);
    },
    V = (l, f, g, y) => {
      [l.el, l.anchor] = A(l.children, f, g, y, l.el, l.anchor);
    },
    $ = ({ el: l, anchor: f }, g, y) => {
      let m;
      for (; l && l !== f; ) (m = p(l)), s(l, g, y), (l = m);
      s(f, g, y);
    },
    K = ({ el: l, anchor: f }) => {
      let g;
      for (; l && l !== f; ) (g = p(l)), r(l), (l = g);
      r(f);
    },
    ee = (l, f, g, y, m, w, R, E, x) => {
      f.type === "svg" ? (R = "svg") : f.type === "math" && (R = "mathml"),
        l == null ? j(f, g, y, m, w, R, E, x) : ft(l, f, m, w, R, E, x);
    },
    j = (l, f, g, y, m, w, R, E) => {
      let x, b;
      const { props: S, shapeFlag: I, transition: T, dirs: N } = l;
      if (
        ((x = l.el = i(l.type, w, S && S.is, S)),
        I & 8
          ? a(x, l.children)
          : I & 16 && ye(l.children, x, null, y, m, An(l, w), R, E),
        N && tt(l, null, y, "created"),
        ue(x, l, l.scopeId, R, y),
        S)
      ) {
        for (const Z in S)
          Z !== "value" &&
            !Yt(Z) &&
            o(x, Z, null, S[Z], w, l.children, y, m, ie);
        "value" in S && o(x, "value", null, S.value, w),
          (b = S.onVnodeBeforeMount) && Te(b, y, l);
      }
      N && tt(l, null, y, "beforeMount");
      const B = il(m, T);
      B && T.beforeEnter(x),
        s(x, f, g),
        ((b = S && S.onVnodeMounted) || B || N) &&
          he(() => {
            b && Te(b, y, l), B && T.enter(x), N && tt(l, null, y, "mounted");
          }, m);
    },
    ue = (l, f, g, y, m) => {
      if ((g && v(l, g), y)) for (let w = 0; w < y.length; w++) v(l, y[w]);
      if (m) {
        let w = m.subTree;
        if (f === w) {
          const R = m.vnode;
          ue(l, R, R.scopeId, R.slotScopeIds, m.parent);
        }
      }
    },
    ye = (l, f, g, y, m, w, R, E, x = 0) => {
      for (let b = x; b < l.length; b++) {
        const S = (l[b] = E ? Ge(l[b]) : Ie(l[b]));
        L(null, S, f, g, y, m, w, R, E);
      }
    },
    ft = (l, f, g, y, m, w, R) => {
      const E = (f.el = l.el);
      let { patchFlag: x, dynamicChildren: b, dirs: S } = f;
      x |= l.patchFlag & 16;
      const I = l.props || J,
        T = f.props || J;
      let N;
      if (
        (g && nt(g, !1),
        (N = T.onVnodeBeforeUpdate) && Te(N, g, f, l),
        S && tt(f, l, g, "beforeUpdate"),
        g && nt(g, !0),
        b
          ? Se(l.dynamicChildren, b, E, g, y, An(f, m), w)
          : R || z(l, f, E, null, g, y, An(f, m), w, !1),
        x > 0)
      ) {
        if (x & 16) Ue(E, f, I, T, g, y, m);
        else if (
          (x & 2 && I.class !== T.class && o(E, "class", null, T.class, m),
          x & 4 && o(E, "style", I.style, T.style, m),
          x & 8)
        ) {
          const B = f.dynamicProps;
          for (let Z = 0; Z < B.length; Z++) {
            const Y = B[Z],
              se = I[Y],
              ve = T[Y];
            (ve !== se || Y === "value") &&
              o(E, Y, se, ve, m, l.children, g, y, ie);
          }
        }
        x & 1 && l.children !== f.children && a(E, f.children);
      } else !R && b == null && Ue(E, f, I, T, g, y, m);
      ((N = T.onVnodeUpdated) || S) &&
        he(() => {
          N && Te(N, g, f, l), S && tt(f, l, g, "updated");
        }, y);
    },
    Se = (l, f, g, y, m, w, R) => {
      for (let E = 0; E < f.length; E++) {
        const x = l[E],
          b = f[E],
          S =
            x.el && (x.type === $e || !At(x, b) || x.shapeFlag & 70)
              ? h(x.el)
              : g;
        L(x, b, S, null, y, m, w, R, !0);
      }
    },
    Ue = (l, f, g, y, m, w, R) => {
      if (g !== y) {
        if (g !== J)
          for (const E in g)
            !Yt(E) && !(E in y) && o(l, E, g[E], null, R, f.children, m, w, ie);
        for (const E in y) {
          if (Yt(E)) continue;
          const x = y[E],
            b = g[E];
          x !== b && E !== "value" && o(l, E, b, x, R, f.children, m, w, ie);
        }
        "value" in y && o(l, "value", g.value, y.value, R);
      }
    },
    et = (l, f, g, y, m, w, R, E, x) => {
      const b = (f.el = l ? l.el : u("")),
        S = (f.anchor = l ? l.anchor : u(""));
      let { patchFlag: I, dynamicChildren: T, slotScopeIds: N } = f;
      N && (E = E ? E.concat(N) : N),
        l == null
          ? (s(b, g, y), s(S, g, y), ye(f.children || [], g, S, m, w, R, E, x))
          : I > 0 && I & 64 && T && l.dynamicChildren
          ? (Se(l.dynamicChildren, T, g, m, w, R, E),
            (f.key != null || (m && f === m.subTree)) && ho(l, f, !0))
          : z(l, f, g, S, m, w, R, E, x);
    },
    Oe = (l, f, g, y, m, w, R, E, x) => {
      (f.slotScopeIds = E),
        l == null
          ? f.shapeFlag & 512
            ? m.ctx.activate(f, g, y, R, x)
            : St(f, g, y, m, w, R, x)
          : at(l, f, x);
    },
    St = (l, f, g, y, m, w, R) => {
      const E = (l.component = _l(l, y, m));
      if ((to(l) && (E.ctx.renderer = O), yl(E), E.asyncDep)) {
        if ((m && m.registerDep(E, ne), !l.el)) {
          const x = (E.subTree = ae(lt));
          M(null, x, f, g);
        }
      } else ne(E, l, f, g, m, w, R);
    },
    at = (l, f, g) => {
      const y = (f.component = l.component);
      if (Ci(l, f, g))
        if (y.asyncDep && !y.asyncResolved) {
          G(y, f, g);
          return;
        } else (y.next = f), _i(y.update), (y.effect.dirty = !0), y.update();
      else (f.el = l.el), (y.vnode = f);
    },
    ne = (l, f, g, y, m, w, R) => {
      const E = () => {
          if (l.isMounted) {
            let { next: S, bu: I, u: T, parent: N, vnode: B } = l;
            {
              const pt = po(l);
              if (pt) {
                S && ((S.el = B.el), G(l, S, R)),
                  pt.asyncDep.then(() => {
                    l.isUnmounted || E();
                  });
                return;
              }
            }
            let Z = S,
              Y;
            nt(l, !1),
              S ? ((S.el = B.el), G(l, S, R)) : (S = B),
              I && Rn(I),
              (Y = S.props && S.props.onVnodeBeforeUpdate) && Te(Y, N, S, B),
              nt(l, !0);
            const se = Sn(l),
              ve = l.subTree;
            (l.subTree = se),
              L(ve, se, h(ve.el), _(ve), l, m, w),
              (S.el = se.el),
              Z === null && Ri(l, se.el),
              T && he(T, m),
              (Y = S.props && S.props.onVnodeUpdated) &&
                he(() => Te(Y, N, S, B), m);
          } else {
            let S;
            const { el: I, props: T } = f,
              { bm: N, m: B, parent: Z } = l,
              Y = Xt(f);
            if (
              (nt(l, !1),
              N && Rn(N),
              !Y && (S = T && T.onVnodeBeforeMount) && Te(S, Z, f),
              nt(l, !0),
              I && Q)
            ) {
              const se = () => {
                (l.subTree = Sn(l)), Q(I, l.subTree, l, m, null);
              };
              Y
                ? f.type.__asyncLoader().then(() => !l.isUnmounted && se())
                : se();
            } else {
              const se = (l.subTree = Sn(l));
              L(null, se, g, y, l, m, w), (f.el = se.el);
            }
            if ((B && he(B, m), !Y && (S = T && T.onVnodeMounted))) {
              const se = f;
              he(() => Te(S, Z, se), m);
            }
            (f.shapeFlag & 256 ||
              (Z && Xt(Z.vnode) && Z.vnode.shapeFlag & 256)) &&
              l.a &&
              he(l.a, m),
              (l.isMounted = !0),
              (f = g = y = null);
          }
        },
        x = (l.effect = new ns(E, _e, () => fs(b), l.scope)),
        b = (l.update = () => {
          x.dirty && x.run();
        });
      (b.id = l.uid), nt(l, !0), b();
    },
    G = (l, f, g) => {
      f.component = l;
      const y = l.vnode.props;
      (l.vnode = f),
        (l.next = null),
        el(l, f.props, y, g),
        sl(l, f.children, g),
        ct(),
        As(l),
        ut();
    },
    z = (l, f, g, y, m, w, R, E, x = !1) => {
      const b = l && l.children,
        S = l ? l.shapeFlag : 0,
        I = f.children,
        { patchFlag: T, shapeFlag: N } = f;
      if (T > 0) {
        if (T & 128) {
          De(b, I, g, y, m, w, R, E, x);
          return;
        } else if (T & 256) {
          Fe(b, I, g, y, m, w, R, E, x);
          return;
        }
      }
      N & 8
        ? (S & 16 && ie(b, m, w), I !== b && a(g, I))
        : S & 16
        ? N & 16
          ? De(b, I, g, y, m, w, R, E, x)
          : ie(b, m, w, !0)
        : (S & 8 && a(g, ""), N & 16 && ye(I, g, y, m, w, R, E, x));
    },
    Fe = (l, f, g, y, m, w, R, E, x) => {
      (l = l || _t), (f = f || _t);
      const b = l.length,
        S = f.length,
        I = Math.min(b, S);
      let T;
      for (T = 0; T < I; T++) {
        const N = (f[T] = x ? Ge(f[T]) : Ie(f[T]));
        L(l[T], N, g, null, m, w, R, E, x);
      }
      b > S ? ie(l, m, w, !0, !1, I) : ye(f, g, y, m, w, R, E, x, I);
    },
    De = (l, f, g, y, m, w, R, E, x) => {
      let b = 0;
      const S = f.length;
      let I = l.length - 1,
        T = S - 1;
      for (; b <= I && b <= T; ) {
        const N = l[b],
          B = (f[b] = x ? Ge(f[b]) : Ie(f[b]));
        if (At(N, B)) L(N, B, g, null, m, w, R, E, x);
        else break;
        b++;
      }
      for (; b <= I && b <= T; ) {
        const N = l[I],
          B = (f[T] = x ? Ge(f[T]) : Ie(f[T]));
        if (At(N, B)) L(N, B, g, null, m, w, R, E, x);
        else break;
        I--, T--;
      }
      if (b > I) {
        if (b <= T) {
          const N = T + 1,
            B = N < S ? f[N].el : y;
          for (; b <= T; )
            L(null, (f[b] = x ? Ge(f[b]) : Ie(f[b])), g, B, m, w, R, E, x), b++;
        }
      } else if (b > T) for (; b <= I; ) de(l[b], m, w, !0), b++;
      else {
        const N = b,
          B = b,
          Z = new Map();
        for (b = B; b <= T; b++) {
          const me = (f[b] = x ? Ge(f[b]) : Ie(f[b]));
          me.key != null && Z.set(me.key, b);
        }
        let Y,
          se = 0;
        const ve = T - B + 1;
        let pt = !1,
          ys = 0;
        const Ot = new Array(ve);
        for (b = 0; b < ve; b++) Ot[b] = 0;
        for (b = N; b <= I; b++) {
          const me = l[b];
          if (se >= ve) {
            de(me, m, w, !0);
            continue;
          }
          let Me;
          if (me.key != null) Me = Z.get(me.key);
          else
            for (Y = B; Y <= T; Y++)
              if (Ot[Y - B] === 0 && At(me, f[Y])) {
                Me = Y;
                break;
              }
          Me === void 0
            ? de(me, m, w, !0)
            : ((Ot[Me - B] = b + 1),
              Me >= ys ? (ys = Me) : (pt = !0),
              L(me, f[Me], g, null, m, w, R, E, x),
              se++);
        }
        const vs = pt ? ll(Ot) : _t;
        for (Y = vs.length - 1, b = ve - 1; b >= 0; b--) {
          const me = B + b,
            Me = f[me],
            bs = me + 1 < S ? f[me + 1].el : y;
          Ot[b] === 0
            ? L(null, Me, g, bs, m, w, R, E, x)
            : pt && (Y < 0 || b !== vs[Y] ? Ae(Me, g, bs, 2) : Y--);
        }
      }
    },
    Ae = (l, f, g, y, m = null) => {
      const { el: w, type: R, transition: E, children: x, shapeFlag: b } = l;
      if (b & 6) {
        Ae(l.component.subTree, f, g, y);
        return;
      }
      if (b & 128) {
        l.suspense.move(f, g, y);
        return;
      }
      if (b & 64) {
        R.move(l, f, g, O);
        return;
      }
      if (R === $e) {
        s(w, f, g);
        for (let I = 0; I < x.length; I++) Ae(x[I], f, g, y);
        s(l.anchor, f, g);
        return;
      }
      if (R === tn) {
        $(l, f, g);
        return;
      }
      if (y !== 2 && b & 1 && E)
        if (y === 0) E.beforeEnter(w), s(w, f, g), he(() => E.enter(w), m);
        else {
          const { leave: I, delayLeave: T, afterLeave: N } = E,
            B = () => s(w, f, g),
            Z = () => {
              I(w, () => {
                B(), N && N();
              });
            };
          T ? T(w, B, Z) : Z();
        }
      else s(w, f, g);
    },
    de = (l, f, g, y = !1, m = !1) => {
      const {
        type: w,
        props: R,
        ref: E,
        children: x,
        dynamicChildren: b,
        shapeFlag: S,
        patchFlag: I,
        dirs: T,
      } = l;
      if ((E != null && Kn(E, null, g, l, !0), S & 256)) {
        f.ctx.deactivate(l);
        return;
      }
      const N = S & 1 && T,
        B = !Xt(l);
      let Z;
      if ((B && (Z = R && R.onVnodeBeforeUnmount) && Te(Z, f, l), S & 6))
        Kt(l.component, g, y);
      else {
        if (S & 128) {
          l.suspense.unmount(g, y);
          return;
        }
        N && tt(l, null, f, "beforeUnmount"),
          S & 64
            ? l.type.remove(l, f, g, m, O, y)
            : b && (w !== $e || (I > 0 && I & 64))
            ? ie(b, f, g, !1, !0)
            : ((w === $e && I & 384) || (!m && S & 16)) && ie(x, f, g),
          y && dt(l);
      }
      ((B && (Z = R && R.onVnodeUnmounted)) || N) &&
        he(() => {
          Z && Te(Z, f, l), N && tt(l, null, f, "unmounted");
        }, g);
    },
    dt = (l) => {
      const { type: f, el: g, anchor: y, transition: m } = l;
      if (f === $e) {
        ht(g, y);
        return;
      }
      if (f === tn) {
        K(l);
        return;
      }
      const w = () => {
        r(g), m && !m.persisted && m.afterLeave && m.afterLeave();
      };
      if (l.shapeFlag & 1 && m && !m.persisted) {
        const { leave: R, delayLeave: E } = m,
          x = () => R(g, w);
        E ? E(l.el, w, x) : x();
      } else w();
    },
    ht = (l, f) => {
      let g;
      for (; l !== f; ) (g = p(l)), r(l), (l = g);
      r(f);
    },
    Kt = (l, f, g) => {
      const { bum: y, scope: m, update: w, subTree: R, um: E } = l;
      y && Rn(y),
        m.stop(),
        w && ((w.active = !1), de(R, l, f, g)),
        E && he(E, f),
        he(() => {
          l.isUnmounted = !0;
        }, f),
        f &&
          f.pendingBranch &&
          !f.isUnmounted &&
          l.asyncDep &&
          !l.asyncResolved &&
          l.suspenseId === f.pendingId &&
          (f.deps--, f.deps === 0 && f.resolve());
    },
    ie = (l, f, g, y = !1, m = !1, w = 0) => {
      for (let R = w; R < l.length; R++) de(l[R], f, g, y, m);
    },
    _ = (l) =>
      l.shapeFlag & 6
        ? _(l.component.subTree)
        : l.shapeFlag & 128
        ? l.suspense.next()
        : p(l.anchor || l.el);
  let P = !1;
  const C = (l, f, g) => {
      l == null
        ? f._vnode && de(f._vnode, null, null, !0)
        : L(f._vnode || null, l, f, null, null, null, g),
        P || ((P = !0), As(), qr(), (P = !1)),
        (f._vnode = l);
    },
    O = {
      p: L,
      um: de,
      m: Ae,
      r: dt,
      mt: St,
      mc: ye,
      pc: z,
      pbc: Se,
      n: _,
      o: e,
    };
  let W, Q;
  return t && ([W, Q] = t(O)), { render: C, hydrate: W, createApp: Ji(C, W) };
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
function nt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function il(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function ho(e, t, n = !1) {
  const s = e.children,
    r = t.children;
  if (F(s) && F(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let u = r[o];
      u.shapeFlag & 1 &&
        !u.dynamicChildren &&
        ((u.patchFlag <= 0 || u.patchFlag === 32) &&
          ((u = r[o] = Ge(r[o])), (u.el = i.el)),
        n || ho(i, u)),
        u.type === bn && (u.el = i.el);
    }
}
function ll(e) {
  const t = e.slice(),
    n = [0];
  let s, r, o, i, u;
  const c = e.length;
  for (s = 0; s < c; s++) {
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
function po(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : po(t);
}
const cl = (e) => e.__isTeleport,
  $e = Symbol.for("v-fgt"),
  bn = Symbol.for("v-txt"),
  lt = Symbol.for("v-cmt"),
  tn = Symbol.for("v-stc"),
  Ht = [];
let Ce = null;
function We(e = !1) {
  Ht.push((Ce = e ? null : []));
}
function ul() {
  Ht.pop(), (Ce = Ht[Ht.length - 1] || null);
}
let kt = 1;
function ks(e) {
  kt += e;
}
function go(e) {
  return (
    (e.dynamicChildren = kt > 0 ? Ce || _t : null),
    ul(),
    kt > 0 && Ce && Ce.push(e),
    e
  );
}
function st(e, t, n, s, r, o) {
  return go(re(e, t, n, s, r, o, !0));
}
function fl(e, t, n, s, r) {
  return go(ae(e, t, n, s, r, !0));
}
function zn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function At(e, t) {
  return e.type === t.type && e.key === t.key;
}
const En = "__vInternal",
  mo = ({ key: e }) => e ?? null,
  nn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? te(e) || ge(e) || k(e)
        ? { i: xe, r: e, k: t, f: !!n }
        : e
      : null
  );
function re(
  e,
  t = null,
  n = null,
  s = 0,
  r = null,
  o = e === $e ? 0 : 1,
  i = !1,
  u = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && mo(t),
    ref: t && nn(t),
    scopeId: Qr,
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
    ctx: xe,
  };
  return (
    u
      ? (hs(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= te(n) ? 8 : 16),
    kt > 0 &&
      !i &&
      Ce &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Ce.push(c),
    c
  );
}
const ae = al;
function al(e, t = null, n = null, s = 0, r = null, o = !1) {
  if (((!e || e === Si) && (e = lt), zn(e))) {
    const u = wt(e, t, !0);
    return (
      n && hs(u, n),
      kt > 0 &&
        !o &&
        Ce &&
        (u.shapeFlag & 6 ? (Ce[Ce.indexOf(e)] = u) : Ce.push(u)),
      (u.patchFlag |= -2),
      u
    );
  }
  if ((xl(e) && (e = e.__vccOpts), t)) {
    t = dl(t);
    let { class: u, style: c } = t;
    u && !te(u) && (t.class = gn(u)),
      X(c) && ($r(c) && !F(c) && (c = oe({}, c)), (t.style = ts(c)));
  }
  const i = te(e) ? 1 : Ai(e) ? 128 : cl(e) ? 64 : X(e) ? 4 : k(e) ? 2 : 0;
  return re(e, t, n, s, r, i, o, !0);
}
function dl(e) {
  return e ? ($r(e) || En in e ? oe({}, e) : e) : null;
}
function wt(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e,
    u = t ? pl(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && mo(u),
    ref:
      t && t.ref ? (n && r ? (F(r) ? r.concat(nn(t)) : [r, nn(t)]) : nn(t)) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== $e ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && wt(e.ssContent),
    ssFallback: e.ssFallback && wt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function hl(e = " ", t = 0) {
  return ae(bn, null, e, t);
}
function Vu(e, t) {
  const n = ae(tn, null, e);
  return (n.staticCount = t), n;
}
function Bs(e = "", t = !1) {
  return t ? (We(), fl(lt, null, e)) : ae(lt, null, e);
}
function Ie(e) {
  return e == null || typeof e == "boolean"
    ? ae(lt)
    : F(e)
    ? ae($e, null, e.slice())
    : typeof e == "object"
    ? Ge(e)
    : ae(bn, null, String(e));
}
function Ge(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : wt(e);
}
function hs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (F(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), hs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(En in t)
        ? (t._ctx = xe)
        : r === 3 &&
          xe &&
          (xe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    k(t)
      ? ((t = { default: t, _ctx: xe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [hl(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function pl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = gn([t.class, s.class]));
      else if (r === "style") t.style = ts([t.style, s.style]);
      else if (an(r)) {
        const o = t[r],
          i = s[r];
        i &&
          o !== i &&
          !(F(o) && o.includes(i)) &&
          (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Te(e, t, n, s = null) {
  Re(e, t, 7, [n, s]);
}
const gl = io();
let ml = 0;
function _l(e, t, n) {
  const s = e.type,
    r = (t ? t.appContext : e.appContext) || gl,
    o = {
      uid: ml++,
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
      propsOptions: co(s, r),
      emitsOptions: Zr(s, r),
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
    (o.emit = bi.bind(null, o)),
    e.ce && e.ce(o),
    o
  );
}
let ce = null,
  un,
  Wn;
{
  const e = Er(),
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
  (un = t("__VUE_INSTANCE_SETTERS__", (n) => (ce = n))),
    (Wn = t("__VUE_SSR_SETTERS__", (n) => (wn = n)));
}
const Dt = (e) => {
    const t = ce;
    return (
      un(e),
      e.scope.on(),
      () => {
        e.scope.off(), un(t);
      }
    );
  },
  Us = () => {
    ce && ce.scope.off(), un(null);
  };
function _o(e) {
  return e.vnode.shapeFlag & 4;
}
let wn = !1;
function yl(e, t = !1) {
  t && Wn(t);
  const { props: n, children: s } = e.vnode,
    r = _o(e);
  Xi(e, n, r, t), nl(e, s);
  const o = r ? vl(e, t) : void 0;
  return t && Wn(!1), o;
}
function vl(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = jr(new Proxy(e.ctx, zi)));
  const { setup: s } = n;
  if (s) {
    const r = (e.setupContext = s.length > 1 ? El(e) : null),
      o = Dt(e);
    ct();
    const i = Je(s, e, 0, [e.props, r]);
    if ((ut(), o(), yr(i))) {
      if ((i.then(Us, Us), t))
        return i
          .then((u) => {
            Ds(e, u, t);
          })
          .catch((u) => {
            _n(u, e, 0);
          });
      e.asyncDep = i;
    } else Ds(e, i, t);
  } else yo(e, t);
}
function Ds(e, t, n) {
  k(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : X(t) && (e.setupState = Dr(t)),
    yo(e, n);
}
let Ks;
function yo(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && Ks && !s.render) {
      const r = s.template || as(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config,
          { delimiters: u, compilerOptions: c } = s,
          d = oe(oe({ isCustomElement: o, delimiters: u }, i), c);
        s.render = Ks(r, d);
      }
    }
    e.render = s.render || _e;
  }
  {
    const r = Dt(e);
    ct();
    try {
      Wi(e);
    } finally {
      ut(), r();
    }
  }
}
function bl(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return pe(e, "get", "$attrs"), t[n];
      },
    }))
  );
}
function El(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return bl(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function ps(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Dr(jr(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in Lt) return Lt[n](e);
        },
        has(t, n) {
          return n in t || n in Lt;
        },
      }))
    );
}
function wl(e, t = !0) {
  return k(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function xl(e) {
  return k(e) && "__vccOpts" in e;
}
const we = (e, t) => fi(e, t, wn);
function vo(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? X(t) && !F(t)
      ? zn(t)
        ? ae(e, null, [t])
        : ae(e, t)
      : ae(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && zn(n) && (n = [n]),
      ae(e, t, n));
}
const Cl = "3.4.15";
/**
 * @vue/runtime-dom v3.4.15
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Rl = "http://www.w3.org/2000/svg",
  Pl = "http://www.w3.org/1998/Math/MathML",
  Ze = typeof document < "u" ? document : null,
  zs = Ze && Ze.createElement("template"),
  Sl = {
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
          ? Ze.createElementNS(Rl, e)
          : t === "mathml"
          ? Ze.createElementNS(Pl, e)
          : Ze.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (e) => Ze.createTextNode(e),
    createComment: (e) => Ze.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ze.querySelector(e),
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
        zs.innerHTML =
          s === "svg"
            ? `<svg>${e}</svg>`
            : s === "mathml"
            ? `<math>${e}</math>`
            : e;
        const u = zs.content;
        if (s === "svg" || s === "mathml") {
          const c = u.firstChild;
          for (; c.firstChild; ) u.appendChild(c.firstChild);
          u.removeChild(c);
        }
        t.insertBefore(u, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  Ol = Symbol("_vtc");
function Al(e, t, n) {
  const s = e[Ol];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const Ml = Symbol("_vod"),
  Tl = Symbol("");
function Il(e, t, n) {
  const s = e.style,
    r = s.display,
    o = te(n);
  if (n && !o) {
    if (t && !te(t)) for (const i in t) n[i] == null && qn(s, i, "");
    for (const i in n) qn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Tl];
      i && (n += ";" + i), (s.cssText = n);
    }
  } else t && e.removeAttribute("style");
  Ml in e && (s.display = r);
}
const Ws = /\s*!important$/;
function qn(e, t, n) {
  if (F(n)) n.forEach((s) => qn(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Ll(e, t);
    Ws.test(n)
      ? e.setProperty(Pt(s), n.replace(Ws, ""), "important")
      : (e[s] = n);
  }
}
const qs = ["Webkit", "Moz", "ms"],
  Mn = {};
function Ll(e, t) {
  const n = Mn[t];
  if (n) return n;
  let s = Ne(t);
  if (s !== "filter" && s in e) return (Mn[t] = s);
  s = pn(s);
  for (let r = 0; r < qs.length; r++) {
    const o = qs[r] + s;
    if (o in e) return (Mn[t] = o);
  }
  return t;
}
const Gs = "http://www.w3.org/1999/xlink";
function Hl(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Gs, t.slice(6, t.length))
      : e.setAttributeNS(Gs, t, n);
  else {
    const o = Bo(t);
    n == null || (o && !wr(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? "" : n);
  }
}
function Nl(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), (e[t] = n ?? "");
    return;
  }
  const u = e.tagName;
  if (t === "value" && u !== "PROGRESS" && !u.includes("-")) {
    e._value = n;
    const d = u === "OPTION" ? e.getAttribute("value") : e.value,
      a = n ?? "";
    d !== a && (e.value = a), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean"
      ? (n = wr(n))
      : n == null && d === "string"
      ? ((n = ""), (c = !0))
      : d === "number" && ((n = 0), (c = !0));
  }
  try {
    e[t] = n;
  } catch {}
  c && e.removeAttribute(t);
}
function Fl(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Vl(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Zs = Symbol("_vei");
function $l(e, t, n, s, r = null) {
  const o = e[Zs] || (e[Zs] = {}),
    i = o[t];
  if (s && i) i.value = s;
  else {
    const [u, c] = jl(t);
    if (s) {
      const d = (o[t] = Ul(s, r));
      Fl(e, u, d, c);
    } else i && (Vl(e, u, i, c), (o[t] = void 0));
  }
}
const Qs = /(?:Once|Passive|Capture)$/;
function jl(e) {
  let t;
  if (Qs.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Qs)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Pt(e.slice(2)), t];
}
let Tn = 0;
const kl = Promise.resolve(),
  Bl = () => Tn || (kl.then(() => (Tn = 0)), (Tn = Date.now()));
function Ul(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    Re(Dl(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Bl()), n;
}
function Dl(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return t;
}
const Ys = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Kl = (e, t, n, s, r, o, i, u, c) => {
    const d = r === "svg";
    t === "class"
      ? Al(e, s, d)
      : t === "style"
      ? Il(e, n, s)
      : an(t)
      ? Jn(t) || $l(e, t, n, s, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : zl(e, t, s, d)
        )
      ? Nl(e, t, s, o, i, u, c)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Hl(e, t, s, d));
  };
function zl(e, t, n, s) {
  if (s)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Ys(t) && k(n))
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
  return Ys(t) && te(n) ? !1 : t in e;
}
const Wl = oe({ patchProp: Kl }, Sl);
let Js;
function ql() {
  return Js || (Js = rl(Wl));
}
const Gl = (...e) => {
  const t = ql().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const r = Ql(s);
      if (!r) return;
      const o = t._component;
      !k(o) && !o.render && !o.template && (o.template = r.innerHTML),
        (r.innerHTML = "");
      const i = n(r, !1, Zl(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        i
      );
    }),
    t
  );
};
function Zl(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ql(e) {
  return te(e) ? document.querySelector(e) : e;
}
const Yl = "modulepreload",
  Jl = function (e) {
    return "/globe-map-demos/" + e;
  },
  Xs = {},
  Be = function (t, n, s) {
    if (!n || n.length === 0) return t();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = Jl(o)), o in Xs)) return;
        Xs[o] = !0;
        const i = o.endsWith(".css"),
          u = i ? '[rel="stylesheet"]' : "";
        if (!!s)
          for (let a = r.length - 1; a >= 0; a--) {
            const h = r[a];
            if (h.href === o && (!i || h.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${u}`)) return;
        const d = document.createElement("link");
        if (
          ((d.rel = i ? "stylesheet" : Yl),
          i || ((d.as = "script"), (d.crossOrigin = "")),
          (d.href = o),
          document.head.appendChild(d),
          i)
        )
          return new Promise((a, h) => {
            d.addEventListener("load", a),
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
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const gt = typeof window < "u";
function Xl(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const q = Object.assign;
function In(e, t) {
  const n = {};
  for (const s in t) {
    const r = t[s];
    n[s] = Pe(r) ? r.map(e) : e(r);
  }
  return n;
}
const Nt = () => {},
  Pe = Array.isArray,
  ec = /\/$/,
  tc = (e) => e.replace(ec, "");
function Ln(e, t, n = "/") {
  let s,
    r = {},
    o = "",
    i = "";
  const u = t.indexOf("#");
  let c = t.indexOf("?");
  return (
    u < c && u >= 0 && (c = -1),
    c > -1 &&
      ((s = t.slice(0, c)),
      (o = t.slice(c + 1, u > -1 ? u : t.length)),
      (r = e(o))),
    u > -1 && ((s = s || t.slice(0, u)), (i = t.slice(u, t.length))),
    (s = oc(s ?? t, n)),
    { fullPath: s + (o && "?") + o + i, path: s, query: r, hash: i }
  );
}
function nc(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function er(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function sc(e, t, n) {
  const s = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    xt(t.matched[s], n.matched[r]) &&
    bo(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function xt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function bo(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!rc(e[n], t[n])) return !1;
  return !0;
}
function rc(e, t) {
  return Pe(e) ? tr(e, t) : Pe(t) ? tr(t, e) : e === t;
}
function tr(e, t) {
  return Pe(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function oc(e, t) {
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
  return (
    n.slice(0, o).join("/") +
    "/" +
    s.slice(i - (i === s.length ? 1 : 0)).join("/")
  );
}
var Bt;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Bt || (Bt = {}));
var Ft;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ft || (Ft = {}));
function ic(e) {
  if (!e)
    if (gt) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), tc(e);
}
const lc = /^[^#]+#/;
function cc(e, t) {
  return e.replace(lc, "#") + t;
}
function uc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const xn = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function fc(e) {
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
    t = uc(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function nr(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Gn = new Map();
function ac(e, t) {
  Gn.set(e, t);
}
function dc(e) {
  const t = Gn.get(e);
  return Gn.delete(e), t;
}
let hc = () => location.protocol + "//" + location.host;
function Eo(e, t) {
  const { pathname: n, search: s, hash: r } = t,
    o = e.indexOf("#");
  if (o > -1) {
    let u = r.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = r.slice(u);
    return c[0] !== "/" && (c = "/" + c), er(c, "");
  }
  return er(n, e) + s + r;
}
function pc(e, t, n, s) {
  let r = [],
    o = [],
    i = null;
  const u = ({ state: p }) => {
    const v = Eo(e, location),
      A = n.value,
      L = t.value;
    let H = 0;
    if (p) {
      if (((n.value = v), (t.value = p), i && i === A)) {
        i = null;
        return;
      }
      H = L ? p.position - L.position : 0;
    } else s(v);
    r.forEach((M) => {
      M(n.value, A, {
        delta: H,
        type: Bt.pop,
        direction: H ? (H > 0 ? Ft.forward : Ft.back) : Ft.unknown,
      });
    });
  };
  function c() {
    i = n.value;
  }
  function d(p) {
    r.push(p);
    const v = () => {
      const A = r.indexOf(p);
      A > -1 && r.splice(A, 1);
    };
    return o.push(v), v;
  }
  function a() {
    const { history: p } = window;
    p.state && p.replaceState(q({}, p.state, { scroll: xn() }), "");
  }
  function h() {
    for (const p of o) p();
    (o = []),
      window.removeEventListener("popstate", u),
      window.removeEventListener("beforeunload", a);
  }
  return (
    window.addEventListener("popstate", u),
    window.addEventListener("beforeunload", a, { passive: !0 }),
    { pauseListeners: c, listen: d, destroy: h }
  );
}
function sr(e, t, n, s = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? xn() : null,
  };
}
function gc(e) {
  const { history: t, location: n } = window,
    s = { value: Eo(e, n) },
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
  function o(c, d, a) {
    const h = e.indexOf("#"),
      p =
        h > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(h)) + c
          : hc() + e + c;
    try {
      t[a ? "replaceState" : "pushState"](d, "", p), (r.value = d);
    } catch (v) {
      console.error(v), n[a ? "replace" : "assign"](p);
    }
  }
  function i(c, d) {
    const a = q({}, t.state, sr(r.value.back, c, r.value.forward, !0), d, {
      position: r.value.position,
    });
    o(c, a, !0), (s.value = c);
  }
  function u(c, d) {
    const a = q({}, r.value, t.state, { forward: c, scroll: xn() });
    o(a.current, a, !0);
    const h = q({}, sr(s.value, c, null), { position: a.position + 1 }, d);
    o(c, h, !1), (s.value = c);
  }
  return { location: s, state: r, push: u, replace: i };
}
function mc(e) {
  e = ic(e);
  const t = gc(e),
    n = pc(e, t.state, t.location, t.replace);
  function s(o, i = !0) {
    i || n.pauseListeners(), history.go(o);
  }
  const r = q(
    { location: "", base: e, go: s, createHref: cc.bind(null, e) },
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
function _c(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    mc(e)
  );
}
function yc(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function wo(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ze = {
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
  xo = Symbol("");
var rr;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(rr || (rr = {}));
function Ct(e, t) {
  return q(new Error(), { type: e, [xo]: !0 }, t);
}
function Ve(e, t) {
  return e instanceof Error && xo in e && (t == null || !!(e.type & t));
}
const or = "[^/]+?",
  vc = { sensitive: !1, strict: !1, start: !0, end: !0 },
  bc = /[.+*?^${}()[\]/\\]/g;
function Ec(e, t) {
  const n = q({}, vc, t),
    s = [];
  let r = n.start ? "^" : "";
  const o = [];
  for (const d of e) {
    const a = d.length ? [] : [90];
    n.strict && !d.length && (r += "/");
    for (let h = 0; h < d.length; h++) {
      const p = d[h];
      let v = 40 + (n.sensitive ? 0.25 : 0);
      if (p.type === 0)
        h || (r += "/"), (r += p.value.replace(bc, "\\$&")), (v += 40);
      else if (p.type === 1) {
        const { value: A, repeatable: L, optional: H, regexp: M } = p;
        o.push({ name: A, repeatable: L, optional: H });
        const V = M || or;
        if (V !== or) {
          v += 10;
          try {
            new RegExp(`(${V})`);
          } catch (K) {
            throw new Error(
              `Invalid custom RegExp for param "${A}" (${V}): ` + K.message
            );
          }
        }
        let $ = L ? `((?:${V})(?:/(?:${V}))*)` : `(${V})`;
        h || ($ = H && d.length < 2 ? `(?:/${$})` : "/" + $),
          H && ($ += "?"),
          (r += $),
          (v += 20),
          H && (v += -8),
          L && (v += -20),
          V === ".*" && (v += -50);
      }
      a.push(v);
    }
    s.push(a);
  }
  if (n.strict && n.end) {
    const d = s.length - 1;
    s[d][s[d].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
  const i = new RegExp(r, n.sensitive ? "" : "i");
  function u(d) {
    const a = d.match(i),
      h = {};
    if (!a) return null;
    for (let p = 1; p < a.length; p++) {
      const v = a[p] || "",
        A = o[p - 1];
      h[A.name] = v && A.repeatable ? v.split("/") : v;
    }
    return h;
  }
  function c(d) {
    let a = "",
      h = !1;
    for (const p of e) {
      (!h || !a.endsWith("/")) && (a += "/"), (h = !1);
      for (const v of p)
        if (v.type === 0) a += v.value;
        else if (v.type === 1) {
          const { value: A, repeatable: L, optional: H } = v,
            M = A in d ? d[A] : "";
          if (Pe(M) && !L)
            throw new Error(
              `Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`
            );
          const V = Pe(M) ? M.join("/") : M;
          if (!V)
            if (H)
              p.length < 2 &&
                (a.endsWith("/") ? (a = a.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${A}"`);
          a += V;
        }
    }
    return a || "/";
  }
  return { re: i, score: s, keys: o, parse: u, stringify: c };
}
function wc(e, t) {
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
function xc(e, t) {
  let n = 0;
  const s = e.score,
    r = t.score;
  for (; n < s.length && n < r.length; ) {
    const o = wc(s[n], r[n]);
    if (o) return o;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (ir(s)) return 1;
    if (ir(r)) return -1;
  }
  return r.length - s.length;
}
function ir(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Cc = { type: 0, value: "" },
  Rc = /[a-zA-Z0-9_]/;
function Pc(e) {
  if (!e) return [[]];
  if (e === "/") return [[Cc]];
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
    c,
    d = "",
    a = "";
  function h() {
    d &&
      (n === 0
        ? o.push({ type: 0, value: d })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (c === "*" || c === "+") &&
            t(
              `A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: d,
            regexp: a,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : t("Invalid state to consume buffer"),
      (d = ""));
  }
  function p() {
    d += c;
  }
  for (; u < e.length; ) {
    if (((c = e[u++]), c === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (d && h(), i()) : c === ":" ? (h(), (n = 1)) : p();
        break;
      case 4:
        p(), (n = s);
        break;
      case 1:
        c === "("
          ? (n = 2)
          : Rc.test(c)
          ? p()
          : (h(), (n = 0), c !== "*" && c !== "?" && c !== "+" && u--);
        break;
      case 2:
        c === ")"
          ? a[a.length - 1] == "\\"
            ? (a = a.slice(0, -1) + c)
            : (n = 3)
          : (a += c);
        break;
      case 3:
        h(), (n = 0), c !== "*" && c !== "?" && c !== "+" && u--, (a = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), h(), i(), r;
}
function Sc(e, t, n) {
  const s = Ec(Pc(e.path), n),
    r = q(s, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function Oc(e, t) {
  const n = [],
    s = new Map();
  t = ur({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(a) {
    return s.get(a);
  }
  function o(a, h, p) {
    const v = !p,
      A = Ac(a);
    A.aliasOf = p && p.record;
    const L = ur(t, a),
      H = [A];
    if ("alias" in a) {
      const $ = typeof a.alias == "string" ? [a.alias] : a.alias;
      for (const K of $)
        H.push(
          q({}, A, {
            components: p ? p.record.components : A.components,
            path: K,
            aliasOf: p ? p.record : A,
          })
        );
    }
    let M, V;
    for (const $ of H) {
      const { path: K } = $;
      if (h && K[0] !== "/") {
        const ee = h.record.path,
          j = ee[ee.length - 1] === "/" ? "" : "/";
        $.path = h.record.path + (K && j + K);
      }
      if (
        ((M = Sc($, h, L)),
        p
          ? p.alias.push(M)
          : ((V = V || M),
            V !== M && V.alias.push(M),
            v && a.name && !cr(M) && i(a.name)),
        A.children)
      ) {
        const ee = A.children;
        for (let j = 0; j < ee.length; j++) o(ee[j], M, p && p.children[j]);
      }
      (p = p || M),
        ((M.record.components && Object.keys(M.record.components).length) ||
          M.record.name ||
          M.record.redirect) &&
          c(M);
    }
    return V
      ? () => {
          i(V);
        }
      : Nt;
  }
  function i(a) {
    if (wo(a)) {
      const h = s.get(a);
      h &&
        (s.delete(a),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(i),
        h.alias.forEach(i));
    } else {
      const h = n.indexOf(a);
      h > -1 &&
        (n.splice(h, 1),
        a.record.name && s.delete(a.record.name),
        a.children.forEach(i),
        a.alias.forEach(i));
    }
  }
  function u() {
    return n;
  }
  function c(a) {
    let h = 0;
    for (
      ;
      h < n.length &&
      xc(a, n[h]) >= 0 &&
      (a.record.path !== n[h].record.path || !Co(a, n[h]));

    )
      h++;
    n.splice(h, 0, a), a.record.name && !cr(a) && s.set(a.record.name, a);
  }
  function d(a, h) {
    let p,
      v = {},
      A,
      L;
    if ("name" in a && a.name) {
      if (((p = s.get(a.name)), !p)) throw Ct(1, { location: a });
      (L = p.record.name),
        (v = q(
          lr(
            h.params,
            p.keys.filter((V) => !V.optional).map((V) => V.name)
          ),
          a.params &&
            lr(
              a.params,
              p.keys.map((V) => V.name)
            )
        )),
        (A = p.stringify(v));
    } else if ("path" in a)
      (A = a.path),
        (p = n.find((V) => V.re.test(A))),
        p && ((v = p.parse(A)), (L = p.record.name));
    else {
      if (((p = h.name ? s.get(h.name) : n.find((V) => V.re.test(h.path))), !p))
        throw Ct(1, { location: a, currentLocation: h });
      (L = p.record.name),
        (v = q({}, h.params, a.params)),
        (A = p.stringify(v));
    }
    const H = [];
    let M = p;
    for (; M; ) H.unshift(M.record), (M = M.parent);
    return { name: L, path: A, params: v, matched: H, meta: Tc(H) };
  }
  return (
    e.forEach((a) => o(a)),
    {
      addRoute: o,
      resolve: d,
      removeRoute: i,
      getRoutes: u,
      getRecordMatcher: r,
    }
  );
}
function lr(e, t) {
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
    props: Mc(e),
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
function Mc(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
  return t;
}
function cr(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Tc(e) {
  return e.reduce((t, n) => q(t, n.meta), {});
}
function ur(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function Co(e, t) {
  return t.children.some((n) => n === e || Co(e, n));
}
const Ro = /#/g,
  Ic = /&/g,
  Lc = /\//g,
  Hc = /=/g,
  Nc = /\?/g,
  Po = /\+/g,
  Fc = /%5B/g,
  Vc = /%5D/g,
  So = /%5E/g,
  $c = /%60/g,
  Oo = /%7B/g,
  jc = /%7C/g,
  Ao = /%7D/g,
  kc = /%20/g;
function gs(e) {
  return encodeURI("" + e)
    .replace(jc, "|")
    .replace(Fc, "[")
    .replace(Vc, "]");
}
function Bc(e) {
  return gs(e).replace(Oo, "{").replace(Ao, "}").replace(So, "^");
}
function Zn(e) {
  return gs(e)
    .replace(Po, "%2B")
    .replace(kc, "+")
    .replace(Ro, "%23")
    .replace(Ic, "%26")
    .replace($c, "`")
    .replace(Oo, "{")
    .replace(Ao, "}")
    .replace(So, "^");
}
function Uc(e) {
  return Zn(e).replace(Hc, "%3D");
}
function Dc(e) {
  return gs(e).replace(Ro, "%23").replace(Nc, "%3F");
}
function Kc(e) {
  return e == null ? "" : Dc(e).replace(Lc, "%2F");
}
function fn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function zc(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < s.length; ++r) {
    const o = s[r].replace(Po, " "),
      i = o.indexOf("="),
      u = fn(i < 0 ? o : o.slice(0, i)),
      c = i < 0 ? null : fn(o.slice(i + 1));
    if (u in t) {
      let d = t[u];
      Pe(d) || (d = t[u] = [d]), d.push(c);
    } else t[u] = c;
  }
  return t;
}
function fr(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = Uc(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Pe(s) ? s.map((o) => o && Zn(o)) : [s && Zn(s)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? "&" : "") + n), o != null && (t += "=" + o));
    });
  }
  return t;
}
function Wc(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = Pe(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const qc = Symbol(""),
  ar = Symbol(""),
  ms = Symbol(""),
  _s = Symbol(""),
  Qn = Symbol("");
function Mt() {
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
function Qe(e, t, n, s, r) {
  const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((i, u) => {
      const c = (h) => {
          h === !1
            ? u(Ct(4, { from: n, to: t }))
            : h instanceof Error
            ? u(h)
            : yc(h)
            ? u(Ct(2, { from: t, to: h }))
            : (o &&
                s.enterCallbacks[r] === o &&
                typeof h == "function" &&
                o.push(h),
              i());
        },
        d = e.call(s && s.instances[r], t, n, c);
      let a = Promise.resolve(d);
      e.length < 3 && (a = a.then(c)), a.catch((h) => u(h));
    });
}
function Hn(e, t, n, s) {
  const r = [];
  for (const o of e)
    for (const i in o.components) {
      let u = o.components[i];
      if (!(t !== "beforeRouteEnter" && !o.instances[i]))
        if (Gc(u)) {
          const d = (u.__vccOpts || u)[t];
          d && r.push(Qe(d, n, s, o, i));
        } else {
          let c = u();
          r.push(() =>
            c.then((d) => {
              if (!d)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${i}" at "${o.path}"`)
                );
              const a = Xl(d) ? d.default : d;
              o.components[i] = a;
              const p = (a.__vccOpts || a)[t];
              return p && Qe(p, n, s, o, i)();
            })
          );
        }
    }
  return r;
}
function Gc(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function dr(e) {
  const t = He(ms),
    n = He(_s),
    s = we(() => t.resolve(Ee(e.to))),
    r = we(() => {
      const { matched: c } = s.value,
        { length: d } = c,
        a = c[d - 1],
        h = n.matched;
      if (!a || !h.length) return -1;
      const p = h.findIndex(xt.bind(null, a));
      if (p > -1) return p;
      const v = hr(c[d - 2]);
      return d > 1 && hr(a) === v && h[h.length - 1].path !== v
        ? h.findIndex(xt.bind(null, c[d - 2]))
        : p;
    }),
    o = we(() => r.value > -1 && Jc(n.params, s.value.params)),
    i = we(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        bo(n.params, s.value.params)
    );
  function u(c = {}) {
    return Yc(c)
      ? t[Ee(e.replace) ? "replace" : "push"](Ee(e.to)).catch(Nt)
      : Promise.resolve();
  }
  return {
    route: s,
    href: we(() => s.value.href),
    isActive: o,
    isExactActive: i,
    navigate: u,
  };
}
const Zc = eo({
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
    useLink: dr,
    setup(e, { slots: t }) {
      const n = Ut(dr(e)),
        { options: s } = He(ms),
        r = we(() => ({
          [pr(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [pr(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const o = t.default && t.default(n);
        return e.custom
          ? o
          : vo(
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
function Yc(e) {
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
function Jc(e, t) {
  for (const n in t) {
    const s = t[n],
      r = e[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!Pe(r) || r.length !== s.length || s.some((o, i) => o !== r[i]))
      return !1;
  }
  return !0;
}
function hr(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const pr = (e, t, n) => e ?? t ?? n,
  Xc = eo({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = He(Qn),
        r = we(() => e.route || s.value),
        o = He(ar, 0),
        i = we(() => {
          let d = Ee(o);
          const { matched: a } = r.value;
          let h;
          for (; (h = a[d]) && !h.components; ) d++;
          return d;
        }),
        u = we(() => r.value.matched[i.value]);
      en(
        ar,
        we(() => i.value + 1)
      ),
        en(qc, u),
        en(Qn, r);
      const c = ai();
      return (
        It(
          () => [c.value, u.value, e.name],
          ([d, a, h], [p, v, A]) => {
            a &&
              ((a.instances[h] = d),
              v &&
                v !== a &&
                d &&
                d === p &&
                (a.leaveGuards.size || (a.leaveGuards = v.leaveGuards),
                a.updateGuards.size || (a.updateGuards = v.updateGuards))),
              d &&
                a &&
                (!v || !xt(a, v) || !p) &&
                (a.enterCallbacks[h] || []).forEach((L) => L(d));
          },
          { flush: "post" }
        ),
        () => {
          const d = r.value,
            a = e.name,
            h = u.value,
            p = h && h.components[a];
          if (!p) return gr(n.default, { Component: p, route: d });
          const v = h.props[a],
            A = v
              ? v === !0
                ? d.params
                : typeof v == "function"
                ? v(d)
                : v
              : null,
            H = vo(
              p,
              q({}, A, t, {
                onVnodeUnmounted: (M) => {
                  M.component.isUnmounted && (h.instances[a] = null);
                },
                ref: c,
              })
            );
          return gr(n.default, { Component: H, route: d }) || H;
        }
      );
    },
  });
function gr(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const eu = Xc;
function tu(e) {
  const t = Oc(e.routes, e),
    n = e.parseQuery || zc,
    s = e.stringifyQuery || fr,
    r = e.history,
    o = Mt(),
    i = Mt(),
    u = Mt(),
    c = di(ze);
  let d = ze;
  gt &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const a = In.bind(null, (_) => "" + _),
    h = In.bind(null, Kc),
    p = In.bind(null, fn);
  function v(_, P) {
    let C, O;
    return (
      wo(_) ? ((C = t.getRecordMatcher(_)), (O = P)) : (O = _), t.addRoute(O, C)
    );
  }
  function A(_) {
    const P = t.getRecordMatcher(_);
    P && t.removeRoute(P);
  }
  function L() {
    return t.getRoutes().map((_) => _.record);
  }
  function H(_) {
    return !!t.getRecordMatcher(_);
  }
  function M(_, P) {
    if (((P = q({}, P || c.value)), typeof _ == "string")) {
      const f = Ln(n, _, P.path),
        g = t.resolve({ path: f.path }, P),
        y = r.createHref(f.fullPath);
      return q(f, g, {
        params: p(g.params),
        hash: fn(f.hash),
        redirectedFrom: void 0,
        href: y,
      });
    }
    let C;
    if ("path" in _) C = q({}, _, { path: Ln(n, _.path, P.path).path });
    else {
      const f = q({}, _.params);
      for (const g in f) f[g] == null && delete f[g];
      (C = q({}, _, { params: h(f) })), (P.params = h(P.params));
    }
    const O = t.resolve(C, P),
      W = _.hash || "";
    O.params = a(p(O.params));
    const Q = nc(s, q({}, _, { hash: Bc(W), path: O.path })),
      l = r.createHref(Q);
    return q(
      { fullPath: Q, hash: W, query: s === fr ? Wc(_.query) : _.query || {} },
      O,
      { redirectedFrom: void 0, href: l }
    );
  }
  function V(_) {
    return typeof _ == "string" ? Ln(n, _, c.value.path) : q({}, _);
  }
  function $(_, P) {
    if (d !== _) return Ct(8, { from: P, to: _ });
  }
  function K(_) {
    return ue(_);
  }
  function ee(_) {
    return K(q(V(_), { replace: !0 }));
  }
  function j(_) {
    const P = _.matched[_.matched.length - 1];
    if (P && P.redirect) {
      const { redirect: C } = P;
      let O = typeof C == "function" ? C(_) : C;
      return (
        typeof O == "string" &&
          ((O = O.includes("?") || O.includes("#") ? (O = V(O)) : { path: O }),
          (O.params = {})),
        q(
          { query: _.query, hash: _.hash, params: "path" in O ? {} : _.params },
          O
        )
      );
    }
  }
  function ue(_, P) {
    const C = (d = M(_)),
      O = c.value,
      W = _.state,
      Q = _.force,
      l = _.replace === !0,
      f = j(C);
    if (f)
      return ue(
        q(V(f), {
          state: typeof f == "object" ? q({}, W, f.state) : W,
          force: Q,
          replace: l,
        }),
        P || C
      );
    const g = C;
    g.redirectedFrom = P;
    let y;
    return (
      !Q && sc(s, O, C) && ((y = Ct(16, { to: g, from: O })), Ae(O, O, !0, !1)),
      (y ? Promise.resolve(y) : Se(g, O))
        .catch((m) => (Ve(m) ? (Ve(m, 2) ? m : De(m)) : z(m, g, O)))
        .then((m) => {
          if (m) {
            if (Ve(m, 2))
              return ue(
                q({ replace: l }, V(m.to), {
                  state: typeof m.to == "object" ? q({}, W, m.to.state) : W,
                  force: Q,
                }),
                P || g
              );
          } else m = et(g, O, !0, l, W);
          return Ue(g, O, m), m;
        })
    );
  }
  function ye(_, P) {
    const C = $(_, P);
    return C ? Promise.reject(C) : Promise.resolve();
  }
  function ft(_) {
    const P = ht.values().next().value;
    return P && typeof P.runWithContext == "function"
      ? P.runWithContext(_)
      : _();
  }
  function Se(_, P) {
    let C;
    const [O, W, Q] = nu(_, P);
    C = Hn(O.reverse(), "beforeRouteLeave", _, P);
    for (const f of O)
      f.leaveGuards.forEach((g) => {
        C.push(Qe(g, _, P));
      });
    const l = ye.bind(null, _, P);
    return (
      C.push(l),
      ie(C)
        .then(() => {
          C = [];
          for (const f of o.list()) C.push(Qe(f, _, P));
          return C.push(l), ie(C);
        })
        .then(() => {
          C = Hn(W, "beforeRouteUpdate", _, P);
          for (const f of W)
            f.updateGuards.forEach((g) => {
              C.push(Qe(g, _, P));
            });
          return C.push(l), ie(C);
        })
        .then(() => {
          C = [];
          for (const f of Q)
            if (f.beforeEnter)
              if (Pe(f.beforeEnter))
                for (const g of f.beforeEnter) C.push(Qe(g, _, P));
              else C.push(Qe(f.beforeEnter, _, P));
          return C.push(l), ie(C);
        })
        .then(
          () => (
            _.matched.forEach((f) => (f.enterCallbacks = {})),
            (C = Hn(Q, "beforeRouteEnter", _, P)),
            C.push(l),
            ie(C)
          )
        )
        .then(() => {
          C = [];
          for (const f of i.list()) C.push(Qe(f, _, P));
          return C.push(l), ie(C);
        })
        .catch((f) => (Ve(f, 8) ? f : Promise.reject(f)))
    );
  }
  function Ue(_, P, C) {
    u.list().forEach((O) => ft(() => O(_, P, C)));
  }
  function et(_, P, C, O, W) {
    const Q = $(_, P);
    if (Q) return Q;
    const l = P === ze,
      f = gt ? history.state : {};
    C &&
      (O || l
        ? r.replace(_.fullPath, q({ scroll: l && f && f.scroll }, W))
        : r.push(_.fullPath, W)),
      (c.value = _),
      Ae(_, P, C, l),
      De();
  }
  let Oe;
  function St() {
    Oe ||
      (Oe = r.listen((_, P, C) => {
        if (!Kt.listening) return;
        const O = M(_),
          W = j(O);
        if (W) {
          ue(q(W, { replace: !0 }), O).catch(Nt);
          return;
        }
        d = O;
        const Q = c.value;
        gt && ac(nr(Q.fullPath, C.delta), xn()),
          Se(O, Q)
            .catch((l) =>
              Ve(l, 12)
                ? l
                : Ve(l, 2)
                ? (ue(l.to, O)
                    .then((f) => {
                      Ve(f, 20) &&
                        !C.delta &&
                        C.type === Bt.pop &&
                        r.go(-1, !1);
                    })
                    .catch(Nt),
                  Promise.reject())
                : (C.delta && r.go(-C.delta, !1), z(l, O, Q))
            )
            .then((l) => {
              (l = l || et(O, Q, !1)),
                l &&
                  (C.delta && !Ve(l, 8)
                    ? r.go(-C.delta, !1)
                    : C.type === Bt.pop && Ve(l, 20) && r.go(-1, !1)),
                Ue(O, Q, l);
            })
            .catch(Nt);
      }));
  }
  let at = Mt(),
    ne = Mt(),
    G;
  function z(_, P, C) {
    De(_);
    const O = ne.list();
    return (
      O.length ? O.forEach((W) => W(_, P, C)) : console.error(_),
      Promise.reject(_)
    );
  }
  function Fe() {
    return G && c.value !== ze
      ? Promise.resolve()
      : new Promise((_, P) => {
          at.add([_, P]);
        });
  }
  function De(_) {
    return (
      G ||
        ((G = !_),
        St(),
        at.list().forEach(([P, C]) => (_ ? C(_) : P())),
        at.reset()),
      _
    );
  }
  function Ae(_, P, C, O) {
    const { scrollBehavior: W } = e;
    if (!gt || !W) return Promise.resolve();
    const Q =
      (!C && dc(nr(_.fullPath, 0))) ||
      ((O || !C) && history.state && history.state.scroll) ||
      null;
    return zr()
      .then(() => W(_, P, Q))
      .then((l) => l && fc(l))
      .catch((l) => z(l, _, P));
  }
  const de = (_) => r.go(_);
  let dt;
  const ht = new Set(),
    Kt = {
      currentRoute: c,
      listening: !0,
      addRoute: v,
      removeRoute: A,
      hasRoute: H,
      getRoutes: L,
      resolve: M,
      options: e,
      push: K,
      replace: ee,
      go: de,
      back: () => de(-1),
      forward: () => de(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: u.add,
      onError: ne.add,
      isReady: Fe,
      install(_) {
        const P = this;
        _.component("RouterLink", Qc),
          _.component("RouterView", eu),
          (_.config.globalProperties.$router = P),
          Object.defineProperty(_.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Ee(c),
          }),
          gt &&
            !dt &&
            c.value === ze &&
            ((dt = !0), K(r.location).catch((W) => {}));
        const C = {};
        for (const W in ze)
          Object.defineProperty(C, W, {
            get: () => c.value[W],
            enumerable: !0,
          });
        _.provide(ms, P), _.provide(_s, Fr(C)), _.provide(Qn, c);
        const O = _.unmount;
        ht.add(_),
          (_.unmount = function () {
            ht.delete(_),
              ht.size < 1 &&
                ((d = ze),
                Oe && Oe(),
                (Oe = null),
                (c.value = ze),
                (dt = !1),
                (G = !1)),
              O();
          });
      },
    };
  function ie(_) {
    return _.reduce((P, C) => P.then(() => ft(C)), Promise.resolve());
  }
  return Kt;
}
function nu(e, t) {
  const n = [],
    s = [],
    r = [],
    o = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < o; i++) {
    const u = t.matched[i];
    u && (e.matched.find((d) => xt(d, u)) ? s.push(u) : n.push(u));
    const c = e.matched[i];
    c && (t.matched.find((d) => xt(d, c)) || r.push(c));
  }
  return [n, s, r];
}
function su() {
  return He(_s);
}
const ru = () =>
    Be(
      () => import("./index-692bff4c.js"),
      [
        "assets/index-692bff4c.js",
        "assets/szxs_logo-0ab5ca1e.js",
        "assets/focus_move_bg-793f2183.js",
        "assets/flyLine2-932ac3c5.js",
        "assets/index-c2401561.css",
      ]
    ),
  ou = () =>
    Be(
      () => import("./index-1ba47a78.js"),
      [
        "assets/index-1ba47a78.js",
        "assets/szxs_logo-0ab5ca1e.js",
        "assets/focus_move_bg-793f2183.js",
        "assets/flyLine2-932ac3c5.js",
        "assets/index-235b3cdb.css",
      ]
    ),
  iu = () =>
    Be(
      () => import("./index-18cbeb19.js"),
      [
        "assets/index-18cbeb19.js",
        "assets/szxs_logo-0ab5ca1e.js",
        "assets/focus_move_bg-793f2183.js",
        "assets/flyLine2-932ac3c5.js",
        "assets/index-235b3cdb.css",
      ]
    ),
  mr = () =>
    Be(
      () => import("./index-1e1ab527.js"),
      [
        "assets/index-1e1ab527.js",
        "assets/szxs_logo-0ab5ca1e.js",
        "assets/focus_move_bg-793f2183.js",
        "assets/index-7a83b1c6.css",
      ]
    ),
  lu = () =>
    Be(
      () => import("./index-03adfe96.js"),
      [
        "assets/index-03adfe96.js",
        "assets/szxs_logo-0ab5ca1e.js",
        "assets/flyLine2-932ac3c5.js",
        "assets/index-ebeadba3.css",
      ]
    ),
  cu = () =>
    Be(
      () => import("./index-8799eb10.js"),
      [
        "assets/index-8799eb10.js",
        "assets/szxs_logo-0ab5ca1e.js",
        "assets/flyLine2-932ac3c5.js",
        "assets/index-fdf37279.css",
      ]
    ),
  uu = () =>
    Be(
      () => import("./index-66650f1e.js"),
      [
        "assets/index-66650f1e.js",
        "assets/szxs_logo-0ab5ca1e.js",
        "assets/flyLine2-932ac3c5.js",
        "assets/index-fdf37279.css",
      ]
    ),
  fu = () =>
    Be(
      () => import("./index-cc5b6de8.js"),
      [
        "assets/index-cc5b6de8.js",
        "assets/szxs_logo-0ab5ca1e.js",
        "assets/flyLine2-932ac3c5.js",
        "assets/index-fdf37279.css",
      ]
    ),
  au = () =>
    Be(
      () => import("./index-a75d553f.js"),
      [
        "assets/index-a75d553f.js",
        "assets/szxs_logo-0ab5ca1e.js",
        "assets/flyLine2-932ac3c5.js",
        "assets/index-fdf37279.css",
      ]
    ),
  du = tu({
    history: _c(),
    routes: [
      { path: "/", redirect: "/globe", component: mr },
      { path: "/gdMap", component: lu },
      { path: "/zjMap", component: cu },
      { path: "/zjMapTest", component: uu },
      { path: "/zjMapHotMap", component: fu },
      { path: "/gxMap", component: au },
      { path: "/globeMap", component: ru },
      { path: "/globeMapZj", component: ou },
      { path: "/globeMapGx", component: iu },
      { path: "/globe", component: mr },
      { path: "/:pathMatch(.*)", redirect: "/" },
    ],
  }),
  hu = "/globe-map-demos/assets/qrcode-42ca0273.png",
  pu = "/globe-map-demos/assets/qrcode-szxs-be3deddd.png";
const gu = { class: "root-app" },
  mu = { key: 0, class: "watermark" },
  _u = re("div", { class: "watermark-content" }, null, -1),
  yu = [_u],
  vu = re("span", null, "购买", -1),
  bu = re("span", null, "源码", -1),
  Eu = [vu, bu],
  wu = { key: 0, class: "buy-btn" },
  xu = re("span", null, "购买", -1),
  Cu = re("span", null, "源码", -1),
  Ru = [xu, Cu],
  Pu = {
    key: 1,
    class: "icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Su = re(
    "path",
    {
      d: "M13.1297 15.999V14.5494H11.6483V16L13.1297 15.999ZM15.3406 16C15.7033 16 16 15.7033 16 15.3407V14.5494H14.5802V15.999M5.80224 1.45056V5.80225H1.45055V1.45056H5.80224ZM6.59345 0H0.659334C0.296707 0 0 0.296708 0 0.659336V6.59345C0 6.9561 0.296707 7.25279 0.659334 7.25279H6.59343C6.95606 7.25279 7.25277 6.95608 7.25277 6.59345V0.659336C7.25279 0.296708 6.95608 0 6.59345 0ZM2.90113 3.62642C2.90113 3.81877 2.97754 4.00325 3.11356 4.13927C3.24957 4.27528 3.43405 4.3517 3.62641 4.3517C3.81876 4.3517 4.00324 4.27528 4.13925 4.13927C4.27527 4.00325 4.35168 3.81877 4.35168 3.62642C4.35168 3.43406 4.27527 3.24958 4.13925 3.11357C4.00324 2.97755 3.81876 2.90114 3.62641 2.90114C3.43405 2.90114 3.24957 2.97755 3.11356 3.11357C2.97754 3.24958 2.90113 3.43406 2.90113 3.62642ZM14.5494 1.45056V5.80225H10.1978V1.45056H14.5494ZM15.3406 0H9.40654C9.0439 0 8.74721 0.296708 8.74721 0.659336V6.59345C8.74721 6.9561 9.04392 7.25279 9.40654 7.25279H15.3406C15.7033 7.25279 16 6.95608 16 6.59345V0.659336C16 0.296708 15.7033 0 15.3406 0ZM11.6483 3.62642C11.6483 3.81877 11.7247 4.00325 11.8607 4.13927C11.9968 4.27528 12.1812 4.3517 12.3736 4.3517C12.5659 4.3517 12.7504 4.27528 12.8864 4.13927C13.0225 4.00325 13.0989 3.81877 13.0989 3.62642C13.0989 3.43406 13.0225 3.24958 12.8864 3.11357C12.7504 2.97755 12.5659 2.90114 12.3736 2.90114C12.1812 2.90114 11.9968 2.97755 11.8607 3.11357C11.7247 3.24958 11.6483 3.43406 11.6483 3.62642ZM5.80224 10.1977V14.5494H1.45055V10.1977H5.80224ZM6.59345 8.74719H0.659334C0.296707 8.74719 0 9.0439 0 9.40653V15.3406C0 15.7033 0.296707 16 0.659334 16H6.59343C6.95608 16 7.25277 15.7033 7.25277 15.3406V9.40653C7.25279 9.0439 6.95608 8.74719 6.59345 8.74719ZM2.90113 12.3736C2.90113 12.5659 2.97754 12.7504 3.11356 12.8864C3.24957 13.0224 3.43405 13.0989 3.62641 13.0989C3.81876 13.0989 4.00324 13.0224 4.13925 12.8864C4.27527 12.7504 4.35168 12.5659 4.35168 12.3736C4.35168 12.1812 4.27527 11.9968 4.13925 11.8607C4.00324 11.7247 3.81876 11.6483 3.62641 11.6483C3.43405 11.6483 3.24957 11.7247 3.11356 11.8607C2.97754 11.9968 2.90113 12.1812 2.90113 12.3736ZM15.3406 8.74719H14.5319V11.6483H13.0814V8.74719H9.40654C9.0439 8.74719 8.74721 9.0439 8.74721 9.40653V15.3406C8.74721 15.7033 9.04392 16 9.40654 16H10.1978V14.5494V13.0989V11.6483H11.6483V13.0989H16V9.40653C16 9.0439 15.7033 8.74719 15.3406 8.74719Z",
      fill: "#999",
    },
    null,
    -1
  ),
  Ou = [Su],
  Au = { class: "qrcode-fixed-card" },
  Mu = { key: 0, class: "qrcode-pic", src: hu, alt: "" },
  Tu = { key: 1, class: "qrcode-pic", src: pu, alt: "" },
  Iu = re(
    "div",
    { class: "content-us" },
    [
      re("p", { class: "title" }, "Three.js 3d前端特效"),
      re("p", { class: "desc" }, [
        re("span", null, "承接数据可视化前端制作/源码出售"),
        re("span", null, "欢迎咨询合作"),
      ]),
      re("p", { class: "tips" }, "微信扫码，联系我们"),
    ],
    -1
  ),
  Lu = {
    __name: "App",
    setup(e) {
      let t = null,
        n = Ut({ isHover: !1, mode: "", routeName: "" });
      const s = su();
      let r = {
        provice: "https://www.shuzixs.com/#/companyService/163",
        china: "https://www.shuzixs.com/#/companyService/164",
      };
      It(
        () => s.name,
        async (d) => {
          n.routeName = d;
        }
      );
      function o() {
        clearTimeout(t), (n.isHover = !0);
      }
      function i() {
        clearTimeout(t),
          (t = setTimeout(() => {
            n.isHover = !1;
          }, 2e3));
      }
      function u() {
        {
          (document.oncontextmenu = function () {
            event.returnValue = !1;
          }),
            (document.onkeydown =
              document.onkeyup =
              document.onkeypress =
                function (h) {
                  let p =
                    h || window.event || arguments.callee.caller.arguments[0];
                  if (p && p.keyCode == 123) return (p.returnValue = !1), !1;
                });
          var d = new Image();
          Object.defineProperty(d, "id", {
            get: function () {
              window.location.href = "https://www.baidu.com";
            },
          });
          console.log(d);
          // setInterval(function () {
          //   a();
          // }, 2e3);
          // var a = function () {
          //   function h(p) {
          //     ("" + p / p).length !== 1 || p % 20 === 0
          //       ? function () {}.constructor("debugger")()
          //       : function () {}.constructor("debugger")(),
          //       h(++p);
          //   }
          //   try {
          //     h(0);
          //   } catch {}
          // };
          // a();
        }
      }
      function c() {
        window.open(r.provice, "_blank");
      }
      return (
        so(() => {
          u(),
            setTimeout(() => {
              (n.isHover = !0),
                (t = setTimeout(() => {
                  n.isHover = !1;
                }, 2e3));
            }, 500);
        }),
        (d, a) => {
          const h = Pi("router-view");
          return (
            We(),
            st("div", gu, [
              ae(h),
              Ee(n).mode ? (We(), st("div", mu, yu)) : Bs("", !0),
              Ee(n).mode
                ? (We(),
                  st("div", { key: 1, class: "goods-buy-btn", onClick: c }, Eu))
                : Bs("", !0),
              re(
                "div",
                { class: gn(["qrcode-fixed", { active: Ee(n).isHover }]) },
                [
                  re(
                    "div",
                    {
                      class: "qrcode-fixed-btn",
                      onMouseenter: o,
                      onMouseleave: i,
                    },
                    [
                      Ee(n).mode
                        ? (We(), st("svg", Pu, Ou))
                        : (We(), st("div", wu, Ru)),
                    ],
                    32
                  ),
                  re("div", Au, [
                    Ee(n).mode ? (We(), st("img", Tu)) : (We(), st("img", Mu)),
                    Iu,
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
let Hu = Gl(Lu);
Hu.use(du).mount("#app");
export {
  $e as F,
  re as a,
  Pi as b,
  st as c,
  ae as d,
  Vu as e,
  gn as n,
  We as o,
  Fu as r,
  Nu as t,
};
