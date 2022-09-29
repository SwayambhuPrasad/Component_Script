System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, EventHandler, _decorator, AS, error, networkReplicator, OptionButton, _dec, _dec2, _class, _crd, ccclass, disallowMultiple, requireComponent, ReplicatedOptionButton;

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

  function _reportPossibleCrUseOfOptionButton(extras) {
    _reporterNs.report("OptionButton", "./OptionButton", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      networkReplicator = _unresolved_4.networkReplicator;
    }, function (_unresolved_5) {
      OptionButton = _unresolved_5.OptionButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1de81COIwlMHpyHePnC8i+5", "ReplicatedOptionButton", undefined);

      ({
        ccclass,
        disallowMultiple,
        requireComponent
      } = _decorator);
      /**
       * Class to automate replication of option-update events for the option button
       * attached to the same node using the `NetworkReplicator`.
       */

      _export("ReplicatedOptionButton", ReplicatedOptionButton = (_dec = ccclass("ReplicatedOptionButton"), _dec2 = requireComponent(_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
        error: Error()
      }), OptionButton) : OptionButton), _dec(_class = _dec2(_class = disallowMultiple(_class = class ReplicatedOptionButton extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super();
          this._replicationIndex = void 0;
          this._optionButton = null;
          this._replicationIndex = (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).registerEvent(this);
        }

        awake() {
          this._optionButton = this.getComponent(_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
            error: Error()
          }), OptionButton) : OptionButton);

          if (this._optionButton == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The replicated option button must be attached to a node with option button.");
            return;
          }

          this.node.on((_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
            error: Error()
          }), OptionButton) : OptionButton).EventType.OPTION_CHANGED, this._onOptionChanged, this);
        }

        onActivityEvent(name, data) {
          if (this._optionButton == null || name !== (_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
            error: Error()
          }), OptionButton) : OptionButton).EventType.OPTION_CHANGED) return;

          if (data == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The data recieved on option-changed event cannot be null.");
            return;
          }

          this._optionButton.selectedIndex = data;
          EventHandler.emitEvents(this._optionButton.optionChangedEvents, this._optionButton);
          this.node.emit((_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
            error: Error()
          }), OptionButton) : OptionButton).EventType.OPTION_CHANGED, this._optionButton, true);
        }

        getStateData() {
          var _this$_optionButton;

          return (_this$_optionButton = this._optionButton) == null ? void 0 : _this$_optionButton.selectedIndex;
        }

        updateStateData(data) {
          if (this._optionButton == null) return;
          this._optionButton.selectedIndex = data;
          EventHandler.emitEvents(this._optionButton.optionChangedEvents, this._optionButton);
          this.node.emit((_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
            error: Error()
          }), OptionButton) : OptionButton).EventType.OPTION_CHANGED, this._optionButton, true);
        }

        _onOptionChanged(button, isReplicated) {
          // The button is valid only if button triggered.
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && OptionButton === void 0 ? (_reportPossibleCrUseOfOptionButton({
              error: Error()
            }), OptionButton) : OptionButton).EventType.OPTION_CHANGED,
            data: button.selectedIndex
          });
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86792df2029c1e7c352a80e45e2a215a6618f7f2.js.map