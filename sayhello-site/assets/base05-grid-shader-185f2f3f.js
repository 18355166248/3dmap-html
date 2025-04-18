import { g as s } from "./OrbitControls-9c9ee6bc.js";
import { M as i } from "./index-1453e2ee.js";
import { D as o } from "./index-4ec0cc76.js";
import { G as a } from "./Grid-77f5dd1e.js";
import { s as r } from "./stats.module-077ce25d.js";
import { _ as n } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
class h extends i {
  constructor(e) {
    super(e),
      (this.scene.fog = new s(0, 1, 100)),
      (this.scene.background = 0),
      this.camera.instance.position.set(
        31.654053063076066,
        18.17832104360899,
        31.654053063096544
      ),
      (this.camera.instance.near = 1),
      (this.camera.instance.far = 1e4),
      this.camera.instance.updateProjectionMatrix(),
      this.initSetting(),
      this.initModel();
  }
  initSetting() {
    (this.debug = new o(!0)),
      (this.stats = new r()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10);
  }
  initModel() {
    new a(this, {
      gridSize: 100,
      gridDivision: 20,
      gridColor: 2635578,
      shapeSize: 1,
      shapeColor: 9345950,
      pointSize: 0.2,
      pointColor: 2635578,
      diffuse: !0,
    });
  }
  update() {
    super.update(), this.stats && this.stats.update();
  }
  destroy() {
    super.destroy(),
      this.debug.destroy(),
      document.body.removeChild(this.stats.dom);
  }
}
const u = { id: "canvas" },
  _ = {
    __name: "base05-grid-shader",
    setup(t) {
      let e = null;
      return (
        onMounted(() => {
          e = new h(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          e && e.destroy();
        }),
        (l, f) => (openBlock(), createElementBlock("canvas", u))
      );
    },
  },
  C = n(_, [["__scopeId", "data-v-946c9f9f"]]);
export { C as default };
