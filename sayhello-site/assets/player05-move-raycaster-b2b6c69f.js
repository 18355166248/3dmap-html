import {
  C as y,
  bx as g,
  A as b,
  h as w,
  i as v,
  k as u,
  ae as f,
  b as p,
  l as x,
  D as j,
  a1 as _,
  G as k,
  by as M,
  V as d,
  af as h,
  O as R,
  M as B,
} from "./OrbitControls-9c9ee6bc.js";
import { M as A } from "./index-1453e2ee.js";
import { D as C } from "./index-4ec0cc76.js";
import { J as P } from "./index-14e47768.js";
import { s as W } from "./stats.module-077ce25d.js";
import { A as I } from "./assets-69a369a5.js";
import { _ as S } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  g as Y,
  h as T,
  o as D,
  c as N,
  p as G,
  i as H,
  b as O,
} from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
import "./SimplePeople_FireFighter_Black-4e915471.js";
import "./negz-6d72d730.js";
import "./FBXLoader-a384905d.js";
class E {
  constructor({
    assets: t,
    time: s,
    scene: e,
    camera: a,
    sun: n,
    sunHelp: o,
    colliders: i,
  }) {
    (this.assets = t),
      (this.time = s),
      (this.scene = e),
      (this.camera = a),
      (this.sun = n),
      (this.sunHelp = o),
      (this.colliders = i),
      (this.state = {
        hideCamerasObject: !1,
        object: null,
        velocityY: 0,
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
    let t = new k(),
      s = this.assets.instance.getResource("FireFighter"),
      e = this.assets.instance.getResource("PointingGesture"),
      a = this.assets.instance.getResource("Running"),
      n = this.assets.instance.getResource("Turn"),
      o = this.assets.instance.getResource("Walking"),
      i = this.assets.instance.getResource("WalkingBackwards");
    (this.state.mixer = new M(s)),
      (this.state.anims = {
        Idle: this.state.mixer.clipAction(s.animations[0]),
        PointingGesture: this.state.mixer.clipAction(e.animations[0]),
        Running: this.state.mixer.clipAction(a.animations[0]),
        Turn: this.state.mixer.clipAction(n.animations[0]),
        Walking: this.state.mixer.clipAction(o.animations[0]),
        WalkingBackwards: this.state.mixer.clipAction(i.animations[0]),
      });
    let r = this.assets.instance.getResource("FireFighterTexture");
    s.traverse((c) => {
      c.isMesh &&
        ((c.material.map = r), (c.castShadow = !0), (c.receiveShadow = !1));
    }),
      t.add(s),
      this.scene.add(t),
      (this.state.object = t),
      this.state.anims.Idle.play(),
      (this.state.actionName = "Idle"),
      (this.state.actionTime = Date.now()),
      this.time.on("tick", (c) => {
        if (
          (this.state.mixer && this.state.mixer.update(c),
          this.state.actionName === "Walking" &&
            Date.now() - this.state.actionTime > 1e3 &&
            this.state.move.forward > 0 &&
            this.changeAnimate("Running"),
          this.state.move && this.movePlayer(c),
          this.state.cameras &&
            this.state.cameras.active &&
            !this.camera.controls.enableRotate)
        ) {
          this.camera.instance.position.lerp(
            this.state.cameras.active.getWorldPosition(new d()),
            0.01
          );
          const m = this.state.object.position.clone();
          (m.y += 200), (this.camera.controls.target = m);
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
    const s = this.state.object.position.clone();
    s.y += 60;
    let e = new d();
    this.state.object.getWorldDirection(e),
      this.state.move.forward < 0 && e.negate();
    let a = new h(s, e),
      n = !1;
    const o = this.colliders;
    if (o && o.length) {
      const i = a.intersectObjects(o);
      i.length && i[0].distance < 50 && (n = !0);
    }
    if (!n)
      if (this.state.move.forward > 0) {
        const i = this.state.actionName === "Running" ? 400 : 150;
        this.state.object.translateZ(i * t);
      } else
        this.state.move.forward < 0 && this.state.object.translateZ(-30 * t);
    if (o && o.length) {
      e.set(-1, 0, 0),
        e.applyMatrix4(this.state.object.matrix),
        e.normalize(),
        (a = new h(s, e));
      let i = a.intersectObjects(o);
      i.length > 0 &&
        i[0].distance < 50 &&
        this.state.object.translateX(100 - i[0].distance),
        e.set(1, 0, 0),
        e.applyMatrix4(this.state.object.matrix),
        e.normalize(),
        (a = new h(s, e)),
        (i = a.intersectObjects(o)),
        i.length > 0 &&
          i[0].distance < 50 &&
          this.state.object.translateX(i[0].distance - 100),
        e.set(0, -1, 0),
        (s.y += 200),
        (a = new h(s, e));
      const r = 30;
      if (((i = a.intersectObjects(o)), i.length > 0)) {
        const c = s.y - i[0].distance;
        c > this.state.object.position.y
          ? ((this.state.object.position.y =
              0.8 * this.state.object.position.y + 0.2 * c),
            (this.state.velocityY = 0))
          : c < this.state.object.position.y &&
            (this.state.velocityY == null && (this.state.velocityY = 0),
            (this.state.velocityY += t * r),
            (this.state.object.position.y -= this.state.velocityY),
            this.state.object.position.y < c &&
              ((this.state.velocityY = 0), (this.state.object.position.y = c)));
      } else
        this.state.object.position.y > 0 &&
          (this.state.velocityY == null && (this.state.velocityY = 0),
          (this.state.velocityY += t * r),
          (this.state.object.position.y -= this.state.velocityY),
          this.state.object.position.y < 0 &&
            ((this.state.velocityY = 0), (this.state.object.position.y = 0)));
    }
    this.state.object.rotateY(this.state.move.turn * t);
  }
  crossPlay(t, s) {
    t.fadeOut(0.3), s.reset(), s.setEffectiveWeight(1), s.play(), s.fadeIn(0.3);
  }
  changeAnimate(t = "Idle") {
    let s = this.state.anims[this.state.actionName];
    const e = this.state.anims[t];
    this.crossPlay(s, e),
      (this.state.actionName = t),
      (this.state.actionTime = Date.now());
  }
  createCameras() {
    new d(0, 80, 0);
    const t = this.createBox("blue");
    t.position.set(112, 100, 600);
    const s = this.createBox("red");
    s.position.set(0, 300, -600);
    const e = this.createBox("yellow");
    e.position.set(178, 139, 1665);
    const a = this.createBox("purple");
    a.position.set(0, 400, 0);
    const n = this.createBox("orange");
    n.position.set(40, 82, 94),
      this.state.object.add(t, s, e, a, n),
      (this.state.cameras = {
        front: t,
        back: s,
        wide: e,
        overhead: a,
        collect: n,
        active: null,
      }),
      (this.activeCamera = this.state.cameras.back);
  }
  createBox(t) {
    if (this.state.hideCamerasObject) return new R();
    let s = new u(10, 10, 10),
      e = new B({ color: new y(t) });
    return new p(s, e);
  }
  set activeCamera(t) {
    this.state.cameras.active = t;
  }
}
class z extends A {
  constructor(t) {
    super(t),
      (this.player = null),
      (this.sun = null),
      (this.cameras = null),
      this.initSetting(),
      this.initEnvironment(),
      (this.assets = new I(() => {
        this.createPlane(), this.createColliders(), this.createModel();
      }));
  }
  initSetting() {
    this.camera.instance.position.set(
      530.1431297428257,
      331.0221430925983,
      875.4033810148657
    ),
      (this.camera.instance.far = 1e4),
      (this.camera.instance.near = 1),
      this.camera.instance.updateProjectionMatrix(),
      (this.renderer.instance.shadowMap.enabled = !0),
      (this.scene.background = new y("#a0a0a0")),
      (this.debug = new C(!0)),
      (this.stats = new W()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(1e3);
  }
  initEnvironment() {
    let t = new g(16777215, 4473924);
    t.position.set(0, 200, 0), this.scene.add(t);
    let s = new b(16777215, 0.5);
    this.scene.add(s);
    let e = new w(16777215, 0.5);
    e.position.set(0, 200, 100),
      (e.castShadow = !0),
      (e.shadow.camera.top = 180),
      (e.shadow.camera.bottom = -100),
      (e.shadow.camera.left = -120),
      (e.shadow.camera.right = 120),
      (this.sun = e);
    let a = new v(e, 20);
    (this.sunHelp = a), this.scene.add(e, a);
    const n = this.debug.instance.addFolder("Environment");
    n.add(e.position, "x", -300, 300, 1),
      n.add(e.position, "y", -300, 300, 1),
      n.add(e.position, "z", -300, 300, 1),
      n.onChange((o) => {
        a.update();
      });
  }
  createModel() {
    (this.player = new E(this)),
      (this.joyStick = new P({
        onMove: (t, s) => {
          this.playControl(t, s);
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
  playControl(t, s) {
    (s = -s),
      t > 0.3
        ? ["Walking", "Running"].includes(this.player.state.actionName) ||
          this.player.changeAnimate("Walking")
        : t < -0.3
        ? ["WalkingBackwards"].includes(this.player.state.actionName) ||
          this.player.changeAnimate("WalkingBackwards")
        : ((t = 0),
          Math.abs(s) > 0.1
            ? this.player.state.actionName != "Turn" &&
              this.player.changeAnimate("Turn")
            : this.player.state.actionName != "Idle" &&
              this.player.changeAnimate("Idle")),
      t === 0 && s === 0
        ? delete this.player.state.move
        : (this.player.state.move = { forward: t, turn: s });
  }
  createColliders() {
    this.colliders = [];
    let t = new u(500, 600, 500),
      s = new f({ color: 6710886, wireframe: !1 }),
      e = 5e3;
    for (let i = -e; i < e; i += 1e3)
      for (let r = -e; r < e; r += 1e3) {
        if (i === 0 && r === 0) continue;
        let c = new p(t, s);
        c.position.set(i, 280, r), this.colliders.push(c), this.scene.add(c);
      }
    let a = new u(500, 40, 500),
      n = new p(a, s);
    n.position.set(300, 20, 300);
    let o = n.clone();
    o.scale.set(0.5, 1, 0.5),
      o.position.set(300, 60, 300),
      this.colliders.push(n, o),
      this.scene.add(n, o);
  }
  createPlane() {
    const t = new p(new x(1e4, 1e4), new f({ color: 10066329, side: j }));
    t.rotateX(-Math.PI / 2);
    const s = new _(2e3, 10);
    (t.receiveShadow = !0), this.scene.add(t, s);
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
const L = (l) => (G("data-v-39f5135c"), (l = l()), H(), l),
  F = { class: "page" },
  V = L(() => O("canvas", { id: "canvas" }, null, -1)),
  X = [V],
  J = {
    __name: "player05-move-raycaster",
    setup(l) {
      let t = null;
      return (
        Y(() => {
          t = new z(document.getElementById("canvas"));
        }),
        T(() => {
          t && t.destroy();
        }),
        (s, e) => (D(), N("div", F, X))
      );
    },
  },
  ot = S(J, [["__scopeId", "data-v-39f5135c"]]);
export { ot as default };
