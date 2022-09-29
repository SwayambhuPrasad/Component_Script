System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, Director, director, EDITOR, TEST, _crd;

  function AS(base) {
    class WrappedComponent extends base {
      constructor(..._args) {
        super(); // @ts-expect-error

        this._isAwake = false;
        if ((EDITOR || TEST) && !base._executeInEditMode) return;
        director.once(Director.EVENT_AFTER_SCENE_LAUNCH, () => {
          if (this.awake && !this._isAwake) {
            this.awake();
            this._isAwake = true;
          }
        });
      }

      get _isAwakeCalled() {
        return this._isAwake;
      }

      get _isAnimating() {
        //@ts-expect-error
        return this.node._isAnimating;
      }

      set _isAnimating(value) {
        //@ts-expect-error
        this.node._isAnimating = value;
      }

      __preload() {
        if (super.__preload) super.__preload();

        if (this.awake && !this._isAwake) {
          this.awake();
          this._isAwake = true;
        }
      }
      /**
       * This method is called at scene load regardless of active
       * state.
       */


    }

    return WrappedComponent;
  }

  _export("AS", AS);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Director = _cc.Director;
      director = _cc.director;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
      TEST = _ccEnv.TEST;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f07eXKaB1JvYbmBlBEMLhJ", "ASComponent", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0e76b67a3c00b435c5f2fcbd8ca6046d6b3f0c4d.js.map