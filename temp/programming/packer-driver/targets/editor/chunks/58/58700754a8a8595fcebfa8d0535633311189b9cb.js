System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, EditBox, EventHandler, _decorator, AS, error, networkReplicator, _dec, _dec2, _class, _crd, ccclass, disallowMultiple, requireComponent, ReplicatedEditBox;

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
      EditBox = _cc.EditBox;
      EventHandler = _cc.EventHandler;
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

      _cclegacy._RF.push({}, "e5ad4tdFNxN0bcULPAobxdE", "ReplicatedEditBox", undefined);

      ({
        ccclass,
        disallowMultiple,
        requireComponent
      } = _decorator);
      /**
       * Class to automate replication of events for the `EditBox` attached to
       * the same node using the `NetworkReplicator`.
       *
       * Here only the `text-changed` event is replicated.
       * The begin and end events are used to prevent simultaneous editing.
       */

      _export("ReplicatedEditBox", ReplicatedEditBox = (_dec = ccclass("ReplicatedEditBox"), _dec2 = requireComponent(EditBox), _dec(_class = _dec2(_class = disallowMultiple(_class = class ReplicatedEditBox extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super();
          this._replicationIndex = void 0;
          this._editBox = null;
          this._replicationIndex = (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).registerEvent(this);
        }

        awake() {
          this._editBox = this.getComponent(EditBox); // TODO: Add debounce.

          if (this._editBox == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The replicated edit box must be attached to a node with edit box.");
            return;
          }

          this.node.on(EditBox.EventType.EDITING_DID_BEGAN, this._onEditingBegan, this);
          this.node.on(EditBox.EventType.EDITING_DID_ENDED, this._onEditingEnded, this);
          this.node.on(EditBox.EventType.TEXT_CHANGED, this._onTextChanged, this);
        }

        onActivityEvent(name, data) {
          if (this._editBox == null) return;

          switch (name) {
            case EditBox.EventType.EDITING_DID_BEGAN:
              {
                EventHandler.emitEvents(this._editBox.editingDidBegan, this._editBox);
                this.node.emit(EditBox.EventType.EDITING_DID_BEGAN, this._editBox, true);
                break;
              }

            case EditBox.EventType.EDITING_DID_ENDED:
              {
                EventHandler.emitEvents(this._editBox.editingDidEnded, this._editBox);
                this.node.emit(EditBox.EventType.EDITING_DID_ENDED, this._editBox, true);
                break;
              }

            case EditBox.EventType.TEXT_CHANGED:
              {
                // Update the edit box in current user applet.
                if (data == null) {
                  (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                    error: Error()
                  }), error) : error)("The data recieved on text-changed event cannot be null.");
                  return;
                }

                this._editBox.string = data;
                EventHandler.emitEvents(this._editBox.textChanged, this._editBox);
                this.node.emit(EditBox.EventType.TEXT_CHANGED, this._editBox, true);
                break;
              }

            default:
              break;
          }
        }

        getStateData() {
          var _this$_editBox;

          return (_this$_editBox = this._editBox) == null ? void 0 : _this$_editBox.string;
        }

        updateStateData(data) {
          if (this._editBox == null) return;
          this._editBox.string = data;
          EventHandler.emitEvents(this._editBox.editingDidBegan, this._editBox);
          this.node.emit(EditBox.EventType.EDITING_DID_BEGAN, this._editBox, true);
          EventHandler.emitEvents(this._editBox.textChanged, this._editBox);
          this.node.emit(EditBox.EventType.TEXT_CHANGED, this._editBox, true);
          EventHandler.emitEvents(this._editBox.editingDidEnded, this._editBox);
          this.node.emit(EditBox.EventType.EDITING_DID_ENDED, this._editBox, true);
        }

        _onEditingBegan(_editBox, isReplicated) {
          if (isReplicated || _editBox == null) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: EditBox.EventType.EDITING_DID_BEGAN
          });
        }

        _onEditingEnded(_editBox, isReplicated) {
          if (isReplicated || _editBox == null) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: EditBox.EventType.EDITING_DID_ENDED
          });
        }

        _onTextChanged(editBox, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: EditBox.EventType.TEXT_CHANGED,
            data: editBox.string
          });
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58700754a8a8595fcebfa8d0535633311189b9cb.js.map