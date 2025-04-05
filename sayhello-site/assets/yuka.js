class kn {
  constructor(e, t, n, s, i) {
    (this.sender = e),
      (this.receiver = t),
      (this.message = n),
      (this.delay = s),
      (this.data = i);
  }
  toJSON() {
    return {
      type: this.constructor.name,
      sender: this.sender.uuid,
      receiver: this.receiver.uuid,
      message: this.message,
      delay: this.delay,
      data: this.data,
    };
  }
  fromJSON(e) {
    return (
      (this.sender = e.sender),
      (this.receiver = e.receiver),
      (this.message = e.message),
      (this.delay = e.delay),
      (this.data = e.data),
      this
    );
  }
  resolveReferences(e) {
    return (
      (this.sender = e.get(this.sender)),
      (this.receiver = e.get(this.receiver)),
      this
    );
  }
}
class W {
  static setLevel(e) {
    Ue = e;
  }
  static log(...e) {
    Ue <= W.LEVEL.LOG && console.log(...e);
  }
  static warn(...e) {
    Ue <= W.LEVEL.WARN && console.warn(...e);
  }
  static error(...e) {
    Ue <= W.LEVEL.ERROR && console.error(...e);
  }
}
W.LEVEL = Object.freeze({ LOG: 0, WARN: 1, ERROR: 2, SILENT: 3 });
let Ue = W.LEVEL.WARN;
class Cr {
  constructor() {
    this.delayedTelegrams = new Array();
  }
  deliver(e) {
    const t = e.receiver;
    return (
      t.handleMessage(e) === !1 &&
        W.warn(
          "YUKA.MessageDispatcher: Message not handled by receiver: %o",
          t
        ),
      this
    );
  }
  dispatch(e, t, n, s, i) {
    const r = new kn(e, t, n, s, i);
    return s <= 0 ? this.deliver(r) : this.delayedTelegrams.push(r), this;
  }
  dispatchDelayedMessages(e) {
    let t = this.delayedTelegrams.length;
    for (; t--; ) {
      const n = this.delayedTelegrams[t];
      (n.delay -= e),
        n.delay <= 0 && (this.deliver(n), this.delayedTelegrams.pop());
    }
    return this;
  }
  clear() {
    return (this.delayedTelegrams.length = 0), this;
  }
  toJSON() {
    const e = { type: this.constructor.name, delayedTelegrams: new Array() };
    for (let t = 0, n = this.delayedTelegrams.length; t < n; t++) {
      const s = this.delayedTelegrams[t];
      e.delayedTelegrams.push(s.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    this.clear();
    const t = e.delayedTelegrams;
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n],
        r = new kn().fromJSON(i);
      this.delayedTelegrams.push(r);
    }
    return this;
  }
  resolveReferences(e) {
    const t = this.delayedTelegrams;
    for (let n = 0, s = t.length; n < s; n++) t[n].resolveReferences(e);
    return this;
  }
}
const V = new Array();
for (let a = 0; a < 256; a++) V[a] = (a < 16 ? "0" : "") + a.toString(16);
class ee {
  static area(e, t, n) {
    return (n.x - e.x) * (t.z - e.z) - (t.x - e.x) * (n.z - e.z);
  }
  static argmax(e) {
    const t = Math.max(...e),
      n = [];
    for (let s = 0, i = e.length; s < i; s++) e[s] === t && n.push(s);
    return n;
  }
  static choice(e, t = null) {
    const n = Math.random();
    if (t === null) return e[Math.floor(Math.random() * e.length)];
    {
      let s = 0;
      const i = e.map((r, o) => ((s += t[o]), s)).findIndex((r) => r >= n);
      return e[i];
    }
  }
  static clamp(e, t, n) {
    return Math.max(t, Math.min(n, e));
  }
  static generateUUID() {
    const e = (Math.random() * 4294967295) | 0,
      t = (Math.random() * 4294967295) | 0,
      n = (Math.random() * 4294967295) | 0,
      s = (Math.random() * 4294967295) | 0;
    return (
      V[e & 255] +
      V[(e >> 8) & 255] +
      V[(e >> 16) & 255] +
      V[(e >> 24) & 255] +
      "-" +
      V[t & 255] +
      V[(t >> 8) & 255] +
      "-" +
      V[((t >> 16) & 15) | 64] +
      V[(t >> 24) & 255] +
      "-" +
      V[(n & 63) | 128] +
      V[(n >> 8) & 255] +
      "-" +
      V[(n >> 16) & 255] +
      V[(n >> 24) & 255] +
      V[s & 255] +
      V[(s >> 8) & 255] +
      V[(s >> 16) & 255] +
      V[(s >> 24) & 255]
    ).toUpperCase();
  }
  static randFloat(e, t) {
    return e + Math.random() * (t - e);
  }
  static randInt(e, t) {
    return e + Math.floor(Math.random() * (t - e + 1));
  }
}
// Vector3
class w {
  constructor(e = 0, t = 0, n = 0) {
    (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (this.x = e), (this.y = t), (this.z = n), this;
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return (this.x /= e), (this.y /= e), (this.z /= e), this;
  }
  divideVectors(e, t) {
    return (
      (this.x = e.x / t.x), (this.y = e.y / t.y), (this.z = e.z / t.z), this
    );
  }
  reflect(e) {
    return this.sub(zr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  cross(e) {
    const t = this.x,
      n = this.y,
      s = this.z;
    return (
      (this.x = n * e.z - s * e.y),
      (this.y = s * e.x - t * e.z),
      (this.z = t * e.y - n * e.x),
      this
    );
  }
  crossVectors(e, t) {
    const n = e.x,
      s = e.y,
      i = e.z,
      r = t.x,
      o = t.y,
      c = t.z;
    return (
      (this.x = s * c - i * o),
      (this.y = i * r - n * c),
      (this.z = n * o - s * r),
      this
    );
  }
  angleTo(e) {
    const t = Math.sqrt(this.squaredLength() * e.squaredLength());
    if (t === 0) return 0;
    const n = this.dot(e) / t;
    return Math.acos(ee.clamp(n, -1, 1));
  }
  length() {
    return Math.sqrt(this.squaredLength());
  }
  squaredLength() {
    return this.dot(this);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  distanceTo(e) {
    return Math.sqrt(this.squaredDistanceTo(e));
  }
  squaredDistanceTo(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      s = this.z - e.z;
    return t * t + n * n + s * s;
  }
  manhattanDistanceTo(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      s = this.z - e.z;
    return Math.abs(t) + Math.abs(n) + Math.abs(s);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      i = e.elements,
      r = 1 / (i[3] * t + i[7] * n + i[11] * s + i[15]);
    return (
      (this.x = (i[0] * t + i[4] * n + i[8] * s + i[12]) * r),
      (this.y = (i[1] * t + i[5] * n + i[9] * s + i[13]) * r),
      (this.z = (i[2] * t + i[6] * n + i[10] * s + i[14]) * r),
      this
    );
  }
  applyRotation(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      i = e.x,
      r = e.y,
      o = e.z,
      c = e.w,
      l = c * t + r * s - o * n,
      h = c * n + o * t - i * s,
      u = c * s + i * n - r * t,
      d = -i * t - r * n - o * s;
    return (
      (this.x = l * c + d * -i + h * -o - u * -r),
      (this.y = h * c + d * -r + u * -i - l * -o),
      (this.z = u * c + d * -o + l * -r - h * -i),
      this
    );
  }
  extractPositionFromMatrix(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      s = this.z,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[4] * n + i[8] * s),
      (this.y = i[1] * t + i[5] * n + i[9] * s),
      (this.z = i[2] * t + i[6] * n + i[10] * s),
      this.normalize()
    );
  }
  fromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  fromMatrix4Column(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  fromSpherical(e, t, n) {
    const s = Math.sin(t) * e;
    return (
      (this.x = s * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = s * Math.cos(n)),
      this
    );
  }
  fromArray(e, t = 0) {
    return (this.x = e[t + 0]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e, t = 0) {
    return (e[t + 0] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
}
const zr = new w(),
  Fn = new w(0, 1, 0),
  Bn = new w(),
  Ee = new w(),
  Gn = new w(),
  Un = new w(),
  Lt = [2, 2, 1],
  It = [1, 0, 0];
class wn {
  constructor() {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  }
  set(e, t, n, s, i, r, o, c, l) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[3] = t),
      (h[6] = n),
      (h[1] = s),
      (h[4] = i),
      (h[7] = r),
      (h[2] = o),
      (h[5] = c),
      (h[8] = l),
      this
    );
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      s = t.elements,
      i = this.elements,
      r = n[0],
      o = n[3],
      c = n[6],
      l = n[1],
      h = n[4],
      u = n[7],
      d = n[2],
      f = n[5],
      p = n[8],
      y = s[0],
      g = s[3],
      m = s[6],
      x = s[1],
      S = s[4],
      A = s[7],
      _ = s[2],
      E = s[5],
      b = s[8];
    return (
      (i[0] = r * y + o * x + c * _),
      (i[3] = r * g + o * S + c * E),
      (i[6] = r * m + o * A + c * b),
      (i[1] = l * y + h * x + u * _),
      (i[4] = l * g + h * S + u * E),
      (i[7] = l * m + h * A + u * b),
      (i[2] = d * y + f * x + p * _),
      (i[5] = d * g + f * S + p * E),
      (i[8] = d * m + f * A + p * b),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.fromMatrix3Column(this, 0),
      t.fromMatrix3Column(this, 1),
      n.fromMatrix3Column(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, e.y, t.y, n.y, e.z, t.z, n.z), this;
  }
  lookAt(e, t, n) {
    return (
      Bn.crossVectors(n, e).normalize(),
      Ee.crossVectors(Fn, t).normalize(),
      Ee.squaredLength() === 0 &&
        (Un.copy(t).addScalar(Number.EPSILON),
        Ee.crossVectors(Fn, Un).normalize()),
      Gn.crossVectors(t, Ee).normalize(),
      ge.makeBasis(Ee, Gn, t),
      He.makeBasis(Bn, n, e),
      this.multiplyMatrices(ge, He.transpose()),
      this
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[3]),
      (e[3] = t),
      (t = e[2]),
      (e[2] = e[6]),
      (e[6] = t),
      (t = e[5]),
      (e[5] = e[7]),
      (e[7] = t),
      this
    );
  }
  getElementIndex(e, t) {
    return e * 3 + t;
  }
  frobeniusNorm() {
    const e = this.elements;
    let t = 0;
    for (let n = 0; n < 9; n++) t += e[n] * e[n];
    return Math.sqrt(t);
  }
  offDiagonalFrobeniusNorm() {
    const e = this.elements;
    let t = 0;
    for (let n = 0; n < 3; n++) {
      const s = e[this.getElementIndex(Lt[n], It[n])];
      t += 2 * s * s;
    }
    return Math.sqrt(t);
  }
  eigenDecomposition(e) {
    let t = 0,
      n = 0;
    const s = 10;
    e.unitary.identity(), e.diagonal.copy(this);
    const i = e.unitary,
      r = e.diagonal,
      o = Number.EPSILON * r.frobeniusNorm();
    for (; n < s && r.offDiagonalFrobeniusNorm() > o; )
      r.shurDecomposition(ge),
        He.copy(ge).transpose(),
        r.multiply(ge),
        r.premultiply(He),
        i.multiply(ge),
        ++t > 2 && (n++, (t = 0));
    return e;
  }
  shurDecomposition(e) {
    let t = 0,
      n = 1;
    const s = this.elements;
    for (let l = 0; l < 3; l++) {
      const h = Math.abs(s[this.getElementIndex(Lt[l], It[l])]);
      h > t && ((t = h), (n = l));
    }
    let i = 1,
      r = 0;
    const o = It[n],
      c = Lt[n];
    if (Math.abs(s[this.getElementIndex(c, o)]) > Number.EPSILON) {
      const l = s[this.getElementIndex(c, c)],
        h = s[this.getElementIndex(o, o)],
        u = s[this.getElementIndex(c, o)],
        d = (l - h) / 2 / u;
      let f;
      d < 0
        ? (f = -1 / (-d + Math.sqrt(1 + d * d)))
        : (f = 1 / (d + Math.sqrt(1 + d * d))),
        (i = 1 / Math.sqrt(1 + f * f)),
        (r = f * i);
    }
    return (
      e.identity(),
      (e.elements[this.getElementIndex(o, o)] = i),
      (e.elements[this.getElementIndex(c, c)] = i),
      (e.elements[this.getElementIndex(c, o)] = r),
      (e.elements[this.getElementIndex(o, c)] = -r),
      e
    );
  }
  fromQuaternion(e) {
    const t = this.elements,
      n = e.x,
      s = e.y,
      i = e.z,
      r = e.w,
      o = n + n,
      c = s + s,
      l = i + i,
      h = n * o,
      u = n * c,
      d = n * l,
      f = s * c,
      p = s * l,
      y = i * l,
      g = r * o,
      m = r * c,
      x = r * l;
    return (
      (t[0] = 1 - (f + y)),
      (t[3] = u - x),
      (t[6] = d + m),
      (t[1] = u + x),
      (t[4] = 1 - (h + y)),
      (t[7] = p - g),
      (t[2] = d - m),
      (t[5] = p + g),
      (t[8] = 1 - (h + f)),
      this
    );
  }
  fromMatrix4(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[4]),
      (t[4] = n[5]),
      (t[5] = n[6]),
      (t[6] = n[8]),
      (t[7] = n[9]),
      (t[8] = n[10]),
      this
    );
  }
  fromArray(e, t = 0) {
    const n = this.elements;
    for (let s = 0; s < 9; s++) n[s] = e[s + t];
    return this;
  }
  toArray(e, t = 0) {
    const n = this.elements;
    return (
      (e[t + 0] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let s = 0; s < 9; s++) if (t[s] !== n[s]) return !1;
    return !0;
  }
}
const ge = new wn(),
  He = new wn(),
  Je = new wn(),
  Pt = new w();
class ft {
  constructor(e = 0, t = 0, n = 0, s = 1) {
    (this.x = e), (this.y = t), (this.z = n), (this.w = s);
  }
  set(e, t, n, s) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = s), this;
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), (this.w = e.w), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  inverse() {
    return this.conjugate().normalize();
  }
  conjugate() {
    return (this.x *= -1), (this.y *= -1), (this.z *= -1), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  length() {
    return Math.sqrt(this.squaredLength());
  }
  squaredLength() {
    return this.dot(this);
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this.x = 0), (this.y = 0), (this.z = 0), (this.w = 1))
        : ((e = 1 / e),
          (this.x = this.x * e),
          (this.y = this.y * e),
          (this.z = this.z * e),
          (this.w = this.w * e)),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e.x,
      s = e.y,
      i = e.z,
      r = e.w,
      o = t.x,
      c = t.y,
      l = t.z,
      h = t.w;
    return (
      (this.x = n * h + r * o + s * l - i * c),
      (this.y = s * h + r * c + i * o - n * l),
      (this.z = i * h + r * l + n * c - s * o),
      (this.w = r * h - n * o - s * c - i * l),
      this
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ee.clamp(this.dot(e), -1, 1)));
  }
  rotateTo(e, t, n = 1e-4) {
    const s = this.angleTo(e);
    if (s < n) return !0;
    const i = Math.min(1, t / s);
    return this.slerp(e, i), !1;
  }
  lookAt(e, t, n) {
    Je.lookAt(e, t, n), this.fromMatrix3(Je);
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this.x,
      s = this.y,
      i = this.z,
      r = this.w;
    let o = r * e.w + n * e.x + s * e.y + i * e.z;
    if (
      (o < 0
        ? ((this.w = -e.w),
          (this.x = -e.x),
          (this.y = -e.y),
          (this.z = -e.z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this.w = r), (this.x = n), (this.y = s), (this.z = i), this;
    const c = Math.sqrt(1 - o * o);
    if (Math.abs(c) < 0.001)
      return (
        (this.w = 0.5 * (r + this.w)),
        (this.x = 0.5 * (n + this.x)),
        (this.y = 0.5 * (s + this.y)),
        (this.z = 0.5 * (i + this.z)),
        this
      );
    const l = Math.atan2(c, o),
      h = Math.sin((1 - t) * l) / c,
      u = Math.sin(t * l) / c;
    return (
      (this.w = r * h + this.w * u),
      (this.x = n * h + this.x * u),
      (this.y = s * h + this.y * u),
      (this.z = i * h + this.z * u),
      this
    );
  }
  extractRotationFromMatrix(e) {
    const t = Je.elements,
      n = e.elements,
      s = 1 / Pt.fromMatrix4Column(e, 0).length(),
      i = 1 / Pt.fromMatrix4Column(e, 1).length(),
      r = 1 / Pt.fromMatrix4Column(e, 2).length();
    return (
      (t[0] = n[0] * s),
      (t[1] = n[1] * s),
      (t[2] = n[2] * s),
      (t[3] = n[4] * i),
      (t[4] = n[5] * i),
      (t[5] = n[6] * i),
      (t[6] = n[8] * r),
      (t[7] = n[9] * r),
      (t[8] = n[10] * r),
      this.fromMatrix3(Je),
      this
    );
  }
  fromEuler(e, t, n) {
    const s = Math.cos(t / 2),
      i = Math.cos(e / 2),
      r = Math.cos(n / 2),
      o = Math.sin(t / 2),
      c = Math.sin(e / 2),
      l = Math.sin(n / 2);
    return (
      (this.w = s * i * r + o * c * l),
      (this.x = s * c * r + o * i * l),
      (this.y = o * i * r - s * c * l),
      (this.z = s * i * l - o * c * r),
      this
    );
  }
  toEuler(e) {
    const t = -2 * (this.y * this.z - this.x * this.w);
    return (
      Math.abs(t) > 0.9999
        ? ((e.x = Math.PI * 0.5 * t),
          (e.y = Math.atan2(
            this.x * this.z + this.w * this.y,
            0.5 - this.x * this.x - this.y * this.y
          )),
          (e.z = 0))
        : ((e.x = Math.asin(t)),
          (e.y = Math.atan2(
            this.x * this.z + this.w * this.y,
            0.5 - this.x * this.x - this.y * this.y
          )),
          (e.z = Math.atan2(
            this.x * this.y + this.w * this.z,
            0.5 - this.x * this.x - this.z * this.z
          ))),
      e
    );
  }
  fromMatrix3(e) {
    const t = e.elements,
      n = t[0],
      s = t[3],
      i = t[6],
      r = t[1],
      o = t[4],
      c = t[7],
      l = t[2],
      h = t[5],
      u = t[8],
      d = n + o + u;
    if (d > 0) {
      let f = 0.5 / Math.sqrt(d + 1);
      (this.w = 0.25 / f),
        (this.x = (h - c) * f),
        (this.y = (i - l) * f),
        (this.z = (r - s) * f);
    } else if (n > o && n > u) {
      let f = 2 * Math.sqrt(1 + n - o - u);
      (this.w = (h - c) / f),
        (this.x = 0.25 * f),
        (this.y = (s + r) / f),
        (this.z = (i + l) / f);
    } else if (o > u) {
      let f = 2 * Math.sqrt(1 + o - n - u);
      (this.w = (i - l) / f),
        (this.x = (s + r) / f),
        (this.y = 0.25 * f),
        (this.z = (c + h) / f);
    } else {
      let f = 2 * Math.sqrt(1 + u - n - o);
      (this.w = (r - s) / f),
        (this.x = (i + l) / f),
        (this.y = (c + h) / f),
        (this.z = 0.25 * f);
    }
    return this;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t + 0]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e, t = 0) {
    return (
      (e[t + 0] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
}
class De {
  constructor() {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  }
  set(e, t, n, s, i, r, o, c, l, h, u, d, f, p, y, g) {
    const m = this.elements;
    return (
      (m[0] = e),
      (m[4] = t),
      (m[8] = n),
      (m[12] = s),
      (m[1] = i),
      (m[5] = r),
      (m[9] = o),
      (m[13] = c),
      (m[2] = l),
      (m[6] = h),
      (m[10] = u),
      (m[14] = d),
      (m[3] = f),
      (m[7] = p),
      (m[11] = y),
      (m[15] = g),
      this
    );
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      s = t.elements,
      i = this.elements,
      r = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      h = n[1],
      u = n[5],
      d = n[9],
      f = n[13],
      p = n[2],
      y = n[6],
      g = n[10],
      m = n[14],
      x = n[3],
      S = n[7],
      A = n[11],
      _ = n[15],
      E = s[0],
      b = s[4],
      R = s[8],
      M = s[12],
      I = s[1],
      v = s[5],
      U = s[9],
      C = s[13],
      P = s[2],
      T = s[6],
      N = s[10],
      D = s[14],
      H = s[3],
      J = s[7],
      te = s[11],
      q = s[15];
    return (
      (i[0] = r * E + o * I + c * P + l * H),
      (i[4] = r * b + o * v + c * T + l * J),
      (i[8] = r * R + o * U + c * N + l * te),
      (i[12] = r * M + o * C + c * D + l * q),
      (i[1] = h * E + u * I + d * P + f * H),
      (i[5] = h * b + u * v + d * T + f * J),
      (i[9] = h * R + u * U + d * N + f * te),
      (i[13] = h * M + u * C + d * D + f * q),
      (i[2] = p * E + y * I + g * P + m * H),
      (i[6] = p * b + y * v + g * T + m * J),
      (i[10] = p * R + y * U + g * N + m * te),
      (i[14] = p * M + y * C + g * D + m * q),
      (i[3] = x * E + S * I + A * P + _ * H),
      (i[7] = x * b + S * v + A * T + _ * J),
      (i[11] = x * R + S * U + A * N + _ * te),
      (i[15] = x * M + S * C + A * D + _ * q),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.fromMatrix4Column(this, 0),
      t.fromMatrix4Column(this, 1),
      n.fromMatrix4Column(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  compose(e, t, n) {
    return this.fromQuaternion(t), this.scale(n), this.setPosition(e), this;
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      s = e.y,
      i = e.z;
    return (
      (t[0] *= n),
      (t[4] *= s),
      (t[8] *= i),
      (t[1] *= n),
      (t[5] *= s),
      (t[9] *= i),
      (t[2] *= n),
      (t[6] *= s),
      (t[10] *= i),
      (t[3] *= n),
      (t[7] *= s),
      (t[11] *= i),
      this
    );
  }
  setPosition(e) {
    const t = this.elements;
    return (t[12] = e.x), (t[13] = e.y), (t[14] = e.z), this;
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  getInverse(e) {
    const t = this.elements,
      n = e.elements,
      s = t[0],
      i = t[1],
      r = t[2],
      o = t[3],
      c = t[4],
      l = t[5],
      h = t[6],
      u = t[7],
      d = t[8],
      f = t[9],
      p = t[10],
      y = t[11],
      g = t[12],
      m = t[13],
      x = t[14],
      S = t[15],
      A = f * x * u - m * p * u + m * h * y - l * x * y - f * h * S + l * p * S,
      _ = g * p * u - d * x * u - g * h * y + c * x * y + d * h * S - c * p * S,
      E = d * m * u - g * f * u + g * l * y - c * m * y - d * l * S + c * f * S,
      b = g * f * h - d * m * h - g * l * p + c * m * p + d * l * x - c * f * x,
      R = s * A + i * _ + r * E + o * b;
    if (R === 0) return e.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const M = 1 / R;
    return (
      (n[0] = A * M),
      (n[1] =
        (m * p * o -
          f * x * o -
          m * r * y +
          i * x * y +
          f * r * S -
          i * p * S) *
        M),
      (n[2] =
        (l * x * o -
          m * h * o +
          m * r * u -
          i * x * u -
          l * r * S +
          i * h * S) *
        M),
      (n[3] =
        (f * h * o -
          l * p * o -
          f * r * u +
          i * p * u +
          l * r * y -
          i * h * y) *
        M),
      (n[4] = _ * M),
      (n[5] =
        (d * x * o -
          g * p * o +
          g * r * y -
          s * x * y -
          d * r * S +
          s * p * S) *
        M),
      (n[6] =
        (g * h * o -
          c * x * o -
          g * r * u +
          s * x * u +
          c * r * S -
          s * h * S) *
        M),
      (n[7] =
        (c * p * o -
          d * h * o +
          d * r * u -
          s * p * u -
          c * r * y +
          s * h * y) *
        M),
      (n[8] = E * M),
      (n[9] =
        (g * f * o -
          d * m * o -
          g * i * y +
          s * m * y +
          d * i * S -
          s * f * S) *
        M),
      (n[10] =
        (c * m * o -
          g * l * o +
          g * i * u -
          s * m * u -
          c * i * S +
          s * l * S) *
        M),
      (n[11] =
        (d * l * o -
          c * f * o -
          d * i * u +
          s * f * u +
          c * i * y -
          s * l * y) *
        M),
      (n[12] = b * M),
      (n[13] =
        (d * m * r -
          g * f * r +
          g * i * p -
          s * m * p -
          d * i * x +
          s * f * x) *
        M),
      (n[14] =
        (g * l * r -
          c * m * r -
          g * i * h +
          s * m * h +
          c * i * x -
          s * l * x) *
        M),
      (n[15] =
        (c * f * r -
          d * l * r +
          d * i * h -
          s * f * h -
          c * i * p +
          s * l * p) *
        M),
      e
    );
  }
  getMaxScale() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      s = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, s));
  }
  fromQuaternion(e) {
    const t = this.elements,
      n = e.x,
      s = e.y,
      i = e.z,
      r = e.w,
      o = n + n,
      c = s + s,
      l = i + i,
      h = n * o,
      u = n * c,
      d = n * l,
      f = s * c,
      p = s * l,
      y = i * l,
      g = r * o,
      m = r * c,
      x = r * l;
    return (
      (t[0] = 1 - (f + y)),
      (t[4] = u - x),
      (t[8] = d + m),
      (t[1] = u + x),
      (t[5] = 1 - (h + y)),
      (t[9] = p - g),
      (t[2] = d - m),
      (t[6] = p + g),
      (t[10] = 1 - (h + f)),
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  fromMatrix3(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = 0),
      (t[4] = n[3]),
      (t[5] = n[4]),
      (t[6] = n[5]),
      (t[7] = 0),
      (t[8] = n[6]),
      (t[9] = n[7]),
      (t[10] = n[8]),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  fromArray(e, t = 0) {
    const n = this.elements;
    for (let s = 0; s < 16; s++) n[s] = e[s + t];
    return this;
  }
  toArray(e, t = 0) {
    const n = this.elements;
    return (
      (e[t + 0] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let s = 0; s < 16; s++) if (t[s] !== n[s]) return !1;
    return !0;
  }
}
const Ve = new ft(),
  ae = new w(),
  qe = new w(),
  me = new ft();
class An {
  constructor() {
    (this.name = ""),
      (this.active = !0),
      (this.children = new Array()),
      (this.parent = null),
      (this.neighbors = new Array()),
      (this.neighborhoodRadius = 1),
      (this.updateNeighborhood = !1),
      (this.position = new w()),
      (this.rotation = new ft()),
      (this.scale = new w(1, 1, 1)),
      (this.forward = new w(0, 0, 1)),
      (this.up = new w(0, 1, 0)),
      (this.boundingRadius = 0),
      (this.maxTurnRate = Math.PI),
      (this.canActivateTrigger = !0),
      (this.manager = null),
      (this._localMatrix = new De()),
      (this._worldMatrix = new De()),
      (this._cache = {
        position: new w(),
        rotation: new ft(),
        scale: new w(1, 1, 1),
      }),
      (this._renderComponent = null),
      (this._renderComponentCallback = null),
      (this._started = !1),
      (this._uuid = null),
      (this._worldMatrixDirty = !1);
  }
  get worldMatrix() {
    return this._updateWorldMatrix(), this._worldMatrix;
  }
  get uuid() {
    return this._uuid === null && (this._uuid = ee.generateUUID()), this._uuid;
  }
  start() {
    return this;
  }
  update() {
    return this;
  }
  add(e) {
    return (
      e.parent !== null && e.parent.remove(e),
      this.children.push(e),
      (e.parent = this),
      this
    );
  }
  remove(e) {
    const t = this.children.indexOf(e);
    return this.children.splice(t, 1), (e.parent = null), this;
  }
  getDirection(e) {
    return e.copy(this.forward).applyRotation(this.rotation).normalize();
  }
  lookAt(e) {
    const t = this.parent;
    return (
      t !== null
        ? (this.getWorldPosition(qe),
          ae.subVectors(e, qe).normalize(),
          this.rotation.lookAt(this.forward, ae, this.up),
          me.extractRotationFromMatrix(t.worldMatrix).inverse(),
          this.rotation.premultiply(me))
        : (ae.subVectors(e, this.position).normalize(),
          this.rotation.lookAt(this.forward, ae, this.up)),
      this
    );
  }
  rotateTo(e, t, n = 1e-4) {
    const s = this.parent;
    return (
      s !== null
        ? (this.getWorldPosition(qe),
          ae.subVectors(e, qe).normalize(),
          Ve.lookAt(this.forward, ae, this.up),
          me.extractRotationFromMatrix(s.worldMatrix).inverse(),
          Ve.premultiply(me))
        : (ae.subVectors(e, this.position).normalize(),
          Ve.lookAt(this.forward, ae, this.up)),
      this.rotation.rotateTo(Ve, this.maxTurnRate * t, n)
    );
  }
  getWorldDirection(e) {
    return (
      me.extractRotationFromMatrix(this.worldMatrix),
      e.copy(this.forward).applyRotation(me).normalize()
    );
  }
  getWorldPosition(e) {
    return e.extractPositionFromMatrix(this.worldMatrix);
  }
  setRenderComponent(e, t) {
    return (
      (this._renderComponent = e), (this._renderComponentCallback = t), this
    );
  }
  handleMessage() {
    return !1;
  }
  lineOfSightTest() {
    return null;
  }
  sendMessage(e, t, n = 0, s = null) {
    return (
      this.manager !== null
        ? this.manager.sendMessage(this, e, t, n, s)
        : W.error(
            "YUKA.GameEntity: The game entity must be added to a manager in order to send a message."
          ),
      this
    );
  }
  toJSON() {
    return {
      type: this.constructor.name,
      uuid: this.uuid,
      name: this.name,
      active: this.active,
      children: Hn(this.children),
      parent: this.parent !== null ? this.parent.uuid : null,
      neighbors: Hn(this.neighbors),
      neighborhoodRadius: this.neighborhoodRadius,
      updateNeighborhood: this.updateNeighborhood,
      position: this.position.toArray(new Array()),
      rotation: this.rotation.toArray(new Array()),
      scale: this.scale.toArray(new Array()),
      forward: this.forward.toArray(new Array()),
      up: this.up.toArray(new Array()),
      boundingRadius: this.boundingRadius,
      maxTurnRate: this.maxTurnRate,
      canActivateTrigger: this.canActivateTrigger,
      worldMatrix: this.worldMatrix.toArray(new Array()),
      _localMatrix: this._localMatrix.toArray(new Array()),
      _cache: {
        position: this._cache.position.toArray(new Array()),
        rotation: this._cache.rotation.toArray(new Array()),
        scale: this._cache.scale.toArray(new Array()),
      },
      _started: this._started,
    };
  }
  fromJSON(e) {
    return (
      (this.name = e.name),
      (this.active = e.active),
      (this.neighborhoodRadius = e.neighborhoodRadius),
      (this.updateNeighborhood = e.updateNeighborhood),
      this.position.fromArray(e.position),
      this.rotation.fromArray(e.rotation),
      this.scale.fromArray(e.scale),
      this.forward.fromArray(e.forward),
      this.up.fromArray(e.up),
      (this.boundingRadius = e.boundingRadius),
      (this.maxTurnRate = e.maxTurnRate),
      (this.canActivateTrigger = e.canActivateTrigger),
      (this.children = e.children.slice()),
      (this.neighbors = e.neighbors.slice()),
      (this.parent = e.parent),
      this._localMatrix.fromArray(e._localMatrix),
      this._worldMatrix.fromArray(e.worldMatrix),
      this._cache.position.fromArray(e._cache.position),
      this._cache.rotation.fromArray(e._cache.rotation),
      this._cache.scale.fromArray(e._cache.scale),
      (this._started = e._started),
      (this._uuid = e.uuid),
      this
    );
  }
  resolveReferences(e) {
    const t = this.neighbors;
    for (let s = 0, i = t.length; s < i; s++) t[s] = e.get(t[s]);
    const n = this.children;
    for (let s = 0, i = n.length; s < i; s++) n[s] = e.get(n[s]);
    return (this.parent = e.get(this.parent) || null), this;
  }
  _updateMatrix() {
    const e = this._cache;
    (e.position.equals(this.position) &&
      e.rotation.equals(this.rotation) &&
      e.scale.equals(this.scale)) ||
      (this._localMatrix.compose(this.position, this.rotation, this.scale),
      e.position.copy(this.position),
      e.rotation.copy(this.rotation),
      e.scale.copy(this.scale),
      (this._worldMatrixDirty = !0));
  }
  _updateWorldMatrix() {
    const e = this.parent;
    if (
      (e !== null && e._updateWorldMatrix(),
      this._updateMatrix(),
      this._worldMatrixDirty === !0)
    ) {
      e === null
        ? this._worldMatrix.copy(this._localMatrix)
        : this._worldMatrix.multiplyMatrices(
            this.parent._worldMatrix,
            this._localMatrix
          ),
        (this._worldMatrixDirty = !1);
      const t = this.children;
      for (let n = 0, s = t.length; n < s; n++) {
        const i = t[n];
        i._worldMatrixDirty = !0;
      }
    }
  }
  updateWorldMatrix() {
    return (
      console.warn(
        "GameEntity: .updateWorldMatrix() has been removed. World matrices are automatically updated on access."
      ),
      this
    );
  }
}
function Hn(a) {
  const e = new Array();
  for (let t = 0, n = a.length; t < n; t++) e.push(a[t].uuid);
  return e;
}
const Jn = new w(),
  Ct = new w();
class qs extends An {
  constructor() {
    super(),
      (this.velocity = new w()),
      (this.maxSpeed = 1),
      (this.updateOrientation = !0);
  }
  update(e) {
    return (
      this.getSpeedSquared() > this.maxSpeed * this.maxSpeed &&
        (this.velocity.normalize(),
        this.velocity.multiplyScalar(this.maxSpeed)),
      Jn.copy(this.velocity).multiplyScalar(e),
      Ct.copy(this.position).add(Jn),
      this.updateOrientation &&
        this.getSpeedSquared() > 1e-8 &&
        this.lookAt(Ct),
      this.position.copy(Ct),
      this
    );
  }
  getSpeed() {
    return this.velocity.length();
  }
  getSpeedSquared() {
    return this.velocity.squaredLength();
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.velocity = this.velocity.toArray(new Array())),
      (e.maxSpeed = this.maxSpeed),
      (e.updateOrientation = this.updateOrientation),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.velocity.fromArray(e.velocity),
      (this.maxSpeed = e.maxSpeed),
      (this.updateOrientation = e.updateOrientation),
      this
    );
  }
}
class j {
  constructor() {
    (this.active = !0), (this.weight = 1);
  }
  calculate() {}
  toJSON() {
    return {
      type: this.constructor.name,
      active: this.active,
      weight: this.weight,
    };
  }
  fromJSON(e) {
    return (this.active = e.active), (this.weight = e.weight), this;
  }
  resolveReferences() {}
}
const Ke = new w(),
  We = new w();
class Dr extends j {
  constructor() {
    super();
  }
  calculate(e, t) {
    Ke.set(0, 0, 0);
    const n = e.neighbors;
    for (let s = 0, i = n.length; s < i; s++) n[s].getDirection(We), Ke.add(We);
    return (
      n.length > 0 &&
        (Ke.divideScalar(n.length), e.getDirection(We), t.subVectors(Ke, We)),
      t
    );
  }
}
const zt = new w(),
  Dt = new w();
class Tt extends j {
  constructor(e = new w(), t = 3, n = 0) {
    super(), (this.target = e), (this.deceleration = t), (this.tolerance = n);
  }
  calculate(e, t) {
    const n = this.target,
      s = this.deceleration;
    Dt.subVectors(n, e.position);
    const i = Dt.length();
    if (i > this.tolerance) {
      let r = i / s;
      (r = Math.min(r, e.maxSpeed)), zt.copy(Dt).multiplyScalar(r / i);
    } else zt.set(0, 0, 0);
    return t.subVectors(zt, e.velocity);
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.target = this.target.toArray(new Array())),
      (e.deceleration = this.deceleration),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.target.fromArray(e.target),
      (this.deceleration = e.deceleration),
      this
    );
  }
}
const kt = new w();
class St extends j {
  constructor(e = new w()) {
    super(), (this.target = e);
  }
  calculate(e, t) {
    const n = this.target;
    return (
      kt.subVectors(n, e.position).normalize(),
      kt.multiplyScalar(e.maxSpeed),
      t.subVectors(kt, e.velocity)
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (e.target = this.target.toArray(new Array())), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.target.fromArray(e.target), this;
  }
}
const je = new w();
class kr extends j {
  constructor() {
    super(), (this._seek = new St());
  }
  calculate(e, t) {
    je.set(0, 0, 0);
    const n = e.neighbors;
    for (let s = 0, i = n.length; s < i; s++) {
      const r = n[s];
      je.add(r.position);
    }
    return (
      n.length > 0 &&
        (je.divideScalar(n.length),
        (this._seek.target = je),
        this._seek.calculate(e, t),
        t.normalize()),
      t
    );
  }
}
const be = new w();
class Ks extends j {
  constructor(e = new w(), t = 10) {
    super(), (this.target = e), (this.panicDistance = t);
  }
  calculate(e, t) {
    const n = this.target;
    return (
      e.position.squaredDistanceTo(n) <=
        this.panicDistance * this.panicDistance &&
        (be.subVectors(e.position, n).normalize(),
        be.squaredLength() === 0 && be.set(0, 0, 1),
        be.multiplyScalar(e.maxSpeed),
        t.subVectors(be, e.velocity)),
      t
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.target = this.target.toArray(new Array())),
      (e.panicDistance = this.panicDistance),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.target.fromArray(e.target),
      (this.panicDistance = e.panicDistance),
      this
    );
  }
}
const Vn = new w(),
  qn = new w(),
  Kn = new w();
class Fr extends j {
  constructor(e = null, t = 10, n = 1) {
    super(),
      (this.pursuer = e),
      (this.panicDistance = t),
      (this.predictionFactor = n),
      (this._flee = new Ks());
  }
  calculate(e, t) {
    const n = this.pursuer;
    Vn.subVectors(n.position, e.position);
    let s = Vn.length() / (e.maxSpeed + n.getSpeed());
    return (
      (s *= this.predictionFactor),
      qn.copy(n.velocity).multiplyScalar(s),
      Kn.addVectors(n.position, qn),
      (this._flee.target = Kn),
      (this._flee.panicDistance = this.panicDistance),
      this._flee.calculate(e, t),
      t
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.pursuer = this.pursuer ? this.pursuer.uuid : null),
      (e.panicDistance = this.panicDistance),
      (e.predictionFactor = this.predictionFactor),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.pursuer = e.pursuer),
      (this.panicDistance = e.panicDistance),
      (this.predictionFactor = e.predictionFactor),
      this
    );
  }
  resolveReferences(e) {
    this.pursuer = e.get(this.pursuer) || null;
  }
}
class Br {
  constructor() {
    (this.loop = !1), (this._waypoints = new Array()), (this._index = 0);
  }
  add(e) {
    return this._waypoints.push(e), this;
  }
  clear() {
    return (this._waypoints.length = 0), (this._index = 0), this;
  }
  current() {
    return this._waypoints[this._index];
  }
  finished() {
    const e = this._waypoints.length - 1;
    return this.loop === !0 ? !1 : this._index === e;
  }
  advance() {
    return (
      this._index++,
      this._index === this._waypoints.length &&
        (this.loop === !0 ? (this._index = 0) : this._index--),
      this
    );
  }
  toJSON() {
    const e = {
        type: this.constructor.name,
        loop: this.loop,
        _waypoints: new Array(),
        _index: this._index,
      },
      t = this._waypoints;
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      e._waypoints.push(i.toArray(new Array()));
    }
    return e;
  }
  fromJSON(e) {
    (this.loop = e.loop), (this._index = e._index);
    const t = e._waypoints;
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      this._waypoints.push(new w().fromArray(i));
    }
    return this;
  }
}
// FollowPathBehavior
class Gr extends j {
  constructor(e = new Br(), t = 1) {
    super(),
      (this.path = e),
      (this.nextWaypointDistance = t),
      (this._arrive = new Tt()),
      (this._seek = new St());
  }
  calculate(e, t) {
    const n = this.path;
    n.current().squaredDistanceTo(e.position) <
      this.nextWaypointDistance * this.nextWaypointDistance && n.advance();
    const i = n.current();
    return (
      n.finished() === !0
        ? ((this._arrive.target = i), this._arrive.calculate(e, t))
        : ((this._seek.target = i), this._seek.calculate(e, t)),
      t
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.path = this.path.toJSON()),
      (e.nextWaypointDistance = this.nextWaypointDistance),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      this.path.fromJSON(e.path),
      (this.nextWaypointDistance = e.nextWaypointDistance),
      this
    );
  }
}
const Xe = new w(),
  $e = new w(),
  Wn = new w(),
  jn = new w();
