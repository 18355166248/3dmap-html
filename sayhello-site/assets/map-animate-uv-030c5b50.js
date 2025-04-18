import {
  F as B,
  G as g,
  a as G,
  M as _,
  O as M,
  S as C,
  e as O,
  b as w,
  L as m,
  V as P,
  B as z,
  f as T,
  C as L,
  A as E,
  h as A,
  i as S,
  P as j,
  j as D,
  c as F,
} from "./OrbitControls-9c9ee6bc.js";
import { R as V, V as U, g as f, m as k, M as H } from "./index-1453e2ee.js";
import { t as v, g as X } from "./utils-9af1928d.js";
import { D as q } from "./index-4ec0cc76.js";
import { s as N } from "./stats.module-077ce25d.js";
import { c as R, s as Y } from "./chinaBlurLine-b7b06be6.js";
import { o as I } from "./ocean-bg-19f8644c.js";
import { h as J, r as W, g as $, a as K } from "./rotationBorder1-447bf02a.js";
import { r as Q } from "./rotationBorder2-a143eae0.js";
import { u as Z } from "./uv-77714551.js";
import { L as ee, a as te } from "./Line2-7598ed88.js";
import {
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
  createElementVNode,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
class re {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new V()),
      this.instance.addLoader(B, "FileLoader"),
      this.instance.on("onProgress", (t, s, n) => {
        let a = ((s / n) * 100).toFixed(2) + "%!";
        console.log(a, t, s, n);
      }),
      this.instance.on("onLoad", () => {
        console.log("资源加载完成"),
          this.onLoadCallback && this.onLoadCallback();
      });
    let e = [
      { type: "Texture", name: "huiguang", path: J },
      { type: "Texture", name: "rotationBorder1", path: W },
      { type: "Texture", name: "rotationBorder2", path: Q },
      { type: "Texture", name: "guangquan1", path: $ },
      { type: "Texture", name: "guangquan2", path: K },
      { type: "Texture", name: "chinaBlurLine", path: R },
      { type: "Texture", name: "uv", path: Z },
      { type: "Texture", name: "ocean", path: I },
      { type: "Texture", name: "side", path: Y },
      { type: "File", name: "guangdong", path: "/assets/json/广东省.json" },
      { type: "File", name: "china", path: "/assets/json/中华人民共和国.json" },
    ];
    this.instance.loadAll(e);
  }
}
class ce {
  constructor({}, e = {}) {
    (this.mapGroup = new g()),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new U(0, 0, 0),
          center: new G(0, 0),
          data: "",
          renderOrder: 1,
          merge: !1,
          material: new _({ color: 1582651, transparent: !0, opacity: 1 }),
        },
        e
      )),
      this.mapGroup.position.copy(this.config.position);
    let t = v(this.config.data);
    this.create(t);
  }
  geoProjection(e) {
    return f().center(this.config.center).scale(120).translate([0, 0])(e);
  }
  create(e) {
    let { merge: t } = this.config,
      s = [];
    if (
      (e.features.forEach((n) => {
        const i = new M();
        let { name: a, center: d = [], centroid: o = [] } = n.properties;
        this.coordinates.push({ name: a, center: d, centroid: o }),
          n.geometry.coordinates.forEach((h) => {
            h.forEach((r) => {
              const l = new C();
              for (let c = 0; c < r.length; c++) {
                if (!r[c][0] || !r[c][1]) return !1;
                const [x, y] = this.geoProjection(r[c]);
                c === 0 && l.moveTo(x, -y), l.lineTo(x, -y);
              }
              const p = new O(l);
              if (t) s.push(p);
              else {
                const c = new w(p, this.config.material);
                (c.renderOrder = this.config.renderOrder), i.add(c);
              }
            });
          }),
          t || this.mapGroup.add(i);
      }),
      t)
    ) {
      let n = k(s);
      const i = new w(n, this.config.material);
      (i.renderOrder = this.config.renderOrder), this.mapGroup.add(i);
    }
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(e) {
    e.add(this.mapGroup);
  }
}
class b {
  constructor({}, e = {}) {
    this.config = Object.assign(
      {
        visibelProvince: "",
        center: [0, 0],
        data: "",
        material: new m({ color: 16777215 }),
        type: "LineLoop",
        renderOrder: 1,
      },
      e
    );
    let t = v(this.config.data),
      s = this.create(t);
    this.lineGroup = s;
  }
  geoProjection(e) {
    return f().center(this.config.center).scale(120).translate([0, 0])(e);
  }
  create(e) {
    const { type: t, visibelProvince: s } = this.config;
    let n = e.features,
      i = new g();
    for (let a = 0; a < n.length; a++) {
      const d = n[a];
      d.properties.name !== s &&
        d.geometry.coordinates.forEach((o) => {
          const h = [];
          let r = null;
          t === "Line2"
            ? (o[0].forEach((l) => {
                const [p, c] = this.geoProjection(l);
                h.push(p, -c, 0);
              }),
              (r = this.createLine2(h)))
            : o[0].forEach((l) => {
                const [p, c] = this.geoProjection(l);
                h.push(new P(p, -c, 0)), (r = this.createLine(h));
              }),
            i.add(r);
        });
    }
    return i;
  }
  createLine2(e) {
    const { material: t, renderOrder: s } = this.config,
      n = new ee();
    n.setPositions(e);
    let i = new te(n, t);
    return (
      (i.name = "mapLine2"), (i.renderOrder = s), i.computeLineDistances(), i
    );
  }
  createLine(e) {
    const { material: t, renderOrder: s, type: n } = this.config,
      i = new z();
    i.setFromPoints(e);
    let a = new T(i, t);
    return (a.renderOrder = s), (a.name = "mapLine"), a;
  }
  setParent(e) {
    e.add(this.lineGroup);
  }
}
class de extends H {
  constructor(e) {
    super(e),
      (this.pointCenter = [116.397128, 39.916527]),
      (this.scene.background = new L(596769)),
      this.camera.instance.position.set(
        2.544030258480583,
        213.84738503123887,
        11.827999642983388
      ),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.updateProjectionMatrix(),
      this.initSetting(),
      this.initEnvironment(),
      (this.assets = new re(() => {
        this.initModel();
      }));
  }
  initEnvironment() {
    let e = new E(16777215, 0.5);
    this.scene.add(e);
    let t = new A(16777215, 1);
    t.position.set(-30, 6, -8),
      (t.castShadow = !0),
      (t.shadow.radius = 20),
      (t.shadow.mapSize.width = 1024),
      (t.shadow.mapSize.height = 1024);
    let s = new S(t, 2);
    this.scene.add(t, s);
    const n = this.debug.instance.addFolder("Environment");
    n.add(t.position, "x", -30, 30, 1),
      n.add(t.position, "y", -30, 30, 1),
      n.add(t.position, "z", -30, 30, 1),
      n.onChange((i) => {
        s.update();
      }),
      this.createPointLight({
        color: "#1d5e5e",
        intensity: 56,
        distance: 100,
        x: -9,
        y: 3,
        z: -3,
      }),
      this.createPointLight({
        color: "#1d5e5e",
        intensity: 23,
        distance: 100,
        x: 0,
        y: 2,
        z: 5,
      });
  }
  createPointLight(e) {
    const t = new j(1924702, e.intensity, e.distance);
    t.position.set(e.x, e.y, e.z), this.scene.add(t);
    const s = new D(t, 1);
    this.scene.add(s);
    const n = this.debug.instance.addFolder("Point" + Math.random());
    n.addColor(e, "color"),
      n.add(e, "intensity", 1, 100, 1),
      n.add(e, "distance", 100, 1e3, 1),
      n.add(e, "x", -30, 30, 1),
      n.add(e, "y", -30, 30, 1),
      n.add(e, "z", -30, 30, 1),
      n.onChange(({ object: i }) => {
        (t.color = new L(i.color)),
          (t.distance = i.distance),
          (t.intensity = i.intensity),
          t.position.set(i.x, i.y, i.z),
          console.log(i),
          s.update();
      });
  }
  initSetting() {
    (this.debug = new q(!0)),
      (this.stats = new N()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10),
      (this.renderer.instance.shadowMap.enabled = !1),
      this.renderer.resize();
  }
  initModel() {
    let e = new g(),
      { china: t, chinaTopLine: s } = this.createChina();
    t.setParent(e),
      s.setParent(e),
      e.rotateX(-Math.PI / 2),
      e.position.set(0, 0.2, 0),
      this.scene.add(e);
  }
  createChina() {
    let e = this.assets.instance.getResource("china"),
      t = this.assets.instance.getResource("uv"),
      s = !1,
      n = new ce(this, {
        data: e,
        center: this.pointCenter,
        merge: s,
        material: new F({ map: t, transparent: !0, opacity: 1 }),
        renderOrder: 2,
      }),
      { boxSize: i, box3: a } = X(n.mapGroup);
    n.mapGroup.children.map((h) => {
      h.children.map((r) => {
        this.calcUv(r.geometry, i.x, i.y, a.min.x, a.min.y);
      });
    });
    let d = new b(this, {
      center: this.pointCenter,
      visibelProvince: "广东省",
      data: e,
      material: new m({ color: 3969700 }),
      renderOrder: 3,
    });
    d.lineGroup.position.z += 0.01;
    let o = new b(this, {
      center: this.pointCenter,
      data: e,
      material: new m({ color: 3969700, transparent: !0, opacity: 0.4 }),
      renderOrder: 3,
    });
    return (
      (o.lineGroup.position.z -= 0.59),
      { china: n, chinaTopLine: d, chinaBottomLine: o }
    );
  }
  calcUv(e, t, s, n, i) {
    const a = e.attributes.position,
      d = e.attributes.uv;
    for (let o = 0; o < a.count; o++) {
      const h = a.getX(o),
        r = a.getY(o),
        l = (h - n) / t,
        p = (r - i) / s;
      d.setXY(o, l, p);
    }
    (d.needsUpdate = !0), e.computeVertexNormals();
  }
  calcUv1(e) {
    e.computeBoundingBox();
    const t = e.boundingBox.max.x - e.boundingBox.min.x,
      s = e.boundingBox.max.y - e.boundingBox.min.y,
      n = e.attributes.position,
      i = e.attributes.uv;
    for (let a = 0; a < n.count; a++) {
      const d = n.getX(a),
        o = n.getY(a),
        h = (d - e.boundingBox.min.x) / t,
        r = (o - e.boundingBox.min.y) / s;
      i.setXY(a, h, r);
    }
    (i.needsUpdate = !0), e.computeVertexNormals();
  }
  geoProjection(e) {
    return f().center(this.pointCenter).scale(120).translate([0, 0])(e);
  }
  update() {
    super.update(), this.stats && this.stats.update();
  }
  destroy() {
    super.destroy(),
      this.debug.destroy(),
      document.body.removeChild(this.stats.dom);
  }
}
const he = { class: "map-gd" },
  le = createElementVNode("canvas", { id: "canvas" }, null, -1),
  pe = [le],
  Me = {
    __name: "map-animate-uv",
    setup(u) {
      let e = null;
      return (
        onMounted(() => {
          e = new de(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (t, s) => (openBlock(), createElementBlock("div", he, pe))
      );
    },
  };
export { Me as default };
