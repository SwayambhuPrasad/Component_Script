System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Director, director, SimpleEvent, Blackboard, _crd, blackboard;

  function _reportPossibleCrUseOfSimpleEvent(extras) {
    _reporterNs.report("SimpleEvent", "./LiteEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Director = _cc.Director;
      director = _cc.director;
    }, function (_unresolved_2) {
      SimpleEvent = _unresolved_2.SimpleEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3e51NqEslLw4mzuJpnZZGT", "Blackboard", undefined);

      Blackboard = class Blackboard {
        constructor() {
          this._data = {};
          this._changedEvent = new (_crd && SimpleEvent === void 0 ? (_reportPossibleCrUseOfSimpleEvent({
            error: Error()
          }), SimpleEvent) : SimpleEvent)();
          director.on(Director.EVENT_AFTER_SCENE_LAUNCH, () => {
            this._data = {};
          });
        }

        get changedEvent() {
          return this._changedEvent.expose();
        }

        get(key) {
          return this._data[key];
        }

        set(key, newVal) {
          if (newVal === this._data[key]) return;
          const oldVal = this._data[key];
          this._data[key] = newVal;

          this._changedEvent.trigger({
            key,
            oldVal,
            newVal
          });
        }

      };

      _export("blackboard", blackboard = new Blackboard());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17d31f9d546728af74dd141e3b8df2d7d754dee0.js.map