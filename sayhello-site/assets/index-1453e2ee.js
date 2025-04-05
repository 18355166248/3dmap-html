// import { Gr, la, w, Yr } from "./yuka.js";
import {
  EntityManager as ha,
  FollowPathBehavior as Gr,
  NavMeshLoader as la,
  Vector3 as w,
  Vehicle as Yr,
} from "./yuka.module.js";

var si = Object.defineProperty;
var ii = (a, e, t) =>
  e in a
    ? si(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (a[e] = t);
var En = (a, e, t) => (ii(a, typeof e != "symbol" ? e + "" : e, t), t);
import {
  aF as ri,
  B as yn,
  a2 as Ae,
  aG as oi,
  aH as rn,
  aI as Os,
  aJ as xn,
  F as ut,
  C as le,
  I as ne,
  m as fe,
  a5 as Ps,
  b as ks,
  w as an,
  aV as Fs,
  aW as _i,
  b9 as Bi,
  aB as Gi,
  aE as Ui,
  aA as Hi,
  aD as Ji,
} from "./OrbitControls-9c9ee6bc.js";
import { Ki } from "./GLTFLoader.js";

class wt {
  constructor() {
    this.events = new Map();
  }
  on(e, t) {
    let n = this.events.get(e);
    n || ((n = new Set()), this.events.set(e, n)), n.add(t);
  }
  off(e, t) {
    const n = this.events.get(e);
    n && (t ? n.delete(t) : this.events.delete(e));
  }
  emit(e, ...t) {
    const n = this.events.get(e);
    n &&
      n.forEach((s) => {
        s(...t);
      });
  }
  once(e, t) {
    const n = (...s) => {
      t(...s), this.off(e, n);
    };
    this.on(e, n);
  }
}
class Vi extends wt {
  constructor({ canvas: e }) {
    super(),
      (this.canvas = e),
      (this.pixelRatio = 0),
      this.init(),
      window.addEventListener("resize", () => {
        this.init(), this.emit("resize");
      });
  }
  init() {
    (this.width = window.innerWidth),
      (this.height = window.innerHeight),
      (this.pixelRatio =
        this.pixelRatio || Math.min(window.devicePixelRatio, 2));
  }
  destroy() {
    this.off("resize");
  }
}
class qi extends wt {
  constructor() {
    super(),
      (this.start = Date.now()),
      (this.current = this.start),
      (this.elapsed = 0),
      (this.delta = 16),
      (this.clock = new ri()),
      (this.timer = window.requestAnimationFrame(() => {
        this.tick();
      }));
  }
  tick() {
    const e = Date.now();
    (this.delta = e - this.current),
      (this.current = e),
      (this.elapsed = this.current - this.start);
    const t = this.clock.getDelta(),
      n = this.clock.getElapsedTime();
    if ((this.emit("tick", t, n), this.stop))
      return window.cancelAnimationFrame(this.timer), !1;
    this.timer = window.requestAnimationFrame(() => {
      this.tick();
    });
  }
  destroy() {
    (this.stop = !0), this.off("tick");
  }
}
function ra(a, e = !1) {
  const t = a[0].index !== null,
    n = new Set(Object.keys(a[0].attributes)),
    s = new Set(Object.keys(a[0].morphAttributes)),
    i = {},
    r = {},
    o = a[0].morphTargetsRelative,
    c = new yn();
  let l = 0;
  for (let h = 0; h < a.length; ++h) {
    const u = a[h];
    let d = 0;
    if (t !== (u.index !== null))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            h +
            ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."
        ),
        null
      );
    for (const f in u.attributes) {
      if (!n.has(f))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              h +
              '. All geometries must have compatible attributes; make sure "' +
              f +
              '" attribute exists among all geometries, or in none of them.'
          ),
          null
        );
      i[f] === void 0 && (i[f] = []), i[f].push(u.attributes[f]), d++;
    }
    if (d !== n.size)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            h +
            ". Make sure all geometries have the same number of attributes."
        ),
        null
      );
    if (o !== u.morphTargetsRelative)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            h +
            ". .morphTargetsRelative must be consistent throughout all geometries."
        ),
        null
      );
    for (const f in u.morphAttributes) {
      if (!s.has(f))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              h +
              ".  .morphAttributes must be consistent throughout all geometries."
          ),
          null
        );
      r[f] === void 0 && (r[f] = []), r[f].push(u.morphAttributes[f]);
    }
    if (e) {
      let f;
      if (t) f = u.index.count;
      else if (u.attributes.position !== void 0)
        f = u.attributes.position.count;
      else
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              h +
              ". The geometry must have either an index or a position attribute"
          ),
          null
        );
      c.addGroup(l, f, h), (l += f);
    }
  }
  if (t) {
    let h = 0;
    const u = [];
    for (let d = 0; d < a.length; ++d) {
      const f = a[d].index;
      for (let p = 0; p < f.count; ++p) u.push(f.getX(p) + h);
      h += a[d].attributes.position.count;
    }
    c.setIndex(u);
  }
  for (const h in i) {
    const u = Ln(i[h]);
    if (!u)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
            h +
            " attribute."
        ),
        null
      );
    c.setAttribute(h, u);
  }
  for (const h in r) {
    const u = r[h][0].length;
    if (u === 0) break;
    (c.morphAttributes = c.morphAttributes || {}), (c.morphAttributes[h] = []);
    for (let d = 0; d < u; ++d) {
      const f = [];
      for (let y = 0; y < r[h].length; ++y) f.push(r[h][y][d]);
      const p = Ln(f);
      if (!p)
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
              h +
              " morphAttribute."
          ),
          null
        );
      c.morphAttributes[h].push(p);
    }
  }
  return c;
}
function Ln(a) {
  let e,
    t,
    n,
    s = -1,
    i = 0;
  for (let l = 0; l < a.length; ++l) {
    const h = a[l];
    if (h.isInterleavedBufferAttribute)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."
        ),
        null
      );
    if ((e === void 0 && (e = h.array.constructor), e !== h.array.constructor))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."
        ),
        null
      );
    if ((t === void 0 && (t = h.itemSize), t !== h.itemSize))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."
        ),
        null
      );
    if ((n === void 0 && (n = h.normalized), n !== h.normalized))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."
        ),
        null
      );
    if ((s === -1 && (s = h.gpuType), s !== h.gpuType))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."
        ),
        null
      );
    i += h.array.length;
  }
  const r = new e(i);
  let o = 0;
  for (let l = 0; l < a.length; ++l)
    r.set(a[l].array, o), (o += a[l].array.length);
  const c = new Ae(r, t, n);
  return s !== void 0 && (c.gpuType = s), c;
}
function In(a, e) {
  if (e === oi)
    return (
      console.warn(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
      ),
      a
    );
  if (e === rn || e === Os) {
    let t = a.getIndex();
    if (t === null) {
      const r = [],
        o = a.getAttribute("position");
      if (o !== void 0) {
        for (let c = 0; c < o.count; c++) r.push(c);
        a.setIndex(r), (t = a.getIndex());
      } else
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
          ),
          a
        );
    }
    const n = t.count - 2,
      s = [];
    if (e === rn)
      for (let r = 1; r <= n; r++)
        s.push(t.getX(0)), s.push(t.getX(r)), s.push(t.getX(r + 1));
    else
      for (let r = 0; r < n; r++)
        r % 2 === 0
          ? (s.push(t.getX(r)), s.push(t.getX(r + 1)), s.push(t.getX(r + 2)))
          : (s.push(t.getX(r + 2)), s.push(t.getX(r + 1)), s.push(t.getX(r)));
    s.length / 3 !== n &&
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
      );
    const i = a.clone();
    return i.setIndex(s), i.clearGroups(), i;
  } else
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        e
      ),
      a
    );
}

// GLTFLoader

