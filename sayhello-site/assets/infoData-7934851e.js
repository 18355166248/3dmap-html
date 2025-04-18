import {
  F as E,
  G as x,
  V as G,
  a as T,
  M as v,
  O,
  S as j,
  E as A,
  b as y,
  c as D,
  D as S,
  C as f,
  R as P,
  d as N,
  e as B,
  L as F,
  B as z,
  f as k,
} from "./OrbitControls-9c9ee6bc.js";
import { R, g as w, V as _, m as q } from "./index-1453e2ee.js";
import { c as V, s as I } from "./chinaBlurLine-b7b06be6.js";
import { o as U } from "./ocean-blue-bg-49e3ac50.js";
import { h as Q, r as J, g as M, a as W } from "./rotationBorder1-447bf02a.js";
import { r as $ } from "./rotationBorder2-a143eae0.js";
import { w as H } from "./szxs_logo-02219344.js";
import { f as K } from "./flyLine2-e7135ba7.js";
import { p as X } from "./pathLine2-dee41061.js";
import { a as Y } from "./arrow-8777f461.js";
import { p as Z } from "./point1-7bb35866.js";
import { t as L } from "./utils-9af1928d.js";
import { L as ee, a as te } from "./Line2-7598ed88.js";
class fe {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new R()),
      this.instance.addLoader(E, "FileLoader"),
      this.instance.on("onProgress", (r, t, n) => {
        ((t / n) * 100).toFixed(2) + "";
      }),
      this.instance.on("onLoad", () => {
        this.onLoadCallback && this.onLoadCallback();
      });
    let e = "/sayhello-site/",
      a = [
        { type: "Texture", name: "huiguang", path: Q },
        { type: "Texture", name: "watermark", path: H },
        { type: "Texture", name: "rotationBorder1", path: J },
        { type: "Texture", name: "rotationBorder2", path: $ },
        { type: "Texture", name: "guangquan1", path: M },
        { type: "Texture", name: "guangquan2", path: W },
        { type: "Texture", name: "chinaBlurLine", path: V },
        { type: "Texture", name: "ocean", path: U },
        { type: "Texture", name: "side", path: I },
        { type: "Texture", name: "flyLine", path: K },
        { type: "Texture", name: "flyLineFocus", path: M },
        { type: "Texture", name: "pathLine", path: X },
        { type: "Texture", name: "arrow", path: Y },
        { type: "Texture", name: "point", path: Z },
        { type: "File", name: "zhejiang", path: e + "assets/json/浙江省.json" },
        {
          type: "File",
          name: "china",
          path: e + "assets/json/中华人民共和国.json",
        },
      ];
    this.instance.loadAll(a);
  }
}
class ge {
  constructor({ assets: e, time: a }, r = {}) {
    (this.mapGroup = new x()),
      (this.assets = e),
      (this.time = a),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new G(0, 0, 0),
          center: new T(0, 0),
          data: "", 
          renderOrder: 1,
          topFaceMaterial: new v({
            color: 1582651,
            transparent: !0,
            opacity: 1,
          }),
          sideMaterial: new v({ color: 464171, transparent: !0, opacity: 1 }),
          depth: 0.1,
        },
        r
      )),
      this.mapGroup.position.copy(this.config.position);
    let t = L(this.config.data);
    this.create(t), console.log(this.mapGroup);
  }
  geoProjection(e) {
    return w().center(this.config.center).scale(120).translate([0, 0])(e);
  }
  create(e) {
    e.features.forEach((a) => {
      const r = new O();
      let { name: t, center: n = [], centroid: i = [] } = a.properties;
      this.coordinates.push({ name: t, center: n, centroid: i });
      const u = {
        depth: this.config.depth,
        bevelEnabled: !0,
        bevelSegments: 1,
        bevelThickness: 0.1,
      };
      let m = [this.config.topFaceMaterial, this.config.sideMaterial];
      a.geometry.coordinates.forEach((d) => {
        d.forEach((s, h) => {
          const c = new j();
          for (let l = 0; l < s.length; l++) {
            if (!s[l][0] || !s[l][1]) return !1;
            const [b, C] = this.geoProjection(s[l]);
            l === 0 && c.moveTo(b, -C), c.lineTo(b, -C);
          }
          const o = new A(c, u),
            p = new y(o, m);
          r.add(p);
        });
      }),
        this.mapGroup.add(r);
    });
  }
  createMaterial() {
    let e = new D({
      color: 16777215,
      transparent: !0,
      opacity: 1,
      fog: !1,
      side: S,
    });
    e.onBeforeCompile = (t) => {
      (t.uniforms = {
        ...t.uniforms,
        uColor1: { value: new f(2781042) },
        uColor2: { value: new f(860197) },
      }),
        (t.vertexShader = t.vertexShader.replace(
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
        (t.fragmentShader = t.fragmentShader.replace(
          "void main() {",
          `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
        )),
        (t.fragmentShader = t.fragmentShader.replace(
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
    (a.wrapS = P), (a.wrapT = P), a.repeat.set(1, 1.5), (a.offset.y += 0.065);
    let r = new N({ color: 16777215, map: a, fog: !1, opacity: 1, side: S });
    return (
      this.time.on("tick", () => {
        a.offset.y += 1e-4;
      }),
      (r.onBeforeCompile = (t) => {
        (t.uniforms = {
          ...t.uniforms,
          uColor1: { value: new f(2781042) },
          uColor2: { value: new f(2781042) },
        }),
          (t.vertexShader = t.vertexShader.replace(
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
          (t.fragmentShader = t.fragmentShader.replace(
            "void main() {",
            `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
          )),
          (t.fragmentShader = t.fragmentShader.replace(
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
      [e, r]
    );
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(e) {
    e.add(this.mapGroup);
  }
}
class ve {
  constructor({}, e = {}) {
    (this.mapGroup = new x()),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new _(0, 0, 0),
          center: new T(0, 0),
          data: "",
          renderOrder: 1,
          merge: !1,
          material: new v({ color: 1582651, transparent: !0, opacity: 1 }),
        },
        e
      )),
      this.mapGroup.position.copy(this.config.position);
    let a = L(this.config.data);
    this.create(a);
  }
  geoProjection(e) {
    return w().center(this.config.center).scale(120).translate([0, 0])(e);
  }
  create(e) {
    let { merge: a } = this.config,
      r = [];
    if (
      (e.features.forEach((t) => {
        const n = new O();
        let { name: i, center: u = [], centroid: m = [] } = t.properties;
        this.coordinates.push({ name: i, center: u, centroid: m }),
          (n.userData.name = i),
          (n.userData.center = u),
          (n.userData.centroid = m),
          t.geometry.coordinates.forEach((d) => {
            d.forEach((s) => {
              const h = new j();
              for (let o = 0; o < s.length; o++) {
                if (!s[o][0] || !s[o][1]) return !1;
                const [p, l] = this.geoProjection(s[o]);
                o === 0 && h.moveTo(p, -l), h.lineTo(p, -l);
              }
              const c = new B(h);
              if (a) r.push(c);
              else {
                const o = new y(c, this.config.material);
                (o.renderOrder = this.config.renderOrder),
                  (o.userData.name = i),
                  (o.userData.center = u),
                  (o.userData.centroid = m),
                  n.add(o);
              }
            });
          }),
          a || this.mapGroup.add(n);
      }),
      a)
    ) {
      let t = q(r);
      const n = new y(t, this.config.material);
      (n.renderOrder = this.config.renderOrder), this.mapGroup.add(n);
    }
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(e) {
    e.add(this.mapGroup);
  }
}
class ye {
  constructor({}, e = {}) {
    this.config = Object.assign(
      {
        visibelProvince: "",
        center: [0, 0],
        data: "",
        material: new F({ color: 16777215 }),
        type: "LineLoop",
        renderOrder: 1,
      },
      e
    );
    let a = L(this.config.data),
      r = this.create(a);
    this.lineGroup = r;
  }
  geoProjection(e) {
    return w().center(this.config.center).scale(120).translate([0, 0])(e);
  }
  create(e) {
    const { type, visibelProvince } = this.config;
    let t = e.features;
    const n = new x();
    for (let i = 0; i < t.length; i++) {
      const u = t[i];
      u.properties.name !== visibelProvince &&
        u.geometry.coordinates.forEach((m) => {
          const d = [];
          let s = null;
          type === "Line2"
            ? (m[0].forEach((h) => {
                const [c, o] = this.geoProjection(h);
                d.push(c, -o, 0);
              }),
              (s = this.createLine2(d)))
            : m[0].forEach((h) => {
                const [c, o] = this.geoProjection(h);
                d.push(new G(c, -o, 0)), (s = this.createLine(d));
              }),
            n.add(s);
        });
    }
    return n;
  }
  createLine2(e) {
    const { material: a, renderOrder: r } = this.config,
      t = new ee();
    t.setPositions(e);
    let n = new te(t, a);
    return (
      (n.name = "mapLine2"), (n.renderOrder = r), n.computeLineDistances(), n
    );
  }
  createLine(e) {
    const { material, renderOrder, type } = this.config,
      n = new z();
    n.setFromPoints(e);
    let i = new k(n, material);
    i.renderOrder = renderOrder;
    i.name = "mapLine";
    return i;
  }
  setParent(e) {
    e.add(this.lineGroup);
  }
}
const xe = [
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
      hide: !1,
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
  we = [
    {
      name: "杭州市",
      enName: "hangzhou",
      value: 98,
      center: [120.153576, 30.287459],
      centroid: [119.476498, 29.898918],
    },
    {
      name: "宁波市",
      enName: "ningbo",
      value: 57,
      center: [121.549792, 29.868388],
      centroid: [121.479174, 29.733017],
    },
    {
      name: "温州市",
      enName: "wenzhou",
      value: 80,
      center: [120.672111, 28.000575],
      centroid: [120.463912, 27.894726],
    },
    {
      name: "嘉兴市",
      enName: "jiaxing",
      value: 42,
      center: [120.750865, 30.762653],
      centroid: [120.783487, 30.620063],
    },
    {
      name: "湖州市",
      enName: "huzhou",
      value: 37,
      center: [120.102398, 30.867198],
      centroid: [119.873663, 30.743058],
    },
    {
      name: "绍兴市",
      enName: "shaoxing",
      value: 24,
      center: [120.582112, 29.997117],
      centroid: [120.640933, 29.732893],
    },
    {
      name: "金华市",
      enName: "jinghua",
      value: 43,
      center: [119.649506, 29.089524],
      centroid: [119.957007, 29.115117],
    },
    {
      name: "衢州市",
      enName: "hengzhou",
      value: 46,
      center: [118.87263, 28.941708],
      centroid: [118.679569, 28.932446],
    },
    {
      name: "舟山市",
      enName: "zhousan",
      value: 37,
      center: [122.106863, 30.016028],
      centroid: [122.146805, 30.056563],
    },
    {
      name: "台州市",
      enName: "taizhou",
      value: 36,
      center: [121.428599, 28.661378],
      centroid: [121.136679, 28.757098],
    },
    {
      name: "丽水市",
      enName: "lishui",
      value: 48,
      center: [119.921786, 28.451993],
      centroid: [119.517145, 28.197644],
    },
  ],
  Le = [
    { value: 166, lng: 119.00838863314104, lat: 29.70446787438727 },
    { value: 196, lng: 121.95888480416225, lat: 29.804570962222094 },
    { value: 145, lng: 121.1763690119717, lat: 29.943827249850777 },
    { value: 101, lng: 121.56920938135673, lat: 29.85263574108389 },
    { value: 199, lng: 120.9772766279951, lat: 28.330342193214033 },
    { value: 167, lng: 120.33101898043361, lat: 30.565600410098323 },
    { value: 169, lng: 120.36095289685078, lat: 30.739761809104824 },
    { value: 101, lng: 119.983185482632, lat: 31.03706617454779 },
    { value: 121, lng: 121.20282810334723, lat: 29.45300711212515 },
    { value: 132, lng: 120.04632515461387, lat: 29.535586166289217 },
    { value: 132, lng: 119.88396764642604, lat: 29.24289373808931 },
    { value: 119, lng: 118.20295164180662, lat: 28.97847155167772 },
    { value: 138, lng: 119.30239039019484, lat: 28.963362607831762 },
    { value: 183, lng: 122.11925213943688, lat: 30.09279983271788 },
    { value: 103, lng: 122.0641872449813, lat: 30.624331727210976 },
    { value: 110, lng: 121.24428726916929, lat: 28.29819603626963 },
    { value: 171, lng: 120.83475957600818, lat: 29.104535097251688 },
    { value: 174, lng: 119.70182146944745, lat: 28.267110085326326 },
  ],
  be = [
    {
      name: "监测点#01",
      level: "差",
      value: 84.9,
      lng: 118.27595005,
      lat: 29.11596322,
    },
    {
      name: "监测点#02",
      level: "极好",
      value: 12.5,
      lng: 118.94093792,
      lat: 27.90619049,
    },
    {
      name: "监测点#03",
      level: "良好",
      value: 52.8,
      lng: 121.35456753,
      lat: 28.34783376,
    },
    {
      name: "监测点#04",
      level: "好",
      value: 32,
      lng: 122.10985921,
      lat: 30.05331943,
    },
  ];
export {
  fe as A,
  ve as B,
  ge as E,
  ye as L,
  xe as c,
  be as i,
  we as p,
  Le as s,
};
