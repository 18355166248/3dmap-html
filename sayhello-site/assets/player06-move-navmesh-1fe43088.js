import {
  x as D,
  V as y,
  bF as P,
  C as u,
  a2 as j,
  B as v,
  G as T,
  by as F,
  af as f,
  O as W,
  k as b,
  M as N,
  b as w,
  bG as R,
  L as Z,
  s as S,
  a9 as Y,
  bx as H,
  A as V,
  h as X,
  i as k,
  a as J,
  ac as O,
  ae as z,
  l as K,
  D as _,
  a1 as E,
} from "./OrbitControls-9c9ee6bc.js";
import {
  R as U,
  M as Q,
  V as q,
  E as $,
  b as ee,
  F as te,
  N as se,
} from "./index-1453e2ee.js";
import { D as ie } from "./index-4ec0cc76.js";
import { J as ae } from "./index-14e47768.js";
import { s as oe } from "./stats.module-077ce25d.js";
import {
  F as ne,
  P as ge,
  R as Ie,
  T as re,
  W as ce,
  a as Ae,
  b as le,
} from "./SimplePeople_FireFighter_Black-4e915471.js";
import {
  p as Ce,
  n as he,
  a as de,
  b as pe,
  c as me,
  d as ue,
} from "./negz-6d72d730.js";
import { F as ye } from "./FBXLoader-a384905d.js";
import { _ as fe } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  g as we,
  h as ve,
  o as xe,
  c as Me,
  p as be,
  i as Te,
  b as Be,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
