System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Button, UITransform, ReplicatedButton, _dec, _class, _crd, ccclass, property, requireComponent, MCQ;

  function _reportPossibleCrUseOfReplicatedButton(extras) {
    _reporterNs.report("ReplicatedButton", "db://as_framework/scripts/ReplicatedButton", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Button = _cc.Button;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ReplicatedButton = _unresolved_2.ReplicatedButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e521eMULExEDaTU8T7t0kag", "MCQ", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("MCQ", MCQ = (_dec = ccclass('MCQ'), _dec(_class = class MCQ extends Component {
        awake() {
          const insertButtonsComp = this.node.getComponentsInChildren(UITransform);
          insertButtonsComp.forEach((child, i) => {
            child.addComponent(Button);
            child.addComponent(_crd && ReplicatedButton === void 0 ? (_reportPossibleCrUseOfReplicatedButton({
              error: Error()
            }), ReplicatedButton) : ReplicatedButton);
          });
          const choiceButtons = this.node.getComponentsInChildren(Button);
          choiceButtons.forEach((btn, i) => {
            let click = [];
            click.push(0);
            btn.node.on(Button.EventType.CLICK, async () => {
              click[i] ? 0 : 1;
            });
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f52470e8594f32a0195d4d5f05b143f10db591d.js.map