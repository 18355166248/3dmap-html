import {
  C as h,
  g as p,
  bx as m,
  A as u,
  h as g,
  i as f,
  G as w,
  by as _,
  b as x,
  l as y,
  ae as k,
  D as v,
  a1 as b,
} from "./OrbitControls-9c9ee6bc.js";
import { M as A } from "./index-1453e2ee.js";
import { D as I } from "./index-4ec0cc76.js";
import { s as M } from "./stats.module-077ce25d.js";
import { A as R } from "./assets-69a369a5.js";
import { _ as P } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  g as S,
  h as B,
  o as C,
  c as G,
  b as c,
  p as W,
  i as D,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
import "./SimplePeople_FireFighter_Black-4e915471.js";
import "./negz-6d72d730.js";
import "./FBXLoader-a384905d.js";
class F extends A {
  constructor(e) {
    super(e),
      (this.player = { mixer: null, anims: {}, playerIndex: 0 }),
      this.initSetting(),
      this.initEnvironment(),
      (this.assets = new R(() => {
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
      (this.scene.background = new h("#a0a0a0")),
      (this.scene.fog = new p(10526880, 700, 2e3)),
      (this.debug = new I(!0)),
      (this.stats = new M()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(1e3);
  }
  initEnvironment() {
    let e = new m(16777215, 4473924);
    e.position.set(0, 200, 0), this.scene.add(e);
    let t = new u(16777215, 0.5);
    this.scene.add(t);
    let a = new g(16777215, 0.5);
    a.position.set(0, 200, 100),
      (a.castShadow = !0),
      (a.shadow.camera.top = 180),
      (a.shadow.camera.bottom = -100),
      (a.shadow.camera.left = -120),
      (a.shadow.camera.right = 120);
    let n = new f(a, 20);
    this.scene.add(a, n);
    const s = this.debug.instance.addFolder("Environment");
    s.add(a.position, "x", -300, 300, 1),
      s.add(a.position, "y", -300, 300, 1),
      s.add(a.position, "z", -300, 300, 1),
      s.onChange((r) => {
        n.update();
      });
  }
  createModel() {
    let e = new w(),
      t = this.assets.instance.getResource("FireFighter"),
      a = this.assets.instance.getResource("PointingGesture"),
      n = this.assets.instance.getResource("Running"),
      s = this.assets.instance.getResource("Turn"),
      r = this.assets.instance.getResource("Walking"),
      d = this.assets.instance.getResource("WalkingBackwards");
    this.player.anims = {
      Idle: t.animations[0],
      PointingGesture: a.animations[0],
      Running: n.animations[0],
      Turn: s.animations[0],
      Walking: r.animations[0],
      WalkingBackwards: d.animations[0],
    };
    let l = this.assets.instance.getResource("FireFighterTexture");
    (this.player.mixer = new _(t)),
      t.traverse((i) => {
        i.isMesh &&
          ((i.material.map = l), (i.castShadow = !0), (i.receiveShadow = !1));
      }),
      e.add(t),
      this.scene.add(e),
      this.changeAnimate("Idle"),
      this.time.on("tick", (i) => {
        this.player.mixer.update(i);
      });
  }
  changeAnimate(e = "Idle") {
    const t = this.player.mixer.clipAction(this.player.anims[e]);
    this.player.mixer.stopAllAction(), (t.time = 0), t.fadeIn(0.5), t.play();
  }
  createPlane() {
    const e = new x(new y(2e3, 2e3), new k({ color: 10066329, side: v }));
    e.rotateX(-Math.PI / 2);
    const t = new b(2e3, 25);
    (e.receiveShadow = !0), this.scene.add(e, t);
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
const H = (o) => (W("data-v-99d16994"), (o = o()), D(), o),
  L = { class: "page" },
  E = H(() => c("canvas", { id: "canvas" }, null, -1)),
  T = {
    __name: "player02-animate-change",
    setup(o) {
      let e = null,
        t = 0,
        a = [
          "Idle",
          "PointingGesture",
          "Running",
          "Turn",
          "Walking",
          "WalkingBackwards",
        ];
      function n(s) {
        e && (t++, t >= a.length && (t = 0), e.changeAnimate(a[t]));
      }
      return (
        S(() => {
          e = new F(document.getElementById("canvas"));
        }),
        B(() => {
          e && e.destroy();
        }),
        (s, r) => (
          C(),
          G("div", L, [
            E,
            c("div", { class: "button-change", onClick: n }, "切换动作"),
          ])
        )
      );
    },
  },
  Y = P(T, [["__scopeId", "data-v-99d16994"]]);
export { Y as default };
