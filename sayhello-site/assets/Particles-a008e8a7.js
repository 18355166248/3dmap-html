import {
  p as m,
  n as b,
  B as x,
  a2 as p,
  t as v,
  a6 as w,
} from "./OrbitControls-9c9ee6bc.js";
class f {
  constructor({ time: e }, n = {}) {
    (this.instance = null),
      (this.time = e),
      (this.enable = !0),
      (this.config = Object.assign(
        {
          num: 100,
          range: 500,
          speed: 0.01,
          renderOrder: 99,
          dir: "up",
          material: new m({
            map: f.createTexture(),
            size: 20,
            color: 16777215,
            transparent: !0,
            opacity: 1,
            depthTest: !1,
            vertexColors: !0,
            blending: b,
            sizeAttenuation: !0,
          }),
        },
        n
      )),
      this.create();
  }
  create() {
    const {
        range: e,
        speed: n,
        dir: r,
        material: c,
        num: g,
        renderOrder: d,
      } = this.config,
      s = [],
      a = [],
      h = [];
    for (let u = 0; u < g; u++) {
      s.push(
        Math.random() * e - e / 2,
        Math.random() * e - e / 2,
        Math.random() * e - e / 2
      );
      let i = r === "up" ? 1 : -1;
      h.push(
        Math.random() * i,
        (0.1 + Math.random()) * i,
        0.1 + Math.random() * i
      );
      const o = c.color.clone();
      let l = {};
      o.getHSL(l),
        o.setHSL(l.h, l.s, l.l * Math.random()),
        a.push(o.r, o.g, o.b);
    }
    const t = new x();
    t.setAttribute("position", new p(new Float32Array(s), 3)),
      t.setAttribute("velocities", new p(new Float32Array(h), 3)),
      t.setAttribute("color", new p(new Float32Array(a), 3)),
      (this.instance = new v(t, c)),
      console.log(t),
      (this.instance.renderOrder = d);
  }
  static createTexture() {
    let e = document.createElement("canvas");
    (e.width = 1024), (e.height = 1024);
    let n = e.getContext("2d"),
      r = n.createRadialGradient(512, 512, 0, 512, 512, 512);
    return (
      r.addColorStop(0, "rgba(255,255,255,1)"),
      r.addColorStop(1, "rgba(255,255,255,0)"),
      (n.fillStyle = r),
      n.fillRect(0, 0, 1024, 1024),
      new w(e)
    );
  }
  update(e, n) {
    if (!this.instance) return !1;
    const { range: r, speed: c, dir: g } = this.config;
    let d = g === "up" ? 1 : -1,
      s = this.instance.geometry.getAttribute("position"),
      a = this.instance.geometry.getAttribute("velocities");
    const h = s.count;
    for (let t = 0; t < h; t++) {
      let u = s.getX(t);
      s.getY(t);
      let i = s.getZ(t),
        o = a.getX(t),
        l = a.getY(t);
      a.getZ(t),
        (u += Math.sin(o * n) * e),
        (i += c * d),
        i > r / 2 && d === 1 && (i = -r / 2),
        i < -r / 2 && d == -1 && (i = r / 2),
        s.setX(t, u),
        s.setZ(t, i),
        a.setX(t, o),
        a.setY(t, l);
    }
    (s.needsUpdate = !0), (a.needsUpdate = !0);
  }
  setParent(e) {
    e.add(this.instance),
      this.time.on("tick", (n, r) => {
        this.enable && this.update(n, r);
      });
  }
}
export { f as P };
