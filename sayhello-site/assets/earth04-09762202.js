import {
  C as L,
  F as he,
  G as M,
  M as v,
  n as S,
  V as b,
  v as se,
  T as re,
  b as A,
  L as j,
  a2 as R,
  B as F,
  a9 as ne,
  c as pe,
  D as N,
  A as ue,
  h as de,
  i as fe,
  m as V,
  a as me,
  r as ge,
  q as ye,
  R as _,
  a3 as q,
  l as X,
  s as K,
  p as k,
  t as be,
  ab as we,
} from "./OrbitControls-9c9ee6bc.js";
import { R as xe, m as Se, p as oe, M as ve } from "./index-1453e2ee.js";
import {
  l as B,
  d as Ce,
  a as Q,
  m as Z,
  t as O,
  g as Me,
} from "./utils-9af1928d.js";
import { D as Le } from "./index-4ec0cc76.js";
import {
  e as Ae,
  a as Re,
  b as Te,
  s as Pe,
  g as ze,
  c as _e,
  d as ke,
  D as Oe,
  L as Be,
} from "./index-1003c0d2.js";
import {
  e as Fe,
  a as Ge,
  b as De,
  h as Ee,
  p as Ie,
  l as Ne,
  G as Ue,
} from "./光柱-48fdbf5f.js";
import { R as He } from "./RippleCirle-e198a9fe.js";
import { g as x } from "./index-4db78ffb.js";
import { s as Ve } from "./stats.module-077ce25d.js";
import { g as We, f as je } from "./gradient-c3ffacd2.js";
import { f as Je } from "./flyLine2-e7135ba7.js";
import { p as Ye } from "./pathLine2-dee41061.js";
import { u as qe } from "./uv-77714551.js";
import { a as Xe } from "./three.interactive-c6512469.js";
import {
  O as Ke,
  B as $,
  E as Qe,
  R as Ze,
  a as $e,
  K as ee,
} from "./index-5b3afbff.js";
import { _ as et } from "./_plugin-vue_export-helper-c27b6911.js";
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
class lt {
  constructor({
    material: e,
    time: s,
    size: n,
    diffuseColor: r,
    diffuseSpeed: t,
    diffuseHeight: a,
    diffuseStart: i,
  }) {
    this.time = s;
    let o = {
      size: 100,
      diffuseSpeed: 15,
      diffuseColor: 9345950,
      diffuseHeight: 10,
      diffuseStart: 1,
    };
    (this.options = Object.assign({}, o, {
      material: e,
      size: n,
      diffuseColor: r,
      diffuseSpeed: t,
      diffuseHeight: a,
      diffuseStart: i,
    })),
      this.init();
  }
  init() {
    let e = null,
      {
        material: s,
        size: n,
        diffuseColor: r,
        diffuseSpeed: t,
        diffuseHeight: a,
        diffuseStart: i,
      } = this.options,
      o = n / t;
    (s.onBeforeCompile = (l) => {
      (e = l),
        (l.uniforms = {
          ...l.uniforms,
          uTime: { value: 0 },
          uSpeed: { value: t },
          uHeight: { value: a },
          uStart: { value: i },
          uColor: { value: new L(r) },
        }),
        (l.vertexShader = l.vertexShader.replace(
          "void main() {",
          `
            varying vec3 vPosition;
            void main(){
              vPosition = position;
          `
        )),
        (l.fragmentShader = l.fragmentShader.replace(
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
        (l.fragmentShader = l.fragmentShader.replace(
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
      this.time.on("tick", (l) => {
        e &&
          ((e.uniforms.uTime.value += l),
          e.uniforms.uTime.value > o && (e.uniforms.uTime.value = 0));
      });
  }
}
class ct {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new xe()),
      this.instance.addLoader(he, "FileLoader"),
      this.instance.on("onProgress", (n, r, t) => {
        ((r / t) * 100).toFixed(2) + "";
      }),
      this.instance.on("onLoad", () => {
        this.onLoadCallback && this.onLoadCallback();
      });
    let e = "/sayhello-site/",
      s = [
        { type: "Texture", name: "earthAtmos", path: Ae },
        { type: "Texture", name: "earthNight", path: Re },
        { type: "Texture", name: "earthClouds", path: Fe },
        { type: "Texture", name: "earthNormal", path: Ge },
        { type: "Texture", name: "earthBump", path: Te },
        { type: "Texture", name: "earthSpecular", path: De },
        { type: "Texture", name: "highLight", path: Ee },
        { type: "Texture", name: "huiguang", path: We },
        { type: "Texture", name: "pointLight", path: Ie },
        { type: "Texture", name: "lightPillar", path: Ne },
        { type: "Texture", name: "flyLine", path: Je },
        { type: "Texture", name: "skyBg", path: Pe },
        { type: "Texture", name: "gridBlack", path: ze },
        { type: "Texture", name: "grid", path: _e },
        { type: "Texture", name: "pathLine", path: Ye },
        { type: "Texture", name: "flowY", path: je },
        { type: "Texture", name: "uv", path: qe },
        { type: "Texture", name: "chinaGlow", path: ke },
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
    this.instance.loadAll(s);
  }
}
const W = [
  { name: "中国", centroid: [106, 33] },
  { name: "日本", centroid: [142, 43] },
  { name: "印度", centroid: [77, 28] },
  { name: "俄罗斯", centroid: [75.12973298046873, 58.7599727536235] },
  { name: "澳大利亚", centroid: [135, -23] },
  { name: "美国", centroid: [-101, 39] },
];
class te {
  constructor({ time: e }, s) {
    (this.time = e), (this.instance = new M()), (this.run = !0);
    let n = {
      speed: 0.003,
      texture: null,
      radius: 0.1,
      segments: 32,
      radialSegments: 8,
      data: [],
      renderOrder: 1,
      globeRadius: 100.5,
      customRunCallback: null,
      material: new v({
        color: 16777215,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        depthWrite: !1,
        blending: S,
      }),
    };
    (this.options = Object.assign({}, n, s)), this.init();
  }
  init() {
    const {
      material: e,
      texture: s,
      segments: n,
      radius: r,
      radialSegments: t,
      data: a,
      speed: i,
      renderOrder: o,
      globeRadius: l,
    } = this.options;
    a.map((p) => {
      let c = [];
      p.geometry.coordinates.map((w) => {
        w[0].forEach((y) => {
          let { x: G, y: D, z: U } = B(...y, l);
          c.push(new b(G, D, U));
        });
      });
      const d = new se(c),
        f = new re(d, n, r, t, !1),
        m = new A(f, e);
      m.position.set(0, 0, 0), (m.renderOrder = o), this.instance.add(m);
    }),
      (s.offset.x = 0.5),
      this.time.on("tick", (p, c) => {
        this.run &&
          (this.options.customRunCallback
            ? this.options.customRunCallback.call(this, p, c, s)
            : (s.offset.x += i * p));
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
const ie = (h, e, s) => {
    var n = (e * Math.PI) / 180,
      r = (s * Math.PI) / 180;
    n = -n;
    var t = h * Math.cos(r) * Math.cos(n),
      a = h * Math.sin(r),
      i = h * Math.cos(r) * Math.sin(n);
    return { x: t, y: a, z: i };
  },
  I = (h, e, s = {}) => {
    let n = { color: 65535 };
    n = Ce(n, s);
    const r = new j(n);
    let t = e.features,
      a = ht(t);
    const i = new R(new Float32Array(a), 3),
      o = new F();
    o.attributes.position = i;
    let l = new ne(o, r);
    return l.scale.set(h, h, h), (l.name = "createCountryMergeSphereLine"), l;
  };
function ht(h) {
  let e = [];
  for (let s = 0; s < h.length; s++)
    h[s].geometry.coordinates.forEach((r) => {
      const t = [];
      r[0].forEach((a) => {
        let { x: i, y: o, z: l } = ie(1, ...a);
        t.push(
          parseFloat(i.toFixed(3)),
          parseFloat(o.toFixed(3)),
          parseFloat(l.toFixed(3))
        );
      }),
        e.push(t[0], t[1], t[2]);
      for (let a = 3; a < t.length; a += 3)
        e.push(t[a], t[a + 1], t[a + 2], t[a], t[a + 1], t[a + 2]);
      e.push(t[0], t[1], t[2]);
    });
  return e;
}
function ae(h, e) {
  return Math.sqrt(
    (e.x - h.x) * (e.x - h.x) +
      (e.y - h.y) * (e.y - h.y) +
      (e.z - h.z) * (e.z - h.z)
  );
}
const pt = (h, e = 100) => {
    let s = h.features,
      n = [];
    for (let r = 0; r < s.length; r++) {
      let t = s[r].geometry.coordinates,
        a = s[r].properties.name,
        i = [];
      t.forEach((c) => {
        let { index: d, coords: f } = ut(c[0], e),
          m = new F();
        m.setIndex(new R(new Uint16Array(d), 1)),
          m.setAttribute("position", new R(new Float32Array(f), 3));
        let w = new Float32Array((f.length / 3) * 2);
        for (let y = 0; y < f.length; y += 3)
          (w[(y / 3) * 2] = f[y]), (w[(y / 3) * 2 + 1] = f[y + 1]);
        m.setAttribute("uv", new R(w, 2)), i.push(m);
      });
      let o = null;
      i.length > 1 ? (o = Se(i)) : i.length === 1 && (o = i[0]),
        o.computeVertexNormals();
      let l = new pe({ color: 65535, side: N }),
        p = new A(o, l);
      (p.name = a), n.push(p);
    }
    return n;
  },
  ut = (h, e = 100) => {
    let s = [];
    for (let r = 0; r < h.length; r++) s.push(new b(h[r][0], h[r][1], 0));
    let { scopeInsidePoint: n } = dt(s);
    return (n = s.concat(n)), ft(s, n, e);
  },
  dt = (h, e = 3) => {
    let s = h.map((c) => [c.x, c.y]),
      n = Math.floor(
        Q(h, function (c) {
          return c.x;
        }).x
      ),
      r = Math.ceil(
        Z(h, function (c) {
          return c.x;
        }).x
      ),
      t = Math.floor(
        Q(h, function (c) {
          return c.y;
        }).y
      ),
      a = Math.ceil(
        Z(h, function (c) {
          return c.y;
        }).y
      ),
      i = Math.ceil((r - n) / e),
      o = Math.ceil((a - t) / e),
      l = [];
    for (let c = 0; c < i + 1; c++) {
      let d = n + c * e;
      for (let f = 0; f < o + 1; f++) {
        let m = t + f * e;
        l.push([d, m]);
      }
    }
    return {
      scopeInsidePoint: l
        .filter((c) => oe(c, s))
        .map((c) => new b(c[0], c[1], 0)),
      scopePoint: l,
    };
  },
  ft = (h, e, s = 100) => {
    let n = h.map((o) => [o.x, o.y]),
      r = [];
    e.forEach((o) => {
      let { x: l, y: p, z: c } = ie(s, o.x, o.y);
      r.push(l, p, c);
    });
    let t = e.map((o) => [o.x, o.y]),
      a = Oe.from(t).triangles,
      i = [];
    for (let o = 0; o < a.length; o += 3) {
      let l = e[a[o]],
        p = e[a[o + 1]],
        c = e[a[o + 2]],
        d = [(l.x + p.x + c.x) / 3, (l.y + p.y + c.y) / 3];
      oe(d, n) && i.push(a[o + 2], a[o + 1], a[o]);
    }
    return { index: i, coords: r };
  };
class mt extends ve {
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
        this.initModel(), this.initAnimate(), this.post();
      });
  }
  initAnimate() {
    let e = new x.timeline({ repeat: 0 });
    e.addLabel("globeRotate", 0),
      e.addLabel("globeScale", 2),
      e.add(
        x.to(this.globe.instance.rotation, {
          duration: 4,
          y: Math.PI + 0.2,
          ease: "power1.inOut",
        })
      ),
      e.add(
        x.to(this.globe.instance.position, {
          duration: 1,
          x: -70,
          y: -100,
          ease: "power1.inOut",
          delay: 0.5,
        }),
        "globeScale"
      ),
      e.add(
        x.to(this.globe.instance.scale, {
          duration: 1.5,
          x: 2.2,
          y: 2.2,
          z: 2.2,
          ease: "power1.inOut",
          onComplete: () => {
            this.storkePath.run = !0;
          },
        }),
        "globeScale"
      );
  }
  post() {
    const e = new Ke(this.scene, this.camera.instance, {
      blendFunction: $.ADD,
      edgeStrength: 8,
      pulseSpeed: 0,
      multisampling: 0,
      visibleEdgeColor: 3763936,
      hiddenEdgeColor: 3763936,
      height: 480,
      blur: !0,
      xRay: !0,
    });
    (e.resolution.height = 720),
      (e.blurPass.enabled = !0),
      (e.blurPass.blurMaterial.kernelSize = 3),
      (e.blendMode.opacity.value = 0);
    const s = new Qe(this.renderer.instance);
    s.addPass(new Ze(this.scene, this.camera.instance));
    const n = new $e(this.camera.instance, e);
    s.addPass(n),
      (this.effect = e),
      this.effect.selection.set([this.line3]),
      (this.renderer.composer = s),
      (this.renderer.postprocessing = !0);
    const r = new L(),
      t = this.effect,
      a = t.uniforms,
      i = t.blendMode,
      o = {
        resolution: t.height,
        blurriness: 0,
        "use pattern": !1,
        "pattern scale": 60,
        "pulse speed": t.pulseSpeed,
        "edge strength": t.edgeStrength,
        "visible edge": r.copyLinearToSRGB(t.visibleEdgeColor).getHex(),
        "hidden edge": r.copyLinearToSRGB(t.hiddenEdgeColor).getHex(),
        "x-ray": !0,
        opacity: i.opacity.value,
        "blend mode": i.blendFunction,
      };
    this.debug.instance
      .add(o, "resolution", [240, 360, 480, 720, 1080])
      .onChange((l) => {
        t.resolution.height = Number(l);
      }),
      this.debug.instance.add(t, "multisampling", [0, 2, 4]),
      this.debug.instance
        .add(o, "blurriness", ee.VERY_SMALL, ee.HUGE + 1, 1)
        .onChange((l) => {
          (t.blurPass.enabled = l > 0),
            (t.blurPass.blurMaterial.kernelSize = l - 1);
        }),
      this.debug.instance
        .add(o, "pattern scale", 20, 100, 0.1)
        .onChange((l) => {
          a.get("patternScale").value = l;
        }),
      this.debug.instance.add(o, "edge strength", 0, 10, 0.01).onChange((l) => {
        a.get("edgeStrength").value = l;
      }),
      this.debug.instance.add(o, "pulse speed", 0, 2, 0.01).onChange((l) => {
        t.pulseSpeed = l;
      }),
      this.debug.instance.addColor(o, "visible edge").onChange((l) => {
        t.visibleEdgeColor.setHex(l).convertSRGBToLinear();
      }),
      this.debug.instance.addColor(o, "hidden edge").onChange((l) => {
        t.hiddenEdgeColor.setHex(l).convertSRGBToLinear();
      }),
      this.debug.instance.add(t, "xRay"),
      this.debug.instance.add(o, "opacity", 0, 1, 0.01).onChange((l) => {
        i.opacity.value = l;
      }),
      this.debug.instance.add(o, "blend mode", $).onChange((l) => {
        i.setBlendFunction(Number(l));
      });
  }
  initEnvironment() {
    let e = new ue(16777215, 2);
    this.scene.add(e);
    let s = new de(16777215, 3);
    s.position.set(-21, -30, -10), (s.castShadow = !0);
    let n = new fe(s, 20);
    this.scene.add(s, n);
    const r = this.debug.instance.addFolder("Environment");
    r.add(s.position, "x", -300, 300, 1),
      r.add(s.position, "y", -300, 300, 1),
      r.add(s.position, "z", -300, 300, 1),
      r.onChange((t) => {
        n.update();
      });
  }
  initAssets(e) {
    let s = new ct(e);
    this.assets = s.instance;
  }
  initRender() {
    this.renderer.instance.setClearColor(0, 0);
  }
  initSetting() {
    (this.debug = new Le(!0)),
      (this.stats = new Ve()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(300);
  }
  initModel() {
    const e = this.assets.getResource("earthAtmos"),
      s = this.assets.getResource("earthNight"),
      n = this.assets.getResource("earthNormal");
    this.assets.getResource("earthBump");
    const r = this.assets.getResource("earthSpecular"),
      t = this.assets.getResource("highLight");
    (t.colorSpace = V), (e.colorSpace = V);
    let a = new Ue(this, {
      globeColor: 16777215,
      globeImage: e,
      globeNightImage: s,
      normalImage: n,
      normalScale: new me(6, 6),
      specularImage: r,
      atmosphereColor: new L("#396ee0"),
      atmosphereAltitude: 0.22,
      atmospherePower: 40,
    });
    (a.instance.rotation.y = -1 * Math.PI),
      a.instance.scale.set(0.5, 0.5, 0.5),
      a.setParent(this.scene),
      this.debug.instance
        .addFolder("globe")
        .addColor(a.globeObj.material, "color")
        .onChange((m) => {
          a.shader.uniforms.uColor.value = new L(m);
        }),
      (this.globe = a);
    let o = new ge(
      new ye({
        color: 3763936,
        side: N,
        map: t,
        transparent: !0,
        alphaMap: t,
        depthTest: !1,
        blending: S,
      })
    );
    o.scale.set(100 * 2.5, 100 * 2.5, 0), (o.renderOrder = 2);
    let l = this.createRippleCirle();
    a.add(l), this.globe.add(o), this.createStars(), this.createGrid();
    let p = this.createChinaWall(),
      { chinaMeshsGroup: c, chinaMeshsMaterial: d } = this.createChinaMesh(),
      f = this.createChinaLine();
    (this.chinaLine = f),
      p.add(f, c),
      this.createTopStorke(),
      this.createStorke(() => {
        x.to(p.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "power1.inOut",
          onComplete: () => {
            console.log("缩放完成"), this.createArcAll();
          },
        }),
          x.to(this.chinaLine.material, { opacity: 0.2, delay: 0.7 }),
          x.to(this.line3.material, { opacity: 1, delay: 0.7 }),
          x.to(d, { opacity: 0.5, delay: 0.7 }),
          (p.visible = !0);
      });
  }
  createChinaWall() {
    let e = new M(),
      s = this.assets.getResource("chinaStorke");
    (s = O(s)),
      s.features[0].geometry.coordinates[0].map((i) => {
        i.map((o) => {
          B(...o, 110);
        });
      });
    let n = this.assets.getResource("chinaStorke"),
      r = O(n);
    for (let i = 0; i < 40; i++) {
      let o = I(100 + i * 0.1, r, {
        color: 4809093,
        transparent: !0,
        opacity: 0.5,
      });
      e.add(o);
    }
    let t = I(104.2, r, {
      color: 13299455,
      transparent: !0,
      opacity: 0,
      depthWrite: !1,
      depthTest: !1,
    });
    (t.renderOrder = 100),
      (this.line3 = t),
      e.add(t),
      this.globe.add(e),
      (this.wallGroup = e),
      e.scale.set(0.7, 0.7, 0.7);
    const a = this.debug.instance.addFolder("wall");
    return (
      a.add(e.position, "x", -100, 100, 0.1).onChange((i) => {
        e.position.x = Number(i);
      }),
      a.add(e.position, "y", -100, 100, 0.1).onChange((i) => {
        e.position.y = Number(i);
      }),
      a.add(e.position, "z", -100, 100, 0.1).onChange((i) => {
        e.position.z = Number(i);
      }),
      e
    );
  }
  createChinaMesh() {
    let e = this.assets.getResource("chinaGlow");
    (e.wrapS = e.wrapT = _),
      (e.rotation = Math.PI),
      (e.colorSpace = V),
      (e.flipY = !1),
      e.offset.set(0, 0);
    let s = this.assets.getResource("china");
    s = O(s);
    let n = pt(s, 103.9),
      r = new M();
    r.add(...n);
    let { boxSize: t, box3: a } = Me(r),
      i = new v({
        color: 16777215,
        map: e,
        transparent: !0,
        side: N,
        opacity: 0,
        depthWrite: !1,
        depthTest: !1,
      });
    return (
      r.traverse((o) => {
        o.isMesh &&
          ((o.material = i),
          (o.renderOrder = 99),
          this.calcUv2(o.geometry, t.x, t.y, a.min.x, a.min.y));
      }),
      { chinaMeshsGroup: r, chinaMeshsMaterial: i }
    );
  }
  calcUv2(e, s, n, r, t) {
    const a = e.attributes.position,
      i = e.attributes.uv;
    for (let o = 0; o < a.count; o++) {
      const l = a.getX(o),
        p = a.getY(o),
        c = (l - r) / s,
        d = (p - t) / n;
      i.setXY(o, c, d);
    }
    (i.needsUpdate = !0), e.computeVertexNormals();
  }
  createCloud() {
    const n = this.assets.getResource("earthClouds"),
      r = new q(100 * 1.01, 75, 75),
      t = new v({ map: n, transparent: !0, opacity: 0.1, depthTest: !1 }),
      a = new A(r, t);
    this.globe.add(a),
      this.time.on("tick", () => {
        a.rotation.y += (-0.04 * Math.PI) / 180;
      });
  }
  createLightPillar(e, s) {
    const n = new M(),
      r = this.assets.getResource("lightPillar");
    let t = 41 / 200,
      a = e / t;
    const i = new X(e, a);
    i.rotateX(Math.PI / 2), i.translate(0, 0, a / 2);
    const o = new v({
        map: r,
        transparent: !0,
        side: N,
        depthWrite: !1,
        blending: S,
        color: s,
      }),
      l = new A(i, o),
      p = l.clone();
    return (p.rotation.z = Math.PI / 2), n.add(l, p), n;
  }
  createPointLight(e, s) {
    const n = this.assets.getResource("pointLight"),
      r = new X(e, e),
      t = new v({
        map: n,
        transparent: !0,
        depthWrite: !1,
        color: s,
        blending: S,
      });
    return new A(r, t);
  }
  createRippleCirle() {
    let e = new M();
    return (
      W.map((n, r) => ({
        lat: n.centroid[0],
        lng: n.centroid[1],
        maxR: Math.random() * 20 + 3,
        propagationSpeed: (Math.random() - 0.5) * 20 + 1,
        repeatPeriod: Math.random() * 2e3 + 200,
        color: new L("rgb(57,110,224)"),
        name: n.name,
      })).forEach((n, r) => {
        let t = 100.5;
        n.name === "中国" && (t = 104.6);
        let a = new He(this, {
          number: 3,
          radius: 3,
          frequency: 2,
          color: n.color,
        });
        a.setParent(e);
        let i = B(n.lat, n.lng, t);
        a.setPosition(new b(i.x, i.y, i.z));
        var o = new b(i.x, i.y, i.z).normalize(),
          l = new b(0, 0, 1);
        a.instance.quaternion.setFromUnitVectors(l, o);
        let p = this.createPointLight(6, n.color);
        a.instance.add(p);
        let c = this.createLightPillar(4, n.color);
        a.instance.add(c);
      }),
      e
    );
  }
  createStars() {
    const e = [new F(), new F()],
      s = [],
      n = [],
      r = new b();
    for (let a = 0; a < 250; a++)
      (r.y = Math.random() * 2 - 1),
        (r.z = Math.random() * 2 - 1),
        r.multiplyScalar(20),
        s.push(r.x, r.y, r.z);
    for (let a = 0; a < 1500; a++)
      (r.x = Math.random() * 2 - 1),
        (r.y = Math.random() * 2 - 1),
        (r.z = Math.random() * 2 - 1),
        r.multiplyScalar(10),
        n.push(r.x, r.y, r.z);
    e[0].setAttribute("position", new K(s, 3)),
      e[1].setAttribute("position", new K(n, 3));
    const t = [
      new k({ color: 10263708, size: 2, sizeAttenuation: !1 }),
      new k({ color: 10263708, size: 1, sizeAttenuation: !1 }),
      new k({ color: 8618883, size: 1, sizeAttenuation: !1 }),
      new k({ color: 5921370, size: 2, sizeAttenuation: !1 }),
      new k({ color: 5921370, size: 1, sizeAttenuation: !1 }),
    ];
    for (let a = 10; a < 30; a++) {
      const i = new be(e[a % 2], t[a % 6]);
      (i.rotation.x = Math.random() * 10),
        (i.rotation.y = Math.random() * 10),
        (i.rotation.z = Math.random() * 10),
        i.scale.setScalar(a * 10),
        (i.matrixAutoUpdate = !1),
        i.updateMatrix(),
        (this.stars = i),
        this.scene.add(i);
    }
  }
  createChinaLine() {
    let e = this.assets.getResource("china"),
      s = O(e),
      n = I(100.08, s, {
        color: 16777215,
        transparent: !0,
        opacity: 0,
        depthWrite: !1,
        depthTest: !1,
      });
    return (n.renderOrder = 99), (n.name = "chinaLine"), n;
  }
  createCountryLine() {
    let e = this.assets.getResource("world"),
      s = O(e),
      n = I(100.1, s, {
        color: 16777215,
        transparent: !0,
        opacity: 0.2,
        depthWrite: !1,
      });
    this.globe.add(n);
  }
  createCountryNameLabel() {
    let e = new M(),
      s = [...W],
      n = new Be();
    s.map((r) => {
      let t = 101.6;
      r.name === "中国" && (t = 106);
      let { x: a, y: i, z: o } = B(r.centroid[0] + 2, r.centroid[1] - 5, t),
        l = n.createSpriteLabel({
          font: "bold 30px 微软雅黑",
          name: r.name,
          position: new b(a, i, o),
          width: 200,
          height: 100,
          scale: 3,
          isSprite: !1,
        });
      e.add(l);
    }),
      this.globe.add(e);
  }
  createArcAll() {
    let e = [...W],
      s = e[0];
    e.splice(0, 1);
    let n = 100.001,
      r = 25,
      t = [],
      a = [],
      i = new M();
    i.name = "arcAll";
    const o = (u = []) => {
      let g = B(...u, n);
      return new b(g.x, g.y, g.z);
    };
    for (let u = 0; u < e.length; u++) {
      var l = o([s.centroid[0], s.centroid[1]]),
        p = o([e[u].centroid[0], e[u].centroid[1]]),
        c = 1 + 0.005 * ae(l, p),
        d = new b();
      d.addVectors(l, p), d.normalize().multiplyScalar(n * c);
      var f = 1 + 0.005 * ae(l, d),
        m = new b();
      m.addVectors(l, d), m.normalize().multiplyScalar(n * f);
      var w = new b();
      w.addVectors(d, p), w.normalize().multiplyScalar(n * f);
      var y = new we(l, m, w, p),
        G = y.getPoints(r);
      for (let g = 0; g < r; g++)
        t.push(G[g]),
          t.push(G[g + 1]),
          a.push({ alpha: 0 }),
          a.push({ alpha: 0 });
    }
    let D = new F(),
      U = new j({
        linewidth: 1,
        color: new L("#ffffff"),
        blending: S,
        opacity: 0.8,
        transparent: !0,
      });
    var T = new Float32Array(3 * t.length),
      J = new Float32Array(t.length);
    for (let u = 0; u < t.length; u++)
      (T[3 * u] = t[u].x),
        (T[3 * u + 1] = t[u].y),
        (T[3 * u + 2] = t[u].z),
        (J[u] = 0);
    D.setAttribute("position", new R(T, 3));
    let H = new ne(D, U);
    i.add(H), (i.visible = !1), this.globe.add(i);
    let Y = new j({
      color: 16777215,
      blending: S,
      fog: !1,
      opacity: 0.2,
      transparent: !0,
    });
    Y.onBeforeCompile = (u) => {
      (u.uniforms = { ...u.uniforms, color: { value: new L("#ffffff") } }),
        (u.vertexShader = u.vertexShader.replace(
          "void main() {",
          `
        attribute float alpha;
		    varying float vAlpha;

        void main() {
          vAlpha = alpha;
              `
        )),
        (u.fragmentShader = u.fragmentShader.replace(
          "void main() {",
          `
          uniform vec3 color;
          varying float vAlpha;
          void main() {
        `
        )),
        (u.fragmentShader = u.fragmentShader.replace(
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
    let P = new M();
    P.name = "Rocket";
    let C = H.clone();
    (C.geometry = H.geometry.clone()),
      C.geometry.setAttribute("position", new R(T, 3)),
      C.geometry.setAttribute("alpha", new R(J, 1)),
      (C.material = Y),
      P.add(C),
      (P.visible = !0),
      this.globe.add(P);
    let z = null;
    (z = x.timeline({
      paused: !0,
      repeat: 0,
      onUpdate: function () {
        le();
      },
      onComplete: () => {
        this.createCountryNameLabel(), this.createFlyLine(e, C, r);
      },
    })),
      z.fromTo(
        a,
        { alpha: 0 },
        { alpha: 1, duration: 0.25, stagger: 0.025 },
        0
      ),
      z.timeScale(2);
    function le() {
      var u = null,
        g = C.geometry.attributes;
      for (let E = 0; E < a.length; E++)
        (u = a[E]), (g.alpha.array[E] = u.alpha), (g.alpha.needsUpdate = !0);
    }
    setTimeout(() => {
      ce();
    }, 2e3);
    function ce() {
      z.pause();
      for (var u = C.geometry.attributes, g = 0; g < a.length; g++)
        u.alpha.array[g] = 0;
      (u.alpha.needsUpdate = !0), (P.visible = !0), z.play(0);
    }
  }
  createFlyLine(e, s, n) {
    let r = [],
      t = s.geometry.attributes.position.array,
      a = n * 2,
      i = [];
    for (let c = 0; c < t.length; c += 3) {
      let d = t[c],
        f = t[c + 1],
        m = t[c + 2];
      i.push(new b(d, f, m));
    }
    e.map((c, d) => {
      let f = i.slice(d * a, a * (d + 1));
      r.push(f);
    });
    const o = this.assets.getResource("pathLine").clone();
    (o.wrapS = o.wrapT = _), o.repeat.set(1, 1);
    const l = new v({
      color: 3647231,
      map: o,
      alphaMap: o,
      fog: !1,
      transparent: !0,
      depthWrite: !1,
      opacity: 0,
      blending: S,
    });
    (this.flyLineMaterial = l),
      (this.flyLineArr = []),
      r.map((c) => {
        let d = c,
          f = new se(d),
          m = { segments: 32, radius: 0.2, radialSegments: 8 };
        const w = new re(f, m.segments, m.radius, m.radialSegments, !1),
          y = new A(w, l);
        this.flyLineArr.push(y), this.globe.add(y);
      });
    let p = { opacity: 0 };
    x.to(p, {
      opacity: 0.6,
      duration: 1,
      onUpdate: () => {
        console.log("更新"), (this.effect.blendMode.opacity.value = p.opacity);
      },
    }),
      x.to(this.flyLineMaterial, { opacity: 1, ease: "power1.inOut" }),
      this.time.on("tick", (c, d) => {
        (l.opacity += c),
          l.opacity > 1 && (l.opacity = 1),
          (o.offset.x -= 0.2 * c);
      });
  }
  createGrid() {
    const e = this.assets.getResource("grid"),
      s = this.assets.getResource("gridBlack");
    (s.wrapS = s.wrapT = e.wrapS = e.wrapT = _),
      e.repeat.set(320, 320),
      s.repeat.set(320, 320);
    let n = new q(100.1, 100, 100),
      r = new v({
        color: 7243677,
        map: e,
        alphaMap: s,
        transparent: !0,
        opacity: 0,
        blending: S,
      });
    new lt({
      material: r,
      time: this.time,
      size: 520,
      diffuseSpeed: 200,
      diffuseColor: 16777215,
      diffuseHeight: 820,
      diffuseStart: 110,
    });
    let t = new A(n, r);
    this.globe.add(t);
  }
  createStorke(e) {
    const s = this.assets.getResource("pathLine").clone();
    (s.wrapS = s.wrapT = _), s.repeat.set(0.25, 0.25);
    let n = this.assets.getResource("chinaStorke");
    n = JSON.parse(n);
    let r = n.features.map((a) => ({ geometry: a.geometry })),
      t = new te(this, {
        data: r,
        texture: s,
        renderOrder: 21,
        speed: 0.2,
        radius: 0.2,
        segments: 256 * 10,
        radialSegments: 4,
        customRunCallback: function (a, i, o) {
          o.offset.x > 1 &&
            ((o.offset.x = 1),
            (this.run = !1),
            console.log("customRunCallback"),
            e && e()),
            (o.offset.x += this.options.speed * a);
        },
        material: new v({
          color: 16777215,
          map: s,
          alphaMap: s,
          fog: !1,
          transparent: !0,
          opacity: 1,
          blending: S,
        }),
      });
    (t.run = !1), t.setParent(this.globe), (this.storkePath = t);
  }
  createTopStorke() {
    const e = this.assets.getResource("flowY").clone();
    e.wrapS = e.wrapT = _;
    let s = this.assets.getResource("chinaStorke");
    s = JSON.parse(s);
    let n = s.features.map((t) => ({ geometry: t.geometry })),
      r = new te(this, {
        data: n,
        texture: e,
        renderOrder: 102,
        speed: 0.2,
        radius: 0.2,
        segments: 256 * 10,
        radialSegments: 4,
        globeRadius: 104,
        material: new v({
          color: 3647231,
          map: e,
          alphaMap: e,
          fog: !1,
          transparent: !0,
          opacity: 1,
          blending: S,
        }),
      });
    (r.run = !1), r.setParent(this.globe), (this.storkePath = r);
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
const gt = (h) => (pushScopeId("data-v-3ea74be0"), (h = h()), popScopeId(), h),
  yt = { class: "globe" },
  bt = gt(() => createElementVNode("canvas", { id: "canvas" }, null, -1)),
  wt = [bt],
  xt = {
    __name: "earth04",
    setup(h) {
      let e = null;
      return (
        onMounted(() => {
          e = new mt(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (s, n) => (openBlock(), createElementBlock("div", yt, wt))
      );
    },
  },
  It = et(xt, [["__scopeId", "data-v-3ea74be0"]]);
export { It as default };