class Ur extends j {
  constructor(e = null, t = null, n = 3) {
    super(),
      (this.entity1 = e),
      (this.entity2 = t),
      (this.deceleration = n),
      (this._arrive = new Tt());
  }
  calculate(e, t) {
    const n = this.entity1,
      s = this.entity2;
    Xe.addVectors(n.position, s.position).multiplyScalar(0.5);
    const i = e.position.distanceTo(Xe) / e.maxSpeed;
    return (
      $e.copy(n.velocity).multiplyScalar(i),
      Wn.addVectors(n.position, $e),
      $e.copy(s.velocity).multiplyScalar(i),
      jn.addVectors(s.position, $e),
      Xe.addVectors(Wn, jn).multiplyScalar(0.5),
      (this._arrive.deceleration = this.deceleration),
      (this._arrive.target = Xe),
      this._arrive.calculate(e, t),
      t
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.entity1 = this.entity1 ? this.entity1.uuid : null),
      (e.entity2 = this.entity2 ? this.entity2.uuid : null),
      (e.deceleration = this.deceleration),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.entity1 = e.entity1),
      (this.entity2 = e.entity2),
      (this.deceleration = e.deceleration),
      this
    );
  }
  resolveReferences(e) {
    (this.entity1 = e.get(this.entity1) || null),
      (this.entity2 = e.get(this.entity2) || null);
  }
}
const $ = new w(),
  ve = new w(),
  ce = new w(),
  ie = [new w(), new w(), new w(), new w(), new w(), new w(), new w(), new w()];
