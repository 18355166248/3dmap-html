import { c as A, a as I } from "./index-1453e2ee.js";
var M = { exports: {} };
(function (B) {
  (function (x, O, b) {
    B.exports ? (B.exports = b()) : (O[x] = b());
  })("h337", A, function () {
    var x = {
        defaultRadius: 40,
        defaultRenderer: "canvas2d",
        defaultGradient: {
          0.25: "rgb(0,0,255)",
          0.55: "rgb(0,255,0)",
          0.85: "yellow",
          1: "rgb(255,0,0)",
        },
        defaultMaxOpacity: 1,
        defaultMinOpacity: 0,
        defaultBlur: 0.85,
        defaultXField: "x",
        defaultYField: "y",
        defaultValueField: "value",
        plugins: {},
      },
      O = (function () {
        var _ = function (i) {
            (this._coordinator = {}),
              (this._data = []),
              (this._radi = []),
              (this._min = 10),
              (this._max = 1),
              (this._xField = i.xField || i.defaultXField),
              (this._yField = i.yField || i.defaultYField),
              (this._valueField = i.valueField || i.defaultValueField),
              i.radius && (this._cfgRadius = i.radius);
          },
          g = x.defaultRadius;
        return (
          (_.prototype = {
            _organiseData: function (s, i) {
              var t = s[this._xField],
                a = s[this._yField],
                r = this._radi,
                e = this._data,
                h = this._max,
                n = this._min,
                o = s[this._valueField] || 1,
                f = s.radius || this._cfgRadius || g;
              e[t] || ((e[t] = []), (r[t] = [])),
                e[t][a] ? (e[t][a] += o) : ((e[t][a] = o), (r[t][a] = f));
              var d = e[t][a];
              return d > h
                ? (i ? this.setDataMax(d) : (this._max = d), !1)
                : d < n
                ? (i ? this.setDataMin(d) : (this._min = d), !1)
                : { x: t, y: a, value: o, radius: f, min: n, max: h };
            },
            _unOrganizeData: function () {
              var s = [],
                i = this._data,
                t = this._radi;
              for (var a in i)
                for (var r in i[a])
                  s.push({ x: a, y: r, radius: t[a][r], value: i[a][r] });
              return { min: this._min, max: this._max, data: s };
            },
            _onExtremaChange: function () {
              this._coordinator.emit("extremachange", {
                min: this._min,
                max: this._max,
              });
            },
            addData: function () {
              if (arguments[0].length > 0)
                for (var s = arguments[0], i = s.length; i--; )
                  this.addData.call(this, s[i]);
              else {
                var t = this._organiseData(arguments[0], !0);
                t &&
                  (this._data.length === 0 && (this._min = this._max = t.value),
                  this._coordinator.emit("renderpartial", {
                    min: this._min,
                    max: this._max,
                    data: [t],
                  }));
              }
              return this;
            },
            setData: function (s) {
              var i = s.data,
                t = i.length;
              (this._data = []), (this._radi = []);
              for (var a = 0; a < t; a++) this._organiseData(i[a], !1);
              return (
                (this._max = s.max),
                (this._min = s.min || 0),
                this._onExtremaChange(),
                this._coordinator.emit("renderall", this._getInternalData()),
                this
              );
            },
            removeData: function () {},
            setDataMax: function (s) {
              return (
                (this._max = s),
                this._onExtremaChange(),
                this._coordinator.emit("renderall", this._getInternalData()),
                this
              );
            },
            setDataMin: function (s) {
              return (
                (this._min = s),
                this._onExtremaChange(),
                this._coordinator.emit("renderall", this._getInternalData()),
                this
              );
            },
            setCoordinator: function (s) {
              this._coordinator = s;
            },
            _getInternalData: function () {
              return {
                max: this._max,
                min: this._min,
                data: this._data,
                radi: this._radi,
              };
            },
            getData: function () {
              return this._unOrganizeData();
            },
          }),
          _
        );
      })(),
      b = (function () {
        var _ = function (t) {
            var a = t.gradient || t.defaultGradient,
              r = document.createElement("canvas"),
              e = r.getContext("2d");
            (r.width = 256), (r.height = 1);
            var h = e.createLinearGradient(0, 0, 256, 1);
            for (var n in a) h.addColorStop(n, a[n]);
            return (
              (e.fillStyle = h),
              e.fillRect(0, 0, 256, 1),
              e.getImageData(0, 0, 256, 1).data
            );
          },
          g = function (t, a) {
            var r = document.createElement("canvas"),
              e = r.getContext("2d"),
              h = t,
              n = t;
            if (((r.width = r.height = t * 2), a == 1))
              e.beginPath(),
                e.arc(h, n, t, 0, 2 * Math.PI, !1),
                (e.fillStyle = "rgba(0,0,0,1)"),
                e.fill();
            else {
              var o = e.createRadialGradient(h, n, t * a, h, n, t);
              o.addColorStop(0, "rgba(0,0,0,1)"),
                o.addColorStop(1, "rgba(0,0,0,0)"),
                (e.fillStyle = o),
                e.fillRect(0, 0, 2 * t, 2 * t);
            }
            return r;
          },
          s = function (n) {
            for (
              var a = [],
                r = n.min,
                e = n.max,
                h = n.radi,
                n = n.data,
                o = Object.keys(n),
                f = o.length;
              f--;

            )
              for (var d = o[f], l = Object.keys(n[d]), y = l.length; y--; ) {
                var u = l[y],
                  m = n[d][u],
                  p = h[d][u];
                a.push({ x: d, y: u, value: m, radius: p });
              }
            return { min: r, max: e, data: a };
          };
        function i(t) {
          var a = t.container,
            r = (this.shadowCanvas = document.createElement("canvas")),
            e = (this.canvas = t.canvas || document.createElement("canvas"));
          this._renderBoundaries = [1e4, 1e4, 0, 0];
          var h = getComputedStyle(t.container) || {};
          (e.className = "heatmap-canvas"),
            (this._width =
              e.width =
              r.width =
                t.width || +h.width.replace(/px/, "")),
            (this._height =
              e.height =
              r.height =
                t.height || +h.height.replace(/px/, "")),
            (this.shadowCtx = r.getContext("2d")),
            (this.ctx = e.getContext("2d")),
            (e.style.cssText = r.style.cssText =
              "position:absolute;left:0;top:0;"),
            (a.style.position = "relative"),
            a.appendChild(e),
            (this._palette = _(t)),
            (this._templates = {}),
            this._setStyles(t);
        }
        return (
          (i.prototype = {
            renderPartial: function (t) {
              t.data.length > 0 && (this._drawAlpha(t), this._colorize());
            },
            renderAll: function (t) {
              this._clear(),
                t.data.length > 0 && (this._drawAlpha(s(t)), this._colorize());
            },
            _updateGradient: function (t) {
              this._palette = _(t);
            },
            updateConfig: function (t) {
              t.gradient && this._updateGradient(t), this._setStyles(t);
            },
            setDimensions: function (t, a) {
              (this._width = t),
                (this._height = a),
                (this.canvas.width = this.shadowCanvas.width = t),
                (this.canvas.height = this.shadowCanvas.height = a);
            },
            _clear: function () {
              this.shadowCtx.clearRect(0, 0, this._width, this._height),
                this.ctx.clearRect(0, 0, this._width, this._height);
            },
            _setStyles: function (t) {
              (this._blur = t.blur == 0 ? 0 : t.blur || t.defaultBlur),
                t.backgroundColor &&
                  (this.canvas.style.backgroundColor = t.backgroundColor),
                (this._width =
                  this.canvas.width =
                  this.shadowCanvas.width =
                    t.width || this._width),
                (this._height =
                  this.canvas.height =
                  this.shadowCanvas.height =
                    t.height || this._height),
                (this._opacity = (t.opacity || 0) * 255),
                (this._maxOpacity =
                  (t.maxOpacity || t.defaultMaxOpacity) * 255),
                (this._minOpacity =
                  (t.minOpacity || t.defaultMinOpacity) * 255),
                (this._useGradientOpacity = !!t.useGradientOpacity);
            },
            _drawAlpha: function (e) {
              for (
                var a = (this._min = e.min),
                  r = (this._max = e.max),
                  e = e.data || [],
                  h = e.length,
                  n = 1 - this._blur;
                h--;

              ) {
                var o = e[h],
                  f = o.x,
                  d = o.y,
                  l = o.radius,
                  y = Math.min(o.value, r),
                  u = f - l,
                  m = d - l,
                  p = this.shadowCtx,
                  c;
                this._templates[l]
                  ? (c = this._templates[l])
                  : (this._templates[l] = c = g(l, n));
                var w = (y - a) / (r - a);
                (p.globalAlpha = w < 0.01 ? 0.01 : w),
                  p.drawImage(c, u, m),
                  u < this._renderBoundaries[0] &&
                    (this._renderBoundaries[0] = u),
                  m < this._renderBoundaries[1] &&
                    (this._renderBoundaries[1] = m),
                  u + 2 * l > this._renderBoundaries[2] &&
                    (this._renderBoundaries[2] = u + 2 * l),
                  m + 2 * l > this._renderBoundaries[3] &&
                    (this._renderBoundaries[3] = m + 2 * l);
              }
            },
            _colorize: function () {
              var t = this._renderBoundaries[0],
                a = this._renderBoundaries[1],
                r = this._renderBoundaries[2] - t,
                e = this._renderBoundaries[3] - a,
                h = this._width,
                n = this._height,
                o = this._opacity,
                f = this._maxOpacity,
                d = this._minOpacity,
                l = this._useGradientOpacity;
              t < 0 && (t = 0),
                a < 0 && (a = 0),
                t + r > h && (r = h - t),
                a + e > n && (e = n - a);
              for (
                var y = this.shadowCtx.getImageData(t, a, r, e),
                  u = y.data,
                  m = u.length,
                  p = this._palette,
                  c = 3;
                c < m;
                c += 4
              ) {
                var w = u[c],
                  D = w * 4;
                if (D) {
                  var C;
                  o > 0
                    ? (C = o)
                    : w < f
                    ? w < d
                      ? (C = d)
                      : (C = w)
                    : (C = f),
                    (u[c - 3] = p[D]),
                    (u[c - 2] = p[D + 1]),
                    (u[c - 1] = p[D + 2]),
                    (u[c] = l ? p[D + 3] : C);
                }
              }
              this.ctx.putImageData(y, t, a),
                (this._renderBoundaries = [1e3, 1e3, 0, 0]);
            },
            getValueAt: function (t) {
              var a,
                r = this.shadowCtx,
                e = r.getImageData(t.x, t.y, 1, 1),
                h = e.data[3],
                n = this._max,
                o = this._min;
              return (a = (Math.abs(n - o) * (h / 255)) >> 0), a;
            },
            getDataURL: function () {
              return this.canvas.toDataURL();
            },
          }),
          i
        );
      })(),
      R = (function () {
        var _ = !1;
        return x.defaultRenderer === "canvas2d" && (_ = b), _;
      })(),
      F = {
        merge: function () {
          for (var v = {}, _ = arguments.length, g = 0; g < _; g++) {
            var s = arguments[g];
            for (var i in s) v[i] = s[i];
          }
          return v;
        },
      },
      E = (function () {
        var _ = (function () {
            function t() {
              this.cStore = {};
            }
            return (
              (t.prototype = {
                on: function (a, r, e) {
                  var h = this.cStore;
                  h[a] || (h[a] = []),
                    h[a].push(function (n) {
                      return r.call(e, n);
                    });
                },
                emit: function (a, r) {
                  var e = this.cStore;
                  if (e[a])
                    for (var h = e[a].length, n = 0; n < h; n++) {
                      var o = e[a][n];
                      o(r);
                    }
                },
              }),
              t
            );
          })(),
          g = function (i) {
            var t = i._renderer,
              a = i._coordinator,
              r = i._store;
            a.on("renderpartial", t.renderPartial, t),
              a.on("renderall", t.renderAll, t),
              a.on("extremachange", function (e) {
                i._config.onExtremaChange &&
                  i._config.onExtremaChange({
                    min: e.min,
                    max: e.max,
                    gradient: i._config.gradient || i._config.defaultGradient,
                  });
              }),
              r.setCoordinator(a);
          };
        function s() {
          var i = (this._config = F.merge(x, arguments[0] || {}));
          if (((this._coordinator = new _()), i.plugin)) {
            var t = i.plugin;
            if (x.plugins[t]) {
              var a = x.plugins[t];
              (this._renderer = new a.renderer(i)),
                (this._store = new a.store(i));
            } else
              throw new Error(
                "Plugin '" + t + "' not found. Maybe it was not registered."
              );
          } else (this._renderer = new R(i)), (this._store = new O(i));
          g(this);
        }
        return (
          (s.prototype = {
            addData: function () {
              return this._store.addData.apply(this._store, arguments), this;
            },
            removeData: function () {
              return (
                this._store.removeData &&
                  this._store.removeData.apply(this._store, arguments),
                this
              );
            },
            setData: function () {
              return this._store.setData.apply(this._store, arguments), this;
            },
            setDataMax: function () {
              return this._store.setDataMax.apply(this._store, arguments), this;
            },
            setDataMin: function () {
              return this._store.setDataMin.apply(this._store, arguments), this;
            },
            configure: function (i) {
              return (
                (this._config = F.merge(this._config, i)),
                this._renderer.updateConfig(this._config),
                this._coordinator.emit(
                  "renderall",
                  this._store._getInternalData()
                ),
                this
              );
            },
            repaint: function () {
              return (
                this._coordinator.emit(
                  "renderall",
                  this._store._getInternalData()
                ),
                this
              );
            },
            getData: function () {
              return this._store.getData();
            },
            getDataURL: function () {
              return this._renderer.getDataURL();
            },
            getValueAt: function (i) {
              return this._store.getValueAt
                ? this._store.getValueAt(i)
                : this._renderer.getValueAt
                ? this._renderer.getValueAt(i)
                : null;
            },
          }),
          s
        );
      })(),
      S = {
        create: function (v) {
          return new E(v);
        },
        register: function (v, _) {
          x.plugins[v] = _;
        },
      };
    return S;
  });
})(M);
var G = M.exports;
const k = I(G);
export { k as h };
