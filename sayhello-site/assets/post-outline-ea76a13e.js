import {
  a as x,
  af as S,
  A as C,
  h as E,
  i as M,
  $ as _,
  m as v,
  V as P,
  k as R,
  d as l,
  b as h,
  bH as A,
  bI as L,
  l as z,
  C as B,
} from "./OrbitControls-9c9ee6bc.js";
import { M as O, R as k } from "./index-1453e2ee.js";
import { D as G } from "./index-4ec0cc76.js";
import { S as T } from "./SkyBox-813c1e20.js";
import { s as D } from "./stats.module-077ce25d.js";
import {
  S as H,
  b as j,
  c as F,
  d as I,
  O as V,
  B as g,
  E as U,
  a as f,
  R as K,
  K as m,
} from "./index-5b3afbff.js";
import { _ as N } from "./_plugin-vue_export-helper-c27b6911.js";
import { g as W, h as X, o as Y, c as $ } from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
const q = "/sayhello-site/assets/negx-ce932018.png",
  J = "/sayhello-site/assets/negy-7a6f562a.png",
  Q = "/sayhello-site/assets/negz-1dd7efc8.png",
  Z = "/sayhello-site/assets/posx-444432ef.png",
  ee = "/sayhello-site/assets/posy-beb821ca.png",
  te = "/sayhello-site/assets/posz-f3f3e5cc.png",
  p = new x();
