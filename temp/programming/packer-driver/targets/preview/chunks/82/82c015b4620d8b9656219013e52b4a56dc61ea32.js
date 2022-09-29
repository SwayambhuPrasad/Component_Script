System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, EventHandler, _decorator, AS, error, networkReplicator, UIPopup, _dec, _dec2, _class, _crd, ccclass, disallowMultiple, requireComponent, ReplicatedUIPopup;

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

  function _reportPossibleCrUseOfUIPopup(extras) {
    _reporterNs.report("UIPopup", "./UIPopup", _context.meta, extras);
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
      UIPopup = _unresolved_5.UIPopup;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bc231X3TzpClYuyUFIaLN71", "ReplicatedUIPopup", undefined);

      ({
        ccclass,
        disallowMultiple,
        requireComponent
      } = _decorator);

      _export("ReplicatedUIPopup", ReplicatedUIPopup = (_dec = ccclass("ReplicatedUIPopup"), _dec2 = requireComponent(_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
        error: Error()
      }), UIPopup) : UIPopup), _dec(_class = _dec2(_class = disallowMultiple(_class = class ReplicatedUIPopup extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super();
          this._replicationIndex = void 0;
          this._popup = null;
          this._replicationIndex = (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).registerEvent(this);
        }

        awake() {
          this._popup = this.getComponent(_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup);

          if (this._popup == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The replicated popup must be attached to a node with popup.");
            return;
          }

          this.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.ABOUT_TO_HIDE, this._onAboutToHide, this);
          this.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.HIDE_COMPLETE, this._onHideComplete, this);
          this.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.ABOUT_TO_SHOW, this._onAboutToShow, this);
          this.node.on((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
            error: Error()
          }), UIPopup) : UIPopup).EventType.SHOW_COMPLETE, this._onShowComplete, this);
        }

        onActivityEvent(name, data) {
          if (this._popup == null) return;

          switch (name) {
            case (_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
              error: Error()
            }), UIPopup) : UIPopup).EventType.ABOUT_TO_HIDE:
              {
                EventHandler.emitEvents(this._popup.aboutToHideEvents, this._popup);
                this.node.emit((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
                  error: Error()
                }), UIPopup) : UIPopup).EventType.ABOUT_TO_HIDE, this._popup, true);
                break;
              }

            case (_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
              error: Error()
            }), UIPopup) : UIPopup).EventType.HIDE_COMPLETE:
              {
                EventHandler.emitEvents(this._popup.hideCompleteEvents, this._popup);
                this.node.emit((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
                  error: Error()
                }), UIPopup) : UIPopup).EventType.HIDE_COMPLETE, this._popup, true);
                break;
              }

            case (_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
              error: Error()
            }), UIPopup) : UIPopup).EventType.ABOUT_TO_SHOW:
              {
                EventHandler.emitEvents(this._popup.aboutToShowEvents, this._popup);
                this.node.emit((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
                  error: Error()
                }), UIPopup) : UIPopup).EventType.ABOUT_TO_SHOW, this._popup, true);
                break;
              }

            case (_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
              error: Error()
            }), UIPopup) : UIPopup).EventType.SHOW_COMPLETE:
              {
                EventHandler.emitEvents(this._popup.showCompleteEvents, this._popup);
                this.node.emit((_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
                  error: Error()
                }), UIPopup) : UIPopup).EventType.SHOW_COMPLETE, this._popup, true);
                break;
              }

            default:
              break;
          }
        }

        getStateData() {
          var _this$_popup;

          return (_this$_popup = this._popup) == null ? void 0 : _this$_popup.isVisible;
        }

        updateStateData(data) {
          if (this._popup == null) return;

          if (data) {
            this._popup.show();
          } else {
            this._popup.hide();
          }
        }

        _onAboutToHide(popup, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
              error: Error()
            }), UIPopup) : UIPopup).EventType.ABOUT_TO_HIDE
          });
        }

        _onHideComplete(popup, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
              error: Error()
            }), UIPopup) : UIPopup).EventType.HIDE_COMPLETE
          });
        }

        _onAboutToShow(popup, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
              error: Error()
            }), UIPopup) : UIPopup).EventType.ABOUT_TO_SHOW
          });
        }

        _onShowComplete(popup, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && UIPopup === void 0 ? (_reportPossibleCrUseOfUIPopup({
              error: Error()
            }), UIPopup) : UIPopup).EventType.SHOW_COMPLETE
          });
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82c015b4620d8b9656219013e52b4a56dc61ea32.js.map