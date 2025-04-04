var Qe = Object.defineProperty;
var Re = (u, e, t) =>
  e in u
    ? Qe(u, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (u[e] = t);
var se = (u, e, t) => (Re(u, typeof e != "symbol" ? e + "" : e, t), t);
import {
  F as Pe,
  C,
  G as E,
  M as b,
  n as I,
  V as g,
  v as ie,
  T as W,
  b as v,
  L as O,
  a2 as k,
  B as Y,
  a9 as we,
  c as X,
  D as L,
  a as ne,
  O as be,
  S as Ee,
  E as Te,
  f as Ce,
  e as Oe,
  g as ze,
  h as Ie,
  i as ve,
  P as De,
  j as ke,
  R as x,
  m as D,
  d as re,
  l as T,
  k as Ye,
  Q as Je,
  q as te,
  r as ae,
  A as Fe,
  a3 as oe,
  s as le,
  p as H,
  t as Ne,
  ab as je,
} from "./OrbitControls-9c9ee6bc.js";
import {
  R as He,
  m as Be,
  p as xe,
  g as Z,
  V as Ue,
  M as qe,
} from "./index-1453e2ee.js";
import {
  l as U,
  d as Ve,
  a as ce,
  m as de,
  t as R,
  g as _,
} from "./utils-9af1928d.js";
import { D as Xe } from "./index-4ec0cc76.js";
import {
  e as _e,
  a as We,
  b as Ze,
  s as Ke,
  g as $e,
  c as et,
  d as tt,
  D as at,
  L as it,
} from "./index-1003c0d2.js";
import {
  e as nt,
  a as st,
  b as rt,
  h as ot,
  p as lt,
  l as ct,
  G as dt,
} from "./光柱-48fdbf5f.js";
import { R as ht } from "./RippleCirle-e198a9fe.js";
import { g as A } from "./index-4db78ffb.js";
import { g as pt, f as ut } from "./gradient-c3ffacd2.js";
import { f as At } from "./flyLine2-e7135ba7.js";
import { p as ft } from "./pathLine2-dee41061.js";
import { u as gt } from "./uv-77714551.js";
import { c as mt } from "./cloud-855dcc12.js";
import {
  h as yt,
  g as he,
  a as wt,
  r as bt,
} from "./rotationBorder1-447bf02a.js";
import { o as Et } from "./ocean-bg-19f8644c.js";
import { p as Ct } from "./point1-7bb35866.js";
import { r as It } from "./rotationBorder2-a143eae0.js";
import { a as Me } from "./three.interactive-c6512469.js";
import {
  O as vt,
  B as pe,
  E as Bt,
  R as xt,
  a as Mt,
  K as ue,
} from "./index-5b3afbff.js";
import { L as St } from "./Label3d-1a598e21.js";
import { G as K, P as Ae } from "./GradientShader-7cc661aa.js";
import { L as Lt, a as Gt } from "./Line2-7598ed88.js";
import {
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
  createStaticVNode,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
const zt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMxSURBVHgB7dZBEYRAEMDA4YpCCB8eKEDK+heyJyTdIlI5rnvtAZJ+A2QJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAIQJAISdz/sN0OQAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIEwAIOy47rUHSHIAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAECYAEHY+7zdAkwOAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAMAGAsOO61x4gyQFAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABA2Pm83wBNDgDCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADCBADC/hQeCCUWErUgAAAAAElFTkSuQmCC",
  Dt = "/sayhello-site/assets/black_bg4-28cebb17.jpg",
  kt = "/sayhello-site/assets/sz_bg-f847a4c1.jpg",
  Yt = "/sayhello-site/assets/sz_bg-2b9f7891.png",
  Jt = "/sayhello-site/assets/water-43847c5f.jpg",
  Ft = "/sayhello-site/assets/oceanBg-dc919796.jpg",
  Nt =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAYAAACAvzbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAo1SURBVHgB7d2BbdtGGIbhY9EBskGdCdoNnBHSDdwN3AksT1BkgnqDNhvUE6SdoOkG3UC9UyhDEByY+ixU5PF5AIKyTRg+gH9en2Q7w7YqAHCibwoAJLbTfSozVb+2TTvKwlnH/6d+fZ+35zPb2WjcV/My93WcMhun7ED+KdCPP8v5mA16Mnk2TgnI7wX68Uc5H7NBT/6YeuHUgHwehuGhQD8e6vFveT2zQW8eysTZmBqQ+wIdqf/otwH5qbye2aArp8zGlIDc+w6LHtX7uj319KHkzAZdmjobLwXkQ/1EmwKdqvf3bcl2EWaDrk2Zja8FpG1hfhw/AXRtDEHbsn+ecLnZYDVemo3DgLQfRfxYj5/r8XbcwsAqtKei6vG2fBmWj89cYjZYpWdm46/9x749uOiqwMqNr2k8tF+SOnr/+wIrtp+N9ng/H/6UCQARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBm21fj4vizX9Xh+LMtmHfNxd/S2+bg865iP3XzYgQAQedqBDFVZqLqETTvXJWzKglnHfBzszHfMx+VZx3zs58MOBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBIDJsq/HxfVmu6/H8WJbNOubj7uht83F51jEfu/mwAwEg8rQDGaqyUHUJm3auS9iUBbOO+TjYme+Yj8uzjvnYz4cdCAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQGTYVuPj+7Jc1+P5sSybdczH3dHb5uPyrGM+dvNhBwJA5GkHMlRloeoSNu1cl7ApC2Yd83GwM98xH5dnHfOxnw87EAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBIPIUkO12+6kev9XjpsAK1Xv/TT1u2xw88zGzwWodzkY9/t6//3AH8kM93tfj13aBYWFN6v3e7v02GL+UL3NwzGywSs/MxtX+Y197Cqtd0IblrkDn6n3eBqPtOt5MuPyqmA1W4qXZeOk1kM34CaBLYwhuy+nMBl2bMhtTXkS/Hbcw0JXxqahNyZkNujR1Nqb+FFbbsk/Z3sOSnONpKLNBjybNxtSAtAG5KdCJ8Tusq/J6ZoOunDIbp/weyLsC/TjnU0/vCvRj8mycEpDvC/Tju3I+ZoOeTJ6NoW5XtgUATuRPmQAQERAAIgICQGY73U2Zqfq1td8K3pSFs47/z/iH4c7lpsyY+2pe5r6OU2Zj6g7k8zAMDwX68VCPf8vrmQ1681AmzsbUgNwX6Ej9R78NyE/l9cwGXTllNqYE5N53WPSo3te/19OHkjMbdGnqbLwUkA/1E20KdKre3+2vjSa7CLNB16bMxtcC0rYwP46fALo2hqBt2T9PuNxssBovzcZhQP6px8d6/FyPt+MWBlahPRVVj7fly7B8fOYSs8EqPTMbf+0/9u3BRVcFVm58TeOh/Yji0fv9vx+s2n422uP9fPhFQgAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBIDIsK3Gx/dlua7H82NZNuuYj7ujt83H5VnHfOzmww4EgMjTDmSoykLVJWzauS5hUxbMOubjYGe+Yz4uzzrmYz8fdiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICACRYVuNj+/Lcl2P58eybNYxH3dHb5uPy7OO+djNhx0IAJGnHchQlYWqS9i0c13CpiyYdczHwc58x3xcnnXMx34+7EAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiw7YaH9+X5boez49l2axjPu6O3jYfl2cd87GbDzsQACJPO5ChKgtVl7Bp57qETVkw65iPg535jvm4POuYj/182IEAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICAARAQEgIiAARAQEgIiAABAREAAiAgJAREAAiAgIABEBASAiIABEBASAiIAAEBEQACICAkBEQACICAgAEQEBICIgAEQEBICIgAAQERAAIgICQERAAIgICACRp4Bst9tP9fitHjcFVqje+2/qcdvm4JmPmQ1W63A26vH3/v2HO5Af6vG+Hr+2CwwLa1Lv93bvt8H4pXyZg2Nmg1V6Zjau9h/72lNY7YI2LHcFOlfv8zYYbdfxZsLlV8VssBIvzcZLr4Fsxk8AXRpDcFtOZzbo2pTZmPIi+u24hYGujE9FbUrObNClqbMx9aew2pZ9yvYeluQcT0OZDXo0aTamBqQNyE2BTozfYV2V1zMbdOWU2Tjl90DeFejHOZ96elegH5Nn45SAfF+gH9+V8zEb9GTybAx1u7ItAHAif8oEgMh/4MA+Oq4tR34AAAAASUVORK5CYII=";
class jt {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new He()),
      this.instance.addLoader(Pe, "FileLoader"),
      this.instance.on("onProgress", (n, i, a) => {
        ((i / a) * 100).toFixed(2) + "";
      }),
      this.instance.on("onLoad", () => {
        this.onLoadCallback && this.onLoadCallback();
      });
    let e = "/sayhello-site/",
      t = [
        { type: "Texture", name: "earthAtmos", path: _e },
        { type: "Texture", name: "earthNight", path: We },
        { type: "Texture", name: "earthClouds", path: nt },
        { type: "Texture", name: "earthNormal", path: st },
        { type: "Texture", name: "earthBump", path: Ze },
        { type: "Texture", name: "earthSpecular", path: rt },
        { type: "Texture", name: "highLight", path: ot },
        { type: "Texture", name: "globeHuiguang", path: pt },
        { type: "Texture", name: "pointLight", path: lt },
        { type: "Texture", name: "lightPillar", path: ct },
        { type: "Texture", name: "flyLine", path: At },
        { type: "Texture", name: "skyBg", path: Ke },
        { type: "Texture", name: "gridBlack", path: $e },
        { type: "Texture", name: "grid", path: et },
        { type: "Texture", name: "pathLine", path: ft },
        { type: "Texture", name: "flowY", path: ut },
        { type: "Texture", name: "uv", path: gt },
        { type: "Texture", name: "chinaGlow", path: tt },
        { type: "Texture", name: "cloud", path: mt },
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
        {
          type: "File",
          name: "guangdong",
          path: e + "assets/json/广东省.json",
        },
        { type: "File", name: "shenzhen", path: e + "assets/json/深圳市.json" },
        { type: "Texture", name: "huiguang", path: yt },
        { type: "Texture", name: "guangquan1", path: he },
        { type: "Texture", name: "guangquan2", path: wt },
        { type: "Texture", name: "ocean", path: Et },
        { type: "Texture", name: "side", path: zt },
        { type: "Texture", name: "flyLineFocus", path: he },
        { type: "Texture", name: "point", path: Ct },
        { type: "Texture", name: "blackBg", path: Dt },
        { type: "Texture", name: "szbg1", path: kt },
        { type: "Texture", name: "szbg2", path: Yt },
        { type: "Texture", name: "water", path: Jt },
        { type: "Texture", name: "oceanBg", path: Ft },
        { type: "Texture", name: "grid3", path: Nt },
        { type: "Texture", name: "rotationBorder1", path: bt },
        { type: "Texture", name: "rotationBorder2", path: It },
        {
          type: "File",
          name: "SZStorke",
          path: e + "assets/json/深圳市-轮廓.json",
        },
      ];
    this.instance.loadAll(t);
  }
}
class Ht {
  constructor({
    material: e,
    time: t,
    size: n,
    diffuseColor: i,
    diffuseSpeed: a,
    diffuseHeight: s,
    diffuseStart: o,
  }) {
    this.time = t;
    let r = {
      size: 100,
      diffuseSpeed: 15,
      diffuseColor: 9345950,
      diffuseHeight: 10,
      diffuseStart: 1,
    };
    (this.options = Object.assign({}, r, {
      material: e,
      size: n,
      diffuseColor: i,
      diffuseSpeed: a,
      diffuseHeight: s,
      diffuseStart: o,
    })),
      this.init();
  }
  init() {
    let e = null,
      {
        material: t,
        size: n,
        diffuseColor: i,
        diffuseSpeed: a,
        diffuseHeight: s,
        diffuseStart: o,
      } = this.options,
      r = n / a;
    (t.onBeforeCompile = (l) => {
      (e = l),
        (l.uniforms = {
          ...l.uniforms,
          uTime: { value: 0 },
          uSpeed: { value: a },
          uHeight: { value: s },
          uStart: { value: o },
          uColor: { value: new C(i) },
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
          e.uniforms.uTime.value > r && (e.uniforms.uTime.value = 0));
      });
  }
}
const $ = [
  {
    name: "深圳",
    center: [114.085947, 22.547],
    centroid: [114.143142, 22.643377],
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
class fe {
  constructor({ time: e }, t) {
    (this.time = e), (this.instance = new E()), (this.run = !0);
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
      material: new b({
        color: 16777215,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        depthWrite: !1,
        blending: I,
      }),
    };
    (this.options = Object.assign({}, n, t)), this.init();
  }
  init() {
    const {
      material: e,
      texture: t,
      segments: n,
      radius: i,
      radialSegments: a,
      data: s,
      speed: o,
      renderOrder: r,
      globeRadius: l,
    } = this.options;
    s.map((d) => {
      let c = [];
      d.geometry.coordinates.map((m) => {
        m[0].forEach((w) => {
          let { x: B, y: S, z } = U(...w, l);
          c.push(new g(B, S, z));
        });
      });
      const h = new ie(c),
        p = new W(h, n, i, a, !1),
        f = new v(p, e);
      f.position.set(0, 0, 0), (f.renderOrder = r), this.instance.add(f);
    }),
      (t.offset.x = 0.5),
      this.time.on("tick", (d, c) => {
        this.run &&
          (this.options.customRunCallback
            ? this.options.customRunCallback.call(this, d, c, t)
            : (t.offset.x += o * d));
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
const Se = (u, e, t) => {
    var n = (e * Math.PI) / 180,
      i = (t * Math.PI) / 180;
    n = -n;
    var a = u * Math.cos(i) * Math.cos(n),
      s = u * Math.sin(i),
      o = u * Math.cos(i) * Math.sin(n);
    return { x: a, y: s, z: o };
  },
  V = (u, e, t = {}) => {
    let n = { color: 65535 };
    n = Ve(n, t);
    const i = new O(n);
    let a = e.features,
      s = Ut(a);
    const o = new k(new Float32Array(s), 3),
      r = new Y();
    r.attributes.position = o;
    let l = new we(r, i);
    return l.scale.set(u, u, u), (l.name = "createCountryMergeSphereLine"), l;
  };
function Ut(u) {
  let e = [];
  for (let t = 0; t < u.length; t++)
    u[t].geometry.coordinates.forEach((i) => {
      const a = [];
      i[0].forEach((s) => {
        let { x: o, y: r, z: l } = Se(1, ...s);
        a.push(
          parseFloat(o.toFixed(3)),
          parseFloat(r.toFixed(3)),
          parseFloat(l.toFixed(3))
        );
      }),
        e.push(a[0], a[1], a[2]);
      for (let s = 3; s < a.length; s += 3)
        e.push(a[s], a[s + 1], a[s + 2], a[s], a[s + 1], a[s + 2]);
      e.push(a[0], a[1], a[2]);
    });
  return e;
}
function ge(u, e) {
  return Math.sqrt(
    (e.x - u.x) * (e.x - u.x) +
      (e.y - u.y) * (e.y - u.y) +
      (e.z - u.z) * (e.z - u.z)
  );
}
const qt = (u, e = 100) => {
    let t = u.features,
      n = [];
    for (let i = 0; i < t.length; i++) {
      let a = t[i].geometry.coordinates,
        s = t[i].properties.name,
        o = [];
      a.forEach((c) => {
        let { index: h, coords: p } = Vt(c[0], e),
          f = new Y();
        f.setIndex(new k(new Uint16Array(h), 1)),
          f.setAttribute("position", new k(new Float32Array(p), 3));
        let m = new Float32Array((p.length / 3) * 2);
        for (let w = 0; w < p.length; w += 3)
          (m[(w / 3) * 2] = p[w]), (m[(w / 3) * 2 + 1] = p[w + 1]);
        f.setAttribute("uv", new k(m, 2)), o.push(f);
      });
      let r = null;
      o.length > 1 ? (r = Be(o)) : o.length === 1 && (r = o[0]),
        r.computeVertexNormals();
      let l = new X({ color: 65535, side: L }),
        d = new v(r, l);
      (d.name = s), n.push(d);
    }
    return n;
  },
  Vt = (u, e = 100) => {
    let t = [];
    for (let i = 0; i < u.length; i++) t.push(new g(u[i][0], u[i][1], 0));
    let { scopeInsidePoint: n } = Xt(t);
    return (n = t.concat(n)), _t(t, n, e);
  },
  Xt = (u, e = 3) => {
    let t = u.map((c) => [c.x, c.y]),
      n = Math.floor(
        ce(u, function (c) {
          return c.x;
        }).x
      ),
      i = Math.ceil(
        de(u, function (c) {
          return c.x;
        }).x
      ),
      a = Math.floor(
        ce(u, function (c) {
          return c.y;
        }).y
      ),
      s = Math.ceil(
        de(u, function (c) {
          return c.y;
        }).y
      ),
      o = Math.ceil((i - n) / e),
      r = Math.ceil((s - a) / e),
      l = [];
    for (let c = 0; c < o + 1; c++) {
      let h = n + c * e;
      for (let p = 0; p < r + 1; p++) {
        let f = a + p * e;
        l.push([h, f]);
      }
    }
    return {
      scopeInsidePoint: l
        .filter((c) => xe(c, t))
        .map((c) => new g(c[0], c[1], 0)),
      scopePoint: l,
    };
  },
  _t = (u, e, t = 100) => {
    let n = u.map((r) => [r.x, r.y]),
      i = [];
    e.forEach((r) => {
      let { x: l, y: d, z: c } = Se(t, r.x, r.y);
      i.push(l, d, c);
    });
    let a = e.map((r) => [r.x, r.y]),
      s = at.from(a).triangles,
      o = [];
    for (let r = 0; r < s.length; r += 3) {
      let l = e[s[r]],
        d = e[s[r + 1]],
        c = e[s[r + 2]],
        h = [(l.x + d.x + c.x) / 3, (l.y + d.y + c.y) / 3];
      xe(h, n) && o.push(s[r + 2], s[r + 1], s[r]);
    }
    return { index: o, coords: i };
  };
class ee {
  constructor({ assets: e, time: t }, n = {}) {
    (this.mapGroup = new E()),
      (this.assets = e),
      (this.time = t),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new g(0, 0, 0),
          center: new ne(0, 0),
          data: "",
          renderOrder: 1,
          topFaceMaterial: new b({
            color: 1582651,
            transparent: !0,
            opacity: 1,
          }),
          sideMaterial: new b({ color: 464171, transparent: !0, opacity: 1 }),
          line: !0,
          lineMaterial: new O({ color: 16777215 }),
          depth: 0.1,
        },
        n
      )),
      this.mapGroup.position.copy(this.config.position);
    let i = R(this.config.data);
    this.create(i);
  }
  create(e) {
    let t = new E();
    e.features.forEach((n, i) => {
      let {
        name: a,
        center: s = [],
        centroid: o = [],
        adcode: r,
      } = n.properties;
      this.coordinates.push({ name: a, center: s, centroid: o });
      const l = new be();
      (l.name = "meshGroup" + i),
        (l.userData = {
          index: i,
          name: a,
          center: s,
          centroid: n.properties.centroid || n.properties.center,
          adcode: r,
          childrenNum: n.properties.childrenNum,
        });
      let d = new E();
      (d.name = "lineGroup" + i),
        (d.userData.index = i),
        (d.userData.adcode = r);
      const c = {
        depth: this.config.depth,
        bevelEnabled: !0,
        bevelSegments: 1,
        bevelThickness: 0.1,
      };
      let h = [this.config.topFaceMaterial.clone(), this.config.sideMaterial];
      n.geometry.coordinates.forEach((p) => {
        p.forEach((w, B) => {
          const S = new Ee();
          for (let Q = 0; Q < w.length; Q++) {
            if (!w[Q][0] || !w[Q][1]) return !1;
            const [J, F] = this.geoProjection(w[Q]);
            Q === 0 && S.moveTo(J, -F), S.lineTo(J, -F);
          }
          const z = new Te(S, c),
            G = new v(z, h);
          (G.userData = {
            name: a,
            center: s,
            centroid: o,
            adcode: r,
            material: h,
          }),
            (G.renderOrder = this.config.renderOrder),
            l.add(G);
        });
        const f = [];
        let m = null;
        p[0].forEach((w) => {
          const [B, S] = this.geoProjection(w);
          f.push(new g(B, -S, 0)), (m = this.createLine(f));
        }),
          d.add(m);
      }),
        t.add(d),
        d.position.set(0, 0, this.config.depth + 0.1),
        this.config.line && l.add(d),
        this.mapGroup.add(l);
    });
  }
  createLine(e) {
    const t = new Y();
    t.setFromPoints(e);
    let n = new Ce(t, this.config.lineMaterial);
    return (
      (n.renderOrder = this.config.renderOrder + 1), (n.name = "mapLine"), n
    );
  }
  geoProjection(e) {
    return Z().center(this.config.center).scale(1200).translate([0, 0])(e);
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(e) {
    e.add(this.mapGroup);
  }
}
class Wt {
  constructor({}, e = {}) {
    (this.mapGroup = new E()),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new Ue(0, 0, 0),
          center: new ne(0, 0),
          data: "",
          renderOrder: 1,
          merge: !1,
          material: new b({ color: 1582651, transparent: !0, opacity: 1 }),
        },
        e
      )),
      this.mapGroup.position.copy(this.config.position);
    let t = R(this.config.data);
    this.create(t);
  }
  geoProjection(e) {
    return Z().center(this.config.center).scale(1200).translate([0, 0])(e);
  }
  create(e) {
    let { merge: t } = this.config,
      n = [];
    if (
      (e.features.forEach((i) => {
        const a = new be();
        let { name: s, center: o = [], centroid: r = [] } = i.properties;
        this.coordinates.push({ name: s, center: o, centroid: r }),
          (a.userData.name = s),
          i.geometry.coordinates.forEach((l) => {
            l.forEach((d) => {
              const c = new Ee();
              for (let p = 0; p < d.length; p++) {
                if (!d[p][0] || !d[p][1]) return !1;
                const [f, m] = this.geoProjection(d[p]);
                p === 0 && c.moveTo(f, -m), c.lineTo(f, -m);
              }
              const h = new Oe(c);
              if (t) n.push(h);
              else {
                const p = new v(h, this.config.material);
                (p.userData.name = s),
                  (p.renderOrder = this.config.renderOrder),
                  a.add(p);
              }
            });
          }),
          t || this.mapGroup.add(a);
      }),
      t)
    ) {
      let i = Be(n);
      const a = new v(i, this.config.material);
      (a.renderOrder = this.config.renderOrder), this.mapGroup.add(a);
    }
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(e) {
    e.add(this.mapGroup);
  }
}
class Zt {
  constructor({}, e = {}) {
    this.config = Object.assign(
      {
        visibelProvince: "",
        center: [0, 0],
        position: new g(0, 0, 0),
        data: "",
        material: new O({ color: 16777215 }),
        type: "LineLoop",
        renderOrder: 1,
      },
      e
    );
    let t = R(this.config.data),
      n = this.create(t);
    (this.lineGroup = n), this.lineGroup.position.copy(this.config.position);
  }
  geoProjection(e) {
    return Z().center(this.config.center).scale(1200).translate([0, 0])(e);
  }
  create(e) {
    const { type: t, visibelProvince: n } = this.config;
    let i = e.features,
      a = new E();
    for (let s = 0; s < i.length; s++) {
      const o = i[s];
      o.properties.name !== n &&
        o.geometry.coordinates.forEach((r) => {
          const l = [];
          let d = null;
          t === "Line2"
            ? (r[0].forEach((c) => {
                const [h, p] = this.geoProjection(c);
                l.push(h, -p, 0);
              }),
              (d = this.createLine2(l)))
            : t === "Line3"
            ? (r[0].forEach((c) => {
                const [h, p] = this.geoProjection(c);
                l.push(new g(h, -p, 0));
              }),
              (d = this.createLine3(l)))
            : r[0].forEach((c) => {
                const [h, p] = this.geoProjection(c);
                l.push(new g(h, -p, 0)), (d = this.createLine(l));
              }),
            a.add(d);
        });
    }
    return a;
  }
  createLine3(e) {
    const { material: s, renderOrder: o } = this.config,
      r = new ie(e),
      l = new W(r, 2560, 0.02, 4, !1),
      d = new v(l, s);
    return (d.name = "mapLine3"), (d.renderOrder = o), d;
  }
  createLine2(e) {
    const { material: t, renderOrder: n } = this.config,
      i = new Lt();
    i.setPositions(e);
    let a = new Gt(i, t);
    return (
      (a.name = "mapLine2"), (a.renderOrder = n), a.computeLineDistances(), a
    );
  }
  createLine(e) {
    const { material: t, renderOrder: n, type: i } = this.config,
      a = new Y();
    a.setFromPoints(e);
    let s = new Ce(a, t);
    return (s.renderOrder = n), (s.name = "mapLine"), s;
  }
  setParent(e) {
    e.add(this.lineGroup);
  }
}
const Kt = [
    {
      name: "广州市",
      center: [113.280637, 23.125178],
      centroid: [113.544372, 23.329249],
      hide: !1,
      blur: !1,
    },
    {
      name: "韶关市",
      center: [113.591544, 24.801322],
      centroid: [113.779323, 24.81941],
      hide: !1,
      blur: !0,
    },
    {
      name: "深圳市",
      center: [114.085947, 22.547],
      centroid: [114.143142, 22.643377],
      hide: !0,
      blur: !1,
    },
    {
      name: "珠海市",
      center: [113.553986, 22.224979],
      centroid: [113.337286, 22.160135],
      hide: !1,
      blur: !0,
    },
    {
      name: "汕头市",
      center: [116.708463, 23.37102],
      centroid: [116.575361, 23.322231],
      hide: !1,
      blur: !0,
    },
    {
      name: "佛山市",
      center: [113.122717, 23.028762],
      centroid: [112.949778, 23.004314],
      hide: !1,
      blur: !1,
    },
    {
      name: "江门市",
      center: [113.094942, 22.590431],
      centroid: [112.676451, 22.284348],
      hide: !1,
      blur: !0,
    },
    {
      name: "湛江市",
      center: [110.364977, 21.274898],
      centroid: [110.109828, 21.047893],
      hide: !1,
      blur: !0,
    },
    {
      name: "茂名市",
      center: [110.919229, 21.659751],
      centroid: [110.958736, 22.008884],
      hide: !1,
      blur: !0,
    },
    {
      name: "肇庆市",
      center: [112.472529, 23.051546],
      centroid: [112.210411, 23.536359],
      hide: !1,
      blur: !0,
    },
    {
      name: "惠州市",
      center: [114.412599, 23.079404],
      centroid: [114.507032, 23.234461],
      hide: !1,
      blur: !1,
    },
    {
      name: "梅州市",
      center: [116.117582, 24.299112],
      centroid: [116.084478, 24.201791],
      hide: !1,
      blur: !0,
    },
    {
      name: "汕尾市",
      center: [115.364238, 22.774485],
      centroid: [115.53778, 23.004558],
      hide: !1,
      blur: !0,
    },
    {
      name: "河源市",
      center: [114.697802, 23.746266],
      centroid: [114.962729, 24.043541],
      hide: !1,
      blur: !0,
    },
    {
      name: "阳江市",
      center: [111.975107, 21.859222],
      centroid: [111.779569, 22.02617],
      hide: !1,
      blur: !0,
    },
    {
      name: "清远市",
      center: [113.051227, 23.685022],
      centroid: [112.879397, 24.313361],
      hide: !1,
      blur: !0,
    },
    {
      name: "东莞市",
      center: [113.746262, 23.046237],
      centroid: [113.879966, 22.931879],
      hide: !1,
      blur: !1,
    },
    {
      name: "中山市",
      center: [113.382391, 22.521113],
      centroid: [113.398784, 22.517323],
      hide: !1,
      blur: !1,
    },
    {
      name: "潮州市",
      center: [116.632301, 23.661701],
      centroid: [116.790217, 23.783155],
      hide: !1,
      blur: !0,
    },
    {
      name: "揭阳市",
      center: [116.355733, 23.543778],
      centroid: [116.124317, 23.334057],
      hide: !1,
      blur: !0,
    },
    {
      name: "云浮市",
      center: [112.044439, 22.929801],
      centroid: [111.798791, 22.813664],
      hide: !1,
      blur: !0,
    },
  ],
  me = [
    {
      name: "罗湖区",
      enName: "罗湖区",
      center: [114.123885, 22.555341],
      centroid: [114.148158, 22.57487],
      value: 90,
    },
    {
      name: "福田区",
      enName: "福田区",
      center: [114.05096, 22.541009],
      centroid: [114.046594, 22.543431],
      value: 37,
    },
    {
      name: "南山区",
      enName: "南山区",
      center: [113.92943, 22.531221],
      centroid: [113.94053, 22.545584],
      value: 25,
    },
    {
      name: "宝安区",
      enName: "宝安区",
      center: [113.828671, 22.754741],
      centroid: [113.856348, 22.676207],
      value: 85,
    },
    {
      name: "龙岗区",
      enName: "龙岗区",
      center: [114.251372, 22.721511],
      centroid: [114.211562, 22.692969],
      value: 26,
    },
    {
      name: "盐田区",
      enName: "盐田区",
      center: [114.235366, 22.555069],
      centroid: [114.275663, 22.594708],
      value: 40,
    },
    {
      name: "龙华区",
      enName: "龙华区",
      center: [114.044346, 22.691963],
      centroid: [114.034788, 22.684083],
      value: 97,
    },
    {
      name: "坪山区",
      enName: "坪山区",
      center: [114.338441, 22.69423],
      centroid: [114.362823, 22.689495],
      value: 97,
    },
    {
      name: "光明区",
      enName: "光明区",
      center: [113.935895, 22.748816],
      centroid: [113.931239, 22.763198],
      value: 64,
    },
  ],
  $t = [
    {
      name: "监测点#01",
      level: "差",
      value: 84.9,
      lng: 114.31192549,
      lat: 22.78754142,
    },
    {
      name: "监测点#02",
      level: "极好",
      value: 12.5,
      lng: 114.51599105,
      lat: 22.49738772,
    },
    {
      name: "监测点#03",
      level: "良好",
      value: 52.8,
      lng: 113.89842361,
      lat: 22.48467649,
    },
    {
      name: "监测点#04",
      level: "好",
      value: 32,
      lng: 113.8074685,
      lat: 22.6526533,
    },
  ];
function ye(u) {
  return u.sort((e, t) => t.value - e.value), u;
}
class ea {
  constructor(e) {
    se(this, "geoProjection", (e) =>
      Z().center(this.pointCenter).scale(1200).translate([0, 0])(e)
    );
    (this.self = e),
      (this.assets = e.assets),
      (this.time = e.time),
      (this.camera = e.camera),
      (this.debug = e.debug),
      (this.scene = e.scene),
      (this.sizes = e.sizes),
      (this.pointCenter = [114.143142, 22.643377]),
      (this.flyLineCenter = [114.046594, 22.543431]),
      (this.depth = 0.3),
      (this.clicked = !1),
      (this.otherGroup = new E()),
      (this.labelGroup = new E()),
      (this.label3d = new St(this.self)),
      this.labelGroup.rotateX(-Math.PI / 2),
      (this.eventElement = []),
      (this.defaultMaterial = null),
      (this.defaultLightMaterial = null),
      this.scene.add(this.labelGroup, this.otherGroup),
      this.init(),
      this.update();
  }
  init() {
    this.createFloor(),
      this.createLabel(),
      this.createModel(),
      this.createTopGlow(),
      this.createRotateBorder(),
      this.createStorke();
  }
  initEvent() {
    (this.interactionManager = new Me(
      this.self.renderer.instance,
      this.camera.instance,
      this.self.canvas
    )),
      this.createEvent();
  }
  initAnimate() {
    this.initEnvironment(),
      (this.focusMapGroup.visible = !0),
      this.bgMapGroup.scale.set(1, 1, 1),
      (this.otherGroup.visible = !0),
      (this.scene.fog = new ze(0, 1, 50)),
      (this.scene.background = new C(0)),
      this.camera.setCamera(!1),
      (this.camera.controls.enabled = !1),
      this.camera.instance.position.set(
        -13.767695123014105,
        12.990152163077308,
        39.28228164159694
      );
    let e = A.timeline();
    e.addLabel("focusMap", 2),
      e.addLabel("focusMapOpacity", 2.5),
      e.addLabel("bar", 3.5),
      e.add(
        A.to(this.camera.instance.position, {
          duration: 2.5,
          x: -0.2515849818960619,
          y: 12.397744557047988,
          z: 14.647659671139275,
          ease: "circ.out",
        })
      ),
      e.add(
        A.to(this.focusMapGroup.position, { duration: 1, x: 0, y: 0, z: 0 }),
        "focusMap"
      ),
      e.add(
        A.to(this.focusMapGroup.scale, {
          duration: 1,
          x: 1,
          y: 1,
          z: 1,
          ease: "circ.out",
        }),
        "focusMap"
      ),
      e.add(
        A.to(this.focusMapTopMaterial, {
          duration: 1,
          opacity: 1,
          ease: "circ.out",
        }),
        "focusMapOpacity"
      ),
      e.add(
        A.to(this.focusMapSideMaterial, {
          duration: 1,
          opacity: 1,
          ease: "circ.out",
          onComplete: () => {
            (this.focusMapSideMaterial.transparent = !1),
              (this.camera.controls.enabled = !0),
              this.initEvent();
          },
        }),
        "focusMapOpacity"
      ),
      this.otherLabel.map((t, n) => {
        let i = t.element.querySelector(".other-label");
        e.add(
          A.to(i, {
            duration: 1,
            delay: 0.1 * n,
            translateY: 0,
            opacity: 0.5,
            ease: "circ.out",
          }),
          "focusMapOpacity"
        );
      }),
      e.add(
        A.to(this.focusMapLineMaterial, {
          duration: 0.5,
          delay: 0.3,
          opacity: 0.1,
        }),
        "focusMapOpacity"
      ),
      e.add(
        A.to(this.borderGlowMaterial, {
          duration: 0.5,
          delay: 0.6,
          opacity: 1,
        }),
        "focusMapOpacity"
      ),
      e.add(
        A.to(this.rotateBorder1.scale, {
          delay: 0.3,
          duration: 1,
          x: 1,
          y: 1,
          z: 1,
          ease: "circ.out",
        }),
        "focusMapOpacity"
      ),
      e.add(
        A.to(this.rotateBorder2.scale, {
          duration: 1,
          delay: 0.5,
          x: 1,
          y: 1,
          z: 1,
          ease: "circ.out",
        }),
        "focusMapOpacity"
      ),
      this.allBar.map((t, n) => {
        e.add(
          A.to(t.scale, {
            duration: 1,
            delay: 0.1 * n,
            x: 1,
            y: 1,
            z: 1,
            ease: "circ.out",
          }),
          "bar"
        );
      }),
      this.allBarMaterial.map((t, n) => {
        e.add(
          A.to(t, {
            duration: 1,
            delay: 0.1 * n,
            opacity: 1,
            ease: "circ.out",
          }),
          "bar"
        );
      }),
      this.allProvinceLabel.map((t, n) => {
        let i = t.element.querySelector(".provinces-label-wrap"),
          a = t.element.querySelector(".number .value"),
          s = Number(a.innerText),
          o = { score: 0 };
        e.add(
          A.to(i, {
            duration: 1,
            delay: 0.2 * n,
            translateY: 0,
            opacity: 1,
            ease: "circ.out",
          }),
          "bar"
        );
        let r = A.to(o, { duration: 1, delay: 0.2 * n, score: s, onUpdate: l });
        function l() {
          a.innerText = o.score.toFixed(0);
        }
        e.add(r, "bar");
      }),
      this.allGuangquan.map((t, n) => {
        e.add(
          A.to(t.children[0].scale, {
            duration: 1,
            delay: 0.1 * n,
            x: 1,
            y: 1,
            z: 1,
            ease: "circ.out",
          }),
          "bar"
        ),
          e.add(
            A.to(t.children[1].scale, {
              duration: 1,
              delay: 0.1 * n,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "bar"
          );
      });
  }
  initEnvironment() {
    this.self.sun.intensity = 16;
    let e = new Ie(16777215, 8);
    if (
      (e.position.set(-30, 6, -8),
      (e.castShadow = !0),
      (e.shadow.radius = 20),
      (e.shadow.mapSize.width = 1024),
      (e.shadow.mapSize.height = 1024),
      this.scene.add(e),
      this.debug.active)
    ) {
      let t = new ve(e, 2);
      this.scene.add(t);
      const n = this.debug.instance.addFolder("Environment");
      n.add(e.position, "x", -30, 30, 1),
        n.add(e.position, "y", -30, 30, 1),
        n.add(e.position, "z", -30, 30, 1),
        n.add(e, "intensity", 1, 100, 1),
        n.onChange((i) => {
          t.update();
        });
    }
    this.createPointLight({
      color: 3358808,
      intensity: 600,
      distance: 1e4,
      x: -9,
      y: 3,
      z: -3,
    }),
      this.createPointLight({
        color: 3358808,
        intensity: 230,
        distance: 1e4,
        x: 0,
        y: 2,
        z: 5,
      });
  }
  createPointLight(e) {
    const t = new De(3358808, e.intensity, e.distance, 1);
    if ((t.position.set(e.x, e.y, e.z), this.scene.add(t), this.debug.active)) {
      const n = new ke(t, 1);
      this.scene.add(n);
      const i = this.debug.instance.addFolder("Point" + Math.random());
      i.addColor(e, "color"),
        i.add(e, "intensity", 1, 2e4, 10),
        i.add(e, "distance", 100, 1e5, 10),
        i.add(e, "x", -30, 30, 1),
        i.add(e, "y", -30, 30, 1),
        i.add(e, "z", -30, 30, 1),
        i.onChange(({ object: a }) => {
          (t.color = new C(a.color)),
            (t.distance = a.distance),
            (t.intensity = a.intensity),
            t.position.set(a.x, a.y, a.z),
            n.update();
        });
    }
  }
  createModel() {
    (this.bgMapGroup = new E()),
      this.bgMapGroup.scale.set(0, 0, 0),
      (this.focusMapGroup = new E());
    let { bgMap: e, bgMapTopFace: t } = this.createBgMap(),
      { focusMap: n } = this.createFocusMap();
    t.setParent(this.bgMapGroup),
      e.setParent(this.bgMapGroup),
      n.setParent(this.focusMapGroup),
      this.focusMapGroup.position.set(0, 0, -0.01),
      this.focusMapGroup.scale.set(1, 1, 0),
      this.bgMapGroup.add(this.focusMapGroup),
      this.bgMapGroup.rotateX(-Math.PI / 2),
      this.bgMapGroup.position.set(0, 0.2, 0),
      this.scene.add(this.bgMapGroup),
      this.createBar();
  }
  createBgMap() {
    let e = this.assets.getResource("blackBg"),
      t = this.assets.getResource("grid3");
    (e.wrapS = e.wrapT = x), (t.wrapS = t.wrapT = x), t.repeat.set(0.5, 0.5);
    let n = this.assets.getResource("guangdong"),
      i = new X({
        color: 2172723,
        map: e,
        normalMap: e,
        transparent: !0,
        opacity: 1,
      }),
      a = new ee(this, {
        data: n,
        center: this.pointCenter,
        position: new g(0, 0, 0.11),
        depth: 0.1,
        topFaceMaterial: i,
        sideMaterial: new X({ color: 659744, transparent: !0, opacity: 1 }),
        lineMaterial: new O({
          color: new C(91, 107, 147),
          transparent: !0,
          depthTest: !1,
          opacity: 0.05,
        }),
        renderOrder: 2,
      }),
      s = new Wt(this, {
        data: n,
        center: this.pointCenter,
        position: new g(0, 0, 0.32),
        merge: !1,
        material: new X({
          map: t,
          transparent: !0,
          opacity: 0.05,
          blending: I,
        }),
        renderOrder: 2,
      }),
      { boxSize: o, box3: r, center: l } = _(a.mapGroup);
    return (
      a.mapGroup.children.map((d, c) => {
        d.children.map((h) => {
          h.type === "Mesh" &&
            this.calcUv2(h.geometry, o.x, o.y, r.min.x, r.min.y);
        });
      }),
      { bgMap: a, bgMapTopFace: s }
    );
  }
  createFocusMap() {
    let e = this.assets.getResource("shenzhen"),
      [t, n] = this.createFocusMapMaterial();
    (this.focusMapTopMaterial = t),
      (this.focusMapSideMaterial = n),
      (this.focusMapLineMaterial = new O({
        color: 16777215,
        opacity: 0,
        transparent: !0,
        depthTest: !1,
        fog: !1,
      }));
    let i = new ee(this, {
        center: this.pointCenter,
        position: new g(0, 0, 0.42),
        data: e,
        depth: this.depth,
        topFaceMaterial: t,
        sideMaterial: n,
        lineMaterial: this.focusMapLineMaterial,
        renderOrder: 4,
      }),
      { boxSize: a, box3: s, center: o } = _(i.mapGroup);
    return (
      i.mapGroup.children.map((r, l) => {
        r.children.map((d) => {
          d.type === "Mesh" &&
            (this.eventElement.push(d),
            this.calcUv2(d.geometry, a.x, a.y, s.min.x, s.min.y));
        });
      }),
      (this.defaultMaterial = t),
      (this.defaultLightMaterial = new C("rgb(41,159,255)")),
      { focusMap: i }
    );
  }
  createFocusMapMaterial() {
    let e = this.assets.getResource("blackBg").clone();
    e.colorSpace = D;
    let t = new b({
        color: 12238077,
        map: e,
        transparent: !0,
        opacity: 1,
        fog: !1,
        side: L,
      }),
      n = this.assets.getResource("side");
    (n.wrapS = x), (n.wrapT = x), n.repeat.set(1, 2), (n.offset.y += 0.065);
    let i = new re({ color: 16777215, map: n, fog: !1, opacity: 0, side: L });
    return (
      this.time.on("tick", () => {
        n.offset.y += 0.005;
      }),
      (i.onBeforeCompile = (a) => {
        (a.uniforms = {
          ...a.uniforms,
          uColor1: { value: new C(2781042) },
          uColor2: { value: new C(2781042) },
        }),
          (a.vertexShader = a.vertexShader.replace(
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
          (a.fragmentShader = a.fragmentShader.replace(
            "void main() {",
            `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
          )),
          (a.fragmentShader = a.fragmentShader.replace(
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
      [t, i]
    );
  }
  createTopGlow() {
    let e = new T(28, 28);
    const t = this.assets.getResource("szbg2");
    (t.colorSpace = D), (t.wrapS = x), (t.wrapT = x), t.repeat.set(1, 1);
    let n = new b({
      map: t,
      color: 39668,
      opacity: 0,
      transparent: !0,
      blending: I,
      side: L,
      depthTest: !1,
    });
    this.borderGlowMaterial = n;
    let i = new v(e, n);
    if (
      ((i.renderOrder = 20),
      i.rotateX(-Math.PI / 2),
      i.position.set(0.5, 1.009, 0.197),
      i.scale.set(0.812, 0.812, 0.812),
      this.scene.add(i),
      this.debug.active)
    ) {
      const a = this.debug.instance.addFolder("glow");
      let s = { scale: 0.816, repeatX: 1, repeatY: 1 };
      a.add(s, "scale", 0, 1, 0.001).onChange((o) => {
        let r = Number(o);
        i.scale.set(r, r, r);
      }),
        a.add(i.position, "x", -3, 3, 0.001).onChange((o) => {
          let r = Number(o);
          i.position.x = r;
        }),
        a.add(i.position, "y", -3, 3, 0.001).onChange((o) => {
          let r = Number(o);
          i.position.y = r;
        }),
        a.add(i.position, "z", -3, 3, 0.001).onChange((o) => {
          let r = Number(o);
          i.position.z = r;
        });
    }
  }
  createEvent() {
    let e = [];
    const t = (i) => {
        i.traverse((a) => {
          a.isMesh && (a.material[0] = this.defaultMaterial.clone());
        });
      },
      n = (i) => {
        i.traverse((a) => {
          a.isMesh &&
            ((a.material[0].color = new C(this.defaultLightMaterial)),
            (a.material[0].map = null));
        });
      };
    this.eventElement.map((i) => {
      this.interactionManager.add(i),
        i.addEventListener("mousedown", (a) => {
          if (this.clicked) return !1;
          this.clicked = !0;
        }),
        i.addEventListener("mouseup", (a) => {
          this.clicked = !1;
        }),
        i.addEventListener("mouseover", (a) => {
          e.includes(a.target.parent) || e.push(a.target.parent),
            (document.body.style.cursor = "pointer"),
            n(a.target.parent);
        }),
        i.addEventListener("mouseout", (a) => {
          (e = e.filter(
            (s) => s.userData.name !== a.target.parent.userData.name
          )),
            e.length > 0 && e[e.length - 1],
            t(a.target.parent),
            (document.body.style.cursor = "default");
        });
    });
  }
  createLightMesh(e) {
    let t = this.assets.getResource("shenzhen");
    (t = R(t)),
      (t.features = t.features.filter((o) => o.properties.name === e.name)),
      (t = JSON.stringify(t));
    let { faceHightMaterial: n, sideHightMaterial: i } =
        this.createLightMaterial(),
      a = new ee(this, {
        center: this.pointCenter,
        position: new g(0, 0, 0.42),
        data: t,
        depth: 0.01,
        topFaceMaterial: n,
        sideMaterial: i,
        lineMaterial: new O({
          color: 16777215,
          transparent: !0,
          depthTest: !1,
        }),
        renderOrder: 10,
      });
    a.mapGroup.position.z += 0.5;
    let s = _(a.mapGroup);
    return (
      Math.max(s.boxSize.x, s.boxSize.y),
      a.mapGroup.traverse((o) => {
        o.isMesh &&
          new K(o.material[0], {
            uColor1: 10142463,
            uColor2: 14805492,
            dir: "z",
            size: 5,
          });
      }),
      new K(i, {
        uColor1: 1259132,
        uColor2: 6528247,
        dir: "y",
        size: s.boxSize.z,
      }),
      a.mapGroup
    );
  }
  createLightMaterial() {
    let e = new b({ fog: !1, transparent: !0, depthWrite: !1, depthTest: !1 }),
      t = new b({ fog: !1, transparent: !0, depthWrite: !1, depthTest: !1 });
    return { faceHightMaterial: e, sideHightMaterial: t };
  }
  createBar() {
    let e = this,
      t = ye(me).filter((r, l) => l < 7);
    const n = new E(),
      i = 0.5,
      a = 4 * i,
      s = t[0].value;
    (this.allBar = []),
      (this.allBarMaterial = []),
      (this.allGuangquan = []),
      (this.allProvinceLabel = []),
      t.map((r, l) => {
        let d = a * (r.value / s),
          c = new b({
            color: 16777215,
            transparent: !0,
            opacity: 0,
            depthTest: !1,
            fog: !1,
          });
        new K(c, {
          uColor1: l > 3 ? 16506760 : 5291006,
          uColor2: l > 3 ? 16776948 : 7863285,
          size: d,
          dir: "y",
        });
        const h = new Ye(0.1 * i, 0.1 * i, d);
        h.translate(0, 0, d / 2);
        const p = new v(h, c);
        p.renderOrder = 20;
        let f = p,
          [m, w] = this.geoProjection(r.centroid);
        f.position.set(m, -w, this.depth + 0.75), f.scale.set(1, 1, 0);
        let B = this.createQuan(new g(m, this.depth + 0.75, w), l),
          S = this.createHUIGUANG(d, l > 3 ? 16776948 : 7863285);
        f.add(...S), n.add(f), (n.rotation.x = -Math.PI / 2);
        let z = o(r, l, new g(m, -w, 1.6 + d));
        this.allBar.push(f),
          this.allBarMaterial.push(c),
          this.allGuangquan.push(B),
          this.allProvinceLabel.push(z);
      }),
      this.scene.add(n);
    function o(r, l, d) {
      let c = e.label3d.create("", "provinces-label", !1);
      return (
        c.init(
          `<div class="provinces-label ${l > 4 ? "yellow" : ""}">
      <div class="provinces-label-wrap">
        <div class="no">${l + 1}</div>
        <div class="name">
        ${r.name}
        </div>
        <div class="number"><span class="value">${r.value}</span>万元</div>
      </div>
    </div>`,
          d
        ),
        e.label3d.setLabelStyle(c, 0.01, "x"),
        c.setParent(e.labelGroup),
        c
      );
    }
  }
  createHUIGUANG(e, t) {
    let n = new T(0.3, e);
    n.translate(0, e / 2, 0);
    const i = this.assets.getResource("huiguang");
    (i.colorSpace = D), (i.wrapS = x), (i.wrapT = x);
    let a = new b({
        color: t,
        map: i,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        side: L,
        blending: I,
      }),
      s = new v(n, a);
    (s.renderOrder = 22), s.rotateX(Math.PI / 2);
    let o = s.clone(),
      r = s.clone();
    return (
      o.rotateY((Math.PI / 180) * 60),
      r.rotateY((Math.PI / 180) * 120),
      [s, o, r]
    );
  }
  createQuan(e, t) {
    const n = this.assets.getResource("guangquan1"),
      i = this.assets.getResource("guangquan2");
    let a = new T(0.5, 0.5),
      s = new b({
        color: 16777215,
        map: n,
        alphaMap: n,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: I,
      }),
      o = new b({
        color: 16777215,
        map: i,
        alphaMap: i,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: I,
      }),
      r = new v(a, s),
      l = new v(a, o);
    return (
      (r.renderOrder = 21),
      (l.renderOrder = 21),
      r.rotateX(-Math.PI / 2),
      l.rotateX(-Math.PI / 2),
      r.position.copy(e),
      l.position.copy(e),
      (l.position.y -= 0.001),
      r.scale.set(0, 0, 0),
      l.scale.set(0, 0, 0),
      (this.quanGroup = new E()),
      this.quanGroup.add(r, l),
      this.scene.add(this.quanGroup),
      this.time.on("tick", () => {
        r.rotation.z += 0.05;
      }),
      this.quanGroup
    );
  }
  createFloor() {
    let e = new T(200, 108, 1, 1);
    const t = this.assets.getResource("oceanBg");
    this.assets.getResource("water"),
      (t.colorSpace = D),
      (t.wrapS = x),
      (t.wrapT = x),
      t.repeat.set(1, 1);
    let n = new re({
        map: t,
        transparent: !0,
        opacity: 1,
        color: new C("#313f57"),
        emissive: new C("#000000"),
      }),
      i = new v(e, n);
    i.rotateX(-Math.PI / 2),
      i.position.set(0, 0.2, 0),
      this.otherGroup.add(i),
      this.debug.instance.addColor(n, "color").onChange((a) => {
        n.color = new C(a);
      });
  }
  createLabel() {
    let e = this,
      t = this.labelGroup,
      n = this.label3d,
      i = [];
    Kt.map((s) => {
      if (s.hide == !0) return !1;
      let o = a(s, n, t);
      i.push(o);
    }),
      (this.otherLabel = i);
    function a(s, o, r) {
      let l = o.create("", `city-label ${s.blur ? " blur" : ""}`, !1);
      const [d, c] = e.geoProjection(s.centroid);
      return (
        l.init(`<div class="other-label">${s.name}</div>`, new g(d, -c, 0.4)),
        o.setLabelStyle(l, 0.04, "x", 0),
        l.setParent(r),
        l
      );
    }
  }
  createFlyLine() {
    (this.flyLineGroup = new E()),
      (this.flyLineGroup.visible = !1),
      this.scene.add(this.flyLineGroup);
    const e = this.assets.getResource("flyLine");
    (e.wrapS = e.wrapT = x), e.repeat.set(1, 1);
    const t = 0.03,
      n = 32,
      i = 8,
      a = !1;
    let [s, o] = this.geoProjection(this.flyLineCenter),
      r = new g(s, -o, 0);
    const l = new b({
      map: e,
      alphaMap: e,
      color: 4483507,
      transparent: !0,
      fog: !1,
      opacity: 1,
      depthTest: !1,
      blending: I,
    });
    this.time.on("tick", () => {
      e.offset.x -= 0.006;
    }),
      me
        .filter((d, c) => c < 7)
        .map((d) => {
          let [c, h] = this.geoProjection(d.centroid),
            p = new g(c, -h, 0);
          const f = new g();
          f.addVectors(r, p).multiplyScalar(0.5), f.setZ(3);
          const m = new Je(r, f, p),
            w = new W(m, n, t, i, a),
            B = new v(w, l);
          (B.rotation.x = -Math.PI / 2),
            B.position.set(0, 0.94, 0),
            (B.renderOrder = 21),
            this.flyLineGroup.add(B);
        }),
      this.createFlyLineFocus();
  }
  createFlyLineFocus() {
    (this.flyLineFocusGroup = new E()),
      (this.flyLineFocusGroup.visible = !1),
      (this.flyLineFocusGroup.rotation.x = -Math.PI / 2);
    let [e, t] = this.geoProjection(this.flyLineCenter);
    this.flyLineFocusGroup.position.set(e, 1.042, t),
      this.scene.add(this.flyLineFocusGroup);
    const n = this.assets.getResource("flyLineFocus"),
      i = new T(1, 1),
      a = new b({
        color: 4483507,
        map: n,
        alphaMap: n,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        blending: I,
      }),
      s = new v(i, a);
    s.scale.set(0, 0, 0);
    const o = s.clone();
    (o.material = a.clone()),
      this.flyLineFocusGroup.add(s, o),
      A.to(s.material, { opacity: 0, repeat: -1, yoyo: !1, duration: 1 }),
      A.to(s.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      }),
      A.to(o.material, {
        delay: 0.5,
        opacity: 0,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      }),
      A.to(o.scale, {
        delay: 0.5,
        x: 1.5,
        y: 1.5,
        z: 1.5,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      });
  }
  createInfoPoint() {
    let e = this;
    (this.InfoPointGroup = new E()),
      (this.InfoPointGroup.visible = !0),
      (this.InfoPointGroup.rotation.x = -Math.PI / 2),
      this.scene.add(this.InfoPointGroup),
      (this.infoPointIndex = 0),
      (this.infoPointLabelTime = null),
      (this.infoLabelElement = []);
    let t = this.label3d;
    const n = this.assets.getResource("point");
    let i = [2729983, 4483507],
      a = ye($t),
      s = a[0].value;
    a.map((r, l) => {
      const d = new te({
          map: n,
          color: i[l % i.length],
          fog: !1,
          transparent: !0,
          depthTest: !1,
        }),
        c = new ae(d);
      c.renderOrder = 23;
      let h = 0.7 + (r.value / s) * 0.4;
      c.scale.set(h, h, h);
      let [p, f] = this.geoProjection([r.lng, r.lat]),
        m = [p, -f, this.depth + 1];
      c.position.set(...m),
        (c.userData.position = [...m]),
        (c.userData = {
          position: [p, -f, this.depth + 1],
          name: r.name,
          value: r.value,
          level: r.level,
          index: l,
        }),
        this.InfoPointGroup.add(c);
      let w = o(r, t, this.InfoPointGroup);
      this.infoLabelElement.push(w),
        this.interactionManager.add(c),
        c.addEventListener("mousedown", (B) => {
          if (this.clicked) return !1;
          (this.clicked = !0),
            (this.infoPointIndex = B.target.userData.index),
            this.infoLabelElement.map((S) => {
              S.hide();
            }),
            w.show(),
            this.createInfoPointLabelLoop();
        }),
        c.addEventListener("mouseup", (B) => {
          this.clicked = !1;
        }),
        c.addEventListener("mouseover", (B) => {
          document.body.style.cursor = "pointer";
        }),
        c.addEventListener("mouseout", (B) => {
          document.body.style.cursor = "default";
        });
    });
    function o(r, l, d) {
      let c = l.create("", "info-point", !0);
      const [h, p] = e.geoProjection([r.lng, r.lat]);
      return (
        c.init(
          ` <div class="info-point-wrap">
          <div class="info-point-wrap-inner">
            <div class="info-point-line">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
            <div class="info-point-content">
              <div class="content-item"><span class="label">名称</span><span class="value">${r.name}</span></div>
              <div class="content-item"><span class="label">PM2.5</span><span class="value">${r.value}ug/m²</span></div>
              <div class="content-item"><span class="label">等级</span><span class="value">${r.level}</span></div>
            </div>
          </div>
        </div>
      `,
          new g(h, -p, 2.7)
        ),
        l.setLabelStyle(c, 0.015, "x"),
        c.setParent(d),
        c.hide(),
        c
      );
    }
  }
  createInfoPointLabelLoop() {
    clearInterval(this.infoPointLabelTime),
      (this.infoPointLabelTime = setInterval(() => {
        this.infoPointIndex++,
          this.infoPointIndex >= this.infoLabelElement.length &&
            (this.infoPointIndex = 0),
          this.infoLabelElement.map((e, t) => {
            this.infoPointIndex === t ? e.show() : e.hide();
          });
      }, 3e3));
  }
  createRotateBorder() {
    let e = 10,
      t = this.assets.getResource("rotationBorder1"),
      n = this.assets.getResource("rotationBorder2"),
      i = new Ae(this, {
        width: e * 1.178,
        needRotate: !0,
        rotateSpeed: 5e-4,
        material: new b({
          map: t,
          color: 39668,
          transparent: !0,
          opacity: 0.4,
          side: L,
          depthWrite: !1,
          blending: I,
        }),
        position: new g(0, 0.28, 0),
      });
    (i.instance.renderOrder = 6),
      i.instance.scale.set(0, 0, 0),
      i.setParent(this.scene);
    let a = new Ae(this, {
      width: e * 1.116,
      needRotate: !0,
      rotateSpeed: -0.002,
      material: new b({
        map: n,
        color: 39668,
        transparent: !0,
        opacity: 0.6,
        side: L,
        depthWrite: !1,
        blending: I,
      }),
      position: new g(0, 0.3, 0),
    });
    (a.instance.renderOrder = 6),
      a.instance.scale.set(0, 0, 0),
      a.setParent(this.scene),
      (this.rotateBorder1 = i.instance),
      (this.rotateBorder2 = a.instance);
  }
  createStorke() {
    let e = this.assets.getResource("SZStorke");
    const t = this.assets.getResource("pathLine");
    (t.wrapS = x), (t.wrapT = x), t.repeat.set(1, 1);
    let n = new Zt(this, {
      center: this.pointCenter,
      position: new g(0, this.depth + 0.75, 0),
      data: e,
      material: new b({
        color: 2868444,
        map: t,
        alphaMap: t,
        fog: !1,
        transparent: !0,
        opacity: 1,
        blending: I,
      }),
      type: "Line3",
      renderOrder: 22,
    });
    (n.lineGroup.rotation.x = -Math.PI / 2),
      this.scene.add(n.lineGroup),
      this.time.on("tick", () => {
        t.offset.x += 0.002;
      });
  }
  calcUv2(e, t, n, i, a) {
    const s = e.attributes.position,
      o = e.attributes.uv,
      r = e.groups[0].count;
    for (let l = 0; l < r; l++) {
      const d = s.getX(l),
        c = s.getY(l),
        h = (d - i) / t,
        p = (c - a) / n;
      o.setXY(l, h, p);
    }
    (o.needsUpdate = !0), e.computeVertexNormals();
  }
  update() {
    this.time.on("tick", () => {
      this.interactionManager && this.interactionManager.update();
    });
  }
  destroy() {
    this.label3d && this.label3d.destroy();
  }
}
class ta extends qe {
  constructor(e) {
    super(e, { isOrthographic: !0 }),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.position.set(0, 0, 300),
      this.camera.instance.lookAt(0, 0, 0),
      this.camera.instance.updateProjectionMatrix(),
      this.renderer.instance.setClearColor(0, 0),
      (this.renderer.postprocessing = !1),
      (this.szmap = null),
      (this.interactionManager = new Me(
        this.renderer.instance,
        this.camera.instance,
        this.canvas
      )),
      this.initSetting(),
      this.initEnvironment(),
      this.initAssets(() => {
        (this.szmap = new ea(this)),
          this.initModel(),
          this.initAnimate(),
          this.createMoveCloud(),
          this.post();
      });
  }
  initAnimate() {
    let e = new A.timeline({ repeat: 0 });
    e.addLabel("globeRotate", 0),
      e.addLabel("globeScale", 2),
      e.add(
        A.to(this.globe.instance.rotation, {
          duration: 4,
          y: Math.PI,
          ease: "power1.inOut",
        })
      ),
      e.add(
        A.to(this.globe.instance.position, {
          duration: 1,
          x: -70,
          y: -100,
          ease: "power1.inOut",
          delay: 0.5,
        }),
        "globeScale"
      ),
      e.add(
        A.to(this.globe.instance.scale, {
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
    const e = new vt(this.scene, this.camera.instance, {
      blendFunction: pe.ADD,
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
    const t = new Bt(this.renderer.instance);
    t.addPass(new xt(this.scene, this.camera.instance));
    const n = new Mt(this.camera.instance, e);
    t.addPass(n),
      (this.effect = e),
      this.effect.selection.set([this.line3]),
      (this.renderer.composer = t);
    const i = new C(),
      a = this.effect,
      s = a.uniforms,
      o = a.blendMode,
      r = {
        enabled: !0,
        resolution: a.height,
        blurriness: 0,
        "use pattern": !1,
        "pattern scale": 60,
        "pulse speed": a.pulseSpeed,
        "edge strength": a.edgeStrength,
        "visible edge": i.copyLinearToSRGB(a.visibleEdgeColor).getHex(),
        "hidden edge": i.copyLinearToSRGB(a.hiddenEdgeColor).getHex(),
        "x-ray": !0,
        opacity: o.opacity.value,
        "blend mode": o.blendFunction,
      };
    this.debug.instance.add(r, "enabled").onChange((l) => {
      this.renderer.postprocessing = l;
    }),
      this.debug.instance
        .add(r, "resolution", [240, 360, 480, 720, 1080])
        .onChange((l) => {
          a.resolution.height = Number(l);
        }),
      this.debug.instance.add(a, "multisampling", [0, 2, 4]),
      this.debug.instance
        .add(r, "blurriness", ue.VERY_SMALL, ue.HUGE + 1, 1)
        .onChange((l) => {
          (a.blurPass.enabled = l > 0),
            (a.blurPass.blurMaterial.kernelSize = l - 1);
        }),
      this.debug.instance
        .add(r, "pattern scale", 20, 100, 0.1)
        .onChange((l) => {
          s.get("patternScale").value = l;
        }),
      this.debug.instance.add(r, "edge strength", 0, 10, 0.01).onChange((l) => {
        s.get("edgeStrength").value = l;
      }),
      this.debug.instance.add(r, "pulse speed", 0, 2, 0.01).onChange((l) => {
        a.pulseSpeed = l;
      }),
      this.debug.instance.addColor(r, "visible edge").onChange((l) => {
        a.visibleEdgeColor.setHex(l).convertSRGBToLinear();
      }),
      this.debug.instance.addColor(r, "hidden edge").onChange((l) => {
        a.hiddenEdgeColor.setHex(l).convertSRGBToLinear();
      }),
      this.debug.instance.add(a, "xRay"),
      this.debug.instance.add(r, "opacity", 0, 1, 0.01).onChange((l) => {
        o.opacity.value = l;
      }),
      this.debug.instance.add(r, "blend mode", pe).onChange((l) => {
        o.setBlendFunction(Number(l));
      });
  }
  initEnvironment() {
    let e = new Fe(16777215, 4);
    this.scene.add(e), (this.sun = e);
    let t = new Ie(16777215, 6);
    t.position.set(238, 90, -8);
    let n = new ve(t, 200);
    this.scene.add(t);
    const i = this.debug.instance.addFolder("Environment");
    i.add(t.position, "x", -1e3, 1e3, 1),
      i.add(t.position, "y", -1e3, 1e3, 1),
      i.add(t.position, "z", -1e3, 1e3, 1),
      i.onChange((a) => {
        n.update();
      });
  }
  initAssets(e) {
    let t = new jt(e);
    this.assets = t.instance;
  }
  initSetting() {
    this.debug = new Xe(!0);
  }
  initModel() {
    const e = this.assets.getResource("earthAtmos"),
      t = this.assets.getResource("earthNight"),
      n = this.assets.getResource("earthNormal"),
      i = this.assets.getResource("earthSpecular"),
      a = this.assets.getResource("highLight");
    (a.colorSpace = D), (e.colorSpace = D);
    let s = new dt(this, {
      globeColor: 16777215,
      globeImage: e,
      globeNightImage: t,
      normalImage: n,
      normalScale: new ne(1, 1),
      specularImage: i,
      atmosphereColor: new C("#396ee0"),
    });
    (s.instance.rotation.y = -1 * Math.PI),
      s.instance.scale.set(0.5, 0.5, 0.5),
      s.setParent(this.scene),
      this.debug.instance
        .addFolder("globe")
        .addColor(s.globeObj.material, "color")
        .onChange((w) => {
          s.shader.uniforms.uColor.value = new C(w);
        }),
      (this.globe = s);
    let r = new ae(
      new te({
        color: 3763936,
        side: L,
        map: a,
        transparent: !0,
        alphaMap: a,
        depthTest: !1,
        blending: I,
      })
    );
    r.scale.set(100 * 2.5, 100 * 2.5, 0),
      (r.renderOrder = 2),
      this.globe.add(r),
      this.createAtmosphere({ radius: 100, atmosphereColor: new C("#396ee0") }),
      this.createStars(),
      this.createGrid(),
      this.createCloud(),
      this.createCountryLine();
    let l = this.createChinaWall(),
      { chinaMeshsGroup: d, chinaMeshsMaterial: c } = this.createChinaMesh(),
      h = this.createChinaLine();
    this.chinaLine = h;
    let { chinaTopLine: p, chinaTopLineMaterial: f } = this.createTopStorke(),
      m = this.createRippleCirle();
    (this.rippleGroup = m),
      s.add(m),
      l.add(h, d, p),
      this.createStorke(() => {
        A.to(l.scale, {
          x: 1,
          y: 1,
          z: 1,
          ease: "power1",
          duration: 2,
          onComplete: () => {
            this.createArcAll();
          },
        }),
          A.to(this.chinaLine.material, { opacity: 0.2, delay: 1.7 }),
          A.to(this.line3.material, { opacity: 1, delay: 1.7 }),
          A.to(c, { opacity: 0.2, delay: 1.7 }),
          A.to(f, { opacity: 1, delay: 1.7 }),
          (l.visible = !0);
      });
  }
  createAtmosphere({ radius: e, atmosphereColor: t }) {
    const n = this.assets.getResource("globeHuiguang"),
      i = new te({
        map: n,
        color: t,
        side: L,
        transparent: !0,
        alphaMap: n,
        depthWrite: !1,
      }),
      a = new ae(i);
    this.renderer.postprocessing
      ? a.scale.set(e * 2.5, e * 2.5, e * 2.5)
      : a.scale.set(e * 3.5, e * 3.5, e * 3.5),
      this.globe.add(a);
  }
  createChinaWall() {
    let e = new E(),
      t = this.assets.getResource("chinaStorke");
    (t = R(t)),
      t.features[0].geometry.coordinates[0].map((o) => {
        o.map((r) => {
          U(...r, 110);
        });
      });
    let n = this.assets.getResource("chinaStorke"),
      i = R(n);
    for (let o = 0; o < 40; o++) {
      let r = V(100 + o * 0.1, i, {
        color: 4809093,
        transparent: !0,
        opacity: 0.5,
      });
      e.add(r);
    }
    let a = V(104.2, i, {
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
    const s = this.debug.instance.addFolder("wall");
    return (
      s.add(e.position, "x", -100, 100, 0.1).onChange((o) => {
        e.position.x = Number(o);
      }),
      s.add(e.position, "y", -100, 100, 0.1).onChange((o) => {
        e.position.y = Number(o);
      }),
      s.add(e.position, "z", -100, 100, 0.1).onChange((o) => {
        e.position.z = Number(o);
      }),
      e
    );
  }
  createChinaMesh() {
    let e = this.assets.getResource("chinaGlow");
    (e.wrapS = e.wrapT = x),
      (e.rotation = Math.PI),
      (e.colorSpace = D),
      (e.flipY = !1),
      e.offset.set(0, 0);
    let t = this.assets.getResource("china");
    t = R(t);
    let n = qt(t, 103.9),
      i = new E();
    i.add(...n);
    let { boxSize: a, box3: s } = _(i),
      o = new b({
        color: 3647231,
        map: e,
        transparent: !0,
        side: L,
        opacity: 0,
        depthWrite: !1,
        depthTest: !1,
      });
    return (
      i.traverse((r) => {
        r.isMesh &&
          ((r.material = o),
          (r.renderOrder = 99),
          this.calcUv2(r.geometry, a.x, a.y, s.min.x, s.min.y));
      }),
      { chinaMeshsGroup: i, chinaMeshsMaterial: o }
    );
  }
  calcUv2(e, t, n, i, a) {
    const s = e.attributes.position,
      o = e.attributes.uv;
    for (let r = 0; r < s.count; r++) {
      const l = s.getX(r),
        d = s.getY(r),
        c = (l - i) / t,
        h = (d - a) / n;
      o.setXY(r, c, h);
    }
    (o.needsUpdate = !0), e.computeVertexNormals();
  }
  createCloud() {
    const n = this.assets.getResource("earthClouds"),
      i = new oe(100 * 1.01, 75, 75),
      a = new b({
        color: 16777215,
        map: n,
        transparent: !0,
        opacity: 0.2,
        depthTest: !1,
      }),
      s = new v(i, a);
    this.globe.add(s),
      this.time.on("tick", () => {
        s.rotation.y += (-0.04 * Math.PI) / 180;
      });
  }
  createLightPillar(e, t) {
    const n = new E(),
      i = this.assets.getResource("lightPillar");
    let a = 41 / 200,
      s = e / a;
    const o = new T(e, s);
    o.rotateX(Math.PI / 2), o.translate(0, 0, s / 2);
    const r = new b({
        map: i,
        transparent: !0,
        side: L,
        depthWrite: !1,
        depthTest: !1,
        blending: I,
        color: t,
      }),
      l = new v(o, r);
    l.renderOrder = 110;
    const d = l.clone();
    return (d.rotation.z = Math.PI / 2), n.add(l, d), n;
  }
  createPointLight(e, t) {
    const n = this.assets.getResource("pointLight"),
      i = new T(e, e),
      a = new b({
        map: n,
        transparent: !0,
        depthWrite: !1,
        depthTest: !1,
        color: t,
        blending: I,
      }),
      s = new v(i, a);
    return (s.renderOrder = 110), s;
  }
  createRippleCirle() {
    this.eventElement = [];
    let e = new E();
    return (
      (e.visible = !1),
      $.map((n, i) => ({
        lat: n.centroid[0],
        lng: n.centroid[1],
        color: n.name === "深圳" ? new C("#ff6666") : new C("rgb(57,110,224)"),
        name: n.name,
      })).forEach((n, i) => {
        let a = 105,
          s = new ht(this, {
            number: n.name === "深圳" ? 5 : 3,
            radius: n.name === "深圳" ? 2.5 : 1.5,
            frequency: 2,
            color: n.color,
          });
        (s.instance.userData = n),
          this.eventElement.push(s.instance),
          s.setParent(e),
          s.instance.traverse((h) => {
            h.name === "CircleLine" && (h.renderOrder = 110);
          });
        let o = U(n.lat, n.lng, a);
        s.setPosition(new g(o.x, o.y, o.z));
        var r = new g(o.x, o.y, o.z).normalize(),
          l = new g(0, 0, 1);
        s.instance.quaternion.setFromUnitVectors(l, r);
        let d = this.createPointLight(4, n.color);
        s.instance.add(d);
        let c = this.createLightPillar(3, n.color);
        s.instance.add(c);
      }),
      this.eventElement.map((n) => {
        this.interactionManager.add(n),
          n.addEventListener("mousedown", (i) => {
            console.log(i),
              console.log(i.target.userData.name),
              A.to(this.globe.instance.scale, {
                x: 13,
                y: 13,
                z: 13,
                duration: 2,
                delay: 0.5,
                ease: "power1.inOut",
              }),
              this.moveCloudGroup.move(),
              A.to(this.countryLine.material, {
                opacity: 0,
                duration: 2,
                onComplete: () => {
                  this.interactionManager.dispose();
                },
              });
          });
      }),
      e
    );
  }
  createStars() {
    const e = [new Y(), new Y()],
      t = [],
      n = [],
      i = new g();
    for (let s = 0; s < 250; s++)
      (i.y = Math.random() * 2 - 1),
        (i.z = Math.random() * 2 - 1),
        i.multiplyScalar(20),
        t.push(i.x, i.y, i.z);
    for (let s = 0; s < 1500; s++)
      (i.x = Math.random() * 2 - 1),
        (i.y = Math.random() * 2 - 1),
        (i.z = Math.random() * 2 - 1),
        i.multiplyScalar(10),
        n.push(i.x, i.y, i.z);
    e[0].setAttribute("position", new le(t, 3)),
      e[1].setAttribute("position", new le(n, 3));
    const a = [
      new H({ color: 10263708, size: 2, sizeAttenuation: !1 }),
      new H({ color: 10263708, size: 1, sizeAttenuation: !1 }),
      new H({ color: 8618883, size: 1, sizeAttenuation: !1 }),
      new H({ color: 5921370, size: 2, sizeAttenuation: !1 }),
      new H({ color: 5921370, size: 1, sizeAttenuation: !1 }),
    ];
    for (let s = 10; s < 30; s++) {
      const o = new Ne(e[s % 2], a[s % 6]);
      (o.rotation.x = Math.random() * 10),
        (o.rotation.y = Math.random() * 10),
        (o.rotation.z = Math.random() * 10),
        o.scale.setScalar(s * 10),
        (o.matrixAutoUpdate = !1),
        o.updateMatrix(),
        (this.stars = o),
        this.scene.add(o);
    }
  }
  createChinaLine() {
    let e = this.assets.getResource("china"),
      t = R(e),
      n = V(100.08, t, {
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
      t = R(e),
      n = V(100.1, t, {
        color: 16777215,
        transparent: !0,
        opacity: 0.2,
        depthWrite: !1,
      });
    (this.countryLine = n), this.globe.add(n);
  }
  createCountryNameLabel() {
    let e = new E(),
      t = [...$],
      n = new it();
    t.map((i, a) => {
      let s = 105,
        { x: o, y: r, z: l } = U(i.centroid[0], i.centroid[1] - 1, s),
        d = n.createSpriteLabel({
          font: "bold 30px 微软雅黑",
          name: i.name,
          position: new g(o, r, l),
          width: 200,
          height: 100,
          scale: 1,
          opacity: 0,
          isSprite: !1,
        });
      (d.material.depthTest = !1),
        (d.renderOrder = 110),
        A.to(d.material, { opacity: 1, delay: a / t.length }),
        e.add(d);
    }),
      this.globe.add(e);
  }
  createArcAll() {
    let e = [...$],
      t = e[0];
    e.splice(0, 1);
    let n = 105,
      i = 25,
      a = [],
      s = [],
      o = new E();
    o.name = "arcAll";
    const r = (y = []) => {
      let M = U(...y, n);
      return new g(M.x, M.y, M.z);
    };
    for (let y = 0; y < e.length; y++) {
      var l = r([t.centroid[0], t.centroid[1]]),
        d = r([e[y].centroid[0], e[y].centroid[1]]),
        c = 1 + 0.005 * ge(l, d),
        h = new g();
      h.addVectors(l, d), h.normalize().multiplyScalar(n * c);
      var p = 1 + 0.005 * ge(l, h),
        f = new g();
      f.addVectors(l, h), f.normalize().multiplyScalar(n * p);
      var m = new g();
      m.addVectors(h, d), m.normalize().multiplyScalar(n * p);
      var w = new je(l, f, m, d),
        B = w.getPoints(i);
      for (let M = 0; M < i; M++)
        a.push(B[M]),
          a.push(B[M + 1]),
          s.push({ alpha: 0 }),
          s.push({ alpha: 0 });
    }
    let S = new Y(),
      z = new O({
        linewidth: 1,
        color: new C("#ffffff"),
        blending: I,
        opacity: 1,
        transparent: !0,
      });
    var G = new Float32Array(3 * a.length),
      Q = new Float32Array(a.length);
    for (let y = 0; y < a.length; y++)
      (G[3 * y] = a[y].x),
        (G[3 * y + 1] = a[y].y),
        (G[3 * y + 2] = a[y].z),
        (Q[y] = 0);
    S.setAttribute("position", new k(G, 3));
    let J = new we(S, z);
    o.add(J), (o.visible = !1), this.globe.add(o);
    let F = new O({
      color: 16777215,
      blending: I,
      fog: !1,
      opacity: 0.5,
      transparent: !0,
    });
    F.onBeforeCompile = (y) => {
      (y.uniforms = { ...y.uniforms, color: { value: new C("#ffffff") } }),
        (y.vertexShader = y.vertexShader.replace(
          "void main() {",
          `
        attribute float alpha;
		    varying float vAlpha;

        void main() {
          vAlpha = alpha;
              `
        )),
        (y.fragmentShader = y.fragmentShader.replace(
          "void main() {",
          `
          uniform vec3 color;
          varying float vAlpha;
          void main() {
        `
        )),
        (y.fragmentShader = y.fragmentShader.replace(
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
    let N = new E();
    N.name = "Rocket";
    let P = J.clone();
    (P.geometry = J.geometry.clone()),
      P.geometry.setAttribute("position", new k(G, 3)),
      P.geometry.setAttribute("alpha", new k(Q, 1)),
      (P.material = F),
      N.add(P),
      (N.visible = !0),
      this.globe.add(N),
      (this.rippleGroup.visible = !0),
      this.createCountryNameLabel();
    let j = null;
    (j = A.timeline({
      paused: !0,
      repeat: 0,
      onUpdate: function () {
        Le();
      },
      onComplete: () => {
        this.createFlyLine(e, P, i);
      },
    })),
      j.fromTo(
        s,
        { alpha: 0 },
        { alpha: 1, duration: 0.25, stagger: 0.025, duration: 0.5 },
        0
      ),
      j.timeScale(2);
    function Le() {
      var y = null,
        M = P.geometry.attributes;
      for (let q = 0; q < s.length; q++)
        (y = s[q]), (M.alpha.array[q] = y.alpha), (M.alpha.needsUpdate = !0);
    }
    Ge();
    function Ge() {
      j.pause();
      for (var y = P.geometry.attributes, M = 0; M < s.length; M++)
        y.alpha.array[M] = 0;
      (y.alpha.needsUpdate = !0), (N.visible = !0), j.play(0);
    }
  }
  createFlyLine(e, t, n) {
    let i = [],
      a = t.geometry.attributes.position.array,
      s = n * 2,
      o = [];
    for (let d = 0; d < a.length; d += 3) {
      let c = a[d],
        h = a[d + 1],
        p = a[d + 2];
      o.push(new g(c, h, p));
    }
    e.map((d, c) => {
      let h = o.slice(c * s, s * (c + 1));
      i.push(h);
    });
    const r = this.assets.getResource("pathLine").clone();
    (r.wrapS = r.wrapT = x), r.repeat.set(1, 1);
    const l = new b({
      color: new C("rgb(57,110,224)"),
      map: r,
      alphaMap: r,
      fog: !1,
      transparent: !0,
      depthWrite: !1,
      depthTest: !1,
      opacity: 0,
      blending: I,
    });
    (this.flyLineMaterial = l),
      (this.flyLineArr = []),
      i.map((d) => {
        let c = d,
          h = new ie(c),
          p = { segments: 32, radius: 0.2, radialSegments: 8 };
        const f = new W(h, p.segments, p.radius, p.radialSegments, !1),
          m = new v(f, l);
        (m.renderOrder = 110), this.flyLineArr.push(m), this.globe.add(m);
      }),
      this.chinaLineHuiGuangShow(),
      A.to(this.flyLineMaterial, { opacity: 1, ease: "power1.inOut" }),
      this.time.on("tick", (d, c) => {
        (l.opacity += d),
          l.opacity > 1 && (l.opacity = 1),
          (r.offset.x += 0.4 * d);
      });
  }
  chinaLineHuiGuangShow() {
    if (this.renderer.postprocessing) {
      let e = { opacity: 0 };
      A.to(e, {
        opacity: 0.6,
        duration: 1,
        onUpdate: () => {
          this.effect.blendMode.opacity.value = e.opacity;
        },
      }),
        (this.effect.resolution.height = 720);
    }
  }
  createGrid() {
    const e = this.assets.getResource("grid"),
      t = this.assets.getResource("gridBlack");
    (t.wrapS = t.wrapT = e.wrapS = e.wrapT = x),
      e.repeat.set(320, 320),
      t.repeat.set(320, 320);
    let n = new oe(100.1, 100, 100),
      i = new b({
        color: 7243677,
        map: e,
        alphaMap: t,
        transparent: !0,
        opacity: 0,
        blending: I,
      });
    new Ht({
      material: i,
      time: this.time,
      size: 520,
      diffuseSpeed: 150,
      diffuseColor: 16777215,
      diffuseHeight: 820,
      diffuseStart: 110,
    });
    let a = new v(n, i);
    this.globe.add(a);
  }
  createStorke(e) {
    const t = this.assets.getResource("pathLine").clone();
    (t.wrapS = t.wrapT = x), t.repeat.set(0.25, 0.25);
    let n = this.assets.getResource("chinaStorke");
    n = JSON.parse(n);
    let i = n.features.map((s) => ({ geometry: s.geometry })),
      a = new fe(this, {
        data: i,
        texture: t,
        renderOrder: 21,
        speed: 0.15,
        radius: 0.2,
        segments: 256 * 10,
        radialSegments: 4,
        customRunCallback: function (s, o, r) {
          r.offset.x > 1 &&
            ((r.offset.x = 1),
            (this.run = !1),
            console.log("customRunCallback"),
            e && e()),
            (r.offset.x += this.options.speed * s);
        },
        material: new b({
          color: 16777215,
          map: t,
          alphaMap: t,
          fog: !1,
          transparent: !0,
          opacity: 1,
          blending: I,
        }),
      });
    (a.run = !1), a.setParent(this.globe), (this.storkePath = a);
  }
  createTopStorke() {
    const e = this.assets.getResource("flowY").clone();
    e.wrapS = e.wrapT = x;
    let t = this.assets.getResource("chinaStorke");
    t = JSON.parse(t);
    let n = t.features.map((s) => ({ geometry: s.geometry })),
      i = new b({
        color: 3647231,
        map: e,
        alphaMap: e,
        fog: !1,
        transparent: !0,
        opacity: 0,
        blending: I,
      }),
      a = new fe(this, {
        data: n,
        texture: e,
        renderOrder: 102,
        speed: 0.2,
        radius: 0.2,
        segments: 256 * 10,
        radialSegments: 4,
        globeRadius: 104,
        material: i,
      });
    return (a.run = !1), { chinaTopLine: a.instance, chinaTopLineMaterial: i };
  }
  createMoveCloud() {
    (this.moveCloudGroup = new E()),
      (this.moveCloudGroup.move = () => {
        A.to(".clouds-wrap .cloud", {
          translateX: "-100%",
          duration: 3,
          stagger: 0.025,
          ease: "power1.inOut",
        }),
          A.to(
            { time: 0 },
            {
              time: 1,
              duration: 1.5,
              onComplete: () => {
                this.szmap.initAnimate();
              },
            }
          );
      });
  }
  createMoveCloud1() {
    this.moveCloudGroup = new E();
    const e = this.assets.getResource("cloud").clone();
    (e.wrapS = e.wrapT = x), e.repeat.set(1, 1);
    let t = new T(1e3, 328),
      n = new b({
        color: 16777215,
        map: e,
        transparent: !0,
        depthTest: !1,
        depthWrite: !1,
      }),
      i = new v(t, n);
    i.position.set(200, 0, 280);
    let a = i.clone();
    a.position.set(-100, 80, 290);
    let s = i.clone();
    s.position.set(-50, -90, 270), s.scale.set(-1, 1, 1);
    let o = i.clone();
    o.position.set(350, 100, 285),
      o.scale.set(-1, 1, 1),
      this.moveCloudGroup.add(i, a, s, o),
      this.moveCloudGroup.position.set(1e3, 0, 0),
      (this.moveCloudGroup.visible = !1),
      this.scene.add(this.moveCloudGroup),
      (this.moveCloudGroup.move = () => {
        (this.moveCloudGroup.visible = !0),
          console.log("move"),
          A.to(i.position, { x: -1e3, duration: 3, ease: "power1.inOut" }),
          A.to(a.position, { x: -1150, duration: 3.5, ease: "power1.inOut" }),
          A.to(s.position, { x: -1250, duration: 4, ease: "power1.inOut" }),
          A.to(o.position, { x: -900, duration: 3, ease: "power1.inOut" }),
          A.to(this.moveCloudGroup.position, {
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
      this.stats && document.body.removeChild(this.stats.dom),
      this.szmap && this.szmap.destroy();
  }
}
const aa = { class: "globe" },
  ia = createStaticVNode(
    '<canvas id="canvas"></canvas><div class="clouds-wrap"><div class="cloud"></div><div class="cloud"></div><div class="cloud"></div><div class="cloud"></div></div>',
    2
  ),
  na = [ia],
  Ga = {
    __name: "earth06",
    setup(u) {
      let e = null;
      return (
        onMounted(() => {
          e = new ta(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (t, n) => (openBlock(), createElementBlock("div", aa, na))
      );
    },
  };
export { Ga as default };
