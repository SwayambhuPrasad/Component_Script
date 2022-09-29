System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Director, director, debug, _crd;

  function onGameInit() {
    var loader = document.getElementById("GameLoading");

    if (loader) {
      loader.style.display = "none";
    }

    (_crd && debug === void 0 ? (_reportPossibleCrUseOfdebug({
      error: Error()
    }), debug) : debug)("Page loaded in " + performance.now() + "ms");
  }

  function _reportPossibleCrUseOfdebug(extras) {
    _reporterNs.report("debug", "./Logger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Director = _cc.Director;
      director = _cc.director;
    }, function (_unresolved_2) {
      debug = _unresolved_2.debug;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f6c19r6qBlN3IP1Ci28FCOd", "GameLoading", undefined);

      director.once(Director.EVENT_AFTER_SCENE_LAUNCH, onGameInit);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a89b5d525b6c92943c5545959bddb99478491f02.js.map