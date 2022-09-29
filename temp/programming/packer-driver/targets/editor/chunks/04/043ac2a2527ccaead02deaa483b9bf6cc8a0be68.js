System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Event, _dec, _class, _class2, _crd, ccclass, property, ValidationEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Event = _cc.Event;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "850afCKehZMxJvN8gLzbKWh", "ValidationEvent", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ValidationEvent", ValidationEvent = (_dec = ccclass('ValidationEvent'), _dec(_class = (_class2 = class ValidationEvent extends Event {
        constructor(bubbles, data) {
          // @ts-ignore
          super(ValidationEvent.TYPE, bubbles);
          this.isCorrect = false;
          if (data != null) this.isCorrect = data;
        }

      }, _class2.TYPE = "check-status", _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=043ac2a2527ccaead02deaa483b9bf6cc8a0be68.js.map