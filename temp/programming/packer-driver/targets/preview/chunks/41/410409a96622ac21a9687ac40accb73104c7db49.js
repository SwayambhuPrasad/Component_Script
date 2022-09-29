System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, HPaddingNode, StyleStateMapping, _crd, styleStateMapping;

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./RenderingState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHPaddingNode(extras) {
    _reporterNs.report("HPaddingNode", "./virtualCanvasNodes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      HPaddingNode = _unresolved_2.HPaddingNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ffbbcPubU5BfoOc7VYhut8N", "styleStateMapping", undefined);

      /**
       * Each function in this singleton represents a mapping between a styleName and
       * how it affects the RenderingState.
       *
       * For example, color would change the color of nodes.
       *
       * While top would shift nodes down (i.e. y) by a certain factor.
       */
      StyleStateMapping = class StyleStateMapping {
        color(state, value) {
          return state.withColor(value);
        }

        top(state, value) {
          var yShift = +value.replace("em", "") * state.em;
          return state.withYShift(yShift);
        }

        paddingLeft(state, value) {
          var spacingLeft = +value.replace("em", "") * state.em;
          var padLeftNode = new (_crd && HPaddingNode === void 0 ? (_reportPossibleCrUseOfHPaddingNode({
            error: Error()
          }), HPaddingNode) : HPaddingNode)(state.classes);
          padLeftNode.setPosition(state.nextX, state.y);
          padLeftNode.bounds.set({
            width: spacingLeft
          });
          state.vlist.addCell(padLeftNode);
          return state.withResetMargin();
        }

        marginLeft(state, value) {
          var marginLeft = +value.replace("em", "") * state.em;
          return state.withMarginLeft(marginLeft);
        }

        marginRight(state, value) {
          var marginRight = +value.replace("em", "") * state.em;
          return state.withMarginRight(marginRight);
        }

        minWidth(state, value) {
          var minWidth = +value.replace("em", "") * state.em;
          return state.withMinWidth(minWidth);
        }

      };

      _export("styleStateMapping", styleStateMapping = new StyleStateMapping());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=410409a96622ac21a9687ac40accb73104c7db49.js.map