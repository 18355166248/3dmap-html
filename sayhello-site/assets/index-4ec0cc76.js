import { G as i } from "./lil-gui.module.min-f00c3c61.js";
class a {
  constructor(t = !1) {
    (this.active = t),
      window.location.hash === "#debug" && (this.active = !0),
      this.active && ((this.instance = new i()), this.instance.close()),
      console.log(this.active);
  }
  update() {}
  destroy() {
    this.active && this.instance.destroy();
  }
}
export { a as D };
