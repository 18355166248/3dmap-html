import * as Vue from "./vue-cdn.js";
import * as VueRouter from "./vue-router.esm-browser.js";
console.log("🚀 ~ Vue:", Vue);

(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = n(r);
    fetch(r.href, o);
  }
})();

// vue 插槽

const Jl = "modulepreload",
  Yl = function (e) {
    return "/sayhello-site/" + e;
  },
  Xs = {},
  I = function (t, n, s) {
    if (!n || n.length === 0) return t();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      n.map((o) => {
        if (((o = Yl(o)), o in Xs)) return;
        Xs[o] = !0;
        const i = o.endsWith(".css"),
          c = i ? '[rel="stylesheet"]' : "";
        if (!!s)
          for (let d = r.length - 1; d >= 0; d--) {
            const h = r[d];
            if (h.href === o && (!i || h.rel === "stylesheet")) return;
          }
        else if (document.querySelector(`link[href="${o}"]${c}`)) return;
        const f = document.createElement("link");
        if (
          ((f.rel = i ? "stylesheet" : Jl),
          i || ((f.as = "script"), (f.crossOrigin = "")),
          (f.href = o),
          document.head.appendChild(f),
          i)
        )
          return new Promise((d, h) => {
            f.addEventListener("load", d),
              f.addEventListener("error", () =>
                h(new Error(`Unable to preload CSS for ${o}`))
              );
          });
      })
    ).then(() => t());
  };

