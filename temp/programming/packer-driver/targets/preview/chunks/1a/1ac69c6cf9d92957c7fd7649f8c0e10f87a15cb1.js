System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, EventHandler, v3, Vec3, _decorator, AS, error, networkReplicator, UIDrag, _dec, _dec2, _class, _crd, ccclass, disallowMultiple, requireComponent, ReplicatedUIDrag;

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

  function _reportPossibleCrUseOfUIDrag(extras) {
    _reporterNs.report("UIDrag", "./UIDrag", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      networkReplicator = _unresolved_4.networkReplicator;
    }, function (_unresolved_5) {
      UIDrag = _unresolved_5.UIDrag;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3060bn7+rdG2b1qfOWboEtj", "ReplicatedUIDrag", undefined);

      ({
        ccclass,
        disallowMultiple,
        requireComponent
      } = _decorator);
      /**
       * Class to automate replication of events for the `DragData` attached to
       * the same node using the `NetworkReplicator`.
       */

      _export("ReplicatedUIDrag", ReplicatedUIDrag = (_dec = ccclass("ReplicatedUIDrag"), _dec2 = requireComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
        error: Error()
      }), UIDrag) : UIDrag), _dec(_class = _dec2(_class = disallowMultiple(_class = class ReplicatedUIDrag extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super();
          this._replicationIndex = void 0;
          this._drag = null;
          this._replicationIndex = (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).registerEvent(this);
        }

        awake() {
          this._drag = this.getComponent(_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
            error: Error()
          }), UIDrag) : UIDrag); // TODO: Add debounce.

          if (this._drag == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("the replicated UIDrag must be attached to node with UIDrag component.");
            return;
          }

          this.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
            error: Error()
          }), UIDrag) : UIDrag).EventType.DRAG_DID_BEGAN, this._onDragBegan, this);
          this.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
            error: Error()
          }), UIDrag) : UIDrag).EventType.DRAG_DID_END, this._onDragEnded, this);
          this.node.on((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
            error: Error()
          }), UIDrag) : UIDrag).EventType.DRAG_MOVE, this._onDragMove, this);
        }

        onActivityEvent(name, data) {
          if (this._drag == null) return;

          switch (name) {
            case (_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_BEGAN:
              {
                this.node.emit((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                  error: Error()
                }), UIDrag) : UIDrag).EventType.DRAG_DID_BEGAN, this._drag, true);
                EventHandler.emitEvents(this._drag.dragDidBeganEvents, this._drag);
                break;
              }

            case (_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_END:
              {
                this._drag.checkUIDrop();

                this.node.emit((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                  error: Error()
                }), UIDrag) : UIDrag).EventType.DRAG_DID_END, this._drag, true);
                EventHandler.emitEvents(this._drag.dragDidEndedEvents, this._drag);
                break;
              }

            case (_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_MOVE:
              {
                if (data == null) {
                  (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                    error: Error()
                  }), error) : error)("The data recieved on drag-move cannot be null.");
                  return;
                }

                this._drag.targetPosition = v3(data.x, data.y, 0);
                this.node.emit((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
                  error: Error()
                }), UIDrag) : UIDrag).EventType.DRAG_MOVE, this._drag, true);
                EventHandler.emitEvents(this._drag.dragMoveEvents, this._drag);
                break;
              }

            default:
              break;
          }
        }

        getStateData() {
          var _this$_drag;

          if (!((_this$_drag = this._drag) != null && _this$_drag.targetPosition)) return;
          var targetPosition = this._drag.targetPosition;
          return {
            x: targetPosition.x,
            y: targetPosition.y
          };
        }

        updateStateData(data) {
          if (!this._drag) return; // @ts-ignore

          var parentCanvas = this._drag._parentCanvas;

          this._drag.forceSetPosition(parentCanvas.convertToWorldSpaceAR(v3(data.x, data.y, 0)));

          this.node.emit((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
            error: Error()
          }), UIDrag) : UIDrag).EventType.DRAG_DID_BEGAN, this._drag, true);
          EventHandler.emitEvents(this._drag.dragDidBeganEvents, this._drag);
          this.node.emit((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
            error: Error()
          }), UIDrag) : UIDrag).EventType.DRAG_MOVE, this._drag, true);
          EventHandler.emitEvents(this._drag.dragMoveEvents, this._drag);
          this.node.emit((_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
            error: Error()
          }), UIDrag) : UIDrag).EventType.DRAG_DID_END, this._drag, true);
          EventHandler.emitEvents(this._drag.dragDidEndedEvents, this._drag);
        }

        _onDragBegan(_drag, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_BEGAN
          });
        }

        _onDragEnded(_drag, isReplicated) {
          if (isReplicated) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_DID_END
          });
        }

        _onDragMove(drag, isReplicated) {
          if (isReplicated) return;
          var delta = Vec3.subtract(v3(), drag.targetPosition, drag.previousTargetPosition); // throttle the event to avoid sending too many events.

          if (Vec3.lengthSqr(delta) < 0.1) return;
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: (_crd && UIDrag === void 0 ? (_reportPossibleCrUseOfUIDrag({
              error: Error()
            }), UIDrag) : UIDrag).EventType.DRAG_MOVE,
            data: {
              x: drag.targetPosition.x,
              y: drag.targetPosition.y
            }
          });
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1ac69c6cf9d92957c7fd7649f8c0e10f87a15cb1.js.map