class se extends O {
  constructor(e) {
    super(e, { isOrthographic: !1 }),
      this.camera.instance.position.set(
        31.654053063076066,
        18.17832104360899,
        31.654053063096544
      ),
      (this.raycaster = new S()),
      (this.selectedObject = null),
      (this.effect = null),
      this.initAssets(() => {
        this.initRender(),
          this.initSetting(),
          this.initSky(),
          this.initModel(),
          this.initEnvironment(),
          this.initPost();
      });
  }
  initAssets(e) {
    (this.assets = new k()),
      this.assets.loadAll([
        { type: "Texture", name: "negx", path: q },
        { type: "Texture", name: "negy", path: J },
        { type: "Texture", name: "negz", path: Q },
        { type: "Texture", name: "posx", path: Z },
        { type: "Texture", name: "posy", path: ee },
        { type: "Texture", name: "posz", path: te },
      ]),
      this.assets.on("onLoad", () => {
        e && e();
      });
  }
  initEnvironment() {
    let e = new C(16777215, 0.5);
    this.scene.add(e);
    let t = new E(16777215, 0.5);
    t.position.set(10, 15, -10), (t.castShadow = !0);
    let i = new M(t, 2);
    this.scene.add(t, i);
    const s = this.debug.instance.addFolder("Environment");
    s.add(t.position, "x", -30, 30, 1),
      s.add(t.position, "y", -30, 30, 1),
      s.add(t.position, "z", -30, 30, 1),
      s.onChange((d) => {
        i.update();
      });
  }
  initRender() {
    (this.renderer.instance.shadowMap.enabled = !0),
      (this.renderer.instance.shadowMap.type = _),
      this.renderer.instance.domElement.addEventListener("pointerdown", this);
  }
  initSetting() {
    (this.debug = new G(!0)),
      (this.stats = new D()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10);
  }
  initSky() {
    let e = ["posx", "negx", "posy", "negy", "posz", "negz"],
      t = {};
    e.map((s) => {
      (t[s] = this.assets.getResource(s)), (t[s].colorSpace = v);
    }),
      new T({ size: 500, position: new P(0, 0, 0), textures: t }).setParent(
        this.scene
      );
  }
  initModel() {
    let e = new R(0.2, 10, 0.2);
    e.translate(0, 5, 0);
    let t = new l({ color: 16777215 }),
      i = new h(e, t);
    (this.mesh = i), this.scene.add(i);
    const s = new h(new A(1, 1, 4, 8), new l({ color: 65280 }));
    s.position.set(-4, 1, -4), this.scene.add(s);
    const d = new h(new L(1, 2, 32), new l({ color: 16776960 }));
    d.position.set(4, 1, 4), this.scene.add(d);
    let r = new h(new z(20, 20, 1), new l({ color: 16777215 }));
    r.rotateX(-Math.PI / 2), (this.plane = r), this.scene.add(r);
  }
  async initPost() {
    const [e, t] = await new H().generate(),
      i = new j(e, t, F.MEDIUM, I.COLOR);
    i.edgeDetectionMaterial.edgeDetectionThreshold = 0.05;
    const s = new V(this.scene, this.camera.instance, {
      blendFunction: g.ADD,
      edgeStrength: 8,
      pulseSpeed: 0,
      multisampling: 0,
      visibleEdgeColor: 3763936,
      hiddenEdgeColor: 3763936,
      height: 240,
      opacity: 1,
      blur: !0,
      xRay: !0,
    });
    (s.blurPass.enabled = !0),
      (s.blurPass.blurMaterial.kernelSize = 3),
      (s.blendMode.opacity.value = 1);
    const d = new U(this.renderer.instance),
      r = new f(this.camera.instance, i),
      y = new f(this.camera.instance, s);
    d.addPass(new K(this.scene, this.camera.instance)),
      d.addPass(y),
      d.addPass(r);
    const a = s;
    (this.effect = a),
      a.selection.set([this.mesh]),
      (this.renderer.composer = d);
    const u = new B(),
      w = a.uniforms,
      c = a.blendMode,
      o = {
        enabled: !0,
        resolution: a.height,
        blurriness: 0,
        "pulse speed": a.pulseSpeed,
        "edge strength": a.edgeStrength,
        "visible edge": u.copyLinearToSRGB(a.visibleEdgeColor).getHex(),
        "hidden edge": u.copyLinearToSRGB(a.hiddenEdgeColor).getHex(),
        "x-ray": !0,
        opacity: c.opacity.value,
        "blend mode": c.blendFunction,
      };
    (this.renderer.postprocessing = o.enabled),
      this.debug.instance.add(o, "enabled").onChange((n) => {
        this.renderer.postprocessing = n;
      }),
      this.debug.instance
        .add(o, "resolution", [240, 360, 480, 720, 1080])
        .onChange((n) => {
          a.resolution.height = Number(n);
        }),
      this.debug.instance.add(a, "multisampling", [0, 2, 4]),
      this.debug.instance
        .add(o, "blurriness", m.VERY_SMALL, m.HUGE + 1, 1)
        .onChange((n) => {
          (a.blurPass.enabled = n > 0),
            (a.blurPass.blurMaterial.kernelSize = n - 1);
        }),
      this.debug.instance.add(o, "edge strength", 0, 10, 0.01).onChange((n) => {
        w.get("edgeStrength").value = n;
      }),
      this.debug.instance.add(o, "pulse speed", 0, 2, 0.01).onChange((n) => {
        a.pulseSpeed = n;
      }),
      this.debug.instance.addColor(o, "visible edge").onChange((n) => {
        a.visibleEdgeColor.setHex(n).convertSRGBToLinear();
      }),
      this.debug.instance.addColor(o, "hidden edge").onChange((n) => {
        a.hiddenEdgeColor.setHex(n).convertSRGBToLinear();
      }),
      this.debug.instance.add(a, "xRay"),
      this.debug.instance.add(o, "opacity", 0, 1, 0.01).onChange((n) => {
        c.opacity.value = n;
      }),
      this.debug.instance.add(o, "blend mode", g).onChange((n) => {
        c.blendFunction = Number(n);
      });
  }
  handleSelection() {
    const e = this.effect.selection,
      t = this.selectedObject;
    t !== null && (e.has(t) ? e.delete(t) : e.add(t));
  }
  handleEvent(e) {
    switch (e.type) {
      case "pointerdown":
        this.raycast(e), this.handleSelection();
        break;
    }
  }
  raycast(e) {
    const t = this.raycaster;
    (p.x = (e.clientX / window.innerWidth) * 2 - 1),
      (p.y = -(e.clientY / window.innerHeight) * 2 + 1),
      t.setFromCamera(p, this.camera.instance);
    const i = t.intersectObjects(this.scene.children, !0);
    if (((this.selectedObject = null), i.length > 0)) {
      const s = i[0].object;
      s !== void 0 && (this.selectedObject = s);
    }
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
const ne = { id: "canvas" },
  ae = {
    __name: "post-outline",
    setup(b) {
      let e = null;
      return (
        W(() => {
          e = new se(document.getElementById("canvas"));
        }),
        X(() => {
          e && e.destroy();
        }),
        (t, i) => (Y(), $("canvas", ne))
      );
    },
  },
  ge = N(ae, [["__scopeId", "data-v-26c4d058"]]);
export { ge as default };
