System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, EventHandler, Slider, _decorator, AS, error, networkReplicator, _dec, _dec2, _class, _crd, ccclass, disallowMultiple, requireComponent, SLIDE, ReplicatedSlider;

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReplicatedEvent(extras) {
    _reporterNs.report("IReplicatedEvent", "./NetworkReplicator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetworkReplicator(extras) {
    _reporterNs.report("networkReplicator", "./NetworkReplicator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      Slider = _cc.Slider;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      networkReplicator = _unresolved_4.networkReplicator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64281fZf/5Hr4L7w+m6YbNB", "ReplicatedSlider", undefined);

      ({
        ccclass,
        disallowMultiple,
        requireComponent
      } = _decorator);
      SLIDE = "slide";

      _export("ReplicatedSlider", ReplicatedSlider = (_dec = ccclass("ReplicatedSlider"), _dec2 = requireComponent(Slider), _dec(_class = _dec2(_class = disallowMultiple(_class = class ReplicatedSlider extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super();
          this._replicationIndex = void 0;
          this._slider = null;
          this._replicationIndex = (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).registerEvent(this);
        }

        awake() {
          this._slider = this.getComponent(Slider);

          if (this._slider == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The replicated slider must be attached to a node with slider component.");
            return;
          }

          this.node.on(SLIDE, this._onSlide, this);
        }

        onActivityEvent(name, data) {
          if (this._slider == null || name !== SLIDE) return;

          if (data == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The recieved data on slide event cannot be null.");
            return;
          }

          this._slider.progress = data;
          EventHandler.emitEvents(this._slider.slideEvents, this._slider);
          this.node.emit(SLIDE, this._slider, true);
        }

        getStateData() {
          var _this$_slider;

          return (_this$_slider = this._slider) == null ? void 0 : _this$_slider.progress;
        }

        updateStateData(data) {
          if (this._slider == null) return;
          this._slider.progress = data;
          EventHandler.emitEvents(this._slider.slideEvents, this._slider);
          this.node.emit(SLIDE, this._slider, true);
        }

        _onSlide(slider, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: SLIDE,
            data: slider.progress
          });
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16fc1d750e47c9492cc5787e8a6c182a921d0467.js.map