import {
  C as h,
  A as x,
  h as f,
  i as v,
  P as w,
  j as b,
  G as _,
  c as y,
  L as p,
} from "./OrbitControls-9c9ee6bc.js";
import { M as L, g as B } from "./index-1453e2ee.js";
import { g as M } from "./utils-9af1928d.js";
import { D as C } from "./index-4ec0cc76.js";
import { s as z } from "./stats.module-077ce25d.js";
import { A, B as G, L as l } from "./line-0fbbd871.js";
import { g as U, h as S, o as D, c as E, b as H } from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
import "./chinaBlurLine-b7b06be6.js";
import "./ocean-bg-19f8644c.js";
import "./rotationBorder1-447bf02a.js";
import "./rotationBorder2-a143eae0.js";
import "./uv-77714551.js";
import "./Line2-7598ed88.js";
class X extends L {
  constructor(t) {
    super(t),
      (this.pointCenter = [116.397128, 39.916527]),
      (this.scene.background = new h(596769)),
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
      (this.assets = new A(() => {
        this.initModel();
      }));
  }
  initEnvironment() {
    let t = new x(16777215, 0.5);
    this.scene.add(t);
    let e = new f(16777215, 1);
    e.position.set(-30, 6, -8),
      (e.castShadow = !0),
      (e.shadow.radius = 20),
      (e.shadow.mapSize.width = 1024),
      (e.shadow.mapSize.height = 1024);
    let s = new v(e, 2);
    this.scene.add(e, s);
    const n = this.debug.instance.addFolder("Environment");
    n.add(e.position, "x", -30, 30, 1),
      n.add(e.position, "y", -30, 30, 1),
      n.add(e.position, "z", -30, 30, 1),
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
  createPointLight(t) {
    const e = new w(1924702, t.intensity, t.distance);
    e.position.set(t.x, t.y, t.z), this.scene.add(e);
    const s = new b(e, 1);
    this.scene.add(s);
    const n = this.debug.instance.addFolder("Point" + Math.random());
    n.addColor(t, "color"),
      n.add(t, "intensity", 1, 100, 1),
      n.add(t, "distance", 100, 1e3, 1),
      n.add(t, "x", -30, 30, 1),
      n.add(t, "y", -30, 30, 1),
      n.add(t, "z", -30, 30, 1),
      n.onChange(({ object: i }) => {
        (e.color = new h(i.color)),
          (e.distance = i.distance),
          (e.intensity = i.intensity),
          e.position.set(i.x, i.y, i.z),
          console.log(i),
          s.update();
      });
  }
  initSetting() {
    (this.debug = new C(!0)),
      (this.stats = new z()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10),
      (this.renderer.instance.shadowMap.enabled = !1),
      this.renderer.resize();
  }
  initModel() {
    let t = new _(),
      { china: e, chinaTopLine: s } = this.createChina();
    e.setParent(t),
      s.setParent(t),
      t.rotateX(-Math.PI / 2),
      t.position.set(0, 0.2, 0),
      this.scene.add(t);
  }
  createChina() {
    let t = this.assets.instance.getResource("china"),
      e = this.assets.instance.getResource("uv"),
      s = !1,
      n = new G(this, {
        data: t,
        center: this.pointCenter,
        merge: s,
        material: new y({ map: e, transparent: !0, opacity: 1 }),
        renderOrder: 2,
      }),
      { boxSize: i, box3: o } = M(n.mapGroup);
    n.mapGroup.children.map((d) => {
      d.children.map((c) => {
        this.calcUv(c.geometry, i.x, i.y, o.min.x, o.min.y);
      });
    });
    let r = new l(this, {
      center: this.pointCenter,
      visibelProvince: "广东省",
      data: t,
      material: new p({ color: 3969700 }),
      renderOrder: 3,
    });
    r.lineGroup.position.z += 0.01;
    let a = new l(this, {
      center: this.pointCenter,
      data: t,
      material: new p({ color: 3969700, transparent: !0, opacity: 0.4 }),
      renderOrder: 3,
    });
    return (
      (a.lineGroup.position.z -= 0.59),
      { china: n, chinaTopLine: r, chinaBottomLine: a }
    );
  }
  calcUv(t, e, s, n, i) {
    const o = t.attributes.position,
      r = t.attributes.uv;
    for (let a = 0; a < o.count; a++) {
      const d = o.getX(a),
        c = o.getY(a),
        m = (d - n) / e,
        g = (c - i) / s;
      r.setXY(a, m, g);
    }
    (r.needsUpdate = !0), t.computeVertexNormals();
  }
  calcUv1(t) {
    t.computeBoundingBox();
    const e = t.boundingBox.max.x - t.boundingBox.min.x,
      s = t.boundingBox.max.y - t.boundingBox.min.y,
      n = t.attributes.position,
      i = t.attributes.uv;
    for (let o = 0; o < n.count; o++) {
      const r = n.getX(o),
        a = n.getY(o),
        d = (r - t.boundingBox.min.x) / e,
        c = (a - t.boundingBox.min.y) / s;
      i.setXY(o, d, c);
    }
    (i.needsUpdate = !0), t.computeVertexNormals();
  }
  geoProjection(t) {
    return B().center(this.pointCenter).scale(120).translate([0, 0])(t);
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
const Y = { class: "map-gd" },
  k = H("canvas", { id: "canvas" }, null, -1),
  N = [k],
  j = {
    __name: "map-uv",
    setup(u) {
      let t = null;
      return (
        U(() => {
          t = new X(document.getElementById("canvas"));
        }),
        S(() => {
          t && t.destroy();
        }),
        (e, s) => (D(), E("div", Y, N))
      );
    },
  };
export { j as default };
