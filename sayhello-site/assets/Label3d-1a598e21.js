// import { V as z, O as W, y as O, ah as _ } from "./OrbitControls-9c9ee6bc.js";
import {
  Vector3 as z,
  Quaternion as _,
  Object3D as W,
  Matrix4 as O,
} from "./three.module.js";

import "./index-1453e2ee.js";
import { u as N } from "./utils-9af1928d.js";
const D = new z(),
  H = new _(),
  M = new z();
class R extends W {
  constructor(i = document.createElement("div")) {
    super(),
      (this.isCSS3DObject = !0),
      (this.element = i),
      (this.element.style.position = "absolute"),
      (this.element.style.pointerEvents = "auto"),
      (this.element.style.userSelect = "none"),
      this.element.setAttribute("draggable", !1),
      this.addEventListener("removed", function () {
        this.traverse(function (n) {
          n.element instanceof Element &&
            n.element.parentNode !== null &&
            n.element.parentNode.removeChild(n.element);
        });
      });
  }
  copy(i, n) {
    return super.copy(i, n), (this.element = i.element.cloneNode(!0)), this;
  }
}
class L extends R {
  constructor(i) {
    super(i), (this.isCSS3DSprite = !0), (this.rotation2D = 0);
  }
  copy(i, n) {
    return super.copy(i, n), (this.rotation2D = i.rotation2D), this;
  }
}
const m = new O(),
  $ = new O();