const Ot = new WeakMap();
class br extends xn {
  constructor(e) {
    super(e),
      (this.decoderPath = ""),
      (this.decoderConfig = {}),
      (this.decoderBinary = null),
      (this.decoderPending = null),
      (this.workerLimit = 4),
      (this.workerPool = []),
      (this.workerNextTaskID = 1),
      (this.workerSourceURL = ""),
      (this.defaultAttributeIDs = {
        position: "POSITION",
        normal: "NORMAL",
        color: "COLOR",
        uv: "TEX_COORD",
      }),
      (this.defaultAttributeTypes = {
        position: "Float32Array",
        normal: "Float32Array",
        color: "Float32Array",
        uv: "Float32Array",
      });
  }
  setDecoderPath(e) {
    return (this.decoderPath = e), this;
  }
  setDecoderConfig(e) {
    return (this.decoderConfig = e), this;
  }
  setWorkerLimit(e) {
    return (this.workerLimit = e), this;
  }
  load(e, t, n, s) {
    const i = new ut(this.manager);
    i.setPath(this.path),
      i.setResponseType("arraybuffer"),
      i.setRequestHeader(this.requestHeader),
      i.setWithCredentials(this.withCredentials),
      i.load(
        e,
        (r) => {
          this.parse(r, t, s);
        },
        n,
        s
      );
  }
  parse(e, t, n = () => {}) {
    this.decodeDracoFile(e, t, null, null, fe).catch(n);
  }
  decodeDracoFile(e, t, n, s, i = ne, r = () => {}) {
    const o = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: s || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
      vertexColorSpace: i,
    };
    return this.decodeGeometry(e, o).then(t).catch(r);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if (Ot.has(e)) {
      const c = Ot.get(e);
      if (c.key === n) return c.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred."
        );
    }
    let s;
    const i = this.workerNextTaskID++,
      r = e.byteLength,
      o = this._getWorker(i, r)
        .then(
          (c) => (
            (s = c),
            new Promise((l, h) => {
              (s._callbacks[i] = { resolve: l, reject: h }),
                s.postMessage(
                  { type: "decode", id: i, taskConfig: t, buffer: e },
                  [e]
                );
            })
          )
        )
        .then((c) => this._createGeometry(c.geometry));
    return (
      o
        .catch(() => !0)
        .then(() => {
          s && i && this._releaseTask(s, i);
        }),
      Ot.set(e, { key: n, promise: o }),
      o
    );
  }
  _createGeometry(e) {
    const t = new yn();
    e.index && t.setIndex(new Ae(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const s = e.attributes[n],
        i = s.name,
        r = s.array,
        o = s.itemSize,
        c = new Ae(r, o);
      i === "color" &&
        (this._assignVertexColorSpace(c, s.vertexColorSpace),
        (c.normalized = !(r instanceof Float32Array))),
        t.setAttribute(i, c);
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== fe) return;
    const n = new le();
    for (let s = 0, i = e.count; s < i; s++)
      n.fromBufferAttribute(e, s).convertSRGBToLinear(),
        e.setXYZ(s, n.r, n.g, n.b);
  }
  _loadLibrary(e, t) {
    const n = new ut(this.manager);
    return (
      n.setPath(this.decoderPath),
      n.setResponseType(t),
      n.setWithCredentials(this.withCredentials),
      new Promise((s, i) => {
        n.load(e, s, void 0, i);
      })
    );
  }
  preload() {
    return this._initDecoder(), this;
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const e =
        typeof WebAssembly != "object" || this.decoderConfig.type === "js",
      t = [];
    return (
      e
        ? t.push(this._loadLibrary("draco_decoder.js", "text"))
        : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
          t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
      (this.decoderPending = Promise.all(t).then((n) => {
        const s = n[0];
        e || (this.decoderConfig.wasmBinary = n[1]);
        const i = vr.toString(),
          r = [
            "/* draco decoder */",
            s,
            "",
            "/* worker */",
            i.substring(i.indexOf("{") + 1, i.lastIndexOf("}")),
          ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([r]));
      })),
      this.decoderPending
    );
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const s = new Worker(this.workerSourceURL);
        (s._callbacks = {}),
          (s._taskCosts = {}),
          (s._taskLoad = 0),
          s.postMessage({ type: "init", decoderConfig: this.decoderConfig }),
          (s.onmessage = function (i) {
            const r = i.data;
            switch (r.type) {
              case "decode":
                s._callbacks[r.id].resolve(r);
                break;
              case "error":
                s._callbacks[r.id].reject(r);
                break;
              default:
                console.error(
                  'THREE.DRACOLoader: Unexpected message, "' + r.type + '"'
                );
            }
          }),
          this.workerPool.push(s);
      } else
        this.workerPool.sort(function (s, i) {
          return s._taskLoad > i._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return (n._taskCosts[e] = t), (n._taskLoad += t), n;
    });
  }
  _releaseTask(e, t) {
    (e._taskLoad -= e._taskCosts[t]),
      delete e._callbacks[t],
      delete e._taskCosts[t];
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((e) => e._taskLoad)
    );
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return (
      (this.workerPool.length = 0),
      this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL),
      this
    );
  }
}
function vr() {
  let a, e;
  onmessage = function (r) {
    const o = r.data;
    switch (o.type) {
      case "init":
        (a = o.decoderConfig),
          (e = new Promise(function (h) {
            (a.onModuleLoaded = function (u) {
              h({ draco: u });
            }),
              DracoDecoderModule(a);
          }));
        break;
      case "decode":
        const c = o.buffer,
          l = o.taskConfig;
        e.then((h) => {
          const u = h.draco,
            d = new u.Decoder();
          try {
            const f = t(u, d, new Int8Array(c), l),
              p = f.attributes.map((y) => y.array.buffer);
            f.index && p.push(f.index.array.buffer),
              self.postMessage({ type: "decode", id: o.id, geometry: f }, p);
          } catch (f) {
            console.error(f),
              self.postMessage({ type: "error", id: o.id, error: f.message });
          } finally {
            u.destroy(d);
          }
        });
        break;
    }
  };
  function t(r, o, c, l) {
    const h = l.attributeIDs,
      u = l.attributeTypes;
    let d, f;
    const p = o.GetEncodedGeometryType(c);
    if (p === r.TRIANGULAR_MESH)
      (d = new r.Mesh()), (f = o.DecodeArrayToMesh(c, c.byteLength, d));
    else if (p === r.POINT_CLOUD)
      (d = new r.PointCloud()),
        (f = o.DecodeArrayToPointCloud(c, c.byteLength, d));
    else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!f.ok() || d.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + f.error_msg());
    const y = { index: null, attributes: [] };
    for (const g in h) {
      const m = self[u[g]];
      let x, S;
      if (l.useUniqueIDs) (S = h[g]), (x = o.GetAttributeByUniqueId(d, S));
      else {
        if (((S = o.GetAttributeId(d, r[h[g]])), S === -1)) continue;
        x = o.GetAttribute(d, S);
      }
      const A = s(r, o, d, g, m, x);
      g === "color" && (A.vertexColorSpace = l.vertexColorSpace),
        y.attributes.push(A);
    }
    return p === r.TRIANGULAR_MESH && (y.index = n(r, o, d)), r.destroy(d), y;
  }
  function n(r, o, c) {
    const h = c.num_faces() * 3,
      u = h * 4,
      d = r._malloc(u);
    o.GetTrianglesUInt32Array(c, u, d);
    const f = new Uint32Array(r.HEAPF32.buffer, d, h).slice();
    return r._free(d), { array: f, itemSize: 1 };
  }
  function s(r, o, c, l, h, u) {
    const d = u.num_components(),
      p = c.num_points() * d,
      y = p * h.BYTES_PER_ELEMENT,
      g = i(r, h),
      m = r._malloc(y);
    o.GetAttributeDataArrayForAllPoints(c, u, g, y, m);
    const x = new h(r.HEAPF32.buffer, m, p).slice();
    return r._free(m), { name: l, array: x, itemSize: d };
  }
  function i(r, o) {
    switch (o) {
      case Float32Array:
        return r.DT_FLOAT32;
      case Int8Array:
        return r.DT_INT8;
      case Int16Array:
        return r.DT_INT16;
      case Int32Array:
        return r.DT_INT32;
      case Uint8Array:
        return r.DT_UINT8;
      case Uint16Array:
        return r.DT_UINT16;
      case Uint32Array:
        return r.DT_UINT32;
    }
  }
}
let ln = {
  GLTFLoader: "GLTF",
  TextureLoader: "Texture",
  FontLoader: "Font",
  MMDLoader: "MMD",
  MTLLoader: "MTL",
  OBJLoader: "OBJ",
  PCDLoader: "PCD",
  FileLoader: "File",
  ImageLoader: "Image",
  ObjectLoader: "Object",
  MaterialLoader: "Material",
  CubeTextureLoader: "CubeTexture",
  RGBELoader: "RGBELoader",
  FBXLoader: "FBX",
};
const Rr = Object.values(ln);
class oa extends wt {
  constructor({ dracoPath: e } = {}) {
    super(),
      (this.dracoPath = e || "./draco/gltf/"),
      (this.itemsLoaded = 0),
      (this.itemsTotal = 0),
      (this.assets = []),
      (this.loaders = {}),
      this.initDefaultLoader();
  }
  initManager() {
    const e = new Bi();
    return (
      (e.onProgress = (t, n, s) => {
        (this.itemsLoaded = n),
          (this.itemsTotal = s),
          this.emit("onProgress", t, n, s);
      }),
      (e.onError = (t) => {
        this.emit("onError", t);
      }),
      e
    );
  }
  initDefaultLoader() {
    [
      { loader: Ki, name: "GLTFLoader" },
      { loader: Ps, name: "TextureLoader" },
    ].map((e) => this.addLoader(e.loader, e.name));
  }
  initDraco(e) {
    const t = new br();
    t.setDecoderPath(this.dracoPath), t.preload(), e.setDRACOLoader(t);
  }
  addLoader(e, t = "") {
    if (e.name && ln[t]) {
      if (!this.loaders[t]) {
        let s = new e(this.manager),
          i = t;
        s instanceof xn &&
          (i === "GLTFLoader" && this.initDraco(s), (this.loaders[ln[i]] = s));
      }
    } else throw new Error("请配置正确的加载器");
  }
  loadItem(e) {
    return new Promise((t, n) => {
      if (!this.loaders[e.type]) throw new Error(`资源${e.path}没有配置加载器`);
      this.loaders[e.type].load(
        e.path,
        (s) => {
          this.itemsLoaded++,
            this.emit("onProgress", e.path, this.itemsLoaded, this.itemsTotal),
            t({ ...e, data: s });
        },
        null,
        (s) => {
          this.emit("onError", s), n(s);
        }
      );
    });
  }
  loadAll(e) {
    return (
      (this.itemsLoaded = 0),
      (this.itemsTotal = 0),
      new Promise((t, n) => {
        let s = this.matchType(e),
          i = [];
        (this.itemsTotal = s.length),
          s.map((r) => {
            let o = this.loadItem(r);
            i.push(o);
          }),
          Promise.all(i)
            .then((r) => {
              (this.assets = r), this.emit("onLoad"), t(r);
            })
            .catch((r) => {
              this.emit("onError", r), n(r);
            });
      })
    );
  }
  matchType(e) {
    return (
      (this.assets = e
        .map((t) => ({
          type: Rr.includes(t.type) ? t.type : "",
          path: t.path,
          name: t.name,
          data: null,
        }))
        .filter((t) => {
          if (!t.type) throw new Error(`资源${t.path},type不正确`);
          return t.type;
        })),
      this.assets
    );
  }
  getResource(e) {
    let t = this.assets.find((n) => n.name === e);
    if (!t) throw new Error(`资源${e}不存在`);
    return t.data;
  }
  destroy() {
    this.off("onProgress"),
      this.off("onLoad"),
      this.off("onError"),
      (this.assets = []);
  }
}
var aa =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Nr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var At = { exports: {} },
  Or = function (e, t, n, s) {
    var i = e[0],
      r = e[1],
      o = !1;
    n === void 0 && (n = 0), s === void 0 && (s = t.length);
    for (var c = (s - n) / 2, l = 0, h = c - 1; l < c; h = l++) {
      var u = t[n + l * 2 + 0],
        d = t[n + l * 2 + 1],
        f = t[n + h * 2 + 0],
        p = t[n + h * 2 + 1],
        y = d > r != p > r && i < ((f - u) * (r - d)) / (p - d) + u;
      y && (o = !o);
    }
    return o;
  },
  Lr = function (e, t, n, s) {
    var i = e[0],
      r = e[1],
      o = !1;
    n === void 0 && (n = 0), s === void 0 && (s = t.length);
    for (var c = s - n, l = 0, h = c - 1; l < c; h = l++) {
      var u = t[l + n][0],
        d = t[l + n][1],
        f = t[h + n][0],
        p = t[h + n][1],
        y = d > r != p > r && i < ((f - u) * (r - d)) / (p - d) + u;
      y && (o = !o);
    }
    return o;
  },
  Js = Or,
  Vs = Lr;
