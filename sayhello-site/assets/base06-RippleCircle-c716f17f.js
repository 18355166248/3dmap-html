import { V as c } from "./OrbitControls-9c9ee6bc.js";
import { M as a } from "./index-1453e2ee.js";
import { R as s } from "./RippleCirle-e198a9fe.js";
import { _ as l } from "./_plugin-vue_export-helper-c27b6911.js";
import { g as i, h as p, o as u, c as d } from "./index-d838a7bb.js";
class _ extends a {
  constructor(e) {
    super(e), this.camera.instance.position.set(0, 0, 300), this.initModel();
  }
  initModel() {
    [
      { frequency: 16, color: 65535 },
      { frequency: 12, color: 65280 },
      { frequency: 10, color: 16776960 },
      { frequency: 5, color: 65535 },
      { frequency: 2, color: 65280 },
      { frequency: 1, color: 16776960 },
    ].forEach((r, f) => {
      let o = new s(this, {
        number: 10,
        radius: 10,
        frequency: r.frequency,
        color: r.color,
      });
      o.setParent(this.scene), o.setPosition(new c(40 * f - 100, 0, 0));
    }),
      [
        { frequency: 10, color: 65535 },
        { frequency: 5, color: 65280 },
        { frequency: 4, color: 16776960 },
        { frequency: 3, color: 65535 },
        { frequency: 2, color: 65280 },
        { frequency: 1, color: 16776960 },
      ].forEach((r, f) => {
        let o = new s(this, {
          number: 2,
          radius: 3,
          frequency: r.frequency,
          color: r.color,
        });
        o.setParent(this.scene), o.setPosition(new c(40 * f - 100, 40, 0));
      });
  }
  update() {
    super.update(), this.stats && this.stats.update();
  }
  destroy() {
    super.destroy();
  }
}
const m = { id: "canvas" },
  y = {
    __name: "base06-RippleCircle",
    setup(t) {
      let e = null;
      return (
        i(() => {
          e = new _(document.getElementById("canvas"));
        }),
        p(() => {
          e && e.destroy();
        }),
        (n, r) => (u(), d("canvas", m))
      );
    },
  },
  b = l(y, [["__scopeId", "data-v-1cf70de7"]]);
export { b as default };
