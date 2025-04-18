import {
  A as l,
  h as c,
  i as h,
  $ as p,
  k as f,
  d as n,
  b as o,
  l as m,
} from "./OrbitControls-9c9ee6bc.js";
import { M as u, N as _ } from "./index-1453e2ee.js";
import { D as w } from "./index-4ec0cc76.js";
import { s as g } from "./stats.module-077ce25d.js";
import { _ as v } from "./_plugin-vue_export-helper-c27b6911.js";
import { g as y, h as M, o as b, c as x } from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
class S extends u {
  constructor(e) {
    super(e),
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
    let e = new l(16777215, 0.5);
    this.scene.add(e);
    let t = new c(16777215, 0.5);
    t.position.set(10, 15, -10), (t.castShadow = !0);
    let a = new h(t, 2);
    this.scene.add(t, a);
    const s = this.debug.instance.addFolder("Environment");
    s.add(t.position, "x", -30, 30, 1),
      s.add(t.position, "y", -30, 30, 1),
      s.add(t.position, "z", -30, 30, 1),
      s.onChange((d) => {
        a.update();
      });
  }
  initRender() {
    (this.renderer.instance.shadowMap.enabled = !0),
      (this.renderer.instance.shadowMap.type = p);
  }
  initSetting() {
    (this.debug = new w(!0)),
      (this.stats = new g()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10);
  }
  initModel() {
    let e = new f(5, 5, 5);
    e.translate(0, 2.5, 0);
    let t = new n({ color: 16777215 }),
      a = new o(e, t);
    (a.castShadow = !0), this.scene.add(a);
    let s = new o(new m(20, 20, 1), new n({ color: 16777215 }));
    (s.receiveShadow = !0),
      s.rotateX(-Math.PI / 2),
      this.scene.add(s),
      new _().load("/assets/model/fbx/townNavMesh.gltf").then((r) => {
        console.log(r);
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
const k = { id: "canvas" },
  L = {
    __name: "base03-yuka",
    setup(i) {
      let e = null;
      return (
        y(() => {
          e = new S(document.getElementById("canvas"));
        }),
        M(() => {
          e && e.destroy();
        }),
        (t, a) => (b(), x("canvas", k))
      );
    },
  },
  N = v(L, [["__scopeId", "data-v-52ceed65"]]);
export { N as default };
