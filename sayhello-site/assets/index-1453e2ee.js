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
  aK as ze,
  F as ut,
  C as le,
  I as ne,
  aL as ai,
  P as ci,
  h as hi,
  M as Ie,
  m as fe,
  aM as re,
  a as Ls,
  y as dt,
  V as we,
  aN as li,
  aO as ui,
  O as Is,
  a5 as Ps,
  aP as di,
  aQ as fi,
  _ as Cs,
  aR as zs,
  R as on,
  p as pi,
  aS as Et,
  L as gi,
  d as Ds,
  D as mi,
  aT as yi,
  aU as xi,
  b as ks,
  a9 as wi,
  ac as Ai,
  f as Ti,
  t as Si,
  G as bt,
  w as an,
  ar as Mi,
  aV as Fs,
  aW as _i,
  aX as Ei,
  aY as bi,
  aZ as Bs,
  at as bn,
  ah as Gs,
  N as vi,
  a_ as Ri,
  a$ as Ni,
  b0 as Oi,
  b1 as Li,
  b2 as Ii,
  b3 as Pi,
  b4 as Ci,
  al as zi,
  u as vn,
  b5 as Rn,
  b6 as Nn,
  b7 as On,
  ai as Di,
  an as ki,
  b8 as Fi,
  b9 as Bi,
  aB as Gi,
  aE as Ui,
  aA as Hi,
  aD as Ji,
} from "./OrbitControls-9c9ee6bc.js";
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
class Ki extends xn {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (t) {
        return new Yi(t);
      }),
      this.register(function (t) {
        return new or(t);
      }),
      this.register(function (t) {
        return new ar(t);
      }),
      this.register(function (t) {
        return new cr(t);
      }),
      this.register(function (t) {
        return new Zi(t);
      }),
      this.register(function (t) {
        return new er(t);
      }),
      this.register(function (t) {
        return new tr(t);
      }),
      this.register(function (t) {
        return new nr(t);
      }),
      this.register(function (t) {
        return new $i(t);
      }),
      this.register(function (t) {
        return new sr(t);
      }),
      this.register(function (t) {
        return new Qi(t);
      }),
      this.register(function (t) {
        return new rr(t);
      }),
      this.register(function (t) {
        return new ir(t);
      }),
      this.register(function (t) {
        return new ji(t);
      }),
      this.register(function (t) {
        return new hr(t);
      }),
      this.register(function (t) {
        return new lr(t);
      });
  }
  load(e, t, n, s) {
    const i = this;
    let r;
    if (this.resourcePath !== "") r = this.resourcePath;
    else if (this.path !== "") {
      const l = ze.extractUrlBase(e);
      r = ze.resolveURL(l, this.path);
    } else r = ze.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function (l) {
        s ? s(l) : console.error(l),
          i.manager.itemError(e),
          i.manager.itemEnd(e);
      },
      c = new ut(this.manager);
    c.setPath(this.path),
      c.setResponseType("arraybuffer"),
      c.setRequestHeader(this.requestHeader),
      c.setWithCredentials(this.withCredentials),
      c.load(
        e,
        function (l) {
          try {
            i.parse(
              l,
              r,
              function (h) {
                t(h), i.manager.itemEnd(e);
              },
              o
            );
          } catch (h) {
            o(h);
          }
        },
        n,
        o
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, s) {
    let i;
    const r = {},
      o = {},
      c = new TextDecoder();
    if (typeof e == "string") i = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (c.decode(new Uint8Array(e, 0, 4)) === Us) {
        try {
          r[O.KHR_BINARY_GLTF] = new ur(e);
        } catch (u) {
          s && s(u);
          return;
        }
        i = JSON.parse(r[O.KHR_BINARY_GLTF].content);
      } else i = JSON.parse(c.decode(e));
    else i = e;
    if (i.asset === void 0 || i.asset.version[0] < 2) {
      s &&
        s(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
          )
        );
      return;
    }
    const l = new _r(i, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    l.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](l);
      u.name ||
        console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
        (o[u.name] = u),
        (r[u.name] = !0);
    }
    if (i.extensionsUsed)
      for (let h = 0; h < i.extensionsUsed.length; ++h) {
        const u = i.extensionsUsed[h],
          d = i.extensionsRequired || [];
        switch (u) {
          case O.KHR_MATERIALS_UNLIT:
            r[u] = new Xi();
            break;
          case O.KHR_DRACO_MESH_COMPRESSION:
            r[u] = new dr(i, this.dracoLoader);
            break;
          case O.KHR_TEXTURE_TRANSFORM:
            r[u] = new fr();
            break;
          case O.KHR_MESH_QUANTIZATION:
            r[u] = new pr();
            break;
          default:
            d.indexOf(u) >= 0 &&
              o[u] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    l.setExtensions(r), l.setPlugins(o), l.parse(n, s);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (s, i) {
      n.parse(e, t, s, i);
    });
  }
}
function Wi() {
  let a = {};
  return {
    get: function (e) {
      return a[e];
    },
    add: function (e, t) {
      a[e] = t;
    },
    remove: function (e) {
      delete a[e];
    },
    removeAll: function () {
      a = {};
    },
  };
}
const O = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class ji {
  constructor(e) {
    (this.parser = e),
      (this.name = O.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let n = 0, s = t.length; n < s; n++) {
      const i = t[n];
      i.extensions &&
        i.extensions[this.name] &&
        i.extensions[this.name].light !== void 0 &&
        e._addNodeRef(this.cache, i.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      n = "light:" + e;
    let s = t.cache.get(n);
    if (s) return s;
    const i = t.json,
      c = (((i.extensions && i.extensions[this.name]) || {}).lights || [])[e];
    let l;
    const h = new le(16777215);
    c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], ne);
    const u = c.range !== void 0 ? c.range : 0;
    switch (c.type) {
      case "directional":
        (l = new hi(h)), l.target.position.set(0, 0, -1), l.add(l.target);
        break;
      case "point":
        (l = new ci(h)), (l.distance = u);
        break;
      case "spot":
        (l = new ai(h)),
          (l.distance = u),
          (c.spot = c.spot || {}),
          (c.spot.innerConeAngle =
            c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0),
          (c.spot.outerConeAngle =
            c.spot.outerConeAngle !== void 0
              ? c.spot.outerConeAngle
              : Math.PI / 4),
          (l.angle = c.spot.outerConeAngle),
          (l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle),
          l.target.position.set(0, 0, -1),
          l.add(l.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type);
    }
    return (
      l.position.set(0, 0, 0),
      (l.decay = 2),
      he(l, c),
      c.intensity !== void 0 && (l.intensity = c.intensity),
      (l.name = t.createUniqueName(c.name || "light_" + e)),
      (s = Promise.resolve(l)),
      t.cache.add(n, s),
      s
    );
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this,
      n = this.parser,
      i = n.json.nodes[e],
      o = ((i.extensions && i.extensions[this.name]) || {}).light;
    return o === void 0
      ? null
      : this._loadLight(o).then(function (c) {
          return n._getNodeRef(t.cache, o, c);
        });
  }
}
class Xi {
  constructor() {
    this.name = O.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Ie;
  }
  extendParams(e, t, n) {
    const s = [];
    (e.color = new le(1, 1, 1)), (e.opacity = 1);
    const i = t.pbrMetallicRoughness;
    if (i) {
      if (Array.isArray(i.baseColorFactor)) {
        const r = i.baseColorFactor;
        e.color.setRGB(r[0], r[1], r[2], ne), (e.opacity = r[3]);
      }
      i.baseColorTexture !== void 0 &&
        s.push(n.assignTexture(e, "map", i.baseColorTexture, fe));
    }
    return Promise.all(s);
  }
}
class $i {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = s.extensions[this.name].emissiveStrength;
    return i !== void 0 && (t.emissiveIntensity = i), Promise.resolve();
  }
}
class Yi {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : re;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = [],
      r = s.extensions[this.name];
    if (
      (r.clearcoatFactor !== void 0 && (t.clearcoat = r.clearcoatFactor),
      r.clearcoatTexture !== void 0 &&
        i.push(n.assignTexture(t, "clearcoatMap", r.clearcoatTexture)),
      r.clearcoatRoughnessFactor !== void 0 &&
        (t.clearcoatRoughness = r.clearcoatRoughnessFactor),
      r.clearcoatRoughnessTexture !== void 0 &&
        i.push(
          n.assignTexture(
            t,
            "clearcoatRoughnessMap",
            r.clearcoatRoughnessTexture
          )
        ),
      r.clearcoatNormalTexture !== void 0 &&
        (i.push(
          n.assignTexture(t, "clearcoatNormalMap", r.clearcoatNormalTexture)
        ),
        r.clearcoatNormalTexture.scale !== void 0))
    ) {
      const o = r.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Ls(o, o);
    }
    return Promise.all(i);
  }
}
class Qi {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : re;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = [],
      r = s.extensions[this.name];
    return (
      r.iridescenceFactor !== void 0 && (t.iridescence = r.iridescenceFactor),
      r.iridescenceTexture !== void 0 &&
        i.push(n.assignTexture(t, "iridescenceMap", r.iridescenceTexture)),
      r.iridescenceIor !== void 0 && (t.iridescenceIOR = r.iridescenceIor),
      t.iridescenceThicknessRange === void 0 &&
        (t.iridescenceThicknessRange = [100, 400]),
      r.iridescenceThicknessMinimum !== void 0 &&
        (t.iridescenceThicknessRange[0] = r.iridescenceThicknessMinimum),
      r.iridescenceThicknessMaximum !== void 0 &&
        (t.iridescenceThicknessRange[1] = r.iridescenceThicknessMaximum),
      r.iridescenceThicknessTexture !== void 0 &&
        i.push(
          n.assignTexture(
            t,
            "iridescenceThicknessMap",
            r.iridescenceThicknessTexture
          )
        ),
      Promise.all(i)
    );
  }
}
class Zi {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : re;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = [];
    (t.sheenColor = new le(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    const r = s.extensions[this.name];
    if (r.sheenColorFactor !== void 0) {
      const o = r.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], ne);
    }
    return (
      r.sheenRoughnessFactor !== void 0 &&
        (t.sheenRoughness = r.sheenRoughnessFactor),
      r.sheenColorTexture !== void 0 &&
        i.push(n.assignTexture(t, "sheenColorMap", r.sheenColorTexture, fe)),
      r.sheenRoughnessTexture !== void 0 &&
        i.push(
          n.assignTexture(t, "sheenRoughnessMap", r.sheenRoughnessTexture)
        ),
      Promise.all(i)
    );
  }
}
class er {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : re;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = [],
      r = s.extensions[this.name];
    return (
      r.transmissionFactor !== void 0 &&
        (t.transmission = r.transmissionFactor),
      r.transmissionTexture !== void 0 &&
        i.push(n.assignTexture(t, "transmissionMap", r.transmissionTexture)),
      Promise.all(i)
    );
  }
}
class tr {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : re;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = [],
      r = s.extensions[this.name];
    (t.thickness = r.thicknessFactor !== void 0 ? r.thicknessFactor : 0),
      r.thicknessTexture !== void 0 &&
        i.push(n.assignTexture(t, "thicknessMap", r.thicknessTexture)),
      (t.attenuationDistance = r.attenuationDistance || 1 / 0);
    const o = r.attenuationColor || [1, 1, 1];
    return (
      (t.attenuationColor = new le().setRGB(o[0], o[1], o[2], ne)),
      Promise.all(i)
    );
  }
}
class nr {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : re;
  }
  extendMaterialParams(e, t) {
    const s = this.parser.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = s.extensions[this.name];
    return (t.ior = i.ior !== void 0 ? i.ior : 1.5), Promise.resolve();
  }
}
class sr {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : re;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = [],
      r = s.extensions[this.name];
    (t.specularIntensity = r.specularFactor !== void 0 ? r.specularFactor : 1),
      r.specularTexture !== void 0 &&
        i.push(n.assignTexture(t, "specularIntensityMap", r.specularTexture));
    const o = r.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new le().setRGB(o[0], o[1], o[2], ne)),
      r.specularColorTexture !== void 0 &&
        i.push(
          n.assignTexture(t, "specularColorMap", r.specularColorTexture, fe)
        ),
      Promise.all(i)
    );
  }
}
class ir {
  constructor(e) {
    (this.parser = e), (this.name = O.EXT_MATERIALS_BUMP);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : re;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = [],
      r = s.extensions[this.name];
    return (
      (t.bumpScale = r.bumpFactor !== void 0 ? r.bumpFactor : 1),
      r.bumpTexture !== void 0 &&
        i.push(n.assignTexture(t, "bumpMap", r.bumpTexture)),
      Promise.all(i)
    );
  }
}
class rr {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_MATERIALS_ANISOTROPY);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : re;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      s = n.json.materials[e];
    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
    const i = [],
      r = s.extensions[this.name];
    return (
      r.anisotropyStrength !== void 0 && (t.anisotropy = r.anisotropyStrength),
      r.anisotropyRotation !== void 0 &&
        (t.anisotropyRotation = r.anisotropyRotation),
      r.anisotropyTexture !== void 0 &&
        i.push(n.assignTexture(t, "anisotropyMap", r.anisotropyTexture)),
      Promise.all(i)
    );
  }
}
class or {
  constructor(e) {
    (this.parser = e), (this.name = O.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const t = this.parser,
      n = t.json,
      s = n.textures[e];
    if (!s.extensions || !s.extensions[this.name]) return null;
    const i = s.extensions[this.name],
      r = t.options.ktx2Loader;
    if (!r) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
        );
      return null;
    }
    return t.loadTextureImage(e, i.source, r);
  }
}
class ar {
  constructor(e) {
    (this.parser = e),
      (this.name = O.EXT_TEXTURE_WEBP),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      s = n.json,
      i = s.textures[e];
    if (!i.extensions || !i.extensions[t]) return null;
    const r = i.extensions[t],
      o = s.images[r.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function (l) {
      if (l) return n.loadTextureImage(e, r.source, c);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: WebP required by asset but unsupported."
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class cr {
  constructor(e) {
    (this.parser = e),
      (this.name = O.EXT_TEXTURE_AVIF),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      s = n.json,
      i = s.textures[e];
    if (!i.extensions || !i.extensions[t]) return null;
    const r = i.extensions[t],
      o = s.images[r.source];
    let c = n.textureLoader;
    if (o.uri) {
      const l = n.options.manager.getHandler(o.uri);
      l !== null && (c = l);
    }
    return this.detectSupport().then(function (l) {
      if (l) return n.loadTextureImage(e, r.source, c);
      if (s.extensionsRequired && s.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: AVIF required by asset but unsupported."
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class hr {
  constructor(e) {
    (this.name = O.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    const t = this.parser.json,
      n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const s = n.extensions[this.name],
        i = this.parser.getDependency("buffer", s.buffer),
        r = this.parser.options.meshoptDecoder;
      if (!r || !r.supported) {
        if (
          t.extensionsRequired &&
          t.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
          );
        return null;
      }
      return i.then(function (o) {
        const c = s.byteOffset || 0,
          l = s.byteLength || 0,
          h = s.count,
          u = s.byteStride,
          d = new Uint8Array(o, c, l);
        return r.decodeGltfBufferAsync
          ? r
              .decodeGltfBufferAsync(h, u, d, s.mode, s.filter)
              .then(function (f) {
                return f.buffer;
              })
          : r.ready.then(function () {
              const f = new ArrayBuffer(h * u);
              return (
                r.decodeGltfBuffer(
                  new Uint8Array(f),
                  h,
                  u,
                  d,
                  s.mode,
                  s.filter
                ),
                f
              );
            });
      });
    } else return null;
  }
}
class lr {
  constructor(e) {
    (this.name = O.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const s = t.meshes[n.mesh];
    for (const l of s.primitives)
      if (
        l.mode !== Q.TRIANGLES &&
        l.mode !== Q.TRIANGLE_STRIP &&
        l.mode !== Q.TRIANGLE_FAN &&
        l.mode !== void 0
      )
        return null;
    const r = n.extensions[this.name].attributes,
      o = [],
      c = {};
    for (const l in r)
      o.push(
        this.parser
          .getDependency("accessor", r[l])
          .then((h) => ((c[l] = h), c[l]))
      );
    return o.length < 1
      ? null
      : (o.push(this.parser.createNodeMesh(e)),
        Promise.all(o).then((l) => {
          const h = l.pop(),
            u = h.isGroup ? h.children : [h],
            d = l[0].count,
            f = [];
          for (const p of u) {
            const y = new dt(),
              g = new we(),
              m = new Gs(),
              x = new we(1, 1, 1),
              S = new li(p.geometry, p.material, d);
            for (let A = 0; A < d; A++)
              c.TRANSLATION && g.fromBufferAttribute(c.TRANSLATION, A),
                c.ROTATION && m.fromBufferAttribute(c.ROTATION, A),
                c.SCALE && x.fromBufferAttribute(c.SCALE, A),
                S.setMatrixAt(A, y.compose(g, m, x));
            for (const A in c)
              if (A === "_COLOR_0") {
                const _ = c[A];
                S.instanceColor = new ui(_.array, _.itemSize, _.normalized);
              } else
                A !== "TRANSLATION" &&
                  A !== "ROTATION" &&
                  A !== "SCALE" &&
                  p.geometry.setAttribute(A, c[A]);
            Is.prototype.copy.call(S, p),
              this.parser.assignFinalMaterial(S),
              f.push(S);
          }
          return h.isGroup ? (h.clear(), h.add(...f), h) : f[0];
        }));
  }
}
const Us = "glTF",
  _e = 12,
  Pn = { JSON: 1313821514, BIN: 5130562 };
class ur {
  constructor(e) {
    (this.name = O.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const t = new DataView(e, 0, _e),
      n = new TextDecoder();
    if (
      ((this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== Us)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const s = this.header.length - _e,
      i = new DataView(e, _e);
    let r = 0;
    for (; r < s; ) {
      const o = i.getUint32(r, !0);
      r += 4;
      const c = i.getUint32(r, !0);
      if (((r += 4), c === Pn.JSON)) {
        const l = new Uint8Array(e, _e + r, o);
        this.content = n.decode(l);
      } else if (c === Pn.BIN) {
        const l = _e + r;
        this.body = e.slice(l, l + o);
      }
      r += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class dr {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = O.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json,
      s = this.dracoLoader,
      i = e.extensions[this.name].bufferView,
      r = e.extensions[this.name].attributes,
      o = {},
      c = {},
      l = {};
    for (const h in r) {
      const u = cn[h] || h.toLowerCase();
      o[u] = r[h];
    }
    for (const h in e.attributes) {
      const u = cn[h] || h.toLowerCase();
      if (r[h] !== void 0) {
        const d = n.accessors[e.attributes[h]],
          f = Te[d.componentType];
        (l[u] = f.name), (c[u] = d.normalized === !0);
      }
    }
    return t.getDependency("bufferView", i).then(function (h) {
      return new Promise(function (u, d) {
        s.decodeDracoFile(
          h,
          function (f) {
            for (const p in f.attributes) {
              const y = f.attributes[p],
                g = c[p];
              g !== void 0 && (y.normalized = g);
            }
            u(f);
          },
          o,
          l,
          ne,
          d
        );
      });
    });
  }
}
class fr {
  constructor() {
    this.name = O.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      ((t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0) ||
        ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class pr {
  constructor() {
    this.name = O.KHR_MESH_QUANTIZATION;
  }
}
class Hs extends Fi {
  constructor(e, t, n, s) {
    super(e, t, n, s);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      s = this.valueSize,
      i = e * s * 3 + s;
    for (let r = 0; r !== s; r++) t[r] = n[i + r];
    return t;
  }
  interpolate_(e, t, n, s) {
    const i = this.resultBuffer,
      r = this.sampleValues,
      o = this.valueSize,
      c = o * 2,
      l = o * 3,
      h = s - t,
      u = (n - t) / h,
      d = u * u,
      f = d * u,
      p = e * l,
      y = p - l,
      g = -2 * f + 3 * d,
      m = f - d,
      x = 1 - g,
      S = m - d + u;
    for (let A = 0; A !== o; A++) {
      const _ = r[y + A + o],
        E = r[y + A + c] * h,
        b = r[p + A + o],
        R = r[p + A] * h;
      i[A] = x * _ + S * E + g * b + m * R;
    }
    return i;
  }
}
const gr = new Gs();
class mr extends Hs {
  interpolate_(e, t, n, s) {
    const i = super.interpolate_(e, t, n, s);
    return gr.fromArray(i).normalize().toArray(i), i;
  }
}
const Q = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  Te = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Cn = { 9728: vi, 9729: Cs, 9984: Ri, 9985: Ni, 9986: Oi, 9987: zs },
  zn = { 33071: Li, 33648: Ii, 10497: on },
  vt = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  cn = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  oe = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  yr = { CUBICSPLINE: void 0, LINEAR: Bs, STEP: Pi },
  Rt = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function xr(a) {
  return (
    a.DefaultMaterial === void 0 &&
      (a.DefaultMaterial = new Ds({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: Ci,
      })),
    a.DefaultMaterial
  );
}
function de(a, e, t) {
  for (const n in t.extensions)
    a[n] === void 0 &&
      ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
      (e.userData.gltfExtensions[n] = t.extensions[n]));
}
function he(a, e) {
  e.extras !== void 0 &&
    (typeof e.extras == "object"
      ? Object.assign(a.userData, e.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras
        ));
}
function wr(a, e, t) {
  let n = !1,
    s = !1,
    i = !1;
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (
      (u.POSITION !== void 0 && (n = !0),
      u.NORMAL !== void 0 && (s = !0),
      u.COLOR_0 !== void 0 && (i = !0),
      n && s && i)
    )
      break;
  }
  if (!n && !s && !i) return Promise.resolve(a);
  const r = [],
    o = [],
    c = [];
  for (let l = 0, h = e.length; l < h; l++) {
    const u = e[l];
    if (n) {
      const d =
        u.POSITION !== void 0
          ? t.getDependency("accessor", u.POSITION)
          : a.attributes.position;
      r.push(d);
    }
    if (s) {
      const d =
        u.NORMAL !== void 0
          ? t.getDependency("accessor", u.NORMAL)
          : a.attributes.normal;
      o.push(d);
    }
    if (i) {
      const d =
        u.COLOR_0 !== void 0
          ? t.getDependency("accessor", u.COLOR_0)
          : a.attributes.color;
      c.push(d);
    }
  }
  return Promise.all([Promise.all(r), Promise.all(o), Promise.all(c)]).then(
    function (l) {
      const h = l[0],
        u = l[1],
        d = l[2];
      return (
        n && (a.morphAttributes.position = h),
        s && (a.morphAttributes.normal = u),
        i && (a.morphAttributes.color = d),
        (a.morphTargetsRelative = !0),
        a
      );
    }
  );
}
function Ar(a, e) {
  if ((a.updateMorphTargets(), e.weights !== void 0))
    for (let t = 0, n = e.weights.length; t < n; t++)
      a.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (a.morphTargetInfluences.length === t.length) {
      a.morphTargetDictionary = {};
      for (let n = 0, s = t.length; n < s; n++)
        a.morphTargetDictionary[t[n]] = n;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
      );
  }
}
function Tr(a) {
  let e;
  const t = a.extensions && a.extensions[O.KHR_DRACO_MESH_COMPRESSION];
  if (
    (t
      ? (e = "draco:" + t.bufferView + ":" + t.indices + ":" + Nt(t.attributes))
      : (e = a.indices + ":" + Nt(a.attributes) + ":" + a.mode),
    a.targets !== void 0)
  )
    for (let n = 0, s = a.targets.length; n < s; n++)
      e += ":" + Nt(a.targets[n]);
  return e;
}
function Nt(a) {
  let e = "";
  const t = Object.keys(a).sort();
  for (let n = 0, s = t.length; n < s; n++) e += t[n] + ":" + a[t[n]] + ";";
  return e;
}
function hn(a) {
  switch (a) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}
function Sr(a) {
  return a.search(/\.jpe?g($|\?)/i) > 0 || a.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : a.search(/\.webp($|\?)/i) > 0 || a.search(/^data\:image\/webp/) === 0
    ? "image/webp"
    : "image/png";
}
const Mr = new dt();
class _r {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new Wi()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    let n = !1,
      s = !1,
      i = -1;
    typeof navigator < "u" &&
      ((n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0),
      (s = navigator.userAgent.indexOf("Firefox") > -1),
      (i = s ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1)),
      typeof createImageBitmap > "u" || n || (s && i < 98)
        ? (this.textureLoader = new Ps(this.options.manager))
        : (this.textureLoader = new di(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new ut(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this,
      s = this.json,
      i = this.extensions;
    this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (r) {
        return r._markDefs && r._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (r) {
          return r.beforeRoot && r.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([
            n.getDependencies("scene"),
            n.getDependencies("animation"),
            n.getDependencies("camera"),
          ]);
        })
        .then(function (r) {
          const o = {
            scene: r[0][s.scene || 0],
            scenes: r[0],
            animations: r[1],
            cameras: r[2],
            asset: s.asset,
            parser: n,
            userData: {},
          };
          return (
            de(i, o, s),
            he(o, s),
            Promise.all(
              n._invokeAll(function (c) {
                return c.afterRoot && c.afterRoot(o);
              })
            ).then(function () {
              e(o);
            })
          );
        })
        .catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      n = this.json.meshes || [];
    for (let s = 0, i = t.length; s < i; s++) {
      const r = t[s].joints;
      for (let o = 0, c = r.length; o < c; o++) e[r[o]].isBone = !0;
    }
    for (let s = 0, i = e.length; s < i; s++) {
      const r = e[s];
      r.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, r.mesh),
        r.skin !== void 0 && (n[r.mesh].isSkinnedMesh = !0)),
        r.camera !== void 0 && this._addNodeRef(this.cameraCache, r.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 &&
      (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const s = n.clone(),
      i = (r, o) => {
        const c = this.associations.get(r);
        c != null && this.associations.set(o, c);
        for (const [l, h] of r.children.entries()) i(h, o.children[l]);
      };
    return i(n, s), (s.name += "_instance_" + e.uses[t]++), s;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const s = e(t[n]);
      if (s) return s;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const i = e(t[s]);
      i && n.push(i);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let s = this.cache.get(n);
    if (!s) {
      switch (e) {
        case "scene":
          s = this.loadScene(t);
          break;
        case "node":
          s = this._invokeOne(function (i) {
            return i.loadNode && i.loadNode(t);
          });
          break;
        case "mesh":
          s = this._invokeOne(function (i) {
            return i.loadMesh && i.loadMesh(t);
          });
          break;
        case "accessor":
          s = this.loadAccessor(t);
          break;
        case "bufferView":
          s = this._invokeOne(function (i) {
            return i.loadBufferView && i.loadBufferView(t);
          });
          break;
        case "buffer":
          s = this.loadBuffer(t);
          break;
        case "material":
          s = this._invokeOne(function (i) {
            return i.loadMaterial && i.loadMaterial(t);
          });
          break;
        case "texture":
          s = this._invokeOne(function (i) {
            return i.loadTexture && i.loadTexture(t);
          });
          break;
        case "skin":
          s = this.loadSkin(t);
          break;
        case "animation":
          s = this._invokeOne(function (i) {
            return i.loadAnimation && i.loadAnimation(t);
          });
          break;
        case "camera":
          s = this.loadCamera(t);
          break;
        default:
          if (
            ((s = this._invokeOne(function (i) {
              return i != this && i.getDependency && i.getDependency(e, t);
            })),
            !s)
          )
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, s);
    }
    return s;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this,
        s = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      (t = Promise.all(
        s.map(function (i, r) {
          return n.getDependency(e, r);
        })
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
      );
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[O.KHR_BINARY_GLTF].body);
    const s = this.options;
    return new Promise(function (i, r) {
      n.load(ze.resolveURL(t.uri, s.path), i, void 0, function () {
        r(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')
        );
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (n) {
      const s = t.byteLength || 0,
        i = t.byteOffset || 0;
      return n.slice(i, i + s);
    });
  }
  loadAccessor(e) {
    const t = this,
      n = this.json,
      s = this.json.accessors[e];
    if (s.bufferView === void 0 && s.sparse === void 0) {
      const r = vt[s.type],
        o = Te[s.componentType],
        c = s.normalized === !0,
        l = new o(s.count * r);
      return Promise.resolve(new Ae(l, r, c));
    }
    const i = [];
    return (
      s.bufferView !== void 0
        ? i.push(this.getDependency("bufferView", s.bufferView))
        : i.push(null),
      s.sparse !== void 0 &&
        (i.push(this.getDependency("bufferView", s.sparse.indices.bufferView)),
        i.push(this.getDependency("bufferView", s.sparse.values.bufferView))),
      Promise.all(i).then(function (r) {
        const o = r[0],
          c = vt[s.type],
          l = Te[s.componentType],
          h = l.BYTES_PER_ELEMENT,
          u = h * c,
          d = s.byteOffset || 0,
          f =
            s.bufferView !== void 0
              ? n.bufferViews[s.bufferView].byteStride
              : void 0,
          p = s.normalized === !0;
        let y, g;
        if (f && f !== u) {
          const m = Math.floor(d / f),
            x =
              "InterleavedBuffer:" +
              s.bufferView +
              ":" +
              s.componentType +
              ":" +
              m +
              ":" +
              s.count;
          let S = t.cache.get(x);
          S ||
            ((y = new l(o, m * f, (s.count * f) / h)),
            (S = new fi(y, f / h)),
            t.cache.add(x, S)),
            (g = new zi(S, c, (d % f) / h, p));
        } else o === null ? (y = new l(s.count * c)) : (y = new l(o, d, s.count * c)), (g = new Ae(y, c, p));
        if (s.sparse !== void 0) {
          const m = vt.SCALAR,
            x = Te[s.sparse.indices.componentType],
            S = s.sparse.indices.byteOffset || 0,
            A = s.sparse.values.byteOffset || 0,
            _ = new x(r[1], S, s.sparse.count * m),
            E = new l(r[2], A, s.sparse.count * c);
          o !== null && (g = new Ae(g.array.slice(), g.itemSize, g.normalized));
          for (let b = 0, R = _.length; b < R; b++) {
            const M = _[b];
            if (
              (g.setX(M, E[b * c]),
              c >= 2 && g.setY(M, E[b * c + 1]),
              c >= 3 && g.setZ(M, E[b * c + 2]),
              c >= 4 && g.setW(M, E[b * c + 3]),
              c >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
              );
          }
        }
        return g;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      n = this.options,
      i = t.textures[e].source,
      r = t.images[i];
    let o = this.textureLoader;
    if (r.uri) {
      const c = n.manager.getHandler(r.uri);
      c !== null && (o = c);
    }
    return this.loadTextureImage(e, i, o);
  }
  loadTextureImage(e, t, n) {
    const s = this,
      i = this.json,
      r = i.textures[e],
      o = i.images[t],
      c = (o.uri || o.bufferView) + ":" + r.sampler;
    if (this.textureCache[c]) return this.textureCache[c];
    const l = this.loadImageSource(t, n)
      .then(function (h) {
        (h.flipY = !1),
          (h.name = r.name || o.name || ""),
          h.name === "" &&
            typeof o.uri == "string" &&
            o.uri.startsWith("data:image/") === !1 &&
            (h.name = o.uri);
        const d = (i.samplers || {})[r.sampler] || {};
        return (
          (h.magFilter = Cn[d.magFilter] || Cs),
          (h.minFilter = Cn[d.minFilter] || zs),
          (h.wrapS = zn[d.wrapS] || on),
          (h.wrapT = zn[d.wrapT] || on),
          s.associations.set(h, { textures: e }),
          h
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[c] = l), l;
  }
  loadImageSource(e, t) {
    const n = this,
      s = this.json,
      i = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const r = s.images[e],
      o = self.URL || self.webkitURL;
    let c = r.uri || "",
      l = !1;
    if (r.bufferView !== void 0)
      c = n.getDependency("bufferView", r.bufferView).then(function (u) {
        l = !0;
        const d = new Blob([u], { type: r.mimeType });
        return (c = o.createObjectURL(d)), c;
      });
    else if (r.uri === void 0)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
      );
    const h = Promise.resolve(c)
      .then(function (u) {
        return new Promise(function (d, f) {
          let p = d;
          t.isImageBitmapLoader === !0 &&
            (p = function (y) {
              const g = new vn(y);
              (g.needsUpdate = !0), d(g);
            }),
            t.load(ze.resolveURL(u, i.path), p, void 0, f);
        });
      })
      .then(function (u) {
        return (
          l === !0 && o.revokeObjectURL(c),
          (u.userData.mimeType = r.mimeType || Sr(r.uri)),
          u
        );
      })
      .catch(function (u) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", c), u);
      });
    return (this.sourceCache[e] = h), h;
  }
  assignTexture(e, t, n, s) {
    const i = this;
    return this.getDependency("texture", n.index).then(function (r) {
      if (!r) return null;
      if (
        (n.texCoord !== void 0 &&
          n.texCoord > 0 &&
          ((r = r.clone()), (r.channel = n.texCoord)),
        i.extensions[O.KHR_TEXTURE_TRANSFORM])
      ) {
        const o =
          n.extensions !== void 0
            ? n.extensions[O.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (o) {
          const c = i.associations.get(r);
          (r = i.extensions[O.KHR_TEXTURE_TRANSFORM].extendTexture(r, o)),
            i.associations.set(r, c);
        }
      }
      return s !== void 0 && (r.colorSpace = s), (e[t] = r), r;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const s = t.attributes.tangent === void 0,
      i = t.attributes.color !== void 0,
      r = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c ||
        ((c = new pi()),
        Et.prototype.copy.call(c, n),
        c.color.copy(n.color),
        (c.map = n.map),
        (c.sizeAttenuation = !1),
        this.cache.add(o, c)),
        (n = c);
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let c = this.cache.get(o);
      c ||
        ((c = new gi()),
        Et.prototype.copy.call(c, n),
        c.color.copy(n.color),
        (c.map = n.map),
        this.cache.add(o, c)),
        (n = c);
    }
    if (s || i || r) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      s && (o += "derivative-tangents:"),
        i && (o += "vertex-colors:"),
        r && (o += "flat-shading:");
      let c = this.cache.get(o);
      c ||
        ((c = n.clone()),
        i && (c.vertexColors = !0),
        r && (c.flatShading = !0),
        s &&
          (c.normalScale && (c.normalScale.y *= -1),
          c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)),
        this.cache.add(o, c),
        this.associations.set(c, this.associations.get(n))),
        (n = c);
    }
    e.material = n;
  }
  getMaterialType() {
    return Ds;
  }
  loadMaterial(e) {
    const t = this,
      n = this.json,
      s = this.extensions,
      i = n.materials[e];
    let r;
    const o = {},
      c = i.extensions || {},
      l = [];
    if (c[O.KHR_MATERIALS_UNLIT]) {
      const u = s[O.KHR_MATERIALS_UNLIT];
      (r = u.getMaterialType()), l.push(u.extendParams(o, i, t));
    } else {
      const u = i.pbrMetallicRoughness || {};
      if (
        ((o.color = new le(1, 1, 1)),
        (o.opacity = 1),
        Array.isArray(u.baseColorFactor))
      ) {
        const d = u.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], ne), (o.opacity = d[3]);
      }
      u.baseColorTexture !== void 0 &&
        l.push(t.assignTexture(o, "map", u.baseColorTexture, fe)),
        (o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1),
        (o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1),
        u.metallicRoughnessTexture !== void 0 &&
          (l.push(
            t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)
          ),
          l.push(
            t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture)
          )),
        (r = this._invokeOne(function (d) {
          return d.getMaterialType && d.getMaterialType(e);
        })),
        l.push(
          Promise.all(
            this._invokeAll(function (d) {
              return d.extendMaterialParams && d.extendMaterialParams(e, o);
            })
          )
        );
    }
    i.doubleSided === !0 && (o.side = mi);
    const h = i.alphaMode || Rt.OPAQUE;
    if (
      (h === Rt.BLEND
        ? ((o.transparent = !0), (o.depthWrite = !1))
        : ((o.transparent = !1),
          h === Rt.MASK &&
            (o.alphaTest = i.alphaCutoff !== void 0 ? i.alphaCutoff : 0.5)),
      i.normalTexture !== void 0 &&
        r !== Ie &&
        (l.push(t.assignTexture(o, "normalMap", i.normalTexture)),
        (o.normalScale = new Ls(1, 1)),
        i.normalTexture.scale !== void 0))
    ) {
      const u = i.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (
      (i.occlusionTexture !== void 0 &&
        r !== Ie &&
        (l.push(t.assignTexture(o, "aoMap", i.occlusionTexture)),
        i.occlusionTexture.strength !== void 0 &&
          (o.aoMapIntensity = i.occlusionTexture.strength)),
      i.emissiveFactor !== void 0 && r !== Ie)
    ) {
      const u = i.emissiveFactor;
      o.emissive = new le().setRGB(u[0], u[1], u[2], ne);
    }
    return (
      i.emissiveTexture !== void 0 &&
        r !== Ie &&
        l.push(t.assignTexture(o, "emissiveMap", i.emissiveTexture, fe)),
      Promise.all(l).then(function () {
        const u = new r(o);
        return (
          i.name && (u.name = i.name),
          he(u, i),
          t.associations.set(u, { materials: e }),
          i.extensions && de(s, u, i),
          u
        );
      })
    );
  }
  createUniqueName(e) {
    const t = yi.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed
      ? t + "_" + ++this.nodeNamesUsed[t]
      : ((this.nodeNamesUsed[t] = 0), t);
  }
  loadGeometries(e) {
    const t = this,
      n = this.extensions,
      s = this.primitiveCache;
    function i(o) {
      return n[O.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(o, t)
        .then(function (c) {
          return Dn(c, o, t);
        });
    }
    const r = [];
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o],
        h = Tr(l),
        u = s[h];
      if (u) r.push(u.promise);
      else {
        let d;
        l.extensions && l.extensions[O.KHR_DRACO_MESH_COMPRESSION]
          ? (d = i(l))
          : (d = Dn(new yn(), l, t)),
          (s[h] = { primitive: l, promise: d }),
          r.push(d);
      }
    }
    return Promise.all(r);
  }
  loadMesh(e) {
    const t = this,
      n = this.json,
      s = this.extensions,
      i = n.meshes[e],
      r = i.primitives,
      o = [];
    for (let c = 0, l = r.length; c < l; c++) {
      const h =
        r[c].material === void 0
          ? xr(this.cache)
          : this.getDependency("material", r[c].material);
      o.push(h);
    }
    return (
      o.push(t.loadGeometries(r)),
      Promise.all(o).then(function (c) {
        const l = c.slice(0, c.length - 1),
          h = c[c.length - 1],
          u = [];
        for (let f = 0, p = h.length; f < p; f++) {
          const y = h[f],
            g = r[f];
          let m;
          const x = l[f];
          if (
            g.mode === Q.TRIANGLES ||
            g.mode === Q.TRIANGLE_STRIP ||
            g.mode === Q.TRIANGLE_FAN ||
            g.mode === void 0
          )
            (m = i.isSkinnedMesh === !0 ? new xi(y, x) : new ks(y, x)),
              m.isSkinnedMesh === !0 && m.normalizeSkinWeights(),
              g.mode === Q.TRIANGLE_STRIP
                ? (m.geometry = In(m.geometry, Os))
                : g.mode === Q.TRIANGLE_FAN &&
                  (m.geometry = In(m.geometry, rn));
          else if (g.mode === Q.LINES) m = new wi(y, x);
          else if (g.mode === Q.LINE_STRIP) m = new Ai(y, x);
          else if (g.mode === Q.LINE_LOOP) m = new Ti(y, x);
          else if (g.mode === Q.POINTS) m = new Si(y, x);
          else
            throw new Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + g.mode
            );
          Object.keys(m.geometry.morphAttributes).length > 0 && Ar(m, i),
            (m.name = t.createUniqueName(i.name || "mesh_" + e)),
            he(m, i),
            g.extensions && de(s, m, g),
            t.assignFinalMaterial(m),
            u.push(m);
        }
        for (let f = 0, p = u.length; f < p; f++)
          t.associations.set(u[f], { meshes: e, primitives: f });
        if (u.length === 1) return i.extensions && de(s, u[0], i), u[0];
        const d = new bt();
        i.extensions && de(s, d, i), t.associations.set(d, { meshes: e });
        for (let f = 0, p = u.length; f < p; f++) d.add(u[f]);
        return d;
      })
    );
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e],
      s = n[n.type];
    if (!s) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective"
        ? (t = new an(
            Mi.radToDeg(s.yfov),
            s.aspectRatio || 1,
            s.znear || 1,
            s.zfar || 2e6
          ))
        : n.type === "orthographic" &&
          (t = new Fs(-s.xmag, s.xmag, s.ymag, -s.ymag, s.znear, s.zfar)),
      n.name && (t.name = this.createUniqueName(n.name)),
      he(t, n),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      n = [];
    for (let s = 0, i = t.joints.length; s < i; s++)
      n.push(this._loadNodeShallow(t.joints[s]));
    return (
      t.inverseBindMatrices !== void 0
        ? n.push(this.getDependency("accessor", t.inverseBindMatrices))
        : n.push(null),
      Promise.all(n).then(function (s) {
        const i = s.pop(),
          r = s,
          o = [],
          c = [];
        for (let l = 0, h = r.length; l < h; l++) {
          const u = r[l];
          if (u) {
            o.push(u);
            const d = new dt();
            i !== null && d.fromArray(i.array, l * 16), c.push(d);
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              t.joints[l]
            );
        }
        return new _i(o, c);
      })
    );
  }
  loadAnimation(e) {
    const t = this.json,
      n = this,
      s = t.animations[e],
      i = s.name ? s.name : "animation_" + e,
      r = [],
      o = [],
      c = [],
      l = [],
      h = [];
    for (let u = 0, d = s.channels.length; u < d; u++) {
      const f = s.channels[u],
        p = s.samplers[f.sampler],
        y = f.target,
        g = y.node,
        m = s.parameters !== void 0 ? s.parameters[p.input] : p.input,
        x = s.parameters !== void 0 ? s.parameters[p.output] : p.output;
      y.node !== void 0 &&
        (r.push(this.getDependency("node", g)),
        o.push(this.getDependency("accessor", m)),
        c.push(this.getDependency("accessor", x)),
        l.push(p),
        h.push(y));
    }
    return Promise.all([
      Promise.all(r),
      Promise.all(o),
      Promise.all(c),
      Promise.all(l),
      Promise.all(h),
    ]).then(function (u) {
      const d = u[0],
        f = u[1],
        p = u[2],
        y = u[3],
        g = u[4],
        m = [];
      for (let x = 0, S = d.length; x < S; x++) {
        const A = d[x],
          _ = f[x],
          E = p[x],
          b = y[x],
          R = g[x];
        if (A === void 0) continue;
        A.updateMatrix && A.updateMatrix();
        const M = n._createAnimationTracks(A, _, E, b, R);
        if (M) for (let I = 0; I < M.length; I++) m.push(M[I]);
      }
      return new Ei(i, void 0, m);
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      n = this,
      s = t.nodes[e];
    return s.mesh === void 0
      ? null
      : n.getDependency("mesh", s.mesh).then(function (i) {
          const r = n._getNodeRef(n.meshCache, s.mesh, i);
          return (
            s.weights !== void 0 &&
              r.traverse(function (o) {
                if (o.isMesh)
                  for (let c = 0, l = s.weights.length; c < l; c++)
                    o.morphTargetInfluences[c] = s.weights[c];
              }),
            r
          );
        });
  }
  loadNode(e) {
    const t = this.json,
      n = this,
      s = t.nodes[e],
      i = n._loadNodeShallow(e),
      r = [],
      o = s.children || [];
    for (let l = 0, h = o.length; l < h; l++)
      r.push(n.getDependency("node", o[l]));
    const c =
      s.skin === void 0
        ? Promise.resolve(null)
        : n.getDependency("skin", s.skin);
    return Promise.all([i, Promise.all(r), c]).then(function (l) {
      const h = l[0],
        u = l[1],
        d = l[2];
      d !== null &&
        h.traverse(function (f) {
          f.isSkinnedMesh && f.bind(d, Mr);
        });
      for (let f = 0, p = u.length; f < p; f++) h.add(u[f]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json,
      n = this.extensions,
      s = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const i = t.nodes[e],
      r = i.name ? s.createUniqueName(i.name) : "",
      o = [],
      c = s._invokeOne(function (l) {
        return l.createNodeMesh && l.createNodeMesh(e);
      });
    return (
      c && o.push(c),
      i.camera !== void 0 &&
        o.push(
          s.getDependency("camera", i.camera).then(function (l) {
            return s._getNodeRef(s.cameraCache, i.camera, l);
          })
        ),
      s
        ._invokeAll(function (l) {
          return l.createNodeAttachment && l.createNodeAttachment(e);
        })
        .forEach(function (l) {
          o.push(l);
        }),
      (this.nodeCache[e] = Promise.all(o).then(function (l) {
        let h;
        if (
          (i.isBone === !0
            ? (h = new bi())
            : l.length > 1
            ? (h = new bt())
            : l.length === 1
            ? (h = l[0])
            : (h = new Is()),
          h !== l[0])
        )
          for (let u = 0, d = l.length; u < d; u++) h.add(l[u]);
        if (
          (i.name && ((h.userData.name = i.name), (h.name = r)),
          he(h, i),
          i.extensions && de(n, h, i),
          i.matrix !== void 0)
        ) {
          const u = new dt();
          u.fromArray(i.matrix), h.applyMatrix4(u);
        } else i.translation !== void 0 && h.position.fromArray(i.translation), i.rotation !== void 0 && h.quaternion.fromArray(i.rotation), i.scale !== void 0 && h.scale.fromArray(i.scale);
        return (
          s.associations.has(h) || s.associations.set(h, {}),
          (s.associations.get(h).nodes = e),
          h
        );
      })),
      this.nodeCache[e]
    );
  }
  loadScene(e) {
    const t = this.extensions,
      n = this.json.scenes[e],
      s = this,
      i = new bt();
    n.name && (i.name = s.createUniqueName(n.name)),
      he(i, n),
      n.extensions && de(t, i, n);
    const r = n.nodes || [],
      o = [];
    for (let c = 0, l = r.length; c < l; c++)
      o.push(s.getDependency("node", r[c]));
    return Promise.all(o).then(function (c) {
      for (let h = 0, u = c.length; h < u; h++) i.add(c[h]);
      const l = (h) => {
        const u = new Map();
        for (const [d, f] of s.associations)
          (d instanceof Et || d instanceof vn) && u.set(d, f);
        return (
          h.traverse((d) => {
            const f = s.associations.get(d);
            f != null && u.set(d, f);
          }),
          u
        );
      };
      return (s.associations = l(i)), i;
    });
  }
  _createAnimationTracks(e, t, n, s, i) {
    const r = [],
      o = e.name ? e.name : e.uuid,
      c = [];
    oe[i.path] === oe.weights
      ? e.traverse(function (d) {
          d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid);
        })
      : c.push(o);
    let l;
    switch (oe[i.path]) {
      case oe.weights:
        l = Nn;
        break;
      case oe.rotation:
        l = On;
        break;
      case oe.position:
      case oe.scale:
        l = Rn;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            l = Nn;
            break;
          case 2:
          case 3:
          default:
            l = Rn;
            break;
        }
        break;
    }
    const h = s.interpolation !== void 0 ? yr[s.interpolation] : Bs,
      u = this._getArrayFromAccessor(n);
    for (let d = 0, f = c.length; d < f; d++) {
      const p = new l(c[d] + "." + oe[i.path], t.array, u, h);
      s.interpolation === "CUBICSPLINE" &&
        this._createCubicSplineTrackInterpolant(p),
        r.push(p);
    }
    return r;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = hn(t.constructor),
        s = new Float32Array(t.length);
      for (let i = 0, r = t.length; i < r; i++) s[i] = t[i] * n;
      t = s;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    (e.createInterpolant = function (n) {
      const s = this instanceof On ? mr : Hs;
      return new s(this.times, this.values, this.getValueSize() / 3, n);
    }),
      (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0);
  }
}
function Er(a, e, t) {
  const n = e.attributes,
    s = new Di();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION],
      c = o.min,
      l = o.max;
    if (c !== void 0 && l !== void 0) {
      if (
        (s.set(new we(c[0], c[1], c[2]), new we(l[0], l[1], l[2])),
        o.normalized)
      ) {
        const h = hn(Te[o.componentType]);
        s.min.multiplyScalar(h), s.max.multiplyScalar(h);
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
      );
      return;
    }
  } else return;
  const i = e.targets;
  if (i !== void 0) {
    const o = new we(),
      c = new we();
    for (let l = 0, h = i.length; l < h; l++) {
      const u = i[l];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION],
          f = d.min,
          p = d.max;
        if (f !== void 0 && p !== void 0) {
          if (
            (c.setX(Math.max(Math.abs(f[0]), Math.abs(p[0]))),
            c.setY(Math.max(Math.abs(f[1]), Math.abs(p[1]))),
            c.setZ(Math.max(Math.abs(f[2]), Math.abs(p[2]))),
            d.normalized)
          ) {
            const y = hn(Te[d.componentType]);
            c.multiplyScalar(y);
          }
          o.max(c);
        } else
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
      }
    }
    s.expandByVector(o);
  }
  a.boundingBox = s;
  const r = new ki();
  s.getCenter(r.center),
    (r.radius = s.min.distanceTo(s.max) / 2),
    (a.boundingSphere = r);
}
function Dn(a, e, t) {
  const n = e.attributes,
    s = [];
  function i(r, o) {
    return t.getDependency("accessor", r).then(function (c) {
      a.setAttribute(o, c);
    });
  }
  for (const r in n) {
    const o = cn[r] || r.toLowerCase();
    o in a.attributes || s.push(i(n[r], o));
  }
  if (e.indices !== void 0 && !a.index) {
    const r = t.getDependency("accessor", e.indices).then(function (o) {
      a.setIndex(o);
    });
    s.push(r);
  }
  return (
    bn.workingColorSpace !== ne &&
      "COLOR_0" in n &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bn.workingColorSpace}" not supported.`
      ),
    he(a, e),
    Er(a, e, t),
    Promise.all(s).then(function () {
      return e.targets !== void 0 ? wr(a, e.targets, t) : a;
    })
  );
}
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
