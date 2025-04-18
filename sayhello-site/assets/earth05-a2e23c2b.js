import {
  C,
  F as he,
  G as L,
  M as v,
  n as S,
  V as b,
  v as se,
  T as re,
  b as A,
  L as J,
  a2 as T,
  B,
  a9 as oe,
  c as pe,
  D as N,
  A as ue,
  h as de,
  i as fe,
  m as V,
  a as me,
  r as ge,
  q as ye,
  R,
  a3 as X,
  l as W,
  s as K,
  p as z,
  t as we,
  ab as be,
} from "./OrbitControls-9c9ee6bc.js";
import { R as xe, m as ve, p as ne, M as Se } from "./index-1453e2ee.js";
import {
  l as k,
  d as Ce,
  a as Q,
  m as Z,
  t as _,
  g as Le,
} from "./utils-9af1928d.js";
import { D as Me } from "./index-4ec0cc76.js";
import {
  e as Ae,
  a as Te,
  b as Re,
  s as Pe,
  g as Oe,
  c as Ge,
  d as ze,
  D as _e,
  L as ke,
} from "./index-1003c0d2.js";
import {
  e as Be,
  a as Ee,
  b as Fe,
  h as De,
  p as Ie,
  l as Ne,
  G as Ue,
} from "./光柱-48fdbf5f.js";
import { R as He } from "./RippleCirle-e198a9fe.js";
import { g as m } from "./index-4db78ffb.js";
import { s as Ve } from "./stats.module-077ce25d.js";
import { g as We, f as je } from "./gradient-c3ffacd2.js";
import { f as Je } from "./flyLine2-e7135ba7.js";
import { p as Ye } from "./pathLine2-dee41061.js";
import { u as qe } from "./uv-77714551.js";
import { c as Xe } from "./cloud-855dcc12.js";
import { a as Ke } from "./three.interactive-c6512469.js";
import {
  O as Qe,
  B as $,
  E as Ze,
  R as $e,
  a as et,
  K as ee,
} from "./index-5b3afbff.js";
import { _ as tt } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  g as at,
  h as st,
  o as rt,
  c as ot,
  p as nt,
  i as it,
  b as lt,
} from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
class ct {
  constructor({
    material: e,
    time: r,
    size: o,
    diffuseColor: s,
    diffuseSpeed: a,
    diffuseHeight: t,
    diffuseStart: i,
  }) {
    this.time = r;
    let n = {
      size: 100,
      diffuseSpeed: 15,
      diffuseColor: 9345950,
      diffuseHeight: 10,
      diffuseStart: 1,
    };
    (this.options = Object.assign({}, n, {
      material: e,
      size: o,
      diffuseColor: s,
      diffuseSpeed: a,
      diffuseHeight: t,
      diffuseStart: i,
    })),
      this.init();
  }
  init() {
    let e = null,
      {
        material: r,
        size: o,
        diffuseColor: s,
        diffuseSpeed: a,
        diffuseHeight: t,
        diffuseStart: i,
      } = this.options,
      n = o / a;
    (r.onBeforeCompile = (l) => {
      (e = l),
        (l.uniforms = {
          ...l.uniforms,
          uTime: { value: 0 },
          uSpeed: { value: a },
          uHeight: { value: t },
          uStart: { value: i },
          uColor: { value: new C(s) },
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
          e.uniforms.uTime.value > n && (e.uniforms.uTime.value = 0));
      });
  }
}
class ht {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new xe()),
      this.instance.addLoader(he, "FileLoader"),
      this.instance.on("onProgress", (o, s, a) => {
        ((s / a) * 100).toFixed(2) + "";
      }),
      this.instance.on("onLoad", () => {
        this.onLoadCallback && this.onLoadCallback();
      });
    let e = "/sayhello-site/",
      r = [
        { type: "Texture", name: "earthAtmos", path: Ae },
        { type: "Texture", name: "earthNight", path: Te },
        { type: "Texture", name: "earthClouds", path: Be },
        { type: "Texture", name: "earthNormal", path: Ee },
        { type: "Texture", name: "earthBump", path: Re },
        { type: "Texture", name: "earthSpecular", path: Fe },
        { type: "Texture", name: "highLight", path: De },
        { type: "Texture", name: "huiguang", path: We },
        { type: "Texture", name: "pointLight", path: Ie },
        { type: "Texture", name: "lightPillar", path: Ne },
        { type: "Texture", name: "flyLine", path: Je },
        { type: "Texture", name: "skyBg", path: Pe },
        { type: "Texture", name: "gridBlack", path: Oe },
        { type: "Texture", name: "grid", path: Ge },
        { type: "Texture", name: "pathLine", path: Ye },
        { type: "Texture", name: "flowY", path: je },
        { type: "Texture", name: "uv", path: qe },
        { type: "Texture", name: "chinaGlow", path: ze },
        { type: "Texture", name: "cloud", path: Xe },
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
    this.instance.loadAll(r);
  }
}
const j = [
  {
    name: "香港",
    center: [114.173355, 22.320048],
    centroid: [114.134357, 22.377366],
  },
  {
    name: "西藏",
    center: [91.132212, 29.660361],
    centroid: [88.388277, 31.56375],
  },
  {
    name: "湖南",
    center: [112.982279, 28.19409],
    centroid: [111.711649, 27.629216],
  },
  {
    name: "内蒙古",
    center: [111.670801, 40.818311],
    centroid: [114.077429, 44.331087],
  },
  {
    name: "上海市",
    center: [121.472644, 31.231706],
    centroid: [121.438737, 31.072559],
  },
  {
    name: "广西",
    center: [108.320004, 22.82402],
    centroid: [108.7944, 23.833381],
  },
  {
    name: "成都",
    center: [104.065735, 30.659462],
    centroid: [103.931804, 30.652329],
  },
];
class te {
  constructor({ time: e }, r) {
    (this.time = e), (this.instance = new L()), (this.run = !0);
    let o = {
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
    (this.options = Object.assign({}, o, r)), this.init();
  }
  init() {
    const {
      material: e,
      texture: r,
      segments: o,
      radius: s,
      radialSegments: a,
      data: t,
      speed: i,
      renderOrder: n,
      globeRadius: l,
    } = this.options;
    t.map((h) => {
      let c = [];
      h.geometry.coordinates.map((y) => {
        y[0].forEach((x) => {
          let { x: E, y: F, z: U } = k(...x, l);
          c.push(new b(E, F, U));
        });
      });
      const d = new se(c),
        f = new re(d, o, s, a, !1),
        g = new A(f, e);
      g.position.set(0, 0, 0), (g.renderOrder = n), this.instance.add(g);
    }),
      (r.offset.x = 0.5),
      this.time.on("tick", (h, c) => {
        this.run &&
          (this.options.customRunCallback
            ? this.options.customRunCallback.call(this, h, c, r)
            : (r.offset.x += i * h));
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
const ie = (p, e, r) => {
    var o = (e * Math.PI) / 180,
      s = (r * Math.PI) / 180;
    o = -o;
    var a = p * Math.cos(s) * Math.cos(o),
      t = p * Math.sin(s),
      i = p * Math.cos(s) * Math.sin(o);
    return { x: a, y: t, z: i };
  },
  I = (p, e, r = {}) => {
    let o = { color: 65535 };
    o = Ce(o, r);
    const s = new J(o);
    let a = e.features,
      t = pt(a);
    const i = new T(new Float32Array(t), 3),
      n = new B();
    n.attributes.position = i;
    let l = new oe(n, s);
    return l.scale.set(p, p, p), (l.name = "createCountryMergeSphereLine"), l;
  };
function pt(p) {
  let e = [];
  for (let r = 0; r < p.length; r++)
    p[r].geometry.coordinates.forEach((s) => {
      const a = [];
      s[0].forEach((t) => {
        let { x: i, y: n, z: l } = ie(1, ...t);
        a.push(
          parseFloat(i.toFixed(3)),
          parseFloat(n.toFixed(3)),
          parseFloat(l.toFixed(3))
        );
      }),
        e.push(a[0], a[1], a[2]);
      for (let t = 3; t < a.length; t += 3)
        e.push(a[t], a[t + 1], a[t + 2], a[t], a[t + 1], a[t + 2]);
      e.push(a[0], a[1], a[2]);
    });
  return e;
}
function ae(p, e) {
  return Math.sqrt(
    (e.x - p.x) * (e.x - p.x) +
      (e.y - p.y) * (e.y - p.y) +
      (e.z - p.z) * (e.z - p.z)
  );
}
const ut = (p, e = 100) => {
    let r = p.features,
      o = [];
    for (let s = 0; s < r.length; s++) {
      let a = r[s].geometry.coordinates,
        t = r[s].properties.name,
        i = [];
      a.forEach((c) => {
        let { index: d, coords: f } = dt(c[0], e),
          g = new B();
        g.setIndex(new T(new Uint16Array(d), 1)),
          g.setAttribute("position", new T(new Float32Array(f), 3));
        let y = new Float32Array((f.length / 3) * 2);
        for (let x = 0; x < f.length; x += 3)
          (y[(x / 3) * 2] = f[x]), (y[(x / 3) * 2 + 1] = f[x + 1]);
        g.setAttribute("uv", new T(y, 2)), i.push(g);
      });
      let n = null;
      i.length > 1 ? (n = ve(i)) : i.length === 1 && (n = i[0]),
        n.computeVertexNormals();
      let l = new pe({ color: 65535, side: N }),
        h = new A(n, l);
      (h.name = t), o.push(h);
    }
    return o;
  },
  dt = (p, e = 100) => {
    let r = [];
    for (let s = 0; s < p.length; s++) r.push(new b(p[s][0], p[s][1], 0));
    let { scopeInsidePoint: o } = ft(r);
    return (o = r.concat(o)), mt(r, o, e);
  },
  ft = (p, e = 3) => {
    let r = p.map((c) => [c.x, c.y]),
      o = Math.floor(
        Q(p, function (c) {
          return c.x;
        }).x
      ),
      s = Math.ceil(
        Z(p, function (c) {
          return c.x;
        }).x
      ),
      a = Math.floor(
        Q(p, function (c) {
          return c.y;
        }).y
      ),
      t = Math.ceil(
        Z(p, function (c) {
          return c.y;
        }).y
      ),
      i = Math.ceil((s - o) / e),
      n = Math.ceil((t - a) / e),
      l = [];
    for (let c = 0; c < i + 1; c++) {
      let d = o + c * e;
      for (let f = 0; f < n + 1; f++) {
        let g = a + f * e;
        l.push([d, g]);
      }
    }
    return {
      scopeInsidePoint: l
        .filter((c) => ne(c, r))
        .map((c) => new b(c[0], c[1], 0)),
      scopePoint: l,
    };
  },
  mt = (p, e, r = 100) => {
    let o = p.map((n) => [n.x, n.y]),
      s = [];
    e.forEach((n) => {
      let { x: l, y: h, z: c } = ie(r, n.x, n.y);
      s.push(l, h, c);
    });
    let a = e.map((n) => [n.x, n.y]),
      t = _e.from(a).triangles,
      i = [];
    for (let n = 0; n < t.length; n += 3) {
      let l = e[t[n]],
        h = e[t[n + 1]],
        c = e[t[n + 2]],
        d = [(l.x + h.x + c.x) / 3, (l.y + h.y + c.y) / 3];
      ne(d, o) && i.push(t[n + 2], t[n + 1], t[n]);
    }
    return { index: i, coords: s };
  };
class gt extends Se {
  constructor(e) {
    super(e, { isOrthographic: !0 }),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.position.set(0, 0, 300),
      this.camera.instance.lookAt(0, 0, 0),
      this.camera.instance.updateProjectionMatrix(),
      this.renderer.instance.setClearColor(0, 0),
      (this.renderer.postprocessing = !1),
      (this.interactionManager = new Ke(
        this.renderer.instance,
        this.camera.instance,
        this.canvas
      )),
      (this.camera.controls.enabled = !1),
      this.initSetting(),
      this.initEnvironment(),
      this.initAssets(() => {
        this.initModel(),
          this.initAnimate(),
          this.createMoveCloud(),
          this.post();
      });
  }
  initAnimate() {
    let e = new m.timeline({ repeat: 0 });
    e.addLabel("globeRotate", 0),
      e.addLabel("globeScale", 2),
      e.add(
        m.to(this.globe.instance.rotation, {
          duration: 4,
          y: Math.PI,
          ease: "power1.inOut",
        })
      ),
      e.add(
        m.to(this.globe.instance.position, {
          duration: 1,
          x: -70,
          y: -100,
          ease: "power1.inOut",
          delay: 0.5,
        }),
        "globeScale"
      ),
      e.add(
        m.to(this.globe.instance.scale, {
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
    const e = new Qe(this.scene, this.camera.instance, {
      blendFunction: $.ADD,
      edgeStrength: 8,
      pulseSpeed: 0,
      multisampling: 0,
      visibleEdgeColor: 3763936,
      hiddenEdgeColor: 3763936,
      height: 240,
      blur: !0,
      xRay: !0,
    });
    (e.blurPass.enabled = !0),
      (e.blurPass.blurMaterial.kernelSize = 3),
      (e.blendMode.opacity.value = 0);
    const r = new Ze(this.renderer.instance);
    r.addPass(new $e(this.scene, this.camera.instance));
    const o = new et(this.camera.instance, e);
    r.addPass(o),
      (this.effect = e),
      this.effect.selection.set([this.line3]),
      (this.renderer.composer = r);
    const s = new C(),
      a = this.effect,
      t = a.uniforms,
      i = a.blendMode,
      n = {
        enabled: !0,
        resolution: a.height,
        blurriness: 0,
        "use pattern": !1,
        "pattern scale": 60,
        "pulse speed": a.pulseSpeed,
        "edge strength": a.edgeStrength,
        "visible edge": s.copyLinearToSRGB(a.visibleEdgeColor).getHex(),
        "hidden edge": s.copyLinearToSRGB(a.hiddenEdgeColor).getHex(),
        "x-ray": !0,
        opacity: i.opacity.value,
        "blend mode": i.blendFunction,
      };
    this.debug.instance.add(n, "enabled").onChange((l) => {
      this.renderer.postprocessing = l;
    }),
      this.debug.instance
        .add(n, "resolution", [240, 360, 480, 720, 1080])
        .onChange((l) => {
          a.resolution.height = Number(l);
        }),
      this.debug.instance.add(a, "multisampling", [0, 2, 4]),
      this.debug.instance
        .add(n, "blurriness", ee.VERY_SMALL, ee.HUGE + 1, 1)
        .onChange((l) => {
          (a.blurPass.enabled = l > 0),
            (a.blurPass.blurMaterial.kernelSize = l - 1);
        }),
      this.debug.instance
        .add(n, "pattern scale", 20, 100, 0.1)
        .onChange((l) => {
          t.get("patternScale").value = l;
        }),
      this.debug.instance.add(n, "edge strength", 0, 10, 0.01).onChange((l) => {
        t.get("edgeStrength").value = l;
      }),
      this.debug.instance.add(n, "pulse speed", 0, 2, 0.01).onChange((l) => {
        a.pulseSpeed = l;
      }),
      this.debug.instance.addColor(n, "visible edge").onChange((l) => {
        a.visibleEdgeColor.setHex(l).convertSRGBToLinear();
      }),
      this.debug.instance.addColor(n, "hidden edge").onChange((l) => {
        a.hiddenEdgeColor.setHex(l).convertSRGBToLinear();
      }),
      this.debug.instance.add(a, "xRay"),
      this.debug.instance.add(n, "opacity", 0, 1, 0.01).onChange((l) => {
        i.opacity.value = l;
      }),
      this.debug.instance.add(n, "blend mode", $).onChange((l) => {
        i.setBlendFunction(Number(l));
      });
  }
  initEnvironment() {
    let e = new ue(16777215, 4);
    this.scene.add(e);
    let r = new de(16777215, 6);
    r.position.set(238, 90, -8);
    let o = new fe(r, 200);
    this.scene.add(r);
    const s = this.debug.instance.addFolder("Environment");
    s.add(r.position, "x", -1e3, 1e3, 1),
      s.add(r.position, "y", -1e3, 1e3, 1),
      s.add(r.position, "z", -1e3, 1e3, 1),
      s.onChange((a) => {
        o.update();
      });
  }
  initAssets(e) {
    let r = new ht(e);
    this.assets = r.instance;
  }
  initSetting() {
    (this.debug = new Me(!0)),
      (this.stats = new Ve()),
      document.body.appendChild(this.stats.dom);
  }
  initModel() {
    const e = this.assets.getResource("earthAtmos"),
      r = this.assets.getResource("earthNight"),
      o = this.assets.getResource("earthNormal");
    this.assets.getResource("earthBump");
    const s = this.assets.getResource("earthSpecular"),
      a = this.assets.getResource("highLight");
    (a.colorSpace = V), (e.colorSpace = V);
    let t = new Ue(this, {
      globeColor: 16777215,
      globeImage: e,
      globeNightImage: r,
      normalImage: o,
      normalScale: new me(1, 1),
      specularImage: s,
      atmosphereColor: new C("#396ee0"),
      atmosphereAltitude: 0.22,
      atmospherePower: 40,
    });
    (t.instance.rotation.y = -1 * Math.PI),
      t.instance.scale.set(0.5, 0.5, 0.5),
      t.setParent(this.scene),
      this.debug.instance
        .addFolder("globe")
        .addColor(t.globeObj.material, "color")
        .onChange((x) => {
          t.shader.uniforms.uColor.value = new C(x);
        }),
      (this.globe = t);
    let n = new ge(
      new ye({
        color: 3763936,
        side: N,
        map: a,
        transparent: !0,
        alphaMap: a,
        depthTest: !1,
        blending: S,
      })
    );
    n.scale.set(100 * 2.5, 100 * 2.5, 0),
      (n.renderOrder = 2),
      this.globe.add(n),
      this.createStars(),
      this.createGrid(),
      this.createCloud(),
      this.createCountryLine();
    let l = this.createChinaWall(),
      { chinaMeshsGroup: h, chinaMeshsMaterial: c } = this.createChinaMesh(),
      d = this.createChinaLine();
    this.chinaLine = d;
    let { chinaTopLine: f, chinaTopLineMaterial: g } = this.createTopStorke(),
      y = this.createRippleCirle();
    (this.rippleGroup = y),
      t.add(y),
      l.add(d, h, f),
      this.createStorke(() => {
        m.to(l.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "power1",
          duration: 2,
          onComplete: () => {
            this.createArcAll();
          },
        }),
          m.to(this.chinaLine.material, { opacity: 0.2, delay: 1.7 }),
          m.to(this.line3.material, { opacity: 1, delay: 1.7 }),
          m.to(c, { opacity: 0.2, delay: 1.7 }),
          m.to(g, { opacity: 1, delay: 1.7 }),
          (l.visible = !0);
      });
  }
  createChinaWall() {
    let e = new L(),
      r = this.assets.getResource("chinaStorke");
    (r = _(r)),
      r.features[0].geometry.coordinates[0].map((i) => {
        i.map((n) => {
          k(...n, 110);
        });
      });
    let o = this.assets.getResource("chinaStorke"),
      s = _(o);
    for (let i = 0; i < 40; i++) {
      let n = I(100 + i * 0.1, s, {
        color: 4809093,
        transparent: !0,
        opacity: 0.5,
      });
      e.add(n);
    }
    let a = I(104.2, s, {
      color: 13299455,
      transparent: !0,
      opacity: 0,
      depthWrite: !1,
      depthTest: !1,
    });
    (a.renderOrder = 100),
      (this.line3 = a),
      e.add(a),
      this.globe.add(e),
      (this.wallGroup = e),
      e.scale.set(0.7, 0.7, 0.7);
    const t = this.debug.instance.addFolder("wall");
    return (
      t.add(e.position, "x", -100, 100, 0.1).onChange((i) => {
        e.position.x = Number(i);
      }),
      t.add(e.position, "y", -100, 100, 0.1).onChange((i) => {
        e.position.y = Number(i);
      }),
      t.add(e.position, "z", -100, 100, 0.1).onChange((i) => {
        e.position.z = Number(i);
      }),
      e
    );
  }
  createChinaMesh() {
    let e = this.assets.getResource("chinaGlow");
    (e.wrapS = e.wrapT = R),
      (e.rotation = Math.PI),
      (e.colorSpace = V),
      (e.flipY = !1),
      e.offset.set(0, 0);
    let r = this.assets.getResource("china");
    r = _(r);
    let o = ut(r, 103.9),
      s = new L();
    s.add(...o);
    let { boxSize: a, box3: t } = Le(s),
      i = new v({
        color: 3647231,
        map: e,
        transparent: !0,
        side: N,
        opacity: 0,
        depthWrite: !1,
        depthTest: !1,
      });
    return (
      s.traverse((n) => {
        n.isMesh &&
          ((n.material = i),
          (n.renderOrder = 99),
          this.calcUv2(n.geometry, a.x, a.y, t.min.x, t.min.y));
      }),
      { chinaMeshsGroup: s, chinaMeshsMaterial: i }
    );
  }
  calcUv2(e, r, o, s, a) {
    const t = e.attributes.position,
      i = e.attributes.uv;
    for (let n = 0; n < t.count; n++) {
      const l = t.getX(n),
        h = t.getY(n),
        c = (l - s) / r,
        d = (h - a) / o;
      i.setXY(n, c, d);
    }
    (i.needsUpdate = !0), e.computeVertexNormals();
  }
  createCloud() {
    const o = this.assets.getResource("earthClouds"),
      s = new X(100 * 1.01, 75, 75),
      a = new v({
        color: 16777215,
        map: o,
        transparent: !0,
        opacity: 0.2,
        depthTest: !1,
      }),
      t = new A(s, a);
    this.globe.add(t),
      this.time.on("tick", () => {
        t.rotation.y += (-0.04 * Math.PI) / 180;
      });
  }
  createLightPillar(e, r) {
    const o = new L(),
      s = this.assets.getResource("lightPillar");
    let a = 41 / 200,
      t = e / a;
    const i = new W(e, t);
    i.rotateX(Math.PI / 2), i.translate(0, 0, t / 2);
    const n = new v({
        map: s,
        transparent: !0,
        side: N,
        depthWrite: !1,
        depthTest: !1,
        blending: S,
        color: r,
      }),
      l = new A(i, n);
    l.renderOrder = 110;
    const h = l.clone();
    return (h.rotation.z = Math.PI / 2), o.add(l, h), o;
  }
  createPointLight(e, r) {
    const o = this.assets.getResource("pointLight"),
      s = new W(e, e),
      a = new v({
        map: o,
        transparent: !0,
        depthWrite: !1,
        depthTest: !1,
        color: r,
        blending: S,
      }),
      t = new A(s, a);
    return (t.renderOrder = 110), t;
  }
  createRippleCirle() {
    this.eventElement = [];
    let e = new L();
    return (
      (e.visible = !1),
      j
        .map((o, s) => ({
          lat: o.centroid[0],
          lng: o.centroid[1],
          color:
            o.name === "香港" ? new C("#ff6666") : new C("rgb(57,110,224)"),
          name: o.name,
        }))
        .forEach((o, s) => {
          let a = 105,
            t = new He(this, {
              number: o.name === "香港" ? 5 : 3,
              radius: o.name === "香港" ? 2.5 : 1.5,
              frequency: 2,
              color: o.color,
            });
          (t.instance.userData = o),
            this.eventElement.push(t.instance),
            t.setParent(e),
            t.instance.traverse((d) => {
              d.name === "CircleLine" && (d.renderOrder = 110);
            });
          let i = k(o.lat, o.lng, a);
          t.setPosition(new b(i.x, i.y, i.z));
          var n = new b(i.x, i.y, i.z).normalize(),
            l = new b(0, 0, 1);
          t.instance.quaternion.setFromUnitVectors(l, n);
          let h = this.createPointLight(4, o.color);
          t.instance.add(h);
          let c = this.createLightPillar(3, o.color);
          t.instance.add(c);
        }),
      this.eventElement.map((o) => {
        this.interactionManager.add(o),
          o.addEventListener("mousedown", (s) => {
            console.log(s.target.userData.name),
              this.moveCloudGroup.move(),
              m.to(this.countryLine.material, { opacity: 0 }),
              m.to(this.globe.instance.scale, {
                x: 13,
                y: 13,
                z: 13,
                duration: 2,
                delay: 1,
                ease: "power1.inOut",
                onComplete: () => {
                  this.globe.instance.visible = !1;
                },
              });
          });
      }),
      e
    );
  }
  createStars() {
    const e = [new B(), new B()],
      r = [],
      o = [],
      s = new b();
    for (let t = 0; t < 250; t++)
      (s.y = Math.random() * 2 - 1),
        (s.z = Math.random() * 2 - 1),
        s.multiplyScalar(20),
        r.push(s.x, s.y, s.z);
    for (let t = 0; t < 1500; t++)
      (s.x = Math.random() * 2 - 1),
        (s.y = Math.random() * 2 - 1),
        (s.z = Math.random() * 2 - 1),
        s.multiplyScalar(10),
        o.push(s.x, s.y, s.z);
    e[0].setAttribute("position", new K(r, 3)),
      e[1].setAttribute("position", new K(o, 3));
    const a = [
      new z({ color: 10263708, size: 2, sizeAttenuation: !1 }),
      new z({ color: 10263708, size: 1, sizeAttenuation: !1 }),
      new z({ color: 8618883, size: 1, sizeAttenuation: !1 }),
      new z({ color: 5921370, size: 2, sizeAttenuation: !1 }),
      new z({ color: 5921370, size: 1, sizeAttenuation: !1 }),
    ];
    for (let t = 10; t < 30; t++) {
      const i = new we(e[t % 2], a[t % 6]);
      (i.rotation.x = Math.random() * 10),
        (i.rotation.y = Math.random() * 10),
        (i.rotation.z = Math.random() * 10),
        i.scale.setScalar(t * 10),
        (i.matrixAutoUpdate = !1),
        i.updateMatrix(),
        (this.stars = i),
        this.scene.add(i);
    }
  }
  createChinaLine() {
    let e = this.assets.getResource("china"),
      r = _(e),
      o = I(100.08, r, {
        color: 16777215,
        transparent: !0,
        opacity: 0,
        depthWrite: !1,
        depthTest: !1,
      });
    return (o.renderOrder = 99), (o.name = "chinaLine"), o;
  }
  createCountryLine() {
    let e = this.assets.getResource("world"),
      r = _(e),
      o = I(100.1, r, {
        color: 16777215,
        transparent: !0,
        opacity: 0.2,
        depthWrite: !1,
      });
    (this.countryLine = o), this.globe.add(o);
  }
  createCountryNameLabel() {
    let e = new L(),
      r = [...j],
      o = new ke();
    r.map((s, a) => {
      let t = 105,
        { x: i, y: n, z: l } = k(s.centroid[0], s.centroid[1] - 1, t),
        h = o.createSpriteLabel({
          font: "bold 30px 微软雅黑",
          name: s.name,
          position: new b(i, n, l),
          width: 200,
          height: 100,
          scale: 1,
          opacity: 0,
          isSprite: !1,
        });
      (h.material.depthTest = !1),
        (h.renderOrder = 110),
        m.to(h.material, { opacity: 1, delay: a / r.length }),
        e.add(h);
    }),
      this.globe.add(e);
  }
  createArcAll() {
    let e = [...j],
      r = e[0];
    e.splice(0, 1);
    let o = 105,
      s = 25,
      a = [],
      t = [],
      i = new L();
    i.name = "arcAll";
    const n = (u = []) => {
      let w = k(...u, o);
      return new b(w.x, w.y, w.z);
    };
    for (let u = 0; u < e.length; u++) {
      var l = n([r.centroid[0], r.centroid[1]]),
        h = n([e[u].centroid[0], e[u].centroid[1]]),
        c = 1 + 0.005 * ae(l, h),
        d = new b();
      d.addVectors(l, h), d.normalize().multiplyScalar(o * c);
      var f = 1 + 0.005 * ae(l, d),
        g = new b();
      g.addVectors(l, d), g.normalize().multiplyScalar(o * f);
      var y = new b();
      y.addVectors(d, h), y.normalize().multiplyScalar(o * f);
      var x = new be(l, g, y, h),
        E = x.getPoints(s);
      for (let w = 0; w < s; w++)
        a.push(E[w]),
          a.push(E[w + 1]),
          t.push({ alpha: 0 }),
          t.push({ alpha: 0 });
    }
    let F = new B(),
      U = new J({
        linewidth: 1,
        color: new C("#ffffff"),
        blending: S,
        opacity: 1,
        transparent: !0,
      });
    var P = new Float32Array(3 * a.length),
      Y = new Float32Array(a.length);
    for (let u = 0; u < a.length; u++)
      (P[3 * u] = a[u].x),
        (P[3 * u + 1] = a[u].y),
        (P[3 * u + 2] = a[u].z),
        (Y[u] = 0);
    F.setAttribute("position", new T(P, 3));
    let H = new oe(F, U);
    i.add(H), (i.visible = !1), this.globe.add(i);
    let q = new J({
      color: 16777215,
      blending: S,
      fog: !1,
      opacity: 0.5,
      transparent: !0,
    });
    q.onBeforeCompile = (u) => {
      (u.uniforms = { ...u.uniforms, color: { value: new C("#ffffff") } }),
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
    let O = new L();
    O.name = "Rocket";
    let M = H.clone();
    (M.geometry = H.geometry.clone()),
      M.geometry.setAttribute("position", new T(P, 3)),
      M.geometry.setAttribute("alpha", new T(Y, 1)),
      (M.material = q),
      O.add(M),
      (O.visible = !0),
      this.globe.add(O),
      (this.rippleGroup.visible = !0),
      this.createCountryNameLabel();
    let G = null;
    (G = m.timeline({
      paused: !0,
      repeat: 0,
      onUpdate: function () {
        le();
      },
      onComplete: () => {
        this.createFlyLine(e, M, s);
      },
    })),
      G.fromTo(
        t,
        { alpha: 0 },
        { alpha: 1, duration: 0.25, stagger: 0.025, duration: 0.5 },
        0
      ),
      G.timeScale(2);
    function le() {
      var u = null,
        w = M.geometry.attributes;
      for (let D = 0; D < t.length; D++)
        (u = t[D]), (w.alpha.array[D] = u.alpha), (w.alpha.needsUpdate = !0);
    }
    ce();
    function ce() {
      G.pause();
      for (var u = M.geometry.attributes, w = 0; w < t.length; w++)
        u.alpha.array[w] = 0;
      (u.alpha.needsUpdate = !0), (O.visible = !0), G.play(0);
    }
  }
  createFlyLine(e, r, o) {
    let s = [],
      a = r.geometry.attributes.position.array,
      t = o * 2,
      i = [];
    for (let h = 0; h < a.length; h += 3) {
      let c = a[h],
        d = a[h + 1],
        f = a[h + 2];
      i.push(new b(c, d, f));
    }
    e.map((h, c) => {
      let d = i.slice(c * t, t * (c + 1));
      s.push(d);
    });
    const n = this.assets.getResource("pathLine").clone();
    (n.wrapS = n.wrapT = R), n.repeat.set(1, 1);
    const l = new v({
      color: new C("rgb(57,110,224)"),
      map: n,
      alphaMap: n,
      fog: !1,
      transparent: !0,
      depthWrite: !1,
      depthTest: !1,
      opacity: 0,
      blending: S,
    });
    (this.flyLineMaterial = l),
      (this.flyLineArr = []),
      s.map((h) => {
        let c = h,
          d = new se(c),
          f = { segments: 32, radius: 0.2, radialSegments: 8 };
        const g = new re(d, f.segments, f.radius, f.radialSegments, !1),
          y = new A(g, l);
        (y.renderOrder = 110), this.flyLineArr.push(y), this.globe.add(y);
      }),
      this.chinaLineHuiGuangShow(),
      m.to(this.flyLineMaterial, { opacity: 1, ease: "power1.inOut" }),
      this.time.on("tick", (h, c) => {
        (l.opacity += h),
          l.opacity > 1 && (l.opacity = 1),
          (n.offset.x += 0.4 * h);
      });
  }
  chinaLineHuiGuangShow() {
    let e = { opacity: 0 };
    m.to(e, {
      opacity: 0.6,
      duration: 1,
      onUpdate: () => {
        this.effect.blendMode.opacity.value = e.opacity;
      },
    }),
      (this.effect.resolution.height = 720);
  }
  createGrid() {
    const e = this.assets.getResource("grid"),
      r = this.assets.getResource("gridBlack");
    (r.wrapS = r.wrapT = e.wrapS = e.wrapT = R),
      e.repeat.set(320, 320),
      r.repeat.set(320, 320);
    let o = new X(100.1, 100, 100),
      s = new v({
        color: 7243677,
        map: e,
        alphaMap: r,
        transparent: !0,
        opacity: 0,
        blending: S,
      });
    new ct({
      material: s,
      time: this.time,
      size: 520,
      diffuseSpeed: 150,
      diffuseColor: 16777215,
      diffuseHeight: 820,
      diffuseStart: 110,
    });
    let a = new A(o, s);
    this.globe.add(a);
  }
  createStorke(e) {
    const r = this.assets.getResource("pathLine").clone();
    (r.wrapS = r.wrapT = R), r.repeat.set(0.25, 0.25);
    let o = this.assets.getResource("chinaStorke");
    o = JSON.parse(o);
    let s = o.features.map((t) => ({ geometry: t.geometry })),
      a = new te(this, {
        data: s,
        texture: r,
        renderOrder: 21,
        speed: 0.15,
        radius: 0.2,
        segments: 256 * 10,
        radialSegments: 4,
        customRunCallback: function (t, i, n) {
          n.offset.x > 1 &&
            ((n.offset.x = 1),
            (this.run = !1),
            console.log("customRunCallback"),
            e && e()),
            (n.offset.x += this.options.speed * t);
        },
        material: new v({
          color: 16777215,
          map: r,
          alphaMap: r,
          fog: !1,
          transparent: !0,
          opacity: 1,
          blending: S,
        }),
      });
    (a.run = !1), a.setParent(this.globe), (this.storkePath = a);
  }
  createTopStorke() {
    const e = this.assets.getResource("flowY").clone();
    e.wrapS = e.wrapT = R;
    let r = this.assets.getResource("chinaStorke");
    r = JSON.parse(r);
    let o = r.features.map((t) => ({ geometry: t.geometry })),
      s = new v({
        color: 3647231,
        map: e,
        alphaMap: e,
        fog: !1,
        transparent: !0,
        opacity: 0,
        blending: S,
      }),
      a = new te(this, {
        data: o,
        texture: e,
        renderOrder: 102,
        speed: 0.2,
        radius: 0.2,
        segments: 256 * 10,
        radialSegments: 4,
        globeRadius: 104,
        material: s,
      });
    return (a.run = !1), { chinaTopLine: a.instance, chinaTopLineMaterial: s };
  }
  createMoveCloud() {
    this.moveCloudGroup = new L();
    const e = this.assets.getResource("cloud").clone();
    (e.wrapS = e.wrapT = R), e.repeat.set(1, 1);
    let r = new W(1e3, 328),
      o = new v({
        color: 16777215,
        map: e,
        transparent: !0,
        depthTest: !1,
        depthWrite: !1,
      }),
      s = new A(r, o);
    s.position.set(200, 0, 280);
    let a = s.clone();
    a.position.set(-100, 80, 290);
    let t = s.clone();
    t.position.set(-50, -90, 270), t.scale.set(-1, 1, 1);
    let i = s.clone();
    i.position.set(350, 100, 285),
      i.scale.set(-1, 1, 1),
      this.moveCloudGroup.add(s, a, t, i),
      this.moveCloudGroup.position.set(1e3, 0, 0),
      (this.moveCloudGroup.visible = !1),
      this.scene.add(this.moveCloudGroup),
      (this.moveCloudGroup.move = () => {
        (this.moveCloudGroup.visible = !0),
          console.log("move"),
          m.to(s.position, { x: -1e3, duration: 3, ease: "power1.inOut" }),
          m.to(a.position, { x: -1150, duration: 3.5, ease: "power1.inOut" }),
          m.to(t.position, { x: -1250, duration: 4, ease: "power1.inOut" }),
          m.to(i.position, { x: -900, duration: 3, ease: "power1.inOut" }),
          m.to(this.moveCloudGroup.position, {
            x: -1e3,
            duration: 6,
            ease: "power1.inOut",
            onComplete: () => {
              this.moveCloudGroup.visible = !1;
            },
          });
      });
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
const yt = (p) => (nt("data-v-17353852"), (p = p()), it(), p),
  wt = { class: "globe" },
  bt = yt(() => lt("canvas", { id: "canvas" }, null, -1)),
  xt = [bt],
  vt = {
    __name: "earth05",
    setup(p) {
      let e = null;
      return (
        at(() => {
          e = new gt(document.getElementById("canvas"));
        }),
        st(() => {
          e && e.destroy();
        }),
        (r, o) => (rt(), ot("div", wt, xt))
      );
    },
  },
  Ut = tt(vt, [["__scopeId", "data-v-17353852"]]);
export { Ut as default };
