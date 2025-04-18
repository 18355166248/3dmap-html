import { g as p } from "./index-4db78ffb.js";
import {
  F as pe,
  G as M,
  V as f,
  a as he,
  M as P,
  L as W,
  S as me,
  E as fe,
  b as G,
  B as te,
  f as ae,
  v as oe,
  T as I,
  C as D,
  w as ge,
  x as ve,
  y as H,
  W as ye,
  H as be,
  z as xe,
  U as we,
  I as Me,
  J as Pe,
  K as V,
  g as Se,
  A as Le,
  h as Ce,
  i as Ge,
  P as De,
  j as Te,
  l as N,
  m as A,
  R as w,
  n as C,
  D as U,
  d as k,
  N as X,
  k as Be,
  p as Re,
  Q as ze,
  q as _e,
  r as Oe,
} from "./OrbitControls-9c9ee6bc.js";
import { R as Ne, g as re, M as Fe } from "./index-1453e2ee.js";
import { t as ie, g as Y } from "./utils-9af1928d.js";
import { D as Ee } from "./index-4ec0cc76.js";
import { L as Ae } from "./Label3d-1a598e21.js";
import { G as je, P as Q } from "./GradientShader-7cc661aa.js";
import { P as J } from "./Particles-a008e8a7.js";
import {
  f as Ue,
  g as ke,
  b as qe,
  q as Ie,
  a as We,
  s as $e,
} from "./pathLine-9a4e7519.js";
import { c as He, s as Ve } from "./chinaBlurLine-b7b06be6.js";
import { o as Xe } from "./ocean-blue-bg-49e3ac50.js";
import {
  h as Ye,
  r as Qe,
  g as Je,
  a as Ke,
} from "./rotationBorder1-447bf02a.js";
import { g as Ze } from "./grid-3e023ca8.js";
import { g as et } from "./gaoguang2-46d4de0f.js";
import { a as tt } from "./arrow-8777f461.js";
import { p as K } from "./pathLine2-dee41061.js";
import { L as at, a as ot } from "./Line2-7598ed88.js";
import { l as q } from "./label-icon-aa0c6fbf.js";
import { l as rt } from "./label-arrow-b5ffbd19.js";
import { E as it, R as nt, S as st } from "./RenderPass-5ccd0f1e.js";
import { a as lt } from "./three.interactive-c6512469.js";
import {
  f as ct,
  g as dt,
  h as ut,
  o as pt,
  c as ht,
  b as R,
  n as F,
} from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
const mt = "/sayhello-site/assets/top_surface_normal_map-1d5170e3.jpg",
  ft = "/sayhello-site/assets/rotationBorder3-c279b059.png",
  gt = "/sayhello-site/assets/flyLine-30989f9a.png";
