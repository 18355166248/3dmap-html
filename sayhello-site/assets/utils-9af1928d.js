import { Vector3, Box3 } from "./three.module.js";
import "./index-1453e2ee.js";

const m = function (e, i) {
    return Object.prototype.toString.call(i) === `[object ${e}]`;
  },
  c = function (e) {
    return m("Object", e);
  };
function p(e = 10, i = 62) {
  var n =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
        ""
      ),
    t = [],
    o;
  if (((i = i || n.length), e))
    for (o = 0; o < e; o++) t[o] = n[0 | (Math.random() * i)];
  else {
    var r;
    for (t[8] = t[13] = t[18] = t[23] = "-", t[14] = "4", o = 0; o < 36; o++)
      t[o] ||
        ((r = 0 | (Math.random() * 16)), (t[o] = n[o == 19 ? (r & 3) | 8 : r]));
  }
  return t.join("");
}
function v(e) {
  var i = new Vector3(),
    n = new Box3();
  n.expandByObject(e);
  var t = new Vector3();
  n.getSize(t);
  var o = new Vector3();
  n.getCenter(o);
  let r = { box3: n, boxSize: t, center: o };
  if (e.geometry) {
    e.geometry.computeBoundingBox(), e.geometry.computeBoundingSphere();
    const { max: s, min: l } = e.geometry.boundingBox;
    (i.x = s.x - l.x), (i.y = s.y - l.y), (i.z = s.z - l.z), (r.size = i);
  }
  return r;
}
const M = (e) => {
  let i = JSON.parse(e),
    n = i.features;
  for (let t = 0; t < n.length; t++) {
    const o = n[t];
    ["Polygon"].includes(o.geometry.type) &&
      (o.geometry.coordinates = [o.geometry.coordinates]);
  }
  return i;
};
function a(e, i = new Map()) {
  if (e != null && c(e)) {
    let n = i.get(e);
    if (n) return n;
    const t = Array.isArray(e);
    let o = t ? [] : {};
    return (
      (n = i.set(e, o)),
      t
        ? e.forEach((r, s) => {
            o[s] = a(r, n);
          })
        : Object.keys(e).forEach((r) => {
            c(o[r]) ? (o[r] = a(e[r], n)) : (o[r] = e[r]);
          }),
      o
    );
  } else return e;
}
function y(e, i) {
  e = a(e);
  for (let n in i)
    n in e && c(i[n]) && c(e[n]) ? (e[n] = y(e[n], i[n])) : (e[n] = i[n]);
  return e;
}
function b(e, i, n = 100) {
  var t = (e * Math.PI) / 180,
    o = (i * Math.PI) / 180;
  t = -t;
  var r = n * Math.cos(o) * Math.cos(t),
    s = n * Math.sin(o),
    l = n * Math.cos(o) * Math.sin(t);
  return { x: r, y: s, z: l };
}
function d(e, i) {
  let n = e[0];
  for (let t = 1; t < e.length; t++) {
    const o = e[t];
    i(o) < i(n) && (n = o);
  }
  return n;
}
function B(e, i) {
  let n = e[0];
  for (let t = 1; t < e.length; t++) {
    const o = e[t];
    i(o) > i(n) && (n = o);
  }
  return n;
}
export { d as a, y as d, v as g, b as l, B as m, M as t, p as u };