class Tn {
  constructor(e = new w(), t = new w()) {
    (this.min = e), (this.max = t);
  }
  set(e, t) {
    return (this.min = e), (this.max = t), this;
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max), t;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  expand(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  getCenter(e) {
    return e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return e.subVectors(this.max, this.min);
  }
  intersectsAABB(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsBoundingSphere(e) {
    return (
      this.clampPoint(e.center, $),
      $.squaredDistanceTo(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    const t = e.normal;
    this.getCenter(ve), ce.subVectors(this.max, ve);
    const n =
        ce.x * Math.abs(t.x) + ce.y * Math.abs(t.y) + ce.z * Math.abs(t.z),
      s = e.distanceToPoint(ve);
    return Math.abs(s) <= n;
  }
  getNormalFromSurfacePoint(e, t) {
    t.set(0, 0, 0);
    let n,
      s = 1 / 0;
    return (
      this.getCenter(ve),
      this.getSize(ce),
      $.copy(e).sub(ve),
      (n = Math.abs(ce.x - Math.abs($.x))),
      n < s && ((s = n), t.set(1 * Math.sign($.x), 0, 0)),
      (n = Math.abs(ce.y - Math.abs($.y))),
      n < s && ((s = n), t.set(0, 1 * Math.sign($.y), 0)),
      (n = Math.abs(ce.z - Math.abs($.z))),
      n < s && t.set(0, 0, 1 * Math.sign($.z)),
      t
    );
  }
  fromCenterAndSize(e, t) {
    return (
      $.copy(t).multiplyScalar(0.5),
      this.min.copy(e).sub($),
      this.max.copy(e).add($),
      this
    );
  }
  fromPoints(e) {
    this.min.set(1 / 0, 1 / 0, 1 / 0), this.max.set(-1 / 0, -1 / 0, -1 / 0);
    for (let t = 0, n = e.length; t < n; t++) this.expand(e[t]);
    return this;
  }
  applyMatrix4(e) {
    const t = this.min,
      n = this.max;
    return (
      ie[0].set(t.x, t.y, t.z).applyMatrix4(e),
      ie[1].set(t.x, t.y, n.z).applyMatrix4(e),
      ie[2].set(t.x, n.y, t.z).applyMatrix4(e),
      ie[3].set(t.x, n.y, n.z).applyMatrix4(e),
      ie[4].set(n.x, t.y, t.z).applyMatrix4(e),
      ie[5].set(n.x, t.y, n.z).applyMatrix4(e),
      ie[6].set(n.x, n.y, t.z).applyMatrix4(e),
      ie[7].set(n.x, n.y, n.z).applyMatrix4(e),
      this.fromPoints(ie)
    );
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return {
      type: this.constructor.name,
      min: this.min.toArray(new Array()),
      max: this.max.toArray(new Array()),
    };
  }
  fromJSON(e) {
    return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
  }
}
const Ft = new Tn();
class Mt {
  constructor(e = new w(), t = 0) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return (this.center = e), (this.radius = t), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  clampPoint(e, t) {
    return (
      t.copy(e),
      this.center.squaredDistanceTo(e) > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  containsPoint(e) {
    return e.squaredDistanceTo(this.center) <= this.radius * this.radius;
  }
  intersectsBoundingSphere(e) {
    const t = this.radius + e.radius;
    return e.center.squaredDistanceTo(this.center) <= t * t;
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  getNormalFromSurfacePoint(e, t) {
    return t.subVectors(e, this.center).normalize();
  }
  fromPoints(e) {
    return (
      Ft.fromPoints(e),
      Ft.getCenter(this.center),
      (this.radius = this.center.distanceTo(Ft.max)),
      this
    );
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScale()),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  toJSON() {
    return {
      type: this.constructor.name,
      center: this.center.toArray(new Array()),
      radius: this.radius,
    };
  }
  fromJSON(e) {
    return this.center.fromArray(e.center), (this.radius = e.radius), this;
  }
}
const Y = new w(),
  Bt = new w(),
  Ye = new w(),
  Gt = new w(),
  Xn = new w(),
  Qe = new De(),
  Hr = new De(),
  $n = new Tn();
class Ws {
  constructor(e = new w(), t = new w()) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return (this.origin = e), (this.direction = t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  intersectBoundingSphere(e, t) {
    Y.subVectors(e.center, this.origin);
    const n = Y.dot(this.direction),
      s = Y.dot(Y) - n * n,
      i = e.radius * e.radius;
    if (s > i) return null;
    const r = Math.sqrt(i - s),
      o = n - r,
      c = n + r;
    return o < 0 && c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsBoundingSphere(e) {
    const t = new w();
    let n;
    const s = t.subVectors(e.center, this.origin).dot(this.direction);
    return (
      s < 0
        ? (n = this.origin.squaredDistanceTo(e.center))
        : (t.copy(this.direction).multiplyScalar(s).add(this.origin),
          (n = t.squaredDistanceTo(e.center))),
      n <= e.radius * e.radius
    );
  }
  intersectAABB(e, t) {
    let n, s, i, r, o, c;
    const l = 1 / this.direction.x,
      h = 1 / this.direction.y,
      u = 1 / this.direction.z,
      d = this.origin;
    return (
      l >= 0
        ? ((n = (e.min.x - d.x) * l), (s = (e.max.x - d.x) * l))
        : ((n = (e.max.x - d.x) * l), (s = (e.min.x - d.x) * l)),
      h >= 0
        ? ((i = (e.min.y - d.y) * h), (r = (e.max.y - d.y) * h))
        : ((i = (e.max.y - d.y) * h), (r = (e.min.y - d.y) * h)),
      n > r ||
      i > s ||
      ((i > n || n !== n) && (n = i),
      (r < s || s !== s) && (s = r),
      u >= 0
        ? ((o = (e.min.z - d.z) * u), (c = (e.max.z - d.z) * u))
        : ((o = (e.max.z - d.z) * u), (c = (e.min.z - d.z) * u)),
      n > c || o > s) ||
      ((o > n || n !== n) && (n = o), (c < s || s !== s) && (s = c), s < 0)
        ? null
        : this.at(n >= 0 ? n : s, t)
    );
  }
  intersectsAABB(e) {
    return this.intersectAABB(e, Y) !== null;
  }
  intersectPlane(e, t) {
    let n;
    const s = e.normal.dot(this.direction);
    if (s === 0)
      if (e.distanceToPoint(this.origin) === 0) n = 0;
      else return null;
    else n = -(this.origin.dot(e.normal) + e.constant) / s;
    return n >= 0 ? this.at(n, t) : null;
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectOBB(e, t) {
    return (
      e.getSize(Xn),
      $n.fromCenterAndSize(Y.set(0, 0, 0), Xn),
      Qe.fromMatrix3(e.rotation),
      Qe.setPosition(e.center),
      Yn.copy(this).applyMatrix4(Qe.getInverse(Hr)),
      Yn.intersectAABB($n, t) ? t.applyMatrix4(Qe) : null
    );
  }
  intersectsOBB(e) {
    return this.intersectOBB(e, Y) !== null;
  }
  intersectConvexHull(e, t) {
    const n = e.faces;
    let s = -1 / 0,
      i = 1 / 0;
    for (let r = 0, o = n.length; r < o; r++) {
      const l = n[r].plane,
        h = l.distanceToPoint(this.origin),
        u = l.normal.dot(this.direction);
      if (h > 0 && u >= 0) return null;
      const d = u !== 0 ? -h / u : 0;
      if (
        !(d <= 0) &&
        (u > 0 ? (i = Math.min(d, i)) : (s = Math.max(d, s)), s > i)
      )
        return null;
    }
    return s !== -1 / 0 ? this.at(s, t) : this.at(i, t), t;
  }
  intersectsConvexHull(e) {
    return this.intersectConvexHull(e, Y) !== null;
  }
  intersectTriangle(e, t, n) {
    const s = e.a,
      i = e.b,
      r = e.c;
    Bt.subVectors(i, s), Ye.subVectors(r, s), Gt.crossVectors(Bt, Ye);
    let o = this.direction.dot(Gt),
      c;
    if (o > 0) {
      if (t) return null;
      c = 1;
    } else if (o < 0) (c = -1), (o = -o);
    else return null;
    Y.subVectors(this.origin, s);
    const l = c * this.direction.dot(Ye.crossVectors(Y, Ye));
    if (l < 0) return null;
    const h = c * this.direction.dot(Bt.cross(Y));
    if (h < 0 || l + h > o) return null;
    const u = -c * Y.dot(Gt);
    return u < 0 ? null : this.at(u / o, n);
  }
  intersectBVH(e, t) {
    return e.root.intersectRay(this, t);
  }
  intersectsBVH(e) {
    return e.root.intersectsRay(this);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
}
const Yn = new Ws(),
  Qn = new De(),
  ye = new w(),
  Ze = new w(),
  Ut = new w(),
  Ht = new Mt(),
  Jr = new Ws(new w(0, 0, 0), new w(0, 0, 1));
class Vr extends j {
  constructor(e = new Array()) {
    super(),
      (this.obstacles = e),
      (this.brakingWeight = 0.2),
      (this.dBoxMinLength = 4);
  }
  calculate(e, t) {
    const n = this.obstacles;
    let s = null,
      i = 1 / 0;
    const r =
      this.dBoxMinLength + (e.getSpeed() / e.maxSpeed) * this.dBoxMinLength;
    e.worldMatrix.getInverse(Qn);
    for (let o = 0, c = n.length; o < c; o++) {
      const l = n[o];
      if (
        l !== e &&
        (ye.copy(l.position).applyMatrix4(Qn), ye.z > 0 && Math.abs(ye.z) < r)
      ) {
        const h = l.boundingRadius + e.boundingRadius;
        Math.abs(ye.x) < h &&
          (Ht.center.copy(ye),
          (Ht.radius = h),
          Jr.intersectBoundingSphere(Ht, Ut),
          Ut.z < i && ((i = Ut.z), (s = l), Ze.copy(ye)));
      }
    }
    if (s !== null) {
      const o = 1 + (r - Ze.z) / r;
      (t.x = (s.boundingRadius - Ze.x) * o),
        (t.z = (s.boundingRadius - Ze.z) * this.brakingWeight),
        t.applyRotation(e.rotation);
    }
    return t;
  }
  toJSON() {
    const e = super.toJSON();
    (e.obstacles = new Array()),
      (e.brakingWeight = this.brakingWeight),
      (e.dBoxMinLength = this.dBoxMinLength);
    for (let t = 0, n = this.obstacles.length; t < n; t++)
      e.obstacles.push(this.obstacles[t].uuid);
    return e;
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.obstacles = e.obstacles),
      (this.brakingWeight = e.brakingWeight),
      (this.dBoxMinLength = e.dBoxMinLength),
      this
    );
  }
  resolveReferences(e) {
    const t = this.obstacles;
    for (let n = 0, s = t.length; n < s; n++) t[n] = e.get(t[n]);
  }
}
const Jt = new w(),
  Zn = new w(),
  es = new w(),
  ts = new w();
class qr extends j {
  constructor(e = null, t = new w()) {
    super(),
      (this.leader = e),
      (this.offset = t),
      (this._arrive = new Tt()),
      (this._arrive.deceleration = 1.5);
  }
  calculate(e, t) {
    const n = this.leader,
      s = this.offset;
    Jt.copy(s).applyMatrix4(n.worldMatrix), Zn.subVectors(Jt, e.position);
    const i = Zn.length() / (e.maxSpeed + n.getSpeed());
    return (
      es.copy(n.velocity).multiplyScalar(i),
      ts.addVectors(Jt, es),
      (this._arrive.target = ts),
      this._arrive.calculate(e, t),
      t
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.leader = this.leader ? this.leader.uuid : null),
      (e.offset = this.offset),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.leader = e.leader),
      (this.offset = e.offset),
      this
    );
  }
  resolveReferences(e) {
    this.leader = e.get(this.leader) || null;
  }
}
const Vt = new w(),
  qt = new w(),
  ns = new w(),
  ss = new w(),
  is = new w();
class Kr extends j {
  constructor(e = null, t = 1) {
    super(),
      (this.evader = e),
      (this.predictionFactor = t),
      (this._seek = new St());
  }
  calculate(e, t) {
    const n = this.evader;
    Vt.subVectors(n.position, e.position),
      e.getDirection(qt),
      n.getDirection(ns);
    const s = Vt.dot(qt) > 0,
      i = qt.dot(ns) < -0.95;
    if (s === !0 && i === !0)
      return (this._seek.target = n.position), this._seek.calculate(e, t), t;
    let r = Vt.length() / (e.maxSpeed + n.getSpeed());
    return (
      (r *= this.predictionFactor),
      ss.copy(n.velocity).multiplyScalar(r),
      is.addVectors(n.position, ss),
      (this._seek.target = is),
      this._seek.calculate(e, t),
      t
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.evader = this.evader ? this.evader.uuid : null),
      (e.predictionFactor = this.predictionFactor),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.evader = e.evader),
      (this.predictionFactor = e.predictionFactor),
      this
    );
  }
  resolveReferences(e) {
    this.evader = e.get(this.evader) || null;
  }
}
const et = new w();
class Wr extends j {
  constructor() {
    super();
  }
  calculate(e, t) {
    const n = e.neighbors;
    for (let s = 0, i = n.length; s < i; s++) {
      const r = n[s];
      et.subVectors(e.position, r.position);
      let o = et.length();
      o === 0 && (o = 1e-4), et.normalize().divideScalar(o), t.add(et);
    }
    return t;
  }
}
const tt = new w(),
  Kt = new w();
class jr extends j {
  constructor(e = 1, t = 5, n = 5) {
    super(),
      (this.radius = e),
      (this.distance = t),
      (this.jitter = n),
      (this._targetLocal = new w()),
      Xr(this.radius, this._targetLocal);
  }
  calculate(e, t, n) {
    const s = this.jitter * n;
    return (
      (Kt.x = ee.randFloat(-1, 1) * s),
      (Kt.z = ee.randFloat(-1, 1) * s),
      this._targetLocal.add(Kt),
      this._targetLocal.normalize(),
      this._targetLocal.multiplyScalar(this.radius),
      tt.copy(this._targetLocal),
      (tt.z += this.distance),
      tt.applyMatrix4(e.worldMatrix),
      t.subVectors(tt, e.position),
      t
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.radius = this.radius),
      (e.distance = this.distance),
      (e.jitter = this.jitter),
      (e._targetLocal = this._targetLocal.toArray(new Array())),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.radius = e.radius),
      (this.distance = e.distance),
      (this.jitter = e.jitter),
      this._targetLocal.fromArray(e._targetLocal),
      this
    );
  }
}
function Xr(a, e) {
  const t = Math.random() * Math.PI * 2;
  (e.x = a * Math.cos(t)), (e.z = a * Math.sin(t));
}
const nt = new w();
class rs {
  constructor(e) {
    (this.vehicle = e),
      (this.behaviors = new Array()),
      (this._steeringForce = new w()),
      (this._typesMap = new Map());
  }
  add(e) {
    return this.behaviors.push(e), this;
  }
  remove(e) {
    const t = this.behaviors.indexOf(e);
    return this.behaviors.splice(t, 1), this;
  }
  clear() {
    return (this.behaviors.length = 0), this;
  }
  calculate(e, t) {
    return this._calculateByOrder(e), t.copy(this._steeringForce);
  }
  _accumulate(e) {
    const t = this._steeringForce.length(),
      n = this.vehicle.maxForce - t;
    return n <= 0
      ? !1
      : (e.length() > n && e.normalize().multiplyScalar(n),
        this._steeringForce.add(e),
        !0);
  }
  _calculateByOrder(e) {
    const t = this.behaviors;
    this._steeringForce.set(0, 0, 0);
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      if (
        i.active === !0 &&
        (nt.set(0, 0, 0),
        i.calculate(this.vehicle, nt, e),
        nt.multiplyScalar(i.weight),
        this._accumulate(nt) === !1)
      )
        return;
    }
  }
  toJSON() {
    const e = { type: "SteeringManager", behaviors: new Array() },
      t = this.behaviors;
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      e.behaviors.push(i.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    this.clear();
    const t = e.behaviors;
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n],
        r = i.type;
      let o;
      switch (r) {
        case "SteeringBehavior":
          o = new j().fromJSON(i);
          break;
        case "AlignmentBehavior":
          o = new Dr().fromJSON(i);
          break;
        case "ArriveBehavior":
          o = new Tt().fromJSON(i);
          break;
        case "CohesionBehavior":
          o = new kr().fromJSON(i);
          break;
        case "EvadeBehavior":
          o = new Fr().fromJSON(i);
          break;
        case "FleeBehavior":
          o = new Ks().fromJSON(i);
          break;
        case "FollowPathBehavior":
          o = new Gr().fromJSON(i);
          break;
        case "InterposeBehavior":
          o = new Ur().fromJSON(i);
          break;
        case "ObstacleAvoidanceBehavior":
          o = new Vr().fromJSON(i);
          break;
        case "OffsetPursuitBehavior":
          o = new qr().fromJSON(i);
          break;
        case "PursuitBehavior":
          o = new Kr().fromJSON(i);
          break;
        case "SeekBehavior":
          o = new St().fromJSON(i);
          break;
        case "SeparationBehavior":
          o = new Wr().fromJSON(i);
          break;
        case "WanderBehavior":
          o = new jr().fromJSON(i);
          break;
        default:
          const c = this._typesMap.get(r);
          if (c !== void 0) o = new c().fromJSON(i);
          else {
            W.warn(
              "YUKA.SteeringManager: Unsupported steering behavior type:",
              r
            );
            continue;
          }
      }
      this.add(o);
    }
    return this;
  }
  registerType(e, t) {
    return this._typesMap.set(e, t), this;
  }
  resolveReferences(e) {
    const t = this.behaviors;
    for (let n = 0, s = t.length; n < s; n++) t[n].resolveReferences(e);
    return this;
  }
}
class $r {
  constructor(e = 10) {
    (this.count = e), (this._history = new Array()), (this._slot = 0);
    for (let t = 0; t < this.count; t++) this._history[t] = new w();
  }
  calculate(e, t) {
    t.set(0, 0, 0),
      this._slot === this.count && (this._slot = 0),
      this._history[this._slot].copy(e),
      this._slot++;
    for (let n = 0; n < this.count; n++) t.add(this._history[n]);
    return t.divideScalar(this.count), t;
  }
  toJSON() {
    const e = {
        type: this.constructor.name,
        count: this.count,
        _history: new Array(),
        _slot: this._slot,
      },
      t = this._history;
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      e._history.push(i.toArray(new Array()));
    }
    return e;
  }
  fromJSON(e) {
    (this.count = e.count), (this._slot = e._slot);
    const t = e._history;
    this._history.length = 0;
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      this._history.push(new w().fromArray(i));
    }
    return this;
  }
}
const os = new w(),
  st = new w(),
  as = new w(),
  Re = new w(),
  cs = new w();
