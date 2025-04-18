import { _ as ae, a as ne } from "./animate2-2f11d126.js";
import {
  F as ie,
  G as L,
  V as y,
  a as J,
  M as w,
  O as Z,
  S as K,
  E as re,
  b,
  c as ee,
  D as T,
  C as S,
  R as x,
  d as z,
  e as oe,
  L as A,
  B as te,
  f as se,
  g as le,
  A as ce,
  h as de,
  i as ue,
  P as he,
  j as pe,
  k as fe,
  l as I,
  m as B,
  n as G,
  N as me,
  o as ge,
  Q as ve,
  T as ye,
  p as N,
  q,
  r as $,
  s as we,
  t as be,
  u as xe,
} from "./OrbitControls-9c9ee6bc.js";
import {
  R as Le,
  g as R,
  V as Me,
  m as Pe,
  M as Se,
} from "./index-1453e2ee.js";
import { t as j, g as Ge, m as Ce, a as Ie } from "./utils-9af1928d.js";
import { D as Te } from "./index-4ec0cc76.js";
import { G as Ee } from "./Grid-77f5dd1e.js";
import { L as Be } from "./Label3d-1a598e21.js";
import { G as U, P as V } from "./GradientShader-7cc661aa.js";
import { P as H } from "./Particles-a008e8a7.js";
import { g } from "./index-4db78ffb.js";
import { c as Oe, s as ze } from "./chinaBlurLine-b7b06be6.js";
import { o as Ae } from "./ocean-bg-19f8644c.js";
import {
  h as _e,
  r as Fe,
  g as X,
  a as De,
} from "./rotationBorder1-447bf02a.js";
import { r as Re } from "./rotationBorder2-a143eae0.js";
import { w as je } from "./szxs_logo-02219344.js";
import { f as ke } from "./flyLine2-e7135ba7.js";
import { p as Ne } from "./pathLine2-dee41061.js";
import { a as qe } from "./arrow-8777f461.js";
import { p as $e } from "./point1-7bb35866.js";
import { L as Ue, a as Ve } from "./Line2-7598ed88.js";
import { l as _ } from "./label-icon-aa0c6fbf.js";
import { a as He } from "./three.interactive-c6512469.js";
import { h as Q } from "./heatmap.min-eb3a4a51.js";
import {
  f as Xe,
  g as Qe,
  h as We,
  o as Ye,
  c as Je,
  b as P,
  n as O,
} from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
class Ze {
  constructor(t = null) {
    (this.onLoadCallback = t), this.init();
  }
  init() {
    (this.instance = new Le()),
      this.instance.addLoader(ie, "FileLoader"),
      this.instance.on("onProgress", (i, e, n) => {
        ((e / n) * 100).toFixed(2) + "";
      }),
      this.instance.on("onLoad", () => {
        this.onLoadCallback && this.onLoadCallback();
      });
    let t = "/sayhello-site/",
      a = [
        { type: "Texture", name: "huiguang", path: _e },
        { type: "Texture", name: "watermark", path: je },
        { type: "Texture", name: "rotationBorder1", path: Fe },
        { type: "Texture", name: "rotationBorder2", path: Re },
        { type: "Texture", name: "guangquan1", path: X },
        { type: "Texture", name: "guangquan2", path: De },
        { type: "Texture", name: "chinaBlurLine", path: Oe },
        { type: "Texture", name: "ocean", path: Ae },
        { type: "Texture", name: "side", path: ze },
        { type: "Texture", name: "flyLine", path: ke },
        { type: "Texture", name: "flyLineFocus", path: X },
        { type: "Texture", name: "pathLine", path: Ne },
        { type: "Texture", name: "arrow", path: qe },
        { type: "Texture", name: "point", path: $e },
        {
          type: "File",
          name: "guangdong",
          path: t + "assets/json/广东省.json",
        },
        {
          type: "File",
          name: "china",
          path: t + "assets/json/中华人民共和国.json",
        },
      ];
    this.instance.loadAll(a);
  }
}
class Ke {
  constructor({ assets: t, time: a }, i = {}) {
    (this.mapGroup = new L()),
      (this.assets = t),
      (this.time = a),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new y(0, 0, 0),
          center: new J(0, 0),
          data: "",
          renderOrder: 1,
          topFaceMaterial: new w({
            color: 1582651,
            transparent: !0,
            opacity: 1,
          }),
          sideMaterial: new w({ color: 464171, transparent: !0, opacity: 1 }),
          depth: 0.1,
        },
        i
      )),
      this.mapGroup.position.copy(this.config.position);
    let e = j(this.config.data);
    this.create(e), console.log(this.mapGroup);
  }
  geoProjection(t) {
    return R().center(this.config.center).scale(120).translate([0, 0])(t);
  }
  create(t) {
    t.features.forEach((a) => {
      const i = new Z();
      let { name: e, center: n = [], centroid: r = [] } = a.properties;
      this.coordinates.push({ name: e, center: n, centroid: r });
      const c = {
        depth: this.config.depth,
        bevelEnabled: !0,
        bevelSegments: 1,
        bevelThickness: 0.1,
      };
      let s = [this.config.topFaceMaterial, this.config.sideMaterial];
      a.geometry.coordinates.forEach((l) => {
        l.forEach((d, o) => {
          const h = new K();
          for (let f = 0; f < d.length; f++) {
            if (!d[f][0] || !d[f][1]) return !1;
            const [m, v] = this.geoProjection(d[f]);
            f === 0 && h.moveTo(m, -v), h.lineTo(m, -v);
          }
          const u = new re(h, c),
            p = new b(u, s);
          i.add(p);
        });
      }),
        this.mapGroup.add(i);
    });
  }
  createMaterial() {
    let t = new ee({
      color: 16777215,
      transparent: !0,
      opacity: 1,
      fog: !1,
      side: T,
    });
    t.onBeforeCompile = (e) => {
      (e.uniforms = {
        ...e.uniforms,
        uColor1: { value: new S(2781042) },
        uColor2: { value: new S(860197) },
      }),
        (e.vertexShader = e.vertexShader.replace(
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
        (e.fragmentShader = e.fragmentShader.replace(
          "void main() {",
          `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
        )),
        (e.fragmentShader = e.fragmentShader.replace(
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
      float topAlpha = 0.5;
      if(vPosition.z>0.3){
        diffuseColor.a *= topAlpha;
      }

      gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
      `
        ));
    };
    let a = this.assets.instance.getResource("side");
    (a.wrapS = x), (a.wrapT = x), a.repeat.set(1, 1.5), (a.offset.y += 0.065);
    let i = new z({ color: 16777215, map: a, fog: !1, opacity: 1, side: T });
    return (
      this.time.on("tick", () => {
        a.offset.y += 1e-4;
      }),
      (i.onBeforeCompile = (e) => {
        (e.uniforms = {
          ...e.uniforms,
          uColor1: { value: new S(2781042) },
          uColor2: { value: new S(2781042) },
        }),
          (e.vertexShader = e.vertexShader.replace(
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
          (e.fragmentShader = e.fragmentShader.replace(
            "void main() {",
            `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
          )),
          (e.fragmentShader = e.fragmentShader.replace(
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
  getCoordinates() {
    return this.coordinates;
  }
  setParent(t) {
    t.add(this.mapGroup);
  }
}
class W {
  constructor({}, t = {}) {
    (this.mapGroup = new L()),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new Me(0, 0, 0),
          center: new J(0, 0),
          data: "",
          renderOrder: 1,
          merge: !1,
          material: new w({ color: 1582651, transparent: !0, opacity: 1 }),
        },
        t
      )),
      this.mapGroup.position.copy(this.config.position);
    let a = j(this.config.data);
    this.create(a);
  }
  geoProjection(t) {
    return R().center(this.config.center).scale(120).translate([0, 0])(t);
  }
  create(t) {
    let { merge: a } = this.config,
      i = [];
    if (
      (t.features.forEach((e) => {
        const n = new Z();
        let { name: r, center: c = [], centroid: s = [] } = e.properties;
        this.coordinates.push({ name: r, center: c, centroid: s }),
          (n.userData.name = r),
          e.geometry.coordinates.forEach((l) => {
            l.forEach((d) => {
              const o = new K();
              for (let u = 0; u < d.length; u++) {
                if (!d[u][0] || !d[u][1]) return !1;
                const [p, f] = this.geoProjection(d[u]);
                u === 0 && o.moveTo(p, -f), o.lineTo(p, -f);
              }
              const h = new oe(o);
              if (a) i.push(h);
              else {
                const u = new b(h, this.config.material);
                (u.userData.name = r),
                  (u.renderOrder = this.config.renderOrder),
                  n.add(u);
              }
            });
          }),
          a || this.mapGroup.add(n);
      }),
      a)
    ) {
      let e = Pe(i);
      const n = new b(e, this.config.material);
      (n.renderOrder = this.config.renderOrder), this.mapGroup.add(n);
    }
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(t) {
    t.add(this.mapGroup);
  }
}
class F {
  constructor({}, t = {}) {
    this.config = Object.assign(
      {
        visibelProvince: "",
        center: [0, 0],
        data: "",
        material: new A({ color: 16777215 }),
        type: "LineLoop",
        renderOrder: 1,
      },
      t
    );
    let a = j(this.config.data),
      i = this.create(a);
    this.lineGroup = i;
  }
  geoProjection(t) {
    return R().center(this.config.center).scale(120).translate([0, 0])(t);
  }
  create(t) {
    const { type: a, visibelProvince: i } = this.config;
    let e = t.features,
      n = new L();
    for (let r = 0; r < e.length; r++) {
      const c = e[r];
      c.properties.name !== i &&
        c.geometry.coordinates.forEach((s) => {
          const l = [];
          let d = null;
          a === "Line2"
            ? (s[0].forEach((o) => {
                const [h, u] = this.geoProjection(o);
                l.push(h, -u, 0);
              }),
              (d = this.createLine2(l)))
            : s[0].forEach((o) => {
                const [h, u] = this.geoProjection(o);
                l.push(new y(h, -u, 0)), (d = this.createLine(l));
              }),
            n.add(d);
        });
    }
    return n;
  }
  createLine2(t) {
    const { material: a, renderOrder: i } = this.config,
      e = new Ue();
    e.setPositions(t);
    let n = new Ve(e, a);
    return (
      (n.name = "mapLine2"), (n.renderOrder = i), n.computeLineDistances(), n
    );
  }
  createLine(t) {
    const { material: a, renderOrder: i, type: e } = this.config,
      n = new te();
    n.setFromPoints(t);
    let r = new se(n, a);
    return (r.renderOrder = i), (r.name = "mapLine"), r;
  }
  setParent(t) {
    t.add(this.lineGroup);
  }
}
const et = [
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
      hide: !0,
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
      hide: !0,
    },
    {
      name: "福建省",
      center: [119.306239, 26.075302],
      centroid: [118.006468, 26.069925],
      blur: !0,
    },
    {
      name: "江西省",
      center: [115.892151, 28.676493],
      centroid: [115.732975, 27.636112],
      blur: !0,
    },
    {
      name: "山东省",
      center: [117.000923, 36.675807],
      centroid: [118.187759, 36.376092],
      hide: !0,
    },
    {
      name: "河南省",
      center: [113.665412, 34.757975],
      centroid: [113.619717, 33.902648],
      hide: !0,
    },
    {
      name: "湖北省",
      center: [114.298572, 30.584355],
      centroid: [112.271301, 30.987527],
      hide: !0,
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
      hide: !0,
    },
    {
      name: "广西壮族自治区",
      center: [108.320004, 22.82402],
      centroid: [108.7944, 23.833381],
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
  Y = [
    {
      name: "广州市",
      enName: "guangzhou",
      center: [113.280637, 23.125178],
      centroid: [113.544372, 23.329249],
      value: 100,
    },
    {
      name: "韶关市",
      center: [113.591544, 24.801322],
      centroid: [113.779323, 24.81941],
      value: 32,
    },
    {
      name: "深圳市",
      enName: "shenzhen",
      center: [114.085947, 22.547],
      centroid: [114.143142, 22.643377],
      value: 79,
    },
    {
      name: "珠海市",
      enName: "zhuhai",
      center: [113.553986, 22.224979],
      centroid: [113.337286, 22.160135],
      value: 68,
    },
    {
      name: "汕头市",
      enName: "shantou",
      center: [116.708463, 23.37102],
      centroid: [116.575361, 23.322231],
      value: 56,
    },
    {
      name: "佛山市",
      enName: "foushan",
      center: [113.122717, 23.028762],
      centroid: [112.949778, 23.004314],
      value: 52,
    },
    {
      name: "江门市",
      center: [113.094942, 22.590431],
      centroid: [112.676451, 22.284348],
      value: 18,
    },
    {
      name: "湛江市",
      enName: "zhanjiang",
      center: [110.364977, 21.274898],
      centroid: [110.109828, 21.047893],
      value: 48,
    },
    {
      name: "茂名市",
      enName: "maoming",
      center: [110.919229, 21.659751],
      centroid: [110.958736, 22.008884],
      value: 51,
    },
    {
      name: "肇庆市",
      center: [112.472529, 23.051546],
      centroid: [112.210411, 23.536359],
      value: 26,
    },
    {
      name: "惠州市",
      center: [114.412599, 23.079404],
      centroid: [114.507032, 23.234461],
      value: 23,
    },
    {
      name: "梅州市",
      center: [116.117582, 24.299112],
      centroid: [116.084478, 24.201791],
      value: 26,
    },
    {
      name: "汕尾市",
      center: [115.364238, 22.774485],
      centroid: [115.53778, 23.004558],
      value: 18,
    },
    {
      name: "河源市",
      center: [114.697802, 23.746266],
      centroid: [114.962729, 24.043541],
      value: 30,
    },
    {
      name: "阳江市",
      center: [111.975107, 21.859222],
      centroid: [111.779569, 22.02617],
      value: 31,
    },
    {
      name: "清远市",
      center: [113.051227, 23.685022],
      centroid: [112.879397, 24.313361],
      value: 32,
    },
    {
      name: "东莞市",
      center: [113.746262, 23.046237],
      centroid: [113.879966, 22.931879],
      value: 22,
    },
    {
      name: "中山市",
      center: [113.382391, 22.521113],
      centroid: [113.398784, 22.517323],
      value: 18,
    },
    {
      name: "潮州市",
      center: [116.632301, 23.661701],
      centroid: [116.790217, 23.783155],
      value: 22,
    },
    {
      name: "揭阳市",
      center: [116.355733, 23.543778],
      centroid: [116.124317, 23.334057],
      value: 31,
    },
    {
      name: "云浮市",
      center: [112.044439, 22.929801],
      centroid: [111.798791, 22.813664],
      value: 27,
    },
  ],
  tt = [
    { value: 76, lng: 113.79485160858327, lat: 23.89685677927606 },
    { value: 78, lng: 110.56553377299345, lat: 21.873845627600836 },
    { value: 4, lng: 113.25869713865045, lat: 23.530644074581737 },
    { value: 25, lng: 111.43078159502011, lat: 23.077210689330553 },
    { value: 24, lng: 111.99015328859545, lat: 22.26995611773176 },
    { value: 42, lng: 114.33728619207766, lat: 23.358581354970067 },
    { value: 48, lng: 113.55976794651882, lat: 23.156415676179734 },
    { value: 6, lng: 116.10898912665368, lat: 23.43540919967913 },
    { value: 8, lng: 110.91282203242856, lat: 22.220415399998622 },
    { value: 25, lng: 113.74076498221632, lat: 24.61474493660142 },
    { value: 35, lng: 115.48562872350303, lat: 23.37917893222329 },
    { value: 80, lng: 114.31293425252609, lat: 25.16676613102704 },
    { value: 57, lng: 111.85514837575666, lat: 23.84879699827145 },
    { value: 94, lng: 113.62831103407407, lat: 25.30343117035818 },
    { value: 0, lng: 115.98118103018592, lat: 22.89789433337735 },
    { value: 73, lng: 112.27864560149406, lat: 23.025179421920388 },
    { value: 75, lng: 115.52045479805447, lat: 23.069137609363246 },
    { value: 41, lng: 113.63681662232946, lat: 23.260062514809917 },
    { value: 13, lng: 114.25675656582564, lat: 24.156527757121342 },
    { value: 85, lng: 113.69430119505773, lat: 24.252059352946507 },
    { value: 31, lng: 113.97370030274207, lat: 25.052647081353747 },
    { value: 95, lng: 113.33056707982442, lat: 22.68800396813793 },
    { value: 89, lng: 114.19839051766547, lat: 23.900928446295183 },
    { value: 70, lng: 114.05932560982977, lat: 25.21053340993692 },
    { value: 99, lng: 113.06734978252537, lat: 22.515622797327037 },
    { value: 91, lng: 114.26851401499255, lat: 23.35808392685592 },
    { value: 97, lng: 113.52766353566915, lat: 22.73421713876664 },
    { value: 98, lng: 113.48108989926988, lat: 25.16863737091132 },
    { value: 12, lng: 113.93270056208189, lat: 23.930425837834473 },
    { value: 20, lng: 110.20020537340876, lat: 20.31276109793368 },
    { value: 13, lng: 113.68771972227216, lat: 23.7470715180437 },
    { value: 83, lng: 115.5570634205416, lat: 23.748492674947094 },
    { value: 33, lng: 111.84701471658155, lat: 23.156247127623594 },
    { value: 18, lng: 115.85053542378398, lat: 24.198382391286138 },
    { value: 53, lng: 111.6185777557616, lat: 22.56091559501497 },
    { value: 8, lng: 113.39392309961524, lat: 23.172640076047923 },
    { value: 55, lng: 113.86467814993352, lat: 24.564376695119265 },
    { value: 8, lng: 111.79748713872382, lat: 23.38923425228451 },
    { value: 47, lng: 112.88516690554265, lat: 22.634256008999692 },
    { value: 44, lng: 112.63840277205753, lat: 24.489787831297726 },
    { value: 44, lng: 110.72120094860792, lat: 22.00869048154503 },
    { value: 95, lng: 112.70470580858085, lat: 22.932188225905417 },
    { value: 18, lng: 116.06197308012818, lat: 23.00603522497115 },
    { value: 42, lng: 114.93680714983093, lat: 23.030166352779524 },
    { value: 56, lng: 113.84097221560522, lat: 24.500897161393368 },
    { value: 53, lng: 111.46378894751676, lat: 23.181172178487042 },
    { value: 15, lng: 113.94516632760111, lat: 24.945072787925945 },
    { value: 23, lng: 112.2852618902198, lat: 22.39569938597472 },
    { value: 37, lng: 114.12789318658704, lat: 23.713967518411767 },
  ],
  at = [
    { value: 180, lng: 113.79080836137965, lat: 23.37817344238561 },
    { value: 160, lng: 114.11575154610837, lat: 24.544118853431584 },
    { value: 150, lng: 113.90665016218497, lat: 22.566294804186708 },
    { value: 177, lng: 114.54888199811992, lat: 22.49603139751199 },
    { value: 130, lng: 113.19269605689502, lat: 22.315122216209396 },
    { value: 165, lng: 116.38945625146404, lat: 23.31380538969534 },
    { value: 165, lng: 112.73950729308208, lat: 22.7738070486437 },
    { value: 132, lng: 110.5053465118048, lat: 21.483755786091354 },
    { value: 158, lng: 110.97116928080241, lat: 21.501265449445654 },
    { value: 187, lng: 110.98025934474002, lat: 22.313939207182745 },
    { value: 123, lng: 112.45712629619587, lat: 23.80098247328565 },
    { value: 143, lng: 111.63231830466472, lat: 23.642211594858992 },
    { value: 111, lng: 114.32206396969852, lat: 23.462313647288138 },
    { value: 143, lng: 115.44284040417362, lat: 23.78996087501679 },
    { value: 155, lng: 115.88398523622054, lat: 24.071643694626665 },
    { value: 177, lng: 115.19822244193529, lat: 22.955835684038735 },
    { value: 111, lng: 115.07713605813625, lat: 24.265955078606343 },
    { value: 165, lng: 112.40005460492905, lat: 24.352214434023505 },
    { value: 176, lng: 112.6704547787618, lat: 24.812677617183308 },
    { value: 123, lng: 113.2098494520477, lat: 24.289170856772266 },
    { value: 165, lng: 113.96172708317867, lat: 22.930643828368673 },
    { value: 123, lng: 113.46114422420524, lat: 22.535589620765787 },
    { value: 165, lng: 116.24634661744335, lat: 23.368093925279403 },
    { value: 123, lng: 111.54752784414158, lat: 22.554544085168132 },
  ],
  nt = [
    {
      name: "监测点#01",
      level: "差",
      value: 84.9,
      lng: 116.46950242,
      lat: 24.20648952,
    },
    {
      name: "监测点#02",
      level: "极好",
      value: 12.5,
      lng: 112.56651822,
      lat: 24.85127417,
    },
    {
      name: "监测点#03",
      level: "良好",
      value: 52.8,
      lng: 111.91602618,
      lat: 23.54062744,
    },
    {
      name: "监测点#04",
      level: "好",
      value: 32,
      lng: 112.71216039,
      lat: 22.18083965,
    },
  ];
function D(C) {
  return C.sort((t, a) => a.value - t.value), C;
}
class it extends Se {
  constructor(t, a) {
    super(t, a),
      (this.enabledEvent = !0),
      (this.pointCenter = [113.280637, 23.125178]),
      (this.flyLineCenter = [113.544372, 23.329249]),
      (this.depth = 0.5),
      (this.clicked = !1),
      (this.scene.fog = new le(596769, 1, 50)),
      (this.scene.background = new S(596769)),
      this.camera.instance.position.set(
        -13.767695123014105,
        12.990152163077308,
        39.28228164159694
      ),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.updateProjectionMatrix(),
      (this.interactionManager = new He(
        this.renderer.instance,
        this.camera.instance,
        this.canvas
      )),
      (this.labelGroup = new L()),
      (this.label3d = new Be(this)),
      this.labelGroup.rotateX(-Math.PI / 2),
      (this.eventElement = []),
      (this.defaultMaterial = null),
      (this.defaultLightMaterial = null),
      this.scene.add(this.labelGroup),
      this.initSetting(),
      (this.assets = new Ze(() => {
        this.initEnvironment(),
          this.createFloor(),
          this.createChinaBlurLine(),
          this.createGrid(),
          this.createRotateBorder(),
          this.createLabel(),
          this.createModel(),
          this.createAnimateVideo(),
          this.createEvent(),
          this.createFlyLine(),
          this.createParticles(),
          this.createScatter(),
          this.createInfoPoint();
        let i = g.timeline();
        i.addLabel("focusMap", 2),
          i.addLabel("focusMapOpacity", 2.5),
          i.addLabel("bar", 3.5),
          i.add(
            g.to(this.camera.instance.position, {
              duration: 2.5,
              x: -0.2515849818960619,
              y: 12.397744557047988,
              z: 14.647659671139275,
              ease: "circ.out",
            })
          ),
          i.add(
            g.to(this.focusMapGroup.position, {
              duration: 1,
              x: 0,
              y: 0,
              z: 0,
            }),
            "focusMap"
          ),
          i.add(
            g.to(this.focusMapGroup.scale, {
              duration: 1,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMap"
          ),
          i.add(
            g.to(this.focusMapTopMaterial, {
              duration: 1,
              opacity: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          i.add(
            g.to(this.focusMapSideMaterial, {
              duration: 1,
              opacity: 1,
              ease: "circ.out",
              onComplete: () => {
                this.focusMapSideMaterial.transparent = !1;
              },
            }),
            "focusMapOpacity"
          ),
          this.otherLabel.map((e, n) => {
            let r = e.element.querySelector(".other-label");
            i.add(
              g.to(r, {
                duration: 1,
                delay: 0.1 * n,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "focusMapOpacity"
            );
          }),
          i.add(
            g.to(this.guangdongLineMaterial, {
              duration: 0.5,
              delay: 0.3,
              opacity: 1,
            }),
            "focusMapOpacity"
          ),
          i.add(
            g.to(this.rotateBorder1.scale, {
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
            g.to(this.rotateBorder2.scale, {
              duration: 1,
              delay: 0.5,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          this.allBar.map((e, n) => {
            i.add(
              g.to(e.scale, {
                duration: 1,
                delay: 0.1 * n,
                x: 1,
                y: 1,
                z: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allBarMaterial.map((e, n) => {
            i.add(
              g.to(e, {
                duration: 1,
                delay: 0.1 * n,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allProvinceLabel.map((e, n) => {
            let r = e.element.querySelector(".provinces-label-wrap"),
              c = e.element.querySelector(".number .value"),
              s = Number(c.innerText),
              l = { score: 0 };
            i.add(
              g.to(r, {
                duration: 1,
                delay: 0.2 * n,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
            let d = g.to(l, {
              duration: 1,
              delay: 0.2 * n,
              score: s,
              onUpdate: o,
            });
            function o() {
              c.innerText = l.score.toFixed(0);
            }
            i.add(d, "bar");
          }),
          this.allGuangquan.map((e, n) => {
            i.add(
              g.to(e.children[0].scale, {
                duration: 1,
                delay: 0.1 * n,
                x: 1,
                y: 1,
                z: 1,
                ease: "circ.out",
              }),
              "bar"
            ),
              i.add(
                g.to(e.children[1].scale, {
                  duration: 1,
                  delay: 0.1 * n,
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
  toggleEventStatus(t) {
    (this.enabledEvent = t),
      (this.canvas.style.pointerEvents = t ? "all" : "none");
  }
  initEnvironment() {
    let t = new ce(16777215, 3);
    this.scene.add(t);
    let a = new de(16777215, 8);
    if (
      (a.position.set(-30, 6, -8),
      (a.castShadow = !0),
      (a.shadow.radius = 20),
      (a.shadow.mapSize.width = 1024),
      (a.shadow.mapSize.height = 1024),
      this.scene.add(a),
      this.debug.active)
    ) {
      let i = new ue(a, 2);
      this.scene.add(i);
      const e = this.debug.instance.addFolder("Environment");
      e.add(a.position, "x", -30, 30, 1),
        e.add(a.position, "y", -30, 30, 1),
        e.add(a.position, "z", -30, 30, 1),
        e.add(a, "intensity", 1, 100, 1),
        e.add(t, "intensity", 1, 10, 1),
        e.onChange((n) => {
          i.update();
        });
    }
    this.createPointLight({
      color: "#1d5e5e",
      intensity: 600,
      distance: 1e4,
      x: -9,
      y: 3,
      z: -3,
    }),
      this.createPointLight({
        color: "#1d5e5e",
        intensity: 230,
        distance: 1e4,
        x: 0,
        y: 2,
        z: 5,
      });
  }
  createPointLight(t) {
    const a = new he(1924702, t.intensity, t.distance, 1);
    if ((a.position.set(t.x, t.y, t.z), this.scene.add(a), this.debug.active)) {
      const i = new pe(a, 1);
      this.scene.add(i);
      const e = this.debug.instance.addFolder("Point" + Math.random());
      e.addColor(t, "color"),
        e.add(t, "intensity", 1, 2e4, 10),
        e.add(t, "distance", 100, 1e5, 10),
        e.add(t, "x", -30, 30, 1),
        e.add(t, "y", -30, 30, 1),
        e.add(t, "z", -30, 30, 1),
        e.onChange(({ object: n }) => {
          (a.color = new S(n.color)),
            (a.distance = n.distance),
            (a.intensity = n.intensity),
            a.position.set(n.x, n.y, n.z),
            i.update();
        });
    }
  }
  initSetting() {
    (this.debug = new Te(!1)),
      (this.renderer.instance.shadowMap.enabled = !1),
      this.renderer.resize();
  }
  createModel() {
    let t = new L();
    this.focusMapGroup = new L();
    let { china: a, chinaTopLine: i, chinaBottomLine: e } = this.createChina(),
      {
        guangdong: n,
        guangdongTop: r,
        guangdonLine: c,
      } = this.createProvince();
    a.setParent(t),
      i.setParent(t),
      n.setParent(this.focusMapGroup),
      r.setParent(this.focusMapGroup),
      c.setParent(this.focusMapGroup),
      this.focusMapGroup.position.set(0, 0, -0.01),
      this.focusMapGroup.scale.set(1, 1, 0),
      t.add(this.focusMapGroup),
      t.rotateX(-Math.PI / 2),
      t.position.set(0, 0.2, 0),
      this.scene.add(t),
      this.createBar();
  }
  createChina() {
    let t = this.assets.instance.getResource("china"),
      a = new W(this, {
        data: t,
        center: this.pointCenter,
        merge: !1,
        material: new ee({ color: 1190450, transparent: !0, opacity: 1 }),
        renderOrder: 2,
      }),
      i = new F(this, {
        center: this.pointCenter,
        visibelProvince: "广东省",
        data: t,
        material: new A({ color: 3969700 }),
        renderOrder: 3,
      });
    i.lineGroup.position.z += 0.01;
    let e = new F(this, {
      center: this.pointCenter,
      data: t,
      material: new A({ color: 3969700, transparent: !0, opacity: 0.4 }),
      renderOrder: 3,
    });
    return (
      (e.lineGroup.position.z -= 0.59),
      { china: a, chinaTopLine: i, chinaBottomLine: e }
    );
  }
  createProvince() {
    let t = this.assets.instance.getResource("guangdong"),
      [a, i] = this.createProvinceMaterial();
    (this.focusMapTopMaterial = a), (this.focusMapSideMaterial = i);
    let e = new Ke(this, {
        center: this.pointCenter,
        position: new y(0, 0, 0.11),
        data: t,
        depth: 0.5,
        topFaceMaterial: a,
        sideMaterial: i,
        renderOrder: 9,
      }),
      { boxSize: n } = Ge(e.mapGroup),
      r = new z({ color: 16777215, transparent: !0, opacity: 0.5 });
    new U(r),
      (this.defaultMaterial = r),
      (this.defaultLightMaterial = this.defaultMaterial.clone()),
      this.defaultLightMaterial.emissive.setHex(725293),
      (this.defaultLightMaterial.emissiveIntensity = 3.5);
    let c = new W(this, {
      center: this.pointCenter,
      position: new y(0, 0, n.z + 0.02),
      data: t,
      material: r,
      renderOrder: 2,
    });
    c.mapGroup.children.map((l) => {
      l.children.map((d) => {
        d.type === "Mesh" && this.eventElement.push(d);
      });
    }),
      (this.guangdongLineMaterial = new A({
        color: 16777215,
        opacity: 0,
        transparent: !0,
        fog: !1,
      }));
    let s = new F(this, {
      center: this.pointCenter,
      data: t,
      material: this.guangdongLineMaterial,
      renderOrder: 3,
    });
    return (
      (s.lineGroup.position.z += n.z + 0.03),
      { guangdong: e, guangdongTop: c, guangdonLine: s }
    );
  }
  createProvinceMaterial() {
    let t = new z({
      color: 16777215,
      transparent: !0,
      opacity: 0,
      fog: !1,
      side: T,
    });
    t.onBeforeCompile = (e) => {
      (e.uniforms = {
        ...e.uniforms,
        uColor1: { value: new S(2781042) },
        uColor2: { value: new S(860197) },
      }),
        (e.vertexShader = e.vertexShader.replace(
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
        (e.fragmentShader = e.fragmentShader.replace(
          "void main() {",
          `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
        )),
        (e.fragmentShader = e.fragmentShader.replace(
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
      float topAlpha = 0.5;
      if(vPosition.z>0.3){
        diffuseColor.a *= topAlpha;
      }

      gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
      `
        ));
    };
    let a = this.assets.instance.getResource("side");
    (a.wrapS = x), (a.wrapT = x), a.repeat.set(1, 1.5), (a.offset.y += 0.065);
    let i = new z({ color: 16777215, map: a, fog: !1, opacity: 0, side: T });
    return (
      this.time.on("tick", () => {
        a.offset.y += 0.005;
      }),
      (i.onBeforeCompile = (e) => {
        (e.uniforms = {
          ...e.uniforms,
          uColor1: { value: new S(2781042) },
          uColor2: { value: new S(2781042) },
        }),
          (e.vertexShader = e.vertexShader.replace(
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
          (e.fragmentShader = e.fragmentShader.replace(
            "void main() {",
            `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
          )),
          (e.fragmentShader = e.fragmentShader.replace(
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
  createEvent() {
    let t = [];
    const a = (e) => {
        e.traverse((n) => {
          n.isMesh && (n.material = this.defaultMaterial);
        });
      },
      i = (e) => {
        e.traverse((n) => {
          n.isMesh && (n.material = this.defaultLightMaterial);
        });
      };
    this.eventElement.map((e) => {
      this.interactionManager.add(e),
        e.addEventListener("mousedown", (n) => {
          if (this.clicked) return !1;
          (this.clicked = !0), console.log(n.target.userData.name);
        }),
        e.addEventListener("mouseup", (n) => {
          this.clicked = !1;
        }),
        e.addEventListener("mouseover", (n) => {
          t.includes(n.target.parent) || t.push(n.target.parent),
            (document.body.style.cursor = "pointer"),
            i(n.target.parent);
        }),
        e.addEventListener("mouseout", (n) => {
          (t = t.filter(
            (r) => r.userData.name !== n.target.parent.userData.name
          )),
            t.length > 0 && t[t.length - 1],
            a(n.target.parent),
            (document.body.style.cursor = "default");
        });
    });
  }
  createBar() {
    let t = this,
      a = D(Y).filter((s, l) => l < 7);
    const i = new L(),
      e = 0.7,
      n = 4 * e,
      r = a[0].value;
    (this.allBar = []),
      (this.allBarMaterial = []),
      (this.allGuangquan = []),
      (this.allProvinceLabel = []),
      a.map((s, l) => {
        let d = n * (s.value / r),
          o = new w({
            color: 16777215,
            transparent: !0,
            opacity: 0,
            depthTest: !1,
            fog: !1,
          });
        new U(o, {
          uColor1: l > 3 ? 16506760 : 5291006,
          uColor2: l > 3 ? 16776948 : 7863285,
          size: d,
          dir: "y",
        });
        const h = new fe(0.1 * e, 0.1 * e, d);
        h.translate(0, 0, d / 2);
        const u = new b(h, o);
        u.renderOrder = 5;
        let p = u,
          [f, m] = this.geoProjection(s.centroid);
        p.position.set(f, -m, 0.95), p.scale.set(1, 1, 0);
        let v = this.createQuan(new y(f, 0.94, m), l),
          M = this.createHUIGUANG(d, l > 3 ? 16776948 : 7863285);
        p.add(...M), i.add(p), (i.rotation.x = -Math.PI / 2);
        let E = c(s, l, new y(f, -m, 1.6 + d));
        this.allBar.push(p),
          this.allBarMaterial.push(o),
          this.allGuangquan.push(v),
          this.allProvinceLabel.push(E);
      }),
      this.scene.add(i);
    function c(s, l, d) {
      let o = t.label3d.create("", "provinces-label", !0);
      return (
        o.init(
          `<div class="provinces-label ${l > 4 ? "yellow" : ""}">
      <div class="provinces-label-wrap">
        <div class="number"><span class="value">${
          s.value
        }</span><span class="unit">万人</span></div>
        <div class="name">
          <span class="zh">${s.name}</span>
          <span class="en">${s.enName.toUpperCase()}</span>
        </div>
        <div class="no">${l + 1}</div>
      </div>
    </div>`,
          d
        ),
        t.label3d.setLabelStyle(o, 0.01, "x"),
        o.setParent(t.labelGroup),
        o
      );
    }
  }
  createHUIGUANG(t, a) {
    let i = new I(0.35, t);
    i.translate(0, t / 2, 0);
    const e = this.assets.instance.getResource("huiguang");
    (e.colorSpace = B), (e.wrapS = x), (e.wrapT = x);
    let n = new w({
        color: a,
        map: e,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        side: T,
        blending: G,
      }),
      r = new b(i, n);
    (r.renderOrder = 10), r.rotateX(Math.PI / 2);
    let c = r.clone(),
      s = r.clone();
    return (
      c.rotateY((Math.PI / 180) * 60),
      s.rotateY((Math.PI / 180) * 120),
      [r, c, s]
    );
  }
  createQuan(t, a) {
    const i = this.assets.instance.getResource("guangquan1"),
      e = this.assets.instance.getResource("guangquan2");
    let n = new I(0.5, 0.5),
      r = new w({
        color: 16777215,
        map: i,
        alphaMap: i,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: G,
      }),
      c = new w({
        color: 16777215,
        map: e,
        alphaMap: e,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: G,
      }),
      s = new b(n, r),
      l = new b(n, c);
    return (
      (s.renderOrder = 6),
      (l.renderOrder = 6),
      s.rotateX(-Math.PI / 2),
      l.rotateX(-Math.PI / 2),
      s.position.copy(t),
      l.position.copy(t),
      (l.position.y -= 0.001),
      s.scale.set(0, 0, 0),
      l.scale.set(0, 0, 0),
      (this.quanGroup = new L()),
      this.quanGroup.add(s, l),
      this.scene.add(this.quanGroup),
      this.time.on("tick", () => {
        s.rotation.z += 0.05;
      }),
      this.quanGroup
    );
  }
  createGrid() {
    new Ee(this, {
      gridSize: 50,
      gridDivision: 20,
      gridColor: 1923944,
      shapeSize: 0.5,
      shapeColor: 2655878,
      pointSize: 0.1,
      pointColor: 1262670,
      diffuse: !0,
      diffuseSpeed: 10,
      diffuseColor: 3844268,
    });
  }
  createFloor() {
    let t = new I(20, 20);
    const a = this.assets.instance.getResource("ocean");
    (a.colorSpace = B), (a.wrapS = x), (a.wrapT = x), a.repeat.set(1, 1);
    let i = new w({ map: a, opacity: 1 }),
      e = new b(t, i);
    e.rotateX(-Math.PI / 2), e.position.set(0, -0.7, 0), this.scene.add(e);
  }
  createChinaBlurLine() {
    let t = new I(147, 147);
    const a = this.assets.instance.getResource("chinaBlurLine");
    (a.colorSpace = B),
      (a.wrapS = x),
      (a.wrapT = x),
      (a.generateMipmaps = !1),
      (a.minFilter = me),
      a.repeat.set(1, 1);
    let i = new w({
        color: 3969700,
        alphaMap: a,
        transparent: !0,
        opacity: 0.5,
      }),
      e = new b(t, i);
    if (
      (e.rotateX(-Math.PI / 2),
      e.position.set(-19.3, -0.5, -19.7),
      this.scene.add(e),
      this.debug.active)
    ) {
      const n = this.debug.instance.addFolder("blurLine");
      n.add(e.position, "x", -100, 100, 0.1),
        n.add(e.position, "y", -100, 100, 0.1),
        n.add(e.position, "z", -100, 100, 0.1);
    }
  }
  createAnimateVideo() {
    this.createAnimateVideoItem(".map-gd-video1", new y(11, 0.4, 1)),
      this.createAnimateVideoItem(".map-gd-video2", new y(-11, 0.4, 2));
  }
  createAnimateVideoItem(t, a) {
    let i = document.querySelector(t);
    window.addEventListener("pointerdown", () => {
      i.play();
    });
    let e = new ge(i);
    e.colorSpace = B;
    let n = 1.2,
      r = new I(2.5 * n, 1 * n),
      c = new w({
        color: 10807286,
        alphaMap: e,
        transparent: !0,
        opacity: 1,
        blending: G,
      }),
      s = new b(r, c);
    s.rotateX(-Math.PI / 2),
      s.position.copy(a),
      (s.renderOrder = 10),
      this.scene.add(s);
  }
  createLabel() {
    let t = this,
      a = this.labelGroup,
      i = this.label3d,
      e = [];
    et.map((o) => {
      if (o.hide == !0) return !1;
      let h = s(o, i, a);
      e.push(h);
    });
    let n = l(
        {
          name: "广东省",
          enName: "GUANGDONG PROVINCE",
          center: [113.280637, 20.625178],
        },
        i,
        a
      ),
      r = d(
        {
          icon: _,
          center: [118.280637, 21.625178],
          width: "40px",
          height: "40px",
          reflect: !0,
        },
        i,
        a
      ),
      c = d(
        {
          icon: _,
          center: [106.280637, 25.625178],
          width: "20px",
          height: "20px",
          reflect: !1,
        },
        i,
        a
      );
    e.push(n), e.push(r), e.push(c), (this.otherLabel = e);
    function s(o, h, u) {
      let p = h.create("", `china-label ${o.blur ? " blur" : ""}`, !1);
      const [f, m] = t.geoProjection(o.center);
      return (
        p.init(
          `<div class="other-label"><img class="label-icon" src="${_}">${o.name}</div>`,
          new y(f, -m, 0.4)
        ),
        h.setLabelStyle(p, 0.02, "x"),
        p.setParent(u),
        p
      );
    }
    function l(o, h, u) {
      let p = h.create("", "guangdong-label", !1);
      const [f, m] = t.geoProjection(o.center);
      return (
        p.init(
          `<div class="other-label"><span>${o.name}</span><span>${o.enName}</span></div>`,
          new y(f, -m, 0.4)
        ),
        h.setLabelStyle(p, 0.02, "x"),
        p.setParent(u),
        p
      );
    }
    function d(o, h, u) {
      let p = h.create(
        "",
        `decoration-label  ${o.reflect ? " reflect" : ""}`,
        !1
      );
      const [f, m] = t.geoProjection(o.center);
      return (
        p.init(
          `<div class="other-label"><img class="label-icon" style="width:${o.width};height:${o.height}" src="${o.icon}">`,
          new y(f, -m, 0.4)
        ),
        h.setLabelStyle(p, 0.02, "x"),
        p.setParent(u),
        p
      );
    }
  }
  createRotateBorder() {
    let t = 12,
      a = this.assets.instance.getResource("rotationBorder1"),
      i = this.assets.instance.getResource("rotationBorder2"),
      e = new V(this, {
        width: t * 1.178,
        needRotate: !0,
        rotateSpeed: 0.001,
        material: new w({
          map: a,
          color: 2795692,
          transparent: !0,
          opacity: 0.2,
          side: T,
          depthWrite: !1,
          blending: G,
        }),
        position: new y(0, 0.28, 0),
      });
    (e.instance.renderOrder = 6),
      e.instance.scale.set(0, 0, 0),
      e.setParent(this.scene);
    let n = new V(this, {
      width: t * 1.116,
      needRotate: !0,
      rotateSpeed: -0.004,
      material: new w({
        map: i,
        color: 2795692,
        transparent: !0,
        opacity: 0.4,
        side: T,
        depthWrite: !1,
        blending: G,
      }),
      position: new y(0, 0.3, 0),
    });
    (n.instance.renderOrder = 6),
      n.instance.scale.set(0, 0, 0),
      n.setParent(this.scene),
      (this.rotateBorder1 = e.instance),
      (this.rotateBorder2 = n.instance);
  }
  createFlyLine() {
    (this.flyLineGroup = new L()),
      (this.flyLineGroup.visible = !1),
      this.scene.add(this.flyLineGroup);
    const t = this.assets.instance.getResource("flyLine");
    (t.wrapS = t.wrapT = x), t.repeat.set(1, 1);
    const a = 0.03,
      i = 32,
      e = 8,
      n = !1;
    let [r, c] = this.geoProjection(this.flyLineCenter),
      s = new y(r, -c, 0);
    const l = new w({
      map: t,
      alphaMap: t,
      color: 2781042,
      transparent: !0,
      fog: !1,
      opacity: 1,
      depthTest: !1,
      blending: G,
    });
    this.time.on("tick", () => {
      t.offset.x -= 0.006;
    }),
      Y.filter((d, o) => o < 7).map((d) => {
        let [o, h] = this.geoProjection(d.centroid),
          u = new y(o, -h, 0);
        const p = new y();
        p.addVectors(s, u).multiplyScalar(0.5), p.setZ(3);
        const f = new ve(s, p, u),
          m = new ye(f, i, a, e, n),
          v = new b(m, l);
        (v.rotation.x = -Math.PI / 2),
          v.position.set(0, 0.94, 0),
          (v.renderOrder = 21),
          this.flyLineGroup.add(v);
      }),
      this.createFlyLineFocus();
  }
  createFlyLineFocus() {
    (this.flyLineFocusGroup = new L()),
      (this.flyLineFocusGroup.visible = !1),
      (this.flyLineFocusGroup.rotation.x = -Math.PI / 2);
    let [t, a] = this.geoProjection([113.544372, 23.329249]);
    this.flyLineFocusGroup.position.set(t, 0.942, a),
      this.scene.add(this.flyLineFocusGroup);
    const i = this.assets.instance.getResource("flyLineFocus"),
      e = new I(1, 1),
      n = new w({
        color: 16777215,
        map: i,
        alphaMap: i,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        blending: G,
      }),
      r = new b(e, n);
    r.scale.set(0, 0, 0);
    const c = r.clone();
    (c.material = n.clone()),
      this.flyLineFocusGroup.add(r, c),
      g.to(r.material, { opacity: 0, repeat: -1, yoyo: !1, duration: 1 }),
      g.to(r.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      }),
      g.to(c.material, {
        delay: 0.5,
        opacity: 0,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      }),
      g.to(c.scale, {
        delay: 0.5,
        x: 1.5,
        y: 1.5,
        z: 1.5,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      });
  }
  createParticles() {
    (this.particles = new H(this, {
      num: 10,
      range: 30,
      dir: "up",
      speed: 0.05,
      material: new N({
        map: H.createTexture(),
        size: 1,
        color: 61166,
        transparent: !0,
        opacity: 1,
        depthTest: !1,
        depthWrite: !1,
        vertexColors: !0,
        blending: G,
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
    (this.scatterGroup = new L()),
      (this.scatterGroup.visible = !1),
      (this.scatterGroup.rotation.x = -Math.PI / 2),
      this.scene.add(this.scatterGroup);
    const t = this.assets.instance.getResource("arrow"),
      a = new q({
        map: t,
        color: 16776948,
        fog: !1,
        transparent: !0,
        depthTest: !1,
      });
    let i = D(at),
      e = i[0].value;
    i.map((n) => {
      const r = new $(a);
      r.renderOrder = 23;
      let c = 0.1 + (n.value / e) * 0.2;
      r.scale.set(c, c, c);
      let [s, l] = this.geoProjection([n.lng, n.lat]);
      r.position.set(s, -l, this.depth + 0.45),
        (r.userData.position = [s, -l, this.depth + 0.45]),
        this.scatterGroup.add(r);
    });
  }
  createHeatmap() {
    const i = [],
      e = tt.map((M) => {
        let [E, k] = this.geoProjection([M.lng, M.lat]);
        return (
          i.push(E, -k, 0.952),
          {
            value: M.value,
            x: Math.floor(E * 100) + 1e3,
            y: Math.floor(-k * 100) + 1e3,
          }
        );
      });
    let n = Ce(e, (M) => M.value).value,
      r = Ie(e, (M) => M.value).value;
    const c = new te();
    c.setAttribute("position", new we(i, 3));
    const s = new N({ size: 0.2, color: 16777215 });
    let l = new be(c, s);
    l.rotateX(-Math.PI / 2), this.scene.add(l);
    const d = 3600,
      o = 1800;
    let h = document.createElement("div");
    var u = Q.create({
      container: h,
      radius: 100,
      width: d,
      height: o,
      alpha: !0,
    });
    u.setData({ max: n, min: r, data: e });
    let p = new I(d, o),
      f = new xe(u._renderer.canvas);
    var m = new w({
      map: f,
      transparent: !0,
      depthTest: !1,
      side: T,
      fog: !1,
      wireframe: !1,
    });
    m.map.needsUpdate = !0;
    let v = new b(p, m);
    v.rotateX(Math.PI / 2),
      v.position.set(d / 100 - 28, 0.952, -o / 100 + 19),
      v.scale.set(1 / 100, 1 / 100, 1),
      this.scene.add(v);
  }
  genHeatMap() {
    let i = document.createElement("div");
    var e = Q.create({
      container: i,
      radius: 100,
      width: 3600,
      height: 1800,
      alpha: !0,
    });
    return (
      e.setData({ max: maxvalue, min: minvalue, data: segments }),
      { heatmap: e, canvas: e._renderer.canvas, dataUrl: e.getDataURL() }
    );
  }
  createInfoPoint() {
    let t = this;
    (this.InfoPointGroup = new L()),
      (this.InfoPointGroup.visible = !1),
      (this.InfoPointGroup.rotation.x = -Math.PI / 2),
      this.scene.add(this.InfoPointGroup),
      (this.infoPointIndex = 0),
      (this.infoPointLabelTime = null),
      (this.infoLabelElement = []);
    let a = this.label3d;
    const i = this.assets.instance.getResource("point");
    let e = [16776948, 7863285],
      n = D(nt),
      r = n[0].value;
    n.map((s, l) => {
      const d = new q({
          map: i,
          color: e[l % e.length],
          fog: !1,
          transparent: !0,
          depthTest: !1,
        }),
        o = new $(d);
      o.renderOrder = 23;
      let h = 0.7 + (s.value / r) * 0.4;
      o.scale.set(h, h, h);
      let [u, p] = this.geoProjection([s.lng, s.lat]),
        f = [u, -p, this.depth + 0.7];
      o.position.set(...f),
        (o.userData.position = [...f]),
        (o.userData = {
          position: [u, -p, this.depth + 0.7],
          name: s.name,
          value: s.value,
          level: s.level,
          index: l,
        }),
        this.InfoPointGroup.add(o);
      let m = c(s, a, this.InfoPointGroup);
      this.infoLabelElement.push(m),
        this.interactionManager.add(o),
        o.addEventListener("mousedown", (v) => {
          if (this.clicked) return !1;
          (this.clicked = !0),
            (this.infoPointIndex = v.target.userData.index),
            this.infoLabelElement.map((M) => {
              M.hide();
            }),
            m.show(),
            this.createInfoPointLabelLoop();
        }),
        o.addEventListener("mouseup", (v) => {
          this.clicked = !1;
        }),
        o.addEventListener("mouseover", (v) => {
          document.body.style.cursor = "pointer";
        }),
        o.addEventListener("mouseout", (v) => {
          document.body.style.cursor = "default";
        });
    });
    function c(s, l, d) {
      let o = l.create("", "info-point", !0);
      const [h, u] = t.geoProjection([s.lng, s.lat]);
      return (
        o.init(
          ` <div class="info-point-wrap">
          <div class="info-point-wrap-inner">
            <div class="info-point-line">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <div class="info-point-content">
              <div class="content-item"><span class="label">名称</span><span class="value">${s.name}</span></div>
              <div class="content-item"><span class="label">PM2.5</span><span class="value">${s.value}ug/m²</span></div>
              <div class="content-item"><span class="label">等级</span><span class="value">${s.level}</span></div>
            </div>
          </div>
        </div>
      `,
          new y(h, -u, 2.4)
        ),
        l.setLabelStyle(o, 0.015, "x"),
        o.setParent(d),
        o.hide(),
        o
      );
    }
  }
  createInfoPointLabelLoop() {
    clearInterval(this.infoPointLabelTime),
      (this.infoPointLabelTime = setInterval(() => {
        this.infoPointIndex++,
          this.infoPointIndex >= this.infoLabelElement.length &&
            (this.infoPointIndex = 0),
          this.infoLabelElement.map((t, a) => {
            this.infoPointIndex === a ? t.show() : t.hide();
          });
      }, 3e3));
  }
  createWatermark() {
    let t = this.assets.instance.getResource("watermark");
    (t.wrapS = x),
      (t.wrapT = x),
      t.repeat.set(50, 50),
      (t.rotation = Math.PI / 5);
    let a = new I(100, 100, 1),
      i = new w({ map: t, transparent: !0, opacity: 0.15 }),
      e = new b(a, i);
    (e.position.x -= 10),
      (e.position.y -= 10),
      (e.position.z -= 10),
      (e.renderOrder = 999),
      this.camera.instance.add(e);
  }
  update() {
    super.update(),
      this.stats && this.stats.update(),
      this.enabledEvent &&
        this.interactionManager &&
        this.interactionManager.update();
  }
  destroy() {
    super.destroy(),
      this.debug.destroy(),
      this.label3d && this.label3d.destroy(),
      this.stats && this.stats.dom && document.body.removeChild(this.stats.dom);
  }
}
const rt = { class: "map-gd" },
  ot = P("canvas", { id: "canvas" }, null, -1),
  st = {
    ref: "video1",
    class: "map-gd-video map-gd-video1",
    width: "250",
    height: "100",
    loop: "",
    crossorigin: "anonymous",
    playsinline: "",
    style: { display: "none" },
  },
  lt = P("source", { src: ae }, null, -1),
  ct = [lt],
  dt = {
    ref: "video2",
    class: "map-gd-video map-gd-video2",
    width: "250",
    height: "100",
    loop: "",
    crossorigin: "anonymous",
    playsinline: "",
    style: { display: "none" },
  },
  ut = P("source", { src: ne }, null, -1),
  ht = [ut],
  pt = { class: "map-btn-group" },
  jt = {
    __name: "map-animate-gd2",
    setup(C) {
      let t = null;
      const a = Xe({
          flyLine: !1,
          scatter: !1,
          particle: !1,
          path: !1,
          info: !1,
        }),
        i = (e) => {
          (a[e] = !a[e]),
            e === "particle" &&
              ((t.particles.enable = a[e]),
              (t.particles.instance.visible = a[e])),
            e === "flyLine" &&
              ((t.flyLineGroup.visible = a[e]),
              (t.flyLineFocusGroup.visible = a[e])),
            e === "scatter" && (t.scatterGroup.visible = a[e]),
            e === "info" &&
              ((t.InfoPointGroup.visible = a[e]),
              a[e]
                ? t.createInfoPointLabelLoop()
                : (clearInterval(t.infoPointLabelTime),
                  t.infoLabelElement.map((n) => n.hide())));
        };
      return (
        Qe(() => {
          t = new it(document.getElementById("canvas"), {
            geoProjectionCenter: [113.280637, 23.125178],
          });
        }),
        We(() => {
          t && t.destroy();
        }),
        (e, n) => (
          Ye(),
          Je("div", rt, [
            ot,
            P("video", st, ct, 512),
            P("video", dt, ht, 512),
            P("div", pt, [
              P(
                "div",
                {
                  class: O(["btn", { active: a.flyLine }]),
                  onClick: n[0] || (n[0] = (r) => i("flyLine")),
                },
                " 飞线 ",
                2
              ),
              P(
                "div",
                {
                  class: O(["btn", { active: a.scatter }]),
                  onClick: n[1] || (n[1] = (r) => i("scatter")),
                },
                " 散点图 ",
                2
              ),
              P(
                "div",
                {
                  class: O(["btn", { active: a.info }]),
                  onClick: n[2] || (n[2] = (r) => i("info")),
                },
                " 重点点位 ",
                2
              ),
              P(
                "div",
                {
                  class: O(["btn", { active: a.particle }]),
                  onClick: n[3] || (n[3] = (r) => i("particle")),
                },
                " 粒子特效 ",
                2
              ),
            ]),
          ])
        )
      );
    },
  };
export { jt as default };
