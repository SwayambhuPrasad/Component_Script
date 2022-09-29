System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, _decorator, AS, _dec, _class, _crd, ccclass, property, requireComponent, MCQ;

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "db://as_framework/scripts//ASComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "02be9kFlBdOUqJSxOx180YD", "Swap", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("MCQ", MCQ = (_dec = ccclass('Swap'), _dec(_class = class MCQ extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        awake() {}

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1243cdb2794a6e6730074fecf776becf99d88edf.js.map