const L =
  "data:model/gltf+json;base64,ewogICAgImFzc2V0IiA6IHsKICAgICAgICAiZ2VuZXJhdG9yIiA6ICJLaHJvbm9zIGdsVEYgQmxlbmRlciBJL08gdjMuNC40OSIsCiAgICAgICAgInZlcnNpb24iIDogIjIuMCIKICAgIH0sCiAgICAic2NlbmUiIDogMCwKICAgICJzY2VuZXMiIDogWwogICAgICAgIHsKICAgICAgICAgICAgIm5hbWUiIDogIlNjZW5lIiwKICAgICAgICAgICAgIm5vZGVzIiA6IFsKICAgICAgICAgICAgICAgIDAKICAgICAgICAgICAgXQogICAgICAgIH0KICAgIF0sCiAgICAibm9kZXMiIDogWwogICAgICAgIHsKICAgICAgICAgICAgIm1lc2giIDogMCwKICAgICAgICAgICAgIm5hbWUiIDogIlBsYW5lLjAwMSIKICAgICAgICB9CiAgICBdLAogICAgIm1lc2hlcyIgOiBbCiAgICAgICAgewogICAgICAgICAgICAibmFtZSIgOiAiUGxhbmUuMDAzIiwKICAgICAgICAgICAgInByaW1pdGl2ZXMiIDogWwogICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICJhdHRyaWJ1dGVzIiA6IHsKICAgICAgICAgICAgICAgICAgICAgICAgIlBPU0lUSU9OIiA6IDAsCiAgICAgICAgICAgICAgICAgICAgICAgICJURVhDT09SRF8wIiA6IDEsCiAgICAgICAgICAgICAgICAgICAgICAgICJOT1JNQUwiIDogMgogICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgImluZGljZXMiIDogMwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICBdCiAgICAgICAgfQogICAgXSwKICAgICJhY2Nlc3NvcnMiIDogWwogICAgICAgIHsKICAgICAgICAgICAgImJ1ZmZlclZpZXciIDogMCwKICAgICAgICAgICAgImNvbXBvbmVudFR5cGUiIDogNTEyNiwKICAgICAgICAgICAgImNvdW50IiA6IDQ2LAogICAgICAgICAgICAibWF4IiA6IFsKICAgICAgICAgICAgICAgIDg0LjY0MTI1MDYxMDM1MTU2LAogICAgICAgICAgICAgICAgMCwKICAgICAgICAgICAgICAgIDE5LjA3NjA1NzQzNDA4MjAzCiAgICAgICAgICAgIF0sCiAgICAgICAgICAgICJtaW4iIDogWwogICAgICAgICAgICAgICAgLTE5LjM5MDcwMTI5Mzk0NTMxMiwKICAgICAgICAgICAgICAgIDAsCiAgICAgICAgICAgICAgICAtMTE4LjcwMzk2NDIzMzM5ODQ0CiAgICAgICAgICAgIF0sCiAgICAgICAgICAgICJ0eXBlIiA6ICJWRUMzIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAiYnVmZmVyVmlldyIgOiAxLAogICAgICAgICAgICAiY29tcG9uZW50VHlwZSIgOiA1MTI2LAogICAgICAgICAgICAiY291bnQiIDogNDYsCiAgICAgICAgICAgICJ0eXBlIiA6ICJWRUMyIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAiYnVmZmVyVmlldyIgOiAyLAogICAgICAgICAgICAiY29tcG9uZW50VHlwZSIgOiA1MTI2LAogICAgICAgICAgICAiY291bnQiIDogNDYsCiAgICAgICAgICAgICJ0eXBlIiA6ICJWRUMzIgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAiYnVmZmVyVmlldyIgOiAzLAogICAgICAgICAgICAiY29tcG9uZW50VHlwZSIgOiA1MTIzLAogICAgICAgICAgICAiY291bnQiIDogOTAsCiAgICAgICAgICAgICJ0eXBlIiA6ICJTQ0FMQVIiCiAgICAgICAgfQogICAgXSwKICAgICJidWZmZXJWaWV3cyIgOiBbCiAgICAgICAgewogICAgICAgICAgICAiYnVmZmVyIiA6IDAsCiAgICAgICAgICAgICJieXRlTGVuZ3RoIiA6IDU1MiwKICAgICAgICAgICAgImJ5dGVPZmZzZXQiIDogMCwKICAgICAgICAgICAgInRhcmdldCIgOiAzNDk2MgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAiYnVmZmVyIiA6IDAsCiAgICAgICAgICAgICJieXRlTGVuZ3RoIiA6IDM2OCwKICAgICAgICAgICAgImJ5dGVPZmZzZXQiIDogNTUyLAogICAgICAgICAgICAidGFyZ2V0IiA6IDM0OTYyCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJidWZmZXIiIDogMCwKICAgICAgICAgICAgImJ5dGVMZW5ndGgiIDogNTUyLAogICAgICAgICAgICAiYnl0ZU9mZnNldCIgOiA5MjAsCiAgICAgICAgICAgICJ0YXJnZXQiIDogMzQ5NjIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgImJ1ZmZlciIgOiAwLAogICAgICAgICAgICAiYnl0ZUxlbmd0aCIgOiAxODAsCiAgICAgICAgICAgICJieXRlT2Zmc2V0IiA6IDE0NzIsCiAgICAgICAgICAgICJ0YXJnZXQiIDogMzQ5NjMKICAgICAgICB9CiAgICBdLAogICAgImJ1ZmZlcnMiIDogWwogICAgICAgIHsKICAgICAgICAgICAgImJ5dGVMZW5ndGgiIDogMTY1MiwKICAgICAgICAgICAgInVyaSIgOiAidG93bk5hdk1lc2guYmluIgogICAgICAgIH0KICAgIF0KfQo=";