function su(e) {
  const t = e.lastIndexOf("/"),
    n = e.substring(t + 1),
    s = e.substring(0, t),
    r = n.substring(0, n.lastIndexOf(".")),
    o = e.substring(e.lastIndexOf(".") + 1);
  return { file: n, url: s, name: r, ext: o };
}
function ru(e = ["base"]) {
  const t = Object.assign({
    "../views/base/base01-ball.vue": () =>
      I(
        () => import("./base01-ball-fbd7480b.js"),
        [
          "assets/base01-ball-fbd7480b.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-4db78ffb.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/base01-ball-9c7bd118.css",
        ]
      ),
    "../views/base/base02-txClound.vue": () =>
      I(
        () => import("./base02-txClound-9ecdebc8.js"),
        [
          "assets/base02-txClound-9ecdebc8.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/base02-txClound-40549bf4.css",
        ]
      ),
    "../views/base/base03-yuka.vue": () =>
      I(
        () => import("./base03-yuka-23551db1.js"),
        [
          "assets/base03-yuka-23551db1.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/base03-yuka-2b55cfd8.css",
        ]
      ),
    "../views/base/base04-grid.vue": () =>
      I(
        () => import("./base04-grid-d649a10b.js"),
        [
          "assets/base04-grid-d649a10b.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/base04-grid-ba665d97.css",
        ]
      ),
    "../views/base/base05-grid-shader.vue": () =>
      I(
        () => import("./base05-grid-shader-185f2f3f.js"),
        [
          "assets/base05-grid-shader-185f2f3f.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/Grid-77f5dd1e.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/base05-grid-shader-c76a27ac.css",
        ]
      ),
    "../views/base/base06-RippleCircle.vue": () =>
      I(
        () => import("./base06-RippleCircle-79cae7e3.js"),
        [
          "assets/base06-RippleCircle-79cae7e3.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/RippleCirle-e198a9fe.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/base06-RippleCircle-52b2661b.css",
        ]
      ),
    "../views/base/base07-heatmap.vue": () =>
      I(
        () => import("./base07-heatmap-e9df8d6b.js"),
        [
          "assets/base07-heatmap-e9df8d6b.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/heatmap.min-eb3a4a51.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/base07-heatmap-66d44529.css",
        ]
      ),
    "../views/base/base08-global.vue": () =>
      I(
        () => import("./base08-global-ae8c53e4.js"),
        [
          "assets/base08-global-ae8c53e4.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/base08-global-15857bdd.css",
        ]
      ),
    "../views/base/base10-focus.vue": () =>
      I(
        () => import("./base10-focus-d7cc51a8.js"),
        [
          "assets/base10-focus-d7cc51a8.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/Grid-77f5dd1e.js",
          "assets/index-4db78ffb.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/base10-focus-e5b3fceb.css",
        ]
      ),
    "../views/city/city.vue": () =>
      I(
        () => import("./city-db1a1496.js"),
        [
          "assets/city-db1a1496.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/SkyBox-813c1e20.js",
          "assets/stats.module-077ce25d.js",
          "assets/negz-6d72d730.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/city-821776c5.css",
        ]
      ),
    "../views/earth/earth01.vue": () =>
      I(
        () => import("./earth01-bc894cc3.js"),
        [
          "assets/earth01-bc894cc3.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/earth01-c7685cf4.css",
        ]
      ),
    "../views/earth/earth02.vue": () =>
      I(
        () => import("./earth02-c0188675.js"),
        [
          "assets/earth02-c0188675.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/光柱-48fdbf5f.js",
          "assets/index-4db78ffb.js",
          "assets/RippleCirle-e198a9fe.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/earth02-23af4786.css",
        ]
      ),
    "../views/earth/earth03.vue": () =>
      I(
        () => import("./earth03-59a856e3.js"),
        [
          "assets/earth03-59a856e3.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-1003c0d2.js",
          "assets/光柱-48fdbf5f.js",
          "assets/index-4db78ffb.js",
          "assets/RippleCirle-e198a9fe.js",
          "assets/stats.module-077ce25d.js",
          "assets/flyLine2-e7135ba7.js",
          "assets/pathLine2-dee41061.js",
          "assets/uv-77714551.js",
          "assets/three.interactive-c6512469.js",
          "assets/index-5b3afbff.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/earth03-b32c1ecf.css",
        ]
      ),
    "../views/earth/earth04.vue": () =>
      I(
        () => import("./earth04-09762202.js"),
        [
          "assets/earth04-09762202.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-1003c0d2.js",
          "assets/光柱-48fdbf5f.js",
          "assets/index-4db78ffb.js",
          "assets/RippleCirle-e198a9fe.js",
          "assets/stats.module-077ce25d.js",
          "assets/gradient-c3ffacd2.js",
          "assets/flyLine2-e7135ba7.js",
          "assets/pathLine2-dee41061.js",
          "assets/uv-77714551.js",
          "assets/three.interactive-c6512469.js",
          "assets/index-5b3afbff.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/earth04-b96ce601.css",
        ]
      ),
    "../views/earth/earth05.vue": () =>
      I(
        () => import("./earth05-063389f8.js"),
        [
          "assets/earth05-063389f8.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-1003c0d2.js",
          "assets/光柱-48fdbf5f.js",
          "assets/index-4db78ffb.js",
          "assets/RippleCirle-e198a9fe.js",
          "assets/stats.module-077ce25d.js",
          "assets/gradient-c3ffacd2.js",
          "assets/flyLine2-e7135ba7.js",
          "assets/pathLine2-dee41061.js",
          "assets/uv-77714551.js",
          "assets/cloud-855dcc12.js",
          "assets/three.interactive-c6512469.js",
          "assets/index-5b3afbff.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/earth05-81f6f304.css",
        ]
      ),
    "../views/earth/earth06.vue": () =>
      I(
        () => import("./earth06-439be118.js"),
        [
          "assets/earth06-439be118.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-1003c0d2.js",
          "assets/光柱-48fdbf5f.js",
          "assets/index-4db78ffb.js",
          "assets/RippleCirle-e198a9fe.js",
          "assets/gradient-c3ffacd2.js",
          "assets/flyLine2-e7135ba7.js",
          "assets/pathLine2-dee41061.js",
          "assets/uv-77714551.js",
          "assets/cloud-855dcc12.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/ocean-bg-19f8644c.js",
          "assets/point1-7bb35866.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/three.interactive-c6512469.js",
          "assets/index-5b3afbff.js",
          "assets/Label3d-1a598e21.js",
          "assets/GradientShader-7cc661aa.js",
          "assets/Line2-7598ed88.js",
          "assets/earth06-bee724dd.css",
        ]
      ),
    "../views/earth/earth07.vue": () =>
      I(
        () => import("./earth07-25c0f648.js"),
        [
          "assets/earth07-25c0f648.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/Label3d-1a598e21.js",
          "assets/index-4db78ffb.js",
          "assets/pathLine-9a4e7519.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/ocean-blue-bg-49e3ac50.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/grid-3e023ca8.js",
          "assets/gaoguang2-46d4de0f.js",
          "assets/flyLine2-e7135ba7.js",
          "assets/arrow-8777f461.js",
          "assets/pathLine2-dee41061.js",
          "assets/pathLine4-99db6c46.js",
          "assets/Line2-7598ed88.js",
          "assets/three.interactive-c6512469.js",
          "assets/earth07-45eef52c.css",
        ]
      ),
    "../views/home/index.vue": () =>
      I(
        () => import("./index-d126fab8.js"),
        [
          "assets/index-d126fab8.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/index-f9f02625.css",
        ]
      ),
    "../views/map-animate/map-animate-china-level.vue": () =>
      I(
        () => import("./map-animate-china-level-894f28d9.js"),
        [
          "assets/map-animate-china-level-894f28d9.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/Label3d-1a598e21.js",
          "assets/GradientShader-7cc661aa.js",
          "assets/Particles-a008e8a7.js",
          "assets/index-4db78ffb.js",
          "assets/stats.module-077ce25d.js",
          "assets/pathLine-9a4e7519.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/top_surface_normal_map2-a65ff1bb.js",
          "assets/ocean-blue-bg-49e3ac50.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/grid-3e023ca8.js",
          "assets/flyLine2-e7135ba7.js",
          "assets/arrow-8777f461.js",
          "assets/pathLine2-dee41061.js",
          "assets/pathLine4-99db6c46.js",
          "assets/point1-7bb35866.js",
          "assets/szxs_logo-02219344.js",
          "assets/label-arrow-b5ffbd19.js",
          "assets/three.interactive-c6512469.js",
          "assets/GC-b02a3dbf.js",
          "assets/map-animate-china-level-df521079.css",
        ]
      ),
    "../views/map-animate/map-animate-china.vue": () =>
      I(
        () => import("./map-animate-china-a4daa7c7.js"),
        [
          "assets/map-animate-china-a4daa7c7.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/Label3d-1a598e21.js",
          "assets/GradientShader-7cc661aa.js",
          "assets/Particles-a008e8a7.js",
          "assets/index-4db78ffb.js",
          "assets/pathLine-9a4e7519.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/top_surface_normal_map2-a65ff1bb.js",
          "assets/ocean-blue-bg-49e3ac50.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/grid-3e023ca8.js",
          "assets/gaoguang2-46d4de0f.js",
          "assets/flyLine2-e7135ba7.js",
          "assets/arrow-8777f461.js",
          "assets/pathLine2-dee41061.js",
          "assets/pathLine4-99db6c46.js",
          "assets/szxs_logo-02219344.js",
          "assets/Line2-7598ed88.js",
          "assets/label-arrow-b5ffbd19.js",
          "assets/three.interactive-c6512469.js",
          "assets/map-animate-china-d6ff3a35.css",
        ]
      ),
    "../views/map-animate/map-animate-common.vue": () =>
      I(
        () => import("./map-animate-common-73d22202.js"),
        [
          "assets/map-animate-common-73d22202.js",
          "assets/animate2-2f11d126.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/Grid-77f5dd1e.js",
          "assets/Label3d-1a598e21.js",
          "assets/GradientShader-7cc661aa.js",
          "assets/Particles-a008e8a7.js",
          "assets/index-4db78ffb.js",
          "assets/infoData-7934851e.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/ocean-blue-bg-49e3ac50.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/szxs_logo-02219344.js",
          "assets/flyLine2-e7135ba7.js",
          "assets/pathLine2-dee41061.js",
          "assets/arrow-8777f461.js",
          "assets/point1-7bb35866.js",
          "assets/Line2-7598ed88.js",
          "assets/label-icon-aa0c6fbf.js",
          "assets/three.interactive-c6512469.js",
          "assets/heatmap.min-eb3a4a51.js",
          "assets/map-animate-gd2-36bd072b.css",
        ]
      ),
    "../views/map-animate/map-animate-fj.vue": () =>
      I(
        () => import("./map-animate-fj-53113e8b.js"),
        [
          "assets/map-animate-fj-53113e8b.js",
          "assets/index-4db78ffb.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/Label3d-1a598e21.js",
          "assets/GradientShader-7cc661aa.js",
          "assets/Particles-a008e8a7.js",
          "assets/pathLine-9a4e7519.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/ocean-blue-bg-49e3ac50.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/grid-3e023ca8.js",
          "assets/gaoguang2-46d4de0f.js",
          "assets/arrow-8777f461.js",
          "assets/pathLine2-dee41061.js",
          "assets/Line2-7598ed88.js",
          "assets/label-icon-aa0c6fbf.js",
          "assets/label-arrow-b5ffbd19.js",
          "assets/RenderPass-5ccd0f1e.js",
          "assets/three.interactive-c6512469.js",
          "assets/map-animate-fj-f251e81a.css",
        ]
      ),
    "../views/map-animate/map-animate-gd.vue": () =>
      I(
        () => import("./map-animate-gd-d5f883e3.js"),
        [
          "assets/map-animate-gd-d5f883e3.js",
          "assets/animate2-2f11d126.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/Grid-77f5dd1e.js",
          "assets/Label3d-1a598e21.js",
          "assets/utils-9af1928d.js",
          "assets/GradientShader-7cc661aa.js",
          "assets/index-4db78ffb.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/ocean-bg-19f8644c.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/szxs_logo-02219344.js",
          "assets/Line2-7598ed88.js",
          "assets/label-icon-aa0c6fbf.js",
          "assets/RenderPass-5ccd0f1e.js",
          "assets/three.interactive-c6512469.js",
          "assets/map-animate-gd-b3192dad.css",
        ]
      ),
    "../views/map-animate/map-animate-gd2.vue": () =>
      I(
        () => import("./map-animate-gd2-04b99451.js"),
        [
          "assets/map-animate-gd2-04b99451.js",
          "assets/animate2-2f11d126.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/Grid-77f5dd1e.js",
          "assets/Label3d-1a598e21.js",
          "assets/GradientShader-7cc661aa.js",
          "assets/Particles-a008e8a7.js",
          "assets/index-4db78ffb.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/ocean-bg-19f8644c.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/szxs_logo-02219344.js",
          "assets/flyLine2-e7135ba7.js",
          "assets/pathLine2-dee41061.js",
          "assets/arrow-8777f461.js",
          "assets/point1-7bb35866.js",
          "assets/Line2-7598ed88.js",
          "assets/label-icon-aa0c6fbf.js",
          "assets/three.interactive-c6512469.js",
          "assets/heatmap.min-eb3a4a51.js",
          "assets/map-animate-gd2-36bd072b.css",
        ]
      ),
    "../views/map-animate/map-animate-uv.vue": () =>
      I(
        () => import("./map-animate-uv-030c5b50.js"),
        [
          "assets/map-animate-uv-030c5b50.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/ocean-bg-19f8644c.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/uv-77714551.js",
          "assets/Line2-7598ed88.js",
          "assets/map-animate-uv-32e76ba1.css",
        ]
      ),
    "../views/map-animate/map-animate-zj.vue": () =>
      I(
        () => import("./map-animate-zj-24f411fd.js"),
        [
          "assets/map-animate-zj-24f411fd.js",
          "assets/animate2-2f11d126.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/Grid-77f5dd1e.js",
          "assets/Label3d-1a598e21.js",
          "assets/GradientShader-7cc661aa.js",
          "assets/Particles-a008e8a7.js",
          "assets/index-4db78ffb.js",
          "assets/infoData-7934851e.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/ocean-blue-bg-49e3ac50.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/szxs_logo-02219344.js",
          "assets/flyLine2-e7135ba7.js",
          "assets/pathLine2-dee41061.js",
          "assets/arrow-8777f461.js",
          "assets/point1-7bb35866.js",
          "assets/Line2-7598ed88.js",
          "assets/label-icon-aa0c6fbf.js",
          "assets/three.interactive-c6512469.js",
          "assets/heatmap.min-eb3a4a51.js",
          "assets/map-animate-gd2-36bd072b.css",
        ]
      ),
    "../views/map/map-gd.vue": () =>
      I(
        () => import("./map-gd-db18bfa8.js"),
        [
          "assets/map-gd-db18bfa8.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/Grid-77f5dd1e.js",
          "assets/Label3d-1a598e21.js",
          "assets/utils-9af1928d.js",
          "assets/GradientShader-7cc661aa.js",
          "assets/stats.module-077ce25d.js",
          "assets/line-0fbbd871.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/ocean-bg-19f8644c.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/uv-77714551.js",
          "assets/Line2-7598ed88.js",
          "assets/label-icon-aa0c6fbf.js",
          "assets/RenderPass-5ccd0f1e.js",
          "assets/map-gd-a982abb7.css",
        ]
      ),
    "../views/map/map-uv.vue": () =>
      I(
        () => import("./map-uv-accf17ba.js"),
        [
          "assets/map-uv-accf17ba.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/utils-9af1928d.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/line-0fbbd871.js",
          "assets/chinaBlurLine-b7b06be6.js",
          "assets/ocean-bg-19f8644c.js",
          "assets/rotationBorder1-447bf02a.js",
          "assets/rotationBorder2-a143eae0.js",
          "assets/uv-77714551.js",
          "assets/Line2-7598ed88.js",
          "assets/map-animate-uv-32e76ba1.css",
        ]
      ),
    "../views/particle/particle01-model.vue": () =>
      I(
        () => import("./particle01-model-7969dce9.js"),
        [
          "assets/particle01-model-7969dce9.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-4db78ffb.js",
          "assets/RenderPass-5ccd0f1e.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/particle01-model-0642a92e.css",
        ]
      ),
    "../views/pie/pie-1.vue": () =>
      I(
        () => import("./pie-1-a36521a7.js"),
        [
          "assets/pie-1-a36521a7.js",
          "assets/pie-22bbf70e.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/stats.module-077ce25d.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/pie-1-cc7136c4.css",
        ]
      ),
    "../views/pie/pie-ring.vue": () =>
      I(
        () => import("./pie-ring-14f2e20c.js"),
        [
          "assets/pie-ring-14f2e20c.js",
          "assets/pie-22bbf70e.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/stats.module-077ce25d.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/pie-ring-65926dbc.css",
        ]
      ),
    "../views/player/player01-animate.vue": () =>
      I(
        () => import("./player01-animate-0713d6ba.js"),
        [
          "assets/player01-animate-0713d6ba.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/assets-69a369a5.js",
          "assets/SimplePeople_FireFighter_Black-4e915471.js",
          "assets/negz-6d72d730.js",
          "assets/FBXLoader-a384905d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/player01-animate-35edd390.css",
        ]
      ),
    "../views/player/player02-animate-change.vue": () =>
      I(
        () => import("./player02-animate-change-dafa0ae7.js"),
        [
          "assets/player02-animate-change-dafa0ae7.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/assets-69a369a5.js",
          "assets/SimplePeople_FireFighter_Black-4e915471.js",
          "assets/negz-6d72d730.js",
          "assets/FBXLoader-a384905d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/player02-animate-change-f3053ccf.css",
        ]
      ),
    "../views/player/player03-action-multi-fbx.vue": () =>
      I(
        () => import("./player03-action-multi-fbx-fc239524.js"),
        [
          "assets/player03-action-multi-fbx-fc239524.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-14e47768.js",
          "assets/stats.module-077ce25d.js",
          "assets/assets-69a369a5.js",
          "assets/SimplePeople_FireFighter_Black-4e915471.js",
          "assets/negz-6d72d730.js",
          "assets/FBXLoader-a384905d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/player03-action-multi-fbx-97bf2414.css",
        ]
      ),
    "../views/player/player04-action-glb.vue": () =>
      I(
        () => import("./player04-action-glb-0750b5cd.js"),
        [
          "assets/player04-action-glb-0750b5cd.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-14e47768.js",
          "assets/stats.module-077ce25d.js",
          "assets/negz-6d72d730.js",
          "assets/FBXLoader-a384905d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/player04-action-glb-a33c19eb.css",
        ]
      ),
    "../views/player/player05-move-camera.vue": () =>
      I(
        () => import("./player05-move-camera-2120825b.js"),
        [
          "assets/player05-move-camera-2120825b.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-14e47768.js",
          "assets/stats.module-077ce25d.js",
          "assets/assets-69a369a5.js",
          "assets/SimplePeople_FireFighter_Black-4e915471.js",
          "assets/negz-6d72d730.js",
          "assets/FBXLoader-a384905d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/player05-move-camera-776aafd0.css",
        ]
      ),
    "../views/player/player05-move-raycaster.vue": () =>
      I(
        () => import("./player05-move-raycaster-b5c4c9a1.js"),
        [
          "assets/player05-move-raycaster-b5c4c9a1.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-14e47768.js",
          "assets/stats.module-077ce25d.js",
          "assets/assets-69a369a5.js",
          "assets/SimplePeople_FireFighter_Black-4e915471.js",
          "assets/negz-6d72d730.js",
          "assets/FBXLoader-a384905d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/player05-move-raycaster-96a7592d.css",
        ]
      ),
    "../views/player/player06-move-navmesh.vue": () =>
      I(
        () => import("./player06-move-navmesh-1fe43088.js"),
        [
          "assets/player06-move-navmesh-1fe43088.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-14e47768.js",
          "assets/stats.module-077ce25d.js",
          "assets/SimplePeople_FireFighter_Black-4e915471.js",
          "assets/negz-6d72d730.js",
          "assets/FBXLoader-a384905d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/player06-move-navmesh-d1ca1acc.css",
        ]
      ),
    "../views/post/post-bloom-outline.vue": () =>
      I(
        () => import("./post-bloom-outline-2d4298d0.js"),
        [
          "assets/post-bloom-outline-2d4298d0.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/SkyBox-813c1e20.js",
          "assets/stats.module-077ce25d.js",
          "assets/posz-6460875f.js",
          "assets/index-5b3afbff.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/post-bloom-outline-a1e79ef3.css",
        ]
      ),
    "../views/post/post-bloom.vue": () =>
      I(
        () => import("./post-bloom-4dcf8299.js"),
        [
          "assets/post-bloom-4dcf8299.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/SkyBox-813c1e20.js",
          "assets/stats.module-077ce25d.js",
          "assets/posz-6460875f.js",
          "assets/index-5b3afbff.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/post-bloom-6eeee356.css",
        ]
      ),
    "../views/post/post-outline.vue": () =>
      I(
        () => import("./post-outline-9f41a78e.js"),
        [
          "assets/post-outline-9f41a78e.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/SkyBox-813c1e20.js",
          "assets/stats.module-077ce25d.js",
          "assets/index-5b3afbff.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/post-outline-42791f72.css",
        ]
      ),
    "../views/shader/shader01.vue": () =>
      I(
        () => import("./shader01-0eff0b1c.js"),
        [
          "assets/shader01-0eff0b1c.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/shader01-46b7c8aa.css",
        ]
      ),
    "../views/shader/shader02.vue": () =>
      I(
        () => import("./shader02-3a574805.js"),
        [
          "assets/shader02-3a574805.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/flag-5ab43538.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/shader02-6922302b.css",
        ]
      ),
    "../views/shader/shader03-dissolve.vue": () =>
      I(
        () => import("./shader03-dissolve-9e2e125a.js"),
        [
          "assets/shader03-dissolve-9e2e125a.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/flag-5ab43538.js",
          "assets/RenderPass-5ccd0f1e.js",
          "assets/index-4db78ffb.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/shader03-dissolve-9fd55f46.css",
        ]
      ),
    "../views/shader/shader04-glow.vue": () =>
      I(
        () => import("./shader04-glow-b0711ed6.js"),
        [
          "assets/shader04-glow-b0711ed6.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/shader04-glow-912fc666.css",
        ]
      ),
    "../views/shader/shader05-shield.vue": () =>
      I(
        () => import("./shader05-shield-fefbfcf5.js"),
        [
          "assets/shader05-shield-fefbfcf5.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/grid-3e023ca8.js",
          "assets/uv-77714551.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/shader05-shield-13217911.css",
        ]
      ),
    "../views/shader/shader06-nosie.vue": () =>
      I(
        () => import("./shader06-nosie-2e490a60.js"),
        [
          "assets/shader06-nosie-2e490a60.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-4db78ffb.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/shader06-nosie-dadf3970.css",
        ]
      ),
    "../views/shader/shader08-cursorline.vue": () =>
      I(
        () => import("./shader08-cursorline-ddcf24bf.js"),
        [
          "assets/shader08-cursorline-ddcf24bf.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/shader08-cursorline-7beaccc5.css",
        ]
      ),
    "../views/shader/shader09-borderline.vue": () =>
      I(
        () => import("./shader09-borderline-4e83beaa.js"),
        [
          "assets/shader09-borderline-4e83beaa.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-4db78ffb.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/shader09-borderline-8d1ae1f7.css",
        ]
      ),
    "../views/shader/shader10-neonline.vue": () =>
      I(
        () => import("./shader10-neonline-26806861.js"),
        [
          "assets/shader10-neonline-26806861.js",
          "assets/OrbitControls-9c9ee6bc.js",
          "assets/index-1453e2ee.js",
          "assets/index-4ec0cc76.js",
          "assets/lil-gui.module.min-f00c3c61.js",
          "assets/index-4db78ffb.js",
          "assets/GC-b02a3dbf.js",
          "assets/stats.module-077ce25d.js",
          "assets/_plugin-vue_export-helper-c27b6911.js",
          "assets/shader10-neonline-d7ee258f.css",
        ]
      ),
  });
  let n = [];
  for (const r in t) {
    let o = t[r],
      i = su(r),
      c = { path: i.name, name: i.name, component: o };
    n.push(c);
  }
  return e.map((r) => {
    let o = { name: r, path: "/" + r, redirect: "", children: [] };
    return (
      (o.children = n.filter((i) => !!new RegExp(`^${r}`).exec(i.name))),
      o.children[0] && (o.redirect = `/${r}/${o.children[0].path}`),
      o
    );
  });
}
const ou = [
  "base",
  "city",
  "player",
  "shader",
  "earth",
  "map-animate",
  "pie",
  "particle",
  "post",
];
ru(ou);
const mr = () =>
    I(
      () => import("./map-animate-gd2-04b99451.js"),
      [
        "assets/map-animate-gd2-04b99451.js",
        "assets/animate2-2f11d126.js",
        "assets/OrbitControls-9c9ee6bc.js",
        "assets/index-1453e2ee.js",
        "assets/utils-9af1928d.js",
        "assets/index-4ec0cc76.js",
        "assets/lil-gui.module.min-f00c3c61.js",
        "assets/Grid-77f5dd1e.js",
        "assets/Label3d-1a598e21.js",
        "assets/GradientShader-7cc661aa.js",
        "assets/Particles-a008e8a7.js",
        "assets/index-4db78ffb.js",
        "assets/chinaBlurLine-b7b06be6.js",
        "assets/ocean-bg-19f8644c.js",
        "assets/rotationBorder1-447bf02a.js",
        "assets/rotationBorder2-a143eae0.js",
        "assets/szxs_logo-02219344.js",
        "assets/flyLine2-e7135ba7.js",
        "assets/pathLine2-dee41061.js",
        "assets/arrow-8777f461.js",
        "assets/point1-7bb35866.js",
        "assets/Line2-7598ed88.js",
        "assets/label-icon-aa0c6fbf.js",
        "assets/three.interactive-c6512469.js",
        "assets/heatmap.min-eb3a4a51.js",
        "assets/map-animate-gd2-36bd072b.css",
      ]
    ),
  iu = () =>
    I(
      () => import("./map-animate-zj-24f411fd.js"),
      [
        "assets/map-animate-zj-24f411fd.js",
        "assets/animate2-2f11d126.js",
        "assets/OrbitControls-9c9ee6bc.js",
        "assets/index-1453e2ee.js",
        "assets/utils-9af1928d.js",
        "assets/index-4ec0cc76.js",
        "assets/lil-gui.module.min-f00c3c61.js",
        "assets/Grid-77f5dd1e.js",
        "assets/Label3d-1a598e21.js",
        "assets/GradientShader-7cc661aa.js",
        "assets/Particles-a008e8a7.js",
        "assets/index-4db78ffb.js",
        "assets/infoData-7934851e.js",
        "assets/chinaBlurLine-b7b06be6.js",
        "assets/ocean-blue-bg-49e3ac50.js",
        "assets/rotationBorder1-447bf02a.js",
        "assets/rotationBorder2-a143eae0.js",
        "assets/szxs_logo-02219344.js",
        "assets/flyLine2-e7135ba7.js",
        "assets/pathLine2-dee41061.js",
        "assets/arrow-8777f461.js",
        "assets/point1-7bb35866.js",
        "assets/Line2-7598ed88.js",
        "assets/label-icon-aa0c6fbf.js",
        "assets/three.interactive-c6512469.js",
        "assets/heatmap.min-eb3a4a51.js",
        "assets/map-animate-gd2-36bd072b.css",
      ]
    ),
  lu = () =>
    I(
      () => import("./map-animate-fj-53113e8b.js"),
      [
        "assets/map-animate-fj-53113e8b.js",
        "assets/index-4db78ffb.js",
        "assets/OrbitControls-9c9ee6bc.js",
        "assets/index-1453e2ee.js",
        "assets/utils-9af1928d.js",
        "assets/index-4ec0cc76.js",
        "assets/lil-gui.module.min-f00c3c61.js",
        "assets/Label3d-1a598e21.js",
        "assets/GradientShader-7cc661aa.js",
        "assets/Particles-a008e8a7.js",
        "assets/pathLine-9a4e7519.js",
        "assets/chinaBlurLine-b7b06be6.js",
        "assets/ocean-blue-bg-49e3ac50.js",
        "assets/rotationBorder1-447bf02a.js",
        "assets/grid-3e023ca8.js",
        "assets/gaoguang2-46d4de0f.js",
        "assets/arrow-8777f461.js",
        "assets/pathLine2-dee41061.js",
        "assets/Line2-7598ed88.js",
        "assets/label-icon-aa0c6fbf.js",
        "assets/label-arrow-b5ffbd19.js",
        "assets/RenderPass-5ccd0f1e.js",
        "assets/three.interactive-c6512469.js",
        "assets/map-animate-fj-f251e81a.css",
      ]
    ),
  cu = () =>
    I(
      () => import("./map-animate-china-a4daa7c7.js"),
      [
        "assets/map-animate-china-a4daa7c7.js",
        "assets/OrbitControls-9c9ee6bc.js",
        "assets/index-1453e2ee.js",
        "assets/utils-9af1928d.js",
        "assets/Label3d-1a598e21.js",
        "assets/GradientShader-7cc661aa.js",
        "assets/Particles-a008e8a7.js",
        "assets/index-4db78ffb.js",
        "assets/pathLine-9a4e7519.js",
        "assets/chinaBlurLine-b7b06be6.js",
        "assets/top_surface_normal_map2-a65ff1bb.js",
        "assets/ocean-blue-bg-49e3ac50.js",
        "assets/rotationBorder1-447bf02a.js",
        "assets/rotationBorder2-a143eae0.js",
        "assets/grid-3e023ca8.js",
        "assets/gaoguang2-46d4de0f.js",
        "assets/flyLine2-e7135ba7.js",
        "assets/arrow-8777f461.js",
        "assets/pathLine2-dee41061.js",
        "assets/pathLine4-99db6c46.js",
        "assets/szxs_logo-02219344.js",
        "assets/Line2-7598ed88.js",
        "assets/label-arrow-b5ffbd19.js",
        "assets/three.interactive-c6512469.js",
        "assets/map-animate-china-d6ff3a35.css",
      ]
    ),
  uu = () =>
    I(
      () => import("./map-animate-china-level-894f28d9.js"),
      [
        "assets/map-animate-china-level-894f28d9.js",
        "assets/OrbitControls-9c9ee6bc.js",
        "assets/index-1453e2ee.js",
        "assets/utils-9af1928d.js",
        "assets/index-4ec0cc76.js",
        "assets/lil-gui.module.min-f00c3c61.js",
        "assets/Label3d-1a598e21.js",
        "assets/GradientShader-7cc661aa.js",
        "assets/Particles-a008e8a7.js",
        "assets/index-4db78ffb.js",
        "assets/stats.module-077ce25d.js",
        "assets/pathLine-9a4e7519.js",
        "assets/chinaBlurLine-b7b06be6.js",
        "assets/top_surface_normal_map2-a65ff1bb.js",
        "assets/ocean-blue-bg-49e3ac50.js",
        "assets/rotationBorder1-447bf02a.js",
        "assets/rotationBorder2-a143eae0.js",
        "assets/grid-3e023ca8.js",
        "assets/flyLine2-e7135ba7.js",
        "assets/arrow-8777f461.js",
        "assets/pathLine2-dee41061.js",
        "assets/pathLine4-99db6c46.js",
        "assets/point1-7bb35866.js",
        "assets/szxs_logo-02219344.js",
        "assets/label-arrow-b5ffbd19.js",
        "assets/three.interactive-c6512469.js",
        "assets/GC-b02a3dbf.js",
        "assets/map-animate-china-level-df521079.css",
      ]
    );
