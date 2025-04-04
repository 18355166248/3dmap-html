import {
  V as H,
  l as tA,
  M as QA,
  a5 as eA,
  D as nA,
  b as sA,
} from "./OrbitControls-9c9ee6bc.js";
import { d as wA } from "./utils-9af1928d.js";
class mA {
  constructor() {}
  createSpriteLabel(A) {
    let Q = {
      background: "rgba(0,0,0,0)",
      width: 200,
      height: 100,
      font: "bold 48px 宋体",
      color: "#ffffff",
      name: "",
      opacity: 1,
      position: new H(0, 0, 0),
      scale: 1,
      isSprite: !0,
    };
    Q = wA(Q, A);
    let w = this.draw(Q);
    return w.scale.set(Q.scale, Q.scale, 1), w;
  }
  draw(A) {
    let Q = A.width,
      w = A.height,
      l = document.createElement("canvas"),
      g = l.getContext("2d");
    (l.width = Q),
      (l.height = w),
      g.scale(-1, 1),
      g.translate(-Q, 0),
      (g.fillStyle = A.background || "#ff0000"),
      g.fillRect(0, 0, Q, w),
      (g.fillStyle = A.color || "#ffffff"),
      (g.font = A.font || w / 2 + 'px "微软雅黑"'),
      (g.textAlign = "center"),
      (g.fillStyle = "#ffffff"),
      (g.shadowColor = "rgba(0, 0, 0, 1)"),
      (g.shadowOffsetX = 0),
      (g.shadowOffsetY = 5),
      (g.shadowBlur = 2),
      g.fillText(A.name, w, w / 2 + 20);
    let e = l.toDataURL("image/png"),
      n = new tA(12, 6),
      c = new QA({
        map: new eA().load(e),
        side: nA,
        opacity: A.opacity,
        transparent: !0,
        depthWrite: !1,
      }),
      a = new sA(n, c);
    return a.position.copy(A.position), a.lookAt(new H(0, 0, 0)), a;
  }
}
const pA = "/sayhello-site/assets/earth09-2-59a9d07c.jpg",
  bA = "/sayhello-site/assets/earth-night2-6c0d7ee7.jpg",
  xA = "/sayhello-site/assets/earth-topology-99af1bce.png",
  BA = "/sayhello-site/assets/sky-texture-de6d7a1c.jpg",
  MA =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMqSURBVHgB7dmxDcAwDMRAKfvv7LgMsgLvOi1APKAdUs71vfcasp4BsgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwvZcAyRZABAmABAmABAmABAmABC2Q8r/67PXkGUBQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQJgAQNgLIEkN+qo/chQAAAAASUVORK5CYII=",
  SA =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMvSURBVHgB7dnBCcBACABBTf89X+6btLAzYAXCIrgzc4aMc77r3t2h6xkgSwAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgbM81QJILAMIEAMIEAMIEAMIEAML2ji9AyP/ps7tDlwsAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwgQAwl7+xA34/HNuUAAAAABJRU5ErkJggg==",
  kA = "/sayhello-site/assets/china-glow2-c43f82cf.png",
  D = 11102230246251565e-32,
  E = 134217729,
  iA = (3 + 8 * D) * D;
function q(i, A, Q, w, l) {
  let g,
    e,
    n,
    c,
    a = A[0],
    f = w[0],
    t = 0,
    s = 0;
  f > a == f > -a ? ((g = a), (a = A[++t])) : ((g = f), (f = w[++s]));
  let o = 0;
  if (t < i && s < Q)
    for (
      f > a == f > -a
        ? ((e = a + g), (n = g - (e - a)), (a = A[++t]))
        : ((e = f + g), (n = g - (e - f)), (f = w[++s])),
        g = e,
        n !== 0 && (l[o++] = n);
      t < i && s < Q;

    )
      f > a == f > -a
        ? ((e = g + a), (c = e - g), (n = g - (e - c) + (a - c)), (a = A[++t]))
        : ((e = g + f), (c = e - g), (n = g - (e - c) + (f - c)), (f = w[++s])),
        (g = e),
        n !== 0 && (l[o++] = n);
  for (; t < i; )
    (e = g + a),
      (c = e - g),
      (n = g - (e - c) + (a - c)),
      (a = A[++t]),
      (g = e),
      n !== 0 && (l[o++] = n);
  for (; s < Q; )
    (e = g + f),
      (c = e - g),
      (n = g - (e - c) + (f - c)),
      (f = w[++s]),
      (g = e),
      n !== 0 && (l[o++] = n);
  return (g !== 0 || o === 0) && (l[o++] = g), o;
}
function lA(i, A) {
  let Q = A[0];
  for (let w = 1; w < i; w++) Q += A[w];
  return Q;
}
function j(i) {
  return new Float64Array(i);
}
const oA = (3 + 16 * D) * D,
  rA = (2 + 12 * D) * D,
  aA = (9 + 64 * D) * D * D,
  X = j(4),
  F = j(8),
  W = j(12),
  Z = j(16),
  L = j(4);
