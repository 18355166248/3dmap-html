import {
  C as l,
  bx as u,
  A as g,
  h as f,
  i as y,
  b as m,
  l as w,
  ae as b,
  D as x,
  a1 as v,
  G as _,
  by as k,
  V as h,
  O as M,
  k as B,
  M as j,
} from "./OrbitControls-9c9ee6bc.js";
import { M as A } from "./index-1453e2ee.js";
import { D as R } from "./index-4ec0cc76.js";
import { J as C } from "./index-14e47768.js";
import { s as P } from "./stats.module-077ce25d.js";
import { A as I } from "./assets-69a369a5.js";
import { _ as S } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  g as W,
  h as T,
  o as N,
  c as D,
  p as G,
  i as H,
  b as E,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
import "./SimplePeople_FireFighter_Black-4e915471.js";
import "./negz-6d72d730.js";
import "./FBXLoader-a384905d.js";
class L {
  constructor({ assets: t, time: e, scene: s, camera: i, sun: a, sunHelp: r }) {
    (this.assets = t),
      (this.time = e),
      (this.scene = s),
      (this.camera = i),
      (this.sun = a),
      (this.sunHelp = r),
      (this.state = {
        hideCamerasObject: !1,
        object: null,
        mixer: null,
        anims: {},
        actionName: "",
        actionTime: 0,
        playerIndex: 0,
        cameras: null,
      }),
      this.init(),
      this.createCameras();
  }
  init() {
    let t = new _(),
      e = this.assets.instance.getResource("FireFighter"),
      s = this.assets.instance.getResource("PointingGesture"),
      i = this.assets.instance.getResource("Running"),
      a = this.assets.instance.getResource("Turn"),
      r = this.assets.instance.getResource("Walking"),
      p = this.assets.instance.getResource("WalkingBackwards");
    (this.state.mixer = new k(e)),
      (this.state.anims = {
        Idle: this.state.mixer.clipAction(e.animations[0]),
        PointingGesture: this.state.mixer.clipAction(s.animations[0]),
        Running: this.state.mixer.clipAction(i.animations[0]),
        Turn: this.state.mixer.clipAction(a.animations[0]),
        Walking: this.state.mixer.clipAction(r.animations[0]),
        WalkingBackwards: this.state.mixer.clipAction(p.animations[0]),
      });
    let d = this.assets.instance.getResource("FireFighterTexture");
    e.traverse((n) => {
      n.isMesh &&
        ((n.material.map = d), (n.castShadow = !0), (n.receiveShadow = !1));
    }),
      t.add(e),
      this.scene.add(t),
      (this.state.object = t),
      this.state.anims.Idle.play(),
      (this.state.actionName = "Idle"),
      (this.state.actionTime = Date.now()),
      this.time.on("tick", (n) => {
        if (
          (this.state.mixer && this.state.mixer.update(n),
          this.state.actionName === "Walking" &&
            Date.now() - this.state.actionTime > 1e3 &&
            this.state.move.forward > 0 &&
            this.changeAnimate("Running"),
          this.state.move && this.movePlayer(n),
          this.state.cameras &&
            this.state.cameras.active &&
            !this.camera.controls.enableRotate)
        ) {
          this.camera.instance.position.lerp(
            this.state.cameras.active.getWorldPosition(new h()),
            0.01
          );
          const c = this.state.object.position.clone();
          (c.y += 200), (this.camera.controls.target = c);
        }
        this.sun &&
          ((this.sun.position.x = this.state.object.position.x),
          (this.sun.position.y = this.state.object.position.y + 200),
          (this.sun.position.z = this.state.object.position.z + 100),
          (this.sun.target = this.state.object),
          this.sunHelp.update());
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
  createCameras() {
    new h(0, 80, 0);
    const t = this.createBox("blue");
    t.position.set(112, 100, 600);
    const e = this.createBox("red");
    e.position.set(0, 300, -600);
    const s = this.createBox("yellow");
    s.position.set(178, 139, 1665);
    const i = this.createBox("purple");
    i.position.set(0, 400, 0);
    const a = this.createBox("orange");
    a.position.set(40, 82, 94),
      this.state.object.add(t, e, s, i, a),
      (this.state.cameras = {
        front: t,
        back: e,
        wide: s,
        overhead: i,
        collect: a,
        active: null,
      }),
      (this.activeCamera = this.state.cameras.back);
  }
  createBox(t) {
    if (this.state.hideCamerasObject) return new M();
    let e = new B(10, 10, 10),
      s = new j({ color: new l(t) });
    return new m(e, s);
  }
  set activeCamera(t) {
    this.state.cameras.active = t;
  }
}
class F extends A {
  constructor(t) {
    super(t),
      (this.player = null),
      (this.sun = null),
      (this.cameras = null),
      this.initSetting(),
      this.initEnvironment(),
      (this.assets = new I(() => {
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
      (this.debug = new R(!0)),
      (this.stats = new P()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(1e3);
  }
  initEnvironment() {
    let t = new u(16777215, 4473924);
    t.position.set(0, 200, 0), this.scene.add(t);
    let e = new g(16777215, 0.5);
    this.scene.add(e);
    let s = new f(16777215, 0.5);
    s.position.set(0, 200, 100),
      (s.castShadow = !0),
      (s.shadow.camera.top = 180),
      (s.shadow.camera.bottom = -100),
      (s.shadow.camera.left = -120),
      (s.shadow.camera.right = 120),
      (this.sun = s);
    let i = new y(s, 20);
    (this.sunHelp = i), this.scene.add(s, i);
    const a = this.debug.instance.addFolder("Environment");
    a.add(s.position, "x", -300, 300, 1),
      a.add(s.position, "y", -300, 300, 1),
      a.add(s.position, "z", -300, 300, 1),
      a.onChange((r) => {
        i.update();
      });
  }
  createModel() {
    (this.player = new L(this)),
      (this.joyStick = new C({
        onMove: (t, e) => {
          this.playControl(t, e);
        },
        onStart: () => {
          console.log("onStart"), (this.camera.controls.enableRotate = !1);
        },
        onEnd: () => {
          console.log("onEnd"), (this.camera.controls.enableRotate = !0);
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
    const t = new m(new w(1e4, 1e4), new b({ color: 10066329, side: x }));
    t.rotateX(-Math.PI / 2);
    const e = new v(2e3, 10);
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
const O = (o) => (G("data-v-27a264d8"), (o = o()), H(), o),
  z = { class: "page" },
  V = O(() => E("canvas", { id: "canvas" }, null, -1)),
  J = [V],
  Z = {
    __name: "player05-move-camera",
    setup(o) {
      let t = null;
      return (
        W(() => {
          t = new F(document.getElementById("canvas"));
        }),
        T(() => {
          t && t.destroy();
        }),
        (e, s) => (N(), D("div", z, J))
      );
    },
  },
  nt = S(Z, [["__scopeId", "data-v-27a264d8"]]);
export { nt as default };
