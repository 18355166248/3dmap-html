import {
  F as x,
  G as L,
  a as G,
  M as O,
  O as b,
  S as j,
  e as B,
  b as f,
  L as P,
  V as T,
  B as M,
  f as v,
} from "./OrbitControls-9c9ee6bc.js";
import { R as F, V as E, g as y, m as V } from "./index-1453e2ee.js";
import { c as q, s as C } from "./chinaBlurLine-b7b06be6.js";
import { o as D } from "./ocean-bg-19f8644c.js";
import { h as S, r as k, g as A, a as R } from "./rotationBorder1-447bf02a.js";
import { r as J } from "./rotationBorder2-a143eae0.js";
import { u as N } from "./uv-77714551.js";
import { t as w } from "./utils-9af1928d.js";
import { L as $, a as z } from "./Line2-7598ed88.js";
class _ {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new F()),
      this.instance.addLoader(x, "FileLoader"),
      this.instance.on("onProgress", (r, n, a) => {
        let s = ((n / a) * 100).toFixed(2) + "%!";
        console.log(s, r, n, a);
      }),
      this.instance.on("onLoad", () => {
        console.log("资源加载完成"),
          this.onLoadCallback && this.onLoadCallback();
      });
    let e = [
      { type: "Texture", name: "huiguang", path: S },
      { type: "Texture", name: "rotationBorder1", path: k },
      { type: "Texture", name: "rotationBorder2", path: J },
      { type: "Texture", name: "guangquan1", path: A },
      { type: "Texture", name: "guangquan2", path: R },
      { type: "Texture", name: "chinaBlurLine", path: q },
      { type: "Texture", name: "uv", path: N },
      { type: "Texture", name: "ocean", path: D },
      { type: "Texture", name: "side", path: C },
      { type: "File", name: "guangdong", path: "/assets/json/广东省.json" },
      { type: "File", name: "china", path: "/assets/json/中华人民共和国.json" },
    ];
    this.instance.loadAll(e);
  }
}
class ee {
  constructor({}, e = {}) {
    (this.mapGroup = new L()),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new E(0, 0, 0),
          center: new G(0, 0),
          data: "",
          renderOrder: 1,
          merge: !1,
          material: new O({ color: 1582651, transparent: !0, opacity: 1 }),
        },
        e
      )),
      this.mapGroup.position.copy(this.config.position);
    let r = w(this.config.data);
    this.create(r);
  }
  geoProjection(e) {
    return y().center(this.config.center).scale(120).translate([0, 0])(e);
  }
  create(e) {
    let { merge: r } = this.config,
      n = [];
    if (
      (e.features.forEach((a) => {
        const t = new b();
        let { name: s, center: l = [], centroid: m = [] } = a.properties;
        this.coordinates.push({ name: s, center: l, centroid: m }),
          a.geometry.coordinates.forEach((h) => {
            h.forEach((i) => {
              const c = new j();
              for (let o = 0; o < i.length; o++) {
                if (!i[o][0] || !i[o][1]) return !1;
                const [d, g] = this.geoProjection(i[o]);
                o === 0 && c.moveTo(d, -g), c.lineTo(d, -g);
              }
              const p = new B(c);
              if (r) n.push(p);
              else {
                const o = new f(p, this.config.material);
                (o.renderOrder = this.config.renderOrder), t.add(o);
              }
            });
          }),
          r || this.mapGroup.add(t);
      }),
      r)
    ) {
      let a = V(n);
      const t = new f(a, this.config.material);
      (t.renderOrder = this.config.renderOrder), this.mapGroup.add(t);
    }
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(e) {
    e.add(this.mapGroup);
  }
}
class te {
  constructor({}, e = {}) {
    this.config = Object.assign(
      {
        visibelProvince: "",
        center: [0, 0],
        data: "",
        material: new P({ color: 16777215 }),
        type: "LineLoop",
        renderOrder: 1,
      },
      e
    );
    let r = w(this.config.data),
      n = this.create(r);
    this.lineGroup = n;
  }
  geoProjection(e) {
    return y().center(this.config.center).scale(120).translate([0, 0])(e);
  }
  create(e) {
    const { type: r, visibelProvince: n } = this.config;
    let a = e.features,
      t = new L();
    for (let s = 0; s < a.length; s++) {
      const l = a[s];
      l.properties.name !== n &&
        l.geometry.coordinates.forEach((m) => {
          const h = [];
          let i = null;
          r === "Line2"
            ? (m[0].forEach((c) => {
                const [p, o] = this.geoProjection(c);
                h.push(p, -o, 0);
              }),
              (i = this.createLine2(h)))
            : m[0].forEach((c) => {
                const [p, o] = this.geoProjection(c);
                h.push(new T(p, -o, 0)), (i = this.createLine(h));
              }),
            t.add(i);
        });
    }
    return t;
  }
  createLine2(e) {
    const { material: r, renderOrder: n } = this.config,
      a = new $();
    a.setPositions(e);
    let t = new z(a, r);
    return (
      (t.name = "mapLine2"), (t.renderOrder = n), t.computeLineDistances(), t
    );
  }
  createLine(e) {
    const { material: r, renderOrder: n, type: a } = this.config,
      t = new M();
    t.setFromPoints(e);
    let s = new v(t, r);
    return (s.renderOrder = n), (s.name = "mapLine"), s;
  }
  setParent(e) {
    e.add(this.lineGroup);
  }
}
export { _ as A, ee as B, te as L };
