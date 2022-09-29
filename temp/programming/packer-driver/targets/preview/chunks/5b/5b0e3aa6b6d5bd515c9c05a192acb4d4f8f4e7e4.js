System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Director, director, _crd;

  function onGameInit() {
    var loader = document.getElementById("GameLoading");

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
//# sourceMappingURL=5b0e3aa6b6d5bd515c9c05a192acb4d4f8f4e7e4.js.map