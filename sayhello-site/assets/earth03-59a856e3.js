import {
  C as M,
  F as he,
  G as z,
  M as P,
  n as L,
  V as x,
  v as E,
  T as ne,
  b as R,
  L as J,
  a2 as B,
  B as _,
  a9 as se,
  c as pe,
  D as I,
  A as ue,
  h as de,
  i as fe,
  m as K,
  a as me,
  r as ge,
  q as ye,
  R as j,
  l as X,
  a3 as Q,
  s as H,
  p as D,
  t as Z,
  ab as we,
  ac as xe,
} from "./OrbitControls-9c9ee6bc.js";
import { R as be, m as ve, p as oe, M as Se } from "./index-1453e2ee.js";
import {
  l as N,
  d as Ce,
  a as $,
  m as ee,
  t as G,
  g as Le,
} from "./utils-9af1928d.js";
import { D as Ae } from "./index-4ec0cc76.js";
import {
  e as Me,
  a as Pe,
  b as Re,
  s as Te,
  g as ze,
  c as _e,
  d as Be,
  D as ke,
  L as Fe,
} from "./index-1003c0d2.js";
import {
  e as De,
  a as Ee,
  b as Oe,
  h as Ge,
  p as Ie,
  l as Ne,
  G as Ue,
} from "./光柱-48fdbf5f.js";
import { R as Ve } from "./RippleCirle-e198a9fe.js";
import { g as q } from "./index-4db78ffb.js";
import { s as je } from "./stats.module-077ce25d.js";
import { f as He } from "./flyLine2-e7135ba7.js";
import { p as We } from "./pathLine2-dee41061.js";
import { u as Je } from "./uv-77714551.js";
import { a as Xe } from "./three.interactive-c6512469.js";
import {
  O as qe,
  B as te,
  E as Ye,
  R as Ke,
  a as Qe,
  K as ae,
} from "./index-5b3afbff.js";
import { _ as Ze } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
  pushScopeId,
  popScopeId,
  createElementVNode,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