let Ro = null,
  fu = [
    { path: "/", redirect: "/three-3d-map-zj", component: mr },
    { path: "/three-3d-map", name: "guangdongMap", component: mr },
    { path: "/three-3d-map-zj", name: "zhejiangMap", component: iu },
    { path: "/three-3d-map-fj", name: "fujianMap", component: lu },
    { path: "/three-3d-map-china", name: "chinaMap", component: cu },
    { path: "/three-3d-map-china-level", name: "chinaMapLevel", component: uu },
    { path: "/:pathMatch(.*)", redirect: "/" },
  ];
Ro = VueRouter.createRouter({ history: VueRouter.createWebHashHistory(), routes: fu });
const au = Ro,
  du = "/sayhello-site/assets/qrcode-42ca0273.png",
  hu = "/sayhello-site/assets/qrcode-szxs-be3deddd.png";
const pu = { class: "root-app" },
  mu = Vue.createElementVNode("span", null, "购买", -1),
  _u = Vue.createElementVNode("span", null, "源码", -1),
  gu = [mu, _u],
  vu = { key: 0, class: "buy-btn" },
  Eu = Vue.createElementVNode("span", null, "购买", -1),
  yu = Vue.createElementVNode("span", null, "源码", -1),
  bu = [Eu, yu],
  wu = {
    key: 1,
    class: "icon",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Ru = Vue.createElementVNode(
    "path",
    {
      d: "M13.1297 15.999V14.5494H11.6483V16L13.1297 15.999ZM15.3406 16C15.7033 16 16 15.7033 16 15.3407V14.5494H14.5802V15.999M5.80224 1.45056V5.80225H1.45055V1.45056H5.80224ZM6.59345 0H0.659334C0.296707 0 0 0.296708 0 0.659336V6.59345C0 6.9561 0.296707 7.25279 0.659334 7.25279H6.59343C6.95606 7.25279 7.25277 6.95608 7.25277 6.59345V0.659336C7.25279 0.296708 6.95608 0 6.59345 0ZM2.90113 3.62642C2.90113 3.81877 2.97754 4.00325 3.11356 4.13927C3.24957 4.27528 3.43405 4.3517 3.62641 4.3517C3.81876 4.3517 4.00324 4.27528 4.13925 4.13927C4.27527 4.00325 4.35168 3.81877 4.35168 3.62642C4.35168 3.43406 4.27527 3.24958 4.13925 3.11357C4.00324 2.97755 3.81876 2.90114 3.62641 2.90114C3.43405 2.90114 3.24957 2.97755 3.11356 3.11357C2.97754 3.24958 2.90113 3.43406 2.90113 3.62642ZM14.5494 1.45056V5.80225H10.1978V1.45056H14.5494ZM15.3406 0H9.40654C9.0439 0 8.74721 0.296708 8.74721 0.659336V6.59345C8.74721 6.9561 9.04392 7.25279 9.40654 7.25279H15.3406C15.7033 7.25279 16 6.95608 16 6.59345V0.659336C16 0.296708 15.7033 0 15.3406 0ZM11.6483 3.62642C11.6483 3.81877 11.7247 4.00325 11.8607 4.13927C11.9968 4.27528 12.1812 4.3517 12.3736 4.3517C12.5659 4.3517 12.7504 4.27528 12.8864 4.13927C13.0225 4.00325 13.0989 3.81877 13.0989 3.62642C13.0989 3.43406 13.0225 3.24958 12.8864 3.11357C12.7504 2.97755 12.5659 2.90114 12.3736 2.90114C12.1812 2.90114 11.9968 2.97755 11.8607 3.11357C11.7247 3.24958 11.6483 3.43406 11.6483 3.62642ZM5.80224 10.1977V14.5494H1.45055V10.1977H5.80224ZM6.59345 8.74719H0.659334C0.296707 8.74719 0 9.0439 0 9.40653V15.3406C0 15.7033 0.296707 16 0.659334 16H6.59343C6.95608 16 7.25277 15.7033 7.25277 15.3406V9.40653C7.25279 9.0439 6.95608 8.74719 6.59345 8.74719ZM2.90113 12.3736C2.90113 12.5659 2.97754 12.7504 3.11356 12.8864C3.24957 13.0224 3.43405 13.0989 3.62641 13.0989C3.81876 13.0989 4.00324 13.0224 4.13925 12.8864C4.27527 12.7504 4.35168 12.5659 4.35168 12.3736C4.35168 12.1812 4.27527 11.9968 4.13925 11.8607C4.00324 11.7247 3.81876 11.6483 3.62641 11.6483C3.43405 11.6483 3.24957 11.7247 3.11356 11.8607C2.97754 11.9968 2.90113 12.1812 2.90113 12.3736ZM15.3406 8.74719H14.5319V11.6483H13.0814V8.74719H9.40654C9.0439 8.74719 8.74721 9.0439 8.74721 9.40653V15.3406C8.74721 15.7033 9.04392 16 9.40654 16H10.1978V14.5494V13.0989V11.6483H11.6483V13.0989H16V9.40653C16 9.0439 15.7033 8.74719 15.3406 8.74719Z",
      fill: "#999",
    },
    null,
    -1
  ),
  xu = [Ru],
  Pu = { class: "qrcode-fixed-card" },
  Cu = { key: 0, class: "qrcode-pic", src: du, alt: "" },
  Ou = { key: 1, class: "qrcode-pic", src: hu, alt: "" },
  Au = Vue.createElementVNode(
    "div",
    { class: "content-us" },
    [
      Vue.createElementVNode("p", { class: "title" }, "Three.js 3d前端特效"),
      Vue.createElementVNode("p", { class: "desc" }, [
        Vue.createElementVNode("span", null, "承接数据可视化前端制作/源码出售"),
        Vue.createElementVNode("span", null, "欢迎咨询合作"),
      ]),
      Vue.createElementVNode("p", { class: "tips" }, "微信扫码，联系我们"),
    ],
    -1
  ),
  Tu = {
    __name: "App",
    setup(e) {
      let t = null,
        n = Vue.reactive({ isHover: !1, mode: "", routeName: "" });
      const s = VueRouter.useRouter();
      let r = {
        provice: "https://www.shuzixs.com/#/companyService/163",
        china: "https://www.shuzixs.com/#/companyService/164",
      };
      Vue.watch(
        () => s.name,
        async (f) => {
          n.routeName = f;
        }
      );
      function o() {
        clearTimeout(t), (n.isHover = !0);
      }
      function i() {
        clearTimeout(t),
          (t = setTimeout(() => {
            n.isHover = !1;
          }, 2e3));
      }
      function c() {
        {
          (document.oncontextmenu = function () {
            event.returnValue = !1;
          }),
            (document.onkeydown =
              document.onkeyup =
              document.onkeypress =
                function (h) {
                  let m =
                    h || window.event || arguments.callee.caller.arguments[0];
                  if (m && m.keyCode == 123) return (m.returnValue = !1), !1;
                });
          var f = new Image();
          Object.defineProperty(f, "id", {
            get: function () {
              window.location.href = "https://www.baidu.com";
            },
          });
          // console.log(f),
          // setInterval(function () {
          //   d();
          // }, 2e3);
          // var d = function () {
          //   function h(m) {
          //     ("" + m / m).length !== 1 || m % 20 === 0
          //       ? function () {}.constructor("debugger")()
          //       : function () {}.constructor("debugger")(),
          //       h(++m);
          //   }
          //   try {
          //     h(0);
          //   } catch {}
          // };
          // d();
        }
      }
      function l() {
        ["guangdongMap", "zhejiangMap"].includes(n.routeName)
          ? window.open(r.provice, "_blank")
          : ["chinaMap", "chinaMapLevel"].includes(n.routeName) &&
            window.open(r.china, "_blank");
      }
      return (
        Vue.onMounted(() => {
          c(),
            setTimeout(() => {
              (n.isHover = !0),
                (t = setTimeout(() => {
                  n.isHover = !1;
                }, 2e3));
            }, 500);
        }),
        (f, d) => {
          const h = Vue.resolveComponent("router-view");
          return (
            Vue.openBlock(),
            Vue.createElementBlock("div", pu, [
              Vue.createVNode(h),
              Vue.unref(n).mode
                ? (Vue.openBlock(),
                  Vue.createElementBlock(
                    "div",
                    { key: 0, class: "goods-buy-btn", onClick: l },
                    gu
                  ))
                : Vue.createCommentVNode("", !0),
              Vue.createElementVNode(
                "div",
                {
                  class: Vue.normalizeClass([
                    "qrcode-fixed",
                    { active: Vue.unref(n).isHover },
                  ]),
                },
                [
                  Vue.createElementVNode(
                    "div",
                    {
                      class: "qrcode-fixed-btn",
                      onMouseenter: o,
                      onMouseleave: i,
                    },
                    [
                      Vue.unref(n).mode
                        ? (Vue.openBlock(),
                          Vue.createElementBlock("svg", wu, xu))
                        : (Vue.openBlock(),
                          Vue.createElementBlock("div", vu, bu)),
                    ],
                    32
                  ),
                  Vue.createElementVNode("div", Pu, [
                    Vue.unref(n).mode
                      ? (Vue.openBlock(), Vue.createElementBlock("img", Ou))
                      : (Vue.openBlock(), Vue.createElementBlock("img", Cu)),
                    Au,
                  ]),
                ],
                2
              ),
            ])
          );
        }
      );
    },
  };
console.log("Vue", Vue);

let Iu = Vue.createApp(Tu);
Iu.use(au).mount("#app");

const Fragment = Vue.Fragment;
const createElementVNode = Vue.createElementVNode;
const createElementBlock = Vue.createElementBlock;
const reactive = Vue.reactive;
const onMounted = Vue.onMounted;
const ref = Vue.ref;
const normalizeClass = Vue.normalizeClass;
const renderList = Vue.renderList;
const createBlock = Vue.createBlock;
const createTextVNode = Vue.createTextVNode;
const onBeforeUnmount = Vue.onBeforeUnmount;
const popScopeId = Vue.popScopeId;
const createStaticVNode = Vue.createStaticVNode;
const pushScopeId = Vue.pushScopeId;
const toDisplayString = Vue.toDisplayString;
const withCtx = Vue.withCtx;
const openBlock = Vue.openBlock;
const resolveComponent = Vue.resolveComponent;
const unref = Vue.unref;

export {
  Fragment as F,
  renderList as a,
  createElementVNode as b,
  createElementBlock as c,
  createBlock as d,
  createTextVNode as e,
  reactive as f,
  onMounted as g,
  onBeforeUnmount as h,
  popScopeId as i,
  createStaticVNode as j,
  ref as k,
  normalizeClass as n,
  openBlock as o,
  pushScopeId as p,
  resolveComponent as r,
  toDisplayString as t,
  unref as u,
  withCtx as w,
};