At.exports = function (e, t, n, s) {
  return t.length > 0 && Array.isArray(t[0]) ? Vs(e, t, n, s) : Js(e, t, n, s);
};
At.exports.nested = Vs;
At.exports.flat = Js;
var Ir = At.exports;
const ca = Nr(Ir);
class Pr {
  constructor({
    canvas: e,
    sizes: t,
    scene: n,
    camera: s,
    postprocessing: i = !1,
    composer: r = null,
  }) {
    (this.canvas = e),
      (this.sizes = t),
      (this.scene = n),
      (this.camera = s),
      (this.postprocessing = i),
      (this.composer = r),
      this.setInstance();
  }
  setInstance() {
    (this.instance = new Gi({ alpha: !0, antialias: !0, canvas: this.canvas })),
      this.instance.setSize(this.sizes.width, this.sizes.height),
      this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height),
      this.instance.setPixelRatio(this.sizes.pixelRatio);
  }
  update() {
    this.postprocessing && this.composer
      ? this.composer.render()
      : this.instance.render(this.scene, this.camera.instance);
  }
  destroy() {
    this.instance.dispose(), this.instance.forceContextLoss();
  }
}
// Yukajs Start

new Array();
class To {
  constructor({ sizes: e, scene: t, canvas: n }, s = { isOrthographic: !1 }) {
    (this.sizes = e),
      (this.scene = t),
      (this.wWidth = 0),
      (this.wHeight = 0),
      (this.canvas = n),
      (this.options = Object.assign({ isOrthographic: !1 }, s)),
      this.setInstance(),
      document.addEventListener("keydown", (i) => {
        let r = new w().copy(this.instance.position);
        switch (i.keyCode) {
          case 79:
            this.setCamera(),
              this.instance.position.copy(r),
              this.instance.updateProjectionMatrix();
            break;
          case 80:
            this.setCamera(!1),
              this.instance.position.copy(r),
              this.instance.updateProjectionMatrix();
            break;
        }
      });
  }
  getCameraViewSize() {
    if (this.instance instanceof an) {
      const e = (this.instance.fov * Math.PI) / 180,
        t = 2 * Math.tan(e / 2) * Math.abs(this.instance.position.z),
        n = t * this.instance.aspect;
      (this.wWidth = n), (this.wHeight = t);
    } else
      (this.wWidth = this.instance.top - this.instance.bottom),
        (this.wHeight = this.instance.right - this.instance.left);
    return [this.wWidth, this.wHeight];
  }
  setInstance() {
    (this.instance = null),
      this.setCamera(this.options.isOrthographic),
      this.instance.position.set(10, 10, 10),
      this.scene.add(this.instance);
  }
  setCamera(e = !0) {
    let t = this.sizes.width / this.sizes.height;
    if (e) {
      let n = 120;
      this.instance = new Fs(-n * t, n * t, n, -n, 1, 1e4);
    } else this.instance = new an(45, t, 1, 1e4);
    this.setControls(), this.getCameraViewSize();
  }
  setControls() {
    (this.controls = new Ui(this.instance, this.canvas)),
      (this.controls.enableDamping = !0),
      this.controls.update();
  }
  resize() {
    let e = this.sizes.width / this.sizes.height;
    if (this.options.isOrthographic) {
      let t = 120;
      (this.instance.left = -t * e),
        (this.instance.right = t * e),
        (this.instance.top = t),
        (this.instance.bottom = -t);
    } else this.instance.aspect = e;
    this.instance.updateProjectionMatrix();
  }
  update() {
    this.controls.update();
  }
  destroy() {
    this.controls.dispose();
  }
}
class So {
  constructor() {
    (this._partials = new Float64Array(32)), (this._n = 0);
  }
  add(e) {
    const t = this._partials;
    let n = 0;
    for (let s = 0; s < this._n && s < 32; s++) {
      const i = t[s],
        r = e + i,
        o = Math.abs(e) < Math.abs(i) ? e - (r - i) : i - (r - e);
      o && (t[n++] = o), (e = r);
    }
    return (t[n] = e), (this._n = n + 1), this;
  }
  valueOf() {
    const e = this._partials;
    let t = this._n,
      n,
      s,
      i,
      r = 0;
    if (t > 0) {
      for (
        r = e[--t];
        t > 0 && ((n = r), (s = e[--t]), (r = n + s), (i = s - (r - n)), !i);

      );
      t > 0 &&
        ((i < 0 && e[t - 1] < 0) || (i > 0 && e[t - 1] > 0)) &&
        ((s = i * 2), (n = r + s), s == n - r && (r = n));
    }
    return r;
  }
}
function* Mo(a) {
  for (const e of a) yield* e;
}
function $s(a) {
  return Array.from(Mo(a));
}
var z = 1e-6,
  _o = 1e-12,
  L = Math.PI,
  K = L / 2,
  gs = L / 4,
  Z = L * 2,
  X = 180 / L,
  G = L / 180,
  k = Math.abs,
  Ys = Math.atan,
  ke = Math.atan2,
  F = Math.cos,
  Eo = Math.exp,
  bo = Math.log,
  B = Math.sin,
  vo =
    Math.sign ||
    function (a) {
      return a > 0 ? 1 : a < 0 ? -1 : 0;
    },
  _t = Math.sqrt,
  Ro = Math.tan;
