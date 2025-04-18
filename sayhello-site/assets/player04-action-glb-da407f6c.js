import {
  C as l,
  g as r,
  bx as h,
  A as p,
  h as m,
  i as d,
  b as u,
  l as g,
  ae as f,
  D as y,
  a1 as b,
  by as x,
  bE as i,
} from "./OrbitControls-9c9ee6bc.js";
import { R as w, M as _ } from "./index-1453e2ee.js";
import { D as v } from "./index-4ec0cc76.js";
import { J as A } from "./index-14e47768.js";
import { s as k } from "./stats.module-077ce25d.js";
import {
  p as T,
  n as L,
  a as I,
  b as M,
  c as N,
  d as P,
} from "./negz-6d72d730.js";
import { F as R } from "./FBXLoader-a384905d.js";
import { _ as S } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  g as B,
  h as W,
  o as C,
  c as D,
  p as j,
  i as E,
  b as F,
} from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
const H = "/sayhello-site/assets/animateAll-4e451c6f.glb";
class z {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new w()),
      this.instance.addLoader(R, "FBXLoader"),
      this.instance.on("onProgress", (t, s, n) => {
        let c = ((s / n) * 100).toFixed(2) + "%!";
        console.log(c);
      }),
      this.instance.on("onLoad", () => {
        console.log("资源加载完成"),
          this.onLoadCallback && this.onLoadCallback();
      });
    let e = [
      { type: "GLTF", name: "animateAll", path: H },
      { type: "Texture", name: "posx", path: T },
      { type: "Texture", name: "negx", path: L },
      { type: "Texture", name: "posy", path: I },
      { type: "Texture", name: "negy", path: M },
      { type: "Texture", name: "posz", path: N },
      { type: "Texture", name: "negz", path: P },
    ];
    this.instance.loadAll(e);
  }
}
class G {
  constructor({ assets: e, time: t, scene: s }) {
    (this.assets = e),
      (this.time = t),
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
    let e = this.assets.instance.getResource("animateAll");
    this.state.mixer = new x(e.scene);
    let t = e.animations[0];
    (this.state.anims = {
      Idle: this.state.mixer.clipAction(i.subclip(t, "Idle", 0, 251)),
      Running: this.state.mixer.clipAction(i.subclip(t, "Running", 350, 369)),
      LeftTurn: this.state.mixer.clipAction(i.subclip(t, "LeftTurn", 380, 408)),
      RightTurn: this.state.mixer.clipAction(
        i.subclip(t, "RightTurn", 410, 438)
      ),
      Walking: this.state.mixer.clipAction(i.subclip(t, "Walking", 260, 291)),
      WalkingBackwards: this.state.mixer.clipAction(
        i.subclip(t, "WalkingBackwards", 300, 345)
      ),
    }),
      e.scene.traverse((s) => {
        s.isMesh && ((s.castShadow = !0), (s.receiveShadow = !1));
      }),
      e.scene.children[0].scale.set(1, 1, 1),
      this.scene.add(e.scene),
      (this.state.object = e.scene),
      this.state.anims.Idle.play(),
      (this.state.actionName = "Idle"),
      (this.state.actionTime = Date.now()),
      this.time.on("tick", (s) => {
        this.state.mixer && this.state.mixer.update(s),
          this.state.actionName === "Walking" &&
            Date.now() - this.state.actionTime > 1e3 &&
            this.state.move.forward > 0 &&
            this.changeAnimate("Running"),
          this.state.move && this.movePlayer(s);
      });
  }
  movePlayer(e) {
    if (this.state.move.forward > 0) {
      const t = this.state.actionName === "Running" ? 400 : 150;
      this.state.object.translateZ(t * e);
    } else this.state.move.forward < 0 && this.state.object.translateZ(-30 * e);
    this.state.object.rotateY(this.state.move.turn * e);
  }
  crossPlay(e, t) {
    e.fadeOut(0.3), t.reset(), t.setEffectiveWeight(1), t.play(), t.fadeIn(0.3);
  }
  changeAnimate(e = "Idle") {
    let t = this.state.anims[this.state.actionName];
    const s = this.state.anims[e];
    this.crossPlay(t, s),
      (this.state.actionName = e),
      (this.state.actionTime = Date.now());
  }
}
class X extends _ {
  constructor(e) {
    super(e),
      (this.player = null),
      (this.sun = null),
      this.initSetting(),
      this.initEnvironment(),
      (this.assets = new z(() => {
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
      (this.scene.fog = new r(10526880, 700, 2e3)),
      (this.debug = new v(!0)),
      (this.stats = new k()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(1e3);
  }
  initEnvironment() {
    let e = new h(16777215, 4473924);
    e.position.set(0, 200, 0), this.scene.add(e);
    let t = new p(16777215, 0.5);
    this.scene.add(t);
    let s = new m(16777215, 0.5);
    s.position.set(0, 200, 100),
      (s.castShadow = !0),
      (s.shadow.camera.top = 180),
      (s.shadow.camera.bottom = -100),
      (s.shadow.camera.left = -120),
      (s.shadow.camera.right = 120),
      (this.sun = s);
    let n = new d(s, 20);
    this.scene.add(s, n);
    const o = this.debug.instance.addFolder("Environment");
    o.add(s.position, "x", -300, 300, 1),
      o.add(s.position, "y", -300, 300, 1),
      o.add(s.position, "z", -300, 300, 1),
      o.onChange((c) => {
        n.update();
      });
  }
  createModel() {
    (this.player = new G(this)),
      (this.joyStick = new A({
        onMove: (e, t) => {
          this.playControl(e, t);
        },
        game: this,
      }));
  }
  playControl(e, t) {
    (t = -t),
      e > 0.3
        ? ["Walking", "Running"].includes(this.player.state.actionName) ||
          this.player.changeAnimate("Walking")
        : e < -0.3
        ? ["WalkingBackwards"].includes(this.player.state.actionName) ||
          this.player.changeAnimate("WalkingBackwards")
        : ((e = 0),
          Math.abs(t) > 0.1
            ? t < -0.1 && this.player.state.actionName != "RightTurn"
              ? this.player.changeAnimate("RightTurn")
              : t > 0.1 &&
                this.player.state.actionName != "LeftTurn" &&
                this.player.changeAnimate("LeftTurn")
            : this.player.state.actionName != "Idle" &&
              this.player.changeAnimate("Idle")),
      e == 0 && t == 0
        ? delete this.player.state.move
        : (this.player.state.move = { forward: e, turn: t });
  }
  createPlane() {
    const e = new u(new g(2e3, 2e3), new f({ color: 10066329, side: y }));
    e.rotateX(-Math.PI / 2);
    const t = new b(2e3, 10);
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
const J = (a) => (j("data-v-2b608c95"), (a = a()), E(), a),
  U = { class: "page" },
  Z = J(() => F("canvas", { id: "canvas" }, null, -1)),
  O = [Z],
  V = {
    __name: "player04-action-glb",
    setup(a) {
      let e = null;
      return (
        B(() => {
          e = new X(document.getElementById("canvas"));
        }),
        W(() => {
          e && e.destroy();
        }),
        (t, s) => (C(), D("div", U, O))
      );
    },
  },
  ne = S(V, [["__scopeId", "data-v-2b608c95"]]);
export { ne as default };
