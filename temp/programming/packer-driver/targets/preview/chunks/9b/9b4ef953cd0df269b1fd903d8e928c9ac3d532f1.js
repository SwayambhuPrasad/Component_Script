System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EDITOR, loadFonts, debug, warn, rootLogger, networkReplicator, i18n, _crd, appletConfig;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function setAppletConfig(config) {
    for (var category in config) {
      if (Object.prototype.hasOwnProperty.call(config, category) && Object.prototype.hasOwnProperty.call(appletConfig, category)) {
        var categoryConfig = config[category];

        for (var key in categoryConfig) {
          if (Object.prototype.hasOwnProperty.call(categoryConfig, key) && Object.prototype.hasOwnProperty.call(appletConfig[category], key)) {
            appletConfig[category][key] = categoryConfig[key];
          }
        }
      }
    }
  }

  function _reportPossibleCrUseOfIFontKit(extras) {
    _reporterNs.report("IFontKit", "./FontManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfloadFonts(extras) {
    _reporterNs.report("loadFonts", "./FontManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdebug(extras) {
    _reporterNs.report("debug", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwarn(extras) {
    _reporterNs.report("warn", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrootLogger(extras) {
    _reporterNs.report("rootLogger", "./loglevel.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetworkReplicator(extras) {
    _reporterNs.report("networkReplicator", "./NetworkReplicator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfi18n(extras) {
    _reporterNs.report("i18n", "./Translations", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      loadFonts = _unresolved_2.loadFonts;
    }, function (_unresolved_3) {
      debug = _unresolved_3.debug;
      warn = _unresolved_3.warn;
    }, function (_unresolved_4) {
      rootLogger = _unresolved_4.default;
    }, function (_unresolved_5) {
      networkReplicator = _unresolved_5.networkReplicator;
    }, function (_unresolved_6) {
      i18n = _unresolved_6.i18n;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1642br7/rtJn7d64Ly7gSrd", "AppletConfig", undefined);

      appletConfig = {
        i18n: {
          get enabled() {
            return (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).enabled;
          },

          set enabled(value) {
            (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).enabled = value;
          },

          get currentLanguage() {
            return (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).currentLanguage;
          },

          set currentLanguage(value) {
            (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).currentLanguage = value;
          },

          get resourcePath() {
            return (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).resourcePath;
          },

          set resourcePath(value) {
            (_crd && i18n === void 0 ? (_reportPossibleCrUseOfi18n({
              error: Error()
            }), i18n) : i18n).resourcePath = value;
          }

        },
        collab: {
          get enabled() {
            return (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
              error: Error()
            }), networkReplicator) : networkReplicator).enabled;
          },

          set enabled(value) {
            (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
              error: Error()
            }), networkReplicator) : networkReplicator).enabled = value;
          }

        },
        fonts: {
          set kits(value) {
            for (var kit of value) {
              (_crd && loadFonts === void 0 ? (_reportPossibleCrUseOfloadFonts({
                error: Error()
              }), loadFonts) : loadFonts)(kit);
            }
          }

        },
        logger: {
          get level() {
            return (_crd && rootLogger === void 0 ? (_reportPossibleCrUseOfrootLogger({
              error: Error()
            }), rootLogger) : rootLogger).getLevel();
          },

          set level(value) {
            (_crd && rootLogger === void 0 ? (_reportPossibleCrUseOfrootLogger({
              error: Error()
            }), rootLogger) : rootLogger).setLevel(value);
          }

        }
      };

      _asyncToGenerator(function* () {
        if (EDITOR) return;
        var response = yield fetch("./applet.json");

        if (response.ok) {
          setAppletConfig(yield response.json());
        } else {
          (_crd && warn === void 0 ? (_reportPossibleCrUseOfwarn({
            error: Error()
          }), warn) : warn)("No applet.json found! Using the default config.");
        }

        var params = new URLSearchParams(window.location.search);
        var config = {};

        for (var [key, value] of params.entries()) {
          if (key.startsWith("appletConfig.")) {
            var [, category, k] = key.split(".");

            if (category in config) {
              config[category][k] = value;
            } else {
              config[category] = {
                [k]: value
              };
            }
          }
        }

        (_crd && debug === void 0 ? (_reportPossibleCrUseOfdebug({
          error: Error()
        }), debug) : debug)("Applet config from URL:", config);
        setAppletConfig(config);
      })();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b4ef953cd0df269b1fd903d8e928c9ac3d532f1.js.map