function No(a) {
  return a > 1 ? 0 : a < -1 ? L : Math.acos(a);
}
function Fe(a) {
  return a > 1 ? K : a < -1 ? -K : Math.asin(a);
}
function Pe() {}
function gt(a, e) {
  a && ys.hasOwnProperty(a.type) && ys[a.type](a, e);
}
var ms = {
    Feature: function (a, e) {
      gt(a.geometry, e);
    },
    FeatureCollection: function (a, e) {
      for (var t = a.features, n = -1, s = t.length; ++n < s; )
        gt(t[n].geometry, e);
    },
  },
  ys = {
    Sphere: function (a, e) {
      e.sphere();
    },
    Point: function (a, e) {
      (a = a.coordinates), e.point(a[0], a[1], a[2]);
    },
    MultiPoint: function (a, e) {
      for (var t = a.coordinates, n = -1, s = t.length; ++n < s; )
        (a = t[n]), e.point(a[0], a[1], a[2]);
    },
    LineString: function (a, e) {
      un(a.coordinates, e, 0);
    },
    MultiLineString: function (a, e) {
      for (var t = a.coordinates, n = -1, s = t.length; ++n < s; )
        un(t[n], e, 0);
    },
    Polygon: function (a, e) {
      xs(a.coordinates, e);
    },
    MultiPolygon: function (a, e) {
      for (var t = a.coordinates, n = -1, s = t.length; ++n < s; ) xs(t[n], e);
    },
    GeometryCollection: function (a, e) {
      for (var t = a.geometries, n = -1, s = t.length; ++n < s; ) gt(t[n], e);
    },
  };