function cA(i, A, Q, w, l, g, e) {
  let n, c, a, f, t, s, o, J, h, u, T, d, m, x, S, B, k, M;
  const U = i - l,
    r = Q - l,
    _ = A - g,
    y = w - g;
  (x = U * y),
    (s = E * U),
    (o = s - (s - U)),
    (J = U - o),
    (s = E * y),
    (h = s - (s - y)),
    (u = y - h),
    (S = J * u - (x - o * h - J * h - o * u)),
    (B = _ * r),
    (s = E * _),
    (o = s - (s - _)),
    (J = _ - o),
    (s = E * r),
    (h = s - (s - r)),
    (u = r - h),
    (k = J * u - (B - o * h - J * h - o * u)),
    (T = S - k),
    (t = S - T),
    (X[0] = S - (T + t) + (t - k)),
    (d = x + T),
    (t = d - x),
    (m = x - (d - t) + (T - t)),
    (T = m - B),
    (t = m - T),
    (X[1] = m - (T + t) + (t - B)),
    (M = d + T),
    (t = M - d),
    (X[2] = d - (M - t) + (T - t)),
    (X[3] = M);
  let p = lA(4, X),
    I = rA * e;
  if (
    p >= I ||
    -p >= I ||
    ((t = i - U),
    (n = i - (U + t) + (t - l)),
    (t = Q - r),
    (a = Q - (r + t) + (t - l)),
    (t = A - _),
    (c = A - (_ + t) + (t - g)),
    (t = w - y),
    (f = w - (y + t) + (t - g)),
    n === 0 && c === 0 && a === 0 && f === 0) ||
    ((I = aA * e + iA * Math.abs(p)),
    (p += U * f + y * n - (_ * a + r * c)),
    p >= I || -p >= I)
  )
    return p;
  (x = n * y),
    (s = E * n),
    (o = s - (s - n)),
    (J = n - o),
    (s = E * y),
    (h = s - (s - y)),
    (u = y - h),
    (S = J * u - (x - o * h - J * h - o * u)),
    (B = c * r),
    (s = E * c),
    (o = s - (s - c)),
    (J = c - o),
    (s = E * r),
    (h = s - (s - r)),
    (u = r - h),
    (k = J * u - (B - o * h - J * h - o * u)),
    (T = S - k),
    (t = S - T),
    (L[0] = S - (T + t) + (t - k)),
    (d = x + T),
    (t = d - x),
    (m = x - (d - t) + (T - t)),
    (T = m - B),
    (t = m - T),
    (L[1] = m - (T + t) + (t - B)),
    (M = d + T),
    (t = M - d),
    (L[2] = d - (M - t) + (T - t)),
    (L[3] = M);
  const z = q(4, X, 4, L, F);
  (x = U * f),
    (s = E * U),
    (o = s - (s - U)),
    (J = U - o),
    (s = E * f),
    (h = s - (s - f)),
    (u = f - h),
    (S = J * u - (x - o * h - J * h - o * u)),
    (B = _ * a),
    (s = E * _),
    (o = s - (s - _)),
    (J = _ - o),
    (s = E * a),
    (h = s - (s - a)),
    (u = a - h),
    (k = J * u - (B - o * h - J * h - o * u)),
    (T = S - k),
    (t = S - T),
    (L[0] = S - (T + t) + (t - k)),
    (d = x + T),
    (t = d - x),
    (m = x - (d - t) + (T - t)),
    (T = m - B),
    (t = m - T),
    (L[1] = m - (T + t) + (t - B)),
    (M = d + T),
    (t = M - d),
    (L[2] = d - (M - t) + (T - t)),
    (L[3] = M);
  const v = q(z, F, 4, L, W);
  (x = n * f),
    (s = E * n),
    (o = s - (s - n)),
    (J = n - o),
    (s = E * f),
    (h = s - (s - f)),
    (u = f - h),
    (S = J * u - (x - o * h - J * h - o * u)),
    (B = c * a),
    (s = E * c),
    (o = s - (s - c)),
    (J = c - o),
    (s = E * a),
    (h = s - (s - a)),
    (u = a - h),
    (k = J * u - (B - o * h - J * h - o * u)),
    (T = S - k),
    (t = S - T),
    (L[0] = S - (T + t) + (t - k)),
    (d = x + T),
    (t = d - x),
    (m = x - (d - t) + (T - t)),
    (T = m - B),
    (t = m - T),
    (L[1] = m - (T + t) + (t - B)),
    (M = d + T),
    (t = M - d),
    (L[2] = d - (M - t) + (T - t)),
    (L[3] = M);
  const b = q(v, W, 4, L, Z);
  return Z[b - 1];
}
function P(i, A, Q, w, l, g) {
  const e = (A - g) * (Q - l),
    n = (i - l) * (w - g),
    c = e - n,
    a = Math.abs(e + n);
  return Math.abs(c) >= oA * a ? c : -cA(i, A, Q, w, l, g, a);
}
const $ = Math.pow(2, -52),
  G = new Uint32Array(512);