class ot {
  constructor({
    material: e,
    time: n,
    size: s,
    diffuseColor: a,
    diffuseSpeed: t,
    diffuseHeight: r,
    diffuseStart: l,
  }) {
    this.time = n;
    let i = {
      size: 100,
      diffuseSpeed: 15,
      diffuseColor: 9345950,
      diffuseHeight: 10,
      diffuseStart: 1,
    };
    (this.options = Object.assign({}, i, {
      material: e,
      size: s,
      diffuseColor: a,
      diffuseSpeed: t,
      diffuseHeight: r,
      diffuseStart: l,
    })),
      this.init();
  }
  init() {
    let e = null,
      {
        material: n,
        size: s,
        diffuseColor: a,
        diffuseSpeed: t,
        diffuseHeight: r,
        diffuseStart: l,
      } = this.options,
      i = s / t;
    (n.onBeforeCompile = (o) => {
      (e = o),
        (o.uniforms = {
          ...o.uniforms,
          uTime: { value: 0 },
          uSpeed: { value: t },
          uHeight: { value: r },
          uStart: { value: l },
          uColor: { value: new M(a) },
        }),
        (o.vertexShader = o.vertexShader.replace(
          "void main() {",
          `
            varying vec3 vPosition;
            void main(){
              vPosition = position;
          `
        )),
        (o.fragmentShader = o.fragmentShader.replace(
          "void main() {",
          `
            uniform float uTime;
            uniform vec3 uColor;
            uniform float uSpeed;
            uniform float uHeight;
            uniform float uStart;
            varying vec3 vPosition;

            void main(){
          `
        )),
        (o.fragmentShader = o.fragmentShader.replace(
          "#include <opaque_fragment>",
          `
            #ifdef OPAQUE
            diffuseColor.a = 1.0;
            #endif

            #ifdef USE_TRANSMISSION
            diffuseColor.a *= material.transmissionAlpha;
            #endif

            float y0 = uStart + uTime * uSpeed * -1.0; // 开始位置+时间*速度（即当前的位置坐标）

            float h = uHeight / 10.0; // 光带高度的一半，单位米
            // 当vPosition.y坐标在光带的范围内
            if(vPosition.y > y0 && vPosition.y < y0 + h*2.0){
              float per = 0.0;
              // 当坐标在光带左侧
              if(vPosition.y < y0 + h){
                  // 计算x坐标在左侧的百分比,*2.0 和下面的if判断是让中间亮的区域更大
                  per = (vPosition.y - y0)*1.0 / h;

                  outgoingLight *= mix(outgoingLight,uColor,per);
                   // 调整下半部分的透明度
                  diffuseColor.a =per;
                  // 下半部分不显示
                  diffuseColor.a =0.0;
              }else{
                  per = (vPosition.y - y0 - h)*1.0 / h;

                  outgoingLight *= mix(uColor,outgoingLight,per);
                  // outgoingLight*=uColor;
                  // 调整上班部分的透明度
                  diffuseColor.a = 1.0-per;
              }

          }else{
            // 没在光带区域的，透明度为0
            //  diffuseColor.a = 0.0;
          }

          gl_FragColor = vec4( outgoingLight, diffuseColor.a );
          `
        ));
    }),
      this.time.on("tick", (o) => {
        e &&
          ((e.uniforms.uTime.value += o),
          e.uniforms.uTime.value > i && (e.uniforms.uTime.value = 0));
      });
  }
}
class it {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new be()),
      this.instance.addLoader(he, "FileLoader"),
      this.instance.on("onProgress", (s, a, t) => {
        ((a / t) * 100).toFixed(2) + "";
      }),
      this.instance.on("onLoad", () => {
        this.onLoadCallback && this.onLoadCallback();
      });
    let e = "/sayhello-site/",
      n = [
        { type: "Texture", name: "earthAtmos", path: Me },
        { type: "Texture", name: "earthNight", path: Pe },
        { type: "Texture", name: "earthClouds", path: De },
        { type: "Texture", name: "earthNormal", path: Ee },
        { type: "Texture", name: "earthBump", path: Re },
        { type: "Texture", name: "earthSpecular", path: Oe },
        { type: "Texture", name: "highLight", path: Ge },
        { type: "Texture", name: "pointLight", path: Ie },
        { type: "Texture", name: "lightPillar", path: Ne },
        { type: "Texture", name: "flyLine", path: He },
        { type: "Texture", name: "skyBg", path: Te },
        { type: "Texture", name: "gridBlack", path: ze },
        { type: "Texture", name: "grid", path: _e },
        { type: "Texture", name: "pathLine", path: We },
        { type: "Texture", name: "uv", path: Je },
        { type: "Texture", name: "chinaGlow", path: Be },
        { type: "File", name: "world", path: e + "assets/json/world.json" },
        {
          type: "File",
          name: "chinaStorke",
          path: e + "assets/json/中华人民共和国-轮廓-地球.json",
        },
        {
          type: "File",
          name: "china",
          path: e + "assets/json/中华人民共和国.json",
        },
      ];
    this.instance.loadAll(n);
  }
}
const Y = [
  { name: "中国", centroid: [106, 33] },
  { name: "日本", centroid: [142, 43] },
  { name: "印度", centroid: [77, 28] },
  { name: "俄罗斯", centroid: [75.12973298046873, 58.7599727536235] },
  { name: "澳大利亚", centroid: [135, -23] },
  { name: "美国", centroid: [-101, 39] },
];
class lt {
  constructor({ time: e }, n) {
    (this.time = e), (this.instance = new z()), (this.run = !0);
    let s = {
      speed: 0.003,
      texture: null,
      radius: 0.1,
      segments: 32,
      radialSegments: 8,
      data: [],
      renderOrder: 1,
      customRunCallback: null,
      material: new P({
        color: 16777215,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        depthWrite: !1,
        blending: L,
      }),
    };
    (this.options = Object.assign({}, s, n)), this.init();
  }
  init() {
    const {
      material: e,
      texture: n,
      segments: s,
      radius: a,
      radialSegments: t,
      data: r,
      speed: l,
      renderOrder: i,
    } = this.options;
    r.map((o) => {
      let u = [];
      o.geometry.coordinates.map((f) => {
        f[0].forEach((g) => {
          let { x: y, y: b, z: v } = N(...g, 100.5);
          u.push(new x(y, b, v));
        });
      });
      const c = new E(u),
        d = new ne(c, s, a, t, !1),
        h = new R(d, e);
      h.position.set(0, 0, 0), (h.renderOrder = i), this.instance.add(h);
    }),
      (n.offset.x = 0.5),
      this.time.on("tick", (o, u) => {
        this.run &&
          (this.options.customRunCallback
            ? this.options.customRunCallback.call(this, o, u, n)
            : (n.offset.x += l * o));
      });
  }
  getInstance() {
    return this.instance;
  }
  setParent(e) {
    e.add(this.instance);
  }
  set visible(e) {
    (this.instance.visible = e), (this.run = e);
  }
}
const ie = (p, e, n) => {
    var s = (e * Math.PI) / 180,
      a = (n * Math.PI) / 180;
    s = -s;
    var t = p * Math.cos(a) * Math.cos(s),
      r = p * Math.sin(a),
      l = p * Math.cos(a) * Math.sin(s);
    return { x: t, y: r, z: l };
  },
  W = (p, e, n = {}) => {
    let s = { color: 65535 };
    s = Ce(s, n);
    const a = new J(s);
    let t = e.features,
      r = ct(t);
    const l = new B(new Float32Array(r), 3),
      i = new _();
    i.attributes.position = l;
    let o = new se(i, a);
    return o.scale.set(p, p, p), (o.name = "createCountryMergeSphereLine"), o;
  };
