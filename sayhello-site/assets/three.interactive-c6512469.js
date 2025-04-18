var d = Object.defineProperty;
var u = (e, s, t) =>
  s in e
    ? d(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[s] = t);
var i = (e, s, t) => (u(e, typeof s != "symbol" ? s + "" : s, t), t);
import { a as r, af as m } from "./OrbitControls-9c9ee6bc.js";
var h = class {
    constructor(e, s) {
      i(this, "target");
      i(this, "name");
      i(this, "intersected");
      i(this, "wasIntersected", !1);
      i(this, "distance");
      (this.target = e),
        (this.name = s),
        (this.intersected = !1),
        (this.distance = 0);
    }
  },
  o = class {
    constructor(e, s = null) {
      i(this, "type");
      i(this, "cancelBubble");
      i(this, "originalEvent");
      i(this, "coords", new r(0, 0));
      i(this, "distance", 0);
      i(this, "intersected", !1);
      (this.cancelBubble = !1), (this.type = e), (this.originalEvent = s);
    }
    stopPropagation() {
      this.cancelBubble = !0;
    }
  },
  E = class {
    constructor(e, s, t, n) {
      i(this, "renderer");
      i(this, "camera");
      i(this, "domElement");
      i(this, "bindEventsOnBodyElement");
      i(this, "autoAdd");
      i(this, "scene");
      i(this, "mouse");
      i(this, "supportsPointerEvents");
      i(this, "interactiveObjects");
      i(this, "closestObject");
      i(this, "raycaster");
      i(this, "treatTouchEventsAsMouseEvents");
      i(this, "dispose", () => {
        this.domElement.removeEventListener("click", this.onMouseClick),
          this.supportsPointerEvents &&
            (this.bindEventsOnBodyElement
              ? this.domElement.ownerDocument.removeEventListener(
                  "pointermove",
                  this.onDocumentPointerMove
                )
              : this.domElement.removeEventListener(
                  "pointermove",
                  this.onDocumentPointerMove
                ),
            this.domElement.removeEventListener(
              "pointerdown",
              this.onPointerDown
            ),
            this.domElement.removeEventListener("pointerup", this.onPointerUp)),
          this.bindEventsOnBodyElement
            ? this.domElement.ownerDocument.removeEventListener(
                "mousemove",
                this.onDocumentMouseMove
              )
            : this.domElement.removeEventListener(
                "mousemove",
                this.onDocumentMouseMove
              ),
          this.domElement.removeEventListener("mousedown", this.onMouseDown),
          this.domElement.removeEventListener("mouseup", this.onMouseUp),
          this.domElement.removeEventListener("touchstart", this.onTouchStart),
          this.domElement.removeEventListener("touchmove", this.onTouchMove),
          this.domElement.removeEventListener("touchend", this.onTouchEnd);
      });
      i(this, "add", (e, s = []) => {
        if (e && !this.interactiveObjects.find((t) => t.target === e))
          if (s.length > 0)
            s.forEach((t) => {
              let n = e.getObjectByName(t);
              if (n) {
                let c = new h(n, t);
                this.interactiveObjects.push(c);
              }
            });
          else {
            let t = new h(e, e.name);
            this.interactiveObjects.push(t);
          }
      });
      i(this, "remove", (e, s = []) => {
        !e ||
          (s.length > 0
            ? s.forEach((t) => {
                let n = e.getObjectByName(t);
                n &&
                  (this.interactiveObjects = this.interactiveObjects.filter(
                    (c) => c.target !== n
                  ));
              })
            : (this.interactiveObjects = this.interactiveObjects.filter(
                (t) => t.target !== e
              )));
      });
      i(this, "update", () => {
        this.raycaster.setFromCamera(this.mouse, this.camera),
          this.interactiveObjects.forEach((n) => {
            n.target && this.checkIntersection(n);
          }),
          this.interactiveObjects.sort(function (n, c) {
            return n.distance - c.distance;
          });
        let e = this.interactiveObjects.find((n) => n.intersected) ?? null;
        if (e != this.closestObject) {
          if (this.closestObject) {
            let n = new o("mouseout");
            this.dispatch(this.closestObject, n);
          }
          if (e) {
            let n = new o("mouseover");
            this.dispatch(e, n);
          }
          this.closestObject = e;
        }
        let s;
        this.interactiveObjects.forEach((n) => {
          !n.intersected &&
            n.wasIntersected &&
            (s || (s = new o("mouseleave")), this.dispatch(n, s));
        });
        let t;
        this.interactiveObjects.forEach((n) => {
          n.intersected &&
            !n.wasIntersected &&
            (t || (t = new o("mouseenter")), this.dispatch(n, t));
        });
      });
      i(this, "checkIntersection", (e) => {
        let s = this.raycaster.intersectObjects([e.target], !0);
        if (((e.wasIntersected = e.intersected), s.length > 0)) {
          let t = s[0].distance;
          s.forEach((n) => {
            n.distance < t && (t = n.distance);
          }),
            (e.intersected = !0),
            (e.distance = t);
        } else e.intersected = !1;
      });
      i(this, "onDocumentMouseMove", (e) => {
        this.mapPositionToPoint(this.mouse, e.clientX, e.clientY);
        let s = new o("mousemove", e);
        this.interactiveObjects.forEach((t) => {
          this.dispatch(t, s);
        });
      });
      i(this, "onDocumentPointerMove", (e) => {
        this.mapPositionToPoint(this.mouse, e.clientX, e.clientY);
        let s = new o("pointermove", e);
        this.interactiveObjects.forEach((t) => {
          this.dispatch(t, s);
        });
      });
      i(this, "onTouchMove", (e) => {
        e.touches.length > 0 &&
          this.mapPositionToPoint(
            this.mouse,
            e.touches[0].clientX,
            e.touches[0].clientY
          );
        let s = new o(
          this.treatTouchEventsAsMouseEvents ? "mousemove" : "touchmove",
          e
        );
        this.interactiveObjects.forEach((t) => {
          this.dispatch(t, s);
        });
      });
      i(this, "onMouseClick", (e) => {
        this.update();
        let s = new o("click", e);
        this.interactiveObjects.forEach((t) => {
          t.intersected && this.dispatch(t, s);
        });
      });
      i(this, "onMouseDown", (e) => {
        this.mapPositionToPoint(this.mouse, e.clientX, e.clientY),
          this.update();
        let s = new o("mousedown", e);
        this.interactiveObjects.forEach((t) => {
          t.intersected && this.dispatch(t, s);
        });
      });
      i(this, "onPointerDown", (e) => {
        this.mapPositionToPoint(this.mouse, e.clientX, e.clientY),
          this.update();
        let s = new o("pointerdown", e);
        this.interactiveObjects.forEach((t) => {
          t.intersected && this.dispatch(t, s);
        });
      });
      i(this, "onTouchStart", (e) => {
        e.touches.length > 0 &&
          this.mapPositionToPoint(
            this.mouse,
            e.touches[0].clientX,
            e.touches[0].clientY
          ),
          this.update();
        let s = new o(
          this.treatTouchEventsAsMouseEvents ? "mousedown" : "touchstart",
          e
        );
        this.interactiveObjects.forEach((t) => {
          t.intersected && this.dispatch(t, s);
        });
      });
      i(this, "onMouseUp", (e) => {
        let s = new o("mouseup", e);
        this.interactiveObjects.forEach((t) => {
          this.dispatch(t, s);
        });
      });
      i(this, "onPointerUp", (e) => {
        let s = new o("pointerup", e);
        this.interactiveObjects.forEach((t) => {
          this.dispatch(t, s);
        });
      });
      i(this, "onTouchEnd", (e) => {
        e.touches.length > 0 &&
          this.mapPositionToPoint(
            this.mouse,
            e.touches[0].clientX,
            e.touches[0].clientY
          ),
          this.update();
        let s = new o(
          this.treatTouchEventsAsMouseEvents ? "mouseup" : "touchend",
          e
        );
        this.interactiveObjects.forEach((t) => {
          this.dispatch(t, s);
        });
      });
      i(this, "dispatch", (e, s) => {
        e.target &&
          !s.cancelBubble &&
          ((s.coords = this.mouse),
          (s.distance = e.distance),
          (s.intersected = e.intersected),
          e.target.dispatchEvent(s));
      });
      i(this, "mapPositionToPoint", (e, s, t) => {
        let n = this.renderer.domElement.getBoundingClientRect();
        (e.x = ((s - n.left) / n.width) * 2 - 1),
          (e.y = -((t - n.top) / n.height) * 2 + 1);
      });
      (this.renderer = e),
        (this.camera = s),
        (this.domElement = t),
        (this.bindEventsOnBodyElement =
          n && typeof n.bindEventsOnBodyElement < "u"
            ? n.bindEventsOnBodyElement
            : !0),
        (this.scene = n && typeof n.scene < "u" ? n.scene : null),
        this.scene &&
          (this.scene.onBeforeRender = () => {
            this.autoAdd &&
              this.scene !== null &&
              this.scene.traverse((c) => {
                this.add(c),
                  c.addEventListener("removed", (a) => {
                    this.remove(a.target);
                  });
              }),
              this.update();
          }),
        (this.autoAdd = n && typeof n.autoAdd < "u" ? n.autoAdd : !1),
        this.autoAdd &&
          this.scene === null &&
          console.error(
            "Attention: Options.scene needs to be set when using options.autoAdd"
          ),
        (this.mouse = new r(-1, 1)),
        (this.supportsPointerEvents = !!window.PointerEvent),
        (this.interactiveObjects = []),
        (this.closestObject = null),
        (this.raycaster = new m()),
        t.addEventListener("click", this.onMouseClick),
        this.supportsPointerEvents &&
          (this.bindEventsOnBodyElement
            ? t.ownerDocument.addEventListener(
                "pointermove",
                this.onDocumentPointerMove
              )
            : t.addEventListener("pointermove", this.onDocumentPointerMove),
          t.addEventListener("pointerdown", this.onPointerDown),
          t.addEventListener("pointerup", this.onPointerUp)),
        this.bindEventsOnBodyElement
          ? t.ownerDocument.addEventListener(
              "mousemove",
              this.onDocumentMouseMove
            )
          : t.addEventListener("mousemove", this.onDocumentMouseMove),
        t.addEventListener("mousedown", this.onMouseDown),
        t.addEventListener("mouseup", this.onMouseUp),
        t.addEventListener("touchstart", this.onTouchStart, { passive: !0 }),
        t.addEventListener("touchmove", this.onTouchMove, { passive: !0 }),
        t.addEventListener("touchend", this.onTouchEnd, { passive: !0 }),
        (this.treatTouchEventsAsMouseEvents = !0);
    }
  };
export { E as a };
