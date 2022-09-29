System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SimpleEvent, _crd;

  _export("SimpleEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ed3aI4BotCUrc6zOpshaXK", "LiteEvent", undefined);

      _export("SimpleEvent", SimpleEvent = class SimpleEvent {
        constructor() {
          this._handlers = new Set();
        }

        on(handler, thisArg) {
          if (thisArg) handler = handler.bind(thisArg);

          this._handlers.add(handler);
        }

        off(handler, thisArg) {
          if (thisArg) handler = handler.bind(thisArg);

          this._handlers.delete(handler);
        }

        trigger(data) {
          this._handlers.forEach(h => h(data));
        }

        expose() {
          return this;
        }

        clear() {
          this._handlers.clear();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eb50f5e3303b9653df9f50f28ee782bdd75f3368.js.map