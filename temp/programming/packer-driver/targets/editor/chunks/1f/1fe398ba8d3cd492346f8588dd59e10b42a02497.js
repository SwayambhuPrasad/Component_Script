System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Director, director, _crd;

  function onGameInit() {
    const loader = document.getElementById("GameLoading");

    if (loader) {
      loader.style.display = "none";
    }
  }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Director = _cc.Director;
      director = _cc.director;
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
//# sourceMappingURL=1fe398ba8d3cd492346f8588dd59e10b42a02497.js.map