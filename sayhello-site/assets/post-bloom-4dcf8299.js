import {
  a as p,
  af as m,
  A as u,
  h as f,
  i as g,
  $ as y,
  m as b,
  V as w,
  k as x,
  d as r,
  b as d,
  bH as M,
  bI as _,
  G as S,
  bc as B,
} from "./OrbitControls-9c9ee6bc.js";
import { M as C, R as v } from "./index-1453e2ee.js";
import { D as E } from "./index-4ec0cc76.js";
import { S as P } from "./SkyBox-813c1e20.js";
import { s as A } from "./stats.module-077ce25d.js";
import {
  n as k,
  a as j,
  b as D,
  p as O,
  c as R,
  d as T,
} from "./posz-6460875f.js";
import {
  S as F,
  b as L,
  c as z,
  d as G,
  e as H,
  B as l,
  E as I,
  a as N,
  R as U,
} from "./index-5b3afbff.js";
import { _ as V } from "./_plugin-vue_export-helper-c27b6911.js";
import { g as W, h as X, o as Y, c as $ } from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
const c = new p();
class q extends C {
  constructor(e) {
    super(e, { isOrthographic: !1 }),
      this.camera.instance.position.set(
        31.654053063076066,
        18.17832104360899,
        31.654053063096544
      ),
      (this.raycaster = new m()),
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
    (this.assets = new v()),
      this.assets.loadAll([
        { type: "Texture", name: "negx", path: k },
        { type: "Texture", name: "negy", path: j },
        { type: "Texture", name: "negz", path: D },
        { type: "Texture", name: "posx", path: O },
        { type: "Texture", name: "posy", path: R },
        { type: "Texture", name: "posz", path: T },
      ]),
      this.assets.on("onLoad", () => {
        e && e();
      });
  }
  initEnvironment() {
    let e = new u(16777215, 0.5);
    this.scene.add(e);
    let s = new f(16777215, 0.5);
    s.position.set(10, 15, -10), (s.castShadow = !0);
    let t = new g(s, 2);
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
      (this.renderer.instance.shadowMap.type = y),
      (this.renderer.instance.antialias = !1),
      this.renderer.instance.domElement.addEventListener("pointerdown", this);
  }
  initSetting() {
    (this.debug = new E(!0)),
      (this.stats = new A()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10);
  }
  initSky() {
    let e = ["posx", "negx", "posy", "negy", "posz", "negz"],
      s = {};
    e.map((n) => {
      (s[n] = this.assets.getResource(n)), (s[n].colorSpace = b);
    }),
      new P({ size: 500, position: new w(0, 0, 0), textures: s }).setParent(
        this.scene
      );
  }
  initModel() {
    let e = new x(0.2, 10, 0.2);
    e.translate(0, 5, 0);
    let s = new r({ color: 16777215 }),
      t = new d(e, s);
    const n = new d(new M(1, 1, 4, 8), new r({ color: 65280 }));
    n.position.set(-4, 1, -4);
    const i = new d(new _(1, 2, 32), new r({ color: 16776960 }));
    i.position.set(4, 1, 4);
    let o = new S();
    this.scene.add(o), o.add(t, n, i), (this.object = o);
  }
  async initPost() {
    const [e, s] = await new F().generate(),
      t = new L(e, s, z.MEDIUM, G.COLOR);
    t.edgeDetectionMaterial.edgeDetectionThreshold = 0.01;
    const n = new H(this.scene, this.camera.instance, {
      blendFunction: l.ADD,
      mipmapBlur: !0,
      luminanceThreshold: 0.4,
      luminanceSmoothing: 0.2,
      intensity: 3,
    });
    (n.inverted = !1),
      (n.luminancePass.enabled = !1),
      n.selection.set(this.object.children);
    const i = new I(this.renderer.instance, { frameBufferType: B }),
      o = new N(this.camera.instance, t, n);
    i.addPass(new U(this.scene, this.camera.instance)),
      i.addPass(o),
      (this.effect = n),
      (this.pass = o),
      (this.renderer.composer = i),
      (this.renderer.postprocessing = !0),
      this.registerOptions(this.debug.instance);
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
      e.add(i, "blend mode", l).onChange((a) => {
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
    (c.x = (e.clientX / window.innerWidth) * 2 - 1),
      (c.y = -(e.clientY / window.innerHeight) * 2 + 1),
      s.setFromCamera(c, this.camera.instance);
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
const J = { id: "canvas" },
  K = {
    __name: "post-bloom",
    setup(h) {
      let e = null;
      return (
        W(() => {
          e = new q(document.getElementById("canvas"));
        }),
        X(() => {
          e && e.destroy();
        }),
        (s, t) => (Y(), $("canvas", J))
      );
    },
  },
  de = V(K, [["__scopeId", "data-v-48d4ab70"]]);
export { de as default };