class G {
  static roundNumber(e, t) {
    const s = Math.pow(10, t);
    return Math.round(e * s) / s;
  }
  static sample(e) {
    return e[Math.floor(Math.random() * e.length)];
  }
  static distanceToSquared(e, t) {
    var s = e.x - t.x,
      i = e.y - t.y,
      a = e.z - t.z;
    return s * s + i * i + a * a;
  }
  static isPointInPoly(e, t) {
    for (var s = !1, i = -1, a = e.length, o = a - 1; ++i < a; o = i)
      ((e[i].z <= t.z && t.z < e[o].z) || (e[o].z <= t.z && t.z < e[i].z)) &&
        t.x <
          ((e[o].x - e[i].x) * (t.z - e[i].z)) / (e[o].z - e[i].z) + e[i].x &&
        (s = !s);
    return s;
  }
  static isVectorInPolygon(e, t, s) {
    var i = 1e5,
      a = -1e5,
      o = [];
    return (
      t.vertexIds.forEach((n) => {
        (i = Math.min(s[n].y, i)), (a = Math.max(s[n].y, a)), o.push(s[n]);
      }),
      !!(e.y < a + 0.5 && e.y > i - 0.5 && this.isPointInPoly(o, e))
    );
  }
  static triarea2(e, t, s) {
    return (s.x - e.x) * (t.z - e.z) - (t.x - e.x) * (s.z - e.z);
  }
  static vequal(e, t) {
    return this.distanceToSquared(e, t) < 1e-5;
  }
  static mergeVertices(e, t = 1e-4) {
    t = Math.max(t, Number.EPSILON);
    for (
      var s = {},
        i = e.getIndex(),
        a = e.getAttribute("position"),
        o = i ? i.count : a.count,
        n = 0,
        I = [],
        g = [],
        A = Math.log10(1 / t),
        m = Math.pow(10, A),
        h = 0;
      h < o;
      h++
    ) {
      var c = i ? i.getX(h) : h,
        l = "";
      (l += ~~(a.getX(c) * m) + ","),
        (l += ~~(a.getY(c) * m) + ","),
        (l += ~~(a.getZ(c) * m) + ",") in s
          ? I.push(s[l])
          : (g.push(a.getX(c)),
            g.push(a.getY(c)),
            g.push(a.getZ(c)),
            (s[l] = n),
            I.push(n),
            n++);
    }
    const d = new j(new Float32Array(g), a.itemSize, a.normalized),
      C = new v();
    return C.setAttribute("position", d), C.setIndex(I), C;
  }
}
(function () {
  const r = new D();
  return function (e, t, s = !1) {
    if (!this.zones[e]) return null;
    let i = null,
      a = Math.pow(50, 2);
    const o = this.zones[e];
    for (let n = 0; n < o.groups.length; n++) {
      const I = o.groups[n];
      for (const g of I) {
        if (
          s &&
          (r.setFromCoplanarPoints(
            o.vertices[g.vertexIds[0]],
            o.vertices[g.vertexIds[1]],
            o.vertices[g.vertexIds[2]]
          ),
          Math.abs(r.distanceToPoint(t)) < 0.01) &&
          G.isPointInPoly(
            [
              o.vertices[g.vertexIds[0]],
              o.vertices[g.vertexIds[1]],
              o.vertices[g.vertexIds[2]],
            ],
            t
          )
        )
          return n;
        const A = G.distanceToSquared(g.centroid, t);
        A < a && ((i = n), (a = A));
      }
    }
    return i;
  };
})(),
  (function () {
    const r = new y(),
      e = new D(),
      t = new P(),
      s = new y();
    let i,
      a,
      o = new y();
    return function (n, I, g, A, m, h) {
      const c = this.zones[A].vertices,
        l = this.zones[A].groups[m],
        d = [g],
        C = {};
      (C[g.id] = 0),
        (i = void 0),
        o.set(0, 0, 0),
        (a = 1 / 0),
        e.setFromCoplanarPoints(
          c[g.vertexIds[0]],
          c[g.vertexIds[1]],
          c[g.vertexIds[2]]
        ),
        e.projectPoint(I, r),
        s.copy(r);
      for (let p = d.pop(); p; p = d.pop()) {
        t.set(c[p.vertexIds[0]], c[p.vertexIds[1]], c[p.vertexIds[2]]),
          t.closestPointToPoint(s, r),
          r.distanceToSquared(s) < a &&
            ((i = p), o.copy(r), (a = r.distanceToSquared(s)));
        const B = C[p.id];
        if (!(B > 2))
          for (let x = 0; x < p.neighbours.length; x++) {
            const M = l[p.neighbours[x]];
            M.id in C || (d.push(M), (C[M.id] = B + 1));
          }
      }
      return h.copy(o), i;
    };
  })();
