import {
  B as r,
  S as h,
  G as p,
  ac as l,
  L as c,
  n as d,
} from "./OrbitControls-9c9ee6bc.js";
import "./index-1453e2ee.js";
class f extends r {
  constructor(s = 1, t = 32) {
    super(),
      (this.type = "CircleLineGeometry"),
      (this.parameters = { radius: s, segmentCount: t });
    let i = new h();
    i.arc(0, 0, s, 0, 2 * Math.PI);
    let a = i.getPoints(t);
    this.setFromPoints(a);
  }
}
class y {
  constructor({ time: s }, t = {}) {
    (this.time = s),
      (this.instance = new p()),
      (this.circles = []),
      (this.options = Object.assign(
        {},
        { isPaused: !1, number: 10, radius: 10, frequency: 5, color: 16777215 },
        t
      )),
      this.init(),
      this.update();
  }
  init() {
    let { number: s, radius: t, frequency: i, color: a } = this.options;
    for (let n = 0; n < s; n++) {
      let e = new l(
        new f(t),
        new c({
          color: a,
          transparent: !0,
          depthTest: !0,
          depthWrite: !1,
          blending: d,
        })
      );
      (e.name = "CircleLine"),
        e.scale.set(0, 0, 0),
        (e._s = (n + 1) / i),
        this.circles.push(e),
        this.instance.add(e);
    }
  }
  update() {
    this.time.on("tick", () => {
      this.circles.length &&
        !this.options.isPaused &&
        this.circles.forEach((s) => {
          (s._s += 0.005),
            s.scale.set(s._s, s._s, s._s),
            (s.material.opacity = 1),
            s._s >= 1 && (s.material.opacity = 1 - (s._s - 1)),
            s._s >= 2 && (s._s = 0);
        });
    });
  }
  setParent(s) {
    s.add(this.instance);
  }
  setPosition(s) {
    this.instance.position.copy(s);
  }
  destroy() {
    this.options.isPaused = !0;
  }
}
export { y as R };
