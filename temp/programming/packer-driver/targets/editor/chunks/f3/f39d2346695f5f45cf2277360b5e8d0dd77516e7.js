System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EDITOR, loadFonts, warn, rootLogger, networkReplicator, i18n, _crd, appletConfig;

  function setAppletConfig(config) {
    for (const category in config) {
      if (Object.prototype.hasOwnProperty.call(config, category) && Object.prototype.hasOwnProperty.call(appletConfig, category)) {
        const categoryConfig = config[category];

        for (const key in categoryConfig) {
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
            for (const kit of value) {
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

      (async function () {
        if (EDITOR) return;
        const response = await fetch("./applet.json");

        if (response.ok) {
          setAppletConfig(await response.json());
        } else {
          (_crd && warn === void 0 ? (_reportPossibleCrUseOfwarn({
            error: Error()
          }), warn) : warn)("No applet.json found! Using the default config.");
        }
      })();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f39d2346695f5f45cf2277360b5e8d0dd77516e7.js.map