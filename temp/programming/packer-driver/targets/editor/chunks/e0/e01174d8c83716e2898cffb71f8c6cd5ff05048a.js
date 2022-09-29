System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE

        /*! loglevel - v1.8.0 - https://github.com/pimterry/loglevel - (c) 2021 Tim Perry - licensed MIT */
        !function (a, b) {
          "use strict";

          "function" == typeof define && define.amd ? define(b) : "object" == typeof module && module.exports ? module.exports = b() : a.log = b();
        }(this, function () {
          "use strict";

          function a(a, b) {
            var c = a[b];
            if ("function" == typeof c.bind) return c.bind(a);

            try {
              return Function.prototype.bind.call(c, a);
            } catch (b) {
              return function () {
                return Function.prototype.apply.apply(c, [a, arguments]);
              };
            }
          }

          function b() {
            console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
          }

          function c(c) {
            return "debug" === c && (c = "log"), typeof console !== i && ("trace" === c && j ? b : void 0 !== console[c] ? a(console, c) : void 0 !== console.log ? a(console, "log") : h);
          }

          function d(a, b) {
            for (var c = 0; c < k.length; c++) {
              var d = k[c];
              this[d] = c < a ? h : this.methodFactory(d, a, b);
            }

            this.log = this.debug;
          }

          function e(a, b, c) {
            return function () {
              typeof console !== i && (d.call(this, b, c), this[a].apply(this, arguments));
            };
          }

          function f(a, b, d) {
            return c(a) || e.apply(this, arguments);
          }

          function g(a, b, c) {
            function e(a) {
              var b = (k[a] || "silent").toUpperCase();

              if (typeof window !== i && m) {
                try {
                  return void (window.localStorage[m] = b);
                } catch (a) {}

                try {
                  window.document.cookie = encodeURIComponent(m) + "=" + b + ";";
                } catch (a) {}
              }
            }

            function g() {
              var a;

              if (typeof window !== i && m) {
                try {
                  a = window.localStorage[m];
                } catch (a) {}

                if (typeof a === i) try {
                  var b = window.document.cookie,
                      c = b.indexOf(encodeURIComponent(m) + "=");
                  -1 !== c && (a = /^([^;]+)/.exec(b.slice(c))[1]);
                } catch (a) {}
                return void 0 === l.levels[a] && (a = void 0), a;
              }
            }

            function h() {
              if (typeof window !== i && m) {
                try {
                  return void window.localStorage.removeItem(m);
                } catch (a) {}

                try {
                  window.document.cookie = encodeURIComponent(m) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
                } catch (a) {}
              }
            }

            var j,
                l = this;
            b = null == b ? "WARN" : b;
            var m = "loglevel";
            "string" == typeof a ? m += ":" + a : "symbol" == typeof a && (m = void 0), l.name = a, l.levels = {
              TRACE: 0,
              DEBUG: 1,
              INFO: 2,
              WARN: 3,
              ERROR: 4,
              SILENT: 5
            }, l.methodFactory = c || f, l.getLevel = function () {
              return j;
            }, l.setLevel = function (b, c) {
              if ("string" == typeof b && void 0 !== l.levels[b.toUpperCase()] && (b = l.levels[b.toUpperCase()]), !("number" == typeof b && b >= 0 && b <= l.levels.SILENT)) throw "log.setLevel() called with invalid level: " + b;
              if (j = b, !1 !== c && e(b), d.call(l, b, a), typeof console === i && b < l.levels.SILENT) return "No console available for logging";
            }, l.setDefaultLevel = function (a) {
              b = a, g() || l.setLevel(a, !1);
            }, l.resetLevel = function () {
              l.setLevel(b, !1), h();
            }, l.enableAll = function (a) {
              l.setLevel(l.levels.TRACE, a);
            }, l.disableAll = function (a) {
              l.setLevel(l.levels.SILENT, a);
            };
            var n = g();
            null == n && (n = b), l.setLevel(n, !1);
          }

          var h = function () {},
              i = "undefined",
              j = typeof window !== i && typeof window.navigator !== i && /Trident\/|MSIE /.test(window.navigator.userAgent),
              k = ["trace", "debug", "info", "warn", "error"],
              l = new g(),
              m = {};

          l.getLogger = function (a) {
            if ("symbol" != typeof a && "string" != typeof a || "" === a) throw new TypeError("You must supply a name when creating a logger.");
            var b = m[a];
            return b || (b = m[a] = new g(a, l.getLevel(), l.methodFactory)), b;
          };

          var n = typeof window !== i ? window.log : void 0;
          return l.noConflict = function () {
            return typeof window !== i && window.log === l && (window.log = n), l;
          }, l.getLoggers = function () {
            return m;
          }, l.default = l, l;
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=e01174d8c83716e2898cffb71f8c6cd5ff05048a.js.map