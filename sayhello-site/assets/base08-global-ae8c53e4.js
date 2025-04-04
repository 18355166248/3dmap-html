import {
  A as x,
  h as g,
  i as w,
  $ as y,
  a3 as v,
  M as h,
  D as p,
  b as f,
  V as c,
  O as _,
  a4 as m,
  f as b,
  l as M,
  a5 as S,
  a6 as L,
  r as C,
  q as A,
  a7 as P,
} from "./OrbitControls-9c9ee6bc.js";
import { M as E } from "./index-1453e2ee.js";
import { D } from "./index-4ec0cc76.js";
import { s as T } from "./stats.module-077ce25d.js";
import { _ as k } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
class F extends E {
  constructor(e) {
    super(e, { isOrthographic: !0 }),
      this.camera.instance.position.set(
        31.654053063076066,
        18.17832104360899,
        31.654053063096544
      ),
      this.initRender(),
      this.initSetting(),
      this.initModel(),
      this.initEnvironment();
  }
  initEnvironment() {
    let e = new x(16777215, 0.5);
    this.scene.add(e);
    let t = new g(16777215, 0.5);
    t.position.set(10, 15, -10), (t.castShadow = !0);
    let n = new w(t, 2);
    this.scene.add(t, n);
    const a = this.debug.instance.addFolder("Environment");
    a.add(t.position, "x", -30, 30, 1),
      a.add(t.position, "y", -30, 30, 1),
      a.add(t.position, "z", -30, 30, 1),
      a.onChange((o) => {
        n.update();
      });
  }
  initRender() {
    (this.renderer.instance.shadowMap.enabled = !0),
      (this.renderer.instance.shadowMap.type = y),
      (this.renderer.instance.useLegacyLights = !0);
  }
  initSetting() {
    (this.debug = new D(!0)),
      (this.stats = new T()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10);
  }
  initModel() {
    (this.areas = [
      { name: "中国", position: [116.2, 39.55] },
      { name: "中非共和国", position: [18.35, 4.23] },
      { name: "智利", position: [-70.4, -33.24] },
      { name: "乍得", position: [14.59, 12.1] },
      { name: "赞比亚", position: [28.16, -15.28] },
      { name: "越南", position: [105.55, 21.05] },
      { name: "约旦", position: [35.52, 31.57] },
      { name: "维尔京群岛", position: [-64.37, 18.27] },
      { name: "英国", position: [-0.05, 51.36] },
    ]),
      this.createEarth(),
      this.createAreaPoint();
  }
  createEarth() {
    var e = new v(100, 50, 50),
      t = new h({ transparent: !0, side: p, opacity: 1, color: 16777215 }),
      n = new f(e, t);
    this.scene.add(n);
  }
  createAreaPoint() {
    for (let e = 0, t = this.areas.length; e < t; e++) {
      const n = this.areas[e].name,
        a = this.createPosition(this.areas[e].position);
      this.createTextCanvas(a, n);
    }
  }
  createPosition(e) {
    let t = new P();
    t.radius = 100;
    const n = e[0],
      a = e[1],
      o = (n + 90) * (Math.PI / 180),
      s = (90 - a) * (Math.PI / 180);
    (t.phi = s), (t.theta = o);
    let i = new c();
    return i.setFromSpherical(t), i;
  }
  createHexagon(e) {
    var t = new _();
    let n = new m(2, 6),
      a = new m(1, 6);
    n.vertices.shift();
    let s = new h({ color: 16776960, side: p, opacity: 0.5 }),
      i = new b(n, s),
      r = new f(a, s);
    i.position.copy(e),
      r.position.copy(e),
      r.lookAt(new c(0, 0, 0)),
      i.lookAt(new c(0, 0, 0)),
      t.add(i),
      t.add(r),
      this.scene.add(t);
  }
  createTextCanvas(e, t) {
    let n = 200,
      a = 100,
      o = document.createElement("canvas"),
      s = o.getContext("2d");
    (o.width = n),
      (o.height = a),
      s.scale(-1, 1),
      s.translate(-n, 0),
      (s.fillStyle = "red"),
      s.fillRect(0, 0, n, a),
      (s.fillStyle = "#ffffff"),
      (s.font = a / 2 + 'px "微软雅黑"'),
      (s.textAlign = "center"),
      s.fillText(t, a, a / 2 + 20);
    let i = o.toDataURL("image/png"),
      r = new M(6, 3),
      l = new h({ map: new S().load(i), side: p, opacity: 1 }),
      d = new f(r, l);
    d.position.copy(e), d.lookAt(new c(0, 0, 0)), this.scene.add(d);
  }
  createTxt(e, t) {
    var n = new L(o()),
      a = new C(new A({ map: n }));
    (a.scale.x = 10),
      (a.scale.y = 5),
      (a.position.x = e.x > 0 ? e.x + 2 : e.x - 2),
      (a.position.y = e.y > 0 ? e.y + 2 : e.y - 2),
      (a.position.z = e.z > 0 ? e.z + 2 : e.z - 2),
      this.scene.add(a);
    function o() {
      let s = 600,
        i = 300,
        r = document.createElement("canvas"),
        l = r.getContext("2d");
      return (
        (r.width = s),
        (r.height = i),
        (l.fillStyle = "red"),
        l.fillRect(0, 0, s, i),
        (l.fillStyle = "black"),
        (l.font = i / 3 + 'px "微软雅黑"'),
        (l.textAlign = "center"),
        l.fillText(t, s / 2, i / 2 + 20),
        r
      );
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
const H = { id: "canvas" },
  I = {
    __name: "base08-global",
    setup(u) {
      let e = null;
      return (
        onMounted(() => {
          e = new F(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (t, n) => (openBlock(), createElementBlock("canvas", H))
      );
    },
  },
  J = k(I, [["__scopeId", "data-v-8b194fa2"]]);
export { J as default };
