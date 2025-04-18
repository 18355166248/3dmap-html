import { _ as Q, a as Y } from "./animate2-2f11d126.js";
import {
  g as Z,
  C as I,
  G as P,
  A as J,
  h as K,
  i as ee,
  P as te,
  j as ae,
  c as D,
  L as A,
  V as y,
  d as j,
  D as z,
  R as w,
  M as b,
  k as ie,
  b as M,
  l as S,
  m as B,
  n as G,
  N as se,
  o as ne,
  Q as oe,
  T as re,
  p as k,
  q as $,
  r as q,
  B as le,
  s as ce,
  t as de,
  u as pe,
} from "./OrbitControls-9c9ee6bc.js";
import { M as he } from "./index-1453e2ee.js";
import { g as ue, m as fe, a as me } from "./utils-9af1928d.js";
import { D as ge } from "./index-4ec0cc76.js";
import { G as ve } from "./Grid-77f5dd1e.js";
import { L as ye } from "./Label3d-1a598e21.js";
import { G as N, P as V } from "./GradientShader-7cc661aa.js";
import { P as U } from "./Particles-a008e8a7.js";
import { g as u } from "./index-4db78ffb.js";
import {
  A as be,
  B as H,
  L as T,
  E as we,
  c as xe,
  p as W,
  s as X,
  i as Me,
} from "./infoData-7934851e.js";
import { l as O } from "./label-icon-aa0c6fbf.js";
import { a as Le } from "./three.interactive-c6512469.js";
import { h as Pe } from "./heatmap.min-eb3a4a51.js";
import {
  f as Ge,
  g as Se,
  h as Ce,
  o as Ie,
  c as ze,
  b as L,
  n as E,
} from "./index-d838a7bb.js";
import "./lil-gui.module.min-f00c3c61.js";
import "./chinaBlurLine-b7b06be6.js";
import "./ocean-blue-bg-49e3ac50.js";
import "./rotationBorder1-447bf02a.js";
import "./rotationBorder2-a143eae0.js";
import "./szxs_logo-02219344.js";
import "./flyLine2-e7135ba7.js";
import "./pathLine2-dee41061.js";
import "./arrow-8777f461.js";
import "./point1-7bb35866.js";
import "./Line2-7598ed88.js";
function F(_) {
  return _.sort((t, a) => a.value - t.value), _;
}
class Be extends he {
  constructor(t, a) {
    super(t, a),
      (this.pointCenter = [120.109913, 29.181466]),
      (this.flyLineCenter = [119.476498, 29.898918]),
      (this.depth = 0.5),
      (this.clicked = !1),
      (this.scene.fog = new Z(1058614, 1, 50)),
      (this.scene.background = new I(1058614)),
      this.camera.instance.position.set(
        -13.767695123014105,
        12.990152163077308,
        39.28228164159694
      ),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.updateProjectionMatrix(),
      (this.interactionManager = new Le(
        this.renderer.instance,
        this.camera.instance,
        this.canvas
      )),
      (this.labelGroup = new P()),
      (this.label3d = new ye(this)),
      this.labelGroup.rotateX(-Math.PI / 2),
      (this.eventElement = []),
      (this.defaultMaterial = null),
      (this.defaultLightMaterial = null),
      this.scene.add(this.labelGroup),
      this.initSetting(),
      (this.assets = new be(() => {
        this.initEnvironment(),
          this.createFloor(),
          this.createChinaBlurLine(),
          this.createGrid(),
          this.createRotateBorder(),
          this.createLabel(),
          this.createModel(),
          this.createAnimateVideo(),
          this.createEvent(),
          this.createFlyLine(),
          this.createParticles(),
          this.createScatter(),
          this.createInfoPoint();
        let s = u.timeline();
        s.addLabel("focusMap", 2),
          s.addLabel("focusMapOpacity", 2.5),
          s.addLabel("bar", 3.5),
          s.add(
            u.to(this.camera.instance.position, {
              duration: 2.5,
              x: -0.2515849818960619,
              y: 12.397744557047988,
              z: 14.647659671139275,
              ease: "circ.out",
            })
          ),
          s.add(
            u.to(this.focusMapGroup.position, {
              duration: 1,
              x: 0,
              y: 0,
              z: 0,
            }),
            "focusMap"
          ),
          s.add(
            u.to(this.focusMapGroup.scale, {
              duration: 1,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMap"
          ),
          s.add(
            u.to(this.focusMapTopMaterial, {
              duration: 1,
              opacity: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          s.add(
            u.to(this.focusMapSideMaterial, {
              duration: 1,
              opacity: 1,
              ease: "circ.out",
              onComplete: () => {
                this.focusMapSideMaterial.transparent = !1;
              },
            }),
            "focusMapOpacity"
          ),
          this.otherLabel.map((e, i) => {
            let r = e.element.querySelector(".other-label");
            s.add(
              u.to(r, {
                duration: 1,
                delay: 0.1 * i,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "focusMapOpacity"
            );
          }),
          s.add(
            u.to(this.zhejiangLineMaterial, {
              duration: 0.5,
              delay: 0.3,
              opacity: 1,
            }),
            "focusMapOpacity"
          ),
          s.add(
            u.to(this.rotateBorder1.scale, {
              delay: 0.3,
              duration: 1,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          s.add(
            u.to(this.rotateBorder2.scale, {
              duration: 1,
              delay: 0.5,
              x: 1,
              y: 1,
              z: 1,
              ease: "circ.out",
            }),
            "focusMapOpacity"
          ),
          this.allBar.map((e, i) => {
            s.add(
              u.to(e.scale, {
                duration: 1,
                delay: 0.1 * i,
                x: 1,
                y: 1,
                z: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allBarMaterial.map((e, i) => {
            s.add(
              u.to(e, {
                duration: 1,
                delay: 0.1 * i,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
          }),
          this.allProvinceLabel.map((e, i) => {
            let r = e.element.querySelector(".provinces-label-wrap"),
              c = e.element.querySelector(".number .value"),
              o = Number(c.innerText),
              l = { score: 0 };
            s.add(
              u.to(r, {
                duration: 1,
                delay: 0.2 * i,
                translateY: 0,
                opacity: 1,
                ease: "circ.out",
              }),
              "bar"
            );
            let p = u.to(l, {
              duration: 1,
              delay: 0.2 * i,
              score: o,
              onUpdate: n,
            });
            function n() {
              c.innerText = l.score.toFixed(0);
            }
            s.add(p, "bar");
          }),
          this.allGuangquan.map((e, i) => {
            s.add(
              u.to(e.children[0].scale, {
                duration: 1,
                delay: 0.1 * i,
                x: 1,
                y: 1,
                z: 1,
                ease: "circ.out",
              }),
              "bar"
            ),
              s.add(
                u.to(e.children[1].scale, {
                  duration: 1,
                  delay: 0.1 * i,
                  x: 1,
                  y: 1,
                  z: 1,
                  ease: "circ.out",
                }),
                "bar"
              );
          });
      }));
  }
  initEnvironment() {
    let t = new J(16777215, 5);
    this.scene.add(t);
    let a = new K(16777215, 5);
    if (
      (a.position.set(-30, 6, -8),
      (a.castShadow = !0),
      (a.shadow.radius = 20),
      (a.shadow.mapSize.width = 1024),
      (a.shadow.mapSize.height = 1024),
      this.scene.add(a),
      this.debug.active)
    ) {
      let s = new ee(a, 2);
      this.scene.add(s);
      const e = this.debug.instance.addFolder("Environment");
      e.add(a.position, "x", -30, 30, 1),
        e.add(a.position, "y", -30, 30, 1),
        e.add(a.position, "z", -30, 30, 1),
        e.add(a, "intensity", 1, 100, 1),
        e.add(t, "intensity", 1, 10, 1),
        e.onChange((i) => {
          s.update();
        });
    }
    this.createPointLight({
      color: "#1d5e5e",
      intensity: 600,
      distance: 1e4,
      x: -9,
      y: 3,
      z: -3,
    }),
      this.createPointLight({
        color: "#1d5e5e",
        intensity: 100,
        distance: 1e4,
        x: 0,
        y: 2,
        z: 5,
      });
  }
  createPointLight(t) {
    const a = new te(1924702, t.intensity, t.distance, 1);
    if ((a.position.set(t.x, t.y, t.z), this.scene.add(a), this.debug.active)) {
      const s = new ae(a, 1);
      this.scene.add(s);
      const e = this.debug.instance.addFolder("Point" + Math.random());
      e.addColor(t, "color"),
        e.add(t, "intensity", 1, 2e4, 10),
        e.add(t, "distance", 100, 1e5, 10),
        e.add(t, "x", -30, 30, 1),
        e.add(t, "y", -30, 30, 1),
        e.add(t, "z", -30, 30, 1),
        e.onChange(({ object: i }) => {
          (a.color = new I(i.color)),
            (a.distance = i.distance),
            (a.intensity = i.intensity),
            a.position.set(i.x, i.y, i.z),
            s.update();
        });
    }
  }
  initSetting() {
    (this.debug = new ge(!1)),
      (this.renderer.instance.shadowMap.enabled = !1),
      this.renderer.resize();
  }
  createModel() {
    let t = new P();
    this.focusMapGroup = new P();
    let { china: a, chinaTopLine: s, chinaBottomLine: e } = this.createChina(),
      { zhejiang: i, zhejiangTop: r, guangdonLine: c } = this.createProvince();
    a.setParent(t),
      s.setParent(t),
      console.log(ue(i.mapGroup)),
      i.setParent(this.focusMapGroup),
      r.setParent(this.focusMapGroup),
      c.setParent(this.focusMapGroup),
      this.focusMapGroup.position.set(0, 0, -0.01),
      this.focusMapGroup.scale.set(1, 1, 0),
      t.add(this.focusMapGroup),
      (t.rotation.x = -Math.PI / 2),
      t.position.set(0, 0.2, 0),
      this.scene.add(t),
      this.createBar();
  }
  createChina() {
    let t = this.assets.instance.getResource("china"),
      a = new H(this, {
        data: t,
        center: this.pointCenter,
        merge: !1,
        material: new D({ color: 1387591, transparent: !0, opacity: 1 }),
        renderOrder: 2,
      }),
      s = new T(this, {
        center: this.pointCenter,
        visibelProvince: "广东省",
        data: t,
        material: new A({ color: 4162253 }),
        renderOrder: 3,
      });
    s.lineGroup.position.z += 0.01;
    let e = new T(this, {
      center: this.pointCenter,
      data: t,
      material: new A({ color: 4162253, transparent: !0, opacity: 0.4 }),
      renderOrder: 3,
    });
    return (
      (e.lineGroup.position.z -= 0.59),
      { china: a, chinaTopLine: s, chinaBottomLine: e }
    );
  }
  createProvince() {
    let t = this.assets.instance.getResource("zhejiang"),
      [a, s] = this.createProvinceMaterial();
    (this.focusMapTopMaterial = a), (this.focusMapSideMaterial = s);
    let e = new we(this, {
        center: this.pointCenter,
        position: new y(0, 0, 0.11),
        data: t,
        depth: 0.5,
        topFaceMaterial: a,
        sideMaterial: s,
        renderOrder: 9,
      }),
      i = new j({ color: 16777215, transparent: !0, opacity: 0.5 });
    new N(i, { uColor1: 2780818, uColor2: 1058614 }),
      (this.defaultMaterial = i),
      (this.defaultLightMaterial = this.defaultMaterial.clone()),
      this.defaultLightMaterial.emissive.setHex(725293),
      (this.defaultLightMaterial.emissiveIntensity = 3.5);
    let r = new H(this, {
      center: this.pointCenter,
      position: new y(0, 0, 0.72),
      data: t,
      material: i,
      renderOrder: 2,
    });
    r.mapGroup.children.map((o) => {
      o.children.map((l) => {
        l.type === "Mesh" && this.eventElement.push(l);
      });
    }),
      (this.zhejiangLineMaterial = new A({
        color: 16777215,
        opacity: 0,
        transparent: !0,
        fog: !1,
      }));
    let c = new T(this, {
      center: this.pointCenter,
      data: t,
      material: this.zhejiangLineMaterial,
      renderOrder: 3,
    });
    return (
      (c.lineGroup.position.z += 0.73),
      { zhejiang: e, zhejiangTop: r, guangdonLine: c }
    );
  }
  createProvinceMaterial() {
    let t = new D({
      color: 16777215,
      transparent: !0,
      opacity: 0,
      fog: !1,
      side: z,
    });
    t.onBeforeCompile = (e) => {
      (e.uniforms = {
        ...e.uniforms,
        uColor1: { value: new I(2780818) },
        uColor2: { value: new I(1058614) },
      }),
        (e.vertexShader = e.vertexShader.replace(
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
        (e.fragmentShader = e.fragmentShader.replace(
          "void main() {",
          `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
        )),
        (e.fragmentShader = e.fragmentShader.replace(
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
    (a.wrapS = w), (a.wrapT = w), a.repeat.set(1, 1.5), (a.offset.y += 0.065);
    let s = new j({ color: 16777215, map: a, fog: !1, opacity: 0, side: z });
    return (
      this.time.on("tick", () => {
        a.offset.y += 0.005;
      }),
      (s.onBeforeCompile = (e) => {
        (e.uniforms = {
          ...e.uniforms,
          uColor1: { value: new I(2780818) },
          uColor2: { value: new I(2780818) },
        }),
          (e.vertexShader = e.vertexShader.replace(
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
          (e.fragmentShader = e.fragmentShader.replace(
            "void main() {",
            `
        varying vec3 vPosition;
        varying float vAlpha;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
      `
          )),
          (e.fragmentShader = e.fragmentShader.replace(
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
  createEvent() {
    let t = [];
    const a = (e) => {
        e.traverse((i) => {
          i.isMesh && (i.material = this.defaultMaterial);
        });
      },
      s = (e) => {
        e.traverse((i) => {
          i.isMesh && (i.material = this.defaultLightMaterial);
        });
      };
    this.eventElement.map((e) => {
      this.interactionManager.add(e),
        e.addEventListener("mousedown", (i) => {
          if (this.clicked) return !1;
          this.clicked = !0;
          let r = new y();
          i.target.getWorldPosition(r),
            console.log(r),
            this.camera.instance.position.copy(r);
        }),
        e.addEventListener("mouseup", (i) => {
          this.clicked = !1;
        }),
        e.addEventListener("mouseover", (i) => {
          t.includes(i.target.parent) || t.push(i.target.parent),
            (document.body.style.cursor = "pointer"),
            s(i.target.parent);
        }),
        e.addEventListener("mouseout", (i) => {
          (t = t.filter(
            (r) => r.userData.name !== i.target.parent.userData.name
          )),
            t.length > 0 && t[t.length - 1],
            a(i.target.parent),
            (document.body.style.cursor = "default");
        });
    });
  }
  createBar() {
    let t = this,
      a = F(W).filter((o, l) => l < 7);
    const s = new P(),
      e = 0.7,
      i = 4 * e,
      r = a[0].value;
    (this.allBar = []),
      (this.allBarMaterial = []),
      (this.allGuangquan = []),
      (this.allProvinceLabel = []),
      a.map((o, l) => {
        let p = i * (o.value / r),
          n = new b({
            color: 16777215,
            transparent: !0,
            opacity: 0,
            depthTest: !1,
            fog: !1,
          });
        new N(n, {
          uColor1: l > 3 ? 16506760 : 5291006,
          uColor2: l > 3 ? 16776948 : 7863285,
          size: p,
          dir: "y",
        });
        const h = new ie(0.1 * e, 0.1 * e, p);
        h.translate(0, 0, p / 2);
        const f = new M(h, n);
        f.renderOrder = 5;
        let d = f,
          [v, m] = this.geoProjection(o.centroid);
        d.position.set(v, -m, 0.95), d.scale.set(1, 1, 0);
        let g = this.createQuan(new y(v, 0.94, m), l),
          x = this.createHUIGUANG(p, l > 3 ? 16776948 : 7863285);
        d.add(...x), s.add(d), (s.rotation.x = -Math.PI / 2);
        let C = c(o, l, new y(v, -m, 1.6 + p));
        this.allBar.push(d),
          this.allBarMaterial.push(n),
          this.allGuangquan.push(g),
          this.allProvinceLabel.push(C);
      }),
      this.scene.add(s);
    function c(o, l, p) {
      let n = t.label3d.create("", "provinces-label", !0);
      return (
        n.init(
          `<div class="provinces-label ${l > 4 ? "yellow" : ""}">
      <div class="provinces-label-wrap">
        <div class="number"><span class="value">${
          o.value
        }</span><span class="unit">万人</span></div>
        <div class="name">
          <span class="zh">${o.name}</span>
          <span class="en">${o.enName.toUpperCase()}</span>
        </div>
        <div class="no">${l + 1}</div>
      </div>
    </div>`,
          p
        ),
        t.label3d.setLabelStyle(n, 0.01, "x"),
        n.setParent(t.labelGroup),
        n
      );
    }
  }
  createHUIGUANG(t, a) {
    let s = new S(0.35, t);
    s.translate(0, t / 2, 0);
    const e = this.assets.instance.getResource("huiguang");
    (e.colorSpace = B), (e.wrapS = w), (e.wrapT = w);
    let i = new b({
        color: a,
        map: e,
        transparent: !0,
        opacity: 0.4,
        depthWrite: !1,
        side: z,
        blending: G,
      }),
      r = new M(s, i);
    (r.renderOrder = 10), r.rotateX(Math.PI / 2);
    let c = r.clone(),
      o = r.clone();
    return (
      c.rotateY((Math.PI / 180) * 60),
      o.rotateY((Math.PI / 180) * 120),
      [r, c, o]
    );
  }
  createQuan(t, a) {
    const s = this.assets.instance.getResource("guangquan1"),
      e = this.assets.instance.getResource("guangquan2");
    let i = new S(0.5, 0.5),
      r = new b({
        color: 16777215,
        map: s,
        alphaMap: s,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: G,
      }),
      c = new b({
        color: 16777215,
        map: e,
        alphaMap: e,
        opacity: 1,
        transparent: !0,
        depthTest: !1,
        fog: !1,
        blending: G,
      }),
      o = new M(i, r),
      l = new M(i, c);
    return (
      (o.renderOrder = 6),
      (l.renderOrder = 6),
      o.rotateX(-Math.PI / 2),
      l.rotateX(-Math.PI / 2),
      o.position.copy(t),
      l.position.copy(t),
      (l.position.y -= 0.001),
      o.scale.set(0, 0, 0),
      l.scale.set(0, 0, 0),
      (this.quanGroup = new P()),
      this.quanGroup.add(o, l),
      this.scene.add(this.quanGroup),
      this.time.on("tick", () => {
        o.rotation.z += 0.05;
      }),
      this.quanGroup
    );
  }
  createGrid() {
    new ve(this, {
      gridSize: 50,
      gridDivision: 20,
      gridColor: 1788784,
      shapeSize: 0.5,
      shapeColor: 2776970,
      pointSize: 0.1,
      pointColor: 1396093,
      diffuse: !0,
      diffuseSpeed: 10,
      diffuseColor: 3050457,
    });
  }
  createFloor() {
    let t = new S(20, 20);
    const a = this.assets.instance.getResource("ocean");
    (a.colorSpace = B), (a.wrapS = w), (a.wrapT = w), a.repeat.set(1, 1);
    let s = new b({ map: a, opacity: 1 }),
      e = new M(t, s);
    e.rotateX(-Math.PI / 2), e.position.set(0, -0.7, 0), this.scene.add(e);
  }
  createChinaBlurLine() {
    let t = new S(147, 147);
    const a = this.assets.instance.getResource("chinaBlurLine");
    (a.colorSpace = B),
      (a.wrapS = w),
      (a.wrapT = w),
      (a.generateMipmaps = !1),
      (a.minFilter = se),
      a.repeat.set(1, 1);
    let s = new b({
        color: 4162253,
        alphaMap: a,
        transparent: !0,
        opacity: 0.5,
      }),
      e = new M(t, s);
    if (
      (e.rotateX(-Math.PI / 2),
      e.position.set(-33.2, -0.5, -5.2),
      this.scene.add(e),
      this.debug.active)
    ) {
      const i = this.debug.instance.addFolder("blurLine");
      i.add(e.position, "x", -100, 100, 0.1),
        i.add(e.position, "y", -100, 100, 0.1),
        i.add(e.position, "z", -100, 100, 0.1);
    }
  }
  createAnimateVideo() {
    this.createAnimateVideoItem(".map-gd-video1", new y(11, 0.4, 1)),
      this.createAnimateVideoItem(".map-gd-video2", new y(-11, 0.4, 2));
  }
  createAnimateVideoItem(t, a) {
    let s = document.querySelector(t);
    window.addEventListener("pointerdown", () => {
      s.play();
    });
    let e = new ne(s);
    e.colorSpace = B;
    let i = 1.2,
      r = new S(2.5 * i, 1 * i),
      c = new b({
        color: 10807286,
        alphaMap: e,
        transparent: !0,
        opacity: 1,
        blending: G,
      }),
      o = new M(r, c);
    o.rotateX(-Math.PI / 2),
      o.position.copy(a),
      (o.renderOrder = 10),
      this.scene.add(o);
  }
  createLabel() {
    let t = this,
      a = this.labelGroup,
      s = this.label3d,
      e = [];
    xe.map((n) => {
      if (n.hide == !0) return !1;
      let h = o(n, s, a);
      e.push(h);
    });
    let i = l(
        {
          name: "浙江省",
          enName: "ZHEJIANG PROVINCE",
          center: [120.109913, 26.881466],
        },
        s,
        a
      ),
      r = p(
        {
          icon: O,
          center: [125.109913, 26.881466],
          width: "40px",
          height: "40px",
          reflect: !0,
        },
        s,
        a
      ),
      c = p(
        {
          icon: O,
          center: [116.109913, 26.881466],
          width: "20px",
          height: "20px",
          reflect: !1,
        },
        s,
        a
      );
    e.push(i), e.push(r), e.push(c), (this.otherLabel = e);
    function o(n, h, f) {
      let d = h.create("", `china-label ${n.blur ? " blur" : ""}`, !1);
      const [v, m] = t.geoProjection(n.center);
      return (
        d.init(
          `<div class="other-label"><img class="label-icon" src="${O}">${n.name}</div>`,
          new y(v, -m, 0.4)
        ),
        h.setLabelStyle(d, 0.02, "x"),
        d.setParent(f),
        d
      );
    }
    function l(n, h, f) {
      let d = h.create("", "guangdong-label", !1);
      const [v, m] = t.geoProjection(n.center);
      return (
        d.init(
          `<div class="other-label"><span>${n.name}</span><span>${n.enName}</span></div>`,
          new y(v, -m, 0.4)
        ),
        h.setLabelStyle(d, 0.02, "x"),
        d.setParent(f),
        d
      );
    }
    function p(n, h, f) {
      let d = h.create(
        "",
        `decoration-label  ${n.reflect ? " reflect" : ""}`,
        !1
      );
      const [v, m] = t.geoProjection(n.center);
      return (
        d.init(
          `<div class="other-label"><img class="label-icon" style="width:${n.width};height:${n.height}" src="${n.icon}">`,
          new y(v, -m, 0.4)
        ),
        h.setLabelStyle(d, 0.02, "x"),
        d.setParent(f),
        d
      );
    }
  }
  createRotateBorder() {
    let t = 12,
      a = this.assets.instance.getResource("rotationBorder1"),
      s = this.assets.instance.getResource("rotationBorder2"),
      e = new V(this, {
        width: t * 1.178,
        needRotate: !0,
        rotateSpeed: 0.001,
        material: new b({
          map: a,
          color: 4763647,
          transparent: !0,
          opacity: 0.2,
          side: z,
          depthWrite: !1,
          blending: G,
        }),
        position: new y(0, 0.28, 0),
      });
    (e.instance.renderOrder = 6),
      e.instance.scale.set(0, 0, 0),
      e.setParent(this.scene);
    let i = new V(this, {
      width: t * 1.116,
      needRotate: !0,
      rotateSpeed: -0.004,
      material: new b({
        map: s,
        color: 4763647,
        transparent: !0,
        opacity: 0.4,
        side: z,
        depthWrite: !1,
        blending: G,
      }),
      position: new y(0, 0.3, 0),
    });
    (i.instance.renderOrder = 6),
      i.instance.scale.set(0, 0, 0),
      i.setParent(this.scene),
      (this.rotateBorder1 = e.instance),
      (this.rotateBorder2 = i.instance);
  }
  createFlyLine() {
    (this.flyLineGroup = new P()),
      (this.flyLineGroup.visible = !1),
      this.scene.add(this.flyLineGroup);
    const t = this.assets.instance.getResource("flyLine");
    (t.colorSpace = B), (t.wrapS = w), (t.wrapT = w), t.repeat.set(1, 1);
    const a = 0.03,
      s = 32,
      e = 8,
      i = !1;
    let [r, c] = this.geoProjection(this.flyLineCenter),
      o = new y(r, -c, 0);
    const l = new b({
      map: t,
      alphaMap: t,
      color: 2781042,
      transparent: !0,
      fog: !1,
      opacity: 1,
      depthTest: !1,
      blending: G,
    });
    this.time.on("tick", () => {
      t.offset.x -= 0.006;
    }),
      W.filter((p, n) => n < 7).map((p) => {
        let [n, h] = this.geoProjection(p.centroid),
          f = new y(n, -h, 0);
        const d = new y();
        d.addVectors(o, f).multiplyScalar(0.5), d.setZ(3);
        const v = new oe(o, d, f),
          m = new re(v, s, a, e, i),
          g = new M(m, l);
        (g.rotation.x = -Math.PI / 2),
          g.position.set(0, 0.94, 0),
          (g.renderOrder = 21),
          this.flyLineGroup.add(g);
      }),
      this.createFlyLineFocus();
  }
  createFlyLineFocus() {
    (this.flyLineFocusGroup = new P()),
      (this.flyLineFocusGroup.visible = !1),
      (this.flyLineFocusGroup.rotation.x = -Math.PI / 2);
    let [t, a] = this.geoProjection([119.476498, 29.898918]);
    this.flyLineFocusGroup.position.set(t, 0.942, a),
      this.scene.add(this.flyLineFocusGroup);
    const s = this.assets.instance.getResource("flyLineFocus"),
      e = new S(1, 1),
      i = new b({
        color: 16777215,
        map: s,
        alphaMap: s,
        transparent: !0,
        fog: !1,
        depthTest: !1,
        blending: G,
      }),
      r = new M(e, i);
    r.scale.set(0, 0, 0);
    const c = r.clone();
    (c.material = i.clone()),
      this.flyLineFocusGroup.add(r, c),
      u.to(r.material, { opacity: 0, repeat: -1, yoyo: !1, duration: 1 }),
      u.to(r.scale, {
        x: 1.5,
        y: 1.5,
        z: 1.5,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      }),
      u.to(c.material, {
        delay: 0.5,
        opacity: 0,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      }),
      u.to(c.scale, {
        delay: 0.5,
        x: 1.5,
        y: 1.5,
        z: 1.5,
        repeat: -1,
        yoyo: !1,
        duration: 1,
      });
  }
  createParticles() {
    (this.particles = new U(this, {
      num: 10,
      range: 30,
      dir: "up",
      speed: 0.05,
      material: new k({
        map: U.createTexture(),
        size: 1,
        color: 61166,
        transparent: !0,
        opacity: 1,
        depthTest: !1,
        depthWrite: !1,
        vertexColors: !0,
        blending: G,
        sizeAttenuation: !0,
      }),
    })),
      this.particles.instance.position.set(0, 0, 0),
      (this.particles.instance.rotation.x = -Math.PI / 2),
      this.particles.setParent(this.scene),
      (this.particles.enable = !1),
      (this.particles.instance.visible = !1);
  }
  createScatter() {
    (this.scatterGroup = new P()),
      (this.scatterGroup.visible = !1),
      (this.scatterGroup.rotation.x = -Math.PI / 2),
      this.scene.add(this.scatterGroup);
    const t = this.assets.instance.getResource("arrow"),
      a = new $({
        map: t,
        color: 16776948,
        fog: !1,
        transparent: !0,
        depthTest: !1,
      });
    let s = F(X),
      e = s[0].value;
    s.map((i) => {
      const r = new q(a);
      r.renderOrder = 23;
      let c = 0.1 + (i.value / e) * 0.2;
      r.scale.set(c, c, c);
      let [o, l] = this.geoProjection([i.lng, i.lat]);
      r.position.set(o, -l, this.depth + 0.45),
        (r.userData.position = [o, -l, this.depth + 0.45]),
        this.scatterGroup.add(r);
    });
  }
  createHeatmap() {
    const s = [],
      e = X.map((x) => {
        let [C, R] = this.geoProjection([x.lng, x.lat]);
        return (
          s.push(C, -R, 0.952),
          console.log(C, C * 100, Math.floor(C * 100) + 1e3),
          {
            value: x.value,
            x: Math.floor(C * 100) + 1e3,
            y: Math.floor(-R * 100) + 1e3,
          }
        );
      });
    let i = fe(e, (x) => x.value).value,
      r = me(e, (x) => x.value).value;
    const c = new le();
    c.setAttribute("position", new ce(s, 3));
    const o = new k({ size: 0.2, color: 16777215 });
    let l = new de(c, o);
    l.rotateX(-Math.PI / 2), this.scene.add(l);
    const p = 3600,
      n = 1800;
    let h = document.createElement("div");
    var f = Pe.create({
      container: h,
      radius: 100,
      width: p,
      height: n,
      alpha: !0,
    });
    f.setData({ max: i, min: r, data: e });
    let d = new S(p, n),
      v = new pe(f._renderer.canvas);
    var m = new b({
      map: v,
      transparent: !0,
      depthWrite: !1,
      side: z,
      fog: !1,
      wireframe: !1,
    });
    m.map.needsUpdate = !0;
    let g = new M(d, m);
    (g.rotation.x = Math.PI / 2),
      (g.renderOrder = 22),
      g.position.set(p / 100, 0.952, -n / 100),
      g.scale.set(1 / 100, 1 / 100, 1),
      this.scene.add(g);
  }
  createInfoPoint() {
    let t = this;
    (this.InfoPointGroup = new P()),
      (this.InfoPointGroup.visible = !1),
      (this.InfoPointGroup.rotation.x = -Math.PI / 2),
      this.scene.add(this.InfoPointGroup),
      (this.infoPointIndex = 0),
      (this.infoPointLabelTime = null),
      (this.infoLabelElement = []);
    let a = this.label3d;
    const s = this.assets.instance.getResource("point");
    let e = [16776948, 7863285],
      i = F(Me),
      r = i[0].value;
    i.map((o, l) => {
      const p = new $({
          map: s,
          color: e[l % e.length],
          fog: !1,
          transparent: !0,
          depthTest: !1,
        }),
        n = new q(p);
      n.renderOrder = 23;
      let h = 0.7 + (o.value / r) * 0.4;
      n.scale.set(h, h, h);
      let [f, d] = this.geoProjection([o.lng, o.lat]),
        v = [f, -d, this.depth + 0.7];
      n.position.set(...v),
        (n.userData.position = [...v]),
        (n.userData = {
          position: [f, -d, this.depth + 0.7],
          name: o.name,
          value: o.value,
          level: o.level,
          index: l,
        }),
        this.InfoPointGroup.add(n);
      let m = c(o, a, this.InfoPointGroup);
      this.infoLabelElement.push(m),
        this.interactionManager.add(n),
        n.addEventListener("mousedown", (g) => {
          if (this.clicked) return !1;
          (this.clicked = !0),
            (this.infoPointIndex = g.target.userData.index),
            this.infoLabelElement.map((x) => {
              x.hide();
            }),
            m.show(),
            this.createInfoPointLabelLoop();
        }),
        n.addEventListener("mouseup", (g) => {
          this.clicked = !1;
        }),
        n.addEventListener("mouseover", (g) => {
          document.body.style.cursor = "pointer";
        }),
        n.addEventListener("mouseout", (g) => {
          document.body.style.cursor = "default";
        });
    });
    function c(o, l, p) {
      let n = l.create("", "info-point", !0);
      const [h, f] = t.geoProjection([o.lng, o.lat]);
      return (
        n.init(
          ` <div class="info-point-wrap">
        <div class="info-point-wrap-inner">
          <div class="info-point-line">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <div class="info-point-content">
            <div class="content-item"><span class="label">名称</span><span class="value">${o.name}</span></div>
            <div class="content-item"><span class="label">PM2.5</span><span class="value">${o.value}ug/m²</span></div>
            <div class="content-item"><span class="label">等级</span><span class="value">${o.level}</span></div>
          </div>
        </div>
      </div>
    `,
          new y(h, -f, 2.4)
        ),
        l.setLabelStyle(n, 0.015, "x"),
        n.setParent(p),
        n.hide(),
        n
      );
    }
  }
  createInfoPointLabelLoop() {
    clearInterval(this.infoPointLabelTime),
      (this.infoPointLabelTime = setInterval(() => {
        this.infoPointIndex++,
          this.infoPointIndex >= this.infoLabelElement.length &&
            (this.infoPointIndex = 0),
          this.infoLabelElement.map((t, a) => {
            this.infoPointIndex === a ? t.show() : t.hide();
          });
      }, 3e3));
  }
  createWatermark() {
    let t = this.assets.instance.getResource("watermark");
    (t.wrapS = w),
      (t.wrapT = w),
      t.repeat.set(50, 50),
      (t.rotation = Math.PI / 5);
    let a = new S(100, 100, 1),
      s = new b({ map: t, transparent: !0, opacity: 0.15 }),
      e = new M(a, s);
    (e.position.x -= 10),
      (e.position.y -= 10),
      (e.position.z -= 10),
      (e.renderOrder = 999),
      this.camera.instance.add(e);
  }
  update() {
    super.update(),
      this.stats && this.stats.update(),
      this.interactionManager && this.interactionManager.update();
  }
  destroy() {
    super.destroy(),
      this.debug.destroy(),
      this.label3d && this.label3d.destroy(),
      this.stats && this.stats.dom && document.body.removeChild(this.stats.dom);
  }
}
const _e = { class: "map-gd" },
  Ee = L("canvas", { id: "canvas" }, null, -1),
  Ae = {
    ref: "video1",
    class: "map-gd-video map-gd-video1",
    width: "250",
    height: "100",
    loop: "",
    crossorigin: "anonymous",
    playsinline: "",
    style: { display: "none" },
  },
  Te = L("source", { src: Q }, null, -1),
  Oe = [Te],
  Fe = {
    ref: "video2",
    class: "map-gd-video map-gd-video2",
    width: "250",
    height: "100",
    loop: "",
    crossorigin: "anonymous",
    playsinline: "",
    style: { display: "none" },
  },
  Re = L("source", { src: Y }, null, -1),
  De = [Re],
  je = { class: "map-btn-group" },
  ht = {
    __name: "map-animate-zj",
    setup(_) {
      let t = null;
      const a = Ge({
          flyLine: !1,
          scatter: !1,
          particle: !1,
          path: !1,
          info: !1,
        }),
        s = (e) => {
          (a[e] = !a[e]),
            e === "particle" &&
              ((t.particles.enable = a[e]),
              (t.particles.instance.visible = a[e])),
            e === "flyLine" &&
              ((t.flyLineGroup.visible = a[e]),
              (t.flyLineFocusGroup.visible = a[e])),
            e === "scatter" && (t.scatterGroup.visible = a[e]),
            e === "info" &&
              ((t.InfoPointGroup.visible = a[e]),
              a[e]
                ? t.createInfoPointLabelLoop()
                : (clearInterval(t.infoPointLabelTime),
                  t.infoLabelElement.map((i) => i.hide())));
        };
      return (
        Se(() => {
          t = new Be(document.getElementById("canvas"), {
            geoProjectionCenter: [120.109913, 29.181466],
          });
        }),
        Ce(() => {
          t && t.destroy();
        }),
        (e, i) => (
          Ie(),
          ze("div", _e, [
            Ee,
            L("video", Ae, Oe, 512),
            L("video", Fe, De, 512),
            L("div", je, [
              L(
                "div",
                {
                  class: E(["btn", { active: a.flyLine }]),
                  onClick: i[0] || (i[0] = (r) => s("flyLine")),
                },
                " 飞线 ",
                2
              ),
              L(
                "div",
                {
                  class: E(["btn", { active: a.scatter }]),
                  onClick: i[1] || (i[1] = (r) => s("scatter")),
                },
                " 散点图 ",
                2
              ),
              L(
                "div",
                {
                  class: E(["btn", { active: a.info }]),
                  onClick: i[2] || (i[2] = (r) => s("info")),
                },
                " 重点点位 ",
                2
              ),
              L(
                "div",
                {
                  class: E(["btn", { active: a.particle }]),
                  onClick: i[3] || (i[3] = (r) => s("particle")),
                },
                " 粒子特效 ",
                2
              ),
            ]),
          ])
        )
      );
    },
  };
export { ht as default };