class Yr extends qs {
  constructor() {
    super(),
      (this.mass = 1),
      (this.maxForce = 100),
      (this.steering = new rs(this)),
      (this.smoother = null);
  }
  update(e) {
    return (
      this.steering.calculate(e, os),
      as.copy(os).divideScalar(this.mass),
      this.velocity.add(as.multiplyScalar(e)),
      this.getSpeedSquared() > this.maxSpeed * this.maxSpeed &&
        (this.velocity.normalize(),
        this.velocity.multiplyScalar(this.maxSpeed)),
      st.copy(this.velocity).multiplyScalar(e),
      Re.copy(this.position).add(st),
      this.updateOrientation === !0 &&
        this.smoother === null &&
        this.getSpeedSquared() > 1e-8 &&
        this.lookAt(Re),
      this.position.copy(Re),
      this.updateOrientation === !0 &&
        this.smoother !== null &&
        (this.smoother.calculate(this.velocity, cs),
        st.copy(cs).multiplyScalar(e),
        Re.copy(this.position).add(st),
        this.lookAt(Re)),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.mass = this.mass),
      (e.maxForce = this.maxForce),
      (e.steering = this.steering.toJSON()),
      (e.smoother = this.smoother ? this.smoother.toJSON() : null),
      e
    );
  }
  fromJSON(e) {
    return (
      super.fromJSON(e),
      (this.mass = e.mass),
      (this.maxForce = e.maxForce),
      (this.steering = new rs(this).fromJSON(e.steering)),
      (this.smoother = e.smoother ? new $r().fromJSON(e.smoother) : null),
      this
    );
  }
  resolveReferences(e) {
    super.resolveReferences(e), this.steering.resolveReferences(e);
  }
}
class pt {
  touching() {
    return !1;
  }
  update() {
    return this;
  }
  toJSON() {
    return { type: this.constructor.name };
  }
  fromJSON() {
    return this;
  }
}
const hs = new Mt(),
  ls = new w();
