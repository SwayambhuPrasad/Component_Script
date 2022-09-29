System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, Director, director, EventHandler, _decorator, AS, error, networkReplicator, SoftEditBox, _dec, _dec2, _class, _crd, ccclass, disallowMultiple, requireComponent, ReplicatedSoftEditBox;

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

  function _reportPossibleCrUseOfSoftEditBox(extras) {
    _reporterNs.report("SoftEditBox", "./SoftEditBox", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      Director = _cc.Director;
      director = _cc.director;
      EventHandler = _cc.EventHandler;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      networkReplicator = _unresolved_4.networkReplicator;
    }, function (_unresolved_5) {
      SoftEditBox = _unresolved_5.SoftEditBox;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b9f3Mm3tNKFrRQEFQy+0A4", "ReplicatedSoftEditBox", undefined);

      ({
        ccclass,
        disallowMultiple,
        requireComponent
      } = _decorator);
      /**
       * Class to automate replication of events for the `SoftEditBox` attached to
       * the same node using the `NetworkReplicator`.
       *
       * Here only the `text-changed` event is replicated.
       * The begin and end events are used to prevent simultaneous editing.
       */

      _export("ReplicatedSoftEditBox", ReplicatedSoftEditBox = (_dec = ccclass("ReplicatedSoftEditBox"), _dec2 = requireComponent(_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
        error: Error()
      }), SoftEditBox) : SoftEditBox), _dec(_class = _dec2(_class = disallowMultiple(_class = class ReplicatedSoftEditBox extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
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
          // TODO: Add debounce.
          this._editBox = this.getComponent(_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
            error: Error()
          }), SoftEditBox) : SoftEditBox);

          if (this._editBox == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The replicated soft edit box must be attached to a node with soft edit box.");
            return;
          }

          this.node.on((_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
            error: Error()
          }), SoftEditBox) : SoftEditBox).EventType.EDITING_DID_BEGAN, this._onEditingBegan, this);
          this.node.on((_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
            error: Error()
          }), SoftEditBox) : SoftEditBox).EventType.EDITING_DID_ENDED, this._onEditingEnded, this);
          this.node.on((_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
            error: Error()
          }), SoftEditBox) : SoftEditBox).EventType.TEXT_CHANGED, this._onTextChanged, this);
        }

        onActivityEvent(name, data) {
          if (this._editBox == null) return;

          switch (name) {
            case (_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
              error: Error()
            }), SoftEditBox) : SoftEditBox).EventType.EDITING_DID_BEGAN:
              {
                // Another user is editing this edit box. So disable in current
                // applet to avoid issues.
                // softEditBox.button.interactable = false;
                this._editBox.showEmptyKeypad();

                EventHandler.emitEvents(this._editBox.editingDidBeganEvents, this._editBox);
                this.node.emit((_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
                  error: Error()
                }), SoftEditBox) : SoftEditBox).EventType.EDITING_DID_BEGAN, this._editBox, true);
                break;
              }

            case (_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
              error: Error()
            }), SoftEditBox) : SoftEditBox).EventType.EDITING_DID_ENDED:
              {
                // Another user is done editing, enable it again.
                // softEditBox.button.interactable = true;
                this._editBox.hideKeypad(); // HACK: Replication handled inside SoftEditBox


                break;
              }

            case (_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
              error: Error()
            }), SoftEditBox) : SoftEditBox).EventType.TEXT_CHANGED:
              {
                if (data == null) {
                  (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                    error: Error()
                  }), error) : error)("The recieved data on text-changed event cannot be null.");
                  return;
                } // Update the edit box in current user applet.


                this._editBox.string = data;

                if (!this._editBox.isKeypadVisible || !this._editBox.isKeypadEmpty) {
                  this._editBox.showEmptyKeypad();
                }

                EventHandler.emitEvents(this._editBox.textChangedEvents, this._editBox);
                this.node.emit((_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
                  error: Error()
                }), SoftEditBox) : SoftEditBox).EventType.TEXT_CHANGED, this._editBox, true);
                break;
              }

            default:
              break;
          }
        }

        getStateData() {
          if (this._editBox == null) return;

          if (this._editBox.isKeypadVisible && !this._editBox.isKeypadEmpty) {
            // If the current edit box keypad is visible and not the empty keypad,
            // send a textchanged event at the begining of next frame to force proper sync of
            // the empty keypad popup, since on recieving text changed event the sync is done.
            director.once(Director.EVENT_BEGIN_FRAME, () => this._onTextChanged(this._editBox));
          }

          return {
            string: this._editBox.string,
            isKeypadOpen: this._editBox.isKeypadVisible
          };
        }

        updateStateData(data) {
          if (this._editBox == null) return;
          this._editBox.string = data.string;
          EventHandler.emitEvents(this._editBox.editingDidBeganEvents, this._editBox);
          this.node.emit((_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
            error: Error()
          }), SoftEditBox) : SoftEditBox).EventType.EDITING_DID_BEGAN, this._editBox, true);
          EventHandler.emitEvents(this._editBox.editingDidEndedEvents, this._editBox);
          this.node.emit((_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
            error: Error()
          }), SoftEditBox) : SoftEditBox).EventType.EDITING_DID_ENDED, this._editBox, true);
          EventHandler.emitEvents(this._editBox.textChangedEvents, this._editBox);
          this.node.emit((_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
            error: Error()
          }), SoftEditBox) : SoftEditBox).EventType.TEXT_CHANGED, this._editBox, true);
          if (data.isKeypadOpen) this._editBox.showKeypad();
        }

        _onEditingBegan(_editBox, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
              error: Error()
            }), SoftEditBox) : SoftEditBox).EventType.EDITING_DID_BEGAN
          });
        }

        _onEditingEnded(_editBox, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
              error: Error()
            }), SoftEditBox) : SoftEditBox).EventType.EDITING_DID_ENDED
          });
        }

        _onTextChanged(editBox, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && SoftEditBox === void 0 ? (_reportPossibleCrUseOfSoftEditBox({
              error: Error()
            }), SoftEditBox) : SoftEditBox).EventType.TEXT_CHANGED,
            data: editBox.string
          });
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=049320f73c181ddb7f5a5e6ed090f579aa301792.js.map