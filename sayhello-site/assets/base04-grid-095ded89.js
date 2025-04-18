import {
  g as f,
  G as y,
  M as G,
  D as b,
  b as M,
  a1 as g,
  B as x,
  a2 as B,
  p as P,
  t as v,
  a,
  S as H,
  e as A,
} from "./OrbitControls-9c9ee6bc.js";
import { M as S, m as j } from "./index-1453e2ee.js";
import { D as C } from "./index-4ec0cc76.js";
import { s as I } from "./stats.module-077ce25d.js";
import { _ as k } from "./_plugin-vue_export-helper-c27b6911.js";
import { g as D, h as E, o as F, c as O } from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
class U extends S {
  constructor(t) {
    super(t),
      (this.scene.fog = new f(0, 1, 100)),
      this.camera.instance.position.set(
        31.654053063076066,
        18.17832104360899,
        31.654053063096544
      ),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.updateProjectionMatrix(),
      this.initSetting(),
      this.initModel();
  }
  initSetting() {
    (this.debug = new C(!0)),
      (this.stats = new I()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10);
  }
  initModel() {
    this.createGrid({
      gridSize: 100,
      gridDivision: 20,
      gridColor: 2635578,
      shapeSize: 1,
      shapeColor: 9345950,
      pointSize: 0.2,
      pointColor: 2635578,
    });
  }
  createGrid({
    gridSize: t,
    gridDivision: e,
    gridColor: s,
    shapeSize: i,
    shapeColor: l,
    pointSize: o,
    pointColor: p,
  }) {
    let c = new y(),
      h = this.createGridHelp({
        gridSize: t,
        gridDivision: e,
        gridColor: s,
        shapeSize: i,
        shapeColor: l,
        group: c,
      }),
      r = this.createShapes({
        gridSize: t,
        gridDivision: e,
        shapeSize: i,
        shapeColor: l,
      }),
      n = this.createPoint({ gridSize: t, pointSize: o, pointColor: p });
    c.add(h, r, n), this.scene.add(c);
  }
  createShapes({ gridSize: t, gridDivision: e, shapeSize: s, shapeColor: i }) {
    let l = t / e,
      o = t / 2,
      p = new G({ color: i, side: b }),
      c = [];
    for (let n = 0; n < e + 1; n++)
      for (let d = 0; d < e + 1; d++) {
        let m = this.createPlus(s);
        m.translate(-o + n * l, -o + d * l, 0), c.push(m);
      }
    let h = j(c),
      r = new M(h, p);
    return (
      (r.renderOrder = -1), r.rotateX(-Math.PI / 2), (r.position.y += 0.01), r
    );
  }
  createGridHelp({ gridSize: t, gridDivision: e, gridColor: s }) {
    return new g(t, e, s, s);
  }
  createPoint({ gridSize: t, pointSize: e, pointColor: s }) {
    const o = new Float32Array(12e4);
    for (let r = 0; r < 200; r++)
      for (let n = 0; n < 200; n++) {
        let d = (r / 199) * t - t / 2,
          m = 0,
          _ = (n / (200 - 1)) * t - t / 2,
          u = (r * 200 + n) * 3;
        (o[u] = d), (o[u + 1] = m), (o[u + 2] = _);
      }
    var p = new x();
    p.setAttribute("position", new B(o, 3));
    let c = new P({ size: e, sizeAttenuation: !0, color: s });
    return new v(p, c);
  }
  createPlus(t = 50) {
    let e = t / 6 / 3,
      s = t / 3,
      i = [
        new a(-s, -e),
        new a(-e, -e),
        new a(-e, -s),
        new a(e, -s),
        new a(e, -s),
        new a(e, -e),
        new a(s, -e),
        new a(s, e),
        new a(e, e),
        new a(e, s),
        new a(-e, s),
        new a(-e, e),
        new a(-s, e),
      ],
      l = new H(i);
    return new A(l, 24);
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
const V = { id: "canvas" },
  W = {
    __name: "base04-grid",
    setup(w) {
      let t = null;
      return (
        D(() => {
          t = new U(document.getElementById("canvas"));
        }),
        E(() => {
          t && t.destroy();
        }),
        (e, s) => (F(), O("canvas", V))
      );
    },
  },
  R = k(W, [["__scopeId", "data-v-cabf450a"]]);
export { R as default };
