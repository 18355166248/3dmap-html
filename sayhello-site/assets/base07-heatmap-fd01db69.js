import {
  B,
  s as b,
  p as g,
  t as I,
  l as P,
  u as H,
  M as S,
  D,
  b as E,
} from "./OrbitControls-9c9ee6bc.js";
import { M as G } from "./index-1453e2ee.js";
import { m as k, a as z } from "./utils-9af1928d.js";
import { h as A } from "./heatmap.min-eb3a4a51.js";
import { _ as C } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  g as U,
  h as X,
  o as F,
  c as N,
  p as T,
  i as V,
  b as W,
} from "./index-d838a7bb.js";
class j extends G {
  constructor(e) {
    super(e), this.camera.instance.position.set(0, 0, 300), this.initModel();
  }
  initModel() {
    this.genHeatmapCanvas();
  }
  genHeatmapCanvas() {
    const e = [],
      o = [];
    let i = 200;
    const n = 3600,
      r = 1800;
    for (let t = 0; t < i; t++) {
      const m = Math.floor(Math.random() * 360),
        u = Math.floor(Math.random() * 180),
        x = 2.1;
      let y = parseInt(Math.random() * 25 + 10);
      e.push({ x: m, y: u, value: y }), o.push(m / 10, u / 10, x);
    }
    let h = k(e, (t) => t.value).value,
      _ = z(e, (t) => t.value).value;
    const p = new B();
    p.setAttribute("position", new b(o, 3));
    const f = new g({ size: 2, color: 16777215 });
    let c = new I(p, f);
    c.rotateX(-Math.PI / 2), this.scene.add(c);
    let v = document.createElement("div");
    var l = A.create({
      container: v,
      radius: 30,
      width: n,
      height: r,
      alpha: !0,
    });
    l.setData({ max: h, min: _, data: e });
    let M = new P(n, r),
      w = new H(l._renderer.canvas);
    var d = new S({ map: w, transparent: !0, side: D, wireframe: !1 });
    d.map.needsUpdate = !0;
    let s = new E(M, d);
    s.rotateX(Math.PI / 2),
      s.position.set(n / 20, 2, -r / 20),
      s.scale.set(0.1, 0.1, 1),
      this.scene.add(s);
  }
  update() {
    super.update(), this.stats && this.stats.update();
  }
  destroy() {
    super.destroy();
  }
}
const q = (a) => (T("data-v-8a122ed9"), (a = a()), V(), a),
  J = { class: "heatmap" },
  K = q(() => W("canvas", { id: "canvas" }, null, -1)),
  L = [K],
  O = {
    __name: "base07-heatmap",
    setup(a) {
      let e = null;
      return (
        U(() => {
          e = new j(document.getElementById("canvas"));
        }),
        X(() => {
          e && e.destroy();
        }),
        (o, i) => (F(), N("div", J, L))
      );
    },
  },
  te = C(O, [["__scopeId", "data-v-8a122ed9"]]);
export { te as default };