class vt {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new Ne()),
      this.instance.addLoader(pe, "FileLoader"),
      this.instance.on("onProgress", (r, a, o) => {
        ((a / o) * 100).toFixed(2) + "";
      }),
      this.instance.on("onLoad", () => {
        this.onLoadCallback && this.onLoadCallback();
      });
    let e = "/sayhello-site/",
      t = [
        { type: "Texture", name: "flag", path: Ue },
        { type: "Texture", name: "grid", path: Ze },
        { type: "Texture", name: "pathLine", path: K },
        { type: "Texture", name: "pathLine2", path: K },
        { type: "Texture", name: "uv", path: gt },
        { type: "Texture", name: "arrow", path: tt },
        { type: "Texture", name: "gridBlack", path: ke },
        { type: "Texture", name: "borderGlow", path: qe },
        { type: "Texture", name: "quan", path: Ie },
        { type: "Texture", name: "gaoguang1", path: We },
        { type: "Texture", name: "gaoguang2", path: et },
        { type: "Texture", name: "huiguang", path: Ye },
        { type: "Texture", name: "rotationBorder1", path: Qe },
        { type: "Texture", name: "rotationBorder2", path: ft },
        { type: "Texture", name: "guangquan1", path: Je },
        { type: "Texture", name: "guangquan2", path: Ke },
        { type: "Texture", name: "chinaBlurLine", path: He },
        { type: "Texture", name: "ocean", path: Xe },
        { type: "Texture", name: "side", path: $e },
        { type: "Texture", name: "side2", path: Ve },
        { type: "Texture", name: "topNormal", path: mt },
        { type: "File", name: "fujian", path: e + "assets/json/福建省.json" },
        {
          type: "File",
          name: "fujianStorke",
          path: e + "assets/json/福建省轮廓.json",
        },
        {
          type: "File",
          name: "china",
          path: e + "assets/json/中华人民共和国.json",
        },
      ];
    this.instance.loadAll(t);
  }
}
class yt {
  constructor({ assets: e, time: t }, r = {}) {
    (this.mapGroup = new M()),
      (this.assets = e),
      (this.time = t),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new f(0, 0, 0),
          center: new he(0, 0),
          data: "",
          renderOrder: 1,
          topFaceMaterial: new P({
            color: 1582651,
            transparent: !0,
            opacity: 1,
          }),
          sideMaterial: new P({ color: 464171, transparent: !0, opacity: 1 }),
          lineMaterial: new W({ color: 2868444 }),
          depth: 0.1,
        },
        r
      )),
      this.mapGroup.position.copy(this.config.position);
    let a = ie(this.config.data);
    this.create(a);
  }
  geoProjection(e) {
    return re().center(this.config.center).scale(120).translate([0, 0])(e);
  }
  create(e) {
    let t = new M();
    e.features.forEach((r, a) => {
      let {
        name: o,
        center: n = [],
        centroid: d = [],
        adcode: s,
      } = r.properties;
      this.coordinates.push({ name: o, center: n, centroid: d });
      const i = new M();
      (i.name = "meshGroup" + a),
        (i.userData.index = a),
        (i.userData.name = o),
        (i.userData.adcode = s),
        (i.userData.materialEmissiveHex =
          this.config.topFaceMaterial.emissive.getHex());
      let l = new M();
      (l.name = "lineGroup" + a),
        (l.userData.index = a),
        (l.userData.adcode = s);
      const u = {
        depth: this.config.depth,
        bevelEnabled: !0,
        bevelSegments: 1,
        bevelThickness: 0.1,
      };
      let c = [this.config.topFaceMaterial.clone(), this.config.sideMaterial];
      r.geometry.coordinates.forEach((m) => {
        m.forEach((g, x) => {
          const L = new me();
          for (let v = 0; v < g.length; v++) {
            if (!g[v][0] || !g[v][1]) return !1;
            const [_, O] = this.geoProjection(g[v]);
            v === 0 && L.moveTo(_, -O), L.lineTo(_, -O);
          }
          const B = new fe(L, u),
            S = new G(B, c);
          (S.userData.depth = this.config.depth),
            (S.userData.name = o),
            (S.userData.adcode = s),
            (S.userData.materialEmissiveHex =
              this.config.topFaceMaterial.emissive.getHex()),
            (S.renderOrder = this.config.renderOrder),
            i.add(S);
        });
        const h = [];
        let b = null;
        m[0].forEach((g) => {
          const [x, L] = this.geoProjection(g);
          h.push(new f(x, -L, 0)), (b = this.createLine(h));
        }),
          l.add(b);
      }),
        t.add(l),
        l.position.set(0, 0, 0.61),
        i.add(l),
        this.mapGroup.add(i);
    }),
      console.log(this.mapGroup);
  }
  createLine(e) {
    const t = new te();
    t.setFromPoints(e);
    let r = new ae(t, this.config.lineMaterial);
    return (r.renderOrder = 2), (r.name = "mapLine"), r;
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(e) {
    e.add(this.mapGroup);
  }
}
class bt {
  constructor({}, e = {}) {
    this.config = Object.assign(
      {
        visibelProvince: "",
        center: [0, 0],
        position: new f(0, 0, 0),
        data: "",
        material: new W({ color: 16777215 }),
        type: "LineLoop",
        renderOrder: 1,
      },
      e
    );
    let t = ie(this.config.data),
      r = this.create(t);
    (this.lineGroup = r), this.lineGroup.position.copy(this.config.position);
  }
  geoProjection(e) {
    return re().center(this.config.center).scale(120).translate([0, 0])(e);
  }
  create(e) {
    const { type: t, visibelProvince: r } = this.config;
    let a = e.features,
      o = new M();
    for (let n = 0; n < a.length; n++) {
      const d = a[n];
      let s = new M();
      (s.name = "meshLineGroup" + n),
        d.properties.name !== r &&
          (d.geometry.coordinates.forEach((i) => {
            const l = [];
            let u = null;
            t === "Line2"
              ? (i[0].forEach((c) => {
                  const [m, h] = this.geoProjection(c);
                  l.push(m, -h, 0);
                }),
                (u = this.createLine2(l)))
              : t === "Line3"
              ? (i[0].forEach((c) => {
                  const [m, h] = this.geoProjection(c);
                  l.push(new f(m, -h, 0));
                }),
                (u = this.createLine3(l)))
              : i[0].forEach((c) => {
                  const [m, h] = this.geoProjection(c);
                  l.push(new f(m, -h, 0)), (u = this.createLine(l));
                }),
              s.add(u);
          }),
          o.add(s));
    }
    return o;
  }
  createLine3(e) {
    const { material: n, renderOrder: d } = this.config,
      s = new oe(e),
      i = new I(s, 1024, 0.02, 8, !1),
      l = new G(i, n);
    return (l.name = "mapLine3"), (l.renderOrder = d), l;
  }
  createLine2(e) {
    const { material: t, renderOrder: r } = this.config,
      a = new at();
    a.setPositions(e);
    let o = new ot(a, t);
    return (
      (o.name = "mapLine2"), (o.renderOrder = r), o.computeLineDistances(), o
    );
  }
  createLine(e) {
    const { material: t, renderOrder: r, type: a } = this.config,
      o = new te();
    o.setFromPoints(e);
    let n = new ae(o, t);
    return (n.renderOrder = r), (n.name = "mapLine"), n;
  }
  setParent(e) {
    e.add(this.lineGroup);
  }
}
class xt {
  constructor({
    material: e,
    time: t,
    size: r,
    diffuseColor: a,
    diffuseSpeed: o,
    diffuseWidth: n,
    diffuseDir: d,
  }) {
    this.time = t;
    let s = {
      size: 100,
      diffuseSpeed: 15,
      diffuseColor: 9345950,
      diffuseWidth: 10,
      diffuseDir: 1,
    };
    (this.options = Object.assign({}, s, {
      material: e,
      size: r,
      diffuseColor: a,
      diffuseSpeed: o,
      diffuseWidth: n,
      diffuseDir: d,
    })),
      this.init();
  }
  init() {
    let e = null,
      {
        material: t,
        size: r,
        diffuseColor: a,
        diffuseSpeed: o,
        diffuseWidth: n,
        diffuseDir: d,
      } = this.options,
      s = r / o;
    (t.onBeforeCompile = (i) => {
      (e = i),
        (i.uniforms = {
          ...i.uniforms,
          uTime: { value: 0 },
          uSpeed: { value: o },
          uWidth: { value: n },
          uColor: { value: new D(a) },
          uDir: { value: d },
        }),
        (i.vertexShader = i.vertexShader.replace(
          "void main() {",
          `
            varying vec3 vPosition;
            void main(){
              vPosition = position;
          `
        )),
        (i.fragmentShader = i.fragmentShader.replace(
          "void main() {",
          `
            uniform float uTime;
            uniform float uSpeed;
            uniform float uWidth;
            uniform vec3 uColor;
            uniform float uDir;
            varying vec3 vPosition;

            void main(){
          `
        )),
        (i.fragmentShader = i.fragmentShader.replace(
          "#include <opaque_fragment>",
          `
            #ifdef OPAQUE
            diffuseColor.a = 1.0;
            #endif

            #ifdef USE_TRANSMISSION
            diffuseColor.a *= material.transmissionAlpha;
            #endif

            float r = uTime * uSpeed;
            //光环宽度
            float w = 0.0;
            if(w>uWidth){
              w = uWidth;
            }else{
              w = uTime * 5.0;
            }
            //几何中心点
            vec2 center = vec2(0.0, 0.0);
            // 距离圆心的距离

            float rDistance = distance(vPosition.xz, center);
            if(uDir==2.0){
              rDistance = distance(vPosition.xy, center);
            }
            if(rDistance > r && rDistance < r + 2.0 * w) {
              float per = 0.0;
              if(rDistance < r + w) {
                per = (rDistance - r) / w;
                outgoingLight = mix(outgoingLight, uColor, per);
                // 获取0->透明度的插值
                float alphaV = mix(0.0,diffuseColor.a,per);
                gl_FragColor = vec4(outgoingLight,  alphaV);
              } else {
                per = (rDistance - r - w) / w;
                outgoingLight = mix(uColor, outgoingLight, per);
                // 获取0->透明度的插值
                float alphaV = mix(diffuseColor.a,0.0,per);
                gl_FragColor = vec4(outgoingLight,  alphaV);
              }
            } else {
              gl_FragColor = vec4(outgoingLight, 0.0);
            }
          `
        ));
    }),
      this.time.on("tick", (i) => {
        e &&
          ((e.uniforms.uTime.value += i),
          e.uniforms.uTime.value > s && (e.uniforms.uTime.value = 0));
      });
  }
}
const wt = [
    {
      name: "北京市",
      center: [116.405285, 39.904989],
      centroid: [116.41995, 40.18994],
      hide: !0,
    },
    {
      name: "天津市",
      center: [117.190182, 39.125596],
      centroid: [117.347043, 39.288036],
      hide: !0,
    },
    {
      name: "河北省",
      center: [114.502461, 38.045474],
      centroid: [114.502461, 38.045474],
      hide: !0,
    },
    {
      name: "山西省",
      center: [112.549248, 37.857014],
      centroid: [112.304436, 37.618179],
      hide: !0,
    },
    {
      name: "内蒙古自治区",
      center: [111.670801, 40.818311],
      centroid: [114.077429, 44.331087],
      hide: !0,
    },
    {
      name: "辽宁省",
      center: [123.429096, 41.796767],
      centroid: [122.604994, 41.299712],
      hide: !0,
    },
    {
      name: "吉林省",
      center: [125.3245, 43.886841],
      centroid: [126.171208, 43.703954],
      hide: !0,
    },
    {
      name: "黑龙江省",
      center: [126.642464, 45.756967],
      centroid: [127.693027, 48.040465],
      hide: !0,
    },
    {
      name: "上海市",
      center: [121.472644, 31.231706],
      centroid: [121.438737, 31.072559],
      hide: !0,
    },
    {
      name: "江苏省",
      center: [118.767413, 32.041544],
      centroid: [119.486506, 32.983991],
      hide: !1,
    },
    {
      name: "浙江省",
      center: [120.153576, 30.287459],
      centroid: [120.109913, 29.181466],
      hide: !0,
    },
    {
      name: "安徽省",
      center: [117.283042, 31.86119],
      centroid: [117.226884, 31.849254],
      hide: !1,
    },
    {
      name: "福建省",
      center: [119.306239, 26.075302],
      centroid: [118.006468, 26.069925],
      hide: !0,
    },
    {
      name: "江西省",
      center: [115.892151, 28.676493],
      centroid: [115.732975, 27.636112],
      hide: !1,
    },
    {
      name: "山东省",
      center: [117.000923, 36.675807],
      centroid: [118.187759, 36.376092],
      blur: !0,
    },
    {
      name: "河南省",
      center: [113.665412, 34.757975],
      centroid: [113.619717, 33.902648],
      blur: !0,
    },
    {
      name: "湖北省",
      center: [114.298572, 30.584355],
      centroid: [112.271301, 30.987527],
      blur: !0,
    },
    {
      name: "湖南省",
      center: [112.982279, 28.19409],
      centroid: [111.711649, 27.629216],
      blur: !0,
    },
    {
      name: "广东省",
      center: [113.280637, 23.125178],
      centroid: [113.429919, 23.334643],
      blur: !0,
    },
    {
      name: "广西壮族自治区",
      center: [108.320004, 22.82402],
      centroid: [108.7944, 23.833381],
      hide: !0,
    },
    {
      name: "海南省",
      center: [110.33119, 20.031971],
      centroid: [109.754859, 19.189767],
      hide: !0,
    },
    {
      name: "重庆市",
      center: [106.504962, 29.533155],
      centroid: [107.8839, 30.067297],
      blur: !0,
    },
    {
      name: "四川省",
      center: [104.065735, 30.659462],
      centroid: [102.693453, 30.674545],
      hide: !0,
    },
    {
      name: "贵州省",
      center: [106.713478, 26.578343],
      centroid: [106.880455, 26.826368],
      blur: !0,
    },
    {
      name: "云南省",
      center: [102.712251, 25.040609],
      centroid: [101.485106, 25.008643],
      hide: !0,
    },
    {
      name: "西藏自治区",
      center: [91.132212, 29.660361],
      centroid: [88.388277, 31.56375],
      hide: !0,
    },
    {
      name: "陕西省",
      center: [108.948024, 34.263161],
      centroid: [108.887114, 35.263661],
      hide: !0,
    },
    {
      name: "甘肃省",
      center: [103.823557, 36.058039],
      centroid: [103.823557, 36.058039],
      hide: !0,
    },
    {
      name: "青海省",
      center: [101.778916, 36.623178],
      centroid: [96.043533, 35.726403],
      hide: !0,
    },
    {
      name: "宁夏回族自治区",
      center: [106.278179, 38.46637],
      centroid: [106.169866, 37.291332],
      hide: !0,
    },
    {
      name: "新疆维吾尔自治区",
      center: [87.617733, 43.792818],
      centroid: [85.294711, 41.371801],
      hide: !0,
    },
    {
      name: "台湾省",
      center: [121.509062, 25.044332],
      centroid: [120.971485, 23.749452],
    },
    {
      name: "香港特别行政区",
      center: [114.173355, 22.320048],
      centroid: [114.134357, 22.377366],
      hide: !0,
    },
    {
      name: "澳门特别行政区",
      center: [113.54909, 22.198951],
      centroid: [113.566988, 22.159307],
      hide: !0,
    },
  ],
  Z = [
    {
      name: "福州市",
      enName: "fuzhou",
      value: 98,
      adcode: 350100,
      center: [119.306239, 26.075302],
      centroid: [119.200519, 26.047886],
    },
    {
      name: "厦门市",
      enName: "xiamen",
      value: 43,
      adcode: 350200,
      center: [118.11022, 24.490474],
      centroid: [118.123854, 24.676398],
    },
    {
      name: "莆田市",
      enName: "putian",
      value: 76,
      adcode: 350300,
      center: [119.007558, 25.431011],
      centroid: [118.894712, 25.445304],
    },
    {
      name: "三明市",
      enName: "sanming",
      value: 48,
      adcode: 350400,
      center: [117.635001, 26.265444],
      centroid: [117.400007, 26.298093],
    },
    {
      name: "泉州市",
      enName: "quanzhou",
      value: 32,
      adcode: 350500,
      center: [118.589421, 24.908853],
      centroid: [118.267651, 25.202187],
    },
    {
      name: "漳州市",
      enName: "zhangzhou",
      value: 25,
      adcode: 350600,
      center: [117.661801, 24.510897],
      centroid: [117.458578, 24.330766],
    },
    {
      name: "南平市",
      enName: "nanping",
      value: 55,
      adcode: 350700,
      center: [118.178459, 26.635627],
      centroid: [118.147051, 27.338631],
    },
    {
      name: "龙岩市",
      enName: "longyan",
      value: 38,
      adcode: 350800,
      center: [117.02978, 25.091603],
      centroid: [116.74379, 25.291574],
    },
    {
      name: "宁德市",
      enName: "ningde",
      value: 16,
      adcode: 350900,
      center: [119.527082, 26.65924],
      centroid: [119.489399, 26.971518],
    },
  ],
  Mt = [
    {
      adcode: 350700,
      value: 10,
      geometry: { type: "Point", coordinates: [118.39427783, 27.87529102] },
    },
    {
      adcode: 350700,
      value: 21,
      geometry: { type: "Point", coordinates: [118.77397294, 27.34767577] },
    },
    {
      adcode: 350700,
      value: 7,
      geometry: { type: "Point", coordinates: [118.35976399, 26.9945285] },
    },
    {
      adcode: 350700,
      value: 10,
      geometry: { type: "Point", coordinates: [117.52702685, 27.35534046] },
    },
    {
      adcode: 350400,
      value: 10,
      geometry: { type: "Point", coordinates: [116.93053405, 26.65854374] },
    },
    {
      adcode: 350400,
      value: 10,
      geometry: { type: "Point", coordinates: [116.91648223, 26.11706261] },
    },
    {
      adcode: 350400,
      value: 10,
      geometry: { type: "Point", coordinates: [117.97078091, 26.02867519] },
    },
    {
      adcode: 350800,
      value: 8,
      geometry: { type: "Point", coordinates: [117.35857728, 25.35732656] },
    },
    {
      adcode: 350800,
      value: 10,
      geometry: { type: "Point", coordinates: [116.33077056, 25.40519237] },
    },
    {
      adcode: 350800,
      value: 10,
      geometry: { type: "Point", coordinates: [116.68043566, 25.69198789] },
    },
    {
      adcode: 350800,
      value: 6,
      geometry: { type: "Point", coordinates: [116.62745852, 25.01213501] },
    },
    {
      adcode: 350600,
      value: 10,
      geometry: { type: "Point", coordinates: [117.30030168, 24.38641625] },
    },
    {
      adcode: 350600,
      value: 10,
      geometry: { type: "Point", coordinates: [117.30030263, 23.94171638] },
    },
    {
      adcode: 350600,
      value: 10,
      geometry: { type: "Point", coordinates: [117.65526449, 24.72373213] },
    },
    {
      adcode: 350600,
      value: 5,
      geometry: { type: "Point", coordinates: [117.69764888, 24.13525425] },
    },
    {
      adcode: 350500,
      value: 10,
      geometry: { type: "Point", coordinates: [118.2592325, 25.50086704] },
    },
    {
      adcode: 350500,
      value: 10,
      geometry: { type: "Point", coordinates: [118.19565679, 25.06973473] },
    },
    {
      adcode: 350500,
      value: 17,
      geometry: { type: "Point", coordinates: [117.93075829, 25.24237137] },
    },
    {
      adcode: 350200,
      value: 10,
      geometry: { type: "Point", coordinates: [118.19565677, 24.78146646] },
    },
    {
      adcode: 350200,
      value: 10,
      geometry: { type: "Point", coordinates: [118.08969752, 24.59854927] },
    },
    {
      adcode: 350300,
      value: 10,
      geometry: { type: "Point", coordinates: [118.96916117, 25.60602128] },
    },
    {
      adcode: 350300,
      value: 12,
      geometry: { type: "Point", coordinates: [118.65128255, 25.50774073] },
    },
    {
      adcode: 350300,
      value: 10,
      geometry: { type: "Point", coordinates: [118.81022153, 25.36420844] },
    },
    {
      adcode: 350100,
      value: 10,
      geometry: { type: "Point", coordinates: [119.39300147, 26.34899548] },
    },
    {
      adcode: 350100,
      value: 17,
      geometry: { type: "Point", coordinates: [119.00095038, 26.25400522] },
    },
    {
      adcode: 350100,
      value: 10,
      geometry: { type: "Point", coordinates: [118.81022245, 25.93045839] },
    },
    {
      adcode: 350100,
      value: 10,
      geometry: { type: "Point", coordinates: [119.39299939, 25.67288955] },
    },
    {
      adcode: 350100,
      value: 14,
      geometry: { type: "Point", coordinates: [119.4989598, 25.93998722] },
    },
    {
      adcode: 350900,
      value: 10,
      geometry: { type: "Point", coordinates: [119.52015662, 27.37929608] },
    },
    {
      adcode: 350900,
      value: 17,
      geometry: { type: "Point", coordinates: [119.42479168, 27.0777969] },
    },
    {
      adcode: 350900,
      value: 10,
      geometry: { type: "Point", coordinates: [118.95856779, 26.89839678] },
    },
    {
      adcode: 350900,
      value: 10,
      geometry: { type: "Point", coordinates: [118.85260762, 26.70924641] },
    },
    {
      adcode: 350900,
      value: 10,
      geometry: { type: "Point", coordinates: [119.37181076, 26.75656355] },
    },
    {
      adcode: 350900,
      value: 10,
      geometry: { type: "Point", coordinates: [120.08174299, 27.06836192] },
    },
    {
      adcode: 350900,
      value: 10,
      geometry: { type: "Point", coordinates: [120.20889574, 27.23806994] },
    },
    {
      adcode: 350900,
      value: 19,
      geometry: { type: "Point", coordinates: [119.75326706, 27.00221092] },
    },
  ],
  Pt = [
    {
      adcode: 350600,
      value: 7621,
      geometry: { type: "Point", coordinates: [117.30559861, 24.86801763] },
    },
    {
      adcode: 350800,
      value: 6787,
      geometry: { type: "Point", coordinates: [116.32017302, 25.74926454] },
    },
    {
      adcode: 350700,
      value: 9821,
      geometry: { type: "Point", coordinates: [118.54532517, 27.63304926] },
    },
    {
      adcode: 350400,
      value: 6789,
      geometry: { type: "Point", coordinates: [118.10029319, 26.15893727] },
    },
    {
      adcode: 350100,
      value: 8741,
      geometry: { type: "Point", coordinates: [119.62611587, 27.16267597] },
    },
  ],
  St = [
    {
      geometry: {
        type: "LineString",
        coordinates: [
          [119.36220028, 26.09263541],
          [119.25109865, 26.11949583],
          [119.19127478, 26.17703321],
          [119.05453428, 26.21154201],
          [118.91779337, 26.23837502],
          [118.87506204, 26.29585375],
          [118.84087714, 26.3341571],
          [118.78532736, 26.37629251],
          [118.71695712, 26.44518143],
          [118.52893831, 26.49873349],
          [118.40074365, 26.5407924],
          [118.25972967, 26.59429994],
          [118.24691006, 26.60576254],
        ],
      },
    },
    {
      geometry: {
        type: "LineString",
        coordinates: [
          [119.35770597, 26.09973634],
          [119.38911752, 26.06870256],
          [119.38283505, 25.9896708],
          [119.39854057, 25.89645801],
          [119.42681092, 25.85406421],
          [119.41424595, 25.76640228],
          [119.37969294, 25.65319457],
          [119.30116387, 25.57105168],
          [119.247764, 25.51153401],
          [119.1158356, 25.40659757],
          [119.06243611, 25.35551445],
          [119.01531705, 25.27600247],
          [118.90223581, 25.25895884],
          [118.8645422, 25.17086168],
          [118.81114267, 25.07985634],
          [118.61010969, 24.99163021],
          [118.60068642, 24.9887832],
          [118.60382753, 24.98024166],
        ],
      },
    },
    {
      geometry: {
        type: "LineString",
        coordinates: [
          [119.34828087, 26.09972992],
          [119.39539797, 25.98401729],
          [119.42366827, 25.9218806],
          [119.50219729, 25.9247056],
          [119.56187924, 25.88797405],
          [119.57130184, 25.71829572],
          [119.7126533, 25.61070752],
          [119.74406435, 25.52286658],
        ],
      },
    },
  ],
  Lt = {
    uniforms: {
      tDiffuse: { value: null },
      _Brightness: { value: 1 },
      _Saturation: { value: 1 },
      _Contrast: { value: 1 },
    },
    vertexShader: `
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,
    fragmentShader: `
		uniform sampler2D tDiffuse;
		uniform float _Brightness;
		uniform float _Saturation;
		uniform float _Contrast;
		varying vec2 vUv;
		vec3 lerpColor(vec3 col1,vec3 col2, float value){
			vec3 newCol = vec3 ((col1.r * (1.0 - value) + col2.r * value), (col1.g * (1.0 - value) + col2.g * value), (col1.b * (1.0 - value) + col2.b * value));
			return newCol;
		}
		float mylerp(float a,float b, float value){
			return (a * (1.0 - value) + b * value);
		}
		void main() {
			// 获取原图的颜色rgba
			vec4 color = texture2D(tDiffuse, vUv);
			//brigtness亮度直接乘以一个系数，也就是RGB整体缩放，调整亮度
			vec3 finalColor = color.rgb * _Brightness;
			//saturation饱和度：首先根据公式计算同等亮度情况下饱和度最低的值：
			float gray = 0.2125 * color.r + 0.7154 * color.g + 0.0721 * color.b;
			vec3 grayColor = vec3(gray, gray, gray);
			//根据Saturation在饱和度最低的图像和原图之间差值
			finalColor = lerpColor(grayColor, finalColor, _Saturation);
			//contrast对比度：首先计算对比度最低的值
			vec3 avgColor = vec3(0.5, 0.5, 0.5);
			//根据Contrast在对比度最低的图像和原图之间差值
			finalColor = lerpColor(avgColor, finalColor, _Contrast);
			// 结果rgb,透明度保持原值即可
			gl_FragColor = vec4(vec3(finalColor), color.a);
		}`,
  };
class j extends G {
  constructor(e, t = {}) {
    super(e),
      (this.isReflector = !0),
      (this.type = "Reflector"),
      (this.camera = new ge());
    const r = this,
      a = t.color !== void 0 ? new D(t.color) : new D(8355711),
      o = t.textureWidth || 512,
      n = t.textureHeight || 512,
      d = t.clipBias || 0,
      s = t.shader || j.ReflectorShader,
      i = t.multisample !== void 0 ? t.multisample : 4,
      l = new ve(),
      u = new f(),
      c = new f(),
      m = new f(),
      h = new H(),
      b = new f(0, 0, -1),
      g = new V(),
      x = new f(),
      L = new f(),
      B = new V(),
      S = new H(),
      v = this.camera,
      _ = new ye(o, n, { samples: i, type: be }),
      O = new xe({
        name: s.name !== void 0 ? s.name : "unspecified",
        uniforms: we.clone(s.uniforms),
        fragmentShader: s.fragmentShader,
        vertexShader: s.vertexShader,
      });
    (O.uniforms.tDiffuse.value = _.texture),
      (O.uniforms.color.value = a),
      (O.uniforms.textureMatrix.value = S),
      (this.material = O),
      (this.onBeforeRender = function (y, ne, E) {
        if (
          (c.setFromMatrixPosition(r.matrixWorld),
          m.setFromMatrixPosition(E.matrixWorld),
          h.extractRotation(r.matrixWorld),
          u.set(0, 0, 1),
          u.applyMatrix4(h),
          x.subVectors(c, m),
          x.dot(u) > 0)
        )
          return;
        x.reflect(u).negate(),
          x.add(c),
          h.extractRotation(E.matrixWorld),
          b.set(0, 0, -1),
          b.applyMatrix4(h),
          b.add(m),
          L.subVectors(c, b),
          L.reflect(u).negate(),
          L.add(c),
          v.position.copy(x),
          v.up.set(0, 1, 0),
          v.up.applyMatrix4(h),
          v.up.reflect(u),
          v.lookAt(L),
          (v.far = E.far),
          v.updateMatrixWorld(),
          v.projectionMatrix.copy(E.projectionMatrix),
          S.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
          S.multiply(v.projectionMatrix),
          S.multiply(v.matrixWorldInverse),
          S.multiply(r.matrixWorld),
          l.setFromNormalAndCoplanarPoint(u, c),
          l.applyMatrix4(v.matrixWorldInverse),
          g.set(l.normal.x, l.normal.y, l.normal.z, l.constant);
        const T = v.projectionMatrix;
        (B.x = (Math.sign(g.x) + T.elements[8]) / T.elements[0]),
          (B.y = (Math.sign(g.y) + T.elements[9]) / T.elements[5]),
          (B.z = -1),
          (B.w = (1 + T.elements[10]) / T.elements[14]),
          g.multiplyScalar(2 / g.dot(B)),
          (T.elements[2] = g.x),
          (T.elements[6] = g.y),
          (T.elements[10] = g.z + 1 - d),
          (T.elements[14] = g.w),
          (r.visible = !1);
        const se = y.getRenderTarget(),
          le = y.xr.enabled,
          ce = y.shadowMap.autoUpdate,
          de = y.outputColorSpace,
          ue = y.toneMapping;
        (y.xr.enabled = !1),
          (y.shadowMap.autoUpdate = !1),
          (y.outputColorSpace = Me),
          (y.toneMapping = Pe),
          y.setRenderTarget(_),
          y.state.buffers.depth.setMask(!0),
          y.autoClear === !1 && y.clear(),
          y.render(ne, v),
          (y.xr.enabled = le),
          (y.shadowMap.autoUpdate = ce),
          (y.outputColorSpace = de),
          (y.toneMapping = ue),
          y.setRenderTarget(se);
        const $ = E.viewport;
        $ !== void 0 && y.state.viewport($), (r.visible = !0);
      }),
      (this.getRenderTarget = function () {
        return _;
      }),
      (this.dispose = function () {
        _.dispose(), r.material.dispose();
      });
  }
}
j.ReflectorShader = {
  name: "ReflectorShader",
  uniforms: {
    color: { value: null },
    tDiffuse: { value: null },
    textureMatrix: { value: null },
  },
  vertexShader: `
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,
  fragmentShader: `
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ),0.15 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`,
};
function ee(z) {
  return z.sort((e, t) => t.value - e.value), z;
}
class Ct extends Fe {
  constructor(e, t) {
    super(e, t),
      (this.pointCenter = [118.006468, 26.069925]),
      (this.scene.fog = new Se(69668, 1, 30)),
      (this.scene.background = new D(69668)),
      this.camera.instance.position.set(
        -13.767695123014105,
        12.990152163077308,
        39.28228164159694
      ),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.updateProjectionMatrix(),
      (this.interactionManager = new lt(
        this.renderer.instance,
        this.camera.instance,
        this.canvas
      )),
      this.initSetting(),
      this.initEnvironment(),
      this.createPost(),
      (this.assets = new vt(() => {
        (this.sceneGroup = new M()),
          (this.labelGroup = new M()),
          (this.provinceNameGroup = new M()),
          (this.badgeGroup = new M()),
          (this.label3d = new Ae(this)),
          this.sceneGroup.rotateX(-Math.PI / 2),
          this.sceneGroup.add(
            this.labelGroup,
            this.provinceNameGroup,
            this.badgeGroup
          ),
          this.scene.add(this.sceneGroup),
          this.createFloor(),
          this.createRotateBorder(),
          this.createModel(),
          this.createBorderGlow(),
          this.addEvent(),
          this.createBar(),
          this.createParticles(),
          this.createFlyLine(),
          this.createScatter(),
          this.createBadgeLabel(),
          this.createPathAnimate(),
          this.createStorke();
        let r = p.timeline();
        r.addLabel("focusMap", 3.5),
          r.addLabel("focusMapOpacity", 4),
          r.addLabel("bar", 5),
          r.add(
            p.to(this.camera.instance.position, {
              duration: 2.5,
              delay: 2,
              x: -0.2515849818960619,
              y: 12.397744557047988,
              z: 14.647659671139275,
              ease: "circ.out",
            })
          ),
          r.add(
            p.to(this.quan.rotation, { duration: 5, z: -2 * Math.PI }),
            "-=2"
          ),
          r.add(
            p.to(this.focusMapGroup.position, {
              duration: 1,
              x: 0,
              y: 0,
              z: 0,
              onStart: () => {
                this.focusMapGroup.visible = !0;
              },
            }),
            "focusMap"
          ),
          r.add(
            p.to(this.focusMapGroup.scale, {
              duration: 1,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMap"
          ),
          r.add(
            p.to(this.focusMapTopMaterial, {
              duration: 1,
              opacity: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          r.add(
            p.to(this.focusMapSideMaterial, {
              duration: 1,
              opacity: 1,
              ease: "circ.out",
              onComplete: () => {
                (this.focusMapSideMaterial.transparent = !1),
                  this.createMirror(),
                  this.createGridRipple();
              },
            }),
            "focusMapOpacity"
          ),
          r.add(
            p.to(this.provinceLineMaterial, {
              duration: 0.5,
              delay: 0.3,
              opacity: 1,
            }),
            "focusMapOpacity"
          ),
          r.add(
            p.to(this.borderGlowMaterial, {
              duration: 0.5,
              delay: 0.6,
              opacity: 0.5,
            }),
            "focusMapOpacity"
          ),
          r.add(
            p.to(this.rotateBorder1.scale, {
              delay: 0.3,
              duration: 1,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          r.add(
            p.to(this.rotateBorder2.scale, {
              duration: 1,
              delay: 0.5,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          this.allBar.map((a, o) => {
            r.add(
              p.to(a.scale, {
                duration: 1,
                delay: 0.1 * o,
                x: 1,
                y: 1,
                z: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allBarMaterial.map((a, o) => {
            r.add(
              p.to(a, {
                duration: 1,
                delay: 0.1 * o,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allProvinceLabel.map((a, o) => {
            let n = a.element.querySelector(".provinces-label-style02-wrap"),
              d = a.element.querySelector(".number .value"),
              s = Number(d.innerText),
              i = { score: 0 };
            r.add(
              p.to(n, {
                duration: 1,
                delay: 0.2 * o,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
            let l = p.to(i, {
              duration: 1,
              delay: 0.2 * o,
              score: s,
              onUpdate: u,
            });
            function u() {
              d.innerText = i.score.toFixed(0);
            }
            r.add(l, "bar");
          }),
          this.allProvinceNameLabel.map((a, o) => {
            let n = a.element.querySelector(".provinces-name-label-wrap");
            r.add(
              p.to(n, {
                duration: 1,
                delay: 0.2 * o,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allGuangquan.map((a, o) => {
            r.add(
              p.to(a.children[0].scale, {
                duration: 1,
                delay: 0.1 * o,
                x: 1,
                y: 1,
                z: 1,
                ease: "circ.out",
              }),
              "bar"
            ),
              r.add(
                p.to(a.children[1].scale, {
                  duration: 1,
                  delay: 0.1 * o,
                  x: 1,
                  y: 1,
                  z: 1,
                  ease: "circ.out",
                }),
                "bar"
              );
          });
      }));
  }
  initEnvironment() {
    let e = new Le(16777215, 3);
    this.scene.add(e);
    let t = new Ce(16777215, 2);
    t.position.set(-30, 6, -8),
      (t.castShadow = !0),
      (t.shadow.radius = 20),
      (t.shadow.mapSize.width = 1024),
      (t.shadow.mapSize.height = 1024);
    let r = new Ge(t, 2);
    if ((this.scene.add(t), this.debug.active)) {
      const a = this.debug.instance.addFolder("Environment");
      a.add(t.position, "x", -30, 30, 1),
        a.add(t.position, "y", -30, 30, 1),
        a.add(t.position, "z", -30, 30, 1),
        a.onChange((o) => {
          r.update();
        });
    }
    this.createPointLight({
      color: "#379a6f",
      intensity: 100,
      distance: 936,
      x: -3,
      y: -16,
      z: -3,
    }),
      this.createPointLight({
        color: "#1f5f7a",
        intensity: 1,
        distance: 100,
        x: 0,
        y: 2,
        z: 5,
      });
  }
  createPost() {
    let e = { _Saturation: 1, _Brightness: 1, _Contrast: 1 };
    const t = new it(this.renderer.instance);
    t.addPass(new nt(this.scene, this.camera.instance));
    const r = new st(Lt);
    if (
      ((r.uniforms._Brightness.value = e._Brightness),
      (r.uniforms._Saturation.value = e._Saturation),
      (r.uniforms._Contrast.value = e._Contrast),
      t.addPass(r),
      (this.composer = t),
      (this.renderer.postprocessing = !1),
      (this.renderer.composer = t),
      this.debug.active)
    ) {
      const a = this.debug.instance.addFolder("postprocessing");
      a.add(e, "_Brightness", -3, 3, 0.01).onChange((o) => {
        r.uniforms._Brightness.value = Number(o);
      }),
        a.add(e, "_Saturation", -3, 3, 0.01).onChange((o) => {
          r.uniforms._Saturation.value = Number(o);
        }),
        a.add(e, "_Contrast", -3, 3, 0.01).onChange((o) => {
          r.uniforms._Contrast.value = Number(o);
        }),
        a.add(this.renderer, "postprocessing");
    }
  }
  createPointLight(e) {
    const t = new De(1924702, e.intensity, e.distance, 1);
    t.position.set(e.x, e.y, e.z), this.scene.add(t);
    const r = new Te(t, 1);
    if (this.debug.active) {
      const a = this.debug.instance.addFolder("Point" + Math.random());
      a.addColor(e, "color"),
        a.add(e, "intensity", 1, 1e3, 10),
        a.add(e, "distance", 100, 1e4, 10),
        a.add(e, "x", -30, 30, 1),
        a.add(e, "y", -30, 30, 1),
        a.add(e, "z", -30, 30, 1),
        a.onChange(({ object: o }) => {
          (t.color = new D(o.color)),
            (t.distance = o.distance),
            (t.intensity = o.intensity),
            t.position.set(o.x, o.y, o.z),
            r.update();
        });
    }
  }
  initSetting() {
    (this.debug = new Ee(!1)),
      (this.renderer.instance.shadowMap.enabled = !1),
      this.renderer.resize();
  }
  createModel() {
    let e = new M(),
      t = new M();
    (t.visible = !1), (this.focusMapGroup = t);
    let { province: r, provinceLine: a } = this.createProvince();
    r.setParent(t),
      t.position.set(0, 0, 0),
      t.scale.set(1, 1, 0),
      e.add(t),
      e.rotateX(-Math.PI / 2),
      e.position.set(0, 0.2, 0),
      this.scene.add(e);
  }
  createBorderGlow() {
    let e = new N(20, 20);
    const t = this.assets.instance.getResource("borderGlow");
    (t.colorSpace = A), (t.wrapS = w), (t.wrapT = w), t.repeat.set(1, 1);
    let r = new P({
      map: t,
      opacity: 0,
      transparent: !0,
      blending: C,
      side: U,
      depthTest: !1,
    });
    this.borderGlowMaterial = r;
    let a = new G(e, r);
    if (
      ((a.renderOrder = 20),
      a.rotateX(-Math.PI / 2),
      a.position.set(0.6, 0.87, 0.27),
      a.scale.set(0.796, 0.796, 0.796),
      this.scene.add(a),
      this.debug.active)
    ) {
      const o = this.debug.instance.addFolder("glow");
      let n = { scale: 0.796, repeatX: 1, repeatY: 1 };
      o.add(n, "scale", 0, 1, 0.001).onChange((d) => {
        let s = Number(d);
        a.scale.set(s, s, s);
      }),
        o.add(a.position, "x", -3, 3, 0.001).onChange((d) => {
          let s = Number(d);
          a.position.x = s;
        }),
        o.add(a.position, "y", -3, 3, 0.001).onChange((d) => {
          let s = Number(d);
          a.position.y = s;
        }),
        o.add(a.position, "z", -3, 3, 0.001).onChange((d) => {
          let s = Number(d);
          a.position.z = s;
        });
    }
  }
  createProvince() {
    let e = this.assets.instance.getResource("fujian"),
      t = this.assets.instance.getResource("topNormal");
    (t.wrapS = t.wrapT = w),
      (this.provinceLineMaterial = new W({
        color: 2868444,
        opacity: 0,
        transparent: !0,
        fog: !1,
      }));
    let [r, a] = this.createProvinceMaterial();
    (this.focusMapTopMaterial = r), (this.focusMapSideMaterial = a);
    let o = new yt(this, {
        center: this.pointCenter,
        position: new f(0, 0, 0.06),
        data: e,
        depth: 0.5,
        topFaceMaterial: r,
        sideMaterial: a,
        lineMaterial: this.provinceLineMaterial,
        renderOrder: 9,
      }),
      n = new k({
        color: 400967,
        map: t,
        transparent: !0,
        normalMap: t,
        opacity: 1,
      });
    this.debug.active &&
      this.debug.instance
        .addFolder("Province")
        .addColor(n, "color")
        .onChange((u) => {
          (n.color = new D(u)), (this.focusMapTopMaterial.color = new D(u));
        });
    let { boxSize: d, box3: s } = Y(o.mapGroup),
      i = Y(o.mapGroup);
    return (
      (this.eventElement = []),
      console.log(i),
      o.mapGroup.children.map((l, u) => {
        l.children.map((c) => {
          c.type === "Mesh" &&
            (this.eventElement.push(c),
            this.calcUv2(c.geometry, d.x, d.y, s.min.x, s.min.y));
        });
      }),
      { province: o }
    );
  }
  createStorke() {
    let e = this.assets.instance.getResource("fujianStorke");
    const t = this.assets.instance.getResource("pathLine2");
    (t.wrapS = w),
      (t.wrapT = w),
      t.repeat.set(1, 1),
      (t.generateMipmaps = !1),
      (t.magFilter = X);
    let r = new bt(this, {
      center: this.pointCenter,
      position: new f(0, 0.88, 0),
      data: e,
      material: new P({
        color: 2868444,
        map: t,
        alphaMap: t,
        fog: !1,
        transparent: !0,
        opacity: 1,
        blending: C,
      }),
      type: "Line3",
      renderOrder: 22,
    });
    (r.lineGroup.rotation.x = -Math.PI / 2),
      this.scene.add(r.lineGroup),
      this.time.on("tick", () => {
        t.offset.x += 0.002;
      });
  }
  addEvent() {
    let e = [];
    const t = (a) => {
        p.to(a.scale, {
          duration: 0.3,
          z: 1,
          onComplete: () => {
            a.traverse((o) => {
              o.isMesh &&
                (o.material[0].emissive.setHex(a.userData.materialEmissiveHex),
                (o.material[0].emissiveIntensity = 1),
                (o.renderOrder = 9));
            });
          },
        }),
          this.setBarMove(a.userData.adcode, "down"),
          this.setLabelMove(a.userData.adcode, "down"),
          this.setScatterMove(a.userData.adcode, "down");
      },
      r = (a) => {
        p.to(a.scale, { duration: 0.3, z: 1.5 }),
          this.setBarMove(a.userData.adcode),
          this.setLabelMove(a.userData.adcode),
          this.setScatterMove(a.userData.adcode),
          a.traverse((o) => {
            o.isMesh &&
              (o.material[0].emissive.setHex(725293),
              (o.material[0].emissiveIntensity = 1.5),
              (o.renderOrder = 21));
          });
      };
    this.eventElement.map((a) => {
      this.interactionManager.add(a),
        a.addEventListener("mousedown", (o) => {}),
        a.addEventListener("mouseover", (o) => {
          e.includes(o.target.parent) || e.push(o.target.parent),
            (document.body.style.cursor = "pointer"),
            r(o.target.parent);
        }),
        a.addEventListener("mouseout", (o) => {
          (e = e.filter(
            (n) => n.userData.name !== o.target.parent.userData.name
          )),
            e.length > 0 && e[e.length - 1],
            t(o.target.parent),
            (document.body.style.cursor = "default");
        });
    });
  }
  setBarMove(e, t = "up") {
    this.allBar.map((r) => {
      r.userData.adcode === e &&
        p.to(r.position, {
          duration: 0.3,
          z:
            t === "up" ? r.userData.position[2] + 0.28 : r.userData.position[2],
        });
    });
  }
  setLabelMove(e, t = "up") {
    [...this.allProvinceLabel, ...this.allProvinceNameLabel].map((r) => {
      r.userData.adcode === e &&
        p.to(r.position, {
          duration: 0.3,
          z:
            t === "up" ? r.userData.position[2] + 0.28 : r.userData.position[2],
        });
    });
  }
  setScatterMove(e, t = "up") {
    this.scatterGroup.children.map((r) => {
      r.userData.adcode === e &&
        p.to(r.position, {
          duration: 0.3,
          z:
            t === "up" ? r.userData.position[2] + 0.28 : r.userData.position[2],
        });
    });
  }
  calcUv2(e, t, r, a, o) {
    const n = e.attributes.position,
      d = e.attributes.uv,
      s = e.groups[0].count;
    for (let i = 0; i < s; i++) {
      const l = n.getX(i),
        u = n.getY(i),
        c = (l - a) / t,
        m = (u - o) / r;
      d.setXY(i, c, m);
    }
    (d.needsUpdate = !0), e.computeVertexNormals();
  }
  calcUv(e, t, r, a, o) {
    const n = e.attributes.position,
      d = e.attributes.uv;
    for (let s = 0; s < n.count; s++) {
      const i = n.getX(s),
        l = n.getY(s),
        u = (i - a) / t,
        c = (l - o) / r;
      d.setXY(s, u, c);
    }
    (d.needsUpdate = !0), e.computeVertexNormals();
  }
  createProvinceMaterial() {
    let e = this.assets.instance.getResource("topNormal");
    e.wrapS = e.wrapT = w;
    let t = new k({
      color: 400967,
      emissive: 0,
      map: e,
      transparent: !0,
      normalMap: e,
      opacity: 1,
    });
    t.onBeforeCompile = (o) => {
      (o.uniforms = {
        ...o.uniforms,
        uColor1: { value: new D(2780818) },
        uColor2: { value: new D(1058614) },
      }),
        (o.vertexShader = o.vertexShader.replace(
          "void main() {",
          `
        attribute float alpha;
        varying vec3 vPosition;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vPosition = position;
      `
        )),
        (o.fragmentShader = o.fragmentShader.replace(
          "void main() {",
          `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
        )),
        (o.fragmentShader = o.fragmentShader.replace(
          "#include <opaque_fragment>",
          `
      #ifdef OPAQUE
      diffuseColor.a = 1.0;
      #endif

      // https://github.com/mrdoob/three.js/pull/22425
      #ifdef USE_TRANSMISSION
      diffuseColor.a *= transmissionAlpha + 0.1;
      #endif
      vec3 gradient = mix(uColor1, uColor2, vPosition.x/15.78); // 15.78

      outgoingLight = outgoingLight*gradient;


      gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
      `
        ));
    };
    let r = this.assets.instance.getResource("side");
    (r.wrapS = w), (r.wrapT = w), r.repeat.set(1, 1.5), (r.offset.y += 0.065);
    let a = new k({
      color: 16777215,
      map: r,
      fog: !1,
      transparent: !0,
      side: U,
    });
    return (
      this.time.on("tick", () => {
        r.offset.y += 0.005;
      }),
      (a.onBeforeCompile = (o) => {
        (o.uniforms = {
          ...o.uniforms,
          uColor1: { value: new D(3191807) },
          uColor2: { value: new D(3191807) },
        }),
          (o.vertexShader = o.vertexShader.replace(
            "void main() {",
            `
        attribute float alpha;
        varying vec3 vPosition;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vPosition = position;
      `
          )),
          (o.fragmentShader = o.fragmentShader.replace(
            "void main() {",
            `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
          )),
          (o.fragmentShader = o.fragmentShader.replace(
            "#include <opaque_fragment>",
            `
      #ifdef OPAQUE
      diffuseColor.a = 1.0;
      #endif

      // https://github.com/mrdoob/three.js/pull/22425
      #ifdef USE_TRANSMISSION
      diffuseColor.a *= transmissionAlpha + 0.1;
      #endif
      vec3 gradient = mix(uColor1, uColor2, vPosition.z/1.2);

      outgoingLight = outgoingLight*gradient;


      gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
      `
          ));
      }),
      [t, a]
    );
  }
  createBar() {
    let e = this,
      t = ee(Z);
    const r = new M();
    this.barGroup = r;
    const a = 0.7,
      o = 4 * a,
      n = t[0].value;
    (this.allBar = []),
      (this.allBarMaterial = []),
      (this.allGuangquan = []),
      (this.allProvinceLabel = []),
      (this.allProvinceNameLabel = []),
      t.map((i, l) => {
        let u = o * (i.value / n),
          c = new P({
            color: 16777215,
            transparent: !0,
            opacity: 0,
            depthTest: !1,
            fog: !1,
          });
        new je(c, {
          uColor1: l < 3 ? 16506760 : 5291006,
          uColor2: l < 3 ? 16506760 : 5291006,
          size: u,
          dir: "y",
        });
        const m = new Be(0.1 * a, 0.1 * a, u);
        m.translate(0, 0, u / 2);
        const h = new G(m, c);
        h.renderOrder = 22;
        let b = h,
          [g, x] = this.geoProjection(i.centroid);
        b.position.set(g, -x, 0.96),
          b.scale.set(1, 1, 0),
          (b.userData.name = i.name),
          (b.userData.adcode = i.adcode),
          (b.userData.position = [g, -x, 0.96]);
        let L = this.createQuan(new f(0, 0, 0.02), l),
          B = this.createHUIGUANG(u, l < 3 ? 16776948 : 7863285);
        b.add(...B), b.add(L), r.add(b), (r.rotation.x = -Math.PI / 2);
        let S = d(i, l, new f(g, -x, 1.4 + u)),
          v = s(i, l, new f(g, -x - 0.5, 0.9));
        this.allBar.push(b),
          this.allBarMaterial.push(c),
          this.allGuangquan.push(L),
          this.allProvinceLabel.push(S),
          this.allProvinceNameLabel.push(v);
      }),
      this.scene.add(r);
    function d(i, l, u) {
      let c = e.label3d.create("", "provinces-label-style02", !0);
      return (
        c.init(
          `<div class="provinces-label-style02 ${l < 3 ? "yellow" : ""}">
      <div class="provinces-label-style02-wrap">
        <div class="number"><span class="value">${
          i.value
        }</span><span class="unit">万人</span></div>
        <div class="no">${l + 1}</div>
      </div>
    </div>`,
          u
        ),
        e.label3d.setLabelStyle(c, 0.01, "x"),
        c.setParent(e.labelGroup),
        (c.userData.adcode = i.adcode),
        (c.userData.position = [u.x, u.y, u.z]),
        c
      );
    }
    function s(i, l, u) {
      let c = e.label3d.create("", "provinces-name-label", !0);
      return (
        c.init(
          `<div class="provinces-name-label"><div class="provinces-name-label-wrap">${i.name}</div></div>`,
          u
        ),
        e.label3d.setLabelStyle(c, 0.01, "x"),
        c.setParent(e.provinceNameGroup),
        (c.userData.adcode = i.adcode),
        (c.userData.position = [u.x, u.y, u.z]),
        c
      );
    }
  }
  createHUIGUANG(e, t) {
    let r = new N(0.35, e);
    r.translate(0, e / 2, 0);
    const a = this.assets.instance.getResource("huiguang");
    (a.colorSpace = A), (a.wrapS = w), (a.wrapT = w);
    let o = new P({
        color: t,
        map: a,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        side: U,
        blending: C,
      }),
      n = new G(r, o);
    (n.renderOrder = 23), n.rotateX(Math.PI / 2);
    let d = n.clone(),
      s = n.clone();
    return (
      d.rotateY((Math.PI / 180) * 60),
      s.rotateY((Math.PI / 180) * 120),
      [n, d, s]
    );
  }
  createQuan(e, t) {
    const r = this.assets.instance.getResource("guangquan1"),
      a = this.assets.instance.getResource("guangquan2");
    let o = new N(0.5, 0.5),
      n = new P({
        color: 16777215,
        map: r,
        alphaMap: r,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: C,
      }),
      d = new P({
        color: 16777215,
        map: a,
        alphaMap: a,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: C,
      }),
      s = new G(o, n),
      i = new G(o, d);
    return (
      (s.renderOrder = 24),
      (i.renderOrder = 24),
      s.position.copy(e),
      i.position.copy(e),
      (i.position.z -= 0.001),
      s.scale.set(0, 0, 0),
      i.scale.set(0, 0, 0),
      (this.quanGroup = new M()),
      this.quanGroup.add(s, i),
      this.time.on("tick", (l) => {
        s.rotation.z += l * 2;
      }),
      this.quanGroup
    );
  }
  createFloor() {
    let e = new N(20, 20);
    const t = this.assets.instance.getResource("gaoguang1");
    (t.colorSpace = A), (t.wrapS = w), (t.wrapT = w), t.repeat.set(1, 1);
    let r = new P({ map: t, opacity: 1, transparent: !0, blending: C }),
      a = new G(e, r);
    a.rotateX(-Math.PI / 2), a.position.set(0, 0.05, 0), this.scene.add(a);
    const o = this.assets.instance.getResource("quan");
    let n = new G(
      new N(25, 25),
      new P({ map: o, opacity: 1, transparent: !0, blending: C, depthTest: !1 })
    );
    n.rotateX(-Math.PI / 2),
      n.position.set(0, 2.55, 0),
      (this.quan = n),
      this.scene.add(n);
  }
  createGridRipple() {
    let e = new N(100, 100);
    const t = this.assets.instance.getResource("grid"),
      r = this.assets.instance.getResource("gridBlack");
    (t.wrapS = t.wrapT = r.wrapS = r.wrapT = w),
      t.repeat.set(80, 80),
      r.repeat.set(80, 80);
    let a = new P({
        map: t,
        color: 65535,
        transparent: !0,
        opacity: 0.5,
        alphaMap: r,
        blending: C,
      }),
      o = new G(e, a);
    o.rotateX(-Math.PI / 2);
    let [n, d] = this.geoProjection(this.pointCenter);
    o.position.set(n, -d, 0.01);
    const s = o.clone();
    (s.material = a.clone()),
      (s.material.opacity = 0.1),
      this.scene.add(o, s),
      new xt({
        material: a,
        time: this.time,
        size: 100,
        diffuseColor: 499686,
        diffuseSpeed: 5,
        diffuseWidth: 50,
        diffuseDir: 2,
      });
  }
  createMirror() {
    const e = new N(20, 20),
      t = new j(e, {
        clipBias: 0.003,
        textureWidth: this.sizes.width,
        textureHeight: this.sizes.height,
        color: 11908533,
        multisample: 1,
      });
    (t.material.transparent = !0),
      (t.material.opacity = 0.2),
      (t.position.y = -0.01),
      t.rotateX(-Math.PI / 2),
      (this.groundMirror = t),
      (this.groundMirror.visible = !1),
      this.scene.add(t);
  }
  createLabel() {
    let e = this,
      t = this.labelGroup,
      r = this.label3d,
      a = [];
    wt.map((i) => {
      if (i.hide == !0) return !1;
      let l = d(i, r, t);
      a.push(l);
    });
    let o = s(
        {
          icon: q,
          center: [125.109913, 26.881466],
          width: "40px",
          height: "40px",
          reflect: !0,
        },
        r,
        t
      ),
      n = s(
        {
          icon: q,
          center: [116.109913, 26.881466],
          width: "20px",
          height: "20px",
          reflect: !1,
        },
        r,
        t
      );
    a.push(o), a.push(n), (this.otherLabel = a);
    function d(i, l, u) {
      let c = l.create("", `china-label ${i.blur ? " blur" : ""}`, !1);
      const [m, h] = e.geoProjection(i.center);
      return (
        c.init(
          `<div class="other-label"><img class="label-icon" src="${q}">${i.name}</div>`,
          new f(m, -h, 0.4)
        ),
        l.setLabelStyle(c, 0.02, "x"),
        c.setParent(u),
        c
      );
    }
    function s(i, l, u) {
      let c = l.create(
        "",
        `decoration-label  ${i.reflect ? " reflect" : ""}`,
        !1
      );
      const [m, h] = e.geoProjection(i.center);
      return (
        c.init(
          `<div class="other-label"><img class="label-icon" style="width:${i.width};height:${i.height}" src="${i.icon}">`,
          new f(m, -h, 0.4)
        ),
        l.setLabelStyle(c, 0.02, "x"),
        c.setParent(u),
        c
      );
    }
  }
  createRotateBorder() {
    let e = 12,
      t = this.assets.instance.getResource("rotationBorder1"),
      r = this.assets.instance.getResource("rotationBorder2"),
      a = new Q(this, {
        width: e * 1.178,
        needRotate: !0,
        rotateSpeed: 0.001,
        material: new P({
          map: t,
          color: 4763647,
          transparent: !0,
          opacity: 0.2,
          depthWrite: !1,
          blending: C,
        }),
        position: new f(0, 0.07, 0),
      });
    (a.instance.renderOrder = 6),
      a.instance.scale.set(0, 0, 0),
      a.setParent(this.scene);
    let o = new Q(this, {
      width: e * 1.116,
      needRotate: !0,
      rotateSpeed: -0.004,
      material: new P({
        map: r,
        color: 4763647,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        blending: C,
      }),
      position: new f(0, 0.06, 0),
    });
    (o.instance.renderOrder = 6),
      o.instance.scale.set(0, 0, 0),
      o.setParent(this.scene),
      (this.rotateBorder1 = a.instance),
      (this.rotateBorder2 = o.instance);
  }
  createParticles() {
    (this.particles = new J(this, {
      num: 40,
      range: 30,
      dir: "up",
      material: new Re({
        map: J.createTexture(),
        size: 1,
        color: 61166,
        transparent: !0,
        opacity: 0.3,
        depthTest: !1,
        depthWrite: !1,
        vertexColors: !0,
        blending: C,
        sizeAttenuation: !0,
      }),
    })),
      this.particles.instance.position.set(0, 0, 0),
      (this.particles.instance.rotation.x = -Math.PI / 2),
      this.particles.setParent(this.scene),
      (this.particles.enable = !1),
      (this.particles.instance.visible = !1);
  }
  createFlyLine() {
    (this.flyLineGroup = new M()),
      (this.flyLineGroup.visible = !1),
      this.scene.add(this.flyLineGroup);
    const e = this.assets.instance.getResource("uv");
    (e.colorSpace = A), (e.wrapS = w), (e.wrapT = w), e.repeat.set(0.5, 1);
    const t = 0.02,
      r = 32,
      a = 8,
      o = !1;
    let [n, d] = this.geoProjection([119.200519, 26.047886]),
      s = new f(n, -d, 0);
    const i = new P({
      map: e,
      alphaMap: e,
      color: 2868444,
      transparent: !0,
      fog: !1,
      opacity: 1,
      depthTest: !1,
      blending: C,
    });
    this.time.on("tick", () => {
      e.offset.x += 0.005;
    }),
      Z.filter((l) => l.name != "福州市").map((l) => {
        let [u, c] = this.geoProjection(l.centroid),
          m = new f(u, -c, 0);
        const h = new f();
        h.addVectors(s, m).multiplyScalar(0.5), h.setZ(1.5);
        const b = new ze(s, h, m),
          g = new I(b, r, t, a, o),
          x = new G(g, i);
        (x.rotation.x = -Math.PI / 2),
          x.position.set(0, 0.9, 0),
          (x.renderOrder = 21),
          this.flyLineGroup.add(x);
      });
  }
  createScatter() {
    (this.scatterGroup = new M()),
      (this.scatterGroup.visible = !1),
      (this.scatterGroup.rotation.x = -Math.PI / 2),
      this.scene.add(this.scatterGroup);
    const e = this.assets.instance.getResource("arrow"),
      t = new _e({ map: e, color: 16776960, transparent: !0, depthTest: !1 });
    let r = ee(Mt),
      a = r[0].value;
    r.map((o) => {
      const n = new Oe(t);
      n.renderOrder = 23;
      let d = 0.1 + (o.value / a) * 0.2;
      n.scale.set(d, d, d);
      let [s, i] = this.geoProjection(o.geometry.coordinates);
      n.position.set(s, -i, 0.91),
        (n.userData.adcode = o.adcode),
        (n.userData.position = [s, -i, 0.91]),
        this.scatterGroup.add(n);
    });
  }
  createBadgeLabel() {
    const e = this;
    (e.badgeGroup.visible = !1),
      Pt.map((r) => {
        const [a, o] = this.geoProjection(r.geometry.coordinates);
        t(r, new f(a, -o, 1.42));
      });
    function t(r, a) {
      let o = e.label3d.create("", "badges-label", !0);
      return (
        o.init(
          `<div class="badges-label-wrap">
        平均工资：<span>${r.value}元</span>
        <img class="icon" src="${rt}" alt="" />
      </div>`,
          a
        ),
        e.label3d.setLabelStyle(o, 0.01, "x"),
        o.setParent(e.badgeGroup),
        o.hide(),
        (o.userData.adcode = r.adcode),
        (o.userData.position = [a.x, a.y, a.z]),
        o
      );
    }
  }
  createPathAnimate() {
    (this.pathLineGroup = new M()),
      (this.pathLineGroup.visible = !1),
      this.scene.add(this.pathLineGroup);
    const e = this.assets.instance.getResource("pathLine");
    (e.wrapS = w),
      (e.wrapT = w),
      (e.rotation = Math.PI),
      e.repeat.set(0.5, 1),
      (e.generateMipmaps = !1),
      (e.magFilter = X);
    const t = 0.02,
      r = 32,
      a = 8,
      o = !1,
      n = new P({
        map: e,
        color: 16573072,
        transparent: !0,
        fog: !1,
        opacity: 1,
        depthTest: !1,
        blending: C,
      });
    this.time.on("tick", () => {
      e.offset.x += 0.002;
    }),
      St.map((d) => {
        let s = [];
        d.geometry.coordinates.map((c) => {
          let [m, h] = this.geoProjection(c);
          s.push(new f(m, -h, 0));
        });
        const i = new oe(s),
          l = new I(i, r, t, a, o),
          u = new G(l, n);
        (u.rotation.x = -Math.PI / 2),
          u.position.set(0, 0.92, 0),
          (u.renderOrder = 21),
          this.pathLineGroup.add(u);
      });
  }
  update() {
    super.update(),
      this.stats && this.stats.update(),
      this.interactionManager && this.interactionManager.update();
  }
  destroy() {
    super.destroy(),
      this.debug.destroy(),
      this.label3d && this.label3d.destroy(),
      this.stats && this.stats.dom && document.body.removeChild(this.stats.dom),
      this.groundMirror && this.groundMirror.dispose();
  }
}
const Gt = { class: "map-fj" },
  Dt = R("canvas", { id: "canvas" }, null, -1),
  Tt = { class: "map-btn-group" },
  Zt = {
    __name: "map-animate-fj",
    setup(z) {
      let e = null;
      const t = ct({
          bar: !0,
          flyLine: !1,
          scatter: !1,
          card: !1,
          particle: !1,
          mirror: !1,
          path: !1,
        }),
        r = (a) => {
          (t[a] = !t[a]),
            a === "bar" &&
              ((e.barGroup.visible = t[a]),
              (e.labelGroup.visible = t[a]),
              e.labelGroup.children.map((o) => {
                t[a] ? o.show() : o.hide();
              }),
              t[a] &&
                p.to(e.camera.instance.position, {
                  duration: 1.5,
                  x: -0.2515849818960619,
                  y: 12.397744557047988,
                  z: 14.647659671139275,
                  ease: "power2.out",
                })),
            a === "particle" &&
              ((e.particles.enable = t[a]),
              (e.particles.instance.visible = t[a]),
              t[a] &&
                p.to(e.camera.instance.position, {
                  duration: 1.5,
                  x: 1.3936042010333503,
                  y: 12.843503633255807,
                  z: 15.531083792555943,
                  ease: "power2.out",
                })),
            a === "flyLine" &&
              ((e.flyLineGroup.visible = t[a]),
              t[a] &&
                p.to(e.camera.instance.position, {
                  duration: 1.5,
                  x: 7.284595660254882,
                  y: 8.601200725921402,
                  z: 8.484111984575117,
                  ease: "power2.out",
                })),
            a === "scatter" &&
              ((e.scatterGroup.visible = t[a]),
              t[a] &&
                p.to(e.camera.instance.position, {
                  duration: 1.5,
                  x: -1.5822674908813583,
                  y: 13.734493965446193,
                  z: 10.433605682960513,
                  ease: "power2.out",
                })),
            a === "card" &&
              ((e.badgeGroup.visible = t[a]),
              e.badgeGroup.children.map((o) => {
                t[a] ? o.show() : o.hide();
              }),
              t[a] &&
                p.to(e.camera.instance.position, {
                  duration: 1.5,
                  x: 0.5832989009549243,
                  y: 10.60782901904652,
                  z: 10.375996540623921,
                  ease: "power2.out",
                })),
            a === "mirror" &&
              ((e.groundMirror.visible = t[a]),
              t[a] &&
                p.to(e.camera.instance.position, {
                  duration: 1.5,
                  x: 1.5076367636912609,
                  y: 7.342872995705222,
                  z: 13.71718476819452,
                  ease: "power2.out",
                })),
            a === "path" &&
              ((e.pathLineGroup.visible = t[a]),
              t[a] &&
                p.to(e.camera.instance.position, {
                  duration: 1.5,
                  x: 3.0407302861197065,
                  y: 13.374588543737365,
                  z: 9.089794028509726,
                  ease: "power2.out",
                }));
        };
      return (
        dt(() => {
          e = new Ct(document.getElementById("canvas"), {
            geoProjectionCenter: [118.006468, 26.069925],
          });
        }),
        ut(() => {
          e && e.destroy();
        }),
        (a, o) => (
          pt(),
          ht("div", Gt, [
            Dt,
            R("div", Tt, [
              R(
                "div",
                {
                  class: F(["btn", { active: t.bar }]),
                  onClick: o[0] || (o[0] = (n) => r("bar")),
                },
                "柱状图",
                2
              ),
              R(
                "div",
                {
                  class: F(["btn", { active: t.flyLine }]),
                  onClick: o[1] || (o[1] = (n) => r("flyLine")),
                },
                "飞线",
                2
              ),
              R(
                "div",
                {
                  class: F(["btn", { active: t.scatter }]),
                  onClick: o[2] || (o[2] = (n) => r("scatter")),
                },
                "散点图",
                2
              ),
              R(
                "div",
                {
                  class: F(["btn", { active: t.card }]),
                  onClick: o[3] || (o[3] = (n) => r("card")),
                },
                "标牌",
                2
              ),
              R(
                "div",
                {
                  class: F(["btn", { active: t.particle }]),
                  onClick: o[4] || (o[4] = (n) => r("particle")),
                },
                "粒子特效",
                2
              ),
              R(
                "div",
                {
                  class: F(["btn", { active: t.path }]),
                  onClick: o[5] || (o[5] = (n) => r("path")),
                },
                "路径轨迹",
                2
              ),
              R(
                "div",
                {
                  class: F(["btn", { active: t.mirror }]),
                  onClick: o[6] || (o[6] = (n) => r("mirror")),
                },
                "倒影",
                2
              ),
            ]),
          ])
        )
      );
    },
  };
export { Zt as default };
