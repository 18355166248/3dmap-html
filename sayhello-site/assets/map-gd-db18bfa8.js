import {
  G as B,
  V as p,
  a as T,
  M as h,
  O as F,
  S as U,
  E as $,
  b as f,
  c as R,
  D as S,
  C as y,
  R as g,
  d as E,
  g as V,
  A as j,
  h as X,
  i as H,
  P as k,
  j as q,
  L as G,
  k as W,
  l as C,
  m as L,
  n as w,
  N as Q,
  o as Y,
} from "./OrbitControls-9c9ee6bc.js";
import { g as D, M as J } from "./index-1453e2ee.js";
import { D as K } from "./index-4ec0cc76.js";
import { G as Z } from "./Grid-77f5dd1e.js";
import { L as ee } from "./Label3d-1a598e21.js";
import { G as z, P as O } from "./GradientShader-7cc661aa.js";
import { s as te } from "./stats.module-077ce25d.js";
import { A as ae, B as I, L as A } from "./line-0fbbd871.js";
import { t as ne, g as re } from "./utils-9af1928d.js";
import { l as N } from "./label-icon-aa0c6fbf.js";
import { E as oe, R as ie, S as se } from "./RenderPass-5ccd0f1e.js";
import {
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
  createElementVNode,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
import "./chinaBlurLine-b7b06be6.js";
import "./ocean-bg-19f8644c.js";
import "./rotationBorder1-447bf02a.js";
import "./rotationBorder2-a143eae0.js";
import "./uv-77714551.js";
import "./Line2-7598ed88.js";
const ue = "/sayhello-site/assets/animate-1487395e.mp4",
  pe = "/sayhello-site/assets/animate2-a9fec3fc.mp4";
class me {
  constructor({ assets: e, time: a }, n = {}) {
    (this.mapGroup = new B()),
      (this.assets = e),
      (this.time = a),
      (this.coordinates = []),
      (this.config = Object.assign(
        {
          position: new p(0, 0, 0),
          center: new T(0, 0),
          data: "",
          renderOrder: 1,
          topFaceMaterial: new h({
            color: 1582651,
            transparent: !0,
            opacity: 1,
          }),
          sideMaterial: new h({ color: 464171, transparent: !0, opacity: 1 }),
          depth: 0.1,
        },
        n
      )),
      this.mapGroup.position.copy(this.config.position);
    let t = ne(this.config.data);
    this.create(t), console.log(this.mapGroup);
  }
  geoProjection(e) {
    return D().center(this.config.center).scale(120).translate([0, 0])(e);
  }
  create(e) {
    e.features.forEach((a) => {
      const n = new F();
      let { name: t, center: r = [], centroid: c = [] } = a.properties;
      this.coordinates.push({ name: t, center: r, centroid: c });
      const i = {
        depth: this.config.depth,
        bevelEnabled: !0,
        bevelSegments: 1,
        bevelThickness: 0.1,
      };
      let o = this.createMaterial();
      a.geometry.coordinates.forEach((l) => {
        l.forEach((s, d) => {
          const u = new U();
          for (let m = 0; m < s.length; m++) {
            if (!s[m][0] || !s[m][1]) return !1;
            const [v, M] = this.geoProjection(s[m]);
            m === 0 && u.moveTo(v, -M), u.lineTo(v, -M);
          }
          const P = new $(u, i),
            x = new f(P, o);
          n.add(x);
        });
      }),
        this.mapGroup.add(n);
    }),
      console.log(re(this.mapGroup));
  }
  createMaterial() {
    let e = new R({
      color: 16777215,
      transparent: !0,
      opacity: 1,
      fog: !1,
      side: S,
    });
    e.onBeforeCompile = (t) => {
      (t.uniforms = {
        ...t.uniforms,
        uColor1: { value: new y(2781042) },
        uColor2: { value: new y(860197) },
      }),
        (t.vertexShader = t.vertexShader.replace(
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
        (t.fragmentShader = t.fragmentShader.replace(
          "void main() {",
          `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
        )),
        (t.fragmentShader = t.fragmentShader.replace(
          "#include <opaque_fragment>",
          `
      #ifdef OPAQUE
      diffuseColor.a = 1.0;
      #endif

      // https://github.com/mrdoob/three.js/pull/22425
      #ifdef USE_TRANSMISSION
      diffuseColor.a *= transmissionAlpha + 0.1;
      #endif
      vec3 gradient = mix(uColor1, uColor2, vPosition.x/15.78); // 15.78

      outgoingLight = outgoingLight*gradient;
      float topAlpha = 0.5;
      if(vPosition.z>0.3){
        diffuseColor.a *= topAlpha;
      }

      gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
      `
        ));
    };
    let a = this.assets.instance.getResource("side");
    (a.wrapS = g), (a.wrapT = g), a.repeat.set(1, 1.5), (a.offset.y += 0.065);
    let n = new E({ color: 16777215, map: a, fog: !1, opacity: 1, side: S });
    return (
      this.time.on("tick", () => {
        a.offset.y += 1e-4;
      }),
      (n.onBeforeCompile = (t) => {
        (t.uniforms = {
          ...t.uniforms,
          uColor1: { value: new y(2781042) },
          uColor2: { value: new y(2781042) },
        }),
          (t.vertexShader = t.vertexShader.replace(
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
          (t.fragmentShader = t.fragmentShader.replace(
            "void main() {",
            `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
          )),
          (t.fragmentShader = t.fragmentShader.replace(
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
      [e, n]
    );
  }
  getCoordinates() {
    return this.coordinates;
  }
  setParent(e) {
    e.add(this.mapGroup);
  }
}
const fe = [
    {
      name: "北京市",
      center: [116.405285, 39.904989],
      centroid: [116.41995, 40.18994],
      hide: !0,
    },
    {
      name: "天津市",
      center: [117.190182, 39.125596],
      centroid: [117.347043, 39.288036],
      hide: !0,
    },
    {
      name: "河北省",
      center: [114.502461, 38.045474],
      centroid: [114.502461, 38.045474],
      hide: !0,
    },
    {
      name: "山西省",
      center: [112.549248, 37.857014],
      centroid: [112.304436, 37.618179],
      hide: !0,
    },
    {
      name: "内蒙古自治区",
      center: [111.670801, 40.818311],
      centroid: [114.077429, 44.331087],
      hide: !0,
    },
    {
      name: "辽宁省",
      center: [123.429096, 41.796767],
      centroid: [122.604994, 41.299712],
      hide: !0,
    },
    {
      name: "吉林省",
      center: [125.3245, 43.886841],
      centroid: [126.171208, 43.703954],
      hide: !0,
    },
    {
      name: "黑龙江省",
      center: [126.642464, 45.756967],
      centroid: [127.693027, 48.040465],
      hide: !0,
    },
    {
      name: "上海市",
      center: [121.472644, 31.231706],
      centroid: [121.438737, 31.072559],
      hide: !0,
    },
    {
      name: "江苏省",
      center: [118.767413, 32.041544],
      centroid: [119.486506, 32.983991],
      hide: !0,
    },
    {
      name: "浙江省",
      center: [120.153576, 30.287459],
      centroid: [120.109913, 29.181466],
      hide: !0,
    },
    {
      name: "安徽省",
      center: [117.283042, 31.86119],
      centroid: [117.226884, 31.849254],
      hide: !0,
    },
    {
      name: "福建省",
      center: [119.306239, 26.075302],
      centroid: [118.006468, 26.069925],
      blur: !0,
    },
    {
      name: "江西省",
      center: [115.892151, 28.676493],
      centroid: [115.732975, 27.636112],
      blur: !0,
    },
    {
      name: "山东省",
      center: [117.000923, 36.675807],
      centroid: [118.187759, 36.376092],
      hide: !0,
    },
    {
      name: "河南省",
      center: [113.665412, 34.757975],
      centroid: [113.619717, 33.902648],
      hide: !0,
    },
    {
      name: "湖北省",
      center: [114.298572, 30.584355],
      centroid: [112.271301, 30.987527],
      hide: !0,
    },
    {
      name: "湖南省",
      center: [112.982279, 28.19409],
      centroid: [111.711649, 27.629216],
      blur: !0,
    },
    {
      name: "广东省",
      center: [113.280637, 23.125178],
      centroid: [113.429919, 23.334643],
      hide: !0,
    },
    {
      name: "广西壮族自治区",
      center: [108.320004, 22.82402],
      centroid: [108.7944, 23.833381],
    },
    {
      name: "海南省",
      center: [110.33119, 20.031971],
      centroid: [109.754859, 19.189767],
      hide: !0,
    },
    {
      name: "重庆市",
      center: [106.504962, 29.533155],
      centroid: [107.8839, 30.067297],
      blur: !0,
    },
    {
      name: "四川省",
      center: [104.065735, 30.659462],
      centroid: [102.693453, 30.674545],
      hide: !0,
    },
    {
      name: "贵州省",
      center: [106.713478, 26.578343],
      centroid: [106.880455, 26.826368],
      blur: !0,
    },
    {
      name: "云南省",
      center: [102.712251, 25.040609],
      centroid: [101.485106, 25.008643],
      hide: !0,
    },
    {
      name: "西藏自治区",
      center: [91.132212, 29.660361],
      centroid: [88.388277, 31.56375],
      hide: !0,
    },
    {
      name: "陕西省",
      center: [108.948024, 34.263161],
      centroid: [108.887114, 35.263661],
      hide: !0,
    },
    {
      name: "甘肃省",
      center: [103.823557, 36.058039],
      centroid: [103.823557, 36.058039],
      hide: !0,
    },
    {
      name: "青海省",
      center: [101.778916, 36.623178],
      centroid: [96.043533, 35.726403],
      hide: !0,
    },
    {
      name: "宁夏回族自治区",
      center: [106.278179, 38.46637],
      centroid: [106.169866, 37.291332],
      hide: !0,
    },
    {
      name: "新疆维吾尔自治区",
      center: [87.617733, 43.792818],
      centroid: [85.294711, 41.371801],
      hide: !0,
    },
    {
      name: "台湾省",
      center: [121.509062, 25.044332],
      centroid: [120.971485, 23.749452],
    },
    {
      name: "香港特别行政区",
      center: [114.173355, 22.320048],
      centroid: [114.134357, 22.377366],
      hide: !0,
    },
    {
      name: "澳门特别行政区",
      center: [113.54909, 22.198951],
      centroid: [113.566988, 22.159307],
      hide: !0,
    },
  ],
  ge = [
    {
      name: "广州市",
      enName: "guangzhou",
      center: [113.280637, 23.125178],
      centroid: [113.544372, 23.329249],
      value: 100,
    },
    {
      name: "韶关市",
      center: [113.591544, 24.801322],
      centroid: [113.779323, 24.81941],
      value: 32,
    },
    {
      name: "深圳市",
      enName: "shenzhen",
      center: [114.085947, 22.547],
      centroid: [114.143142, 22.643377],
      value: 79,
    },
    {
      name: "珠海市",
      enName: "zhuhai",
      center: [113.553986, 22.224979],
      centroid: [113.337286, 22.160135],
      value: 68,
    },
    {
      name: "汕头市",
      enName: "shantou",
      center: [116.708463, 23.37102],
      centroid: [116.575361, 23.322231],
      value: 56,
    },
    {
      name: "佛山市",
      enName: "foushan",
      center: [113.122717, 23.028762],
      centroid: [112.949778, 23.004314],
      value: 52,
    },
    {
      name: "江门市",
      center: [113.094942, 22.590431],
      centroid: [112.676451, 22.284348],
      value: 18,
    },
    {
      name: "湛江市",
      enName: "zhanjiang",
      center: [110.364977, 21.274898],
      centroid: [110.109828, 21.047893],
      value: 48,
    },
    {
      name: "茂名市",
      enName: "maoming",
      center: [110.919229, 21.659751],
      centroid: [110.958736, 22.008884],
      value: 51,
    },
    {
      name: "肇庆市",
      center: [112.472529, 23.051546],
      centroid: [112.210411, 23.536359],
      value: 26,
    },
    {
      name: "惠州市",
      center: [114.412599, 23.079404],
      centroid: [114.507032, 23.234461],
      value: 23,
    },
    {
      name: "梅州市",
      center: [116.117582, 24.299112],
      centroid: [116.084478, 24.201791],
      value: 26,
    },
    {
      name: "汕尾市",
      center: [115.364238, 22.774485],
      centroid: [115.53778, 23.004558],
      value: 18,
    },
    {
      name: "河源市",
      center: [114.697802, 23.746266],
      centroid: [114.962729, 24.043541],
      value: 30,
    },
    {
      name: "阳江市",
      center: [111.975107, 21.859222],
      centroid: [111.779569, 22.02617],
      value: 31,
    },
    {
      name: "清远市",
      center: [113.051227, 23.685022],
      centroid: [112.879397, 24.313361],
      value: 32,
    },
    {
      name: "东莞市",
      center: [113.746262, 23.046237],
      centroid: [113.879966, 22.931879],
      value: 22,
    },
    {
      name: "中山市",
      center: [113.382391, 22.521113],
      centroid: [113.398784, 22.517323],
      value: 18,
    },
    {
      name: "潮州市",
      center: [116.632301, 23.661701],
      centroid: [116.790217, 23.783155],
      value: 22,
    },
    {
      name: "揭阳市",
      center: [116.355733, 23.543778],
      centroid: [116.124317, 23.334057],
      value: 31,
    },
    {
      name: "云浮市",
      center: [112.044439, 22.929801],
      centroid: [111.798791, 22.813664],
      value: 27,
    },
  ],
  ve = {
    uniforms: {
      tDiffuse: { value: null },
      _Brightness: { value: 1 },
      _Saturation: { value: 1 },
      _Contrast: { value: 1 },
    },
    vertexShader: `
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,
    fragmentShader: `
		uniform sampler2D tDiffuse;
		uniform float _Brightness;
		uniform float _Saturation;
		uniform float _Contrast;
		varying vec2 vUv;
		vec3 lerpColor(vec3 col1,vec3 col2, float value){
			vec3 newCol = vec3 ((col1.r * (1.0 - value) + col2.r * value), (col1.g * (1.0 - value) + col2.g * value), (col1.b * (1.0 - value) + col2.b * value));
			return newCol;
		}
		float mylerp(float a,float b, float value){
			return (a * (1.0 - value) + b * value);
		}
		void main() {
			// 获取原图的颜色rgba
			vec4 color = texture2D(tDiffuse, vUv);
			//brigtness亮度直接乘以一个系数，也就是RGB整体缩放，调整亮度
			vec3 finalColor = color.rgb * _Brightness;
			//saturation饱和度：首先根据公式计算同等亮度情况下饱和度最低的值：
			float gray = 0.2125 * color.r + 0.7154 * color.g + 0.0721 * color.b;
			vec3 grayColor = vec3(gray, gray, gray);
			//根据Saturation在饱和度最低的图像和原图之间差值
			finalColor = lerpColor(grayColor, finalColor, _Saturation);
			//contrast对比度：首先计算对比度最低的值
			vec3 avgColor = vec3(0.5, 0.5, 0.5);
			//根据Contrast在对比度最低的图像和原图之间差值
			finalColor = lerpColor(avgColor, finalColor, _Contrast);
			// 结果rgb,透明度保持原值即可
			gl_FragColor = vec4(vec3(finalColor), color.a);
		}`,
  };
function we(b) {
  return b.sort((e, a) => a.value - e.value), b;
}
class ye extends J {
  constructor(e) {
    super(e),
      (this.pointCenter = [113.280637, 23.125178]),
      (this.scene.fog = new V(596769, 1, 50)),
      (this.scene.background = new y(596769)),
      this.camera.instance.position.set(
        -0.2515849818960619,
        12.397744557047988,
        14.647659671139275
      ),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.updateProjectionMatrix(),
      this.initSetting(),
      this.initEnvironment(),
      this.createPost(),
      (this.assets = new ae(() => {
        (this.labelGroup = new B()),
          (this.label3d = new ee(this)),
          this.labelGroup.rotateX(-Math.PI / 2),
          this.scene.add(this.labelGroup),
          this.initModel(),
          this.createRotateBorder(),
          this.createLabel(),
          this.createAnimateVideo();
      }));
  }
  initEnvironment() {
    let e = new j(16777215, 0.5);
    this.scene.add(e);
    let a = new X(16777215, 1);
    a.position.set(-30, 6, -8),
      (a.castShadow = !0),
      (a.shadow.radius = 20),
      (a.shadow.mapSize.width = 1024),
      (a.shadow.mapSize.height = 1024);
    let n = new H(a, 2);
    this.scene.add(a, n);
    const t = this.debug.instance.addFolder("Environment");
    t.add(a.position, "x", -30, 30, 1),
      t.add(a.position, "y", -30, 30, 1),
      t.add(a.position, "z", -30, 30, 1),
      t.onChange((r) => {
        n.update();
      }),
      this.createPointLight({
        color: "#1d5e5e",
        intensity: 56,
        distance: 100,
        x: -9,
        y: 3,
        z: -3,
      }),
      this.createPointLight({
        color: "#1d5e5e",
        intensity: 23,
        distance: 100,
        x: 0,
        y: 2,
        z: 5,
      });
  }
  createPost() {
    let e = { _Saturation: 1, _Brightness: 1, _Contrast: 1 };
    const a = new oe(this.renderer.instance);
    a.addPass(new ie(this.scene, this.camera.instance));
    const n = new se(ve);
    (n.uniforms._Brightness.value = e._Brightness),
      (n.uniforms._Saturation.value = e._Saturation),
      (n.uniforms._Contrast.value = e._Contrast),
      a.addPass(n),
      (this.composer = a),
      (this.renderer.postprocessing = !1),
      (this.renderer.composer = a);
    const t = this.debug.instance.addFolder("postprocessing");
    t.add(e, "_Brightness", -3, 3, 0.01).onChange((r) => {
      console.log(r), (n.uniforms._Brightness.value = Number(r));
    }),
      t.add(e, "_Saturation", -3, 3, 0.01).onChange((r) => {
        n.uniforms._Saturation.value = Number(r);
      }),
      t.add(e, "_Contrast", -3, 3, 0.01).onChange((r) => {
        n.uniforms._Contrast.value = Number(r);
      }),
      t.add(this.renderer, "postprocessing");
  }
  createPointLight(e) {
    const a = new k(1924702, e.intensity, e.distance);
    a.position.set(e.x, e.y, e.z), this.scene.add(a);
    const n = new q(a, 1);
    this.scene.add(n);
    const t = this.debug.instance.addFolder("Point" + Math.random());
    t.addColor(e, "color"),
      t.add(e, "intensity", 1, 100, 1),
      t.add(e, "distance", 100, 1e3, 1),
      t.add(e, "x", -30, 30, 1),
      t.add(e, "y", -30, 30, 1),
      t.add(e, "z", -30, 30, 1),
      t.onChange(({ object: r }) => {
        (a.color = new y(r.color)),
          (a.distance = r.distance),
          (a.intensity = r.intensity),
          a.position.set(r.x, r.y, r.z),
          console.log(r),
          n.update();
      });
  }
  initSetting() {
    (this.debug = new K(!0)),
      (this.stats = new te()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10),
      (this.renderer.instance.shadowMap.enabled = !1),
      this.renderer.resize();
  }
  initModel() {
    let e = new B();
    this.createFloor(), this.createChinaBlurLine(), this.createGrid();
    let { china: a, chinaTopLine: n, chinaBottomLine: t } = this.createChina(),
      {
        guangdong: r,
        guangdongTop: c,
        guangdonLine: i,
      } = this.createProvince();
    a.setParent(e),
      n.setParent(e),
      r.setParent(e),
      c.setParent(e),
      i.setParent(e),
      e.rotateX(-Math.PI / 2),
      e.position.set(0, 0.2, 0),
      this.scene.add(e),
      this.createBar();
  }
  createChina() {
    let e = this.assets.instance.getResource("china"),
      a = new I(this, {
        data: e,
        center: this.pointCenter,
        merge: !1,
        material: new R({ color: 1190450, transparent: !0, opacity: 1 }),
        renderOrder: 2,
      }),
      n = new A(this, {
        center: this.pointCenter,
        visibelProvince: "广东省",
        data: e,
        material: new G({ color: 3969700 }),
        renderOrder: 3,
      });
    n.lineGroup.position.z += 0.01;
    let t = new A(this, {
      center: this.pointCenter,
      data: e,
      material: new G({ color: 3969700, transparent: !0, opacity: 0.4 }),
      renderOrder: 3,
    });
    return (
      (t.lineGroup.position.z -= 0.59),
      { china: a, chinaTopLine: n, chinaBottomLine: t }
    );
  }
  createProvince() {
    let e = this.assets.instance.getResource("guangdong"),
      a = new me(this, {
        center: this.pointCenter,
        position: new p(0, 0, 0.11),
        data: e,
        depth: 0.5,
        topFaceMaterial: new h({ color: 3839910, transparent: !0, opacity: 1 }),
        sideMaterial: new h({ color: 4352627, transparent: !0, opacity: 1 }),
        renderOrder: 9,
      }),
      n = new E({ color: 16777215, transparent: !0, opacity: 0.5 });
    new z(n), this.debug.instance.addFolder("Province");
    let t = new I(this, {
        center: this.pointCenter,
        position: new p(0, 0, 0.72),
        data: e,
        material: n,
        renderOrder: 2,
      }),
      r = new A(this, {
        center: this.pointCenter,
        data: e,
        material: new G({ color: 16777215, fog: !1 }),
        renderOrder: 3,
      });
    return (
      (r.lineGroup.position.z += 0.73),
      { guangdong: a, guangdongTop: t, guangdonLine: r }
    );
  }
  createBar() {
    let e = this,
      a = we(ge).filter((o, l) => l < 7);
    const n = new B(),
      t = 0.7,
      r = 4 * t,
      c = a[0].value;
    a.map((o, l) => {
      let s = r * (o.value / c),
        d = new h({
          color: 16777215,
          transparent: !0,
          opacity: 1,
          depthTest: !1,
          fog: !1,
        });
      new z(d, {
        uColor1: l > 3 ? 16506760 : 5291006,
        uColor2: l > 3 ? 16776948 : 7863285,
        size: s,
        dir: "y",
      });
      const u = new W(0.1 * t, 0.1 * t, s);
      u.translate(0, 0, s / 2);
      const P = new f(u, d);
      P.renderOrder = 5;
      let x = P,
        [m, v] = this.geoProjection(o.centroid);
      x.position.set(m, -v, 0.95), this.createQuan(new p(m, 0.94, v), l);
      let M = this.createHUIGUANG(s, l > 3 ? 16776948 : 7863285);
      x.add(...M),
        n.add(x),
        n.rotateX(Math.PI / 2),
        i(o, l, new p(m, -v, 1.6 + s));
    }),
      this.scene.add(n);
    function i(o, l, s) {
      let d = e.label3d.create("", "provinces-label", !1);
      return (
        d.init(
          `<div class="provinces-label ${l > 4 ? "yellow" : ""}">
      <div class="provinces-label-wrap">
        <div class="number">${o.value}<span>万人</span></div>
        <div class="name">
          <span class="zh">${o.name}</span>
          <span class="en">${o.enName.toUpperCase()}</span>
        </div>
        <div class="no">${l + 1}</div>
      </div>
    </div>`,
          s
        ),
        e.label3d.setLabelStyle(d, 0.01, "x"),
        d.setParent(e.labelGroup),
        d
      );
    }
  }
  createHUIGUANG(e, a) {
    let n = new C(0.35, e);
    n.translate(0, e / 2, 0);
    const t = this.assets.instance.getResource("huiguang");
    (t.colorSpace = L), (t.wrapS = g), (t.wrapT = g);
    let r = new h({
        color: a,
        map: t,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        side: S,
        blending: w,
      }),
      c = new f(n, r);
    (c.renderOrder = 10), c.rotateX(Math.PI / 2);
    let i = c.clone(),
      o = c.clone();
    return (
      i.rotateY((Math.PI / 180) * 60),
      o.rotateY((Math.PI / 180) * 120),
      [c, i, o]
    );
  }
  createQuan(e, a) {
    const n = this.assets.instance.getResource("guangquan1"),
      t = this.assets.instance.getResource("guangquan2");
    let r = new C(0.5, 0.5),
      c = new h({
        color: 16777215,
        map: n,
        alphaMap: n,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: w,
      }),
      i = new h({
        color: 16777215,
        map: t,
        alphaMap: t,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: w,
      }),
      o = new f(r, c),
      l = new f(r, i);
    (o.renderOrder = 6),
      (l.renderOrder = 6),
      o.rotateX(-Math.PI / 2),
      l.rotateX(-Math.PI / 2),
      o.position.copy(e),
      l.position.copy(e),
      (l.position.y -= 0.001),
      this.scene.add(o, l),
      this.time.on("tick", () => {
        o.rotation.z += 0.05;
      });
  }
  createGrid() {
    new Z(this, {
      gridSize: 50,
      gridDivision: 20,
      gridColor: 1923944,
      shapeSize: 0.5,
      shapeColor: 2655878,
      pointSize: 0.1,
      pointColor: 1262670,
      diffuse: !0,
      diffuseSpeed: 10,
      diffuseColor: 3844268,
    });
  }
  createFloor() {
    let e = new C(20, 20);
    const a = this.assets.instance.getResource("ocean");
    (a.colorSpace = L), (a.wrapS = g), (a.wrapT = g), a.repeat.set(1, 1);
    let n = new h({ map: a, opacity: 1 }),
      t = new f(e, n);
    t.rotateX(-Math.PI / 2), t.position.set(0, -0.7, 0), this.scene.add(t);
  }
  createChinaBlurLine() {
    let e = new C(147, 147);
    const a = this.assets.instance.getResource("chinaBlurLine");
    (a.colorSpace = L),
      (a.wrapS = g),
      (a.wrapT = g),
      (a.generateMipmaps = !1),
      (a.minFilter = Q),
      a.repeat.set(1, 1);
    let n = new h({
        color: 3969700,
        alphaMap: a,
        transparent: !0,
        opacity: 0.5,
      }),
      t = new f(e, n);
    t.rotateX(-Math.PI / 2),
      t.position.set(-19.3, -0.5, -19.7),
      this.scene.add(t);
    const r = this.debug.instance.addFolder("blurLine");
    r.add(t.position, "x", -100, 100, 0.1),
      r.add(t.position, "y", -100, 100, 0.1),
      r.add(t.position, "z", -100, 100, 0.1);
  }
  createAnimateVideo() {
    this.createAnimateVideoItem(".map-gd-video1", new p(11, 0.4, 1)),
      this.createAnimateVideoItem(".map-gd-video2", new p(-11, 0.4, 2));
  }
  createAnimateVideoItem(e, a) {
    let n = document.querySelector(e);
    window.addEventListener("pointerdown", () => {
      n.play();
    });
    let t = new Y(n);
    t.colorSpace = L;
    let r = 1.2,
      c = new C(2.5 * r, 1 * r),
      i = new h({
        color: 10807286,
        alphaMap: t,
        transparent: !0,
        opacity: 1,
        blending: w,
      }),
      o = new f(c, i);
    o.rotateX(-Math.PI / 2),
      o.position.copy(a),
      (o.renderOrder = 10),
      this.scene.add(o);
  }
  createLabel() {
    let e = this,
      a = this.labelGroup,
      n = this.label3d;
    fe.map((i) => {
      if (i.hide == !0) return !1;
      t(i, n, a);
    }),
      r(
        {
          name: "广东省",
          enName: "GUANGDONG PROVINCE",
          center: [113.280637, 20.625178],
        },
        n,
        a
      ),
      c(
        {
          icon: N,
          center: [118.280637, 21.625178],
          width: "40px",
          height: "40px",
          reflect: !0,
        },
        n,
        a
      ),
      c(
        {
          icon: N,
          center: [106.280637, 25.625178],
          width: "20px",
          height: "20px",
          reflect: !1,
        },
        n,
        a
      );
    function t(i, o, l) {
      let s = o.create("", `china-label ${i.blur ? " blur" : ""}`, !1);
      const [d, u] = e.geoProjection(i.center);
      s.init(`<img class="label-icon" src="${N}">${i.name}`, new p(d, -u, 0.4)),
        o.setLabelStyle(s, 0.02, "x"),
        s.setParent(l);
    }
    function r(i, o, l) {
      let s = o.create("", "guangdong-label", !1);
      const [d, u] = e.geoProjection(i.center);
      return (
        s.init(
          `<span>${i.name}</span><span>${i.enName}</span>`,
          new p(d, -u, 0.4)
        ),
        o.setLabelStyle(s, 0.02, "x"),
        s.setParent(l),
        s
      );
    }
    function c(i, o, l) {
      let s = o.create(
        "",
        `decoration-label ${i.reflect ? " reflect" : ""}`,
        !1
      );
      const [d, u] = e.geoProjection(i.center);
      return (
        s.init(
          `<img class="label-icon" style="width:${i.width};height:${i.height}" src="${i.icon}">`,
          new p(d, -u, 0.4)
        ),
        o.setLabelStyle(s, 0.02, "x"),
        s.setParent(l),
        s
      );
    }
  }
  createRotateBorder() {
    let e = 12;
    console.log(this.assets);
    let a = this.assets.instance.getResource("rotationBorder1"),
      n = this.assets.instance.getResource("rotationBorder2"),
      t = new O(this, {
        width: e * 1.178,
        needRotate: !0,
        rotateSpeed: 0.001,
        material: new h({
          map: a,
          color: 2795692,
          transparent: !0,
          opacity: 0.2,
          side: S,
          depthWrite: !1,
          blending: w,
        }),
        position: new p(0, 0.28, 0),
      });
    (t.instance.renderOrder = 6), t.setParent(this.scene);
    let r = new O(this, {
      width: e * 1.116,
      needRotate: !0,
      rotateSpeed: -0.004,
      material: new h({
        map: n,
        color: 2795692,
        transparent: !0,
        opacity: 0.4,
        side: S,
        depthWrite: !1,
        blending: w,
      }),
      position: new p(0, 0.3, 0),
    });
    (r.instance.renderOrder = 6), r.setParent(this.scene);
  }
  geoProjection(e) {
    return D().center(this.pointCenter).scale(120).translate([0, 0])(e);
  }
  update() {
    super.update(), this.stats && this.stats.update();
  }
  destroy() {
    super.destroy(),
      this.debug.destroy(),
      this.label3d && this.label3d.destroy(),
      document.body.removeChild(this.stats.dom);
  }
}
const be = { class: "map-gd" },
  xe = createElementVNode("canvas", { id: "canvas" }, null, -1),
  Ce = {
    ref: "video1",
    class: "map-gd-video map-gd-video1",
    width: "250",
    height: "100",
    loop: "",
    crossorigin: "anonymous",
    playsinline: "",
    style: { display: "none" },
  },
  Se = createElementVNode("source", { src: ue, type: "video/mp4" }, null, -1),
  _e = [Se],
  Pe = {
    ref: "video2",
    class: "map-gd-video map-gd-video2",
    width: "250",
    height: "100",
    loop: "",
    crossorigin: "anonymous",
    playsinline: "",
    style: { display: "none" },
  },
  Me = createElementVNode("source", { src: pe, type: "video/mp4" }, null, -1),
  Le = [Me],
  qe = {
    __name: "map-gd",
    setup(b) {
      let e = null;
      return (
        onMounted(() => {
          e = new ye(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (a, n) => (
          openBlock(),
          createElementBlock("div", be, [
            xe,
            createElementVNode("video", Ce, _e, 512),
            createElementVNode("video", Pe, Le, 512),
          ])
        )
      );
    },
  };
export { qe as default };
