import {
  C as l,
  g as m,
  bx as d,
  A as p,
  h as u,
  i as g,
  b as f,
  l as y,
  ae as w,
  D as x,
  a1 as _,
  G as b,
  by as v,
} from "./OrbitControls-9c9ee6bc.js";
import { M as k } from "./index-1453e2ee.js";
import { D as A } from "./index-4ec0cc76.js";
import { J as M } from "./index-14e47768.js";
import { s as I } from "./stats.module-077ce25d.js";
import { A as P } from "./assets-69a369a5.js";
import { _ as R } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  g as W,
  h as S,
  o as T,
  c as N,
  p as B,
  i as D,
  b as F,
} from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
import "./SimplePeople_FireFighter_Black-4e915471.js";
import "./negz-6d72d730.js";
import "./FBXLoader-a384905d.js";
class G {
  constructor({ assets: t, time: e, scene: s }) {
    (this.assets = t),
      (this.time = e),
      (this.scene = s),
      (this.state = {
        object: null,
        mixer: null,
        anims: {},
        actionName: "",
        actionTime: 0,
        playerIndex: 0,
      }),
      this.init();
  }
  init() {
    let t = new b(),
      e = this.assets.instance.getResource("FireFighter"),
      s = this.assets.instance.getResource("PointingGesture"),
      o = this.assets.instance.getResource("Running"),
      n = this.assets.instance.getResource("Turn"),
      r = this.assets.instance.getResource("Walking"),
      c = this.assets.instance.getResource("WalkingBackwards");
    (this.state.mixer = new v(e)),
      (this.state.anims = {
        Idle: this.state.mixer.clipAction(e.animations[0]),
        PointingGesture: this.state.mixer.clipAction(s.animations[0]),
        Running: this.state.mixer.clipAction(o.animations[0]),
        Turn: this.state.mixer.clipAction(n.animations[0]),
        Walking: this.state.mixer.clipAction(r.animations[0]),
        WalkingBackwards: this.state.mixer.clipAction(c.animations[0]),
      });
    let h = this.assets.instance.getResource("FireFighterTexture");
    e.traverse((a) => {
      a.isMesh &&
        ((a.material.map = h), (a.castShadow = !0), (a.receiveShadow = !1));
    }),
      t.add(e),
      this.scene.add(t),
      (this.state.object = t),
      this.state.anims.Idle.play(),
      (this.state.actionName = "Idle"),
      (this.state.actionTime = Date.now()),
      this.time.on("tick", (a) => {
        this.state.mixer && this.state.mixer.update(a),
          this.state.actionName === "Walking" &&
            Date.now() - this.state.actionTime > 1e3 &&
            this.state.move.forward > 0 &&
            this.changeAnimate("Running"),
          this.state.move && this.movePlayer(a);
      });
  }
  movePlayer(t) {
    if (this.state.move.forward > 0) {
      const e = this.state.actionName === "Running" ? 400 : 150;
      this.state.object.translateZ(e * t);
    } else this.state.move.forward < 0 && this.state.object.translateZ(-30 * t);
    this.state.object.rotateY(this.state.move.turn * t);
  }
  crossPlay(t, e) {
    t.fadeOut(0.3), e.reset(), e.setEffectiveWeight(1), e.play(), e.fadeIn(0.3);
  }
  changeAnimate(t = "Idle") {
    let e = this.state.anims[this.state.actionName];
    const s = this.state.anims[t];
    this.crossPlay(e, s),
      (this.state.actionName = t),
      (this.state.actionTime = Date.now());
  }
}
class j extends k {
  constructor(t) {
    super(t),
      (this.player = null),
      (this.sun = null),
      this.initSetting(),
      this.initEnvironment(),
      (this.assets = new P(() => {
        this.createPlane(), this.createModel();
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
      (this.scene.background = new l("#a0a0a0")),
      (this.scene.fog = new m(10526880, 700, 2e3)),
      (this.debug = new A(!0)),
      (this.stats = new I()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(1e3);
  }
  initEnvironment() {
    let t = new d(16777215, 4473924);
    t.position.set(0, 200, 0), this.scene.add(t);
    let e = new p(16777215, 0.5);
    this.scene.add(e);
    let s = new u(16777215, 0.5);
    s.position.set(0, 200, 100),
      (s.castShadow = !0),
      (s.shadow.camera.top = 180),
      (s.shadow.camera.bottom = -100),
      (s.shadow.camera.left = -120),
      (s.shadow.camera.right = 120),
      (this.sun = s);
    let o = new g(s, 20);
    this.scene.add(s, o);
    const n = this.debug.instance.addFolder("Environment");
    n.add(s.position, "x", -300, 300, 1),
      n.add(s.position, "y", -300, 300, 1),
      n.add(s.position, "z", -300, 300, 1),
      n.onChange((r) => {
        o.update();
      });
  }
  createModel() {
    (this.player = new G(this)),
      (this.joyStick = new M({
        onMove: (t, e) => {
          this.playControl(t, e);
        },
        game: this,
      }));
  }
  playControl(t, e) {
    (e = -e),
      t > 0.3
        ? ["Walking", "Running"].includes(this.player.state.actionName) ||
          this.player.changeAnimate("Walking")
        : t < -0.3
        ? ["WalkingBackwards"].includes(this.player.state.actionName) ||
          this.player.changeAnimate("WalkingBackwards")
        : ((t = 0),
          Math.abs(e) > 0.1
            ? this.player.state.actionName != "Turn" &&
              this.player.changeAnimate("Turn")
            : this.player.state.actionName != "Idle" &&
              this.player.changeAnimate("Idle")),
      (this.player.state.move = { forward: t, turn: e });
  }
  createPlane() {
    const t = new f(new y(2e3, 2e3), new w({ color: 10066329, side: x }));
    t.rotateX(-Math.PI / 2);
    const e = new _(2e3, 10);
    (t.receiveShadow = !0), this.scene.add(t, e);
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
const C = (i) => (B("data-v-1401fb5f"), (i = i()), D(), i),
  L = { class: "page" },
  E = C(() => F("canvas", { id: "canvas" }, null, -1)),
  H = [E],
  J = {
    __name: "player03-action-multi-fbx",
    setup(i) {
      let t = null;
      return (
        W(() => {
          t = new j(document.getElementById("canvas"));
        }),
        S(() => {
          t && t.destroy();
        }),
        (e, s) => (T(), N("div", L, H))
      );
    },
  },
  st = R(J, [["__scopeId", "data-v-1401fb5f"]]);
export { st as default };
