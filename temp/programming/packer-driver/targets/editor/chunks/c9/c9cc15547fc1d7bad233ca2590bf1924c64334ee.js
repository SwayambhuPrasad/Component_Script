System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, Component, EventHandler, EventTouch, _decorator, AS, error, networkReplicator, _dec, _dec2, _class, _crd, ccclass, disallowMultiple, requireComponent, IS_REPLICATED, ReplicatedButton;

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
      Button = _cc.Button;
      Component = _cc.Component;
      EventHandler = _cc.EventHandler;
      EventTouch = _cc.EventTouch;
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

      _cclegacy._RF.push({}, "eec4f6XhIRIjroflXtCa/3c", "ReplicatedButton", undefined);

      ({
        ccclass,
        disallowMultiple,
        requireComponent
      } = _decorator);
      IS_REPLICATED = "IS_REPLICATED";
      /**
       * Class to automate replication of click events for the button attached to
       * the same node using the `NetworkReplicator`.
       */

      _export("ReplicatedButton", ReplicatedButton = (_dec = ccclass("ReplicatedButton"), _dec2 = requireComponent(Button), _dec(_class = _dec2(_class = disallowMultiple(_class = class ReplicatedButton extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super();
          this._replicationIndex = void 0;
          this._button = null;
          this._replicationIndex = (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).registerEvent(this);
        }

        awake() {
          this._button = this.getComponent(Button);

          if (this._button == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The replicated button must be attached to a node with button component.");
            return;
          }

          const clickEvent = new EventHandler();
          clickEvent.target = this.node;
          clickEvent.component = "ReplicatedButton";
          clickEvent.handler = "_onClick";
          clickEvent.customEventData = IS_REPLICATED;

          this._button.clickEvents.push(clickEvent);
        }

        onActivityEvent(name, data) {
          if (this._button == null) return;

          if (name === Button.EventType.CLICK) {
            const eventData = new EventTouch(data.touches, data.bubbles, data.eventType, data.allTouches);
            eventData.target = eventData.currentTarget = this.node;
            EventHandler.emitEvents(this._button.clickEvents.filter(event => event.customEventData !== IS_REPLICATED), eventData);
            this.node.emit(Button.EventType.CLICK, this._button, true);
          }
        }

        _onClick(event, customEventData) {
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).sendEvent({
            id: this._replicationIndex,
            name: Button.EventType.CLICK,
            data: {
              touches: event.getTouches(),
              bubbles: event.bubbles,
              eventType: event.type,
              allTouches: event.getAllTouches()
            }
          });
        }

      }) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9cc15547fc1d7bad233ca2590bf1924c64334ee.js.map