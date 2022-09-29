System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, VerticalList, State, _crd, SIZES;

  function _reportPossibleCrUseOfClassData(extras) {
    _reporterNs.report("ClassData", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClassList(extras) {
    _reporterNs.report("ClassList", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVerticalList(extras) {
    _reporterNs.report("VerticalList", "./virtualCanvasNodes", _context.meta, extras);
  }

  _export("State", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      VerticalList = _unresolved_2.VerticalList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68699Kxl4BL7KiMLX630Pvb", "RenderingState", undefined);

      SIZES = [null, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.2, 1.44, 1.728, 2.074, 2.488];

      _export("State", State = class State {
        constructor(state) {
          if (state === void 0) {
            state = {};
          }

          this._y = 0;
          this._baseSize = 44;
          this._sizeIndex = 6;
          this._family = "KaTeX_Main";
          this._variant = "normal";
          this._weight = "normal";
          this._vlist = new (_crd && VerticalList === void 0 ? (_reportPossibleCrUseOfVerticalList({
            error: Error()
          }), VerticalList) : VerticalList)("center", 0, []);
          this._textAlign = "left";
          this._minWidth = 0;
          this._marginRight = 0;
          this._marginLeft = 0;
          this._delimSizing = false;
          this._classes = [];
          this._mspace = 0;
          this._pstrut = undefined;
          this._color = "black";
          Object.assign(this, state);
        }

        get classes() {
          return this._classes;
        }

        get pstrut() {
          return this._pstrut;
        }

        get mspace() {
          return this._mspace;
        }

        get nextX() {
          return this.vlist.getNextNodePlacement() + this.marginLeft;
        }

        get marginLeft() {
          return this._marginLeft;
        }

        get marginRight() {
          return this._marginRight;
        }

        get delimSizing() {
          return this._delimSizing;
        }

        get minWidth() {
          return this._minWidth;
        }

        get color() {
          return this._color;
        }

        get textAlign() {
          return this._textAlign;
        }

        get y() {
          return this._y;
        }

        get vlist() {
          return this._vlist;
        }

        get em() {
          var _SIZES$this$_sizeInde;

          return this._baseSize * ((_SIZES$this$_sizeInde = SIZES[this._sizeIndex]) != null ? _SIZES$this$_sizeInde : 0);
        }

        get font() {
          var weight = this._weight ? this._weight + " " : "";
          var variant = this._variant ? this._variant + " " : "";
          var font = "" + variant + weight + this.em + "px " + this._family;
          return font;
        }

        static defaultOptions(options) {
          var _options$baseSize, _options$sizeIndex, _options$alignment, _options$defaultTextC;

          var state = new State();
          state._baseSize = (_options$baseSize = options.baseSize) != null ? _options$baseSize : 44;
          state._sizeIndex = (_options$sizeIndex = options.sizeIndex) != null ? _options$sizeIndex : 6;
          state._vlist = new (_crd && VerticalList === void 0 ? (_reportPossibleCrUseOfVerticalList({
            error: Error()
          }), VerticalList) : VerticalList)((_options$alignment = options.alignment) != null ? _options$alignment : "center", 0, []);
          state._color = (_options$defaultTextC = options.defaultTextColor) != null ? _options$defaultTextC : "black";
          return state;
        }

        withMarginLeft(marginLeft) {
          var state = new State(this);
          state._marginLeft += marginLeft;
          return state;
        }

        withMarginRight(marginRight) {
          var state = new State(this);
          state._marginRight += marginRight;
          return state;
        }

        withResetMargin() {
          var state = new State(this);
          state._marginRight = 0;
          state._marginLeft = 0;
          return state;
        }

        withDelimSizing() {
          var state = new State(this);
          state._delimSizing = true;
          return state;
        }

        withColor(color) {
          var state = new State(this);
          state._color = color;
          return state;
        }

        withYShift(y) {
          var state = new State(this);
          state._y += y;
          return state;
        }

        withFamily(family) {
          var state = new State(this);
          state._family = family;
          return state;
        }

        withWeight(weight) {
          var state = new State(this);
          state._weight = weight;
          return state;
        }

        withVlist(table) {
          var state = new State(this);
          state._vlist = table;
          return state;
        }

        withClass(classData) {
          var state = new State(this);
          var clonedClasses = [];

          state._classes.forEach(val => clonedClasses.push(Object.assign({}, val)));

          clonedClasses.push(classData);
          state._classes = clonedClasses;
          return state;
        }

        withMSpace(mspace) {
          var state = new State(this);
          state._mspace = mspace;
          return state;
        }

        withVariant(variant) {
          var state = new State(this);
          state._variant = variant;
          return state;
        }

        withSize(size) {
          var state = new State(this);
          state._sizeIndex = size;
          return state;
        }

        withTextAlign(align) {
          var state = new State(this);
          state._textAlign = align;
          return state;
        }

        withMinWidth(width) {
          var state = new State(this);
          state._minWidth = width;
          return state;
        }

        withPstrut(pstrut) {
          var state = new State(this);
          state._pstrut = pstrut;
          return state;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d5f57cc099d816a8f764862fee4f237d617f483.js.map