class A {
  constructor(i = {}) {
    const n = this;
    let d, r, l, a;
    const y = { camera: { style: "" }, objects: new WeakMap() },
      o = i.element !== void 0 ? i.element : document.createElement("div");
    (o.style.overflow = "hidden"), (this.domElement = o);
    const u = document.createElement("div");
    (u.style.transformOrigin = "0 0"),
      (u.style.pointerEvents = "none"),
      o.appendChild(u);
    const f = document.createElement("div");
    (f.style.transformStyle = "preserve-3d"),
      u.appendChild(f),
      (this.getSize = function () {
        return { width: d, height: r };
      }),
      (this.render = function (s, e) {
        const h = e.projectionMatrix.elements[5] * a;
        e.view && e.view.enabled
          ? ((u.style.transform = `translate( ${
              -e.view.offsetX * (d / e.view.width)
            }px, ${-e.view.offsetY * (r / e.view.height)}px )`),
            (u.style.transform += `scale( ${e.view.fullWidth / e.view.width}, ${
              e.view.fullHeight / e.view.height
            } )`))
          : (u.style.transform = ""),
          s.matrixWorldAutoUpdate === !0 && s.updateMatrixWorld(),
          e.parent === null &&
            e.matrixWorldAutoUpdate === !0 &&
            e.updateMatrixWorld();
        let S, c;
        e.isOrthographicCamera &&
          ((S = -(e.right + e.left) / 2), (c = (e.top + e.bottom) / 2));
        const p =
            e.view && e.view.enabled ? e.view.height / e.view.fullHeight : 1,
          v = e.isOrthographicCamera
            ? `scale( ${p} )scale(` +
              h +
              ")translate(" +
              t(S) +
              "px," +
              t(c) +
              "px)" +
              E(e.matrixWorldInverse)
            : `scale( ${p} )translateZ(` + h + "px)" + E(e.matrixWorldInverse),
          x =
            (e.isPerspectiveCamera ? "perspective(" + h + "px) " : "") +
            v +
            "translate(" +
            l +
            "px," +
            a +
            "px)";
        y.camera.style !== x && ((f.style.transform = x), (y.camera.style = x)),
          b(s, s, e);
      }),
      (this.setSize = function (s, e) {
        (d = s),
          (r = e),
          (l = d / 2),
          (a = r / 2),
          (o.style.width = s + "px"),
          (o.style.height = e + "px"),
          (u.style.width = s + "px"),
          (u.style.height = e + "px"),
          (f.style.width = s + "px"),
          (f.style.height = e + "px");
      });
    function t(s) {
      return Math.abs(s) < 1e-10 ? 0 : s;
    }
    function E(s) {
      const e = s.elements;
      return (
        "matrix3d(" +
        t(e[0]) +
        "," +
        t(-e[1]) +
        "," +
        t(e[2]) +
        "," +
        t(e[3]) +
        "," +
        t(e[4]) +
        "," +
        t(-e[5]) +
        "," +
        t(e[6]) +
        "," +
        t(e[7]) +
        "," +
        t(e[8]) +
        "," +
        t(-e[9]) +
        "," +
        t(e[10]) +
        "," +
        t(e[11]) +
        "," +
        t(e[12]) +
        "," +
        t(-e[13]) +
        "," +
        t(e[14]) +
        "," +
        t(e[15]) +
        ")"
      );
    }
    function C(s) {
      const e = s.elements;
      return (
        "translate(-50%,-50%)" +
        ("matrix3d(" +
          t(e[0]) +
          "," +
          t(e[1]) +
          "," +
          t(e[2]) +
          "," +
          t(e[3]) +
          "," +
          t(-e[4]) +
          "," +
          t(-e[5]) +
          "," +
          t(-e[6]) +
          "," +
          t(-e[7]) +
          "," +
          t(e[8]) +
          "," +
          t(e[9]) +
          "," +
          t(e[10]) +
          "," +
          t(e[11]) +
          "," +
          t(e[12]) +
          "," +
          t(e[13]) +
          "," +
          t(e[14]) +
          "," +
          t(e[15]) +
          ")")
      );
    }
    function b(s, e, h, S) {
      if (s.isCSS3DObject) {
        const c = s.visible === !0 && s.layers.test(h.layers) === !0;
        if (((s.element.style.display = c === !0 ? "" : "none"), c === !0)) {
          s.onBeforeRender(n, e, h);
          let p;
          s.isCSS3DSprite
            ? (m.copy(h.matrixWorldInverse),
              m.transpose(),
              s.rotation2D !== 0 && m.multiply($.makeRotationZ(s.rotation2D)),
              s.matrixWorld.decompose(D, H, M),
              m.setPosition(D),
              m.scale(M),
              (m.elements[3] = 0),
              (m.elements[7] = 0),
              (m.elements[11] = 0),
              (m.elements[15] = 1),
              (p = C(m)))
            : (p = C(s.matrixWorld));
          const v = s.element,
            g = y.objects.get(s);
          if (g === void 0 || g.style !== p) {
            v.style.transform = p;
            const x = { style: p };
            y.objects.set(s, x);
          }
          v.parentNode !== f && f.appendChild(v), s.onAfterRender(n, e, h);
        }
      }
      for (let c = 0, p = s.children.length; c < p; c++) b(s.children[c], e, h);
    }
  }
}
class V {
  constructor({ scene: i, camera: n, time: d, sizes: r, canvas: l }) {
    (this.scene = i),
      (this.camera = n),
      (this.time = d),
      (this.sizes = r),
      (this.canvas = l),
      (this.parent = null);
    let { width: a, height: y } = this.sizes,
      o = new A();
    o.setSize(a, y),
      (o.domElement.style.position = "absolute"),
      (o.domElement.style.left = "0px"),
      (o.domElement.style.top = "0px"),
      (o.domElement.style.pointerEvents = "none"),
      (o.domElement.className = "label3d-" + N()),
      this.canvas.parentNode.appendChild(o.domElement),
      (this.css3dRender = o),
      this.time.on("tick", () => {
        this.update();
      }),
      this.sizes.on("resize", () => {
        this.resize();
      });
  }
  create(i = "", n = "", d = !1) {
    let r = document.createElement("div");
    (r.innerHTML = i),
      (r.className = n),
      (r.style.visibility = "hidden"),
      (r.style.position = "absolute"),
      n ||
        ((r.style.padding = "10px"),
        (r.style.color = "#fff"),
        (r.style.fontSize = "12px"),
        (r.style.textAlign = "center"),
        (r.style.background = "rgba(0,0,0,0.6)"),
        (r.style.borderRadius = "4px"));
    let l = null;
    return (
      d ? (l = new L(r)) : (l = new R(r)),
      (l.init = (a, y) => {
        (l.element.innerHTML = a),
          (l.element.style.visibility = "visible"),
          l.position.copy(y);
      }),
      (l.hide = () => {
        l.element.style.visibility = "hidden";
      }),
      (l.show = () => {
        l.element.style.visibility = "visible";
      }),
      (l.setParent = (a) => {
        (this.parent = a), a.add(l);
      }),
      (l.remove = () => {
        this.parent.remove(l);
      }),
      l
    );
  }
  setLabelStyle(i, n = 0.1, d = "x", r = Math.PI / 2, l = "none") {
    (i.element.style.pointerEvents = l),
      i.scale.set(n, n, n),
      (i.rotation[d] = r);
  }
  update() {
    this.css3dRender.render(this.scene, this.camera.instance);
  }
  destroy() {
    if (this.css3dRender) {
      let i = this.css3dRender.domElement;
      i.parentNode.removeChild(i);
    }
  }
  resize() {
    let { width: i, height: n } = this.sizes;
    this.css3dRender.setSize(i, n);
  }
}
export { V as L };