function ct(p) {
  let e = [];
  for (let n = 0; n < p.length; n++)
    p[n].geometry.coordinates.forEach((a) => {
      const t = [];
      a[0].forEach((r) => {
        let { x: l, y: i, z: o } = ie(1, ...r);
        t.push(
          parseFloat(l.toFixed(3)),
          parseFloat(i.toFixed(3)),
          parseFloat(o.toFixed(3))
        );
      }),
        e.push(t[0], t[1], t[2]);
      for (let r = 3; r < t.length; r += 3)
        e.push(t[r], t[r + 1], t[r + 2], t[r], t[r + 1], t[r + 2]);
      e.push(t[0], t[1], t[2]);
    });
  return e;
}
function re(p, e) {
  return Math.sqrt(
    (e.x - p.x) * (e.x - p.x) +
      (e.y - p.y) * (e.y - p.y) +
      (e.z - p.z) * (e.z - p.z)
  );
}
const ht = (p, e = 100) => {
    let n = p.features,
      s = [];
    for (let a = 0; a < n.length; a++) {
      let t = n[a].geometry.coordinates,
        r = n[a].properties.name,
        l = [];
      t.forEach((c) => {
        let { index: d, coords: h } = pt(c[0], e),
          f = new _();
        f.setIndex(new B(new Uint16Array(d), 1)),
          f.setAttribute("position", new B(new Float32Array(h), 3));
        let g = new Float32Array((h.length / 3) * 2);
        for (let y = 0; y < h.length; y += 3)
          (g[(y / 3) * 2] = h[y]), (g[(y / 3) * 2 + 1] = h[y + 1]);
        f.setAttribute("uv", new B(g, 2)), l.push(f);
      });
      let i = null;
      l.length > 1 ? (i = ve(l)) : l.length === 1 && (i = l[0]),
        i.computeVertexNormals();
      let o = new pe({ color: 65535, side: I }),
        u = new R(i, o);
      (u.name = r), s.push(u);
    }
    return s;
  },
  pt = (p, e = 100) => {
    let n = [];
    for (let a = 0; a < p.length; a++) n.push(new x(p[a][0], p[a][1], 0));
    let { scopeInsidePoint: s } = ut(n);
    return (s = n.concat(s)), dt(n, s, e);
  },
  ut = (p, e = 3) => {
    let n = p.map((c) => [c.x, c.y]),
      s = Math.floor(
        $(p, function (c) {
          return c.x;
        }).x
      ),
      a = Math.ceil(
        ee(p, function (c) {
          return c.x;
        }).x
      ),
      t = Math.floor(
        $(p, function (c) {
          return c.y;
        }).y
      ),
      r = Math.ceil(
        ee(p, function (c) {
          return c.y;
        }).y
      ),
      l = Math.ceil((a - s) / e),
      i = Math.ceil((r - t) / e),
      o = [];
    for (let c = 0; c < l + 1; c++) {
      let d = s + c * e;
      for (let h = 0; h < i + 1; h++) {
        let f = t + h * e;
        o.push([d, f]);
      }
    }
    return {
      scopeInsidePoint: o
        .filter((c) => oe(c, n))
        .map((c) => new x(c[0], c[1], 0)),
      scopePoint: o,
    };
  },
  dt = (p, e, n = 100) => {
    let s = p.map((i) => [i.x, i.y]),
      a = [];
    e.forEach((i) => {
      let { x: o, y: u, z: c } = ie(n, i.x, i.y);
      a.push(o, u, c);
    });
    let t = e.map((i) => [i.x, i.y]),
      r = ke.from(t).triangles,
      l = [];
    for (let i = 0; i < r.length; i += 3) {
      let o = e[r[i]],
        u = e[r[i + 1]],
        c = e[r[i + 2]],
        d = [(o.x + u.x + c.x) / 3, (o.y + u.y + c.y) / 3];
      oe(d, s) && l.push(r[i + 2], r[i + 1], r[i]);
    }
    return { index: l, coords: a };
  };