new u(15631215).convertSRGBToLinear().getHex(),
  new u(14469912).convertSRGBToLinear().getHex(),
  new u(41903).convertSRGBToLinear().getHex(),
  new u(41903).convertSRGBToLinear().getHex(),
  new u(14472114).convertSRGBToLinear().getHex(),
  new u(4417387).convertSRGBToLinear().getHex();
const De = "/sayhello-site/assets/town-b48ab21d.fbx";
class ze {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new U()),
      this.instance.addLoader(ye, "FBXLoader"),
      this.instance.on("onProgress", (t, s, i) => {
        let o = ((s / i) * 100).toFixed(2) + "%!";
        console.log(o, t, s, i);
      }),
      this.instance.on("onLoad", () => {
        console.log("资源加载完成"),
          this.onLoadCallback && this.onLoadCallback();
      });
    let e = [
      { type: "FBX", name: "Town", path: De },
      { type: "FBX", name: "FireFighter", path: ne },
      { type: "FBX", name: "PointingGesture", path: ge },
      { type: "FBX", name: "Running", path: Ie },
      { type: "FBX", name: "Turn", path: re },
      { type: "FBX", name: "Walking", path: ce },
      { type: "FBX", name: "WalkingBackwards", path: Ae },
      { type: "GLTF", name: "TownNavMeshGLB", path: L },
      { type: "Texture", name: "FireFighterTexture", path: le },
      { type: "Texture", name: "posx", path: Ce },
      { type: "Texture", name: "negx", path: he },
      { type: "Texture", name: "posy", path: de },
      { type: "Texture", name: "negy", path: pe },
      { type: "Texture", name: "posz", path: me },
      { type: "Texture", name: "negz", path: ue },
    ];
    this.instance.loadAll(e);
  }
}
class Ge {
  constructor({
    assets: e,
    time: t,
    scene: s,
    camera: i,
    sun: a,
    sunHelp: o,
    colliders: n,
    startPoint: I,
  }) {
    (this.assets = e),
      (this.time = t),
      (this.scene = s),
      (this.camera = i),
      (this.sun = a),
      (this.sunHelp = o),
      (this.startPoint = I),
      (this.colliders = n),
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
    let e = new T(),
      t = this.assets.instance.getResource("FireFighter"),
      s = this.assets.instance.getResource("PointingGesture"),
      i = this.assets.instance.getResource("Running"),
      a = this.assets.instance.getResource("Turn"),
      o = this.assets.instance.getResource("Walking"),
      n = this.assets.instance.getResource("WalkingBackwards");
    (this.state.mixer = new F(t)),
      (this.state.anims = {
        Idle: this.state.mixer.clipAction(t.animations[0]),
        PointingGesture: this.state.mixer.clipAction(s.animations[0]),
        Running: this.state.mixer.clipAction(i.animations[0]),
        Turn: this.state.mixer.clipAction(a.animations[0]),
        Walking: this.state.mixer.clipAction(o.animations[0]),
        WalkingBackwards: this.state.mixer.clipAction(n.animations[0]),
      });
    let I = this.assets.instance.getResource("FireFighterTexture");
    t.traverse((g) => {
      g.isMesh &&
        ((g.material.map = I),
        (g.castShadow = !0),
        (g.receiveShadow = !1),
        g.scale.set(0.01, 0.01, 0.01));
    }),
      e.add(t),
      e.position.copy(this.startPoint),
      e.scale.set(0.01, 0.01, 0.01),
      console.log(e),
      this.scene.add(e),
      (this.state.object = e),
      this.state.anims.Idle.play(),
      (this.state.actionName = "Idle"),
      (this.state.actionTime = Date.now()),
      this.time.on("tick", (g) => {
        if (
          (this.state.mixer && this.state.mixer.update(g),
          this.state.actionName === "Walking" &&
            Date.now() - this.state.actionTime > 1e3 &&
            this.state.move.forward > 0 &&
            this.changeAnimate("Running"),
          this.state.move && this.movePlayer(g),
          this.state.cameras &&
            this.state.cameras.active &&
            !this.camera.controls.enabled)
        ) {
          this.camera.instance.position.lerp(
            this.state.cameras.active.getWorldPosition(new y()),
            0.01
          );
          const A = this.state.object.position.clone();
          (A.y += 2), (this.camera.controls.target = A);
        }
        this.sun &&
          ((this.sun.position.x = this.state.object.position.x),
          (this.sun.position.y = this.state.object.position.y + 2),
          (this.sun.position.z = this.state.object.position.z + 1),
          (this.sun.target = this.state.object),
          this.sunHelp.update());
      });
  }
  movePlayer(e) {
    const t = this.state.object.position.clone();
    t.y += 0.6;
    let s = new y();
    this.state.object.getWorldDirection(s),
      this.state.move.forward < 0 && s.negate();
    let i = new f(t, s),
      a = !1;
    const o = this.colliders;
    if (o && o.length) {
      const n = i.intersectObjects(o);
      n.length && n[0].distance < 0.5 && (a = !0);
    }
    if (!a)
      if (this.state.move.forward > 0) {
        const n = this.state.actionName === "Running" ? 40 : 15;
        this.state.object.translateZ(n * e);
      } else
        this.state.move.forward < 0 && this.state.object.translateZ(-30 * e);
    if (o && o.length) {
      s.set(-1, 0, 0),
        s.applyMatrix4(this.state.object.matrix),
        s.normalize(),
        (i = new f(t, s));
      let n = i.intersectObjects(o);
      n.length > 0 &&
        n[0].distance < 0.5 &&
        this.state.object.translateX(1 - n[0].distance),
        s.set(1, 0, 0),
        s.applyMatrix4(this.state.object.matrix),
        s.normalize(),
        (i = new f(t, s)),
        (n = i.intersectObjects(o)),
        n.length > 0 &&
          n[0].distance < 0.5 &&
          this.state.object.translateX(n[0].distance - 1),
        s.set(0, -1, 0),
        (t.y += 2),
        (i = new f(t, s));
      const I = 30;
      if (((n = i.intersectObjects(o)), n.length > 0)) {
        const g = t.y - n[0].distance;
        g > this.state.object.position.y
          ? ((this.state.object.position.y =
              0.8 * this.state.object.position.y + 0.2 * g),
            (this.state.velocityY = 0))
          : g < this.state.object.position.y &&
            (this.state.velocityY == null && (this.state.velocityY = 0),
            (this.state.velocityY += e * I),
            (this.state.object.position.y -= this.state.velocityY),
            this.state.object.position.y < g &&
              ((this.state.velocityY = 0), (this.state.object.position.y = g)));
      } else
        this.state.object.position.y > 0 &&
          (this.state.velocityY == null && (this.state.velocityY = 0),
          (this.state.velocityY += e * I),
          (this.state.object.position.y -= this.state.velocityY),
          this.state.object.position.y < 0 &&
            ((this.state.velocityY = 0), (this.state.object.position.y = 0)));
    }
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
  createCameras() {
    new y(0, 80, 0);
    const e = this.createBox("blue");
    e.position.set(1120, 100, 600);
    const t = this.createBox("red");
    t.position.set(0, 300, -600);
    const s = this.createBox("yellow");
    s.position.set(178, 139, 1665);
    const i = this.createBox("purple");
    i.position.set(0, 400, 0);
    const a = this.createBox("orange");
    a.position.set(40, 820, 940),
      this.state.object.add(e, t, s, i, a),
      (this.state.cameras = {
        front: e,
        back: t,
        wide: s,
        overhead: i,
        collect: a,
        active: null,
      }),
      (this.activeCamera = this.state.cameras.back);
  }
  createBox(e) {
    if (this.state.hideCamerasObject) return new W();
    let t = new b(10, 10, 10),
      s = new N({ color: new u(e) });
    return new w(t, s);
  }
  set activeCamera(e) {
    this.state.cameras.active = e;
  }
}
function Ne(r, e = 1, t = 5145796, s = 16777215) {
  const i = new T(),
    a = new N({ color: t }),
    o = new R(e, 2),
    n = [];
  r.getNodes(n);
  for (let c of n) {
    const l = new w(o, a);
    l.position.copy(c.position),
      (l.userData.nodeIndex = c.index),
      (l.matrixAutoUpdate = !1),
      l.updateMatrix(),
      i.add(l);
  }
  const I = new v(),
    g = [],
    A = new Z({ color: s }),
    m = [];
  for (let c of n) {
    r.getEdgesOfNode(c.index, m);
    for (let l of m) {
      const d = r.getNode(l.from),
        C = r.getNode(l.to);
      g.push(d.position.x, d.position.y, d.position.z),
        g.push(C.position.x, C.position.y, C.position.z);
    }
  }
  I.setAttribute("position", new S(g, 3));
  const h = new Y(I, A);
  return (h.matrixAutoUpdate = !1), i.add(h), i;
}
class Ze extends Q {
  constructor(e) {
    super(e),
      (this.player = null),
      (this.sun = null),
      (this.cameras = null),
      (this.startPoint = new y(0, 0, -6)),
      (this.ZONE = "island"),
      this.initSetting(),
      this.initEnvironment(),
      (this.assets = new ze(() => {
        this.createModel();
      }));
  }
  initSetting() {
    this.camera.instance.position.set(
      12.098968622262289,
      12.5229989677831,
      -18.543965187096394
    ),
      (this.camera.instance.far = 1e3),
      (this.camera.instance.near = 0.1),
      this.camera.instance.updateProjectionMatrix(),
      (this.renderer.instance.shadowMap.enabled = !0),
      (this.scene.background = new u("#a0a0a0")),
      (this.debug = new ie(!0)),
      (this.stats = new oe()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(1e3);
  }
  initEnvironment() {
    let e = new H(16777215, 4473924);
    e.position.set(0, 200, 0), this.scene.add(e);
    let t = new V(16777215, 0.5);
    this.scene.add(t);
    let s = new X(16777215, 0.5);
    s.position.set(0, 200, 100),
      (s.castShadow = !0),
      (s.shadow.camera.top = 180),
      (s.shadow.camera.bottom = -100),
      (s.shadow.camera.left = -120),
      (s.shadow.camera.right = 120),
      (this.sun = s);
    let i = new k(s, 2);
    (this.sunHelp = i), this.scene.add(s, i);
    const a = this.debug.instance.addFolder("Environment");
    a.add(s.position, "x", -300, 300, 1),
      a.add(s.position, "y", -300, 300, 1),
      a.add(s.position, "z", -300, 300, 1),
      a.onChange((o) => {
        i.update();
      });
  }
  initTown() {
    let e = this.assets.instance.getResource("Town"),
      t = new T();
    this.colliders = [];
    let s = /^proxy/i;
    e.traverse((i) => {
      i.isMesh &&
        (s.test(i.name) && ((i.material.visible = !1), this.colliders.push(i)),
        (i.castShadow = !1),
        (i.receiveShadow = !0));
    }),
      t.add(e),
      t.scale.set(0.01, 0.01, 0.01),
      this.scene.add(t);
  }
  initRaycast(e) {
    const t = new f(),
      s = new J(),
      i = this;
    this.renderer.instance.domElement.addEventListener("pointerdown", a);
    function a(o) {
      if (
        ((s.x = (o.clientX / window.innerWidth) * 2 - 1),
        (s.y = -(o.clientY / window.innerHeight) * 2 + 1),
        t.setFromCamera(s, i.camera.instance),
        !i.navMeshGroup)
      )
        return !1;
      const n = t.intersectObject(i.navMeshGroup);
      n && n.length && e && e(n[0]);
    }
  }
  createModel() {
    this.initTown(),
      (this.player = new Ge(this)),
      this.initYUKA(),
      (this.cl = !1),
      this.initRaycast((e) => {
        this.camera.controls.enabled = !1;
        let t = e.point;
        this.player.changeAnimate("Running"),
          this.findPathTo(new q().copy(t)),
          this.cl || ((this.cl = !0), console.log(this.player.state.object));
      }),
      (this.joyStick = new ae({
        onMove: (e, t) => {
          this.playControl(e, t);
        },
        onStart: () => {
          console.log("onStart"), (this.camera.controls.enabled = !1);
        },
        onEnd: () => {
          console.log("onEnd"), (this.camera.controls.enabled = !0);
        },
        game: this,
      }));
  }
  initYUKA() {
    let e = this.player.state.object;
    console.log("player", e);
    const t = new Z({ color: 16711680 });
    (this.pathHelper = new O(new v(), t)),
      (this.pathHelper.visible = !1),
      this.scene.add(this.pathHelper);
    let s = this.assets.instance.getResource("TownNavMeshGLB"),
      i = s.scene.getObjectByName("Plane001");
    console.log(s),
      new se().load(L).then((o) => {
        let n = o;
        (this.navMesh = n),
          console.log(n),
          (this.navMeshGroup = i),
          (this.navMeshGroup.material.visible = !1),
          console.log(this.navMeshGroup),
          this.scene.add(this.navMeshGroup);
        const I = n.graph;
        let g = Ne(I, 2);
        this.scene.add(g),
          (this.entityManager = new $()),
          (this.vehicle = new ee()),
          (this.vehicle.maxSpeed = 15),
          (this.vehicle.maxForce = 1e3),
          this.vehicle.setRenderComponent(e, this.sync);
        const A = new te();
        (A.active = !1),
          this.vehicle.steering.add(A),
          this.entityManager.add(this.vehicle);
      });
  }
  findPathTo(e) {
    this.player.state.object;
    const t = this.vehicle.position,
      s = e,
      i = this.navMesh.findPath(t, s);
    (this.pathHelper.visible = !0),
      this.pathHelper.geometry.dispose(),
      (this.pathHelper.geometry = new v().setFromPoints(i));
    const a = this.vehicle.steering.behaviors[0];
    (a.active = !0), a.path.clear(), console.log(i);
    for (const o of i) a.path.add(o);
  }
  sync(e, t) {
    t.quaternion.copy(e.rotation), t.position.copy(e.position);
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
            ? this.player.state.actionName != "Turn" &&
              this.player.changeAnimate("Turn")
            : this.player.state.actionName != "Idle" &&
              this.player.changeAnimate("Idle")),
      e === 0 && t === 0
        ? delete this.player.state.move
        : (this.player.state.move = { forward: e, turn: t });
  }
  createColliders() {
    this.colliders = [];
    let e = new b(500, 600, 500),
      t = new z({ color: 6710886, wireframe: !1 }),
      s = 5e3;
    for (let n = -s; n < s; n += 1e3)
      for (let I = -s; I < s; I += 1e3) {
        if (n === 0 && I === 0) continue;
        let g = new w(e, t);
        g.position.set(n, 280, I), this.colliders.push(g), this.scene.add(g);
      }
    let i = new b(500, 40, 500),
      a = new w(i, t);
    a.position.set(300, 20, 300);
    let o = a.clone();
    o.scale.set(0.5, 1, 0.5),
      o.position.set(300, 60, 300),
      this.colliders.push(a, o),
      this.scene.add(a, o);
  }
  createPlane() {
    const e = new w(new K(1e4, 1e4), new z({ color: 10066329, side: _ }));
    e.rotateX(-Math.PI / 2);
    const t = new E(2e3, 10);
    (e.receiveShadow = !0), this.scene.add(e, t);
  }
  update(e) {
    super.update(),
      this.stats && this.stats.update(),
      this.entityManager && this.entityManager.update(e);
  }
  destroy() {
    super.destroy(),
      this.debug.destroy(),
      document.body.removeChild(this.stats.dom);
  }
}
const Le = (r) => (be("data-v-7cb89d1c"), (r = r()), Te(), r),
  Pe = { class: "page" },
  je = Le(() => Be("canvas", { id: "canvas" }, null, -1)),
  Fe = [je],
  We = {
    __name: "player06-move-navmesh",
    setup(r) {
      let e = null;
      return (
        we(() => {
          e = new Ze(document.getElementById("canvas"));
        }),
        ve(() => {
          e && e.destroy();
        }),
        (t, s) => (xe(), Me("div", Pe, Fe))
      );
    },
  },
  Ee = fe(We, [["__scopeId", "data-v-7cb89d1c"]]);
export { Ee as default };
