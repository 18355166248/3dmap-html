import {
  a as u,
  af as f,
  A as g,
  h as b,
  i as y,
  $ as w,
  m as x,
  V as M,
  k as S,
  d as r,
  b as c,
  bH as _,
  bI as C,
  G as v,
} from "./OrbitControls-9c9ee6bc.js";
import { M as E, R as P } from "./index-1453e2ee.js";
import { D as B } from "./index-4ec0cc76.js";
import { S as A } from "./SkyBox-813c1e20.js";
import { s as O } from "./stats.module-077ce25d.js";
import {
  n as k,
  a as D,
  b as j,
  p as R,
  c as F,
  d as z,
} from "./posz-6460875f.js";
import {
  S as L,
  b as T,
  c as G,
  d as H,
  O as I,
  B as d,
  e as N,
  E as V,
  a as p,
  R as W,
} from "./index-5b3afbff.js";
import { _ as U } from "./_plugin-vue_export-helper-c27b6911.js";
import { g as X, h as Y, o as $, c as q } from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
const l = new u();
class J extends E {
  constructor(e) {
    super(e, { isOrthographic: !1 }),
      this.camera.instance.position.set(
        31.654053063076066,
        18.17832104360899,
        31.654053063096544
      ),
      (this.raycaster = new f()),
      (this.selectedObject = null),
      (this.effect = null),
      (this.pass = null),
      (this.object = null),
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
    (this.assets = new P()),
      this.assets.loadAll([
        { type: "Texture", name: "negx", path: k },
        { type: "Texture", name: "negy", path: D },
        { type: "Texture", name: "negz", path: j },
        { type: "Texture", name: "posx", path: R },
        { type: "Texture", name: "posy", path: F },
        { type: "Texture", name: "posz", path: z },
      ]),
      this.assets.on("onLoad", () => {
        e && e();
      });
  }
  initEnvironment() {
    let e = new g(16777215, 0.5);
    this.scene.add(e);
    let s = new b(16777215, 0.5);
    s.position.set(10, 15, -10), (s.castShadow = !0);
    let t = new y(s, 2);
    this.scene.add(s, t);
    const n = this.debug.instance.addFolder("Environment");
    n.add(s.position, "x", -30, 30, 1),
      n.add(s.position, "y", -30, 30, 1),
      n.add(s.position, "z", -30, 30, 1),
      n.onChange((i) => {
        t.update();
      });
  }
  initRender() {
    (this.renderer.instance.shadowMap.enabled = !0),
      (this.renderer.instance.shadowMap.type = w),
      (this.renderer.instance.antialias = !1),
      this.renderer.instance.domElement.addEventListener("pointerdown", this);
  }
  initSetting() {
    (this.debug = new B(!0)),
      (this.stats = new O()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10);
  }
  initSky() {
    let e = ["posx", "negx", "posy", "negy", "posz", "negz"],
      s = {};
    e.map((n) => {
      (s[n] = this.assets.getResource(n)), (s[n].colorSpace = x);
    }),
      new A({ size: 500, position: new M(0, 0, 0), textures: s }).setParent(
        this.scene
      );
  }
  initModel() {
    let e = new S(0.2, 10, 0.2);
    e.translate(0, 5, 0);
    let s = new r({ color: 16777215 }),
      t = new c(e, s);
    const n = new c(new _(1, 1, 4, 8), new r({ color: 65280 }));
    n.position.set(-4, 1, -4);
    const i = new c(new C(1, 2, 32), new r({ color: 16776960 }));
    i.position.set(4, 1, 4);
    let o = new v();
    this.scene.add(o), o.add(t, n, i), (this.object = o);
  }
  async initPost() {
    const [e, s] = await new L().generate(),
      t = new T(e, s, G.MEDIUM, H.COLOR);
    t.edgeDetectionMaterial.edgeDetectionThreshold = 0.01;
    const n = new I(this.scene, this.camera.instance, {
      blendFunction: d.ADD,
      edgeStrength: 2,
      pulseSpeed: 0,
      multisampling: 0,
      visibleEdgeColor: 16777215,
      hiddenEdgeColor: 16777215,
      height: 720,
      opacity: 1,
      blur: !1,
      xRay: !0,
    });
    (n.blurPass.enabled = !1),
      (n.blurPass.blurMaterial.kernelSize = 3),
      (n.blendMode.opacity.value = 1),
      n.selection.set(this.object.children);
    const i = new N(this.scene, this.camera.instance, {
      blendFunction: d.ADD,
      mipmapBlur: !0,
      luminanceThreshold: 0.4,
      luminanceSmoothing: 0.2,
      intensity: 3,
    });
    (i.inverted = !1),
      (i.luminancePass.enabled = !1),
      i.selection.set(this.object.children);
    const o = new V(this.renderer.instance),
      a = new p(this.camera.instance, n),
      h = new p(this.camera.instance, t, i);
    o.addPass(new W(this.scene, this.camera.instance)),
      o.addPass(a),
      o.addPass(h),
      (this.effect = i),
      (this.pass = h),
      (this.renderer.composer = o),
      (this.renderer.postprocessing = !0);
  }
  registerOptions(e) {
    const s = this.pass,
      t = this.effect,
      n = t.blendMode,
      i = {
        intensity: t.intensity,
        radius: t.mipmapBlurPass.radius,
        luminance: {
          filter: t.luminancePass.enabled,
          threshold: t.luminanceMaterial.threshold,
          smoothing: t.luminanceMaterial.smoothing,
        },
        selection: { inverted: t.inverted, "ignore bg": t.ignoreBackground },
        opacity: n.opacity.value,
        "blend mode": n.blendFunction,
      };
    e.add(i, "intensity", 0, 10, 0.01).onChange((a) => {
      t.intensity = Number(a);
    }),
      e.add(i, "radius", 0, 1, 0.001).onChange((a) => {
        t.mipmapBlurPass.radius = Number(a);
      });
    let o = e.addFolder("Luminance");
    o.add(i.luminance, "filter").onChange((a) => {
      t.luminancePass.enabled = a;
    }),
      o.add(i.luminance, "threshold", 0, 1, 0.001).onChange((a) => {
        t.luminanceMaterial.threshold = Number(a);
      }),
      o.add(i.luminance, "smoothing", 0, 1, 0.001).onChange((a) => {
        t.luminanceMaterial.smoothing = Number(a);
      }),
      o.open(),
      (o = e.addFolder("Selection")),
      o.add(i.selection, "inverted").onChange((a) => {
        t.inverted = a;
      }),
      o.add(i.selection, "ignore bg").onChange((a) => {
        t.ignoreBackground = a;
      }),
      o.open(),
      e.add(i, "opacity", 0, 1, 0.01).onChange((a) => {
        n.opacity.value = a;
      }),
      e.add(i, "blend mode", d).onChange((a) => {
        n.setBlendFunction(Number(a));
      }),
      e.add(s, "dithering").onChange((a) => {
        s.dithering = a;
      }),
      window.innerWidth < 720 && e.close();
  }
  handleSelection() {
    const e = this.effect.selection,
      s = this.selectedObject;
    s !== null && e.toggle(s), console.log(e);
  }
  handleEvent(e) {
    switch (e.type) {
      case "pointerdown":
        this.raycast(e), this.handleSelection();
        break;
    }
  }
  raycast(e) {
    const s = this.raycaster;
    (l.x = (e.clientX / window.innerWidth) * 2 - 1),
      (l.y = -(e.clientY / window.innerHeight) * 2 + 1),
      s.setFromCamera(l, this.camera.instance);
    const t = s.intersectObjects(this.object.children, !0);
    this.selectedObject = t.length > 0 ? t[0].object : null;
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
const K = { id: "canvas" },
  Q = {
    __name: "post-bloom-outline",
    setup(m) {
      let e = null;
      return (
        X(() => {
          e = new J(document.getElementById("canvas"));
        }),
        Y(() => {
          e && e.destroy();
        }),
        (s, t) => ($(), q("canvas", K))
      );
    },
  },
  de = U(Q, [["__scopeId", "data-v-ebade713"]]);
export { de as default };