class ft extends Se {
  constructor(e) {
    super(e, { isOrthographic: !0 }),
      (this.camera.instance.near = 10),
      (this.camera.instance.far = 1e3),
      this.camera.instance.position.set(0, 0, 300),
      this.camera.instance.lookAt(0, 0, 0),
      this.camera.instance.updateProjectionMatrix(),
      (this.interactionManager = new Xe(
        this.renderer.instance,
        this.camera.instance,
        this.canvas
      )),
      this.initSetting(),
      this.initRender(),
      this.initEnvironment(),
      this.initAssets(() => {
        this.initModel(), this.post();
      });
  }
  post() {
    const e = new qe(this.scene, this.camera.instance, {
      blendFunction: te.ADD,
      edgeStrength: 4,
      pulseSpeed: 0,
      multisampling: 2,
      visibleEdgeColor: 9233128,
      hiddenEdgeColor: 9233128,
      height: 200,
      blur: !0,
      xRay: !0,
    });
    (e.resolution.height = 1080),
      (e.blurPass.enabled = !0),
      (e.blurPass.blurMaterial.kernelSize = 3),
      (e.blendMode.opacity.value = 0);
    const n = new Ye(this.renderer.instance);
    n.addPass(new Ke(this.scene, this.camera.instance));
    const s = new Qe(this.camera.instance, e);
    n.addPass(s),
      (this.effect = e),
      (this.renderer.composer = n),
      (this.renderer.postprocessing = !0);
    const a = new M(),
      t = this.effect,
      r = t.uniforms,
      l = t.blendMode,
      i = {
        resolution: t.height,
        blurriness: 0,
        "use pattern": !1,
        "pattern scale": 60,
        "pulse speed": t.pulseSpeed,
        "edge strength": t.edgeStrength,
        "visible edge": a.copyLinearToSRGB(t.visibleEdgeColor).getHex(),
        "hidden edge": a.copyLinearToSRGB(t.hiddenEdgeColor).getHex(),
        "x-ray": !0,
        opacity: l.opacity.value,
        "blend mode": l.blendFunction,
      };
    this.debug.instance
      .add(i, "resolution", [240, 360, 480, 720, 1080])
      .onChange((o) => {
        t.resolution.height = Number(o);
      }),
      this.debug.instance.add(t, "multisampling", [0, 2, 4]),
      this.debug.instance
        .add(i, "blurriness", ae.VERY_SMALL, ae.HUGE + 1, 1)
        .onChange((o) => {
          (t.blurPass.enabled = o > 0),
            (t.blurPass.blurMaterial.kernelSize = o - 1);
        }),
      this.debug.instance
        .add(i, "pattern scale", 20, 100, 0.1)
        .onChange((o) => {
          r.get("patternScale").value = o;
        }),
      this.debug.instance.add(i, "edge strength", 0, 10, 0.01).onChange((o) => {
        r.get("edgeStrength").value = o;
      }),
      this.debug.instance.add(i, "pulse speed", 0, 2, 0.01).onChange((o) => {
        t.pulseSpeed = o;
      }),
      this.debug.instance.addColor(i, "visible edge").onChange((o) => {
        t.visibleEdgeColor.setHex(o).convertSRGBToLinear();
      }),
      this.debug.instance.addColor(i, "hidden edge").onChange((o) => {
        t.hiddenEdgeColor.setHex(o).convertSRGBToLinear();
      }),
      this.debug.instance.add(t, "xRay"),
      this.debug.instance.add(i, "opacity", 0, 1, 0.01).onChange((o) => {
        l.opacity.value = o;
      }),
      this.debug.instance.add(i, "blend mode", te).onChange((o) => {
        l.setBlendFunction(Number(o));
      });
  }
  initEnvironment() {
    let e = new ue(16777215, 2);
    this.scene.add(e);
    let n = new de(16777215, 3);
    n.position.set(-21, -30, -10), (n.castShadow = !0);
    let s = new fe(n, 20);
    this.scene.add(n, s);
    const a = this.debug.instance.addFolder("Environment");
    a.add(n.position, "x", -300, 300, 1),
      a.add(n.position, "y", -300, 300, 1),
      a.add(n.position, "z", -300, 300, 1),
      a.onChange((t) => {
        s.update();
      });
  }
  initAssets(e) {
    let n = new it(e);
    this.assets = n.instance;
  }
  initRender() {
    this.renderer.instance.setClearColor(0, 0);
  }
  initSetting() {
    (this.debug = new Ae(!0)),
      (this.stats = new je()),
      document.body.appendChild(this.stats.dom);
  }
  initModel() {
    const e = this.assets.getResource("earthAtmos"),
      n = this.assets.getResource("earthNight"),
      s = this.assets.getResource("earthNormal");
    this.assets.getResource("earthBump");
    const a = this.assets.getResource("earthSpecular"),
      t = this.assets.getResource("highLight");
    e.colorSpace = K;
    let r = new Ue(this, {
      globeColor: 16777215,
      globeImage: e,
      globeNightImage: n,
      normalImage: s,
      normalScale: new me(6, 6),
      specularImage: a,
      atmosphereColor: new M("#6E8BB7"),
      atmosphereAltitude: 0.2,
      atmospherePower: 40,
    });
    r.setParent(this.scene),
      (r.instance.rotation.y = -Math.PI),
      this.debug.instance
        .addFolder("globe")
        .addColor(r.globeObj.material, "color")
        .onChange((u) => {
          r.shader.uniforms.uColor.value = new M(u);
        }),
      (this.globe = r);
    let i = new ge(
      new ye({
        side: I,
        map: t,
        transparent: !0,
        alphaMap: t,
        depthTest: !1,
        blending: L,
      })
    );
    i.scale.set(100 * 2.5, 100 * 2.5, 0), (i.renderOrder = 2);
    let o = this.createRippleCirle();
    r.add(o),
      this.scene.add(i),
      this.createStars(),
      this.createCloud(),
      this.createCountryLine(),
      this.createArcAll(),
      this.createCountryNameLabel(),
      this.createGrid(),
      this.createChinaMesh(),
      this.createChinaLine(),
      this.createChinaWall();
  }
  createChinaWall() {
    let e = this.assets.getResource("chinaStorke");
    (e = G(e)),
      e.features[0].geometry.coordinates[0].map((t) => {
        t.map((r) => {
          N(...r, 110);
        });
      });
    let n = this.assets.getResource("chinaStorke"),
      s = G(n);
    for (let t = 0; t < 40; t++) {
      let r = W(100 + t * 0.1, s, { color: 4809093 });
      (r.renderOrder = 2), this.globe.add(r);
    }
    let a = W(104, s, {
      color: 16777215,
      transparent: !0,
      opacity: 1,
      depthWrite: !1,
      depthTest: !1,
    });
    (a.renderOrder = 99), (this.line3 = a), this.globe.add(a);
  }
  createChinaMesh() {
    let e = this.assets.getResource("chinaGlow");
    (e.wrapS = e.wrapT = j),
      (e.rotation = Math.PI),
      (e.colorSpace = K),
      (e.flipY = !1),
      e.offset.set(0, 0);
    let n = this.assets.getResource("china");
    n = G(n);
    let s = ht(n, 103.9),
      a = new z();
    a.add(...s);
    let { boxSize: t, box3: r } = Le(a),
      l = new P({
        color: 16777215,
        map: e,
        transparent: !0,
        side: I,
        opacity: 0,
      });
    a.traverse((i) => {
      i.isMesh &&
        ((i.material = l),
        this.calcUv2(i.geometry, t.x, t.y, r.min.x, r.min.y));
    }),
      this.globe.add(a);
  }
  calcUv2(e, n, s, a, t) {
    const r = e.attributes.position,
      l = e.attributes.uv;
    for (let i = 0; i < r.count; i++) {
      const o = r.getX(i),
        u = r.getY(i),
        c = (o - a) / n,
        d = (u - t) / s;
      l.setXY(i, c, d);
    }
    (l.needsUpdate = !0), e.computeVertexNormals();
  }
  createSky() {
    const e = this.assets.getResource("skyBg"),
      n = new X(600, 300, 1),
      s = new P({ transparent: !0, map: e, side: I, opacity: 0.5 });
    let a = new R(n, s);
    a.position.set(0, 0, -100), this.camera.instance.add(a);
  }
  createCloud() {
    const s = this.assets.getResource("earthClouds"),
      a = new Q(100 * 1.01, 75, 75),
      t = new P({ map: s, transparent: !0, opacity: 0.1, depthTest: !1 }),
      r = new R(a, t);
    this.globe.add(r),
      this.time.on("tick", () => {
        r.rotation.y += (-0.04 * Math.PI) / 180;
      });
  }
  createLightPillar(e, n) {
    const s = new z(),
      a = this.assets.getResource("lightPillar");
    let t = 41 / 200,
      r = e / t;
    const l = new X(e, r);
    l.rotateX(Math.PI / 2), l.translate(0, 0, r / 2);
    const i = new P({
        map: a,
        transparent: !0,
        side: I,
        depthWrite: !1,
        blending: L,
        color: n,
      }),
      o = new R(l, i),
      u = o.clone();
    return (u.rotation.z = Math.PI / 2), s.add(o, u), s;
  }
  createPointLight(e, n) {
    const s = this.assets.getResource("pointLight"),
      a = new X(e, e),
      t = new P({
        map: s,
        transparent: !0,
        depthWrite: !1,
        color: n,
        blending: L,
      });
    return new R(a, t);
  }
  createRippleCirle() {
    let e = new z();
    return (
      Y.map((s, a) => ({
        lat: s.centroid[0],
        lng: s.centroid[1],
        maxR: Math.random() * 20 + 3,
        propagationSpeed: (Math.random() - 0.5) * 20 + 1,
        repeatPeriod: Math.random() * 2e3 + 200,
        color: new M("rgb(57,110,224)"),
        name: s.name,
      })).forEach((s, a) => {
        let t = 100.5;
        s.name === "中国" && (t = 104.6);
        let r = new Ve(this, {
          number: 3,
          radius: 3,
          frequency: 2,
          color: s.color,
        });
        r.setParent(e);
        let l = N(s.lat, s.lng, t);
        r.setPosition(new x(l.x, l.y, l.z));
        var i = new x(l.x, l.y, l.z).normalize(),
          o = new x(0, 0, 1);
        r.instance.quaternion.setFromUnitVectors(o, i);
        let u = this.createPointLight(6, s.color);
        r.instance.add(u);
        let c = this.createLightPillar(4, s.color);
        r.instance.add(c);
      }),
      e
    );
  }
  createStars() {
    const e = [new _(), new _()],
      n = [],
      s = [],
      a = new x();
    for (let r = 0; r < 250; r++)
      (a.y = Math.random() * 2 - 1),
        (a.z = Math.random() * 2 - 1),
        a.multiplyScalar(20),
        n.push(a.x, a.y, a.z);
    for (let r = 0; r < 1500; r++)
      (a.x = Math.random() * 2 - 1),
        (a.y = Math.random() * 2 - 1),
        (a.z = Math.random() * 2 - 1),
        a.multiplyScalar(10),
        s.push(a.x, a.y, a.z);
    e[0].setAttribute("position", new H(n, 3)),
      e[1].setAttribute("position", new H(s, 3));
    const t = [
      new D({ color: 10263708, size: 2, sizeAttenuation: !1 }),
      new D({ color: 10263708, size: 1, sizeAttenuation: !1 }),
      new D({ color: 8618883, size: 1, sizeAttenuation: !1 }),
      new D({ color: 5921370, size: 2, sizeAttenuation: !1 }),
      new D({ color: 5921370, size: 1, sizeAttenuation: !1 }),
    ];
    for (let r = 10; r < 30; r++) {
      const l = new Z(e[r % 2], t[r % 6]);
      (l.rotation.x = Math.random() * 10),
        (l.rotation.y = Math.random() * 10),
        (l.rotation.z = Math.random() * 10),
        l.scale.setScalar(r * 10),
        (l.matrixAutoUpdate = !1),
        l.updateMatrix(),
        (this.stars = l),
        this.scene.add(l);
    }
  }
  createChinaLine() {
    let e = this.assets.getResource("china"),
      n = G(e),
      s = W(100.08, n, {
        color: 16777215,
        transparent: !0,
        opacity: 0.2,
        depthWrite: !1,
        depthTest: !1,
      });
    (s.renderOrder = 99), this.globe.add(s);
  }
  createCountryLine() {
    let e = this.assets.getResource("world"),
      n = G(e),
      s = W(100.1, n, {
        color: 16777215,
        transparent: !0,
        opacity: 0.2,
        depthWrite: !1,
      });
    this.globe.add(s);
  }
  createCountryNameLabel() {
    let e = new z(),
      n = [...Y],
      s = new Fe();
    n.map((a) => {
      let t = 101.6;
      a.name === "中国" && (t = 106);
      let { x: r, y: l, z: i } = N(a.centroid[0] + 2, a.centroid[1] - 5, t),
        o = s.createSpriteLabel({
          font: "bold 30px 微软雅黑",
          name: a.name,
          position: new x(r, l, i),
          width: 200,
          height: 100,
          scale: 3,
          isSprite: !1,
        });
      e.add(o);
    }),
      this.globe.add(e);
  }
  createArcAll() {
    let e = [...Y],
      n = e[0];
    e.splice(0, 1);
    let s = 100.001,
      a = 25,
      t = [],
      r = [],
      l = new z();
    l.name = "arcAll";
    const i = (m = []) => {
      let w = N(...m, s);
      return new x(w.x, w.y, w.z);
    };
    for (let m = 0; m < e.length; m++) {
      var o = i([n.centroid[0], n.centroid[1]]),
        u = i([e[m].centroid[0], e[m].centroid[1]]),
        c = 1 + 0.005 * re(o, u),
        d = new x();
      d.addVectors(o, u), d.normalize().multiplyScalar(s * c);
      var h = 1 + 0.005 * re(o, d),
        f = new x();
      f.addVectors(o, d), f.normalize().multiplyScalar(s * h);
      var g = new x();
      g.addVectors(d, u), g.normalize().multiplyScalar(s * h);
      var y = new we(o, f, g, u),
        b = y.getPoints(a);
      for (let w = 0; w < a; w++)
        t.push(b[w]),
          t.push(b[w + 1]),
          r.push({ alpha: 0 }),
          r.push({ alpha: 0 });
    }
    let v = new _(),
      k = new J({
        linewidth: 1,
        color: new M("#ffffff"),
        blending: L,
        opacity: 0.8,
        transparent: !0,
      });
    var T = new Float32Array(3 * t.length),
      U = new Float32Array(t.length);
    for (let m = 0; m < t.length; m++)
      (T[3 * m] = t[m].x),
        (T[3 * m + 1] = t[m].y),
        (T[3 * m + 2] = t[m].z),
        (U[m] = 0);
    v.setAttribute("position", new B(T, 3));
    let F = new se(v, k);
    l.add(F), (l.visible = !1), this.globe.add(l);
    let O = new J({
      color: 16777215,
      blending: L,
      fog: !1,
      opacity: 0.2,
      transparent: !0,
    });
    O.onBeforeCompile = (m) => {
      (m.uniforms = { ...m.uniforms, color: { value: new M("#ffffff") } }),
        (m.vertexShader = m.vertexShader.replace(
          "void main() {",
          `
        attribute float alpha;
		    varying float vAlpha;

        void main() {
          vAlpha = alpha;
              `
        )),
        (m.fragmentShader = m.fragmentShader.replace(
          "void main() {",
          `
          uniform vec3 color;
          varying float vAlpha;
          void main() {
        `
        )),
        (m.fragmentShader = m.fragmentShader.replace(
          "#include <opaque_fragment>",
          `

              #ifdef OPAQUE
              diffuseColor.a = 1.0;
              #endif

              #ifdef USE_TRANSMISSION
              diffuseColor.a *= material.transmissionAlpha;
              #endif

              gl_FragColor = vec4( outgoingLight, diffuseColor.a );
              gl_FragColor = vec4(  color, diffuseColor.a * vAlpha );
              // gl_FragColor = vec4(color , diffuseColor.a );
              `
        ));
    };
    let S = new z();
    S.name = "Rocket";
    let C = F.clone();
    (C.geometry = F.geometry.clone()),
      C.geometry.setAttribute("position", new B(T, 3)),
      C.geometry.setAttribute("alpha", new B(U, 1)),
      (C.material = O),
      S.add(C),
      (S.visible = !0),
      this.globe.add(S);
    let A = null;
    (A = q.timeline({
      paused: !0,
      repeat: 0,
      onUpdate: function () {
        le();
      },
      onComplete: () => {
        console.log("完成"), this.createFlyLine(e, C, a);
      },
    })),
      A.fromTo(
        r,
        { alpha: 0 },
        { alpha: 1, duration: 0.25, stagger: 0.025 },
        0
      ),
      A.timeScale(2);
    function le() {
      var m = null,
        w = C.geometry.attributes;
      for (let V = 0; V < r.length; V++)
        (m = r[V]), (w.alpha.array[V] = m.alpha), (w.alpha.needsUpdate = !0);
    }
    setTimeout(() => {
      ce();
    }, 2e3);
    function ce() {
      A.pause();
      for (var m = C.geometry.attributes, w = 0; w < r.length; w++)
        m.alpha.array[w] = 0;
      (m.alpha.needsUpdate = !0), (S.visible = !0), A.play(0);
    }
  }
  createFlyLine(e, n, s) {
    let a = [],
      t = n.geometry.attributes.position.array,
      r = s * 2,
      l = [];
    for (let c = 0; c < t.length; c += 3) {
      let d = t[c],
        h = t[c + 1],
        f = t[c + 2];
      l.push(new x(d, h, f));
    }
    e.map((c, d) => {
      let h = l.slice(d * r, r * (d + 1));
      a.push(h);
    });
    const i = this.assets.getResource("pathLine").clone();
    (i.wrapS = i.wrapT = j), i.repeat.set(1, 1);
    const o = new P({
      color: 65535,
      map: i,
      alphaMap: i,
      fog: !1,
      transparent: !0,
      depthWrite: !1,
      opacity: 1,
      blending: L,
    });
    (this.flyLineArr = []),
      a.map((c) => {
        let d = c,
          h = new E(d),
          f = { segments: 32, radius: 0.2, radialSegments: 8 };
        const g = new ne(h, f.segments, f.radius, f.radialSegments, !1),
          y = new R(g, o);
        this.flyLineArr.push(y), this.globe.add(y);
      }),
      this.effect.selection.set([this.line3]);
    let u = { opacity: 0 };
    q.to(u, {
      opacity: 0.6,
      onUpdate: () => {
        this.effect.blendMode.opacity.value = u.opacity;
      },
    }),
      this.time.on("tick", (c, d) => {
        (o.opacity += c),
          o.opacity > 1 && (o.opacity = 1),
          (i.offset.x -= 0.2 * c);
      });
  }
  createFlyLine1(e, n, s) {
    let a = [],
      t = n.geometry.attributes.position.array,
      r = s * 2,
      l = [];
    for (let d = 0; d < t.length; d += 3) {
      let h = t[d],
        f = t[d + 1],
        g = t[d + 2];
      l.push(new x(h, f, g));
    }
    e.map((d, h) => {
      let f = l.slice(h * r, r * (h + 1));
      a.push(f);
    });
    let i = [],
      o = 5,
      u = 5;
    a.map((d) => {
      let h = d.slice(o, o + u),
        g = new E(h).getSpacedPoints(100),
        y = new _();
      y.setFromPoints(g);
      let b = [],
        v = [];
      for (var k = 0; k < g.length; k++) {
        b.push(k / g.length);
        let S = new M("#ffffff"),
          C = new M("rgb(3, 156, 255)"),
          A = S.lerp(C, k / g.length);
        v.push(A.r, A.g, A.b);
      }
      let T = new H(b, 1);
      y.setAttribute("percent", T);
      let U = new H(v, 3);
      y.setAttribute("color", U);
      let F = new D({
          size: 3,
          transparent: !0,
          vertexColors: !0,
          blending: L,
        }),
        O = new Z(y, F);
      (F.onBeforeCompile = (S) => {
        (S.vertexShader = S.vertexShader.replace(
          "void main() {",
          `
            attribute float percent;
            void main() {
        `
        )),
          (S.vertexShader = S.vertexShader.replace(
            "gl_PointSize = size;",
            `
            gl_PointSize = percent * size;
          `
          ));
      }),
        i.push(O),
        this.globe.add(O);
    });
    let c = r - u;
    this.time.on("tick", (d, h) => {
      (o += d * 50 * 0.8),
        o >= c && (o = 0),
        a.map((f, g) => {
          let y = f.slice(o, o + u),
            v = new E(y).getSpacedPoints(100);
          i[g].geometry.setFromPoints(v);
        });
    });
  }
  createFlyLine2(e, n, s) {
    let a = [],
      t = n.geometry.attributes.position.array,
      r = s * 2,
      l = [];
    for (let h = 0; h < t.length; h += 3) {
      let f = t[h],
        g = t[h + 1],
        y = t[h + 2];
      l.push(new x(f, g, y));
    }
    e.map((h, f) => {
      let g = l.slice(f * r, r * (f + 1));
      a.push(g);
    }),
      console.log(a);
    let i = [],
      o = 0,
      u = 5;
    a.map((h) => {
      let f = h.slice(o, o + u),
        y = new E(f).getSpacedPoints(100),
        b = new _();
      b.setFromPoints(y);
      let v = new xe(b, new J({ color: 16777215 }));
      i.push(v), this.globe.add(v);
    });
    let c = r - u,
      d = { index: 0 };
    q.to(d, {
      index: c,
      duration: 1.5,
      repeat: -1,
      ease: "none",
      onUpdate: () => {
        a.map((h, f) => {
          let g = h.slice(d.index, d.index + u),
            b = new E(g).getSpacedPoints(100);
          i[f].geometry.setFromPoints(b);
        });
      },
    });
  }
  createGrid() {
    const e = this.assets.getResource("grid"),
      n = this.assets.getResource("gridBlack");
    (n.wrapS = n.wrapT = e.wrapS = e.wrapT = j),
      e.repeat.set(320, 320),
      n.repeat.set(320, 320);
    let s = new Q(100.1, 100, 100),
      a = new P({
        color: 7243677,
        map: e,
        alphaMap: n,
        transparent: !0,
        opacity: 0,
        blending: L,
      });
    new ot({
      material: a,
      time: this.time,
      size: 520,
      diffuseSpeed: 200,
      diffuseColor: 16777215,
      diffuseHeight: 820,
      diffuseStart: 110,
    });
    let t = new R(s, a);
    this.scene.add(t);
  }
  createStorke() {
    const e = this.assets.getResource("pathLine").clone();
    (e.wrapS = e.wrapT = j), e.repeat.set(0.25, 0.25);
    let n = this.assets.getResource("chinaStorke");
    n = JSON.parse(n);
    let s = n.features.map((t) => ({ geometry: t.geometry })),
      a = new lt(this, {
        data: s,
        texture: e,
        renderOrder: 21,
        speed: 0.2,
        radius: 0.2,
        segments: 256 * 10,
        radialSegments: 4,
        customRunCallback: function (t, r, l) {
          l.offset.x > 1 && (l.offset.x = 1),
            (l.offset.x += this.options.speed * t);
        },
        material: new P({
          color: 16777215,
          map: e,
          alphaMap: e,
          fog: !1,
          transparent: !0,
          opacity: 1,
          blending: L,
        }),
      });
    a.setParent(this.globe), (this.storkePath = a);
  }
  update() {
    super.update(),
      this.stats && this.stats.update(),
      this.interactionManager && this.interactionManager.update();
  }
  destroy() {
    super.destroy(),
      this.debug.destroy(),
      document.body.removeChild(this.stats.dom);
  }
}
const mt = (p) => (pushScopeId("data-v-93e73cc4"), (p = p()), popScopeId(), p),
  gt = { class: "globe" },
  yt = mt(() => createElementVNode("canvas", { id: "canvas" }, null, -1)),
  wt = [yt],
  xt = {
    __name: "earth03",
    setup(p) {
      let e = null;
      return (
        onMounted(() => {
          e = new ft(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (n, s) => (openBlock(), createElementBlock("div", gt, wt))
      );
    },
  },
  Ot = Ze(xt, [["__scopeId", "data-v-93e73cc4"]]);
export { Ot as default };
