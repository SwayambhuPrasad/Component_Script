System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, ResolutionPolicy, screen, view, _decorator, AS, _dec, _class, _crd, ccclass, disallowMultiple, ResponsiveCanvas;

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      ResolutionPolicy = _cc.ResolutionPolicy;
      screen = _cc.screen;
      view = _cc.view;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62772p2AZBPoJfOrE4hljIj", "ResponsiveCanvas", undefined);

      ({
        ccclass,
        disallowMultiple
      } = _decorator);
      /**
       * Make the canvas responsive for any aspect ratio.
       */

      _export("ResponsiveCanvas", ResponsiveCanvas = (_dec = ccclass("ResponsiveCanvas"), _dec(_class = disallowMultiple(_class = class ResponsiveCanvas extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        makeResponsive() {
          if (!this.enabledInHierarchy) return;
          const deviceResolution = screen.windowSize;
          const designResolution = view.getDesignResolutionSize(); // calculte design ratio

          const desiredRatio = designResolution.width / designResolution.height; // calculte device ratio

          const deviceRatio = deviceResolution.width / deviceResolution.height;

          if (deviceRatio >= desiredRatio) {
            view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
          } else if (deviceRatio < desiredRatio) {
            view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
          }
        }

        awake() {
          view.setResizeCallback(this.makeResponsive);
          this.makeResponsive();
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=18a0ecf84a5d8f9a3db11981790e17ea4db40b4b.js.map