function un(a, e, t) {
  var n = -1,
    s = a.length - t,
    i;
  for (e.lineStart(); ++n < s; ) (i = a[n]), e.point(i[0], i[1], i[2]);
  e.lineEnd();
}
function xs(a, e) {
  var t = -1,
    n = a.length;
  for (e.polygonStart(); ++t < n; ) un(a[t], e, 1);
  e.polygonEnd();
}
function Oo(a, e) {
  a && ms.hasOwnProperty(a.type) ? ms[a.type](a, e) : gt(a, e);
}
function dn(a) {
  return [ke(a[1], a[0]), Fe(a[2])];
}
function Se(a) {
  var e = a[0],
    t = a[1],
    n = F(t);
  return [n * F(e), n * B(e), B(t)];
}
function ot(a, e) {
  return a[0] * e[0] + a[1] * e[1] + a[2] * e[2];
}
function mt(a, e) {
  return [
    a[1] * e[2] - a[2] * e[1],
    a[2] * e[0] - a[0] * e[2],
    a[0] * e[1] - a[1] * e[0],
  ];
}
function nn(a, e) {
  (a[0] += e[0]), (a[1] += e[1]), (a[2] += e[2]);
}
function at(a, e) {
  return [a[0] * e, a[1] * e, a[2] * e];
}
function fn(a) {
  var e = _t(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
  (a[0] /= e), (a[1] /= e), (a[2] /= e);
}
function pn(a, e) {
  function t(n, s) {
    return (n = a(n, s)), e(n[0], n[1]);
  }
  return (
    a.invert &&
      e.invert &&
      (t.invert = function (n, s) {
        return (n = e.invert(n, s)), n && a.invert(n[0], n[1]);
      }),
    t
  );
}
function gn(a, e) {
  return k(a) > L && (a -= Math.round(a / Z) * Z), [a, e];
}
gn.invert = gn;
function Qs(a, e, t) {
  return (a %= Z)
    ? e || t
      ? pn(As(a), Ts(e, t))
      : As(a)
    : e || t
    ? Ts(e, t)
    : gn;
}
function ws(a) {
  return function (e, t) {
    return (e += a), k(e) > L && (e -= Math.round(e / Z) * Z), [e, t];
  };
}
function As(a) {
  var e = ws(a);
  return (e.invert = ws(-a)), e;
}
function Ts(a, e) {
  var t = F(a),
    n = B(a),
    s = F(e),
    i = B(e);
  function r(o, c) {
    var l = F(c),
      h = F(o) * l,
      u = B(o) * l,
      d = B(c),
      f = d * t + h * n;
    return [ke(u * s - f * i, h * t - d * n), Fe(f * s + u * i)];
  }
  return (
    (r.invert = function (o, c) {
      var l = F(c),
        h = F(o) * l,
        u = B(o) * l,
        d = B(c),
        f = d * s - u * i;
      return [ke(u * s + d * i, h * t + f * n), Fe(f * t - h * n)];
    }),
    r
  );
}
function Lo(a) {
  a = Qs(a[0] * G, a[1] * G, a.length > 2 ? a[2] * G : 0);
  function e(t) {
    return (t = a(t[0] * G, t[1] * G)), (t[0] *= X), (t[1] *= X), t;
  }
  return (
    (e.invert = function (t) {
      return (t = a.invert(t[0] * G, t[1] * G)), (t[0] *= X), (t[1] *= X), t;
    }),
    e
  );
}
function Io(a, e, t, n, s, i) {
  if (t) {
    var r = F(e),
      o = B(e),
      c = n * t;
    s == null
      ? ((s = e + n * Z), (i = e - c / 2))
      : ((s = Ss(r, s)),
        (i = Ss(r, i)),
        (n > 0 ? s < i : s > i) && (s += n * Z));
    for (var l, h = s; n > 0 ? h > i : h < i; h -= c)
      (l = dn([r, -o * F(h), -o * B(h)])), a.point(l[0], l[1]);
  }
}
function Ss(a, e) {
  (e = Se(e)), (e[0] -= a), fn(e);
  var t = No(-e[1]);
  return ((-e[2] < 0 ? -t : t) + Z - z) % Z;
}
function Zs() {
  var a = [],
    e;
  return {
    point: function (t, n, s) {
      e.push([t, n, s]);
    },
    lineStart: function () {
      a.push((e = []));
    },
    lineEnd: Pe,
    rejoin: function () {
      a.length > 1 && a.push(a.pop().concat(a.shift()));
    },
    result: function () {
      var t = a;
      return (a = []), (e = null), t;
    },
  };
}
function lt(a, e) {
  return k(a[0] - e[0]) < z && k(a[1] - e[1]) < z;
}
function ct(a, e, t, n) {
  (this.x = a),
    (this.z = e),
    (this.o = t),
    (this.e = n),
    (this.v = !1),
    (this.n = this.p = null);
}
function ei(a, e, t, n, s) {
  var i = [],
    r = [],
    o,
    c;
  if (
    (a.forEach(function (p) {
      if (!((y = p.length - 1) <= 0)) {
        var y,
          g = p[0],
          m = p[y],
          x;
        if (lt(g, m)) {
          if (!g[2] && !m[2]) {
            for (s.lineStart(), o = 0; o < y; ++o) s.point((g = p[o])[0], g[1]);
            s.lineEnd();
            return;
          }
          m[0] += 2 * z;
        }
        i.push((x = new ct(g, p, null, !0))),
          r.push((x.o = new ct(g, null, x, !1))),
          i.push((x = new ct(m, p, null, !1))),
          r.push((x.o = new ct(m, null, x, !0)));
      }
    }),
    !!i.length)
  ) {
    for (r.sort(e), Ms(i), Ms(r), o = 0, c = r.length; o < c; ++o)
      r[o].e = t = !t;
    for (var l = i[0], h, u; ; ) {
      for (var d = l, f = !0; d.v; ) if ((d = d.n) === l) return;
      (h = d.z), s.lineStart();
      do {
        if (((d.v = d.o.v = !0), d.e)) {
          if (f)
            for (o = 0, c = h.length; o < c; ++o) s.point((u = h[o])[0], u[1]);
          else n(d.x, d.n.x, 1, s);
          d = d.n;
        } else {
          if (f)
            for (h = d.p.z, o = h.length - 1; o >= 0; --o)
              s.point((u = h[o])[0], u[1]);
          else n(d.x, d.p.x, -1, s);
          d = d.p;
        }
        (d = d.o), (h = d.z), (f = !f);
      } while (!d.v);
      s.lineEnd();
    }
  }
}
function Ms(a) {
  if ((e = a.length)) {
    for (var e, t = 0, n = a[0], s; ++t < e; )
      (n.n = s = a[t]), (s.p = n), (n = s);
    (n.n = s = a[0]), (s.p = n);
  }
}
function sn(a) {
  return k(a[0]) <= L ? a[0] : vo(a[0]) * (((k(a[0]) + L) % Z) - L);
}
function Po(a, e) {
  var t = sn(e),
    n = e[1],
    s = B(n),
    i = [B(t), -F(t), 0],
    r = 0,
    o = 0,
    c = new So();
  s === 1 ? (n = K + z) : s === -1 && (n = -K - z);
  for (var l = 0, h = a.length; l < h; ++l)
    if ((d = (u = a[l]).length))
      for (
        var u,
          d,
          f = u[d - 1],
          p = sn(f),
          y = f[1] / 2 + gs,
          g = B(y),
          m = F(y),
          x = 0;
        x < d;
        ++x, p = A, g = E, m = b, f = S
      ) {
        var S = u[x],
          A = sn(S),
          _ = S[1] / 2 + gs,
          E = B(_),
          b = F(_),
          R = A - p,
          M = R >= 0 ? 1 : -1,
          I = M * R,
          v = I > L,
          U = g * E;
        if (
          (c.add(ke(U * M * B(I), m * b + U * F(I))),
          (r += v ? R + M * Z : R),
          v ^ (p >= t) ^ (A >= t))
        ) {
          var C = mt(Se(f), Se(S));
          fn(C);
          var P = mt(i, C);
          fn(P);
          var T = (v ^ (R >= 0) ? -1 : 1) * Fe(P[2]);
          (n > T || (n === T && (C[0] || C[1]))) &&
            (o += v ^ (R >= 0) ? 1 : -1);
        }
      }
  return (r < -z || (r < z && c < -_o)) ^ (o & 1);
}
function ti(a, e, t, n) {
  return function (s) {
    var i = e(s),
      r = Zs(),
      o = e(r),
      c = !1,
      l,
      h,
      u,
      d = {
        point: f,
        lineStart: y,
        lineEnd: g,
        polygonStart: function () {
          (d.point = m), (d.lineStart = x), (d.lineEnd = S), (h = []), (l = []);
        },
        polygonEnd: function () {
          (d.point = f), (d.lineStart = y), (d.lineEnd = g), (h = $s(h));
          var A = Po(l, n);
          h.length
            ? (c || (s.polygonStart(), (c = !0)), ei(h, zo, A, t, s))
            : A &&
              (c || (s.polygonStart(), (c = !0)),
              s.lineStart(),
              t(null, null, 1, s),
              s.lineEnd()),
            c && (s.polygonEnd(), (c = !1)),
            (h = l = null);
        },
        sphere: function () {
          s.polygonStart(),
            s.lineStart(),
            t(null, null, 1, s),
            s.lineEnd(),
            s.polygonEnd();
        },
      };
    function f(A, _) {
      a(A, _) && s.point(A, _);
    }
    function p(A, _) {
      i.point(A, _);
    }
    function y() {
      (d.point = p), i.lineStart();
    }
    function g() {
      (d.point = f), i.lineEnd();
    }
    function m(A, _) {
      u.push([A, _]), o.point(A, _);
    }
    function x() {
      o.lineStart(), (u = []);
    }
    function S() {
      m(u[0][0], u[0][1]), o.lineEnd();
      var A = o.clean(),
        _ = r.result(),
        E,
        b = _.length,
        R,
        M,
        I;
      if ((u.pop(), l.push(u), (u = null), !!b)) {
        if (A & 1) {
          if (((M = _[0]), (R = M.length - 1) > 0)) {
            for (
              c || (s.polygonStart(), (c = !0)), s.lineStart(), E = 0;
              E < R;
              ++E
            )
              s.point((I = M[E])[0], I[1]);
            s.lineEnd();
          }
          return;
        }
        b > 1 && A & 2 && _.push(_.pop().concat(_.shift())),
          h.push(_.filter(Co));
      }
    }
    return d;
  };
}
function Co(a) {
  return a.length > 1;
}
function zo(a, e) {
  return (
    ((a = a.x)[0] < 0 ? a[1] - K - z : K - a[1]) -
    ((e = e.x)[0] < 0 ? e[1] - K - z : K - e[1])
  );
}
const _s = ti(
  function () {
    return !0;
  },
  Do,
  Fo,
  [-L, -K]
);
function Do(a) {
  var e = NaN,
    t = NaN,
    n = NaN,
    s;
  return {
    lineStart: function () {
      a.lineStart(), (s = 1);
    },
    point: function (i, r) {
      var o = i > 0 ? L : -L,
        c = k(i - e);
      k(c - L) < z
        ? (a.point(e, (t = (t + r) / 2 > 0 ? K : -K)),
          a.point(n, t),
          a.lineEnd(),
          a.lineStart(),
          a.point(o, t),
          a.point(i, t),
          (s = 0))
        : n !== o &&
          c >= L &&
          (k(e - n) < z && (e -= n * z),
          k(i - o) < z && (i -= o * z),
          (t = ko(e, t, i, r)),
          a.point(n, t),
          a.lineEnd(),
          a.lineStart(),
          a.point(o, t),
          (s = 0)),
        a.point((e = i), (t = r)),
        (n = o);
    },
    lineEnd: function () {
      a.lineEnd(), (e = t = NaN);
    },
    clean: function () {
      return 2 - s;
    },
  };
}
function ko(a, e, t, n) {
  var s,
    i,
    r = B(a - t);
  return k(r) > z
    ? Ys((B(e) * (i = F(n)) * B(t) - B(n) * (s = F(e)) * B(a)) / (s * i * r))
    : (e + n) / 2;
}
function Fo(a, e, t, n) {
  var s;
  if (a == null)
    (s = t * K),
      n.point(-L, s),
      n.point(0, s),
      n.point(L, s),
      n.point(L, 0),
      n.point(L, -s),
      n.point(0, -s),
      n.point(-L, -s),
      n.point(-L, 0),
      n.point(-L, s);
  else if (k(a[0] - e[0]) > z) {
    var i = a[0] < e[0] ? L : -L;
    (s = (t * i) / 2), n.point(-i, s), n.point(0, s), n.point(i, s);
  } else n.point(e[0], e[1]);
}
function Bo(a) {
  var e = F(a),
    t = 6 * G,
    n = e > 0,
    s = k(e) > z;
  function i(h, u, d, f) {
    Io(f, a, t, d, h, u);
  }
  function r(h, u) {
    return F(h) * F(u) > e;
  }
  function o(h) {
    var u, d, f, p, y;
    return {
      lineStart: function () {
        (p = f = !1), (y = 1);
      },
      point: function (g, m) {
        var x = [g, m],
          S,
          A = r(g, m),
          _ = n ? (A ? 0 : l(g, m)) : A ? l(g + (g < 0 ? L : -L), m) : 0;
        if (
          (!u && (p = f = A) && h.lineStart(),
          A !== f &&
            ((S = c(u, x)), (!S || lt(u, S) || lt(x, S)) && (x[2] = 1)),
          A !== f)
        )
          (y = 0),
            A
              ? (h.lineStart(), (S = c(x, u)), h.point(S[0], S[1]))
              : ((S = c(u, x)), h.point(S[0], S[1], 2), h.lineEnd()),
            (u = S);
        else if (s && u && n ^ A) {
          var E;
          !(_ & d) &&
            (E = c(x, u, !0)) &&
            ((y = 0),
            n
              ? (h.lineStart(),
                h.point(E[0][0], E[0][1]),
                h.point(E[1][0], E[1][1]),
                h.lineEnd())
              : (h.point(E[1][0], E[1][1]),
                h.lineEnd(),
                h.lineStart(),
                h.point(E[0][0], E[0][1], 3)));
        }
        A && (!u || !lt(u, x)) && h.point(x[0], x[1]),
          (u = x),
          (f = A),
          (d = _);
      },
      lineEnd: function () {
        f && h.lineEnd(), (u = null);
      },
      clean: function () {
        return y | ((p && f) << 1);
      },
    };
  }
  function c(h, u, d) {
    var f = Se(h),
      p = Se(u),
      y = [1, 0, 0],
      g = mt(f, p),
      m = ot(g, g),
      x = g[0],
      S = m - x * x;
    if (!S) return !d && h;
    var A = (e * m) / S,
      _ = (-e * x) / S,
      E = mt(y, g),
      b = at(y, A),
      R = at(g, _);
    nn(b, R);
    var M = E,
      I = ot(b, M),
      v = ot(M, M),
      U = I * I - v * (ot(b, b) - 1);
    if (!(U < 0)) {
      var C = _t(U),
        P = at(M, (-I - C) / v);
      if ((nn(P, b), (P = dn(P)), !d)) return P;
      var T = h[0],
        N = u[0],
        D = h[1],
        H = u[1],
        J;
      N < T && ((J = T), (T = N), (N = J));
      var te = N - T,
        q = k(te - L) < z,
        ue = q || te < z;
      if (
        (!q && H < D && ((J = D), (D = H), (H = J)),
        ue
          ? q
            ? (D + H > 0) ^ (P[1] < (k(P[0] - T) < z ? D : H))
            : D <= P[1] && P[1] <= H
          : (te > L) ^ (T <= P[0] && P[0] <= N))
      ) {
        var se = at(M, (-I + C) / v);
        return nn(se, b), [P, dn(se)];
      }
    }
  }
  function l(h, u) {
    var d = n ? a : L - a,
      f = 0;
    return (
      h < -d ? (f |= 1) : h > d && (f |= 2),
      u < -d ? (f |= 4) : u > d && (f |= 8),
      f
    );
  }
  return ti(r, o, i, n ? [0, -a] : [-L, a - L]);
}
function Go(a, e, t, n, s, i) {
  var r = a[0],
    o = a[1],
    c = e[0],
    l = e[1],
    h = 0,
    u = 1,
    d = c - r,
    f = l - o,
    p;
  if (((p = t - r), !(!d && p > 0))) {
    if (((p /= d), d < 0)) {
      if (p < h) return;
      p < u && (u = p);
    } else if (d > 0) {
      if (p > u) return;
      p > h && (h = p);
    }
    if (((p = s - r), !(!d && p < 0))) {
      if (((p /= d), d < 0)) {
        if (p > u) return;
        p > h && (h = p);
      } else if (d > 0) {
        if (p < h) return;
        p < u && (u = p);
      }
      if (((p = n - o), !(!f && p > 0))) {
        if (((p /= f), f < 0)) {
          if (p < h) return;
          p < u && (u = p);
        } else if (f > 0) {
          if (p > u) return;
          p > h && (h = p);
        }
        if (((p = i - o), !(!f && p < 0))) {
          if (((p /= f), f < 0)) {
            if (p > u) return;
            p > h && (h = p);
          } else if (f > 0) {
            if (p < h) return;
            p < u && (u = p);
          }
          return (
            h > 0 && ((a[0] = r + h * d), (a[1] = o + h * f)),
            u < 1 && ((e[0] = r + u * d), (e[1] = o + u * f)),
            !0
          );
        }
      }
    }
  }
}
var Ce = 1e9,
  ht = -Ce;
function Uo(a, e, t, n) {
  function s(l, h) {
    return a <= l && l <= t && e <= h && h <= n;
  }
  function i(l, h, u, d) {
    var f = 0,
      p = 0;
    if (l == null || (f = r(l, u)) !== (p = r(h, u)) || (c(l, h) < 0) ^ (u > 0))
      do d.point(f === 0 || f === 3 ? a : t, f > 1 ? n : e);
      while ((f = (f + u + 4) % 4) !== p);
    else d.point(h[0], h[1]);
  }
  function r(l, h) {
    return k(l[0] - a) < z
      ? h > 0
        ? 0
        : 3
      : k(l[0] - t) < z
      ? h > 0
        ? 2
        : 1
      : k(l[1] - e) < z
      ? h > 0
        ? 1
        : 0
      : h > 0
      ? 3
      : 2;
  }
  function o(l, h) {
    return c(l.x, h.x);
  }
  function c(l, h) {
    var u = r(l, 1),
      d = r(h, 1);
    return u !== d
      ? u - d
      : u === 0
      ? h[1] - l[1]
      : u === 1
      ? l[0] - h[0]
      : u === 2
      ? l[1] - h[1]
      : h[0] - l[0];
  }
  return function (l) {
    var h = l,
      u = Zs(),
      d,
      f,
      p,
      y,
      g,
      m,
      x,
      S,
      A,
      _,
      E,
      b = {
        point: R,
        lineStart: U,
        lineEnd: C,
        polygonStart: I,
        polygonEnd: v,
      };
    function R(T, N) {
      s(T, N) && h.point(T, N);
    }
    function M() {
      for (var T = 0, N = 0, D = f.length; N < D; ++N)
        for (
          var H = f[N],
            J = 1,
            te = H.length,
            q = H[0],
            ue,
            se,
            Ge = q[0],
            pe = q[1];
          J < te;
          ++J
        )
          (ue = Ge),
            (se = pe),
            (q = H[J]),
            (Ge = q[0]),
            (pe = q[1]),
            se <= n
              ? pe > n && (Ge - ue) * (n - se) > (pe - se) * (a - ue) && ++T
              : pe <= n && (Ge - ue) * (n - se) < (pe - se) * (a - ue) && --T;
      return T;
    }
    function I() {
      (h = u), (d = []), (f = []), (E = !0);
    }
    function v() {
      var T = M(),
        N = E && T,
        D = (d = $s(d)).length;
      (N || D) &&
        (l.polygonStart(),
        N && (l.lineStart(), i(null, null, 1, l), l.lineEnd()),
        D && ei(d, o, T, i, l),
        l.polygonEnd()),
        (h = l),
        (d = f = p = null);
    }
    function U() {
      (b.point = P), f && f.push((p = [])), (_ = !0), (A = !1), (x = S = NaN);
    }
    function C() {
      d && (P(y, g), m && A && u.rejoin(), d.push(u.result())),
        (b.point = R),
        A && h.lineEnd();
    }
    function P(T, N) {
      var D = s(T, N);
      if ((f && p.push([T, N]), _))
        (y = T),
          (g = N),
          (m = D),
          (_ = !1),
          D && (h.lineStart(), h.point(T, N));
      else if (D && A) h.point(T, N);
      else {
        var H = [
            (x = Math.max(ht, Math.min(Ce, x))),
            (S = Math.max(ht, Math.min(Ce, S))),
          ],
          J = [
            (T = Math.max(ht, Math.min(Ce, T))),
            (N = Math.max(ht, Math.min(Ce, N))),
          ];
        Go(H, J, a, e, t, n)
          ? (A || (h.lineStart(), h.point(H[0], H[1])),
            h.point(J[0], J[1]),
            D || h.lineEnd(),
            (E = !1))
          : D && (h.lineStart(), h.point(T, N), (E = !1));
      }
      (x = T), (S = N), (A = D);
    }
    return b;
  };
}
const Es = (a) => a;
var Me = 1 / 0,
  yt = Me,
  Be = -Me,
  xt = Be,
  Ho = {
    point: Jo,
    lineStart: Pe,
    lineEnd: Pe,
    polygonStart: Pe,
    polygonEnd: Pe,
    result: function () {
      var a = [
        [Me, yt],
        [Be, xt],
      ];
      return (Be = xt = -(yt = Me = 1 / 0)), a;
    },
  };
function Jo(a, e) {
  a < Me && (Me = a),
    a > Be && (Be = a),
    e < yt && (yt = e),
    e > xt && (xt = e);
}
const bs = Ho;
function Sn(a) {
  return function (e) {
    var t = new mn();
    for (var n in a) t[n] = a[n];
    return (t.stream = e), t;
  };
}
function mn() {}
mn.prototype = {
  constructor: mn,
  point: function (a, e) {
    this.stream.point(a, e);
  },
  sphere: function () {
    this.stream.sphere();
  },
  lineStart: function () {
    this.stream.lineStart();
  },
  lineEnd: function () {
    this.stream.lineEnd();
  },
  polygonStart: function () {
    this.stream.polygonStart();
  },
  polygonEnd: function () {
    this.stream.polygonEnd();
  },
};
function Mn(a, e, t) {
  var n = a.clipExtent && a.clipExtent();
  return (
    a.scale(150).translate([0, 0]),
    n != null && a.clipExtent(null),
    Oo(t, a.stream(bs)),
    e(bs.result()),
    n != null && a.clipExtent(n),
    a
  );
}
function ni(a, e, t) {
  return Mn(
    a,
    function (n) {
      var s = e[1][0] - e[0][0],
        i = e[1][1] - e[0][1],
        r = Math.min(s / (n[1][0] - n[0][0]), i / (n[1][1] - n[0][1])),
        o = +e[0][0] + (s - r * (n[1][0] + n[0][0])) / 2,
        c = +e[0][1] + (i - r * (n[1][1] + n[0][1])) / 2;
      a.scale(150 * r).translate([o, c]);
    },
    t
  );
}
function Vo(a, e, t) {
  return ni(a, [[0, 0], e], t);
}
function qo(a, e, t) {
  return Mn(
    a,
    function (n) {
      var s = +e,
        i = s / (n[1][0] - n[0][0]),
        r = (s - i * (n[1][0] + n[0][0])) / 2,
        o = -i * n[0][1];
      a.scale(150 * i).translate([r, o]);
    },
    t
  );
}
function Ko(a, e, t) {
  return Mn(
    a,
    function (n) {
      var s = +e,
        i = s / (n[1][1] - n[0][1]),
        r = -i * n[0][0],
        o = (s - i * (n[1][1] + n[0][1])) / 2;
      a.scale(150 * i).translate([r, o]);
    },
    t
  );
}
var vs = 16,
  Wo = F(30 * G);
function Rs(a, e) {
  return +e ? Xo(a, e) : jo(a);
}
function jo(a) {
  return Sn({
    point: function (e, t) {
      (e = a(e, t)), this.stream.point(e[0], e[1]);
    },
  });
}
function Xo(a, e) {
  function t(n, s, i, r, o, c, l, h, u, d, f, p, y, g) {
    var m = l - n,
      x = h - s,
      S = m * m + x * x;
    if (S > 4 * e && y--) {
      var A = r + d,
        _ = o + f,
        E = c + p,
        b = _t(A * A + _ * _ + E * E),
        R = Fe((E /= b)),
        M = k(k(E) - 1) < z || k(i - u) < z ? (i + u) / 2 : ke(_, A),
        I = a(M, R),
        v = I[0],
        U = I[1],
        C = v - n,
        P = U - s,
        T = x * C - m * P;
      ((T * T) / S > e ||
        k((m * C + x * P) / S - 0.5) > 0.3 ||
        r * d + o * f + c * p < Wo) &&
        (t(n, s, i, r, o, c, v, U, M, (A /= b), (_ /= b), E, y, g),
        g.point(v, U),
        t(v, U, M, A, _, E, l, h, u, d, f, p, y, g));
    }
  }
  return function (n) {
    var s,
      i,
      r,
      o,
      c,
      l,
      h,
      u,
      d,
      f,
      p,
      y,
      g = {
        point: m,
        lineStart: x,
        lineEnd: A,
        polygonStart: function () {
          n.polygonStart(), (g.lineStart = _);
        },
        polygonEnd: function () {
          n.polygonEnd(), (g.lineStart = x);
        },
      };
    function m(R, M) {
      (R = a(R, M)), n.point(R[0], R[1]);
    }
    function x() {
      (u = NaN), (g.point = S), n.lineStart();
    }
    function S(R, M) {
      var I = Se([R, M]),
        v = a(R, M);
      t(
        u,
        d,
        h,
        f,
        p,
        y,
        (u = v[0]),
        (d = v[1]),
        (h = R),
        (f = I[0]),
        (p = I[1]),
        (y = I[2]),
        vs,
        n
      ),
        n.point(u, d);
    }
    function A() {
      (g.point = m), n.lineEnd();
    }
    function _() {
      x(), (g.point = E), (g.lineEnd = b);
    }
    function E(R, M) {
      S((s = R), M), (i = u), (r = d), (o = f), (c = p), (l = y), (g.point = S);
    }
    function b() {
      t(u, d, h, f, p, y, i, r, s, o, c, l, vs, n), (g.lineEnd = A), A();
    }
    return g;
  };
}
var $o = Sn({
  point: function (a, e) {
    this.stream.point(a * G, e * G);
  },
});
function Yo(a) {
  return Sn({
    point: function (e, t) {
      var n = a(e, t);
      return this.stream.point(n[0], n[1]);
    },
  });
}
function Qo(a, e, t, n, s) {
  function i(r, o) {
    return (r *= n), (o *= s), [e + a * r, t - a * o];
  }
  return (
    (i.invert = function (r, o) {
      return [((r - e) / a) * n, ((t - o) / a) * s];
    }),
    i
  );
}
function Ns(a, e, t, n, s, i) {
  if (!i) return Qo(a, e, t, n, s);
  var r = F(i),
    o = B(i),
    c = r * a,
    l = o * a,
    h = r / a,
    u = o / a,
    d = (o * t - r * e) / a,
    f = (o * e + r * t) / a;
  function p(y, g) {
    return (y *= n), (g *= s), [c * y - l * g + e, t - l * y - c * g];
  }
  return (
    (p.invert = function (y, g) {
      return [n * (h * y - u * g + d), s * (f - u * y - h * g)];
    }),
    p
  );
}
function Zo(a) {
  return ea(function () {
    return a;
  })();
}
function ea(a) {
  var e,
    t = 150,
    n = 480,
    s = 250,
    i = 0,
    r = 0,
    o = 0,
    c = 0,
    l = 0,
    h,
    u = 0,
    d = 1,
    f = 1,
    p = null,
    y = _s,
    g = null,
    m,
    x,
    S,
    A = Es,
    _ = 0.5,
    E,
    b,
    R,
    M,
    I;
  function v(T) {
    return R(T[0] * G, T[1] * G);
  }
  function U(T) {
    return (T = R.invert(T[0], T[1])), T && [T[0] * X, T[1] * X];
  }
  (v.stream = function (T) {
    return M && I === T ? M : (M = $o(Yo(h)(y(E(A((I = T)))))));
  }),
    (v.preclip = function (T) {
      return arguments.length ? ((y = T), (p = void 0), P()) : y;
    }),
    (v.postclip = function (T) {
      return arguments.length ? ((A = T), (g = m = x = S = null), P()) : A;
    }),
    (v.clipAngle = function (T) {
      return arguments.length
        ? ((y = +T ? Bo((p = T * G)) : ((p = null), _s)), P())
        : p * X;
    }),
    (v.clipExtent = function (T) {
      return arguments.length
        ? ((A =
            T == null
              ? ((g = m = x = S = null), Es)
              : Uo(
                  (g = +T[0][0]),
                  (m = +T[0][1]),
                  (x = +T[1][0]),
                  (S = +T[1][1])
                )),
          P())
        : g == null
        ? null
        : [
            [g, m],
            [x, S],
          ];
    }),
    (v.scale = function (T) {
      return arguments.length ? ((t = +T), C()) : t;
    }),
    (v.translate = function (T) {
      return arguments.length ? ((n = +T[0]), (s = +T[1]), C()) : [n, s];
    }),
    (v.center = function (T) {
      return arguments.length
        ? ((i = (T[0] % 360) * G), (r = (T[1] % 360) * G), C())
        : [i * X, r * X];
    }),
    (v.rotate = function (T) {
      return arguments.length
        ? ((o = (T[0] % 360) * G),
          (c = (T[1] % 360) * G),
          (l = T.length > 2 ? (T[2] % 360) * G : 0),
          C())
        : [o * X, c * X, l * X];
    }),
    (v.angle = function (T) {
      return arguments.length ? ((u = (T % 360) * G), C()) : u * X;
    }),
    (v.reflectX = function (T) {
      return arguments.length ? ((d = T ? -1 : 1), C()) : d < 0;
    }),
    (v.reflectY = function (T) {
      return arguments.length ? ((f = T ? -1 : 1), C()) : f < 0;
    }),
    (v.precision = function (T) {
      return arguments.length ? ((E = Rs(b, (_ = T * T))), P()) : _t(_);
    }),
    (v.fitExtent = function (T, N) {
      return ni(v, T, N);
    }),
    (v.fitSize = function (T, N) {
      return Vo(v, T, N);
    }),
    (v.fitWidth = function (T, N) {
      return qo(v, T, N);
    }),
    (v.fitHeight = function (T, N) {
      return Ko(v, T, N);
    });
  function C() {
    var T = Ns(t, 0, 0, d, f, u).apply(null, e(i, r)),
      N = Ns(t, n - T[0], s - T[1], d, f, u);
    return (
      (h = Qs(o, c, l)), (b = pn(e, N)), (R = pn(h, b)), (E = Rs(b, _)), P()
    );
  }
  function P() {
    return (M = I = null), v;
  }
  return function () {
    return (e = a.apply(this, arguments)), (v.invert = e.invert && U), C();
  };
}
function _n(a, e) {
  return [a, bo(Ro((K + e) / 2))];
}
_n.invert = function (a, e) {
  return [a, 2 * Ys(Eo(e)) - K];
};
function ta() {
  return na(_n).scale(961 / Z);
}
function na(a) {
  var e = Zo(a),
    t = e.center,
    n = e.scale,
    s = e.translate,
    i = e.clipExtent,
    r = null,
    o,
    c,
    l;
  (e.scale = function (u) {
    return arguments.length ? (n(u), h()) : n();
  }),
    (e.translate = function (u) {
      return arguments.length ? (s(u), h()) : s();
    }),
    (e.center = function (u) {
      return arguments.length ? (t(u), h()) : t();
    }),
    (e.clipExtent = function (u) {
      return arguments.length
        ? (u == null
            ? (r = o = c = l = null)
            : ((r = +u[0][0]), (o = +u[0][1]), (c = +u[1][0]), (l = +u[1][1])),
          h())
        : r == null
        ? null
        : [
            [r, o],
            [c, l],
          ];
    });
  function h() {
    var u = L * n(),
      d = e(Lo(e.rotate()).invert([0, 0]));
    return i(
      r == null
        ? [
            [d[0] - u, d[1] - u],
            [d[0] + u, d[1] + u],
          ]
        : a === _n
        ? [
            [Math.max(d[0] - u, r), o],
            [Math.min(d[0] + u, c), l],
          ]
        : [
            [r, Math.max(d[1] - u, o)],
            [c, Math.min(d[1] + u, l)],
          ]
    );
  }
  return h();
}
class ua extends wt {
  constructor(t, n = {}) {
    super();
    En(this, "geoProjection", (t) => {
      let {
        geoProjectionCenter: n,
        geoProjectionScale: s,
        geoProjectionTranslate: i,
      } = this.config;
      return ta().center(n).scale(s).translate(i)(t);
    });
    let s = {
      geoProjectionCenter: [0, 0],
      geoProjectionScale: 120,
      geoProjectionTranslate: [0, 0],
      isOrthographic: !1,
    };
    (this.config = Object.assign({}, s, n)),
      (this.canvas = t),
      (this.scene = new Hi()),
      (this.sizes = new Vi(this)),
      (this.time = new qi(this)),
      (this.camera = new To(this, {
        isOrthographic: this.config.isOrthographic,
      })),
      (this.renderer = new Pr(this)),
      this.sizes.on("resize", () => {
        this.resize();
      }),
      this.time.on("tick", (i) => {
        this.update(i);
      });
  }
  setAxesHelper(t = 250) {
    if (!t) return !1;
    let n = new Ji(t);
    this.scene.add(n);
  }
  resize() {
    this.camera.resize(), this.renderer.resize();
  }
  update(t) {
    this.camera.update(t), this.renderer.update(t);
  }
  destroy() {
    this.sizes.destroy(),
      this.time.destroy(),
      this.camera.destroy(),
      this.renderer.destroy(),
      this.scene.traverse((t) => {
        if (t instanceof ks) {
          t.geometry.dispose();
          for (const n in t.material) {
            const s = t.material[n];
            s && typeof s.dispose == "function" && s.dispose();
          }
        }
      }),
      this.canvas.parentNode.removeChild(this.canvas);
  }
}
export {
  ha as E,
  Gr as F,
  ua as M,
  la as N,
  oa as R,
  w as V,
  Nr as a,
  Yr as b,
  aa as c,
  ta as g,
  ra as m,
  ca as p,
};
