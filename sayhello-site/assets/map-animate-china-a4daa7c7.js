import {
  F as ce,
  G as x,
  V as v,
  a as de,
  M as G,
  L as I,
  S as ue,
  E as pe,
  b as P,
  B as Z,
  f as ee,
  v as te,
  T as j,
  C as k,
  w as he,
  x as me,
  y as U,
  W as fe,
  H as ge,
  z as ve,
  U as ye,
  I as be,
  J as we,
  K as H,
  g as xe,
  A as Me,
  h as Le,
  P as Ge,
  R as L,
  d as W,
  D as V,
  k as Se,
  l as B,
  m as A,
  n as D,
  p as Pe,
  q as De,
  r as Te,
  N as $,
  Q as Ce,
} from "./OrbitControls-9c9ee6bc.js";
import { R as Ne, M as Re } from "./index-1453e2ee.js";
import { t as ae, g as X } from "./utils-9af1928d.js";
import { L as Be } from "./Label3d-1a598e21.js";
import { G as Fe, P as Q } from "./GradientShader-7cc661aa.js";
import { P as Y } from "./Particles-a008e8a7.js";
import { g as p } from "./index-4db78ffb.js";
import {
  f as Oe,
  g as ze,
  b as ke,
  q as qe,
  a as Ee,
  s as We,
} from "./pathLine-9a4e7519.js";
import { c as Ae, s as je } from "./chinaBlurLine-b7b06be6.js";
import { t as Ie } from "./top_surface_normal_map2-a65ff1bb.js";
import { o as _e } from "./ocean-blue-bg-49e3ac50.js";
import {
  h as Ue,
  r as He,
  g as Ve,
  a as $e,
} from "./rotationBorder1-447bf02a.js";
import { r as Xe } from "./rotationBorder2-a143eae0.js";
import { g as Qe } from "./grid-3e023ca8.js";
import { g as Ye } from "./gaoguang2-46d4de0f.js";
import { f as Je } from "./flyLine2-e7135ba7.js";
import { a as Ke } from "./arrow-8777f461.js";
import { p as Ze } from "./pathLine2-dee41061.js";
import { p as et } from "./pathLine4-99db6c46.js";
import { w as tt } from "./szxs_logo-02219344.js";
import { L as at, a as it } from "./Line2-7598ed88.js";
import { l as rt } from "./label-arrow-b5ffbd19.js";
import { a as nt } from "./three.interactive-c6512469.js";
import {
  reactive,
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
  createElementVNode,
  normalizeClass,
} from "./vue-cdn.js";
class ut {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new Ne()),
      this.instance.addLoader(ce, "FileLoader"),
      this.instance.on("onProgress", (i, a, r) => {
        ((a / r) * 100).toFixed(2) + "";
      }),
      this.instance.on("onLoad", () => {
        this.onLoadCallback && this.onLoadCallback();
      });
    let e = "/sayhello-site/",
      t = [
        { type: "Texture", name: "flag", path: Oe },
        { type: "Texture", name: "watermark", path: tt },
        { type: "Texture", name: "grid", path: Qe },
        { type: "Texture", name: "pathLine", path: et },
        { type: "Texture", name: "pathLine2", path: Ze },
        { type: "Texture", name: "flyLine", path: Je },
        { type: "Texture", name: "arrow", path: Ke },
        { type: "Texture", name: "gridBlack", path: ze },
        { type: "Texture", name: "borderGlow", path: ke },
        { type: "Texture", name: "quan", path: qe },
        { type: "Texture", name: "gaoguang1", path: Ee },
        { type: "Texture", name: "gaoguang2", path: Ye },
        { type: "Texture", name: "huiguang", path: Ue },
        { type: "Texture", name: "rotationBorder1", path: He },
        { type: "Texture", name: "rotationBorder2", path: Xe },
        { type: "Texture", name: "guangquan1", path: Ve },
        { type: "Texture", name: "guangquan2", path: $e },
        { type: "Texture", name: "chinaBlurLine", path: Ae },
        { type: "Texture", name: "ocean", path: _e },
        { type: "Texture", name: "side", path: We },
        { type: "Texture", name: "side2", path: je },
        { type: "Texture", name: "topNormal", path: Ie },
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
class pt {
  constructor({ assets: e, time: t, geoProjection: i }, a = {}) {
    (this.geoProjection = i),
      (this.mapGroup = new x()),
      (this.assets = e),
      (this.time = t),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new v(0, 0, 0),
          center: new de(0, 0),
          data: "",
          renderOrder: 1,
          topFaceMaterial: new G({
            color: 1582651,
            transparent: !0,
            opacity: 1,
          }),
          sideMaterial: new G({ color: 464171, transparent: !0, opacity: 1 }),
          lineMaterial: new I({ color: 2868444 }),
          depth: 0.1,
        },
        a
      )),
      this.mapGroup.position.copy(this.config.position);
    let r = ae(this.config.data);
    this.create(r);
  }
  create(e) {
    let t = new x();
    e.features.forEach((i, a) => {
      let {
        name: r,
        center: n = [],
        centroid: l = [],
        adcode: c,
      } = i.properties;
      this.coordinates.push({
        name: r,
        center: n,
        centroid: l,
        adcode: c,
        enName: "",
        value: 0,
      });
      const o = new x();
      (o.name = "meshGroup" + a),
        (o.userData.index = a),
        (o.userData.name = r),
        (o.userData.adcode = c),
        (o.userData.materialEmissiveHex =
          this.config.topFaceMaterial.emissive.getHex());
      let s = new x();
      (s.name = "lineGroup" + a),
        (s.userData.index = a),
        (s.userData.adcode = c);
      const u = {
        depth: this.config.depth,
        bevelEnabled: !0,
        bevelSegments: 1,
        bevelThickness: 0.1,
      };
      let d = [this.config.topFaceMaterial.clone(), this.config.sideMaterial];
      i.geometry.coordinates.forEach((f) => {
        f.forEach((h, b) => {
          const M = new ue();
          for (let g = 0; g < h.length; g++) {
            if (!h[g][0] || !h[g][1]) return !1;
            const [F, O] = this.geoProjection(h[g]);
            g === 0 && M.moveTo(F, -O), M.lineTo(F, -O);
          }
          const C = new pe(M, u),
            S = new P(C, d);
          (S.userData.depth = this.config.depth),
            (S.userData.name = r),
            (S.userData.adcode = c),
            (S.userData.materialEmissiveHex =
              this.config.topFaceMaterial.emissive.getHex()),
            (S.renderOrder = this.config.renderOrder),
            o.add(S);
        });
        const m = [];
        let y = null;
        f[0].forEach((h) => {
          const [b, M] = this.geoProjection(h);
          m.push(new v(b, -M, 0)), (y = this.createLine(m));
        }),
          s.add(y);
      }),
        t.add(s),
        s.position.set(0, 0, this.config.depth + 0.11),
        o.add(s),
        this.mapGroup.add(o);
    });
  }
  createLine(e) {
    const t = new Z();
    t.setFromPoints(e);
    let i = new ee(t, this.config.lineMaterial);
    return (i.renderOrder = 2), (i.name = "mapLine"), i;
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(e) {
    e.add(this.mapGroup);
  }
}
class ht {
  constructor({ geoProjection: e }, t = {}) {
    (this.geoProjection = e),
      (this.config = Object.assign(
        {
          visibelProvince: "",
          center: [0, 0],
          position: new v(0, 0, 0),
          data: "",
          material: new I({ color: 16777215 }),
          type: "LineLoop",
          renderOrder: 1,
        },
        t
      ));
    let i = ae(this.config.data),
      a = this.create(i);
    (this.lineGroup = a), this.lineGroup.position.copy(this.config.position);
  }
  create(e) {
    const { type: t, visibelProvince: i } = this.config;
    let a = e.features,
      r = new x();
    for (let n = 0; n < a.length; n++) {
      const l = a[n];
      let c = new x();
      (c.name = "meshLineGroup" + n),
        l.properties.name !== i &&
          (l.geometry.coordinates.forEach((o) => {
            const s = [];
            let u = null;
            t === "Line2"
              ? (o[0].forEach((d) => {
                  const [f, m] = this.geoProjection(d);
                  s.push(f, -m, 0);
                }),
                (u = this.createLine2(s)))
              : t === "Line3"
              ? (o[0].forEach((d) => {
                  const [f, m] = this.geoProjection(d);
                  s.push(new v(f, -m, 0));
                }),
                (u = this.createLine3(s)))
              : o[0].forEach((d) => {
                  const [f, m] = this.geoProjection(d);
                  s.push(new v(f, -m, 0)), (u = this.createLine(s));
                }),
              c.add(u);
          }),
          r.add(c));
    }
    return r;
  }
  createLine3(e) {
    const { material: n, renderOrder: l } = this.config,
      c = new te(e),
      o = new j(c, 2560, 0.2, 4, !1),
      s = new P(o, n);
    return (s.name = "mapLine3"), (s.renderOrder = l), s;
  }
  createLine2(e) {
    const { material: t, renderOrder: i } = this.config,
      a = new at();
    a.setPositions(e);
    let r = new it(a, t);
    return (
      (r.name = "mapLine2"), (r.renderOrder = i), r.computeLineDistances(), r
    );
  }
  createLine(e) {
    const { material: t, renderOrder: i, type: a } = this.config,
      r = new Z();
    r.setFromPoints(e);
    let n = new ee(r, t);
    return (n.renderOrder = i), (n.name = "mapLine"), n;
  }
  setParent(e) {
    e.add(this.lineGroup);
  }
}
class mt {
  constructor({
    material: e,
    time: t,
    size: i,
    diffuseColor: a,
    diffuseSpeed: r,
    diffuseWidth: n,
    diffuseDir: l,
  }) {
    this.time = t;
    let c = {
      size: 100,
      diffuseSpeed: 15,
      diffuseColor: 9345950,
      diffuseWidth: 10,
      diffuseDir: 1,
    };
    (this.options = Object.assign({}, c, {
      material: e,
      size: i,
      diffuseColor: a,
      diffuseSpeed: r,
      diffuseWidth: n,
      diffuseDir: l,
    })),
      this.init();
  }
  init() {
    let e = null,
      {
        material: t,
        size: i,
        diffuseColor: a,
        diffuseSpeed: r,
        diffuseWidth: n,
        diffuseDir: l,
      } = this.options,
      c = i / r;
    (t.onBeforeCompile = (o) => {
      (e = o),
        (o.uniforms = {
          ...o.uniforms,
          uTime: { value: 0 },
          uSpeed: { value: r },
          uWidth: { value: n },
          uColor: { value: new k(a) },
          uDir: { value: l },
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
          e.uniforms.uTime.value > c && (e.uniforms.uTime.value = 0));
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
  ft = [
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
  gt = [
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
class E extends P {
  constructor(e, t = {}) {
    super(e),
      (this.isReflector = !0),
      (this.type = "Reflector"),
      (this.camera = new he());
    const i = this,
      a = t.color !== void 0 ? new k(t.color) : new k(8355711),
      r = t.textureWidth || 512,
      n = t.textureHeight || 512,
      l = t.clipBias || 0,
      c = t.shader || E.ReflectorShader,
      o = t.multisample !== void 0 ? t.multisample : 4,
      s = new me(),
      u = new v(),
      d = new v(),
      f = new v(),
      m = new U(),
      y = new v(0, 0, -1),
      h = new H(),
      b = new v(),
      M = new v(),
      C = new H(),
      S = new U(),
      g = this.camera,
      F = new fe(r, n, { samples: o, type: ge }),
      O = new ve({
        name: c.name !== void 0 ? c.name : "unspecified",
        uniforms: ye.clone(c.uniforms),
        fragmentShader: c.fragmentShader,
        vertexShader: c.vertexShader,
      });
    (O.uniforms.tDiffuse.value = F.texture),
      (O.uniforms.color.value = a),
      (O.uniforms.textureMatrix.value = S),
      (this.material = O),
      (this.onBeforeRender = function (w, ie, q) {
        if (
          (d.setFromMatrixPosition(i.matrixWorld),
          f.setFromMatrixPosition(q.matrixWorld),
          m.extractRotation(i.matrixWorld),
          u.set(0, 0, 1),
          u.applyMatrix4(m),
          b.subVectors(d, f),
          b.dot(u) > 0)
        )
          return;
        b.reflect(u).negate(),
          b.add(d),
          m.extractRotation(q.matrixWorld),
          y.set(0, 0, -1),
          y.applyMatrix4(m),
          y.add(f),
          M.subVectors(d, y),
          M.reflect(u).negate(),
          M.add(d),
          g.position.copy(b),
          g.up.set(0, 1, 0),
          g.up.applyMatrix4(m),
          g.up.reflect(u),
          g.lookAt(M),
          (g.far = q.far),
          g.updateMatrixWorld(),
          g.projectionMatrix.copy(q.projectionMatrix),
          S.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
          S.multiply(g.projectionMatrix),
          S.multiply(g.matrixWorldInverse),
          S.multiply(i.matrixWorld),
          s.setFromNormalAndCoplanarPoint(u, d),
          s.applyMatrix4(g.matrixWorldInverse),
          h.set(s.normal.x, s.normal.y, s.normal.z, s.constant);
        const T = g.projectionMatrix;
        (C.x = (Math.sign(h.x) + T.elements[8]) / T.elements[0]),
          (C.y = (Math.sign(h.y) + T.elements[9]) / T.elements[5]),
          (C.z = -1),
          (C.w = (1 + T.elements[10]) / T.elements[14]),
          h.multiplyScalar(2 / h.dot(C)),
          (T.elements[2] = h.x),
          (T.elements[6] = h.y),
          (T.elements[10] = h.z + 1 - l),
          (T.elements[14] = h.w),
          (i.visible = !1);
        const re = w.getRenderTarget(),
          ne = w.xr.enabled,
          oe = w.shadowMap.autoUpdate,
          se = w.outputColorSpace,
          le = w.toneMapping;
        (w.xr.enabled = !1),
          (w.shadowMap.autoUpdate = !1),
          (w.outputColorSpace = be),
          (w.toneMapping = we),
          w.setRenderTarget(F),
          w.state.buffers.depth.setMask(!0),
          w.autoClear === !1 && w.clear(),
          w.render(ie, g),
          (w.xr.enabled = ne),
          (w.shadowMap.autoUpdate = oe),
          (w.outputColorSpace = se),
          (w.toneMapping = le),
          w.setRenderTarget(re);
        const _ = q.viewport;
        _ !== void 0 && w.state.viewport(_), (i.visible = !0);
      }),
      (this.getRenderTarget = function () {
        return F;
      }),
      (this.dispose = function () {
        F.dispose(), i.material.dispose();
      });
  }
}
E.ReflectorShader = {
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
function K(R) {
  return R.sort((e, t) => t.value - e.value), R;
}
class vt extends Re {
  constructor(e, t) {
    super(e, t),
      (this.pointCenter = [108.55, 34.32]),
      (this.flyLineCenter = [116.41995, 40.18994]),
      (this.depth = 5),
      (this.scene.fog = new xe(69668, 1, 400)),
      (this.scene.background = new k(69668)),
      this.camera.instance.position.set(
        2366776247217723e-20,
        225.1025284992283,
        0.0002238648924037432
      ),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.updateProjectionMatrix(),
      this.renderer.resize(),
      (this.interactionManager = new nt(
        this.renderer.instance,
        this.camera.instance,
        this.canvas
      )),
      this.initEnvironment(),
      (this.assets = new ut(() => {
        (this.sceneGroup = new x()),
          (this.labelGroup = new x()),
          (this.gqGroup = new x()),
          (this.provinceNameGroup = new x()),
          (this.badgeGroup = new x()),
          (this.label3d = new Be(this)),
          this.sceneGroup.rotateX(-Math.PI / 2),
          this.sceneGroup.add(
            this.labelGroup,
            this.gqGroup,
            this.provinceNameGroup,
            this.badgeGroup
          ),
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
        let i = p.timeline();
        i.addLabel("focusMap", 3.5),
          i.addLabel("focusMapOpacity", 4),
          i.addLabel("bar", 5),
          i.add(
            p.to(this.camera.instance.position, {
              duration: 2.5,
              delay: 2,
              x: 3.134497983573052,
              y: 126.8312346165316,
              z: 78.77649752477839,
              ease: "circ.out",
            })
          ),
          i.add(
            p.to(this.quan.rotation, { duration: 5, z: -2 * Math.PI }),
            "-=2"
          ),
          i.add(
            p.to(this.focusMapGroup.position, {
              duration: 1,
              x: 0,
              y: 0,
              z: 0,
            }),
            "focusMap"
          ),
          i.add(
            p.to(this.focusMapGroup.scale, {
              duration: 1,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMap"
          ),
          this.provinceMesh.mapGroup.traverse((a) => {
            a.isMesh &&
              (i.add(
                p.to(a.material[0], {
                  duration: 1,
                  opacity: 1,
                  ease: "circ.out",
                }),
                "focusMapOpacity"
              ),
              i.add(
                p.to(a.position, {
                  duration: 1,
                  x: 0,
                  y: 0,
                  z: 0,
                  ease: "circ.out",
                }),
                "focusMapOpacity"
              ));
          }),
          i.add(
            p.to(this.focusMapSideMaterial, {
              duration: 1,
              opacity: 1,
              ease: "circ.out",
              onComplete: () => {
                this.createMirror(), this.createGridRipple();
              },
            }),
            "focusMapOpacity"
          ),
          i.add(
            p.to(this.provinceLineMaterial, {
              duration: 0.5,
              delay: 0.3,
              opacity: 1,
            }),
            "focusMapOpacity"
          ),
          i.add(
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
          i.add(
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
          this.allBar.map((a, r) => {
            i.add(
              p.to(a.scale, {
                duration: 1,
                delay: 0.05 * r,
                x: 1,
                y: 1,
                z: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allBarMaterial.map((a, r) => {
            i.add(
              p.to(a, {
                duration: 0.5,
                delay: 0.05 * r,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allProvinceLabel.map((a, r) => {
            let n = a.element.querySelector(".provinces-label-style02-wrap"),
              l = a.element.querySelector(".number .value"),
              c = Number(l.innerText),
              o = { score: 0 };
            i.add(
              p.to(n, {
                duration: 0.5,
                delay: 0.05 * r,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
            let s = p.to(o, {
              duration: 0.5,
              delay: 0.05 * r,
              score: c,
              onUpdate: u,
            });
            function u() {
              l.innerText = o.score.toFixed(0);
            }
            i.add(s, "bar");
          }),
          this.allProvinceNameLabel.map((a, r) => {
            let n = a.element.querySelector(".provinces-name-label-wrap");
            i.add(
              p.to(n, {
                duration: 0.5,
                delay: 0.05 * r,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allGuangquan.map((a, r) => {
            i.add(
              p.to(a.children[0].scale, {
                duration: 0.5,
                delay: 0.05 * r,
                x: 1,
                y: 1,
                z: 1,
                ease: "circ.out",
              }),
              "bar"
            ),
              i.add(
                p.to(a.children[1].scale, {
                  duration: 0.5,
                  delay: 0.05 * r,
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
    let e = new Me(16777215, 2);
    this.scene.add(e);
    let t = new Le(16777215, 4);
    t.position.set(-30, 6, -8),
      (t.castShadow = !0),
      (t.shadow.radius = 20),
      (t.shadow.mapSize.width = 1024),
      (t.shadow.mapSize.height = 1024),
      this.scene.add(t),
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
    const t = new Ge(1924702, e.intensity, e.distance, 1);
    t.position.set(e.x, e.y, e.z), this.scene.add(t);
  }
  createModel() {
    let e = new x(),
      t = new x();
    this.focusMapGroup = t;
    let { province: i } = this.createProvince();
    (this.provinceMesh = i),
      i.setParent(t),
      t.position.set(0, 0, -5),
      t.scale.set(1, 1, 0),
      e.add(t),
      e.rotateX(-Math.PI / 2),
      e.position.set(0, 0.2, 0),
      this.scene.add(e);
  }
  createProvince() {
    let e = this.assets.instance.getResource("china"),
      t = this.assets.instance.getResource("topNormal");
    (t.wrapS = t.wrapT = L),
      (this.provinceLineMaterial = new I({
        color: 2868444,
        opacity: 0,
        transparent: !0,
        fog: !1,
      }));
    let [i, a] = this.createProvinceMaterial();
    (this.focusMapTopMaterial = i), (this.focusMapSideMaterial = a);
    let r = new pt(this, {
      center: this.pointCenter,
      position: new v(0, 0, 0.06),
      data: e,
      depth: this.depth,
      topFaceMaterial: i,
      sideMaterial: a,
      lineMaterial: this.provinceLineMaterial,
      renderOrder: 9,
    });
    new W({ color: 400967, map: t, transparent: !0, normalMap: t, opacity: 1 });
    let { boxSize: n, box3: l } = X(r.mapGroup);
    return (
      X(r.mapGroup),
      (this.eventElement = []),
      r.mapGroup.children.map((c, o) => {
        c.children.map((s) => {
          s.type === "Mesh" &&
            (this.eventElement.push(s),
            this.calcUv2(s.geometry, n.x, n.y, l.min.x, l.min.y));
        });
      }),
      { province: r }
    );
  }
  addEvent() {
    let e = [];
    const t = (a) => {
        p.to(a.scale, {
          duration: 0.3,
          z: 1,
          onComplete: () => {
            a.traverse((r) => {
              r.isMesh &&
                (r.material[0].emissive.setHex(a.userData.materialEmissiveHex),
                (r.material[0].emissiveIntensity = 1),
                (r.renderOrder = 9));
            });
          },
        }),
          this.setBarMove(a.userData.adcode, "down"),
          this.setGQMove(a.userData.adcode, "down"),
          this.setLabelMove(a.userData.adcode, "down"),
          this.setScatterMove(a.userData.adcode, "down");
      },
      i = (a) => {
        p.to(a.scale, { duration: 0.3, z: 1.5 }),
          this.setBarMove(a.userData.adcode),
          this.setGQMove(a.userData.adcode),
          this.setLabelMove(a.userData.adcode),
          this.setScatterMove(a.userData.adcode),
          a.traverse((r) => {
            r.isMesh &&
              (r.material[0].emissive.setHex(725293),
              (r.material[0].emissiveIntensity = 1.5),
              (r.renderOrder = 21));
          });
      };
    this.eventElement.map((a) => {
      this.interactionManager.add(a),
        a.addEventListener("mousedown", (r) => {}),
        a.addEventListener("mouseover", (r) => {
          e.includes(r.target.parent) || e.push(r.target.parent),
            (document.body.style.cursor = "pointer"),
            i(r.target.parent);
        }),
        a.addEventListener("mouseout", (r) => {
          (e = e.filter(
            (n) => n.userData.name !== r.target.parent.userData.name
          )),
            e.length > 0 && e[e.length - 1],
            t(r.target.parent),
            (document.body.style.cursor = "default");
        });
    });
  }
  setBarMove(e, t = "up") {
    this.allBar.map((i) => {
      i.userData.adcode === e &&
        p.to(i.position, {
          duration: 0.3,
          z:
            t === "up"
              ? i.userData.position[2] + this.depth / 2 + 0.3
              : i.userData.position[2],
        });
    });
  }
  setGQMove(e, t = "up") {
    this.allGuangquan.map((i) => {
      i.userData.adcode === e &&
        p.to(i.position, {
          duration: 0.3,
          z:
            t === "up"
              ? i.userData.position[2] + this.depth / 2 + 0.3
              : i.userData.position[2],
        });
    }),
      this.flyLineFocusGroup.userData.adcode === e &&
        (console.log(this.flyLineFocusGroup.userData.adcode),
        p.to(this.flyLineFocusGroup.position, {
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
    [...this.allProvinceLabel, ...this.allProvinceNameLabel].map((i) => {
      i.userData.adcode === e &&
        p.to(i.position, {
          duration: 0.3,
          z:
            t === "up"
              ? i.userData.position[2] + this.depth / 2 + 0.3
              : i.userData.position[2],
        });
    });
  }
  setScatterMove(e, t = "up") {
    this.scatterGroup.children.map((i) => {
      i.userData.adcode === e &&
        p.to(i.position, {
          duration: 0.3,
          z:
            t === "up"
              ? i.userData.position[2] + this.depth / 2 + 0.3
              : i.userData.position[2],
        });
    });
  }
  calcUv2(e, t, i, a, r) {
    const n = e.attributes.position,
      l = e.attributes.uv,
      c = e.groups[0].count;
    for (let o = 0; o < c; o++) {
      const s = n.getX(o),
        u = n.getY(o),
        d = (s - a) / t,
        f = (u - r) / i;
      l.setXY(o, d, f);
    }
    (l.needsUpdate = !0), e.computeVertexNormals();
  }
  createProvinceMaterial() {
    let e = this.assets.instance.getResource("topNormal");
    e.wrapS = e.wrapT = L;
    let t = new W({
        color: 400967,
        emissive: 0,
        map: e,
        transparent: !0,
        normalMap: e,
        opacity: 0,
      }),
      i = this.assets.instance.getResource("side");
    (i.wrapS = L), (i.wrapT = L), i.repeat.set(1, 0.2), (i.offset.y += 0.01);
    let a = new W({
      color: 16777215,
      map: i,
      fog: !1,
      transparent: !0,
      opacity: 0,
      side: V,
    });
    return (
      this.time.on("tick", () => {
        i.offset.y += 0.002;
      }),
      (a.onBeforeCompile = (r) => {
        (r.uniforms = {
          ...r.uniforms,
          uColor1: { value: new k(3191807) },
          uColor2: { value: new k(3191807) },
        }),
          (r.vertexShader = r.vertexShader.replace(
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
          (r.fragmentShader = r.fragmentShader.replace(
            "void main() {",
            `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
          )),
          (r.fragmentShader = r.fragmentShader.replace(
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
      t = K(J);
    const i = new x();
    this.barGroup = i;
    const a = 7,
      r = 4 * a,
      n = t[0].value;
    (this.allBar = []),
      (this.allBarMaterial = []),
      (this.allGuangquan = []),
      (this.allProvinceLabel = []),
      (this.allProvinceNameLabel = []),
      t.map((o, s) => {
        let u = r * (o.value / n),
          d = new G({
            color: 16777215,
            transparent: !0,
            opacity: 0,
            depthTest: !1,
            fog: !1,
          });
        new Fe(d, {
          uColor1: s < 3 ? 16506760 : 5291006,
          uColor2: s < 3 ? 16506760 : 5291006,
          size: u,
          dir: "y",
        });
        const f = new Se(0.05 * a, 0.05 * a, u);
        f.translate(0, 0, u / 2);
        const m = new P(f, d);
        m.renderOrder = 22;
        let y = m,
          [h, b] = this.geoProjection(o.centroid);
        y.position.set(h, -b, this.depth + 0.46),
          y.scale.set(1, 1, 0),
          (y.userData.name = o.name),
          (y.userData.adcode = o.adcode),
          (y.userData.position = [h, -b, this.depth + 0.46]);
        let M = this.createQuan();
        M.position.set(h, -b, this.depth + 0.46),
          (M.userData.name = o.name),
          (M.userData.adcode = o.adcode),
          (M.userData.position = [h, -b, this.depth + 0.46]),
          this.gqGroup.add(M);
        let C = this.createHUIGUANG(u, s < 3 ? 16776948 : 7863285);
        y.add(...C), i.add(y);
        let S = l(o, s, new v(h, -b, this.depth + 0.9 + u)),
          g = c(o, s, new v(h, -b - 1.5, this.depth + 0.4));
        this.allBar.push(y),
          this.allBarMaterial.push(d),
          this.allGuangquan.push(M),
          this.allProvinceLabel.push(S),
          this.allProvinceNameLabel.push(g);
      }),
      this.sceneGroup.add(i);
    function l(o, s, u) {
      let d = e.label3d.create("", "provinces-label-style02", !0);
      return (
        d.init(
          `<div class="provinces-label-style02 ${s < 3 ? "yellow" : ""}">
      <div class="provinces-label-style02-wrap">
        <div class="number"><span class="value">${
          o.value
        }</span><span class="unit">万人</span></div>
        <div class="no">${s + 1}</div>
      </div>
    </div>`,
          u
        ),
        e.label3d.setLabelStyle(d, 0.05, "x"),
        d.setParent(e.labelGroup),
        (d.userData.adcode = o.adcode),
        (d.userData.position = [u.x, u.y, u.z]),
        d
      );
    }
    function c(o, s, u) {
      let d = e.label3d.create("", "provinces-name-label", !0);
      return (
        d.init(
          `<div class="provinces-name-label"><div class="provinces-name-label-wrap">${o.name}</div></div>`,
          u
        ),
        e.label3d.setLabelStyle(d, 0.08, "x"),
        d.setParent(e.provinceNameGroup),
        (d.userData.adcode = o.adcode),
        (d.userData.position = [u.x, u.y, u.z]),
        d
      );
    }
  }
  createHUIGUANG(e, t) {
    let i = new B(1.5, e);
    i.translate(0, e / 2, 0);
    const a = this.assets.instance.getResource("huiguang");
    (a.colorSpace = A), (a.wrapS = L), (a.wrapT = L);
    let r = new G({
        color: t,
        map: a,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        side: V,
        blending: D,
      }),
      n = new P(i, r);
    (n.renderOrder = 23), n.rotateX(Math.PI / 2);
    let l = n.clone(),
      c = n.clone();
    return (
      l.rotateY((Math.PI / 180) * 60),
      c.rotateY((Math.PI / 180) * 120),
      [n, l, c]
    );
  }
  createQuan() {
    const e = this.assets.instance.getResource("guangquan1"),
      t = this.assets.instance.getResource("guangquan2");
    let i = new B(2, 2),
      a = new G({
        color: 16777215,
        map: e,
        alphaMap: e,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: D,
      }),
      r = new G({
        color: 16777215,
        map: t,
        alphaMap: t,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: D,
      }),
      n = new P(i, a),
      l = new P(i, r);
    return (
      (n.renderOrder = 24),
      (l.renderOrder = 24),
      (l.position.z -= 0.001),
      n.scale.set(0, 0, 0),
      l.scale.set(0, 0, 0),
      (this.quanGroup = new x()),
      this.quanGroup.add(n, l),
      this.time.on("tick", (c) => {
        n.rotation.z += c * 2;
      }),
      this.quanGroup
    );
  }
  createFloor() {
    let e = new B(200, 200);
    const t = this.assets.instance.getResource("gaoguang1");
    (t.colorSpace = A), (t.wrapS = L), (t.wrapT = L), t.repeat.set(1, 1);
    let i = new G({ map: t, opacity: 1, transparent: !0, blending: D }),
      a = new P(e, i);
    a.rotateX(-Math.PI / 2), a.position.set(0, 0.05, 0), this.scene.add(a);
    const r = this.assets.instance.getResource("quan");
    let n = new P(
      new B(250, 250),
      new G({ map: r, opacity: 1, transparent: !0, blending: D, depthTest: !1 })
    );
    n.rotateX(-Math.PI / 2),
      n.position.set(0, this.depth + 2.05, 0),
      (this.quan = n),
      this.scene.add(n);
  }
  createGridRipple() {
    let e = new B(300, 300);
    const t = this.assets.instance.getResource("grid"),
      i = this.assets.instance.getResource("gridBlack");
    (t.wrapS = t.wrapT = i.wrapS = i.wrapT = L),
      t.repeat.set(40, 40),
      i.repeat.set(40, 40);
    let a = new G({
        map: t,
        color: 65535,
        transparent: !0,
        opacity: 0.5,
        alphaMap: i,
        blending: D,
      }),
      r = new P(e, a);
    r.rotateX(-Math.PI / 2);
    let [n, l] = this.geoProjection(this.pointCenter);
    r.position.set(n, -l, 0.01);
    const c = r.clone();
    (c.material = a.clone()),
      (c.material.opacity = 0.1),
      this.scene.add(r, c),
      new mt({
        material: a,
        time: this.time,
        size: 300,
        diffuseColor: 499686,
        diffuseSpeed: 30,
        diffuseWidth: 20,
        diffuseDir: 2,
      });
  }
  createMirror() {
    const e = new B(200, 200),
      t = new E(e, {
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
      i = this.assets.instance.getResource("rotationBorder2"),
      a = new Q(this, {
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
        position: new v(0, 0.07, 0),
      });
    (a.instance.renderOrder = 6),
      a.instance.scale.set(0, 0, 0),
      a.setParent(this.scene);
    let r = new Q(this, {
      width: e * 1.116,
      needRotate: !0,
      rotateSpeed: -0.004,
      material: new G({
        map: i,
        color: 4763647,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        blending: D,
      }),
      position: new v(0, 0.06, 0),
    });
    (r.instance.renderOrder = 6),
      r.instance.scale.set(0, 0, 0),
      r.setParent(this.scene),
      (this.rotateBorder1 = a.instance),
      (this.rotateBorder2 = r.instance);
  }
  createParticles() {
    (this.particles = new Y(this, {
      num: 10,
      range: 200,
      dir: "up",
      speed: 0.1,
      material: new Pe({
        map: Y.createTexture(),
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
    (this.scatterGroup = new x()),
      (this.scatterGroup.visible = !1),
      (this.scatterGroup.rotation.x = -Math.PI / 2),
      this.scene.add(this.scatterGroup);
    const e = this.assets.instance.getResource("arrow"),
      t = new De({ map: e, color: 16776960, transparent: !0, depthTest: !1 });
    let i = K(ft),
      a = i[0].value;
    i.map((r) => {
      const n = new Te(t);
      n.renderOrder = 23;
      let l = 2 + (r.value / a) * 1;
      n.scale.set(l, l, l);
      let [c, o] = this.geoProjection([r.lng, r.lat]);
      n.position.set(c, -o, this.depth + 0.41),
        (n.userData.adcode = r.adcode),
        (n.userData.position = [c, -o, this.depth + 0.41]),
        this.scatterGroup.add(n);
    });
  }
  createBadgeLabel() {
    const e = this;
    (e.badgeGroup.visible = !1),
      gt.map((i) => {
        const [a, r] = this.geoProjection(i.geometry.coordinates);
        t(i, new v(a, -r, this.depth + 0.92));
      });
    function t(i, a) {
      let r = e.label3d.create("", "badges-label", !0);
      return (
        r.init(
          `<div class="badges-label-wrap">
        平均工资：<span>${i.value}元</span>
        <img class="icon" src="${rt}" alt="" />
      </div>`,
          a
        ),
        e.label3d.setLabelStyle(r, 0.1, "x"),
        r.setParent(e.badgeGroup),
        r.hide(),
        (r.userData.adcode = i.adcode),
        (r.userData.position = [a.x, a.y, a.z]),
        r
      );
    }
  }
  createFlyLine() {
    (this.flyLineGroup = new x()),
      (this.flyLineGroup.visible = !1),
      this.scene.add(this.flyLineGroup);
    const e = this.assets.instance.getResource("flyLine");
    (e.colorSpace = A),
      (e.wrapS = L),
      (e.wrapT = L),
      (e.generateMipmaps = !1),
      (e.magFilter = $),
      e.repeat.set(0.5, 1);
    const t = 0.1,
      i = 32,
      a = 8,
      r = !1;
    let [n, l] = this.geoProjection(this.flyLineCenter),
      c = new v(n, -l, 0);
    const o = new G({
      map: e,
      alphaMap: e,
      color: 16506760,
      transparent: !0,
      fog: !1,
      opacity: 1,
      depthTest: !1,
      blending: D,
    });
    this.time.on("tick", () => {
      e.offset.x -= 0.003;
    }),
      J.map((s) => {
        let [u, d] = this.geoProjection(s.centroid),
          f = new v(u, -d, 0);
        const m = new v();
        m.addVectors(c, f).multiplyScalar(0.5), m.setZ(15);
        const y = new Ce(c, m, f),
          h = new j(y, i, t, a, r),
          b = new P(h, o);
        (b.rotation.x = -Math.PI / 2),
          b.position.set(0, this.depth + 0.4, 0),
          (b.renderOrder = 21),
          this.flyLineGroup.add(b);
      }),
      this.createFlyLineFocus();
  }
  createFlyLineFocus() {
    (this.flyLineFocusGroup = new x()),
      (this.flyLineFocusGroup.visible = !1),
      (this.flyLineFocusGroup.rotation.x = -Math.PI / 2);
    let [e, t] = this.geoProjection(this.flyLineCenter);
    this.flyLineFocusGroup.position.set(e, this.depth + 0.47, t),
      (this.flyLineFocusGroup.userData.name = "北京市"),
      (this.flyLineFocusGroup.userData.adcode = 11e4),
      (this.flyLineFocusGroup.userData.position = [e, this.depth + 0.47, t]),
      this.scene.add(this.flyLineFocusGroup);
    const i = this.assets.instance.getResource("guangquan1"),
      a = new B(5, 5),
      r = new G({
        color: 16506760,
        map: i,
        alphaMap: i,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        blending: D,
      }),
      n = new P(a, r);
    (n.renderOrder = 30), n.scale.set(0, 0, 0);
    const l = n.clone();
    (l.material = r.clone()),
      this.flyLineFocusGroup.add(n, l),
      p.to(n.material, { opacity: 0, repeat: -1, yoyo: !1, duration: 1 }),
      p.to(n.scale, { x: 2, y: 2, z: 2, repeat: -1, yoyo: !1, duration: 1 }),
      p.to(l.material, {
        delay: 0.5,
        opacity: 0,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      }),
      p.to(l.scale, {
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
    (this.pathLineGroup = new x()),
      (this.pathLineGroup.visible = !1),
      this.scene.add(this.pathLineGroup);
    const e = this.assets.instance.getResource("pathLine");
    let t = this.assets.instance.getResource("transportPath");
    (e.wrapS = L),
      (e.wrapT = L),
      (e.rotation = Math.PI),
      e.repeat.set(8, 1),
      (e.generateMipmaps = !1),
      (e.magFilter = $);
    const i = 0.1,
      a = 32,
      r = 8,
      n = !1,
      l = new G({
        map: e,
        color: 16777215,
        transparent: !0,
        fog: !1,
        opacity: 1,
        depthTest: !1,
        blending: D,
      });
    this.time.on("tick", () => {
      e.offset.x += 0.005;
    }),
      (t = JSON.parse(t)),
      t.features.forEach((c) => {
        let o = [];
        c.geometry.coordinates.map((f) => {
          let [m, y] = this.geoProjection(f);
          o.push(new v(m, -y, 0));
        });
        const s = new te(o),
          u = new j(s, a, i, r, n),
          d = new P(u, l);
        (d.rotation.x = -Math.PI / 2),
          d.position.set(0, this.depth + 0.42, 0),
          (d.renderOrder = 21),
          this.pathLineGroup.add(d);
      });
  }
  createStorke() {
    let e = this.assets.instance.getResource("chinaStorke");
    const t = this.assets.instance.getResource("pathLine2");
    (t.wrapS = L), (t.wrapT = L), t.repeat.set(1, 1);
    let i = new ht(this, {
      center: this.pointCenter,
      position: new v(0, this.depth + 0.38, 0),
      data: e,
      material: new G({
        color: 2868444,
        map: t,
        alphaMap: t,
        fog: !1,
        transparent: !0,
        opacity: 1,
        blending: D,
      }),
      type: "Line3",
      renderOrder: 22,
    });
    (i.lineGroup.rotation.x = -Math.PI / 2),
      this.scene.add(i.lineGroup),
      this.time.on("tick", () => {
        t.offset.x += 0.002;
      });
  }
  createWatermark() {
    let e = this.assets.instance.getResource("watermark");
    (e.wrapS = L),
      (e.wrapT = L),
      e.repeat.set(50, 50),
      (e.rotation = Math.PI / 5);
    let t = new B(100, 100, 1),
      i = new G({ map: e, transparent: !0, opacity: 0.15 }),
      a = new P(t, i);
    (a.position.x -= 10),
      (a.position.y -= 10),
      (a.position.z -= 10),
      (a.renderOrder = 999),
      this.camera.instance.add(a);
  }
  update() {
    super.update(),
      this.stats && this.stats.update(),
      this.interactionManager && this.interactionManager.update();
  }
  destroy() {
    super.destroy(),
      this.label3d && this.label3d.destroy(),
      this.stats && this.stats.dom && document.body.removeChild(this.stats.dom),
      this.groundMirror && this.groundMirror.dispose();
  }
}
const yt = { class: "map-fj" },
  bt = createElementVNode("canvas", { id: "canvas" }, null, -1),
  wt = { class: "map-btn-group" },
  Ht = {
    __name: "map-animate-china",
    setup(R) {
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
        i = (a) => {
          (t[a] = !t[a]),
            a === "bar" &&
              ((e.barGroup.visible = t[a]),
              (e.labelGroup.visible = t[a]),
              e.labelGroup.children.map((r) => {
                t[a] ? r.show() : r.hide();
              })),
            a === "particle" &&
              ((e.particles.enable = t[a]),
              (e.particles.instance.visible = t[a])),
            a === "flyLine" &&
              ((e.flyLineGroup.visible = t[a]),
              (e.flyLineFocusGroup.visible = t[a])),
            a === "scatter" && (e.scatterGroup.visible = t[a]),
            a === "card" &&
              ((e.badgeGroup.visible = t[a]),
              e.badgeGroup.children.map((r) => {
                t[a] ? r.show() : r.hide();
              })),
            a === "mirror" && (e.groundMirror.visible = t[a]),
            a === "path" && (e.pathLineGroup.visible = t[a]);
        };
      return (
        onMounted(() => {
          e = new vt(document.getElementById("canvas"), {
            geoProjectionCenter: [108.55, 34.32],
          });
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (a, r) => (
          openBlock(),
          createElementBlock("div", yt, [
            bt,
            createElementVNode("div", wt, [
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.bar }]),
                  onClick: r[0] || (r[0] = (n) => i("bar")),
                },
                " 柱状图 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.flyLine }]),
                  onClick: r[1] || (r[1] = (n) => i("flyLine")),
                },
                " 飞线 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.scatter }]),
                  onClick: r[2] || (r[2] = (n) => i("scatter")),
                },
                " 散点图 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.card }]),
                  onClick: r[3] || (r[3] = (n) => i("card")),
                },
                " 标牌 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.particle }]),
                  onClick: r[4] || (r[4] = (n) => i("particle")),
                },
                " 粒子特效 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.path }]),
                  onClick: r[5] || (r[5] = (n) => i("path")),
                },
                " 路径轨迹 ",
                2
              ),
              createElementVNode(
                "div",
                {
                  class: normalizeClass(["btn", { active: t.mirror }]),
                  onClick: r[6] || (r[6] = (n) => i("mirror")),
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
export { Ht as default };
