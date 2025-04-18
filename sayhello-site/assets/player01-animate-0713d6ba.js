import {
  C as r,
  g as d,
  bx as c,
  A as p,
  h,
  i as m,
  G as l,
  by as u,
  b as f,
  l as g,
  ae as w,
  D as _,
  a1 as x,
} from "./OrbitControls-9c9ee6bc.js";
import { M as y } from "./index-1453e2ee.js";
import { D as b } from "./index-4ec0cc76.js";
import { s as v } from "./stats.module-077ce25d.js";
import { A as M } from "./assets-69a369a5.js";
import { _ as A } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
import "./SimplePeople_FireFighter_Black-4e915471.js";
import "./negz-6d72d730.js";
import "./FBXLoader-a384905d.js";
class L extends y {
  constructor(e) {
    super(e),
      this.initSetting(),
      this.initEnvironment(),
      (this.assets = new M(() => {
        this.createModel(), this.createPlane();
      }));
  }
  initSetting() {
    this.camera.instance.position.set(
      530.1431297428257,
      331.0221430925983,
      875.4033810148657
    ),
      (this.camera.instance.far = 5e3),
      (this.camera.instance.near = 1),
      this.camera.instance.updateProjectionMatrix(),
      (this.renderer.instance.shadowMap.enabled = !0),
      (this.scene.background = new r("#a0a0a0")),
      (this.scene.fog = new d(10526880, 700, 2e3)),
      (this.debug = new b(!0)),
      (this.stats = new v()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(1e3);
  }
  initEnvironment() {
    let e = new c(16777215, 4473924);
    e.position.set(0, 200, 0), this.scene.add(e);
    let s = new p(16777215, 0.5);
    this.scene.add(s);
    let t = new h(16777215, 0.5);
    t.position.set(0, 200, 100),
      (t.castShadow = !0),
      (t.shadow.camera.top = 180),
      (t.shadow.camera.bottom = -100),
      (t.shadow.camera.left = -120),
      (t.shadow.camera.right = 120);
    let i = new m(t, 20);
    this.scene.add(t, i);
    const n = this.debug.instance.addFolder("Environment");
    n.add(t.position, "x", -300, 300, 1),
      n.add(t.position, "y", -300, 300, 1),
      n.add(t.position, "z", -300, 300, 1),
      n.onChange((a) => {
        i.update();
      });
  }
  createModel() {
    let e = new l(),
      s = this.assets.instance.getResource("FireFighter"),
      t = this.assets.instance.getResource("FireFighterTexture");
    const i = new u(s);
    s.traverse((a) => {
      a.isMesh &&
        ((a.material.map = t), (a.castShadow = !0), (a.receiveShadow = !1));
    }),
      e.add(s),
      this.scene.add(e),
      i.clipAction(s.animations[0]).play(),
      this.time.on("tick", (a) => {
        i.update(a);
      });
  }
  createPlane() {
    const e = new f(new g(2e3, 2e3), new w({ color: 10066329, side: _ }));
    e.rotateX(-Math.PI / 2);
    const s = new x(2e3, 25);
    (e.receiveShadow = !0), this.scene.add(e, s);
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
const P = { id: "canvas" },
  C = {
    __name: "player01-animate",
    setup(o) {
      let e = null;
      return (
        onMounted(() => {
          e = new L(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (s, t) => (openBlock(), createElementBlock("canvas", P))
      );
    },
  },
  X = A(C, [["__scopeId", "data-v-68188635"]]);
export { X as default };
