var de = Object.defineProperty;
var pe = (w, e, t) =>
  e in w
    ? de(w, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (w[e] = t);
var I = (w, e, t) => (pe(w, typeof e != "symbol" ? e + "" : e, t), t);
import {
  G as m,
  M as G,
  n as D,
  V as g,
  Q as ue,
  T as Z,
  b as N,
  v as he,
  F as me,
  a as fe,
  L as j,
  S as ve,
  E as ge,
  B as ye,
  f as be,
  C as z,
  w as xe,
  x as we,
  y as V,
  W as Me,
  H as Le,
  z as Se,
  U as Ge,
  I as Pe,
  J as De,
  K as _,
  R as P,
  q as ee,
  r as te,
  g as Ne,
  A as Ce,
  h as Te,
  i as Be,
  P as ze,
  j as Ee,
  d as H,
  D as U,
  k as Oe,
  l as E,
  m as $,
  p as Fe,
  N as Re,
} from "./OrbitControls-9c9ee6bc.js";
import { R as ke, g as ae, M as Ae } from "./index-1453e2ee.js";
import { t as qe, g as A } from "./utils-9af1928d.js";
import { D as Ie } from "./index-4ec0cc76.js";
import { L as He } from "./Label3d-1a598e21.js";
import { G as je, P as X } from "./GradientShader-7cc661aa.js";
import { P as Q } from "./Particles-a008e8a7.js";
import { g as u } from "./index-4db78ffb.js";
import { s as We } from "./stats.module-077ce25d.js";
import {
  f as Ve,
  g as _e,
  b as Ue,
  q as $e,
  a as Xe,
  s as Qe,
} from "./pathLine-9a4e7519.js";
import { c as Ye, s as Je } from "./chinaBlurLine-b7b06be6.js";
import { t as Ke } from "./top_surface_normal_map2-a65ff1bb.js";
import { o as Ze } from "./ocean-blue-bg-49e3ac50.js";
import {
  h as et,
  r as tt,
  g as at,
  a as it,
} from "./rotationBorder1-447bf02a.js";
import { r as st } from "./rotationBorder2-a143eae0.js";
import { g as nt } from "./grid-3e023ca8.js";
import { f as rt } from "./flyLine2-e7135ba7.js";
import { a as ot } from "./arrow-8777f461.js";
import { p as lt } from "./pathLine2-dee41061.js";
import { p as ct } from "./pathLine4-99db6c46.js";
import { p as dt } from "./point1-7bb35866.js";
import { w as pt } from "./szxs_logo-02219344.js";
import { l as ut } from "./label-arrow-b5ffbd19.js";
import { a as ht } from "./three.interactive-c6512469.js";
import { e as mt } from "./GC-b02a3dbf.js";
import {
  reactive,
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
  createElementVNode,
  normalizeClass,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
class xt {
  constructor() {
    (this.past = []), (this.future = []), (this.present = void 0);
  }
  gotoState(e) {
    const t = [...this.past, this.present, ...this.future];
    (this.present = t[e]),
      (this.past = t.slice(0, e)),
      (this.future = t.slice(e + 1, t.length));
  }
  getIndex() {
    return this.past.length;
  }
  push(e) {
    this.present && this.past.push(this.present), (this.present = e);
  }
  undo() {
    this.past.length !== 0 && this.gotoState(this.getIndex() - 1);
  }
  redo() {
    this.future.length !== 0 && this.gotoState(this.getIndex() + 1);
  }
}
class wt {
  constructor({ time: e, geoProjection: t }, a) {
    (this.time = e), (this.geoProjection = t), (this.instance = new m());
    let i = {
      centerPoint: [0, 0],
      middleHeight: 15,
      speed: 0.003,
      texture: null,
      radius: 0.1,
      segments: 32,
      radialSegments: 8,
      data: [],
      material: new G({
        color: 16506760,
        transparent: !0,
        fog: !1,
        opacity: 1,
        depthTest: !1,
        blending: D,
      }),
    };
    (this.options = Object.assign({}, i, a)), this.init();
  }
  init() {
    const {
      centerPoint: e,
      material: t,
      texture: a,
      segments: i,
      radius: s,
      radialSegments: n,
      data: r,
      speed: l,
      middleHeight: o,
    } = this.options;
    let [c, p] = this.geoProjection(e),
      d = new g(c, -p, 0);
    r.map((M) => {
      let [L, y] = this.geoProjection(M.centroid),
        h = new g(L, -y, 0);
      const v = new g();
      v.addVectors(d, h).multiplyScalar(0.5), v.setZ(o);
      const x = new ue(d, v, h),
        C = new Z(x, i, s, n, !1),
        S = new N(C, t);
      S.position.set(0, 0, 0), (S.renderOrder = 21), this.instance.add(S);
    }),
      this.time.on("tick", () => {
        this.run && (a.offset.x -= l);
      });
  }
  getInstance() {
    return this.instance;
  }
  setParent(e) {
    e.add(this.instance);
  }
  set visible(e) {
    (this.instance.visible = e), (this.run = e);
  }
}
class Y {
  constructor({ time: e, geoProjection: t }, a) {
    (this.time = e),
      (this.geoProjection = t),
      (this.instance = new m()),
      (this.run = !0);
    let i = {
      speed: 0.003,
      texture: null,
      radius: 0.1,
      segments: 32,
      radialSegments: 8,
      data: [],
      renderOrder: 1,
      material: new G({
        color: 16777215,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        blending: D,
      }),
    };
    (this.options = Object.assign({}, i, a)), this.init();
  }
  init() {
    const {
      material: e,
      texture: t,
      segments: a,
      radius: i,
      radialSegments: s,
      data: n,
      speed: r,
      renderOrder: l,
    } = this.options;
    n.map((o) => {
      let c = [];
      o.geometry.coordinates.map((L) => {
        L[0].forEach((y) => {
          let [h, v] = this.geoProjection(y);
          c.push(new g(h, -v, 0));
        });
      });
      const p = new he(c),
        d = new Z(p, a, i, s, !1),
        M = new N(d, e);
      M.position.set(0, 0, 0), (M.renderOrder = l), this.instance.add(M);
    }),
      this.time.on("tick", (o) => {
        this.run && (t.offset.x += r * o);
      });
  }
  getInstance() {
    return this.instance;
  }
  setParent(e) {
    e.add(this.instance);
  }
  set visible(e) {
    (this.instance.visible = e), (this.run = e);
  }
}
class Mt {
  constructor() {
    (this.toastNode = null), this.init();
  }
  init() {
    if (this.toastNode) return !1;
    (this.toastNode = document.createElement("div")),
      this.toastNode.classList.add("fixed-loading"),
      (this.toastNode.id = "fixed-loading"),
      (this.toastNode.innerHTML = `
    <div class="page-loading-container">
      <div class="page-loading"></div>
    </div>
  `),
      (this.toastNode.style.visibility = "hidden"),
      document.body.appendChild(this.toastNode);
  }
  show() {
    this.toastNode.style.visibility = "visible";
  }
  hide() {
    this.toastNode && (this.toastNode.style.visibility = "hidden");
  }
  destroy() {
    this.toastNode && document.body.removeChild(this.toastNode);
  }
}
class Lt {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new ke()),
      this.instance.addLoader(me, "FileLoader"),
      this.instance.on("onProgress", (a, i, s) => {
        ((i / s) * 100).toFixed(2) + "";
      }),
      this.instance.on("onLoad", () => {
        this.onLoadCallback && this.onLoadCallback();
      });
    let e = "/sayhello-site/",
      t = [
        { type: "Texture", name: "flag", path: Ve },
        { type: "Texture", name: "watermark", path: pt },
        { type: "Texture", name: "grid", path: nt },
        { type: "Texture", name: "pathLine", path: ct },
        { type: "Texture", name: "pathLine2", path: lt },
        { type: "Texture", name: "flyLine", path: rt },
        { type: "Texture", name: "arrow", path: ot },
        { type: "Texture", name: "gridBlack", path: _e },
        { type: "Texture", name: "borderGlow", path: Ue },
        { type: "Texture", name: "quan", path: $e },
        { type: "Texture", name: "gaoguang1", path: Xe },
        { type: "Texture", name: "huiguang", path: et },
        { type: "Texture", name: "rotationBorder1", path: tt },
        { type: "Texture", name: "rotationBorder2", path: st },
        { type: "Texture", name: "guangquan1", path: at },
        { type: "Texture", name: "guangquan2", path: it },
        { type: "Texture", name: "chinaBlurLine", path: Ye },
        { type: "Texture", name: "ocean", path: Ze },
        { type: "Texture", name: "side", path: Qe },
        { type: "Texture", name: "side2", path: Je },
        { type: "Texture", name: "point", path: dt },
        { type: "Texture", name: "topNormal", path: Ke },
        {
          type: "File",
          name: "chinaStorke",
          path: e + "assets/json/中华人民共和国-轮廓.json",
        },
        {
          type: "File",
          name: "china",
          path: e + "assets/json/中华人民共和国.json",
        },
        {
          type: "File",
          name: "transportPath",
          path: e + "assets/json/运输路径.json",
        },
      ];
    this.instance.loadAll(t);
  }
}
class ie {
  constructor({ assets: e, time: t, geoProjection: a }, i = {}) {
    I(this, "geoProjection", (e) => {
      let { center: t } = this.config;
      return ae().center(t).scale(120).translate([0, 0])(e);
    });
    (this.mapGroup = new m()),
      (this.assets = e),
      (this.time = t),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new g(0, 0, 0),
          center: new fe(0, 0),
          data: "",
          renderOrder: 1,
          topFaceMaterial: new G({
            color: 1582651,
            transparent: !0,
            opacity: 1,
          }),
          sideMaterial: new G({ color: 464171, transparent: !0, opacity: 1 }),
          lineMaterial: new j({ color: 2868444 }),
          depth: 0.1,
        },
        i
      )),
      this.mapGroup.position.copy(this.config.position);
    let s = qe(this.config.data);
    this.create(s);
  }
  create(e) {
    let t = new m();
    e.features.forEach((a, i) => {
      let {
        name: s,
        center: n = [],
        centroid: r = [],
        adcode: l,
      } = a.properties;
      this.coordinates.push({
        name: s,
        center: n,
        centroid: a.properties.centroid || a.properties.center,
        adcode: l,
        enName: "",
        value: 0,
      });
      const o = new m();
      (o.name = "meshGroup" + i),
        (o.userData = {
          index: i,
          name: s,
          center: n,
          centroid: a.properties.centroid || a.properties.center,
          adcode: l,
          childrenNum: a.properties.childrenNum,
        }),
        (o.userData.materialEmissiveHex =
          this.config.topFaceMaterial.emissive.getHex());
      let c = new m();
      (c.name = "lineGroup" + i),
        (c.userData.index = i),
        (c.userData.adcode = l);
      const p = {
        depth: this.config.depth,
        bevelEnabled: !0,
        bevelSegments: 1,
        bevelThickness: 0.1,
      };
      let d = [this.config.topFaceMaterial.clone(), this.config.sideMaterial];
      a.geometry.coordinates.forEach((M) => {
        M.forEach((h, v) => {
          const x = new ve();
          for (let f = 0; f < h.length; f++) {
            if (!h[f][0] || !h[f][1]) return !1;
            const [O, F] = this.geoProjection(h[f]);
            f === 0 && x.moveTo(O, -F), x.lineTo(O, -F);
          }
          const C = new ge(x, p),
            S = new N(C, d);
          (S.userData.depth = this.config.depth),
            (S.userData.name = s),
            (S.userData.adcode = l),
            (S.userData.materialEmissiveHex =
              this.config.topFaceMaterial.emissive.getHex()),
            (S.renderOrder = this.config.renderOrder),
            o.add(S);
        });
        const L = [];
        let y = null;
        M[0].forEach((h) => {
          const [v, x] = this.geoProjection(h);
          L.push(new g(v, -x, 0)), (y = this.createLine(L));
        }),
          c.add(y);
      }),
        t.add(c),
        c.position.set(0, 0, this.config.depth + 0.11),
        o.add(c),
        this.mapGroup.add(o);
    });
  }
  createLine(e) {
    const t = new ye();
    t.setFromPoints(e);
    let a = new be(t, this.config.lineMaterial);
    return (a.renderOrder = 2), (a.name = "mapLine"), a;
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(e) {
    e.add(this.mapGroup);
  }
}
class St {
  constructor({
    material: e,
    time: t,
    size: a,
    diffuseColor: i,
    diffuseSpeed: s,
    diffuseWidth: n,
    diffuseDir: r,
  }) {
    this.time = t;
    let l = {
      size: 100,
      diffuseSpeed: 15,
      diffuseColor: 9345950,
      diffuseWidth: 10,
      diffuseDir: 1,
    };
    (this.options = Object.assign({}, l, {
      material: e,
      size: a,
      diffuseColor: i,
      diffuseSpeed: s,
      diffuseWidth: n,
      diffuseDir: r,
    })),
      this.init();
  }
  init() {
    let e = null,
      {
        material: t,
        size: a,
        diffuseColor: i,
        diffuseSpeed: s,
        diffuseWidth: n,
        diffuseDir: r,
      } = this.options,
      l = a / s;
    (t.onBeforeCompile = (o) => {
      (e = o),
        (o.uniforms = {
          ...o.uniforms,
          uTime: { value: 0 },
          uSpeed: { value: s },
          uWidth: { value: n },
          uColor: { value: new z(i) },
          uDir: { value: r },
        }),
        (o.vertexShader = o.vertexShader.replace(
          "void main() {",
          `
            varying vec3 vPosition;
            void main(){
              vPosition = position;
          `
        )),
        (o.fragmentShader = o.fragmentShader.replace(
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
        (o.fragmentShader = o.fragmentShader.replace(
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
      this.time.on("tick", (o) => {
        e &&
          ((e.uniforms.uTime.value += o),
          e.uniforms.uTime.value > l && (e.uniforms.uTime.value = 0));
      });
  }
}
const J = [
    {
      name: "北京市",
      center: [116.405285, 39.904989],
      centroid: [116.41995, 40.18994],
      adcode: 11e4,
      enName: "",
      value: 50,
    },
    {
      name: "天津市",
      center: [117.190182, 39.125596],
      centroid: [117.347043, 39.288036],
      adcode: 12e4,
      enName: "",
      value: 10,
    },
    {
      name: "河北省",
      center: [114.502461, 38.045474],
      centroid: [114.502461, 38.045474],
      adcode: 13e4,
      enName: "",
      value: 180,
    },
    {
      name: "山西省",
      center: [112.549248, 37.857014],
      centroid: [112.304436, 37.618179],
      adcode: 14e4,
      enName: "",
      value: 120,
    },
    {
      name: "内蒙古自治区",
      center: [111.670801, 40.818311],
      centroid: [114.077429, 44.331087],
      adcode: 15e4,
      enName: "",
      value: 80,
    },
    {
      name: "辽宁省",
      center: [123.429096, 41.796767],
      centroid: [122.604994, 41.299712],
      adcode: 21e4,
      enName: "",
      value: 60,
    },
    {
      name: "吉林省",
      center: [125.3245, 43.886841],
      centroid: [126.171208, 43.703954],
      adcode: 22e4,
      enName: "",
      value: 40,
    },
    {
      name: "黑龙江省",
      center: [126.642464, 45.756967],
      centroid: [127.693027, 48.040465],
      adcode: 23e4,
      enName: "",
      value: 70,
    },
    {
      name: "上海市",
      center: [121.472644, 31.231706],
      centroid: [121.438737, 31.072559],
      adcode: 31e4,
      enName: "",
      value: 40,
    },
    {
      name: "江苏省",
      center: [118.767413, 32.041544],
      centroid: [119.486506, 32.983991],
      adcode: 32e4,
      enName: "",
      value: 120,
    },
    {
      name: "浙江省",
      center: [120.153576, 30.287459],
      centroid: [120.109913, 29.181466],
      adcode: 33e4,
      enName: "",
      value: 130,
    },
    {
      name: "安徽省",
      center: [117.283042, 31.86119],
      centroid: [117.226884, 31.849254],
      adcode: 34e4,
      enName: "",
      value: 150,
    },
    {
      name: "福建省",
      center: [119.306239, 26.075302],
      centroid: [118.006468, 26.069925],
      adcode: 35e4,
      enName: "",
      value: 110,
    },
    {
      name: "江西省",
      center: [115.892151, 28.676493],
      centroid: [115.732975, 27.636112],
      adcode: 36e4,
      enName: "",
      value: 120,
    },
    {
      name: "山东省",
      center: [117.000923, 36.675807],
      centroid: [118.187759, 36.376092],
      adcode: 37e4,
      enName: "",
      value: 80,
    },
    {
      name: "河南省",
      center: [113.665412, 34.757975],
      centroid: [113.619717, 33.902648],
      adcode: 41e4,
      enName: "",
      value: 180,
    },
    {
      name: "湖北省",
      center: [114.298572, 30.584355],
      centroid: [112.271301, 30.987527],
      adcode: 42e4,
      enName: "",
      value: 170,
    },
    {
      name: "湖南省",
      center: [112.982279, 28.19409],
      centroid: [111.711649, 27.629216],
      adcode: 43e4,
      enName: "",
      value: 140,
    },
    {
      name: "广东省",
      center: [113.280637, 23.125178],
      centroid: [113.429919, 23.334643],
      adcode: 44e4,
      enName: "",
      value: 130,
    },
    {
      name: "广西壮族自治区",
      center: [108.320004, 22.82402],
      centroid: [108.7944, 23.833381],
      adcode: 45e4,
      enName: "",
      value: 100,
    },
    {
      name: "海南省",
      center: [110.33119, 20.031971],
      centroid: [109.754859, 19.189767],
      adcode: 46e4,
      enName: "",
      value: 40,
    },
    {
      name: "重庆市",
      center: [106.504962, 29.533155],
      centroid: [107.8839, 30.067297],
      adcode: 5e5,
      enName: "",
      value: 124,
    },
    {
      name: "四川省",
      center: [104.065735, 30.659462],
      centroid: [102.693453, 30.674545],
      adcode: 51e4,
      enName: "",
      value: 160,
    },
    {
      name: "贵州省",
      center: [106.713478, 26.578343],
      centroid: [106.880455, 26.826368],
      adcode: 52e4,
      enName: "",
      value: 120,
    },
    {
      name: "云南省",
      center: [102.712251, 25.040609],
      centroid: [101.485106, 25.008643],
      adcode: 53e4,
      enName: "",
      value: 170,
    },
    {
      name: "西藏自治区",
      center: [91.132212, 29.660361],
      centroid: [88.388277, 31.56375],
      adcode: 54e4,
      enName: "",
      value: 70,
    },
    {
      name: "陕西省",
      center: [108.948024, 34.263161],
      centroid: [108.887114, 35.263661],
      adcode: 61e4,
      enName: "",
      value: 80,
    },
    {
      name: "甘肃省",
      center: [103.823557, 36.058039],
      centroid: [103.823557, 36.058039],
      adcode: 62e4,
      enName: "",
      value: 90,
    },
    {
      name: "青海省",
      center: [101.778916, 36.623178],
      centroid: [96.043533, 35.726403],
      adcode: 63e4,
      enName: "",
      value: 50,
    },
    {
      name: "宁夏回族自治区",
      center: [106.278179, 38.46637],
      centroid: [106.169866, 37.291332],
      adcode: 64e4,
      enName: "",
      value: 70,
    },
    {
      name: "新疆维吾尔自治区",
      center: [87.617733, 43.792818],
      centroid: [85.294711, 41.371801],
      adcode: 65e4,
      enName: "",
      value: 40,
    },
    {
      name: "台湾省",
      center: [121.509062, 25.044332],
      centroid: [120.971485, 23.749452],
      adcode: 71e4,
      enName: "",
      value: 30,
    },
    {
      name: "香港特别行政区",
      center: [114.173355, 22.320048],
      centroid: [114.134357, 22.377366],
      adcode: 81e4,
      enName: "",
      value: 10,
    },
    {
      name: "澳门特别行政区",
      center: [113.54909, 22.198951],
      centroid: [113.566988, 22.159307],
      adcode: 82e4,
      enName: "",
      value: 5,
    },
  ],
  Gt = [
    {
      s: 4,
      value: 24,
      lng: 102.567724,
      lat: 29.940219,
      province: "四川省",
      adcode: 51e4,
    },
    {
      s: 1,
      value: 68,
      lng: 89.119392,
      lat: 45.376082,
      province: "新疆维吾尔自治区",
      adcode: 65e4,
    },
    {
      s: 2,
      value: 68,
      lng: 125.734456,
      lat: 45.311052,
      province: "吉林省",
      adcode: 22e4,
    },
    {
      s: 2,
      value: 68,
      lng: 106.343056,
      lat: 26.451602,
      province: "贵州省",
      adcode: 52e4,
    },
    {
      s: 3,
      value: 10,
      lng: 121.288287,
      lat: 41.793672,
      province: "辽宁省",
      adcode: 21e4,
    },
    {
      s: 2,
      value: 24,
      lng: 110.000685,
      lat: 39.401933,
      province: "内蒙古自治区",
      adcode: 15e4,
    },
    {
      s: 1,
      value: 24,
      lng: 106.019359,
      lat: 23.725817,
      province: "云南省",
      adcode: 53e4,
    },
    {
      s: 4,
      value: 10,
      lng: 105.762469,
      lat: 31.207529,
      province: "四川省",
      adcode: 51e4,
    },
    {
      s: 2,
      value: 68,
      lng: 131.885665,
      lat: 46.3968,
      province: "黑龙江省",
      adcode: 23e4,
    },
    {
      s: 2,
      value: 99,
      lng: 80.451482,
      lat: 34.098914,
      province: "西藏自治区",
      adcode: 54e4,
    },
    {
      s: 3,
      value: 56,
      lng: 116.758467,
      lat: 40.422062,
      province: "北京市",
      adcode: 11e4,
    },
    {
      s: 4,
      value: 24,
      lng: 118.047202,
      lat: 34.108716,
      province: "江苏省",
      adcode: 32e4,
    },
    {
      s: 3,
      value: 68,
      lng: 115.28116,
      lat: 31.030701,
      province: "湖北省",
      adcode: 42e4,
    },
    {
      s: 3,
      value: 24,
      lng: 90.811741,
      lat: 40.286935,
      province: "新疆维吾尔自治区",
      adcode: 65e4,
    },
    {
      lng: 97.847928,
      lat: 36.63359,
      s: 1,
      value: 24,
      province: "青海省",
      adcode: 63e4,
    },
    {
      lng: 111.241497,
      lat: 27.634283,
      s: 4,
      value: 67,
      province: "湖南省",
      adcode: 43e4,
    },
    {
      lng: 92.07031,
      lat: 31.067068,
      s: 6,
      value: 20,
      province: "西藏自治区",
      adcode: 54e4,
    },
  ],
  Pt = [
    {
      adcode: 15e4,
      value: 7621,
      geometry: { type: "Point", coordinates: [111.670801, 40.818311] },
    },
    {
      adcode: 14e4,
      value: 8787,
      geometry: { type: "Point", coordinates: [112.549248, 37.857014] },
    },
    {
      adcode: 32e4,
      value: 9821,
      geometry: { type: "Point", coordinates: [118.767413, 32.041544] },
    },
    {
      adcode: 5e5,
      value: 8765,
      geometry: { type: "Point", coordinates: [106.504962, 29.533155] },
    },
    {
      adcode: 53e4,
      value: 8741,
      geometry: { type: "Point", coordinates: [102.712251, 25.040609] },
    },
  ];
class q extends N {
  constructor(e, t = {}) {
    super(e),
      (this.isReflector = !0),
      (this.type = "Reflector"),
      (this.camera = new xe());
    const a = this,
      i = t.color !== void 0 ? new z(t.color) : new z(8355711),
      s = t.textureWidth || 512,
      n = t.textureHeight || 512,
      r = t.clipBias || 0,
      l = t.shader || q.ReflectorShader,
      o = t.multisample !== void 0 ? t.multisample : 4,
      c = new we(),
      p = new g(),
      d = new g(),
      M = new g(),
      L = new V(),
      y = new g(0, 0, -1),
      h = new _(),
      v = new g(),
      x = new g(),
      C = new _(),
      S = new V(),
      f = this.camera,
      O = new Me(s, n, { samples: o, type: Le }),
      F = new Se({
        name: l.name !== void 0 ? l.name : "unspecified",
        uniforms: Ge.clone(l.uniforms),
        fragmentShader: l.fragmentShader,
        vertexShader: l.vertexShader,
      });
    (F.uniforms.tDiffuse.value = O.texture),
      (F.uniforms.color.value = i),
      (F.uniforms.textureMatrix.value = S),
      (this.material = F),
      (this.onBeforeRender = function (b, se, k) {
        if (
          (d.setFromMatrixPosition(a.matrixWorld),
          M.setFromMatrixPosition(k.matrixWorld),
          L.extractRotation(a.matrixWorld),
          p.set(0, 0, 1),
          p.applyMatrix4(L),
          v.subVectors(d, M),
          v.dot(p) > 0)
        )
          return;
        v.reflect(p).negate(),
          v.add(d),
          L.extractRotation(k.matrixWorld),
          y.set(0, 0, -1),
          y.applyMatrix4(L),
          y.add(M),
          x.subVectors(d, y),
          x.reflect(p).negate(),
          x.add(d),
          f.position.copy(v),
          f.up.set(0, 1, 0),
          f.up.applyMatrix4(L),
          f.up.reflect(p),
          f.lookAt(x),
          (f.far = k.far),
          f.updateMatrixWorld(),
          f.projectionMatrix.copy(k.projectionMatrix),
          S.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
          S.multiply(f.projectionMatrix),
          S.multiply(f.matrixWorldInverse),
          S.multiply(a.matrixWorld),
          c.setFromNormalAndCoplanarPoint(p, d),
          c.applyMatrix4(f.matrixWorldInverse),
          h.set(c.normal.x, c.normal.y, c.normal.z, c.constant);
        const T = f.projectionMatrix;
        (C.x = (Math.sign(h.x) + T.elements[8]) / T.elements[0]),
          (C.y = (Math.sign(h.y) + T.elements[9]) / T.elements[5]),
          (C.z = -1),
          (C.w = (1 + T.elements[10]) / T.elements[14]),
          h.multiplyScalar(2 / h.dot(C)),
          (T.elements[2] = h.x),
          (T.elements[6] = h.y),
          (T.elements[10] = h.z + 1 - r),
          (T.elements[14] = h.w),
          (a.visible = !1);
        const ne = b.getRenderTarget(),
          re = b.xr.enabled,
          oe = b.shadowMap.autoUpdate,
          le = b.outputColorSpace,
          ce = b.toneMapping;
        (b.xr.enabled = !1),
          (b.shadowMap.autoUpdate = !1),
          (b.outputColorSpace = Pe),
          (b.toneMapping = De),
          b.setRenderTarget(O),
          b.state.buffers.depth.setMask(!0),
          b.autoClear === !1 && b.clear(),
          b.render(se, f),
          (b.xr.enabled = re),
          (b.shadowMap.autoUpdate = oe),
          (b.outputColorSpace = le),
          (b.toneMapping = ce),
          b.setRenderTarget(ne);
        const W = k.viewport;
        W !== void 0 && b.state.viewport(W), (a.visible = !0);
      }),
      (this.getRenderTarget = function () {
        return O;
      }),
      (this.dispose = function () {
        O.dispose(), a.material.dispose();
      });
  }
}
q.ReflectorShader = {
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
class Dt {
  constructor(e, t) {
    I(this, "geoProjection", (e) => {
      let {
        geoProjectionScale: t,
        geoProjectionTranslate: a,
        center: i,
      } = this.options;
      return ae().center(i).scale(t).translate(a)(e);
    });
    (this.parent = e),
      (this.instance = new m()),
      this.instance.rotateX(-Math.PI / 2),
      this.instance.position.set(0, 0.2, 0);
    let a = {
      adcode: 1e4,
      center: [0, 0],
      centroid: [0, 0],
      childrenNum: 0,
      parentBoxSize: [1, 1],
      mapData: {},
      geoProjectionCenter: [0, 0],
      geoProjectionScale: 120,
      geoProjectionTranslate: [0, 0],
    };
    (this.options = Object.assign({}, a, t)),
      (this.clicked = !1),
      (this.scale = 1),
      (this.boundBox = {}),
      (this.areaData = []),
      (this.allAreaLabel = []),
      (this.areaLabelGroup = new m()),
      (this.areaPointGroup = new m()),
      (this.allInfoLabel = []),
      (this.infoLabelGroup = new m()),
      this.instance.add(
        this.areaLabelGroup,
        this.areaPointGroup,
        this.infoLabelGroup
      ),
      (this.eventElement = []),
      (this.pointEventElement = []),
      this.init();
  }
  init() {
    this.createModel(),
      this.addLabel(),
      this.options.childrenNum && this.addEvent(),
      this.addPointEvent();
  }
  createModel() {
    let { map: e } = this.createMap();
    this.setScale(e), e.setParent(this.instance);
  }
  createMap() {
    let e = this.options.mapData,
      t = this.parent.assets.instance.getResource("topNormal");
    (t.wrapS = t.wrapT = P),
      (this.mapLineMaterial = new j({
        color: 2868444,
        opacity: 0,
        transparent: !0,
        fog: !1,
      }));
    let [a, i] = this.parent.createProvinceMaterial(),
      s = a.clone();
    s.opacity = 1;
    let n = i.clone();
    n.opacity = 1;
    let r = new ie(this.parent, {
      center: this.options.center,
      position: new g(0, 0, 0.06),
      data: e,
      depth: this.parent.depth,
      topFaceMaterial: s,
      sideMaterial: n,
      lineMaterial: this.parent.mapLineMaterial,
      renderOrder: 9,
    });
    this.areaData = r.coordinates;
    let { boxSize: l, box3: o } = A(r.mapGroup);
    return (
      r.mapGroup.children.map((c, p) => {
        c.children.map((d) => {
          d.type === "Mesh" &&
            ((d.userData.type = "map"),
            this.eventElement.push(d),
            this.parent.calcUv2(d.geometry, l.x, l.y, o.min.x, o.min.y));
        });
      }),
      { map: r }
    );
  }
  addEvent() {
    let e = [];
    const t = (i) => {
        u.to(i.scale, {
          duration: 0.3,
          z: 1,
          onComplete: () => {
            i.traverse((s) => {
              s.isMesh &&
                (s.material[0].emissive.setHex(i.userData.materialEmissiveHex),
                (s.material[0].emissiveIntensity = 1),
                (s.renderOrder = 9));
            });
          },
        }),
          this.setLabelMove(i.userData.adcode, "down"),
          this.setPointMove(i.userData.adcode, "down");
      },
      a = (i) => {
        u.to(i.scale, { duration: 0.3, z: 1.5 }),
          this.setLabelMove(i.userData.adcode),
          this.setPointMove(i.userData.adcode),
          i.traverse((s) => {
            s.isMesh &&
              (s.material[0].emissive.setHex(725293),
              (s.material[0].emissiveIntensity = 1.5),
              (s.renderOrder = 21));
          });
      };
    this.eventElement.map((i) => {
      this.parent.interactionManager.add(i),
        i.addEventListener("mousedown", (s) => {
          if (this.clicked) return !1;
          this.clicked = !0;
          let n = s.target.parent.userData;
          this.parent.history.push(n), this.parent.loadChildMap(n);
        }),
        i.addEventListener("mouseup", (s) => {
          this.clicked = !1;
        }),
        i.addEventListener("mouseover", (s) => {
          e.includes(s.target.parent) || e.push(s.target.parent),
            (document.body.style.cursor = "pointer"),
            a(s.target.parent);
        }),
        i.addEventListener("mouseout", (s) => {
          (e = e.filter(
            (n) => n.userData.name !== s.target.parent.userData.name
          )),
            e.length > 0 && e[e.length - 1],
            t(s.target.parent),
            (document.body.style.cursor = "default");
        });
    });
  }
  addPointEvent() {
    let e = [];
    this.pointEventElement.map((t) => {
      this.parent.interactionManager.add(t),
        t.addEventListener("mousedown", (a) => {
          if (this.clicked) return !1;
          this.clicked = !0;
          let i = a.target.userData;
          this.allInfoLabel.map((s, n) => {
            s.hide(), i.index === n && s.show();
          });
        }),
        t.addEventListener("mouseup", (a) => {
          this.clicked = !1;
        }),
        t.addEventListener("mouseover", (a) => {
          e.includes(a.target.parent) || e.push(a.target.parent),
            (document.body.style.cursor = "pointer");
          let i = a.target;
          i.material = this.pointHoverMaterial.clone();
        }),
        t.addEventListener("mouseout", (a) => {
          (e = e.filter(
            (s) => s.userData.name !== a.target.parent.userData.name
          )),
            e.length > 0 && e[e.length - 1],
            (document.body.style.cursor = "default");
          let i = a.target;
          i.material = this.pointDefaultMaterial.clone();
        });
    });
  }
  setLabelMove(e, t = "up") {
    [...this.allAreaLabel].map((a) => {
      a.userData.adcode === e &&
        u.to(a.position, {
          duration: 0.3,
          z:
            t === "up"
              ? a.userData.position[2] + 3 / this.scale
              : a.userData.position[2],
        });
    });
  }
  setPointMove(e, t = "up") {
    this.areaPointGroup.children.map((a) => {
      a.userData.adcode === e &&
        u.to(a.position, {
          duration: 0.3,
          z:
            t === "up"
              ? a.userData.position[2] + 3 / this.scale
              : a.userData.position[2],
        });
    });
  }
  addLabel() {
    const e = this.parent.assets.instance.getResource("point"),
      t = new ee({ map: e, color: 16777215, transparent: !0, depthTest: !1 });
    (this.pointDefaultMaterial = t),
      (this.pointHoverMaterial = t.clone()),
      (this.pointHoverMaterial.color = new z(65535));
    const a = new te(t);
    (a.renderOrder = 23),
      this.areaData.map((i, s) => {
        let [n, r] = this.geoProjection(i.centroid),
          l = this.labelNameStyle(i, s, new g(n, -r, 0));
        this.allAreaLabel.push(l);
        let o = this.infoLabel(i, s, new g(n, -r, 0));
        this.allInfoLabel.push(o);
        let c = a.clone();
        (a.material = t.clone()),
          c.position.set(n, -r, 0),
          (c.userData.adcode = i.adcode),
          (c.userData.type = "point"),
          (c.userData.name = i.name),
          (c.userData.position = [n, -r, 0]),
          (c.userData.index = s),
          this.areaPointGroup.add(c);
      }),
      this.setNameScale(),
      this.setInfoScale(),
      this.setPointScale();
  }
  infoLabel(e, t, a) {
    let i = this.parent.label3d,
      s = i.create("", "info-point", !0);
    return (
      s.init(
        ` <div class="info-point-wrap">
      <div class="info-point-wrap-inner">
        <div class="info-point-line">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
        <div class="info-point-content">
          <div class="content-item"><span class="label">名称</span><span class="value">${e.name}</span></div>
          <div class="content-item"><span class="label">PM2.5</span><span class="value">100ug/m²</span></div>
          <div class="content-item"><span class="label">等级</span><span class="value">良好</span></div>
        </div>
      </div>
    </div>
  `,
        a
      ),
      i.setLabelStyle(s, 0.06 / this.scale, "x"),
      s.setParent(this.infoLabelGroup),
      s.hide(),
      s
    );
  }
  labelNameStyle(e, t, a) {
    let i = this.parent.label3d,
      s = i.create("", "area-name-label", !0);
    return (
      s.init(`<div class="area-name-label-wrap">${e.name}</div>`, a),
      i.setLabelStyle(s, 0.08 / this.scale, "x"),
      s.setParent(this.areaLabelGroup),
      (s.userData.adcode = e.adcode),
      (s.userData.position = [a.x, a.y, a.z]),
      s
    );
  }
  calculateScale(e, t) {
    let a = e[0] / t[0],
      i = e[1] / t[1];
    return Math.min(a, i);
  }
  setScale(e) {
    let { parentBoxSize: t } = this.options,
      a = A(e.mapGroup),
      i = this.calculateScale(t, [a.boxSize.x, a.boxSize.y]);
    e.mapGroup.scale.set(i, i, 1);
    let s = A(e.mapGroup);
    (e.mapGroup.position.x = -s.center.x),
      (e.mapGroup.position.y = -s.center.y),
      (this.scale = i),
      (this.boundBox = s);
  }
  setNameScale() {
    this.areaLabelGroup.scale.set(this.scale, this.scale, this.scale),
      (this.areaLabelGroup.position.x = -this.boundBox.center.x),
      (this.areaLabelGroup.position.y = -this.boundBox.center.y),
      this.allAreaLabel.map((e) => {
        let t = (this.parent.depth + 0.4) / this.scale;
        (e.position.z = t),
          (e.position.y -= 1.5 / this.scale),
          (e.userData.position = [e.position.x, e.position.y, e.position.z]);
      });
  }
  setPointScale() {
    this.areaPointGroup.scale.set(this.scale, this.scale, this.scale),
      (this.areaPointGroup.position.x = -this.boundBox.center.x),
      (this.areaPointGroup.position.y = -this.boundBox.center.y),
      this.areaPointGroup.children.map((e) => {
        let t = (this.parent.depth + 1.4) / this.scale;
        (e.position.z = t),
          (e.userData.position[2] = t),
          e.scale.set(5 / this.scale, 5 / this.scale, 5 / this.scale),
          (e.userData.position = [e.position.x, e.position.y, e.position.z]),
          this.pointEventElement.push(e);
      });
  }
  setInfoScale() {
    this.infoLabelGroup.scale.set(this.scale, this.scale, this.scale),
      (this.infoLabelGroup.position.x = -this.boundBox.center.x),
      (this.infoLabelGroup.position.y = -this.boundBox.center.y),
      this.infoLabelGroup.children.map((e) => {
        let t = (this.parent.depth + 10) / this.scale;
        (e.position.z = t),
          e.scale.set(0.06 / this.scale, 0.06 / this.scale, 0.06 / this.scale);
      });
  }
  setParent(e) {
    e.add(this.instance);
  }
  destroy() {
    [...this.allAreaLabel, ...this.allInfoLabel].map((e) => {
      e.remove();
    }),
      this.removeElement(".area-name-label"),
      this.removeElement(".info-point"),
      [...this.eventElement, ...this.pointEventElement].map((e) => {
        this.parent.interactionManager.remove(e);
      }),
      mt(this.instance);
  }
  removeElement(e) {
    var t = document.querySelectorAll(e);
    for (let a = 0; a < t.length; a++) {
      const i = t[a];
      i.parentNode.removeChild(i);
    }
  }
}
function K(w) {
  return w.sort((e, t) => t.value - e.value), w;
}
class Nt extends Ae {
  constructor(e, t) {
    super(e, t),
      (this.pointCenter = [108.55, 34.32]),
      (this.flyLineCenter = [116.41995, 40.18994]),
      (this.depth = 5),
      (this.scene.fog = new Ne(69668, 1, 500)),
      (this.scene.background = new z(69668)),
      this.camera.instance.position.set(
        2366776247217723e-20,
        225.1025284992283,
        0.0002238648924037432
      ),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.updateProjectionMatrix(),
      (this.interactionManager = new ht(
        this.renderer.instance,
        this.camera.instance,
        this.canvas
      )),
      this.initSetting(),
      this.initEnvironment(),
      (this.toastLoading = new Mt()),
      (this.history = new xt()),
      this.history.push({ name: "中国" }),
      (this.returnBtn = document.querySelector(".return-btn")),
      (this.clicked = !1),
      (this.currentScene = "mainScene"),
      (this.assets = new Lt(() => {
        (this.sceneGroup = new m()),
          (this.mainSceneGroup = new m()),
          (this.childSceneGroup = new m()),
          (this.labelGroup = new m()),
          (this.gqGroup = new m()),
          (this.provinceNameGroup = new m()),
          (this.badgeGroup = new m()),
          (this.label3d = new He(this)),
          this.mainSceneGroup.rotateX(-Math.PI / 2),
          this.mainSceneGroup.add(
            this.labelGroup,
            this.gqGroup,
            this.provinceNameGroup,
            this.badgeGroup
          ),
          this.sceneGroup.add(this.mainSceneGroup, this.childSceneGroup),
          this.scene.add(this.sceneGroup),
          this.createFloor(),
          this.createRotateBorder(),
          this.createModel(),
          this.addEvent(),
          this.createBar(),
          this.createParticles(),
          this.createFlyLine(),
          this.createScatter(),
          this.createBadgeLabel(),
          this.createPathAnimate(),
          this.createStorke();
        let a = u.timeline();
        a.addLabel("focusMap", 3.5),
          a.addLabel("focusMapOpacity", 4),
          a.addLabel("bar", 5),
          a.add(
            u.to(this.camera.instance.position, {
              duration: 2.5,
              delay: 2,
              x: 3.134497983573052,
              y: 126.8312346165316,
              z: 78.77649752477839,
              ease: "circ.out",
              onComplete: () => {
                this.camera.controls.saveState();
              },
            })
          ),
          a.add(
            u.to(this.quan.rotation, { duration: 5, z: -2 * Math.PI }),
            "-=2"
          ),
          a.add(
            u.to(this.focusMapGroup.position, {
              duration: 1,
              x: 0,
              y: 0,
              z: 0,
            }),
            "focusMap"
          ),
          a.add(
            u.to(this.focusMapGroup.scale, {
              duration: 1,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMap"
          ),
          this.provinceMesh.mapGroup.traverse((i) => {
            i.isMesh &&
              (a.add(
                u.to(i.material[0], {
                  duration: 1,
                  opacity: 1,
                  ease: "circ.out",
                }),
                "focusMapOpacity"
              ),
              a.add(
                u.to(i.position, {
                  duration: 1,
                  x: 0,
                  y: 0,
                  z: 0,
                  ease: "circ.out",
                }),
                "focusMapOpacity"
              ));
          }),
          a.add(
            u.to(this.focusMapSideMaterial, {
              duration: 1,
              opacity: 1,
              ease: "circ.out",
              onComplete: () => {
                this.createMirror(), this.createGridRipple();
              },
            }),
            "focusMapOpacity"
          ),
          a.add(
            u.to(this.provinceLineMaterial, {
              duration: 0.5,
              delay: 0.3,
              opacity: 1,
            }),
            "focusMapOpacity"
          ),
          a.add(
            u.to(this.rotateBorder1.scale, {
              delay: 0.3,
              duration: 1,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          a.add(
            u.to(this.rotateBorder2.scale, {
              duration: 1,
              delay: 0.5,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          this.allBar.map((i, s) => {
            a.add(
              u.to(i.scale, {
                duration: 1,
                delay: 0.05 * s,
                x: 1,
                y: 1,
                z: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allBarMaterial.map((i, s) => {
            a.add(
              u.to(i, {
                duration: 0.5,
                delay: 0.05 * s,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allProvinceLabel.map((i, s) => {
            let n = i.element.querySelector(".provinces-label-style02-wrap"),
              r = i.element.querySelector(".number .value"),
              l = Number(r.innerText),
              o = { score: 0 };
            a.add(
              u.to(n, {
                duration: 0.5,
                delay: 0.05 * s,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
            let c = u.to(o, {
              duration: 0.5,
              delay: 0.05 * s,
              score: l,
              onUpdate: p,
            });
            function p() {
              r.innerText = o.score.toFixed(0);
            }
            a.add(c, "bar");
          }),
          this.allProvinceNameLabel.map((i, s) => {
            let n = i.element.querySelector(".provinces-name-label-wrap");
            a.add(
              u.to(n, {
                duration: 0.5,
                delay: 0.05 * s,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allGuangquan.map((i, s) => {
            a.add(
              u.to(i.children[0].scale, {
                duration: 0.5,
                delay: 0.05 * s,
                x: 1,
                y: 1,
                z: 1,
                ease: "circ.out",
              }),
              "bar"
            ),
              a.add(
                u.to(i.children[1].scale, {
                  duration: 0.5,
                  delay: 0.05 * s,
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
    let e = new Ce(16777215, 2);
    this.scene.add(e);
    let t = new Te(16777215, 4);
    if (
      (t.position.set(-30, 6, -8),
      (t.castShadow = !0),
      (t.shadow.radius = 20),
      (t.shadow.mapSize.width = 1024),
      (t.shadow.mapSize.height = 1024),
      this.scene.add(t),
      this.debug.active)
    ) {
      let a = new Be(t, 2);
      this.scene.add(a);
      const i = this.debug.instance.addFolder("Environment");
      i.add(t.position, "x", -300, 300, 2),
        i.add(t.position, "y", -300, 300, 2),
        i.add(t.position, "z", -300, 300, 2),
        i.add(t, "intensity", 1, 100, 1),
        i.add(e, "intensity", 1, 100, 1),
        i.onChange((s) => {
          a.update();
        });
    }
    this.createPointLight({
      color: "#0e81fb",
      intensity: 160,
      distance: 1e4,
      x: -3,
      y: 16,
      z: -3,
    }),
      this.createPointLight({
        color: "#1f5f7a",
        intensity: 100,
        distance: 100,
        x: -4,
        y: 8,
        z: 43,
      });
  }
  createPointLight(e) {
    const t = new ze(1924702, e.intensity, e.distance, 1);
    if ((t.position.set(e.x, e.y, e.z), this.scene.add(t), this.debug.active)) {
      const a = new Ee(t, 1);
      this.scene.add(a);
      const i = this.debug.instance.addFolder("Point" + Math.random());
      i.addColor(e, "color"),
        i.add(e, "intensity", 1, 1e3, 10),
        i.add(e, "distance", 100, 1e4, 10),
        i.add(e, "x", -100, 100, 1),
        i.add(e, "y", -100, 100, 1),
        i.add(e, "z", -100, 100, 1),
        i.onChange(({ object: s }) => {
          (t.color = new z(s.color)),
            (t.distance = s.distance),
            (t.intensity = s.intensity),
            t.position.set(s.x, s.y, s.z),
            a.update();
        });
    }
  }
  initSetting() {
    (this.debug = new Ie(!1)),
      (this.stats = new We()),
      document.body.appendChild(this.stats.dom),
      this.renderer.resize();
  }
  createModel() {
    let e = new m();
    e.name = "chinaMapGroup";
    let t = new m();
    this.focusMapGroup = t;
    let { province: a } = this.createProvince();
    (this.provinceMesh = a),
      a.setParent(t),
      t.position.set(0, 0, -5),
      t.scale.set(1, 1, 0),
      e.add(t),
      e.position.set(0, 0.2, 0),
      this.mainSceneGroup.add(e);
  }
  createProvince() {
    let e = this.assets.instance.getResource("china"),
      t = this.assets.instance.getResource("topNormal");
    (t.wrapS = t.wrapT = P),
      (this.provinceLineMaterial = new j({
        color: 2868444,
        opacity: 0,
        transparent: !0,
        fog: !1,
      }));
    let [a, i] = this.createProvinceMaterial();
    (this.focusMapTopMaterial = a), (this.focusMapSideMaterial = i);
    let s = new ie(this, {
      center: this.pointCenter,
      position: new g(0, 0, 0.06),
      data: e,
      depth: this.depth,
      topFaceMaterial: a,
      sideMaterial: i,
      lineMaterial: this.provinceLineMaterial,
      renderOrder: 9,
    });
    this.time.on("tick", () => {
      i.map.offset.y += 0.002;
    });
    let n = new H({
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
        .onChange((p) => {
          s.mapGroup.children.map((d, M) => {
            d.children.map((L) => {
              L.type === "Mesh" && (L.material.color = new z(p));
            });
          });
        });
    let { boxSize: r, box3: l, center: o } = A(s.mapGroup);
    return (
      A(s.mapGroup),
      (this.eventElement = []),
      s.mapGroup.children.map((c, p) => {
        c.children.map((d) => {
          d.type === "Mesh" &&
            (this.eventElement.push(d),
            this.calcUv2(d.geometry, r.x, r.y, l.min.x, l.min.y));
        });
      }),
      { province: s }
    );
  }
  addEvent() {
    let e = [];
    const t = (i) => {
        u.to(i.scale, {
          duration: 0.3,
          z: 1,
          onComplete: () => {
            i.traverse((s) => {
              s.isMesh &&
                (s.material[0].emissive.setHex(i.userData.materialEmissiveHex),
                (s.material[0].emissiveIntensity = 1),
                (s.renderOrder = 9));
            });
          },
        }),
          this.setBarMove(i.userData.adcode, "down"),
          this.setGQMove(i.userData.adcode, "down"),
          this.setLabelMove(i.userData.adcode, "down"),
          this.setScatterMove(i.userData.adcode, "down");
      },
      a = (i) => {
        u.to(i.scale, { duration: 0.3, z: 1.5 }),
          this.setBarMove(i.userData.adcode),
          this.setGQMove(i.userData.adcode),
          this.setLabelMove(i.userData.adcode),
          this.setScatterMove(i.userData.adcode),
          i.traverse((s) => {
            s.isMesh &&
              (s.material[0].emissive.setHex(725293),
              (s.material[0].emissiveIntensity = 1.5),
              (s.renderOrder = 21));
          });
      };
    this.eventElement.map((i) => {
      this.interactionManager.add(i),
        i.addEventListener("mousedown", (s) => {
          if (this.clicked || !this.mainSceneGroup.visible) return !1;
          this.clicked = !0;
          let n = s.target.parent.userData;
          this.history.push(n), this.loadChildMap(n);
        }),
        i.addEventListener("mouseup", (s) => {
          this.clicked = !1;
        }),
        i.addEventListener("mouseover", (s) => {
          e.includes(s.target.parent) || e.push(s.target.parent),
            this.mainSceneGroup.visible &&
              (document.body.style.cursor = "pointer"),
            a(s.target.parent);
        }),
        i.addEventListener("mouseout", (s) => {
          (e = e.filter(
            (n) => n.userData.name !== s.target.parent.userData.name
          )),
            e.length > 0 && e[e.length - 1],
            t(s.target.parent),
            (document.body.style.cursor = "default");
        });
    });
  }
  setBarMove(e, t = "up") {
    this.allBar.map((a) => {
      a.userData.adcode === e &&
        u.to(a.position, {
          duration: 0.3,
          z:
            t === "up"
              ? a.userData.position[2] + this.depth / 2 + 0.3
              : a.userData.position[2],
        });
    });
  }
  setGQMove(e, t = "up") {
    this.allGuangquan.map((a) => {
      a.userData.adcode === e &&
        u.to(a.position, {
          duration: 0.3,
          z:
            t === "up"
              ? a.userData.position[2] + this.depth / 2 + 0.3
              : a.userData.position[2],
        });
    }),
      this.flyLineFocusGroup.userData.adcode === e &&
        (console.log(this.flyLineFocusGroup.userData.adcode),
        u.to(this.flyLineFocusGroup.position, {
          duration: 0.3,
          y:
            t === "up"
              ? this.flyLineFocusGroup.userData.position[1] +
                this.depth / 2 +
                0.3
              : this.flyLineFocusGroup.userData.position[1],
        }));
  }
  setLabelMove(e, t = "up") {
    [...this.allProvinceLabel, ...this.allProvinceNameLabel].map((a) => {
      a.userData.adcode === e &&
        u.to(a.position, {
          duration: 0.3,
          z:
            t === "up"
              ? a.userData.position[2] + this.depth / 2 + 0.3
              : a.userData.position[2],
        });
    });
  }
  setScatterMove(e, t = "up") {
    this.scatterGroup.children.map((a) => {
      a.userData.adcode === e &&
        u.to(a.position, {
          duration: 0.3,
          z:
            t === "up"
              ? a.userData.position[2] + this.depth / 2 + 0.3
              : a.userData.position[2],
        });
    });
  }
  loadChildMap(e) {
    this.toastLoading.show(),
      this.getChildMapData(e, (t) => {
        (this.returnBtn.style.display = "block"),
          this.childMap && this.childMap.destroy(),
          (this.childMap = new Dt(this, {
            adcode: e.adcode,
            center: e.center,
            centroid: e.centroid,
            childrenNum: e.childrenNum,
            mapData: t,
            parentBoxSize: [129.00074005126953, (126.23402404785156 * 3) / 4],
          })),
          this.childSceneGroup.add(this.childMap.instance),
          this.setMainMapVisible(!1),
          this.toastLoading.hide(),
          this.camera.controls.reset(),
          (this.currentScene = "childScene"),
          this.config.setEnable(!1);
      });
  }
  getChildMapData(e, t) {
    let a = `https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=${e.adcode}_full`;
    e.childrenNum === 0 &&
      (a = `https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=${e.adcode}`),
      fetch(a)
        .then((i) => i.text())
        .then((i) => {
          t && t(i);
        });
  }
  setMainMapVisible(e) {
    (this.scene.getObjectByName("chinaMapGroup").visible = e),
      (this.mainSceneGroup.visible = e),
      this.setLabelVisible("provinceNameGroup", e),
      this.setLabelVisible("labelGroup", e),
      e === !1 && this.setLabelVisible("badgeGroup", e);
  }
  goBack() {
    if ((this.history.undo(), !this.history.getIndex()))
      (this.currentScene = "mainScene"),
        (this.returnBtn.style.display = "none"),
        this.childMap && this.childMap.destroy(),
        (this.childMap = null),
        this.setMainMapVisible(!0),
        this.setLabelVisible("labelGroup", !0),
        this.setLabelVisible("provinceNameGroup", !0);
    else {
      let e = this.history.present;
      this.loadChildMap(e);
    }
    this.camera.controls.reset();
  }
  calcUv2(e, t, a, i, s) {
    const n = e.attributes.position,
      r = e.attributes.uv,
      l = e.groups[0].count;
    for (let o = 0; o < l; o++) {
      const c = n.getX(o),
        p = n.getY(o),
        d = (c - i) / t,
        M = (p - s) / a;
      r.setXY(o, d, M);
    }
    (r.needsUpdate = !0), e.computeVertexNormals();
  }
  calcUv(e, t, a, i, s) {
    const n = e.attributes.position,
      r = e.attributes.uv;
    for (let l = 0; l < n.count; l++) {
      const o = n.getX(l),
        c = n.getY(l),
        p = (o - i) / t,
        d = (c - s) / a;
      r.setXY(l, p, d);
    }
    (r.needsUpdate = !0), e.computeVertexNormals();
  }
  createProvinceMaterial() {
    let e = this.assets.instance.getResource("topNormal");
    e.wrapS = e.wrapT = P;
    let t = new H({
        color: 400967,
        emissive: 0,
        map: e,
        transparent: !0,
        normalMap: e,
        opacity: 0,
      }),
      a = this.assets.instance.getResource("side");
    (a.wrapS = P), (a.wrapT = P), a.repeat.set(1, 0.2), (a.offset.y += 0.01);
    let i = new H({
      color: 16777215,
      map: a,
      fog: !1,
      transparent: !0,
      opacity: 0,
      side: U,
    });
    return (
      (i.onBeforeCompile = (s) => {
        (s.uniforms = {
          ...s.uniforms,
          uColor1: { value: new z(3191807) },
          uColor2: { value: new z(3191807) },
        }),
          (s.vertexShader = s.vertexShader.replace(
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
          (s.fragmentShader = s.fragmentShader.replace(
            "void main() {",
            `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
          )),
          (s.fragmentShader = s.fragmentShader.replace(
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
      [t, i]
    );
  }
  createBar() {
    let e = this,
      t = K(J);
    const a = new m();
    this.barGroup = a;
    const i = 7,
      s = 4 * i,
      n = t[0].value;
    (this.allBar = []),
      (this.allBarMaterial = []),
      (this.allGuangquan = []),
      (this.allProvinceLabel = []),
      (this.allProvinceNameLabel = []),
      t.map((o, c) => {
        let p = s * (o.value / n),
          d = new G({
            color: 16777215,
            transparent: !0,
            opacity: 0,
            depthTest: !1,
            fog: !1,
          });
        new je(d, {
          uColor1: c < 3 ? 16506760 : 5291006,
          uColor2: c < 3 ? 16506760 : 5291006,
          size: p,
          dir: "y",
        });
        const M = new Oe(0.05 * i, 0.05 * i, p);
        M.translate(0, 0, p / 2);
        const L = new N(M, d);
        L.renderOrder = 22;
        let y = L,
          [h, v] = this.geoProjection(o.centroid);
        y.position.set(h, -v, this.depth + 0.46),
          y.scale.set(1, 1, 0),
          (y.userData.name = o.name),
          (y.userData.adcode = o.adcode),
          (y.userData.position = [h, -v, this.depth + 0.46]);
        let x = this.createQuan();
        x.position.set(h, -v, this.depth + 0.46),
          (x.userData.name = o.name),
          (x.userData.adcode = o.adcode),
          (x.userData.position = [h, -v, this.depth + 0.46]),
          this.gqGroup.add(x);
        let C = this.createHUIGUANG(p, c < 3 ? 16776948 : 7863285);
        y.add(...C), a.add(y);
        let S = r(o, c, new g(h, -v, this.depth + 0.9 + p)),
          f = l(o, c, new g(h, -v - 1.5, this.depth + 0.4));
        this.allBar.push(y),
          this.allBarMaterial.push(d),
          this.allGuangquan.push(x),
          this.allProvinceLabel.push(S),
          this.allProvinceNameLabel.push(f);
      }),
      this.mainSceneGroup.add(a);
    function r(o, c, p) {
      let d = e.label3d.create("", "provinces-label-style02", !0);
      return (
        d.init(
          `<div class="provinces-label-style02 ${c < 3 ? "yellow" : ""}">
      <div class="provinces-label-style02-wrap">
        <div class="number"><span class="value">${
          o.value
        }</span><span class="unit">万人</span></div>
        <div class="no">${c + 1}</div>
      </div>
    </div>`,
          p
        ),
        e.label3d.setLabelStyle(d, 0.05, "x"),
        d.setParent(e.labelGroup),
        (d.userData.adcode = o.adcode),
        (d.userData.position = [p.x, p.y, p.z]),
        d
      );
    }
    function l(o, c, p) {
      let d = e.label3d.create("", "provinces-name-label", !0);
      return (
        d.init(
          `<div class="provinces-name-label"><div class="provinces-name-label-wrap">${o.name}</div></div>`,
          p
        ),
        e.label3d.setLabelStyle(d, 0.08, "x"),
        d.setParent(e.provinceNameGroup),
        (d.userData.adcode = o.adcode),
        (d.userData.position = [p.x, p.y, p.z]),
        d
      );
    }
  }
  createHUIGUANG(e, t) {
    let a = new E(1.5, e);
    a.translate(0, e / 2, 0);
    const i = this.assets.instance.getResource("huiguang");
    (i.colorSpace = $), (i.wrapS = P), (i.wrapT = P);
    let s = new G({
        color: t,
        map: i,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        side: U,
        blending: D,
      }),
      n = new N(a, s);
    (n.renderOrder = 23), n.rotateX(Math.PI / 2);
    let r = n.clone(),
      l = n.clone();
    return (
      r.rotateY((Math.PI / 180) * 60),
      l.rotateY((Math.PI / 180) * 120),
      [n, r, l]
    );
  }
  createQuan() {
    const e = this.assets.instance.getResource("guangquan1"),
      t = this.assets.instance.getResource("guangquan2");
    let a = new E(2, 2),
      i = new G({
        color: 16777215,
        map: e,
        alphaMap: e,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: D,
      }),
      s = new G({
        color: 16777215,
        map: t,
        alphaMap: t,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: D,
      }),
      n = new N(a, i),
      r = new N(a, s);
    return (
      (n.renderOrder = 24),
      (r.renderOrder = 24),
      (r.position.z -= 0.001),
      n.scale.set(0, 0, 0),
      r.scale.set(0, 0, 0),
      (this.quanGroup = new m()),
      this.quanGroup.add(n, r),
      this.time.on("tick", (l) => {
        n.rotation.z += l * 2;
      }),
      this.quanGroup
    );
  }
  setLabelVisible(e = "labelGroup", t) {
    (this[e].visible = t),
      this[e].children.map((a) => {
        t ? a.show() : a.hide();
      });
  }
  createFloor() {
    let e = new E(200, 200);
    const t = this.assets.instance.getResource("gaoguang1");
    (t.colorSpace = $), (t.wrapS = P), (t.wrapT = P), t.repeat.set(1, 1);
    let a = new G({ map: t, opacity: 1, transparent: !0, blending: D }),
      i = new N(e, a);
    i.rotateX(-Math.PI / 2), i.position.set(0, 0.05, 0), this.scene.add(i);
    const s = this.assets.instance.getResource("quan");
    let n = new N(
      new E(250, 250),
      new G({ map: s, opacity: 1, transparent: !0, blending: D, depthTest: !1 })
    );
    n.rotateX(-Math.PI / 2),
      n.position.set(0, this.depth + 2.05, 0),
      (this.quan = n),
      this.scene.add(n);
  }
  createGridRipple() {
    let e = new E(300, 300);
    const t = this.assets.instance.getResource("grid"),
      a = this.assets.instance.getResource("gridBlack");
    (t.wrapS = t.wrapT = a.wrapS = a.wrapT = P),
      t.repeat.set(40, 40),
      a.repeat.set(40, 40);
    let i = new G({
        map: t,
        color: 65535,
        transparent: !0,
        opacity: 0.5,
        alphaMap: a,
        blending: D,
      }),
      s = new N(e, i);
    s.rotateX(-Math.PI / 2);
    let [n, r] = this.geoProjection(this.pointCenter);
    s.position.set(n, -r, 0.01);
    const l = s.clone();
    (l.material = i.clone()),
      (l.material.opacity = 0.1),
      this.scene.add(s, l),
      new St({
        material: i,
        time: this.time,
        size: 300,
        diffuseColor: 499686,
        diffuseSpeed: 30,
        diffuseWidth: 20,
        diffuseDir: 2,
      });
  }
  createMirror() {
    const e = new E(200, 200),
      t = new q(e, {
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
  createRotateBorder() {
    let e = 100,
      t = this.assets.instance.getResource("rotationBorder1"),
      a = this.assets.instance.getResource("rotationBorder2"),
      i = new X(this, {
        width: e * 1.178,
        needRotate: !0,
        rotateSpeed: 0.001,
        material: new G({
          map: t,
          color: 4763647,
          transparent: !0,
          opacity: 0.2,
          depthWrite: !1,
          blending: D,
        }),
        position: new g(0, 0.07, 0),
      });
    (i.instance.renderOrder = 6),
      i.instance.scale.set(0, 0, 0),
      i.setParent(this.scene);
    let s = new X(this, {
      width: e * 1.116,
      needRotate: !0,
      rotateSpeed: -0.004,
      material: new G({
        map: a,
        color: 4763647,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        blending: D,
      }),
      position: new g(0, 0.06, 0),
    });
    (s.instance.renderOrder = 6),
      s.instance.scale.set(0, 0, 0),
      s.setParent(this.scene),
      (this.rotateBorder1 = i.instance),
      (this.rotateBorder2 = s.instance);
  }
  createParticles() {
    (this.particles = new Q(this, {
      num: 10,
      range: 200,
      dir: "up",
      speed: 0.1,
      material: new Fe({
        map: Q.createTexture(),
        size: 10,
        color: 61166,
        transparent: !0,
        opacity: 0.3,
        depthTest: !1,
        depthWrite: !1,
        vertexColors: !0,
        blending: D,
        sizeAttenuation: !0,
      }),
    })),
      this.particles.instance.position.set(0, 0, 0),
      (this.particles.instance.rotation.x = -Math.PI / 2),
      this.particles.setParent(this.scene),
      (this.particles.enable = !1),
      (this.particles.instance.visible = !1);
  }
  createScatter() {
    (this.scatterGroup = new m()),
      (this.scatterGroup.visible = !1),
      this.mainSceneGroup.add(this.scatterGroup);
    const e = this.assets.instance.getResource("arrow"),
      t = new ee({ map: e, color: 16776960, transparent: !0, depthTest: !1 });
    let a = K(Gt),
      i = a[0].value;
    a.map((s) => {
      const n = new te(t);
      n.renderOrder = 23;
      let r = 2 + (s.value / i) * 1;
      n.scale.set(r, r, r);
      let [l, o] = this.geoProjection([s.lng, s.lat]);
      n.position.set(l, -o, this.depth + 0.41),
        (n.userData.adcode = s.adcode),
        (n.userData.position = [l, -o, this.depth + 0.41]),
        this.scatterGroup.add(n);
    });
  }
  createBadgeLabel() {
    const e = this;
    (e.badgeGroup.visible = !1),
      Pt.map((a) => {
        const [i, s] = this.geoProjection(a.geometry.coordinates);
        t(a, new g(i, -s, this.depth + 0.92));
      });
    function t(a, i) {
      let s = e.label3d.create("", "badges-label", !0);
      return (
        s.init(
          `<div class="badges-label-wrap">
        平均工资：<span>${a.value}元</span>
        <img class="icon" src="${ut}" alt="" />
      </div>`,
          i
        ),
        e.label3d.setLabelStyle(s, 0.1, "x"),
        s.setParent(e.badgeGroup),
        s.hide(),
        (s.userData.adcode = a.adcode),
        (s.userData.position = [i.x, i.y, i.z]),
        s
      );
    }
  }
  createFlyLine() {
    const e = this.assets.instance.getResource("flyLine");
    (e.wrapS = e.wrapT = P),
      (e.generateMipmaps = !1),
      (e.magFilter = Re),
      e.repeat.set(0.5, 1);
    let t = new wt(this, {
      centerPoint: this.flyLineCenter,
      data: J,
      texture: e,
      material: new G({
        map: e,
        alphaMap: e,
        color: 16506760,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        blending: D,
      }),
    });
    t.setParent(this.mainSceneGroup),
      (t.visible = !1),
      (t.instance.position.z = this.depth + 0.4),
      (this.flyLineGroup = t),
      this.createFlyLineFocus();
  }
  createFlyLineFocus() {
    (this.flyLineFocusGroup = new m()), (this.flyLineFocusGroup.visible = !1);
    let [e, t] = this.geoProjection(this.flyLineCenter);
    this.flyLineFocusGroup.position.set(e, -t, this.depth + 0.47),
      (this.flyLineFocusGroup.userData.name = "北京市"),
      (this.flyLineFocusGroup.userData.adcode = 11e4),
      (this.flyLineFocusGroup.userData.position = [e, -t, this.depth + 0.47]),
      this.mainSceneGroup.add(this.flyLineFocusGroup);
    const a = this.assets.instance.getResource("guangquan1"),
      i = new E(5, 5),
      s = new G({
        color: 16506760,
        map: a,
        alphaMap: a,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        blending: D,
      }),
      n = new N(i, s);
    (n.renderOrder = 30), n.scale.set(0, 0, 0);
    const r = n.clone();
    (r.material = s.clone()),
      this.flyLineFocusGroup.add(n, r),
      u.to(n.material, { opacity: 0, repeat: -1, yoyo: !1, duration: 1 }),
      u.to(n.scale, { x: 2, y: 2, z: 2, repeat: -1, yoyo: !1, duration: 1 }),
      u.to(r.material, {
        delay: 0.5,
        opacity: 0,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      }),
      u.to(r.scale, {
        delay: 0.5,
        x: 2,
        y: 2,
        z: 2,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      });
  }
  createPathAnimate() {
    const e = this.assets.instance.getResource("pathLine");
    (e.wrapS = e.wrapT = P), e.repeat.set(8, 1);
    let t = this.assets.instance.getResource("transportPath");
    t = JSON.parse(t);
    for (let s = 0; s < t.features.length; s++) {
      const n = t.features[s];
      n.geometry.coordinates = [[n.geometry.coordinates]];
    }
    let a = t.features.map((s) => ({ geometry: s.geometry })),
      i = new Y(this, {
        data: a,
        texture: e,
        renderOrder: 21,
        speed: 0.5,
        material: new G({
          map: e,
          color: 16777215,
          transparent: !0,
          fog: !1,
          opacity: 1,
          depthTest: !1,
          blending: D,
        }),
      });
    i.setParent(this.mainSceneGroup),
      (i.visible = !1),
      (i.instance.position.z = this.depth + 0.42),
      (this.pathLineGroup = i);
  }
  createStorke() {
    const e = this.assets.instance.getResource("pathLine2");
    (e.wrapS = e.wrapT = P), e.repeat.set(1, 1);
    let t = this.assets.instance.getResource("chinaStorke");
    t = JSON.parse(t);
    let a = t.features.map((s) => ({ geometry: s.geometry })),
      i = new Y(this, {
        data: a,
        texture: e,
        renderOrder: 21,
        speed: 0.2,
        radius: 0.2,
        segments: 256 * 10,
        radialSegments: 4,
        material: new G({
          color: 2868444,
          map: e,
          alphaMap: e,
          fog: !1,
          transparent: !0,
          opacity: 1,
          blending: D,
        }),
      });
    i.setParent(this.mainSceneGroup),
      (i.instance.position.z = this.depth + 0.38);
  }
  createWatermark() {
    let e = this.assets.instance.getResource("watermark");
    (e.wrapS = P),
      (e.wrapT = P),
      e.repeat.set(50, 50),
      (e.rotation = Math.PI / 5);
    let t = new E(100, 100, 1),
      a = new G({ map: e, transparent: !0, opacity: 0.15 }),
      i = new N(t, a);
    (i.position.x -= 10),
      (i.position.y -= 10),
      (i.position.z -= 10),
      (i.renderOrder = 999),
      this.camera.instance.add(i);
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
      this.groundMirror && this.groundMirror.dispose(),
      this.toastLoading && this.toastLoading.destroy();
  }
}
const Ct = { class: "map-level" },
  Tt = createElementVNode("canvas", { id: "canvas" }, null, -1),
  Bt = { class: "map-btn-group" },
  ra = {
    __name: "map-animate-china-level",
    setup(w) {
      let e = null;
      const t = reactive({
          bar: !0,
          flyLine: !1,
          scatter: !1,
          card: !1,
          particle: !1,
          mirror: !1,
          path: !1,
        }),
        a = (n) => {
          if (
            (console.log(e.currentScene),
            ["bar", "flyLine", "scatter", "card", "path"].includes(n) &&
              e &&
              e.currentScene === "childScene")
          )
            return !1;
          (t[n] = !t[n]),
            n === "bar" &&
              ((e.barGroup.visible = t[n]),
              e.setLabelVisible("labelGroup", t[n])),
            n === "particle" &&
              ((e.particles.enable = t[n]),
              (e.particles.instance.visible = t[n])),
            n === "flyLine" &&
              ((e.flyLineGroup.visible = t[n]),
              (e.flyLineFocusGroup.visible = t[n])),
            n === "scatter" && (e.scatterGroup.visible = t[n]),
            n === "card" && e.setLabelVisible("badgeGroup", t[n]),
            n === "mirror" && (e.groundMirror.visible = t[n]),
            n === "path" && (e.pathLineGroup.visible = t[n]);
        },
        i = (n) => {
          (t.bar = n),
            (t.flyLine = n),
            (t.scatter = n),
            (t.card = n),
            (t.path = n);
        },
        s = () => {
          e && e.goBack();
        };
      return (
        onMounted(() => {
          e = new Nt(document.getElementById("canvas"), {
            geoProjectionCenter: [108.55, 34.32],
            setEnable: i,
          });
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (n, r) => (
          openBlock(),
          createElementBlock("div", Ct, [
            Tt,
            createElementVNode(
              "div",
              { class: "return-btn", onClick: s },
              "返回上一级"
            ),
            createElementVNode("div", Bt, [
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.bar }]),
                  onClick: r[0] || (r[0] = (l) => a("bar")),
                },
                " 柱状图 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.flyLine }]),
                  onClick: r[1] || (r[1] = (l) => a("flyLine")),
                },
                " 飞线 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.scatter }]),
                  onClick: r[2] || (r[2] = (l) => a("scatter")),
                },
                " 散点图 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.card }]),
                  onClick: r[3] || (r[3] = (l) => a("card")),
                },
                " 标牌 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.particle }]),
                  onClick: r[4] || (r[4] = (l) => a("particle")),
                },
                " 粒子特效 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.path }]),
                  onClick: r[5] || (r[5] = (l) => a("path")),
                },
                " 路径轨迹 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.mirror }]),
                  onClick: r[6] || (r[6] = (l) => a("mirror")),
                },
                " 倒影 ",
                2
              ),
            ]),
          ])
        )
      );
    },
  };
export { ra as default };