class Qr extends pt {
  constructor(e = new w()) {
    super(), (this.size = e), (this._aabb = new Tn());
  }
  touching(e) {
    return (
      hs.set(e.position, e.boundingRadius),
      this._aabb.intersectsBoundingSphere(hs)
    );
  }
  update(e) {
    return (
      e.getWorldPosition(ls), this._aabb.fromCenterAndSize(ls, this.size), this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (e.size = this.size.toArray(new Array())), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.size.fromArray(e.size), this;
  }
}
const Wt = new Mt();
class Zr extends pt {
  constructor(e = 0) {
    super(), (this.radius = e), (this._boundingSphere = new Mt());
  }
  touching(e) {
    return (
      e.getWorldPosition(Wt.center),
      (Wt.radius = e.boundingRadius),
      this._boundingSphere.intersectsBoundingSphere(Wt)
    );
  }
  update(e) {
    return (
      e.getWorldPosition(this._boundingSphere.center),
      (this._boundingSphere.radius = this.radius),
      this
    );
  }
  toJSON() {
    const e = super.toJSON();
    return (e.radius = this.radius), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), (this.radius = e.radius), this;
  }
}
class us extends An {
  constructor(e = new pt()) {
    super(),
      (this.region = e),
      (this.canActivateTrigger = !1),
      (this._typesMap = new Map());
  }
  check(e) {
    return this.region.touching(e) === !0 && this.execute(e), this;
  }
  execute() {}
  updateRegion() {
    return this.region.update(this), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (e.region = this.region.toJSON()), e;
  }
  fromJSON(e) {
    super.fromJSON(e);
    const t = e.region;
    let n = t.type;
    switch (n) {
      case "TriggerRegion":
        this.region = new pt().fromJSON(t);
        break;
      case "RectangularTriggerRegion":
        this.region = new Qr().fromJSON(t);
        break;
      case "SphericalTriggerRegion":
        this.region = new Zr().fromJSON(t);
        break;
      default:
        const s = this._typesMap.get(n);
        s !== void 0
          ? (this.region = new s().fromJSON(t))
          : W.warn("YUKA.Trigger: Unsupported trigger region type:", t.type);
    }
    return this;
  }
  registerType(e, t) {
    return this._typesMap.set(e, t), this;
  }
}
const Ne = new Array();
class ha {
  constructor() {
    (this.entities = new Array()),
      (this.spatialIndex = null),
      (this._triggers = new Array()),
      (this._indexMap = new Map()),
      (this._typesMap = new Map()),
      (this._messageDispatcher = new Cr());
  }
  add(e) {
    return this.entities.push(e), (e.manager = this), this;
  }
  remove(e) {
    const t = this.entities.indexOf(e);
    return this.entities.splice(t, 1), (e.manager = null), this;
  }
  clear() {
    return (this.entities.length = 0), this._messageDispatcher.clear(), this;
  }
  getEntityByName(e) {
    const t = this.entities;
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      if (i.name === e) return i;
    }
    return null;
  }
  update(e) {
    const t = this.entities,
      n = this._triggers;
    for (let s = t.length - 1; s >= 0; s--) {
      const i = t[s];
      this.updateEntity(i, e);
    }
    for (let s = n.length - 1; s >= 0; s--) {
      const i = n[s];
      this.processTrigger(i);
    }
    return (
      (this._triggers.length = 0),
      this._messageDispatcher.dispatchDelayedMessages(e),
      this
    );
  }
  updateEntity(e, t) {
    if (e.active === !0) {
      this.updateNeighborhood(e),
        e._started === !1 && (e.start(), (e._started = !0)),
        e.update(t);
      const n = e.children;
      for (let r = n.length - 1; r >= 0; r--) {
        const o = n[r];
        this.updateEntity(o, t);
      }
      if (
        (e instanceof us && this._triggers.push(e), this.spatialIndex !== null)
      ) {
        let r = this._indexMap.get(e) || -1;
        (r = this.spatialIndex.updateEntity(e, r)), this._indexMap.set(e, r);
      }
      const s = e._renderComponent,
        i = e._renderComponentCallback;
      s !== null && i !== null && i(e, s);
    }
    return this;
  }
  updateNeighborhood(e) {
    if (e.updateNeighborhood === !0) {
      (e.neighbors.length = 0),
        this.spatialIndex !== null
          ? this.spatialIndex.query(e.position, e.neighborhoodRadius, Ne)
          : ((Ne.length = 0), Ne.push(...this.entities));
      const t = e.neighborhoodRadius * e.neighborhoodRadius;
      for (let n = 0, s = Ne.length; n < s; n++) {
        const i = Ne[n];
        e !== i &&
          i.active === !0 &&
          e.position.squaredDistanceTo(i.position) <= t &&
          e.neighbors.push(i);
      }
    }
    return this;
  }
  processTrigger(e) {
    e.updateRegion();
    const t = this.entities;
    for (let n = t.length - 1; n >= 0; n--) {
      const s = t[n];
      e !== s && s.active === !0 && s.canActivateTrigger === !0 && e.check(s);
    }
    return this;
  }
  sendMessage(e, t, n, s, i) {
    return this._messageDispatcher.dispatch(e, t, n, s, i), this;
  }
  toJSON() {
    const e = {
      type: this.constructor.name,
      entities: new Array(),
      _messageDispatcher: this._messageDispatcher.toJSON(),
    };
    function t(n) {
      e.entities.push(n.toJSON());
      for (let s = 0, i = n.children.length; s < i; s++) t(n.children[s]);
    }
    for (let n = 0, s = this.entities.length; n < s; n++) t(this.entities[n]);
    return e;
  }
  fromJSON(e) {
    this.clear();
    const t = e.entities,
      n = e._messageDispatcher,
      s = new Map();
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i],
        c = o.type;
      let l;
      switch (c) {
        case "GameEntity":
          l = new An().fromJSON(o);
          break;
        case "MovingEntity":
          l = new qs().fromJSON(o);
          break;
        case "Vehicle":
          l = new Yr().fromJSON(o);
          break;
        case "Trigger":
          l = new us().fromJSON(o);
          break;
        default:
          const h = this._typesMap.get(c);
          if (h !== void 0) l = new h().fromJSON(o);
          else {
            W.warn("YUKA.EntityManager: Unsupported entity type:", c);
            continue;
          }
      }
      s.set(l.uuid, l), l.parent === null && this.add(l);
    }
    for (let i of s.values()) i.resolveReferences(s);
    return this._messageDispatcher.fromJSON(n), this;
  }
  registerType(e, t) {
    return this._typesMap.set(e, t), this;
  }
}
const xe = new w(),
  jt = new w(),
  it = new w();
