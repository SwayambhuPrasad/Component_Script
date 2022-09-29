System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, _crd;

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      error = _unresolved_2.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3facG/6XtKyaKuUuojmvI9", "ErrorHandling", undefined);

      window.onerror = message => (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
        error: Error()
      }), error) : error)(`AS ERROR!!${message}`);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c4ef2fd3d610e18bdd79241b890248d9474e1c26.js.map