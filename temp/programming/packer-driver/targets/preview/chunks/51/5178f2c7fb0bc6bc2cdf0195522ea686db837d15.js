System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, Toggle, _decorator, AS, GroupTag, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, requireComponent, GroupToggle;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupTag(extras) {
    _reporterNs.report("GroupTag", "./GroupTag", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      Toggle = _cc.Toggle;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      GroupTag = _unresolved_3.GroupTag;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ced84d2Nx1MdYS6eL3eKxdx", "GroupToggle", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("GroupToggle", GroupToggle = (_dec = ccclass("GroupToggle"), _dec2 = requireComponent(Toggle), _dec(_class = _dec2(_class = (_class2 = class GroupToggle extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tag", _descriptor, this);
        }

        awake() {
          this._updateToggles(this.getComponent(Toggle));

          this.node.on(Toggle.EventType.TOGGLE, this._updateToggles, this);
        }

        _updateToggles(toggle) {
          var _getNodes;

          if (!this.tag) return;
          (_getNodes = (_crd && GroupTag === void 0 ? (_reportPossibleCrUseOfGroupTag({
            error: Error()
          }), GroupTag) : GroupTag).getNodes(this.tag)) == null ? void 0 : _getNodes.forEach(node => node.active = toggle.isChecked);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tag", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5178f2c7fb0bc6bc2cdf0195522ea686db837d15.js.map