import {
  F as s,
  P as o,
  R as r,
  T as i,
  W as p,
  a as h,
  b as g,
} from "./SimplePeople_FireFighter_Black-4e915471.js";
import { p as l, n as m, a as F, b as u, c, d as y } from "./negz-6d72d730.js";
import { R as x } from "./index-1453e2ee.js";
import { F as d } from "./FBXLoader-a384905d.js";
class R {
  constructor(e = null) {
    (this.onLoadCallback = e), this.init();
  }
  init() {
    (this.instance = new x()),
      this.instance.addLoader(d, "FBXLoader"),
      this.instance.on("onProgress", (B, a, t) => {
        let n = ((a / t) * 100).toFixed(2) + "%!";
        console.log(n);
      }),
      this.instance.on("onLoad", () => {
        console.log("资源加载完成"),
          this.onLoadCallback && this.onLoadCallback();
      });
    let e = [
      { type: "FBX", name: "FireFighter", path: s },
      { type: "FBX", name: "PointingGesture", path: o },
      { type: "FBX", name: "Running", path: r },
      { type: "FBX", name: "Turn", path: i },
      { type: "FBX", name: "Walking", path: p },
      { type: "FBX", name: "WalkingBackwards", path: h },
      { type: "Texture", name: "FireFighterTexture", path: g },
      { type: "Texture", name: "posx", path: l },
      { type: "Texture", name: "negx", path: m },
      { type: "Texture", name: "posy", path: F },
      { type: "Texture", name: "negy", path: u },
      { type: "Texture", name: "posz", path: c },
      { type: "Texture", name: "negz", path: y },
    ];
    this.instance.loadAll(e);
  }
}
export { R as A };
