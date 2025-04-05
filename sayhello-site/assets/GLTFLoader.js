import {
  B as yn,
  a2 as Ae,
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
} from "./OrbitControls-9c9ee6bc.js";

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

export { Ki };