class eo {
  constructor(e = new w(0, 0, 1), t = 0) {
    (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return (this.normal = e), (this.constant = t), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  fromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  fromCoplanarPoints(e, t, n) {
    return (
      xe.subVectors(n, t).cross(jt.subVectors(e, t)).normalize(),
      this.fromNormalAndCoplanarPoint(xe, e),
      this
    );
  }
  intersectPlane(e, t) {
    it.crossVectors(this.normal, e.normal);
    const n = it.dot(it);
    return n === 0
      ? null
      : (xe.copy(e.normal).multiplyScalar(this.constant),
        jt.copy(this.normal).multiplyScalar(e.constant),
        t.crossVectors(xe.sub(jt), it).divideScalar(n),
        t);
  }
  intersectsPlane(e) {
    const t = this.normal.dot(e.normal);
    return Math.abs(t) !== 1;
  }
  projectPoint(e, t) {
    return (
      xe.copy(this.normal).multiplyScalar(this.distanceToPoint(e)),
      t.subVectors(e, xe),
      t
    );
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
}
class js {
  constructor(e = -1, t = -1, n = 0) {
    (this.from = e), (this.to = t), (this.cost = n);
  }
  copy(e) {
    return (this.from = e.from), (this.to = e.to), (this.cost = e.cost), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return {
      type: this.constructor.name,
      from: this.from,
      to: this.to,
      cost: this.cost,
    };
  }
  fromJSON(e) {
    return (this.from = e.from), (this.to = e.to), (this.cost = e.cost), this;
  }
}
class Xs {
  constructor(e = -1) {
    this.index = e;
  }
  toJSON() {
    return { type: this.constructor.name, index: this.index };
  }
  fromJSON(e) {
    return (this.index = e.index), this;
  }
}
class to {
  constructor() {
    (this.digraph = !1), (this._nodes = new Map()), (this._edges = new Map());
  }
  addNode(e) {
    const t = e.index;
    return this._nodes.set(t, e), this._edges.set(t, new Array()), this;
  }
  addEdge(e) {
    let t;
    if (((t = this._edges.get(e.from)), t.push(e), this.digraph === !1)) {
      const n = e.clone();
      (n.from = e.to), (n.to = e.from), (t = this._edges.get(e.to)), t.push(n);
    }
    return this;
  }
  getNode(e) {
    return this._nodes.get(e) || null;
  }
  getEdge(e, t) {
    if (this.hasNode(e) && this.hasNode(t)) {
      const n = this._edges.get(e);
      for (let s = 0, i = n.length; s < i; s++) {
        const r = n[s];
        if (r.to === t) return r;
      }
    }
    return null;
  }
  getNodes(e) {
    return (e.length = 0), e.push(...this._nodes.values()), e;
  }
  getEdgesOfNode(e, t) {
    const n = this._edges.get(e);
    return n !== void 0 && ((t.length = 0), t.push(...n)), t;
  }
  getNodeCount() {
    return this._nodes.size;
  }
  getEdgeCount() {
    let e = 0;
    for (const t of this._edges.values()) e += t.length;
    return e;
  }
  removeNode(e) {
    if ((this._nodes.delete(e.index), this.digraph === !1)) {
      const t = this._edges.get(e.index);
      for (const n of t) {
        const s = this._edges.get(n.to);
        for (let i = s.length - 1; i >= 0; i--) {
          const r = s[i];
          if (r.to === e.index) {
            const o = s.indexOf(r);
            s.splice(o, 1);
            break;
          }
        }
      }
    } else
      for (const t of this._edges.values())
        for (let n = t.length - 1; n >= 0; n--) {
          const s = t[n];
          if (!this.hasNode(s.to) || !this.hasNode(s.from)) {
            const i = t.indexOf(s);
            t.splice(i, 1);
          }
        }
    return this._edges.delete(e.index), this;
  }
  removeEdge(e) {
    const t = this._edges.get(e.from);
    if (t !== void 0) {
      const n = t.indexOf(e);
      if ((t.splice(n, 1), this.digraph === !1)) {
        const s = this._edges.get(e.to);
        for (let i = 0, r = s.length; i < r; i++) {
          const o = s[i];
          if (o.to === e.from) {
            const c = s.indexOf(o);
            s.splice(c, 1);
            break;
          }
        }
      }
    }
    return this;
  }
  hasNode(e) {
    return this._nodes.has(e);
  }
  hasEdge(e, t) {
    if (this.hasNode(e) && this.hasNode(t)) {
      const n = this._edges.get(e);
      for (let s = 0, i = n.length; s < i; s++) if (n[s].to === t) return !0;
      return !1;
    } else return !1;
  }
  clear() {
    return this._nodes.clear(), this._edges.clear(), this;
  }
  toJSON() {
    const e = { type: this.constructor.name, digraph: this.digraph },
      t = new Array(),
      n = new Array();
    for (let [s, i] of this._nodes.entries()) {
      const r = new Array();
      this.getEdgesOfNode(s, r);
      for (let o = 0, c = r.length; o < c; o++) t.push(r[o].toJSON());
      n.push(i.toJSON());
    }
    return (e._edges = t), (e._nodes = n), e;
  }
  fromJSON(e) {
    this.digraph = e.digraph;
    for (let t = 0, n = e._nodes.length; t < n; t++)
      this.addNode(new Xs().fromJSON(e._nodes[t]));
    for (let t = 0, n = e._edges.length; t < n; t++)
      this.addEdge(new js().fromJSON(e._edges[t]));
    return this;
  }
}
class no {
  static calculate(e, t, n) {
    const s = e.getNode(t),
      i = e.getNode(n);
    return s.position.distanceTo(i.position);
  }
}
class so {
  constructor(e = io) {
    (this.data = new Array()), (this.length = 0), (this.compare = e);
  }
  push(e) {
    this.data.push(e), this.length++, this._up(this.length - 1);
  }
  pop() {
    if (this.length === 0) return null;
    const e = this.data[0];
    return (
      this.length--,
      this.length > 0 &&
        ((this.data[0] = this.data[this.length]), this._down(0)),
      this.data.pop(),
      e
    );
  }
  peek() {
    return this.data[0] || null;
  }
  _up(e) {
    const t = this.data,
      n = this.compare,
      s = t[e];
    for (; e > 0; ) {
      const i = (e - 1) >> 1,
        r = t[i];
      if (n(s, r) >= 0) break;
      (t[e] = r), (e = i);
    }
    t[e] = s;
  }
  _down(e) {
    const t = this.data,
      n = this.compare,
      s = t[e],
      i = this.length >> 1;
    for (; e < i; ) {
      let r = (e << 1) + 1,
        o = r + 1,
        c = t[r];
      if (
        (o < this.length && n(t[o], c) < 0 && ((r = o), (c = t[o])),
        n(c, s) >= 0)
      )
        break;
      (t[e] = c), (e = r);
    }
    t[e] = s;
  }
}
function io(a, e) {
  return a < e ? -1 : a > e ? 1 : 0;
}
class ro {
  constructor(e = null, t = -1, n = -1) {
    (this.graph = e),
      (this.source = t),
      (this.target = n),
      (this.found = !1),
      (this.heuristic = no),
      (this._cost = new Map()),
      (this._shortestPathTree = new Map()),
      (this._searchFrontier = new Map());
  }
  search() {
    const e = new Array(),
      t = new so(oo);
    for (t.push({ cost: 0, index: this.source }); t.length > 0; ) {
      const s = t.pop().index;
      if (!this._shortestPathTree.has(s)) {
        if (
          (this._searchFrontier.has(s) === !0 &&
            this._shortestPathTree.set(s, this._searchFrontier.get(s)),
          s === this.target)
        )
          return (this.found = !0), this;
        this.graph.getEdgesOfNode(s, e);
        for (let i = 0, r = e.length; i < r; i++) {
          const o = e[i],
            c = (this._cost.get(s) || 0) + o.cost,
            l = this.heuristic.calculate(this.graph, o.to, this.target),
            h = c + l;
          (this._searchFrontier.has(o.to) === !1 || c < this._cost.get(o.to)) &&
            (this._cost.set(o.to, c),
            this._searchFrontier.set(o.to, o),
            t.push({ cost: h, index: o.to }));
        }
      }
    }
    return (this.found = !1), this;
  }
  getPath() {
    const e = new Array();
    if (this.found === !1 || this.target === -1) return e;
    let t = this.target;
    for (e.push(t); t !== this.source; )
      (t = this._shortestPathTree.get(t).from), e.unshift(t);
    return e;
  }
  getSearchTree() {
    return [...this._shortestPathTree.values()];
  }
  clear() {
    return (
      (this.found = !1),
      this._cost.clear(),
      this._shortestPathTree.clear(),
      this._searchFrontier.clear(),
      this
    );
  }
}
function oo(a, e) {
  return a.cost < e.cost ? -1 : a.cost > e.cost ? 1 : 0;
}
new Array();
const ds = new w(),
  rt = new w();
class ao {
  constructor(e = new w(), t = new w()) {
    (this.from = e), (this.to = t);
  }
  set(e, t) {
    return (this.from = e), (this.to = t), this;
  }
  copy(e) {
    return this.from.copy(e.from), this.to.copy(e.to), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  delta(e) {
    return e.subVectors(this.to, this.from);
  }
  at(e, t) {
    return this.delta(t).multiplyScalar(e).add(this.from);
  }
  closestPointToPoint(e, t, n) {
    const s = this.closestPointToPointParameter(e, t);
    return this.at(s, n);
  }
  closestPointToPointParameter(e, t = !0) {
    ds.subVectors(e, this.from), rt.subVectors(this.to, this.from);
    const n = rt.dot(rt);
    let i = rt.dot(ds) / n;
    return t && (i = ee.clamp(i, 0, 1)), i;
  }
  equals(e) {
    return e.from.equals(this.from) && e.to.equals(this.to);
  }
}
class co {
  constructor(e = new w()) {
    (this.vertex = e),
      (this.next = null),
      (this.prev = null),
      (this.twin = null),
      (this.polygon = null);
  }
  tail() {
    return this.prev ? this.prev.vertex : null;
  }
  head() {
    return this.vertex;
  }
  length() {
    const e = this.tail(),
      t = this.head();
    return e !== null ? e.distanceTo(t) : -1;
  }
  squaredLength() {
    const e = this.tail(),
      t = this.head();
    return e !== null ? e.squaredDistanceTo(t) : -1;
  }
  linkOpponent(e) {
    return (this.twin = e), (e.twin = this), this;
  }
  getDirection(e) {
    return e.subVectors(this.vertex, this.prev.vertex).normalize();
  }
}
class fs {
  constructor() {
    (this.centroid = new w()), (this.edge = null), (this.plane = new eo());
  }
  fromContour(e) {
    const t = new Array();
    if (e.length < 3)
      return (
        W.error(
          "YUKA.Polygon: Unable to create polygon from contour. It needs at least three points."
        ),
        this
      );
    for (let n = 0, s = e.length; n < s; n++) {
      const i = new co(e[n]);
      t.push(i);
    }
    for (let n = 0, s = t.length; n < s; n++) {
      let i, r, o;
      n === 0
        ? ((i = t[n]), (r = t[s - 1]), (o = t[n + 1]))
        : n === s - 1
        ? ((i = t[n]), (r = t[n - 1]), (o = t[0]))
        : ((i = t[n]), (r = t[n - 1]), (o = t[n + 1])),
        (i.prev = r),
        (i.next = o),
        (i.polygon = this);
    }
    return (
      (this.edge = t[0]), this.plane.fromCoplanarPoints(e[0], e[1], e[2]), this
    );
  }
  computeCentroid() {
    const e = this.centroid;
    let t = this.edge,
      n = 0;
    e.set(0, 0, 0);
    do e.add(t.vertex), n++, (t = t.next);
    while (t !== this.edge);
    return e.divideScalar(n), this;
  }
  contains(e, t = 0.001) {
    const n = this.plane;
    let s = this.edge;
    do {
      const r = s.tail(),
        o = s.head();
      if (Xt(r, o, e) === !1) return !1;
      s = s.next;
    } while (s !== this.edge);
    const i = n.distanceToPoint(e);
    return !(Math.abs(i) > t);
  }
  convex(e = !0) {
    let t = this.edge;
    do {
      const n = t.tail(),
        s = t.head(),
        i = t.next.head();
      if (e) {
        if (Xt(n, s, i) === !1) return !1;
      } else if (Xt(i, s, n) === !1) return !1;
      t = t.next;
    } while (t !== this.edge);
    return !0;
  }
  coplanar(e = 0.001) {
    const t = this.plane;
    let n = this.edge;
    do {
      const s = t.distanceToPoint(n.vertex);
      if (Math.abs(s) > e) return !1;
      n = n.next;
    } while (n !== this.edge);
    return !0;
  }
  distanceToPoint(e) {
    return this.plane.distanceToPoint(e);
  }
  getContour(e) {
    let t = this.edge;
    e.length = 0;
    do e.push(t.vertex), (t = t.next);
    while (t !== this.edge);
    return e;
  }
}
function Xt(a, e, t) {
  return ee.area(a, e, t) >= 0;
}
class ho extends js {
  constructor(e = -1, t = -1, n = 0) {
    super(e, t, n);
  }
}
class lo extends Xs {
  constructor(e = -1, t = new w(), n = {}) {
    super(e), (this.position = t), (this.userData = n);
  }
}
class uo {
  constructor() {
    this.portalEdges = new Array();
  }
  push(e, t) {
    return this.portalEdges.push({ left: e, right: t }), this;
  }
  generate() {
    const e = this.portalEdges,
      t = new Array();
    let n,
      s,
      i,
      r = 0,
      o = 0,
      c = 0;
    (n = e[0].left), (s = e[0].left), (i = e[0].right), t.push(n);
    for (let l = 1, h = e.length; l < h; l++) {
      const u = e[l].left,
        d = e[l].right;
      if (ee.area(n, i, d) <= 0)
        if (n === i || ee.area(n, s, d) > 0) (i = d), (c = l);
        else {
          t.push(s),
            (n = s),
            (r = o),
            (s = n),
            (i = n),
            (o = r),
            (c = r),
            (l = r);
          continue;
        }
      if (ee.area(n, s, u) >= 0)
        if (n === s || ee.area(n, i, u) < 0) (s = u), (o = l);
        else {
          t.push(i),
            (n = i),
            (r = c),
            (s = n),
            (i = n),
            (o = r),
            (c = r),
            (l = r);
          continue;
        }
    }
    return (
      (t.length === 0 || t[t.length - 1] !== e[e.length - 1].left) &&
        t.push(e[e.length - 1].left),
      t
    );
  }
}
const $t = new w(),
  Yt = new w(),
  Qt = new w(),
  Oe = new w(),
  Le = new ao(),
  Zt = new Array(),
  en = { edge: null, closestPoint: new w() };
class fo {
  constructor() {
    (this.graph = new to()),
      (this.graph.digraph = !0),
      (this.regions = new Array()),
      (this.spatialIndex = null),
      (this.epsilonCoplanarTest = 0.001),
      (this.epsilonContainsTest = 1),
      (this.mergeConvexRegions = !0),
      (this._borderEdges = new Array());
  }
  fromPolygons(e) {
    this.clear();
    const t = new Array(),
      n = new Array();
    for (let s = 0, i = e.length; s < i; s++) {
      const r = e[s];
      let o = r.edge;
      do t.push(o), (o = o.next);
      while (o !== r.edge);
      this.regions.push(r);
    }
    for (let s = 0, i = t.length; s < i; s++) {
      let r = t[s];
      if (r.twin === null)
        for (let o = s + 1, c = t.length; o < c; o++) {
          let l = t[o];
          if (r.tail().equals(l.head()) && r.head().equals(l.tail())) {
            r.linkOpponent(l);
            const h = r.squaredLength();
            n.push({ cost: h, edge: r });
            break;
          }
        }
    }
    return n.sort(po), this._buildRegions(n), this._buildGraph(), this;
  }
  clear() {
    return (
      this.graph.clear(),
      (this.regions.length = 0),
      (this.spatialIndex = null),
      this
    );
  }
  getClosestRegion(e) {
    const t = this.regions;
    let n = null,
      s = 1 / 0;
    for (let i = 0, r = t.length; i < r; i++) {
      const o = t[i],
        c = e.squaredDistanceTo(o.centroid);
      c < s && ((s = c), (n = o));
    }
    return n;
  }
  getRandomRegion() {
    const e = this.regions;
    let t = Math.floor(Math.random() * e.length);
    return t === e.length && (t = e.length - 1), e[t];
  }
  getRegionForPoint(e, t = 0.001) {
    let n;
    if (this.spatialIndex !== null) {
      const s = this.spatialIndex.getIndexForPosition(e);
      n = this.spatialIndex.cells[s].entries;
    } else n = this.regions;
    for (let s = 0, i = n.length; s < i; s++) {
      const r = n[s];
      if (r.contains(e, t) === !0) return r;
    }
    return null;
  }
  getNodeIndex(e) {
    return this.regions.indexOf(e);
  }
  findPath(e, t) {
    const n = this.graph,
      s = new Array();
    let i = this.getRegionForPoint(e, this.epsilonContainsTest),
      r = this.getRegionForPoint(t, this.epsilonContainsTest);
    if (
      ((i === null || r === null) &&
        (i === null && (i = this.getClosestRegion(e)),
        r === null && (r = this.getClosestRegion(t))),
      i === r)
    )
      return s.push(new w().copy(e)), s.push(new w().copy(t)), s;
    {
      const o = this.getNodeIndex(i),
        c = this.getNodeIndex(r),
        l = new ro(n, o, c);
      if ((l.search(), l.found === !0)) {
        const h = l.getPath(),
          u = new uo();
        u.push(e, e);
        const d = { left: null, right: null };
        for (let f = 0, p = h.length - 1; f < p; f++) {
          const y = this.regions[h[f]],
            g = this.regions[h[f + 1]];
          this._getPortalEdge(y, g, d), u.push(d.left, d.right);
        }
        u.push(t, t), s.push(...u.generate());
      }
      return s;
    }
  }
  clampMovement(e, t, n, s) {
    let i = this.getRegionForPoint(n, this.epsilonContainsTest);
    if (i === null) {
      if (e === null)
        throw new Error(
          "YUKA.NavMesh.clampMovement(): No current region available."
        );
      this._getClosestBorderEdge(t, en);
      const r = en.edge,
        o = en.closestPoint;
      r.getDirection(Yt);
      const c = Qt.subVectors(n, t).length();
      let l = 0;
      c !== 0 && (Qt.divideScalar(c), (l = Yt.dot(Qt))),
        Oe.copy(o).add(Yt.multiplyScalar(l * c)),
        Le.set(r.prev.vertex, r.vertex);
      const h = Le.closestPointToPointParameter(Oe, !1);
      if (h >= 0 && h <= 1) s.copy(Oe);
      else {
        if (
          ((i = this.getRegionForPoint(Oe, this.epsilonContainsTest)),
          i !== null)
        )
          return s.copy(Oe), i;
        s.copy(t);
      }
      return e;
    } else return i;
  }
  updateSpatialIndex() {
    if (this.spatialIndex !== null) {
      this.spatialIndex.makeEmpty();
      const e = this.regions;
      for (let t = 0, n = e.length; t < n; t++) {
        const s = e[t];
        this.spatialIndex.addPolygon(s);
      }
    }
    return this;
  }
  _buildRegions(e) {
    const t = this.regions,
      n = { leftPrev: null, leftNext: null, rightPrev: null, rightNext: null };
    if (this.mergeConvexRegions === !0)
      for (let s = 0, i = e.length; s < i; s++) {
        const r = e[s];
        let o = r.edge;
        (n.prev = o.prev),
          (n.next = o.next),
          (n.prevTwin = o.twin.prev),
          (n.nextTwin = o.twin.next),
          (o.prev.next = o.twin.next),
          (o.next.prev = o.twin.prev),
          (o.twin.prev.next = o.next),
          (o.twin.next.prev = o.prev);
        const c = o.polygon;
        if (
          ((c.edge = o.prev),
          c.convex() === !0 && c.coplanar(this.epsilonCoplanarTest) === !0)
        ) {
          let l = c.edge;
          do (l.polygon = c), (l = l.next);
          while (l !== c.edge);
          const h = t.indexOf(r.edge.twin.polygon);
          t.splice(h, 1);
        } else
          (n.prev.next = o),
            (n.next.prev = o),
            (n.prevTwin.next = o.twin),
            (n.nextTwin.prev = o.twin),
            (c.edge = o);
      }
    for (let s = 0, i = t.length; s < i; s++) {
      const r = t[s];
      r.computeCentroid();
      let o = r.edge;
      do o.twin === null && this._borderEdges.push(o), (o = o.next);
      while (o !== r.edge);
    }
  }
  _buildGraph() {
    const e = this.graph,
      t = this.regions,
      n = new Array();
    for (let s = 0, i = t.length; s < i; s++) {
      const r = t[s],
        o = new Array();
      n.push(o);
      let c = r.edge;
      do {
        if (c.twin !== null) {
          const l = this.getNodeIndex(c.twin.polygon);
          if ((o.push(l), e.hasNode(this.getNodeIndex(c.polygon)) === !1)) {
            const h = new lo(this.getNodeIndex(c.polygon), c.polygon.centroid);
            e.addNode(h);
          }
        }
        c = c.next;
      } while (c !== r.edge);
    }
    for (let s = 0, i = n.length; s < i; s++) {
      const r = n[s],
        o = s;
      for (let c = 0, l = r.length; c < l; c++) {
        const h = r[c];
        if (o !== h && e.hasEdge(o, h) === !1) {
          const u = e.getNode(o),
            d = e.getNode(h),
            f = u.position.distanceTo(d.position);
          e.addEdge(new ho(o, h, f));
        }
      }
    }
    return this;
  }
  _getClosestBorderEdge(e, t) {
    let n,
      s = 1 / 0;
    if (this.spatialIndex !== null) {
      Zt.length = 0;
      const i = this.spatialIndex.getIndexForPosition(e),
        r = this.spatialIndex.cells[i].entries;
      for (let o = 0, c = r.length; o < c; o++) {
        const l = r[o];
        let h = l.edge;
        do h.twin === null && Zt.push(h), (h = h.next);
        while (h !== l.edge);
      }
      n = Zt;
    } else n = this._borderEdges;
    for (let i = 0, r = n.length; i < r; i++) {
      const o = n[i];
      Le.set(o.prev.vertex, o.vertex);
      const c = Le.closestPointToPointParameter(e);
      Le.at(c, $t);
      const l = $t.squaredDistanceTo(e);
      l < s && ((s = l), (t.edge = o), t.closestPoint.copy($t));
    }
    return this;
  }
  _getPortalEdge(e, t, n) {
    let s = e.edge;
    do {
      if (s.twin !== null && s.twin.polygon === t)
        return (n.left = s.prev.vertex), (n.right = s.vertex), n;
      s = s.next;
    } while (s !== e.edge);
    return (n.left = null), (n.right = null), n;
  }
}
function po(a, e) {
  return a.cost < e.cost ? 1 : a.cost > e.cost ? -1 : 0;
}
// NavMeshLoader
class la {
  load(e, t) {
    return new Promise((n, s) => {
      fetch(e)
        .then((i) => {
          if (i.status >= 200 && i.status < 300) return i.arrayBuffer();
          {
            const r = new Error(i.statusText || i.status);
            return (r.response = i), Promise.reject(r);
          }
        })
        .then((i) => this.parse(i, e, t))
        .then((i) => {
          n(i);
        })
        .catch((i) => {
          W.error("YUKA.NavMeshLoader: Unable to load navigation mesh.", i),
            s(i);
        });
    });
  }
  parse(e, t, n) {
    const s = new go(),
      i = new TextDecoder();
    let r;
    i.decode(new Uint8Array(e, 0, 4)) === Ao
      ? (s.parseBinary(e), (r = s.extensions.get("BINARY").content))
      : (r = i.decode(new Uint8Array(e)));
    const c = JSON.parse(r);
    if (c.asset === void 0 || c.asset.version[0] < 2)
      throw new Error("YUKA.NavMeshLoader: Unsupported asset version.");
    {
      const l = mo(t);
      return s.parse(c, l, n);
    }
  }
}
class go {
  constructor() {
    (this.json = null),
      (this.path = null),
      (this.cache = new Map()),
      (this.extensions = new Map());
  }
  parse(e, t, n) {
    return (
      (this.json = e),
      (this.path = t),
      this.getDependency("mesh", 0).then((s) => {
        const i = this.parseGeometry(s),
          r = new fo();
        return (
          n &&
            (n.epsilonCoplanarTest !== void 0 &&
              (r.epsilonCoplanarTest = n.epsilonCoplanarTest),
            n.mergeConvexRegions !== void 0 &&
              (r.mergeConvexRegions = n.mergeConvexRegions)),
          r.fromPolygons(i)
        );
      })
    );
  }
  parseGeometry(e) {
    const t = e.index,
      n = e.position,
      s = new Array(),
      i = new Array();
    for (let r = 0, o = n.length; r < o; r += 3) {
      const c = new w();
      (c.x = n[r + 0]), (c.y = n[r + 1]), (c.z = n[r + 2]), s.push(c);
    }
    if (t)
      for (let r = 0, o = t.length; r < o; r += 3) {
        const c = t[r + 0],
          l = t[r + 1],
          h = t[r + 2],
          u = [s[c], s[l], s[h]],
          d = new fs().fromContour(u);
        i.push(d);
      }
    else
      for (let r = 0, o = s.length; r < o; r += 3) {
        const c = [s[r + 0], s[r + 1], s[r + 2]],
          l = new fs().fromContour(c);
        i.push(l);
      }
    return i;
  }
  getDependencies(e) {
    const t = this.cache;
    let n = t.get(e);
    if (!n) {
      const s = this.json[e + (e === "mesh" ? "es" : "s")] || new Array();
      (n = Promise.all(s.map((i, r) => this.getDependency(e, r)))), t.set(e, n);
    }
    return n;
  }
  getDependency(e, t) {
    const n = this.cache,
      s = e + ":" + t;
    let i = n.get(s);
    if (i === void 0) {
      switch (e) {
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "bufferView":
          i = this.loadBufferView(t);
          break;
        case "mesh":
          i = this.loadMesh(t);
          break;
        default:
          throw new Error("Unknown type: " + e);
      }
      n.set(s, i);
    }
    return i;
  }
  loadBuffer(e) {
    const n = this.json.buffers[e];
    return n.uri === void 0 && e === 0
      ? Promise.resolve(this.extensions.get("BINARY").body)
      : new Promise((s, i) => {
          const r = yo(n.uri, this.path);
          fetch(r)
            .then((o) => o.arrayBuffer())
            .then((o) => {
              s(o);
            })
            .catch((o) => {
              W.error("YUKA.NavMeshLoader: Unable to load buffer.", o), i(o);
            });
        });
  }
  loadBufferView(e) {
    const n = this.json.bufferViews[e];
    return this.getDependency("buffer", n.buffer).then((s) => {
      const i = n.byteLength || 0,
        r = n.byteOffset || 0;
      return s.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const n = this.json.accessors[e];
    return this.getDependency("bufferView", n.bufferView).then((s) => {
      const i = xo[n.type],
        r = wo[n.componentType],
        o = n.byteOffset || 0;
      return new r(s, o, n.count * i);
    });
  }
  loadMesh(e) {
    const n = this.json.meshes[e];
    return this.getDependencies("accessor").then((s) => {
      const i = n.primitives[0];
      if (i.mode !== void 0 && i.mode !== 4)
        throw new Error(
          "YUKA.NavMeshLoader: Invalid geometry format. Please ensure to represent your geometry as triangles."
        );
      return {
        index: s[i.indices],
        position: s[i.attributes.POSITION],
        normal: s[i.attributes.NORMAL],
      };
    });
  }
  parseBinary(e) {
    const t = new DataView(e, tn);
    let n = 0;
    const s = new TextDecoder();
    let i = null,
      r = null;
    for (; n < t.byteLength; ) {
      const o = t.getUint32(n, !0);
      n += 4;
      const c = t.getUint32(n, !0);
      if (((n += 4), c === ps.JSON)) {
        const l = new Uint8Array(e, tn + n, o);
        i = s.decode(l);
      } else if (c === ps.BIN) {
        const l = tn + n;
        r = e.slice(l, l + o);
      }
      n += o;
    }
    this.extensions.set("BINARY", { content: i, body: r });
  }
}
function mo(a = "") {
  const e = a.lastIndexOf("/");
  return e === -1 ? "./" : a.substr(0, e + 1);
}
function yo(a, e) {
  return typeof a != "string" || a === ""
    ? ""
    : /^(https?:)?\/\//i.test(a) ||
      /^data:.*,.*$/i.test(a) ||
      /^blob:.*$/i.test(a)
    ? a
    : e + a;
}
const xo = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  wo = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Ao = "glTF",
  tn = 12,
  ps = { JSON: 1313821514, BIN: 5130562 };

export {
  ha, // EntityManager
  Gr, // FollowPathBehavior
  la, // NavMeshLoader
  w, // Vector3
  Yr, // Vehicle
};