class AA {
  static from(A, Q = uA, w = _A) {
    const l = A.length,
      g = new Float64Array(l * 2);
    for (let e = 0; e < l; e++) {
      const n = A[e];
      (g[2 * e] = Q(n)), (g[2 * e + 1] = w(n));
    }
    return new AA(g);
  }
  constructor(A) {
    const Q = A.length >> 1;
    if (Q > 0 && typeof A[0] != "number")
      throw new Error("Expected coords to contain numbers.");
    this.coords = A;
    const w = Math.max(2 * Q - 5, 0);
    (this._triangles = new Uint32Array(w * 3)),
      (this._halfedges = new Int32Array(w * 3)),
      (this._hashSize = Math.ceil(Math.sqrt(Q))),
      (this._hullPrev = new Uint32Array(Q)),
      (this._hullNext = new Uint32Array(Q)),
      (this._hullTri = new Uint32Array(Q)),
      (this._hullHash = new Int32Array(this._hashSize).fill(-1)),
      (this._ids = new Uint32Array(Q)),
      (this._dists = new Float64Array(Q)),
      this.update();
  }
  update() {
    const {
        coords: A,
        _hullPrev: Q,
        _hullNext: w,
        _hullTri: l,
        _hullHash: g,
      } = this,
      e = A.length >> 1;
    let n = 1 / 0,
      c = 1 / 0,
      a = -1 / 0,
      f = -1 / 0;
    for (let r = 0; r < e; r++) {
      const _ = A[2 * r],
        y = A[2 * r + 1];
      _ < n && (n = _),
        y < c && (c = y),
        _ > a && (a = _),
        y > f && (f = y),
        (this._ids[r] = r);
    }
    const t = (n + a) / 2,
      s = (c + f) / 2;
    let o = 1 / 0,
      J,
      h,
      u;
    for (let r = 0; r < e; r++) {
      const _ = V(t, s, A[2 * r], A[2 * r + 1]);
      _ < o && ((J = r), (o = _));
    }
    const T = A[2 * J],
      d = A[2 * J + 1];
    o = 1 / 0;
    for (let r = 0; r < e; r++) {
      if (r === J) continue;
      const _ = V(T, d, A[2 * r], A[2 * r + 1]);
      _ < o && _ > 0 && ((h = r), (o = _));
    }
    let m = A[2 * h],
      x = A[2 * h + 1],
      S = 1 / 0;
    for (let r = 0; r < e; r++) {
      if (r === J || r === h) continue;
      const _ = JA(T, d, m, x, A[2 * r], A[2 * r + 1]);
      _ < S && ((u = r), (S = _));
    }
    let B = A[2 * u],
      k = A[2 * u + 1];
    if (S === 1 / 0) {
      for (let y = 0; y < e; y++)
        this._dists[y] = A[2 * y] - A[0] || A[2 * y + 1] - A[1];
      N(this._ids, this._dists, 0, e - 1);
      const r = new Uint32Array(e);
      let _ = 0;
      for (let y = 0, p = -1 / 0; y < e; y++) {
        const I = this._ids[y];
        this._dists[I] > p && ((r[_++] = I), (p = this._dists[I]));
      }
      (this.hull = r.subarray(0, _)),
        (this.triangles = new Uint32Array(0)),
        (this.halfedges = new Uint32Array(0));
      return;
    }
    if (P(T, d, m, x, B, k) < 0) {
      const r = h,
        _ = m,
        y = x;
      (h = u), (m = B), (x = k), (u = r), (B = _), (k = y);
    }
    const M = fA(T, d, m, x, B, k);
    (this._cx = M.x), (this._cy = M.y);
    for (let r = 0; r < e; r++)
      this._dists[r] = V(A[2 * r], A[2 * r + 1], M.x, M.y);
    N(this._ids, this._dists, 0, e - 1), (this._hullStart = J);
    let U = 3;
    (w[J] = Q[u] = h),
      (w[h] = Q[J] = u),
      (w[u] = Q[h] = J),
      (l[J] = 0),
      (l[h] = 1),
      (l[u] = 2),
      g.fill(-1),
      (g[this._hashKey(T, d)] = J),
      (g[this._hashKey(m, x)] = h),
      (g[this._hashKey(B, k)] = u),
      (this.trianglesLen = 0),
      this._addTriangle(J, h, u, -1, -1, -1);
    for (let r = 0, _, y; r < this._ids.length; r++) {
      const p = this._ids[r],
        I = A[2 * p],
        z = A[2 * p + 1];
      if (
        (r > 0 && Math.abs(I - _) <= $ && Math.abs(z - y) <= $) ||
        ((_ = I), (y = z), p === J || p === h || p === u)
      )
        continue;
      let v = 0;
      for (
        let O = 0, gA = this._hashKey(I, z);
        O < this._hashSize &&
        ((v = g[(gA + O) % this._hashSize]), !(v !== -1 && v !== w[v]));
        O++
      );
      v = Q[v];
      let b = v,
        C;
      for (
        ;
        (C = w[b]),
          P(I, z, A[2 * b], A[2 * b + 1], A[2 * C], A[2 * C + 1]) >= 0;

      )
        if (((b = C), b === v)) {
          b = -1;
          break;
        }
      if (b === -1) continue;
      let K = this._addTriangle(b, p, w[b], -1, -1, l[b]);
      (l[p] = this._legalize(K + 2)), (l[b] = K), U++;
      let R = w[b];
      for (
        ;
        (C = w[R]), P(I, z, A[2 * R], A[2 * R + 1], A[2 * C], A[2 * C + 1]) < 0;

      )
        (K = this._addTriangle(R, p, C, l[p], -1, l[R])),
          (l[p] = this._legalize(K + 2)),
          (w[R] = R),
          U--,
          (R = C);
      if (b === v)
        for (
          ;
          (C = Q[b]),
            P(I, z, A[2 * C], A[2 * C + 1], A[2 * b], A[2 * b + 1]) < 0;

        )
          (K = this._addTriangle(C, p, b, -1, l[b], l[C])),
            this._legalize(K + 2),
            (l[C] = K),
            (w[b] = b),
            U--,
            (b = C);
      (this._hullStart = Q[p] = b),
        (w[b] = Q[R] = p),
        (w[p] = R),
        (g[this._hashKey(I, z)] = p),
        (g[this._hashKey(A[2 * b], A[2 * b + 1])] = b);
    }
    this.hull = new Uint32Array(U);
    for (let r = 0, _ = this._hullStart; r < U; r++)
      (this.hull[r] = _), (_ = w[_]);
    (this.triangles = this._triangles.subarray(0, this.trianglesLen)),
      (this.halfedges = this._halfedges.subarray(0, this.trianglesLen));
  }
  _hashKey(A, Q) {
    return (
      Math.floor(hA(A - this._cx, Q - this._cy) * this._hashSize) %
      this._hashSize
    );
  }
  _legalize(A) {
    const { _triangles: Q, _halfedges: w, coords: l } = this;
    let g = 0,
      e = 0;
    for (;;) {
      const n = w[A],
        c = A - (A % 3);
      if (((e = c + ((A + 2) % 3)), n === -1)) {
        if (g === 0) break;
        A = G[--g];
        continue;
      }
      const a = n - (n % 3),
        f = c + ((A + 1) % 3),
        t = a + ((n + 2) % 3),
        s = Q[e],
        o = Q[A],
        J = Q[f],
        h = Q[t];
      if (
        TA(
          l[2 * s],
          l[2 * s + 1],
          l[2 * o],
          l[2 * o + 1],
          l[2 * J],
          l[2 * J + 1],
          l[2 * h],
          l[2 * h + 1]
        )
      ) {
        (Q[A] = h), (Q[n] = s);
        const T = w[t];
        if (T === -1) {
          let m = this._hullStart;
          do {
            if (this._hullTri[m] === t) {
              this._hullTri[m] = A;
              break;
            }
            m = this._hullPrev[m];
          } while (m !== this._hullStart);
        }
        this._link(A, T), this._link(n, w[e]), this._link(e, t);
        const d = a + ((n + 1) % 3);
        g < G.length && (G[g++] = d);
      } else {
        if (g === 0) break;
        A = G[--g];
      }
    }
    return e;
  }
  _link(A, Q) {
    (this._halfedges[A] = Q), Q !== -1 && (this._halfedges[Q] = A);
  }
  _addTriangle(A, Q, w, l, g, e) {
    const n = this.trianglesLen;
    return (
      (this._triangles[n] = A),
      (this._triangles[n + 1] = Q),
      (this._triangles[n + 2] = w),
      this._link(n, l),
      this._link(n + 1, g),
      this._link(n + 2, e),
      (this.trianglesLen += 3),
      n
    );
  }
}
function hA(i, A) {
  const Q = i / (Math.abs(i) + Math.abs(A));
  return (A > 0 ? 3 - Q : 1 + Q) / 4;
}
function V(i, A, Q, w) {
  const l = i - Q,
    g = A - w;
  return l * l + g * g;
}
function TA(i, A, Q, w, l, g, e, n) {
  const c = i - e,
    a = A - n,
    f = Q - e,
    t = w - n,
    s = l - e,
    o = g - n,
    J = c * c + a * a,
    h = f * f + t * t,
    u = s * s + o * o;
  return c * (t * u - h * o) - a * (f * u - h * s) + J * (f * o - t * s) < 0;
}
function JA(i, A, Q, w, l, g) {
  const e = Q - i,
    n = w - A,
    c = l - i,
    a = g - A,
    f = e * e + n * n,
    t = c * c + a * a,
    s = 0.5 / (e * a - n * c),
    o = (a * f - n * t) * s,
    J = (e * t - c * f) * s;
  return o * o + J * J;
}
function fA(i, A, Q, w, l, g) {
  const e = Q - i,
    n = w - A,
    c = l - i,
    a = g - A,
    f = e * e + n * n,
    t = c * c + a * a,
    s = 0.5 / (e * a - n * c),
    o = i + (a * f - n * t) * s,
    J = A + (e * t - c * f) * s;
  return { x: o, y: J };
}
function N(i, A, Q, w) {
  if (w - Q <= 20)
    for (let l = Q + 1; l <= w; l++) {
      const g = i[l],
        e = A[g];
      let n = l - 1;
      for (; n >= Q && A[i[n]] > e; ) i[n + 1] = i[n--];
      i[n + 1] = g;
    }
  else {
    const l = (Q + w) >> 1;
    let g = Q + 1,
      e = w;
    Y(i, l, g),
      A[i[Q]] > A[i[w]] && Y(i, Q, w),
      A[i[g]] > A[i[w]] && Y(i, g, w),
      A[i[Q]] > A[i[g]] && Y(i, Q, g);
    const n = i[g],
      c = A[n];
    for (;;) {
      do g++;
      while (A[i[g]] < c);
      do e--;
      while (A[i[e]] > c);
      if (e < g) break;
      Y(i, g, e);
    }
    (i[Q + 1] = i[e]),
      (i[e] = n),
      w - g + 1 >= e - Q
        ? (N(i, A, g, w), N(i, A, Q, e - 1))
        : (N(i, A, Q, e - 1), N(i, A, g, w));
  }
}
function Y(i, A, Q) {
  const w = i[A];
  (i[A] = i[Q]), (i[Q] = w);
}
function uA(i) {
  return i[0];
}
function _A(i) {
  return i[1];
}
export {
  AA as D,
  mA as L,
  bA as a,
  xA as b,
  MA as c,
  kA as d,
  pA as e,
  SA as g,
  BA as s,
};
