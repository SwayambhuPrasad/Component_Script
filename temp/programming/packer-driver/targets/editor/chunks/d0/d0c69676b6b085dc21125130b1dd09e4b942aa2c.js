System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, _decorator, EDITOR, AS, error, _dec, _class, _class2, _descriptor, _crd, ccclass, property, tagNodes, GroupTag;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function removeFromGroup(group, node) {
    const bin = tagNodes[group];

    if (!bin) {
      (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
        error: Error()
      }), error) : error)(`Group ${group} does not exist`);
      return;
    }

    if (bin.has(node)) bin.delete(node);
  }

  function addToGroup(group, node) {
    if (!group) return;
    let bin = tagNodes[group];

    if (!bin) {
      bin = tagNodes[group] = new Set();
    }

    if (!bin.has(node)) bin.add(node);
  }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60f22hG/udCn5X2NZ4QagVL", "GroupTag", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      tagNodes = {};

      _export("GroupTag", GroupTag = (_dec = ccclass("GroupTag"), _dec(_class = (_class2 = class GroupTag extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_tag", _descriptor, this);
        }

        get tag() {
          return this._tag;
        }

        set tag(value) {
          if (EDITOR) {
            this._tag = value;
            return;
          }

          if (this._tag === value) return;
          if (this._tag) removeFromGroup(this._tag, this.node);
          this._tag = value;
          if (this._tag) addToGroup(this._tag, this.node);
        }

        static getNodes(tag) {
          return tagNodes[tag];
        }

        awake() {
          if (!this.tag) return;
          addToGroup(this.tag, this.node);
        }

        onDestroy() {
          if (!this.tag) return;
          removeFromGroup(this.tag, this.node);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_tag", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "tag", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "tag"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d0c69676b6b085dc21125130b1dd09e4b942aa2c.js.map