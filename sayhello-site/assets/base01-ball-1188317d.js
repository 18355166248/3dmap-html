import {
  A as d,
  h as c,
  i as l,
  $ as h,
  k as p,
  d as i,
  b as o,
  l as m,
} from "./OrbitControls-9c9ee6bc.js";
import { M as f } from "./index-1453e2ee.js";
import { g as u } from "./utils-9af1928d.js";
import { D as _ } from "./index-4ec0cc76.js";
import { g } from "./index-4db78ffb.js";
import { s as w } from "./stats.module-077ce25d.js";
import { _ as b } from "./_plugin-vue_export-helper-c27b6911.js";
import { g as y, h as v, o as x, c as M } from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
class S extends f {
  constructor(e) {
    super(e, { isOrthographic: !1 }),
      this.camera.instance.position.set(
        31.654053063076066,
        18.17832104360899,
        31.654053063096544
      ),
      this.initRender(),
      this.initSetting(),
      this.initModel(),
      this.initEnvironment();
  }
  initEnvironment() {
    let e = new d(16777215, 0.5);
    this.scene.add(e);
    let t = new c(16777215, 0.5);
    t.position.set(10, 15, -10), (t.castShadow = !0);
    let a = new l(t, 2);
    this.scene.add(t, a);
    const s = this.debug.instance.addFolder("Environment");
    s.add(t.position, "x", -30, 30, 1),
      s.add(t.position, "y", -30, 30, 1),
      s.add(t.position, "z", -30, 30, 1),
      s.onChange((n) => {
        a.update();
      });
  }
  initRender() {
    (this.renderer.instance.shadowMap.enabled = !0),
      (this.renderer.instance.shadowMap.type = h),
      (this.renderer.instance.useLegacyLights = !0);
  }
  initSetting() {
    (this.debug = new _(!0)),
      (this.stats = new w()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10);
  }
  initModel() {
    let e = new p(5, 5, 5);
    e.translate(0, 2.5, 0);
    let t = new i({ color: 16777215 }),
      a = new o(e, t);
    (a.castShadow = !0), this.scene.add(a);
    let s = new o(new m(20, 20, 1), new i({ color: 16777215 }));
    (s.receiveShadow = !0),
      s.rotateX(-Math.PI / 2),
      this.scene.add(s),
      setTimeout(() => {
        this.moveCamera(a, 0.5);
      }, 1e3);
  }
  moveCamera(e, t) {
    var s = u(e).center;
    s.distanceTo(this.camera.instance.position);
    var n = s
      .clone()
      .add(this.camera.instance.position.clone().multiplyScalar(t));
    g.to(this.camera.instance.position, {
      x: n.x,
      y: n.y,
      z: n.z,
      ease: "power2.inOut",
    });
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
const B = { id: "canvas" },
  C = {
    __name: "base01-ball",
    setup(r) {
      let e = null;
      return (
        y(() => {
          e = new S(document.getElementById("canvas"));
        }),
        v(() => {
          e && e.destroy();
        }),
        (t, a) => (x(), M("canvas", B))
      );
    },
  },
  F = b(C, [["__scopeId", "data-v-2ab0967a"]]);
export { F as default };
