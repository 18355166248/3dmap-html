import { _ as Q, a as Y } from "./animate2-2f11d126.js";
import {
  reactive,
  onMounted,
  onBeforeUnmount,
  openBlock,
  createElementBlock,
  createElementVNode,
  normalizeClass,
} from "./vue-cdn.js";
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

import { Be } from "./map-animate-zj-be.js";

const _e = { class: "map-gd" };
const Ee = createElementVNode("canvas", { id: "canvas" }, null, -1);
const Ae = {
  ref: "video1",
  class: "map-gd-video map-gd-video1",
  width: "250",
  height: "100",
  loop: "",
  crossorigin: "anonymous",
  playsinline: "",
  style: { display: "none" },
};
const Te = createElementVNode("source", { src: Q }, null, -1);
const Oe = [Te];
const Fe = {
  ref: "video2",
  class: "map-gd-video map-gd-video2",
  width: "250",
  height: "100",
  loop: "",
  crossorigin: "anonymous",
  playsinline: "",
  style: { display: "none" },
};
const Re = createElementVNode("source", { src: Y }, null, -1);
const De = [Re];
const je = { class: "map-btn-group" };
const ht = {
  __name: "map-animate-zj",
  setup(_) {
    let t = null;
    const a = reactive({
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
      onMounted(() => {
        t = new Be(document.getElementById("canvas"), {
          geoProjectionCenter: [120.109913, 29.181466],
        });
      }),
      onBeforeUnmount(() => {
        t && t.destroy();
      }),
      (e, i) => (
        openBlock(),
        createElementBlock("div", _e, [
          Ee,
          createElementVNode("video", Ae, Oe, 512),
          createElementVNode("video", Fe, De, 512),
          createElementVNode("div", je, [
            createElementVNode(
              "div",
              {
                class: normalizeClass(["btn", { active: a.flyLine }]),
                onClick: i[0] || (i[0] = (r) => s("flyLine")),
              },
              " 飞线 ",
              2
            ),
            createElementVNode(
              "div",
              {
                class: normalizeClass(["btn", { active: a.scatter }]),
                onClick: i[1] || (i[1] = (r) => s("scatter")),
              },
              " 散点图 ",
              2
            ),
            createElementVNode(
              "div",
              {
                class: normalizeClass(["btn", { active: a.info }]),
                onClick: i[2] || (i[2] = (r) => s("info")),
              },
              " 重点点位 ",
              2
            ),
            createElementVNode(
              "div",
              {
                class: normalizeClass(["btn", { active: a.particle }]),
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
