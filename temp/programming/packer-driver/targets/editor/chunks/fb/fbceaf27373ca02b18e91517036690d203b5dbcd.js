System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, EventHandler, Toggle, _decorator, AS, error, networkReplicator, _dec, _dec2, _class, _crd, ccclass, requireComponent, disallowMultiple, ReplicatedToggle;

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
      Toggle = _cc.Toggle;
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

      _cclegacy._RF.push({}, "ab73bd+66BB/rUrKCK+7k3k", "ReplicatedToggle", undefined);

      ({
        ccclass,
        requireComponent,
        disallowMultiple
      } = _decorator);

      _export("ReplicatedToggle", ReplicatedToggle = (_dec = ccclass("ReplicatedToggle"), _dec2 = requireComponent(Toggle), _dec(_class = _dec2(_class = disallowMultiple(_class = class ReplicatedToggle extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super();
          this._replicationIndex = void 0;
          this._toggle = null;
          this._replicationIndex = (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).registerEvent(this);
        }

        awake() {
          this._toggle = this.getComponent(Toggle);

          if (this._toggle == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The replicated toggle must be attached to a node with toggle component.");
            return;
          }

          this.node.on(Toggle.EventType.CLICK, this._onClick, this);
        }

        onActivityEvent(name, data) {
          if (this._toggle == null || name !== Toggle.EventType.TOGGLE) return;

          if (data == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The data recieved on toggle event cannot be null.");
            return;
          }

          this.node.emit(Toggle.EventType.CLICK, this._toggle, true);
          EventHandler.emitEvents(this._toggle.clickEvents, this._toggle);
        }

        getStateData() {
          var _this$_toggle;

          return (_this$_toggle = this._toggle) == null ? void 0 : _this$_toggle.isChecked;
        }

        updateStateData(data) {
          if (this._toggle == null) return;

          this._toggle.setIsCheckedWithoutNotify(data);

          this.node.emit(Toggle.EventType.TOGGLE, this._toggle, true);
          EventHandler.emitEvents(this._toggle.checkEvents, this._toggle);
        }

        _onClick(toggle, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: Toggle.EventType.TOGGLE,
            data: toggle.isChecked
          });
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fbceaf27373ca02b18e91517036690d203b5dbcd.js.map