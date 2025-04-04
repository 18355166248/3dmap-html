import {
  X as $,
  H as S,
  Y as H,
  Z as A,
  I as j,
  _ as z,
  A as X,
  h as W,
  i as q,
  $ as Z,
  m as J,
  a0 as K,
  d as Q,
  G as ee,
} from "./OrbitControls-9c9ee6bc.js";
import { M as te, R as ae } from "./index-1453e2ee.js";
import { D as re } from "./index-4ec0cc76.js";
import { s as oe } from "./stats.module-077ce25d.js";
import { _ as se } from "./_plugin-vue_export-helper-c27b6911.js";
import {
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
} from "./vue-cdn.js";
import "./lil-gui.module.min-f00c3c61.js";
class he extends $ {
  constructor(a) {
    super(a), (this.type = S);
  }
  parse(a) {
    const i = function (e, r) {
        switch (e) {
          case 1:
            throw new Error("THREE.RGBELoader: Read Error: " + (r || ""));
          case 2:
            throw new Error("THREE.RGBELoader: Write Error: " + (r || ""));
          case 3:
            throw new Error("THREE.RGBELoader: Bad File Format: " + (r || ""));
          default:
          case 4:
            throw new Error("THREE.RGBELoader: Memory Error: " + (r || ""));
        }
      },
      w = `
`,
      L = function (e, r, o) {
        r = r || 1024;
        let h = e.pos,
          l = -1,
          t = 0,
          c = "",
          s = String.fromCharCode.apply(
            null,
            new Uint16Array(e.subarray(h, h + 128))
          );
        for (; 0 > (l = s.indexOf(w)) && t < r && h < e.byteLength; )
          (c += s),
            (t += s.length),
            (h += 128),
            (s += String.fromCharCode.apply(
              null,
              new Uint16Array(e.subarray(h, h + 128))
            ));
        return -1 < l
          ? (o !== !1 && (e.pos += t + l + 1), c + s.slice(0, l))
          : !1;
      },
      m = function (e) {
        const r = /^#\?(\S+)/,
          o = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
          n = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
          h = /^\s*FORMAT=(\S+)\s*$/,
          l = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
          t = {
            valid: 0,
            string: "",
            comments: "",
            programtype: "RGBE",
            format: "",
            gamma: 1,
            exposure: 1,
            width: 0,
            height: 0,
          };
        let c, s;
        for (
          (e.pos >= e.byteLength || !(c = L(e))) && i(1, "no header found"),
            (s = c.match(r)) || i(3, "bad initial token"),
            t.valid |= 1,
            t.programtype = s[1],
            t.string +=
              c +
              `
`;
          (c = L(e)), c !== !1;

        ) {
          if (
            ((t.string +=
              c +
              `
`),
            c.charAt(0) === "#")
          ) {
            t.comments +=
              c +
              `
`;
            continue;
          }
          if (
            ((s = c.match(o)) && (t.gamma = parseFloat(s[1])),
            (s = c.match(n)) && (t.exposure = parseFloat(s[1])),
            (s = c.match(h)) && ((t.valid |= 2), (t.format = s[1])),
            (s = c.match(l)) &&
              ((t.valid |= 4),
              (t.height = parseInt(s[1], 10)),
              (t.width = parseInt(s[2], 10))),
            t.valid & 2 && t.valid & 4)
          )
            break;
        }
        return (
          t.valid & 2 || i(3, "missing format specifier"),
          t.valid & 4 || i(3, "missing image size specifier"),
          t
        );
      },
      V = function (e, r, o) {
        const n = r;
        if (n < 8 || n > 32767 || e[0] !== 2 || e[1] !== 2 || e[2] & 128)
          return new Uint8Array(e);
        n !== ((e[2] << 8) | e[3]) && i(3, "wrong scanline width");
        const h = new Uint8Array(4 * r * o);
        h.length || i(4, "unable to allocate buffer space");
        let l = 0,
          t = 0;
        const c = 4 * n,
          s = new Uint8Array(4),
          f = new Uint8Array(c);
        let N = o;
        for (; N > 0 && t < e.byteLength; ) {
          t + 4 > e.byteLength && i(1),
            (s[0] = e[t++]),
            (s[1] = e[t++]),
            (s[2] = e[t++]),
            (s[3] = e[t++]),
            (s[0] != 2 || s[1] != 2 || ((s[2] << 8) | s[3]) != n) &&
              i(3, "bad rgbe scanline format");
          let v = 0,
            g;
          for (; v < c && t < e.byteLength; ) {
            g = e[t++];
            const _ = g > 128;
            if (
              (_ && (g -= 128),
              (g === 0 || v + g > c) && i(3, "bad scanline data"),
              _)
            ) {
              const u = e[t++];
              for (let U = 0; U < g; U++) f[v++] = u;
            } else f.set(e.subarray(t, t + g), v), (v += g), (t += g);
          }
          const O = n;
          for (let _ = 0; _ < O; _++) {
            let u = 0;
            (h[l] = f[_ + u]),
              (u += n),
              (h[l + 1] = f[_ + u]),
              (u += n),
              (h[l + 2] = f[_ + u]),
              (u += n),
              (h[l + 3] = f[_ + u]),
              (l += 4);
          }
          N--;
        }
        return h;
      },
      P = function (e, r, o, n) {
        const h = e[r + 3],
          l = Math.pow(2, h - 128) / 255;
        (o[n + 0] = e[r + 0] * l),
          (o[n + 1] = e[r + 1] * l),
          (o[n + 2] = e[r + 2] * l),
          (o[n + 3] = 1);
      },
      Y = function (e, r, o, n) {
        const h = e[r + 3],
          l = Math.pow(2, h - 128) / 255;
        (o[n + 0] = A.toHalfFloat(Math.min(e[r + 0] * l, 65504))),
          (o[n + 1] = A.toHalfFloat(Math.min(e[r + 1] * l, 65504))),
          (o[n + 2] = A.toHalfFloat(Math.min(e[r + 2] * l, 65504))),
          (o[n + 3] = A.toHalfFloat(1));
      },
      G = new Uint8Array(a);
    G.pos = 0;
    const M = m(G),
      k = M.width,
      C = M.height,
      x = V(G.subarray(G.pos), k, C);
    let I, D, b;
    switch (this.type) {
      case H:
        b = x.length / 4;
        const e = new Float32Array(b * 4);
        for (let o = 0; o < b; o++) P(x, o * 4, e, o * 4);
        (I = e), (D = H);
        break;
      case S:
        b = x.length / 4;
        const r = new Uint16Array(b * 4);
        for (let o = 0; o < b; o++) Y(x, o * 4, r, o * 4);
        (I = r), (D = S);
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: k,
      height: C,
      data: I,
      header: M.string,
      gamma: M.gamma,
      exposure: M.exposure,
      type: D,
    };
  }
  setDataType(a) {
    return (this.type = a), this;
  }
  load(a, d, y, p) {
    function E(i, R) {
      switch (i.type) {
        case H:
        case S:
          (i.colorSpace = j),
            (i.minFilter = z),
            (i.magFilter = z),
            (i.generateMipmaps = !1),
            (i.flipY = !0);
          break;
      }
      d && d(i, R);
    }
    return super.load(a, E, y, p);
  }
}
const ce = "/sayhello-site/assets/腾讯云-p-4ade1840.glb",
  pe = "/sayhello-site/assets/DH-333LL-2e81134d.hdr";
