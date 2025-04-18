var H = Object.defineProperty;
var J = (b, c, e) =>
  c in b
    ? H(b, c, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (b[c] = e);
var R = (b, c, e) => (J(b, typeof c != "symbol" ? c + "" : c, e), e);
import {
  F as W,
  G as m,
  V as y,
  a as N,
  M as g,
  L as C,
  S as _,
  E as Z,
  b as v,
  B as Q,
  f as U,
  O as $,
  e as K,
  v as ee,
  T as V,
  g as te,
  C as E,
  A as ae,
  h as se,
  P as ie,
  R as Y,
  m as x,
  D as re,
  r as ne,
  q as oe,
  l as S,
  n as T,
  Q as ce,
} from "./OrbitControls-9c9ee6bc.js";
import {
  R as le,
  V as pe,
  m as de,
  M as ue,
  g as he,
} from "./index-1453e2ee.js";
import { t as I, g as q } from "./utils-9af1928d.js";
import { D as Ae } from "./index-4ec0cc76.js";
import { L as me } from "./Label3d-1a598e21.js";
import { g as h } from "./index-4db78ffb.js";
import {
  f as we,
  g as fe,
  b as ge,
  q as ye,
  a as Ye,
  s as be,
} from "./pathLine-9a4e7519.js";
import { c as ve, s as Be } from "./chinaBlurLine-b7b06be6.js";
import { o as Me } from "./ocean-blue-bg-49e3ac50.js";
import {
  h as Le,
  r as xe,
  g as De,
  a as Ge,
} from "./rotationBorder1-447bf02a.js";
import { r as Ce } from "./rotationBorder2-a143eae0.js";
import { g as Ee } from "./grid-3e023ca8.js";
import { g as Se } from "./gaoguang2-46d4de0f.js";
import { f as Te } from "./flyLine2-e7135ba7.js";
import { a as Ie } from "./arrow-8777f461.js";
import { p as Pe } from "./pathLine2-dee41061.js";
import { p as Oe } from "./pathLine4-99db6c46.js";
import { L as Fe, a as Re } from "./Line2-7598ed88.js";
import { a as qe } from "./three.interactive-c6512469.js";
import {
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
  createStaticVNode,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
const Qe =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM0SURBVHgB7dYxDcIAFADRX1IprAhABiMqMMqIBwQ0Tbq1Qu49EZdbvr//OUDSbYAsAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCw5fX+nAMkOQAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIW++P5wBNDgDCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADC1m0/BmhyABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABB2AdqPCws2qdvxAAAAAElFTkSuQmCC",
  Ue = "/sayhello-site/assets/chinaMapTexture-2226e7c9.jpg",
  Ve = "/sayhello-site/assets/chinaMapBg-2a558df2.jpg",
  Xe = "/sayhello-site/assets/china-glow-128d400e.png",
  He = "/sayhello-site/assets/topFace-766bd05d.png",
  Je = "/sayhello-site/assets/point01-5a717903.png",
  We = "/sayhello-site/assets/point02-0311aabb.png";
class Ze {
  constructor(c = null) {
    (this.onLoadCallback = c), this.init();
  }
  init() {
    (this.instance = new le()),
      this.instance.addLoader(W, "FileLoader"),
      this.instance.on("onProgress", (t, a, s) => {
        let r = ((a / s) * 100).toFixed(2) + "%!";
        console.log(r, t, a, s);
      }),
      this.instance.on("onLoad", () => {
        console.log("资源加载完成"),
          this.onLoadCallback && this.onLoadCallback();
      });
    let c = "/sayhello-site/",
      e = [
        { type: "Texture", name: "flag", path: we },
        { type: "Texture", name: "grid", path: Ee },
        { type: "Texture", name: "pathLine", path: Oe },
        { type: "Texture", name: "pathLine2", path: Pe },
        { type: "Texture", name: "flyLine", path: Te },
        { type: "Texture", name: "arrow", path: Ie },
        { type: "Texture", name: "gridBlack", path: fe },
        { type: "Texture", name: "borderGlow", path: ge },
        { type: "Texture", name: "quan", path: ye },
        { type: "Texture", name: "gaoguang1", path: Ye },
        { type: "Texture", name: "gaoguang2", path: Se },
        { type: "Texture", name: "huiguang", path: Le },
        { type: "Texture", name: "rotationBorder1", path: xe },
        { type: "Texture", name: "rotationBorder2", path: Ce },
        { type: "Texture", name: "guangquan1", path: De },
        { type: "Texture", name: "guangquan2", path: Ge },
        { type: "Texture", name: "chinaBlurLine", path: ve },
        { type: "Texture", name: "ocean", path: Me },
        { type: "Texture", name: "side", path: be },
        { type: "Texture", name: "side2", path: Be },
        { type: "Texture", name: "side4", path: Qe },
        { type: "Texture", name: "topNormal", path: Ue },
        { type: "Texture", name: "chinaMapBg", path: Ve },
        { type: "Texture", name: "chinaGlow", path: Xe },
        { type: "Texture", name: "topFace", path: He },
        { type: "Texture", name: "point01", path: Je },
        { type: "Texture", name: "point02", path: We },
        {
          type: "File",
          name: "chinaStorke",
          path: c + "assets/json/中华人民共和国-轮廓-地球.json",
        },
        {
          type: "File",
          name: "china",
          path: c + "assets/json/中华人民共和国.json",
        },
        {
          type: "File",
          name: "transportPath",
          path: c + "assets/json/运输路径.json",
        },
      ];
    this.instance.loadAll(e);
  }
}
class j {
  constructor({ assets: c, time: e, geoProjection: t }, a = {}) {
    (this.geoProjection = t),
      (this.mapGroup = new m()),
      (this.assets = c),
      (this.time = e),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new y(0, 0, 0),
          center: new N(0, 0),
          data: "",
          renderOrder: 1,
          lineRenderOrder: 2,
          topFaceMaterial: new g({
            color: 1582651,
            transparent: !0,
            opacity: 1,
          }),
          sideMaterial: new g({ color: 464171, transparent: !0, opacity: 1 }),
          lineMaterial: new C({ color: 2868444 }),
          depth: 0.1,
        },
        a
      )),
      this.mapGroup.position.copy(this.config.position);
    let s = I(this.config.data);
    this.create(s);
  }
  create(c) {
    let { depth: e, renderOrder: t } = this.config,
      a = new m();
    c.features.forEach((s, i) => {
      let {
        name: r,
        center: n = [],
        centroid: l = [],
        adcode: o,
      } = s.properties;
      this.coordinates.push({
        name: r,
        center: n,
        centroid: l,
        adcode: o,
        enName: "",
        value: 0,
      });
      const d = new m();
      (d.name = "meshGroup" + i),
        (d.userData.index = i),
        (d.userData.depth = this.config.depth),
        (d.userData.name = r),
        (d.userData.adcode = o);
      let p = new m();
      (p.name = "lineGroup" + i),
        (p.userData.index = i),
        (p.userData.adcode = o);
      const A = {
        depth: this.config.depth,
        bevelEnabled: !0,
        bevelSegments: 1,
        bevelThickness: 0.1,
      };
      let u = [this.config.topFaceMaterial.clone(), this.config.sideMaterial];
      s.geometry.coordinates.forEach((B) => {
        B.forEach((f, P) => {
          const D = new _();
          for (let L = 0; L < f.length; L++) {
            if (!f[L][0] || !f[L][1] || f[L].length > 2) return !1;
            const [O, F] = this.geoProjection(f[L]);
            L === 0 && D.moveTo(O, -F), D.lineTo(O, -F);
          }
          const X = new Z(D, A),
            G = new v(X, u);
          (G.userData.depth = e),
            (G.userData.name = r),
            (G.userData.adcode = o),
            (G.renderOrder = t),
            d.add(G);
        });
        const w = [];
        let M = null;
        B[0].forEach((f) => {
          const [P, D] = this.geoProjection(f);
          w.push(new y(P, -D, 0)), (M = this.createLine(w));
        }),
          p.add(M);
      }),
        a.add(p),
        p.position.set(0, 0, this.config.depth + 0.11),
        d.add(p),
        this.mapGroup.add(d);
    });
  }
  createLine(c) {
    const e = new Q();
    e.setFromPoints(c);
    let t = new U(e, this.config.lineMaterial);
    return (
      (t.renderOrder = this.config.lineRenderOrder), (t.name = "mapLine"), t
    );
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(c) {
    c.add(this.mapGroup);
  }
}
class $e {
  constructor({ geoProjection: c }, e = {}) {
    (this.geoProjection = c),
      (this.mapGroup = new m()),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new pe(0, 0, 0),
          center: new N(0, 0),
          data: "",
          renderOrder: 1,
          merge: !1,
          depth: 0,
          material: new g({ color: 1582651, transparent: !0, opacity: 1 }),
        },
        e
      )),
      this.mapGroup.position.copy(this.config.position);
    let t = I(this.config.data);
    this.create(t);
  }
  create(c) {
    let { depth: e, merge: t, renderOrder: a } = this.config,
      s = [];
    if (
      (c.features.forEach((i) => {
        const r = new $();
        let {
          name: n,
          adcode: l,
          center: o = [],
          centroid: d = [],
        } = i.properties;
        this.coordinates.push({ name: n, adcode: l, center: o, centroid: d }),
          i.geometry.coordinates.forEach((p) => {
            p.forEach((A) => {
              const u = new _();
              for (let w = 0; w < A.length; w++) {
                if (!A[w][0] || !A[w][1]) return !1;
                const [M, f] = this.geoProjection(A[w]);
                w === 0 && u.moveTo(M, -f), u.lineTo(M, -f);
              }
              const B = new K(u);
              if (t) s.push(B);
              else {
                const w = new v(B, this.config.material);
                (w.renderOrder = a),
                  (w.userData.depth = e),
                  (w.userData.name = n),
                  (w.userData.adcode = l),
                  r.add(w);
              }
            });
          }),
          t || this.mapGroup.add(r);
      }),
      t)
    ) {
      let i = de(s);
      const r = new v(i, this.config.material);
      (r.renderOrder = this.config.renderOrder), this.mapGroup.add(r);
    }
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(c) {
    c.add(this.mapGroup);
  }
}
class k {
  constructor({ geoProjection: c }, e = {}) {
    (this.geoProjection = c),
      (this.config = Object.assign(
        {
          visibelProvince: "",
          center: [0, 0],
          position: new y(0, 0, 0),
          data: "",
          material: new C({ color: 16777215 }),
          type: "LineLoop",
          renderOrder: 1,
        },
        e
      ));
    let t = I(this.config.data),
      a = this.create(t);
    (this.lineGroup = a), this.lineGroup.position.copy(this.config.position);
  }
  create(c) {
    const { type: e, visibelProvince: t } = this.config;
    let a = c.features,
      s = new m();
    for (let i = 0; i < a.length; i++) {
      const r = a[i];
      let n = new m();
      (n.name = "meshLineGroup" + i),
        r.properties.name !== t &&
          (r.geometry.coordinates.forEach((l) => {
            const o = [];
            let d = null;
            e === "Line2"
              ? (l[0].forEach((p) => {
                  const [A, u] = this.geoProjection(p);
                  o.push(A, -u, 0);
                }),
                (d = this.createLine2(o)))
              : e === "Line3"
              ? (l[0].forEach((p) => {
                  const [A, u] = this.geoProjection(p);
                  o.push(new y(A, -u, 0));
                }),
                (d = this.createLine3(o)))
              : l[0].forEach((p) => {
                  const [A, u] = this.geoProjection(p);
                  o.push(new y(A, -u, 0)), (d = this.createLine(o));
                }),
              n.add(d);
          }),
          s.add(n));
    }
    return s;
  }
  createLine3(c) {
    const { material: i, renderOrder: r } = this.config,
      n = new ee(c),
      l = new V(n, 2560, 0.2, 4, !1),
      o = new v(l, i);
    return (o.name = "mapLine3"), (o.renderOrder = r), o;
  }
  createLine2(c) {
    const { material: e, renderOrder: t } = this.config,
      a = new Fe();
    a.setPositions(c);
    let s = new Re(a, e);
    return (
      (s.name = "mapLine2"), (s.renderOrder = t), s.computeLineDistances(), s
    );
  }
  createLine(c) {
    const { material: e, renderOrder: t, type: a } = this.config,
      s = new Q();
    s.setFromPoints(c);
    let i = new U(s, e);
    return (i.renderOrder = t), (i.name = "mapLine"), i;
  }
  setParent(c) {
    c.add(this.lineGroup);
  }
}
const z = [
  {
    name: "深圳总部",
    centroid: [114.143142, 22.643377],
    adcode: 44e4,
    start: !0,
  },
  { name: "呼和浩特", centroid: [114.077429, 44.331087], adcode: 15e4 },
  { name: "上海", centroid: [121.438737, 31.072559], adcode: 31e4 },
  { name: "南昌", centroid: [112.271301, 30.987527], adcode: 42e4 },
  { name: "长沙", centroid: [111.711649, 27.629216], adcode: 43e4 },
  { name: "福田", centroid: [112.429919, 23.234643], adcode: 44e4 },
  { name: "广西", centroid: [108.7944, 23.833381], adcode: 45e4 },
  { name: "成都", centroid: [102.693453, 30.674545], adcode: 51e4 },
];
class Ke extends ue {
  constructor(e, t) {
    super(e, t);
    R(this, "geoProjection", (e) =>
      he().center(this.pointCenter).scale(120).translate([0, 0])(e)
    );
    (this.pointCenter = [108.55, 34.32]),
      (this.flyLineCenter = [114.143142, 22.643377]),
      (this.depth = 5),
      (this.clicked = !1),
      (this.scene.fog = new te(0, 1, 250)),
      (this.scene.background = new E(0)),
      this.camera.instance.position.set(
        2366776247217723e-20,
        225.1025284992283,
        0.0002238648924037432
      ),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.updateProjectionMatrix(),
      this.renderer.resize(),
      (this.interactionManager = new qe(
        this.renderer.instance,
        this.camera.instance,
        this.canvas
      )),
      (this.debug = new Ae(!0)),
      this.initEnvironment(),
      (this.assets = new Ze(() => {
        (this.sceneGroup = new m()),
          (this.labelGroup = new m()),
          (this.gqGroup = new m()),
          (this.provinceNameGroup = new m()),
          (this.badgeGroup = new m()),
          (this.label3d = new me(this)),
          this.sceneGroup.rotateX(-Math.PI / 2),
          this.sceneGroup.add(
            this.labelGroup,
            this.gqGroup,
            this.provinceNameGroup,
            this.badgeGroup
          ),
          this.scene.add(this.sceneGroup),
          this.createMapBg(),
          this.createModel(),
          this.addEvent(),
          this.createMapLabel(),
          this.createFlyLine(),
          this.createBorderGlow();
        let a = h.timeline();
        a.addLabel("focusMap", 0),
          a.addLabel("focusMapOpacity", 2),
          a.addLabel("bar", 3),
          a.add(
            h.to(this.camera.instance.position, {
              duration: 2.5,
              x: 7.9054061316192135,
              y: 73.47690004910885,
              z: 81.1764201439928,
              ease: "circ.out",
            })
          ),
          a.add(
            h.to(this.focusMapGroup.position, {
              duration: 1,
              x: 0,
              y: 0,
              z: 0,
            }),
            "focusMap"
          ),
          a.add(
            h.to(this.focusMapGroup.scale, {
              duration: 1,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMap"
          ),
          a.add(
            h.to(this.flyLineGroup.children[0].material, {
              duration: 3,
              opacity: 1,
              ease: "circ.out",
              onStart: () => {
                this.flyLineGroup.visible = !0;
              },
              onComplete: () => {
                this.flyLineFocusGroup.visible = !0;
              },
            }),
            "focusMapOpacity"
          ),
          this.chinaMesh.mapGroup.traverse((s) => {
            s.isMesh &&
              (a.add(
                h.to(s.material[0], {
                  duration: 1,
                  opacity: 0.2,
                  ease: "circ.out",
                }),
                "focusMapOpacity"
              ),
              a.add(
                h.to(s.position, {
                  duration: 1,
                  x: 0,
                  y: 0,
                  z: 0,
                  ease: "circ.out",
                }),
                "focusMapOpacity"
              ));
          }),
          a.add(
            h.to(this.focusMapSideMaterial, {
              duration: 1,
              opacity: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          a.add(
            h.to(this.chinaLineMaterial, {
              duration: 0.5,
              delay: 0.3,
              opacity: 1,
            }),
            "focusMapOpacity"
          ),
          a.add(
            h.to(this.borderGlow.material, {
              duration: 0.5,
              delay: 0.3,
              opacity: 1,
              onComplete: () => {
                this.createStorke();
              },
            }),
            "focusMapOpacity"
          ),
          this.allBar.map((s, i) => {
            a.add(
              h.to(s.scale, {
                duration: 1,
                delay: 0.05 * i,
                x: s.userData.scale,
                y: s.userData.scale,
                z: s.userData.scale,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allProvinceLabel.map((s, i) => {
            let r = s.element.querySelector(".provinces-label-style02-wrap"),
              n = s.element.querySelector(".number .value"),
              l = Number(n.innerText),
              o = { score: 0 };
            a.add(
              h.to(r, {
                duration: 0.5,
                delay: 0.05 * i,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
            let d = h.to(o, {
              duration: 0.5,
              delay: 0.05 * i,
              score: l,
              onUpdate: p,
            });
            function p() {
              n.innerText = o.score.toFixed(0);
            }
            a.add(d, "bar");
          }),
          this.allProvinceNameLabel.map((s, i) => {
            let r = s.element.querySelector(".provinces-name-label-wrap");
            a.add(
              h.to(r, {
                duration: 0.5,
                delay: 0.05 * i,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allGuangquan.map((s, i) => {
            a.add(
              h.to(s.children[0].scale, {
                duration: 0.5,
                delay: 0.05 * i,
                x: s.userData.scale,
                y: s.userData.scale,
                z: s.userData.scale,
                ease: "circ.out",
              }),
              "bar"
            ),
              a.add(
                h.to(s.children[1].scale, {
                  duration: 0.5,
                  delay: 0.05 * i,
                  x: s.userData.scale,
                  y: s.userData.scale,
                  z: s.userData.scale,
                  ease: "circ.out",
                }),
                "bar"
              );
          });
      }));
  }
  initEnvironment() {
    let e = new ae(16777215, 2);
    this.scene.add(e);
    let t = new se(16777215, 4);
    t.position.set(-30, 6, -8),
      (t.castShadow = !0),
      (t.shadow.radius = 20),
      (t.shadow.mapSize.width = 1024),
      (t.shadow.mapSize.height = 1024),
      this.scene.add(t),
      this.createPointLight({
        color: "#0e81fb",
        intensity: 160,
        distance: 1e4,
        x: -3,
        y: 16,
        z: -3,
      }),
      this.createPointLight({
        color: "#1f5f7a",
        intensity: 100,
        distance: 100,
        x: -4,
        y: 8,
        z: 43,
      });
  }
  createPointLight(e) {
    const t = new ie(1924702, e.intensity, e.distance, 1);
    t.position.set(e.x, e.y, e.z), this.scene.add(t);
  }
  createModel() {
    let e = new m(),
      t = new m();
    this.focusMapGroup = t;
    let {
      china: a,
      chinaTopLine: s,
      chinaMapTopArea: i,
    } = this.createFocusMap();
    (this.chinaMesh = a),
      a.setParent(t),
      s.setParent(t),
      i.setParent(t),
      t.position.set(0, 0, -5),
      t.scale.set(1, 1, 0),
      e.add(t),
      e.rotateX(-Math.PI / 2),
      e.position.set(0, 0.2, 0),
      this.scene.add(e);
  }
  createFocusMap() {
    let e = this.assets.instance.getResource("chinaStorke"),
      t = this.assets.instance.getResource("china"),
      a = this.assets.instance.getResource("topNormal");
    (a.wrapS = a.wrapT = Y),
      (this.chinaLineMaterial = new C({
        color: 16777215,
        opacity: 0,
        transparent: !0,
        fog: !1,
      }));
    let [s, i] = this.createFocusMapMaterial();
    (this.focusMapTopMaterial = s), (this.focusMapSideMaterial = i);
    let r = new j(this, {
        center: this.pointCenter,
        position: new y(0, 0, 0.06),
        data: e,
        depth: this.depth,
        topFaceMaterial: s,
        sideMaterial: i,
        lineMaterial: this.chinaLineMaterial,
        renderOrder: 9,
      }),
      { boxSize: n, box3: l } = q(r.mapGroup);
    (this.eventElement = []),
      r.mapGroup.children.map((p, A) => {
        p.children.map((u) => {
          u.type === "Mesh" &&
            this.calcUv2(u.geometry, n.x, n.y, l.min.x, l.min.y);
        });
      });
    let o = new k(this, {
      center: this.pointCenter,
      data: t,
      material: new C({ color: 4083571, fog: !1 }),
      renderOrder: 3,
    });
    o.lineGroup.position.z += this.depth;
    let d = new $e(this, {
      center: this.pointCenter,
      position: new y(0, 0, this.depth),
      data: t,
      merge: !1,
      material: new g({
        color: new E("rgb(41,159,255)"),
        transparent: !0,
        opacity: 0,
        depthTest: !1,
      }),
      renderOrder: 10,
    });
    return (
      d.mapGroup.children.map((p, A) => {
        p.children.map((u) => {
          u.type === "Mesh" &&
            ((u.material = u.material.clone()), this.eventElement.push(u));
        });
      }),
      { china: r, chinaTopLine: o, chinaMapTopArea: d }
    );
  }
  createLightMesh(e) {
    let t = this.assets.instance.getResource("china");
    (t = JSON.parse(t)),
      (t.features = t.features.filter((n) => n.properties.name === e.name)),
      (t = JSON.stringify(t));
    let { faceHightMaterial: a, sideHightMaterial: s } =
        this.createLightMaterial(),
      i = new j(this, {
        center: this.pointCenter,
        position: new y(0, 0, this.depth),
        data: t,
        depth: this.depth / 3,
        topFaceMaterial: a,
        sideMaterial: s,
        lineMaterial: new C({
          color: 16777215,
          transparent: !0,
          depthTest: !1,
        }),
        renderOrder: 11,
        lineRenderOrder: 12,
      }),
      r = q(i.mapGroup);
    return (
      i.mapGroup.children.map((n, l) => {
        n.children.map((o) => {
          o.type === "Mesh" &&
            this.calcUv2(
              o.geometry,
              r.boxSize.x,
              r.boxSize.y,
              r.box3.min.x,
              r.box3.min.y
            );
        });
      }),
      i.mapGroup
    );
  }
  createLightMaterial() {
    let e = this.assets.instance.getResource("topFace");
    (e.colorSpace = x),
      (e.wrapS = e.wrapT = Y),
      (e.flipY = !1),
      e.repeat.set(1, 1);
    let t = this.assets.instance.getResource("side4"),
      a = new g({ map: e, fog: !1, transparent: !0 }),
      s = new g({ map: t, fog: !1, transparent: !0 });
    return { faceHightMaterial: a, sideHightMaterial: s };
  }
  addEvent() {
    let e = [],
      t = null;
    this.eventElement.map((a) => {
      this.interactionManager.add(a),
        a.addEventListener("mousedown", (s) => {
          if (this.clicked) return !1;
          (this.clicked = !0), t && this.focusMapGroup.remove(t);
          let i = this.createLightMesh(s.target.userData);
          (t = i),
            this.focusMapGroup.add(i),
            console.log("点击了：", s.target.userData);
        }),
        a.addEventListener("mouseup", (s) => {
          this.clicked = !1;
        }),
        a.addEventListener("mouseover", (s) => {
          e.includes(s.target.parent) || e.push(s.target.parent),
            (document.body.style.cursor = "pointer");
        }),
        a.addEventListener("mouseout", (s) => {
          (e = e.filter(
            (i) => i.userData.name !== s.target.parent.userData.name
          )),
            e.length > 0 && e[e.length - 1],
            (document.body.style.cursor = "default");
        });
    });
  }
  setFocusLabelMove(e, t = "up") {
    this.allBar.map((a) => {
      a.userData.adcode === e &&
        h.to(a.position, {
          duration: 0.3,
          z:
            t === "up"
              ? a.userData.position[2] + this.depth / 2 + 0.3
              : a.userData.position[2],
        });
    });
  }
  setGQMove(e, t = "up") {
    this.allGuangquan.map((a) => {
      a.userData.adcode === e &&
        h.to(a.position, {
          duration: 0.3,
          z:
            t === "up"
              ? a.userData.position[2] + this.depth / 2 + 0.3
              : a.userData.position[2],
        });
    }),
      this.flyLineFocusGroup.userData.adcode === e &&
        h.to(this.flyLineFocusGroup.position, {
          duration: 0.3,
          y:
            t === "up"
              ? this.flyLineFocusGroup.userData.position[1] +
                this.depth / 2 +
                0.3
              : this.flyLineFocusGroup.userData.position[1],
        });
  }
  setLabelMove(e, t = "up") {
    [...this.allProvinceLabel, ...this.allProvinceNameLabel].map((a) => {
      a.userData.adcode === e &&
        h.to(a.position, {
          duration: 0.3,
          z:
            t === "up"
              ? a.userData.position[2] + this.depth / 2 + 0.3
              : a.userData.position[2],
        });
    });
  }
  calcUv2(e, t, a, s, i) {
    const r = e.attributes.position,
      n = e.attributes.uv,
      l = e.groups[0].count;
    for (let o = 0; o < l; o++) {
      const d = r.getX(o),
        p = r.getY(o),
        A = (d - s) / t,
        u = (p - i) / a;
      n.setXY(o, A, u);
    }
    (n.needsUpdate = !0), e.computeVertexNormals();
  }
  createFocusMapMaterial() {
    let e = this.assets.instance.getResource("topNormal");
    (e.wrapS = e.wrapT = Y), (e.colorSpace = x);
    let t = new g({ map: e, fog: !1, transparent: !0, opacity: 0.2 }),
      a = this.assets.instance.getResource("side4");
    (a.colorSpace = x),
      (a.wrapS = Y),
      (a.wrapT = Y),
      a.repeat.set(1, 0.2),
      (a.offset.y += 0.01);
    let s = new g({ map: a, fog: !1, transparent: !0, opacity: 0, side: re });
    return (
      this.time.on("tick", () => {
        a.offset.y += 0.002;
      }),
      (s.onBeforeCompile1 = (i) => {
        (i.uniforms = {
          ...i.uniforms,
          uColor1: { value: new E(6847392) },
          uColor2: { value: new E(13423847) },
        }),
          (i.vertexShader = i.vertexShader.replace(
            "void main() {",
            `
        attribute float alpha;
        varying vec3 vPosition;
        varying float vAlpha;
        void main() {
          vAlpha = alpha;
          vPosition = position;
      `
          )),
          (i.fragmentShader = i.fragmentShader.replace(
            "void main() {",
            `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
          )),
          (i.fragmentShader = i.fragmentShader.replace(
            "#include <opaque_fragment>",
            `
      #ifdef OPAQUE
      diffuseColor.a = 1.0;
      #endif

      // https://github.com/mrdoob/three.js/pull/22425
      #ifdef USE_TRANSMISSION
      diffuseColor.a *= transmissionAlpha + 0.1;
      #endif
      vec3 gradient = mix(uColor1, uColor2, vPosition.z/1.2);

      outgoingLight = outgoingLight*gradient;


      gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
      `
          ));
      }),
      [t, s]
    );
  }
  createMapLabel() {
    let e = this,
      t = z;
    console.log(t);
    const a = new m();
    (this.focusLabelGroup = a),
      (this.allBar = []),
      (this.allBarMaterial = []),
      (this.allGuangquan = []),
      (this.allProvinceLabel = []),
      (this.allProvinceNameLabel = []),
      t.map((i, r) => {
        let [n, l] = this.geoProjection(i.centroid),
          o = this.createLabelIcon(i, new y(n, -l, this.depth + 1.4));
        this.createSZClickEvent(o),
          (o.renderOrder = 100),
          (o.userData.name = i.name),
          (o.userData.scale = i.start ? 3 : 2),
          (o.userData.adcode = i.adcode),
          (o.userData.position = [n, -l, this.depth + 1.4]),
          a.add(o);
        let d = i.start ? 16693271 : 16777215,
          p = this.createQuan(d);
        p.position.set(n, -l, this.depth + 0.46),
          (p.userData.name = i.name),
          (p.userData.adcode = i.adcode),
          (p.userData.scale = i.start ? 1.5 : 1),
          (p.userData.position = [n, -l, this.depth + 0.46]),
          this.gqGroup.add(p);
        let A = s(i, r, new y(n, -l, this.depth + 4));
        this.allBar.push(o),
          this.allGuangquan.push(p),
          this.allProvinceNameLabel.push(A);
      }),
      this.sceneGroup.add(a);
    function s(i, r, n) {
      let l = e.label3d.create("", "provinces-name-label", !0);
      return (
        l.init(
          `<div class="provinces-name-label ${i.start ? "focus-label" : ""}">
          <div class="provinces-name-label-wrap"><span>${i.name}</span></div>
          <div class="icon"></div>
        </div>`,
          n
        ),
        e.label3d.setLabelStyle(l, 0.08, "x"),
        l.setParent(e.provinceNameGroup),
        (l.userData.adcode = i.adcode),
        (l.userData.position = [n.x, n.y, n.z]),
        l
      );
    }
  }
  createSZClickEvent(e) {
    this.interactionManager.add(e),
      e.addEventListener("mousedown", (t) => {
        if (this.clicked) return !1;
        (this.clicked = !0), console.log("点击了：", e.userData);
      }),
      e.addEventListener("mouseup", (t) => {
        this.clicked = !1;
      }),
      e.addEventListener("mouseover", (t) => {
        document.body.style.cursor = "pointer";
      }),
      e.addEventListener("mouseout", (t) => {
        document.body.style.cursor = "default";
      });
  }
  createLabelIcon(e, t) {
    let a = this.assets.instance.getResource("point01"),
      s = this.assets.instance.getResource("point02");
    a.colorSpace = s.colorSpace = x;
    let i = new ne(
      new oe({ map: e.start ? s : a, transparent: !0, depthTest: !1, fog: !1 })
    );
    return i.scale.set(0, 0, 0), i.position.copy(t), this.scene.add(i), i;
  }
  createQuan(e = 16777215) {
    const t = this.assets.instance.getResource("guangquan1"),
      a = this.assets.instance.getResource("guangquan2");
    let s = new S(2, 2),
      i = new g({
        color: e,
        map: t,
        alphaMap: t,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
      }),
      r = new g({
        color: e,
        map: a,
        alphaMap: a,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
      }),
      n = new v(s, i),
      l = new v(s, r);
    return (
      (n.renderOrder = 24),
      (l.renderOrder = 24),
      (l.position.z -= 0.001),
      n.scale.set(0, 0, 0),
      l.scale.set(0, 0, 0),
      (this.quanGroup = new m()),
      this.quanGroup.add(n, l),
      this.time.on("tick", (o) => {
        n.rotation.z += o * 2;
      }),
      this.quanGroup
    );
  }
  createMapBg() {
    let e = new S(400, 400);
    const t = this.assets.instance.getResource("chinaMapBg");
    (t.colorSpace = x), (t.wrapS = Y), (t.wrapT = Y), t.repeat.set(1, 1);
    let a = new g({ map: t, opacity: 1, transparent: !0, blending: T }),
      s = new v(e, a);
    s.rotateX(-Math.PI / 2),
      s.scale.set(0.7, 0.7, 0.7),
      s.position.set(-8.9, 0.05, 6.97),
      this.scene.add(s);
  }
  createBorderGlow() {
    let e = new S(129, 129);
    const t = this.assets.instance.getResource("chinaGlow");
    (t.colorSpace = x), (t.wrapS = Y), (t.wrapT = Y), t.repeat.set(1, 1);
    let a = new g({
        map: t,
        opacity: 0,
        fog: !1,
        transparent: !0,
        depthTest: !1,
        depthWrite: !1,
      }),
      s = new v(e, a);
    s.position.set(-8.89, 5.5, -9.37),
      (s.rotation.x = -Math.PI / 2),
      (s.renderOrder = 100),
      (this.borderGlow = s),
      this.scene.add(s);
  }
  createFlyLine() {
    (this.flyLineGroup = new m()),
      (this.flyLineGroup.visible = !1),
      this.scene.add(this.flyLineGroup);
    const e = this.assets.instance.getResource("flyLine");
    (e.colorSpace = x), (e.wrapS = Y), (e.wrapT = Y);
    const t = 0.1,
      a = 32,
      s = 8,
      i = !1;
    let [r, n] = this.geoProjection(this.flyLineCenter),
      l = new y(r, -n, 0);
    const o = new g({
      map: e,
      alphaMap: e,
      color: 16750592,
      transparent: !0,
      fog: !1,
      opacity: 0,
      depthTest: !1,
      blending: T,
    });
    this.time.on("tick", () => {
      e.offset.x -= 0.003;
    }),
      z.map((d) => {
        let [p, A] = this.geoProjection(d.centroid),
          u = new y(p, -A, 0);
        const B = new y();
        B.addVectors(l, u).multiplyScalar(0.5), B.setZ(15);
        const w = new ce(l, B, u),
          M = new V(w, a, t, s, i),
          f = new v(M, o);
        (f.rotation.x = -Math.PI / 2),
          f.position.set(0, this.depth + 0.4, 0),
          (f.renderOrder = 21),
          this.flyLineGroup.add(f);
      }),
      this.createFlyLineFocus();
  }
  createFlyLineFocus() {
    (this.flyLineFocusGroup = new m()),
      (this.flyLineFocusGroup.visible = !1),
      (this.flyLineFocusGroup.rotation.x = -Math.PI / 2);
    let [e, t] = this.geoProjection(this.flyLineCenter);
    this.flyLineFocusGroup.position.set(e, this.depth + 0.47, t),
      (this.flyLineFocusGroup.userData.name = "深圳总部"),
      (this.flyLineFocusGroup.userData.adcode = 44e4),
      (this.flyLineFocusGroup.userData.position = [e, this.depth + 0.47, t]),
      this.scene.add(this.flyLineFocusGroup);
    const a = this.assets.instance.getResource("guangquan1"),
      s = new S(5, 5),
      i = new g({
        color: 16750592,
        map: a,
        alphaMap: a,
        transparent: !0,
        fog: !1,
        depthTest: !1,
      }),
      r = new v(s, i);
    (r.renderOrder = 30), r.scale.set(0, 0, 0);
    const n = r.clone();
    (n.material = i.clone()),
      this.flyLineFocusGroup.add(r, n),
      h.to(r.material, { opacity: 0, repeat: -1, yoyo: !1, duration: 1 }),
      h.to(r.scale, { x: 2, y: 2, z: 2, repeat: -1, yoyo: !1, duration: 1 }),
      h.to(n.material, {
        delay: 0.5,
        opacity: 0,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      }),
      h.to(n.scale, {
        delay: 0.5,
        x: 2,
        y: 2,
        z: 2,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      });
  }
  createStorke() {
    let e = this.assets.instance.getResource("chinaStorke");
    const t = this.assets.instance.getResource("pathLine2");
    (t.wrapS = Y), (t.wrapT = Y), t.repeat.set(1, 1);
    let a = new k(this, {
      center: this.pointCenter,
      position: new y(0, this.depth + 0.6, 0),
      data: e,
      material: new g({
        color: 16777215,
        map: t,
        alphaMap: t,
        fog: !1,
        transparent: !0,
        opacity: 1,
        blending: T,
      }),
      type: "Line3",
      renderOrder: 101,
    });
    (a.lineGroup.rotation.x = -Math.PI / 2),
      this.scene.add(a.lineGroup),
      this.time.on("tick", () => {
        t.offset.x += 0.002;
      });
  }
  update() {
    super.update(),
      this.stats && this.stats.update(),
      this.interactionManager && this.interactionManager.update();
  }
  destroy() {
    super.destroy(),
      this.label3d && this.label3d.destroy(),
      this.stats && this.stats.dom && document.body.removeChild(this.stats.dom),
      this.groundMirror && this.groundMirror.dispose();
  }
}
const et = { class: "globe" },
  tt = createStaticVNode(
    '<canvas id="canvas"></canvas><div class="clouds-wrap"><div class="cloud"></div><div class="cloud"></div><div class="cloud"></div><div class="cloud"></div></div>',
    2
  ),
  at = [tt],
  Lt = {
    __name: "earth07",
    setup(b) {
      let c = null;
      return (
        onMounted(() => {
          c = new Ke(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          c && c.destroy();
        }),
        (e, t) => (openBlock(), createElementBlock("div", et, at))
      );
    },
  };
export { Lt as default };
