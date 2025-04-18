import {
  A as S,
  h as A,
  i as b,
  m as P,
  r as L,
  q as R,
  D as u,
  n as z,
  a3 as v,
  M as m,
  b as d,
  G as g,
  l as f,
  V as p,
  B as y,
  s as x,
  p as l,
  t as C,
} from "./OrbitControls-9c9ee6bc.js";
import { M as T, R as B } from "./index-1453e2ee.js";
import { l as D } from "./utils-9af1928d.js";
import { D as G } from "./index-4ec0cc76.js";
import {
  G as E,
  e as I,
  a as O,
  b as N,
  h as U,
  p as V,
  l as k,
} from "./光柱-48fdbf5f.js";
import { R as F } from "./RippleCirle-e198a9fe.js";
import { s as j } from "./stats.module-077ce25d.js";
import { _ as q } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
import "./index-4db78ffb.js";
const K = "/sayhello-site/assets/earth_atmos_2048-2faa400d.jpg",
  Q = "/sayhello-site/assets/earth-bump-450c801e.jpg";
class Y extends T {
  constructor(e) {
    super(e, { isOrthographic: !0 }),
      (this.camera.instance.near = 10),
      (this.camera.instance.far = 1e3),
      this.camera.instance.position.set(0, 0, 300),
      this.camera.instance.lookAt(0, 0, 0),
      this.camera.instance.updateProjectionMatrix(),
      this.initRender(),
      this.initSetting(),
      this.initEnvironment(),
      this.initAssets(() => {
        this.initModel();
      });
  }
  initEnvironment() {
    let e = new S(16777215, 2);
    this.scene.add(e);
    let a = new A(16777215, 2);
    a.position.set(10, 15, -10), (a.castShadow = !0);
    let n = new b(a, 2);
    this.scene.add(a, n);
    const t = this.debug.instance.addFolder("Environment");
    t.add(a.position, "x", -30, 30, 1),
      t.add(a.position, "y", -30, 30, 1),
      t.add(a.position, "z", -30, 30, 1),
      t.onChange((r) => {
        n.update();
      });
  }
  initAssets(e) {
    (this.assets = new B()),
      this.assets.on("onProgress", (n, t, r) => {
        let o = ((t / r) * 100).toFixed(2) + "%!";
        console.log(o, n, t, r);
      }),
      this.assets.on("onLoad", () => {
        e && e();
      });
    let a = [
      { type: "Texture", name: "earthAtmos", path: K },
      { type: "Texture", name: "earthClouds", path: I },
      { type: "Texture", name: "earthNormal", path: O },
      { type: "Texture", name: "earthBump", path: Q },
      { type: "Texture", name: "earthSpecular", path: N },
      { type: "Texture", name: "highLight", path: U },
      { type: "Texture", name: "pointLight", path: V },
      { type: "Texture", name: "lightPillar", path: k },
    ];
    this.assets.loadAll(a);
  }
  initRender() {}
  initSetting() {
    (this.debug = new G(!0)),
      (this.stats = new j()),
      document.body.appendChild(this.stats.dom);
  }
  initModel() {
    const e = this.assets.getResource("earthAtmos");
    this.assets.getResource("earthNormal");
    const a = this.assets.getResource("earthBump"),
      n = this.assets.getResource("earthSpecular"),
      t = this.assets.getResource("highLight");
    e.colorSpace = P;
    let r = new E(this, {
      globeImage: e,
      bumpImage: a,
      bumpScale: 8,
      specularImage: n,
      atmosphereAltitude: 0.1,
      atmospherePower: 5.5,
    });
    r.setParent(this.scene), (this.globe = r);
    let s = new L(
      new R({
        side: u,
        map: t,
        transparent: !0,
        alphaMap: t,
        depthTest: !1,
        blending: z,
      })
    );
    s.scale.set(100 * 2.5, 100 * 2.5, 0), (s.renderOrder = 2);
    let o = this.createRippleCirle();
    r.add(o), this.scene.add(s), this.createStars(), this.createCloud();
  }
  createCloud() {
    const n = this.assets.getResource("earthClouds"),
      t = new v(100 * 1.01, 75, 75),
      r = new m({ map: n, transparent: !0, depthTest: !1 }),
      s = new d(t, r);
    this.globe.add(s),
      this.time.on("tick", () => {
        s.rotation.y += (-0.04 * Math.PI) / 180;
      });
  }
  createLightPillar(e, a) {
    const n = new g(),
      t = this.assets.getResource("lightPillar");
    let r = 41 / 300,
      s = e / r;
    const o = new f(e, s);
    o.rotateX(Math.PI / 2), o.translate(0, 0, s / 2);
    const i = new m({
        map: t,
        transparent: !0,
        side: u,
        depthWrite: !1,
        color: a,
      }),
      h = new d(o, i),
      c = h.clone();
    return (c.rotation.z = Math.PI / 2), n.add(h, c), n;
  }
  createPointLight(e, a) {
    const n = this.assets.getResource("pointLight"),
      t = new f(e, e),
      r = new m({ map: n, transparent: !0, depthWrite: !1, color: a });
    return new d(t, r);
  }
  createRippleCirle() {
    let e = new g();
    const a = 10,
      n = [15113296, 4873057, 16733232];
    return (
      [...Array(a).keys()]
        .map((r, s) => ({
          lat: (Math.random() - 0.5) * 180,
          lng: (Math.random() - 0.5) * 360,
          maxR: Math.random() * 20 + 3,
          propagationSpeed: (Math.random() - 0.5) * 20 + 1,
          repeatPeriod: Math.random() * 2e3 + 200,
          color: n[s % 3],
        }))
        .forEach((r, s) => {
          let o = new F(this, {
            number: 3,
            radius: 3,
            frequency: 1,
            color: r.color,
          });
          o.setParent(e);
          let i = D(r.lng, r.lat, 100 * 1.02);
          o.setPosition(new p(i.x, i.y, i.z));
          var h = new p(i.x, i.y, i.z).normalize(),
            c = new p(0, 0, 1);
          o.instance.quaternion.setFromUnitVectors(c, h);
          let _ = this.createPointLight(6 * 2, r.color);
          o.instance.add(_);
          let M = this.createLightPillar(4, r.color);
          o.instance.add(M);
        }),
      e
    );
  }
  createStars() {
    const e = [new y(), new y()],
      a = [],
      n = [],
      t = new p();
    for (let s = 0; s < 250; s++)
      (t.y = Math.random() * 2 - 1),
        (t.z = Math.random() * 2 - 1),
        t.multiplyScalar(20),
        a.push(t.x, t.y, t.z);
    for (let s = 0; s < 1500; s++)
      (t.x = Math.random() * 2 - 1),
        (t.y = Math.random() * 2 - 1),
        (t.z = Math.random() * 2 - 1),
        t.multiplyScalar(10),
        n.push(t.x, t.y, t.z);
    e[0].setAttribute("position", new x(a, 3)),
      e[1].setAttribute("position", new x(n, 3));
    const r = [
      new l({ color: 10263708, size: 2, sizeAttenuation: !1 }),
      new l({ color: 10263708, size: 1, sizeAttenuation: !1 }),
      new l({ color: 8618883, size: 1, sizeAttenuation: !1 }),
      new l({ color: 5921370, size: 2, sizeAttenuation: !1 }),
      new l({ color: 5921370, size: 1, sizeAttenuation: !1 }),
    ];
    for (let s = 10; s < 30; s++) {
      const o = new C(e[s % 2], r[s % 6]);
      (o.rotation.x = Math.random() * 10),
        (o.rotation.y = Math.random() * 10),
        (o.rotation.z = Math.random() * 10),
        o.scale.setScalar(s * 10),
        (o.matrixAutoUpdate = !1),
        o.updateMatrix(),
        this.scene.add(o);
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
const Z = { id: "canvas" },
  $ = {
    __name: "earth02",
    setup(w) {
      let e = null;
      return (
        onMounted(() => {
          e = new Y(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (a, n) => (openBlock(), createElementBlock("canvas", Z))
      );
    },
  },
  pt = q($, [["__scopeId", "data-v-8f9f35f5"]]);
export { pt as default };