class me extends te {
  constructor(a) {
    super(a), this.init();
  }
  init() {
    (this.sizes.pixelRatio = 1.5),
      this.renderer.instance.setPixelRatio(this.sizes.pixelRatio),
      this.camera.instance.position.set(
        0.4127020267749224,
        2.1472849223379193,
        10.703163188574505
      ),
      (this.camera.controls.enabled = !1),
      this.initRender(),
      this.initSetting(),
      this.initEnvironment(),
      this.initAssets(() => {
        this.initModel();
      });
  }
  initAssets(a) {
    (this.resource = new ae()),
      this.resource.addLoader(he, "RGBELoader"),
      this.resource.on("onProgress", (y, p, E) => {
        let R = ((p / E) * 100).toFixed(2) + "%!";
        console.log(R);
      }),
      this.resource.on("onLoad", () => {
        console.log("资源加载完成"), a && a();
      });
    let d = [
      { type: "GLTF", name: "txGlb", path: ce },
      { type: "RGBELoader", name: "envHdr", path: pe },
    ];
    this.resource.loadAll(d);
  }
  initEnvironment() {
    let a = new X(16777215, 2);
    this.scene.add(a);
    let d = new W(16777215, 2);
    d.position.set(10, 15, -10), (d.castShadow = !0);
    let y = new q(d, 2);
    if ((this.scene.add(d, y), this.debug.active)) {
      const p = this.debug.instance.addFolder("Environment");
      p.add(d.position, "x", -30, 30, 1),
        p.add(d.position, "y", -30, 30, 1),
        p.add(d.position, "z", -30, 30, 1),
        p.onChange((E) => {
          y.update();
        });
    }
  }
  initRender() {
    (this.renderer.instance.shadowMap.enabled = !0),
      (this.renderer.instance.shadowMap.type = Z),
      (this.renderer.instance.outputColorSpace = J);
  }
  initSetting() {
    (this.debug = new re(!0)),
      (this.stats = new oe()),
      document.body.appendChild(this.stats.dom),
      this.setAxesHelper(10);
  }
  initModel() {
    this.mouse = { x: 0, y: 0 };
    const a = this.resource.getResource("envHdr");
    (a.mapping = K), (this.scene.environment = a);
    const d = new Q({
      envMap: a,
      roughness: 0.45,
      metalness: 0.9,
      opacity: 0.5,
      transparent: !0,
    });
    if (this.debug.active) {
      const m = this.debug.instance.addFolder("HDR");
      m.add(d, "roughness", 0, 1),
        m.add(d, "metalness", 0, 1),
        m.add(d, "opacity", 0, 1),
        m
          .add(this.renderer.instance, "toneMappingExposure", 0, 2)
          .name("exposure");
    }
    let p = this.resource.getResource("txGlb").scene,
      E = ["玻璃矩形", "玻璃圆环-底座"];
    p.traverse((m) => {
      m.type === "Mesh" && E.includes(m.name) && (m.material = d);
    });
    let i = p.getObjectByName("中间小立方体"),
      R = p.getObjectByName("玻璃矩形"),
      F = p.getObjectByName("球体"),
      B = p.getObjectByName("火箭"),
      w = new ee();
    w.add(p),
      (w.position.y = -1),
      (this.group = w),
      this.scene.add(w),
      this.addEvent();
    let L = B.position.y;
    this.time.on("tick", (m) => {
      (i.rotation.y -= 0.005),
        (R.rotation.y += 0.003),
        (F.position.x = Math.cos(m / 1e3) * 2.2725),
        (F.position.z = Math.sin(m / 1e3) * 2.2725),
        (B.rotation.y += 0.004),
        B.position.setY(L + Math.cos(m / 1e3) * 0.1);
    });
  }
  handleMouseMove(a) {
    (this.mouse.x = (a.clientX / this.sizes.width) * 2 - 1),
      (this.mouse.y = -(a.clientY / this.sizes.height) * 2 + 1),
      (this.group.rotation.y = this.mouse.x * 0.1),
      (this.group.rotation.x = this.mouse.y * 0.1);
  }
  addEvent() {
    window.addEventListener("mousemove", (a) => {
      this.handleMouseMove(a);
    });
  }
  removeEvent() {
    window.removeEventListener("mousemove", (a) => {
      this.handleMouseMove(a);
    });
  }
  update() {
    super.update(), this.stats && this.stats.update(), this.removeEvent();
  }
  destroy() {
    super.destroy(),
      this.debug.destroy(),
      this.resource.destroy(),
      document.body.removeChild(this.stats.dom);
  }
}
const ge = { id: "canvas" },
  _e = {
    __name: "base02-txClound",
    setup(T) {
      let a = null;
      return (
        onMounted(() => {
          a = new me(document.getElementById("canvas"));
        }),
        onBeforeUnmount(() => {
          a && a.destroy(), console.log("destroy");
        }),
        (d, y) => (openBlock(), createElementBlock("canvas", ge))
      );
    },
  },
  Me = se(_e, [["__scopeId", "data-v-117a5331"]]);
export { Me as default };
