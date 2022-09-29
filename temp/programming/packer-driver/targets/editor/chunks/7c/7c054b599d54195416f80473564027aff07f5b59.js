System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, color, _decorator, _dec, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _crd, ccclass, property, Alignment, Display, FlexDirection, Justify, Overflow, OverflowClipBox, Position, ScaleMode, TextOverflow, TextOverflowPosition, TextAnchor, Visibility, WhiteSpace, Wrap, UITheme;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      color = _cc.color;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e567SxkqlF4oY8rwvMZZY1", "UITheme", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (Alignment) {
        Alignment[Alignment["AUTO"] = 0] = "AUTO";
        Alignment[Alignment["START"] = 1] = "START";
        Alignment[Alignment["CENTER"] = 2] = "CENTER";
        Alignment[Alignment["END"] = 3] = "END";
        Alignment[Alignment["STRETCH"] = 4] = "STRETCH";
        Alignment[Alignment["BASELINE"] = 5] = "BASELINE";
        Alignment[Alignment["SPACE_BETWEEN"] = 6] = "SPACE_BETWEEN";
        Alignment[Alignment["SPACE_AROUND"] = 7] = "SPACE_AROUND";
      })(Alignment || (Alignment = {}));

      (function (Display) {
        Display[Display["FLEX"] = 0] = "FLEX";
        Display[Display["NONE"] = 1] = "NONE";
      })(Display || (Display = {}));

      (function (FlexDirection) {
        FlexDirection[FlexDirection["COLUMN"] = 0] = "COLUMN";
        FlexDirection[FlexDirection["COLUMN_REVERSE"] = 1] = "COLUMN_REVERSE";
        FlexDirection[FlexDirection["ROW"] = 2] = "ROW";
        FlexDirection[FlexDirection["ROW_REVERSE"] = 3] = "ROW_REVERSE";
      })(FlexDirection || (FlexDirection = {}));

      (function (Justify) {
        Justify[Justify["START"] = 0] = "START";
        Justify[Justify["CENTER"] = 1] = "CENTER";
        Justify[Justify["END"] = 2] = "END";
        Justify[Justify["SPACE_BETWEEN"] = 3] = "SPACE_BETWEEN";
        Justify[Justify["SPACE_AROUND"] = 4] = "SPACE_AROUND";
      })(Justify || (Justify = {}));

      (function (Overflow) {
        Overflow[Overflow["VISIBLE"] = 0] = "VISIBLE";
        Overflow[Overflow["HIDDEN"] = 1] = "HIDDEN";
      })(Overflow || (Overflow = {}));

      (function (OverflowClipBox) {
        OverflowClipBox[OverflowClipBox["PADDING_BOX"] = 0] = "PADDING_BOX";
        OverflowClipBox[OverflowClipBox["CONTENT_BOX"] = 1] = "CONTENT_BOX";
      })(OverflowClipBox || (OverflowClipBox = {}));

      (function (Position) {
        Position[Position["RELATIVE"] = 0] = "RELATIVE";
        Position[Position["ABSOLUTE"] = 1] = "ABSOLUTE";
      })(Position || (Position = {}));

      (function (ScaleMode) {
        ScaleMode[ScaleMode["STRETCH_TO_FILL"] = 0] = "STRETCH_TO_FILL";
        ScaleMode[ScaleMode["SCALE_AND_CROP"] = 1] = "SCALE_AND_CROP";
        ScaleMode[ScaleMode["SCALE_TO_FIT"] = 2] = "SCALE_TO_FIT";
      })(ScaleMode || (ScaleMode = {}));

      (function (TextOverflow) {
        TextOverflow[TextOverflow["CLIP"] = 0] = "CLIP";
        TextOverflow[TextOverflow["Ellipsis"] = 1] = "Ellipsis";
      })(TextOverflow || (TextOverflow = {}));

      (function (TextOverflowPosition) {
        TextOverflowPosition[TextOverflowPosition["END"] = 0] = "END";
        TextOverflowPosition[TextOverflowPosition["START"] = 1] = "START";
        TextOverflowPosition[TextOverflowPosition["MIDDLE"] = 2] = "MIDDLE";
      })(TextOverflowPosition || (TextOverflowPosition = {}));

      (function (TextAnchor) {
        TextAnchor[TextAnchor["UPPER_LEFT"] = 0] = "UPPER_LEFT";
        TextAnchor[TextAnchor["UPPER_CENTER"] = 1] = "UPPER_CENTER";
        TextAnchor[TextAnchor["UPPER_RIGHT"] = 2] = "UPPER_RIGHT";
        TextAnchor[TextAnchor["MIDDLE_LEFT"] = 3] = "MIDDLE_LEFT";
        TextAnchor[TextAnchor["MIDDLE_CENTER"] = 4] = "MIDDLE_CENTER";
        TextAnchor[TextAnchor["MIDDLE_RIGHT"] = 5] = "MIDDLE_RIGHT";
        TextAnchor[TextAnchor["LOWER_LEFT"] = 6] = "LOWER_LEFT";
        TextAnchor[TextAnchor["LOWER_CENTER"] = 7] = "LOWER_CENTER";
        TextAnchor[TextAnchor["LOWER_RIGHT"] = 8] = "LOWER_RIGHT";
      })(TextAnchor || (TextAnchor = {}));

      (function (Visibility) {
        Visibility[Visibility["VISIBLE"] = 0] = "VISIBLE";
        Visibility[Visibility["HIDDEN"] = 1] = "HIDDEN";
      })(Visibility || (Visibility = {}));

      (function (WhiteSpace) {
        WhiteSpace[WhiteSpace["NORMAL"] = 0] = "NORMAL";
        WhiteSpace[WhiteSpace["NO_WRAP"] = 1] = "NO_WRAP";
      })(WhiteSpace || (WhiteSpace = {}));

      (function (Wrap) {
        Wrap[Wrap["NO_WRAP"] = 0] = "NO_WRAP";
        Wrap[Wrap["WRAP"] = 1] = "WRAP";
        Wrap[Wrap["WRAP_REVERSE"] = 2] = "WRAP_REVERSE";
      })(Wrap || (Wrap = {}));

      _export("UITheme", UITheme = (_dec = ccclass("UITheme"), _dec(_class = (_class2 = class UITheme {
        constructor() {
          _initializerDefineProperty(this, "alignContent", _descriptor, this);

          _initializerDefineProperty(this, "alignItems", _descriptor2, this);

          _initializerDefineProperty(this, "alignSelf", _descriptor3, this);

          _initializerDefineProperty(this, "backgroundColor", _descriptor4, this);

          _initializerDefineProperty(this, "backgroundImage", _descriptor5, this);

          _initializerDefineProperty(this, "backgroundImageTintColor", _descriptor6, this);

          _initializerDefineProperty(this, "backgroundImageScaleMode", _descriptor7, this);

          _initializerDefineProperty(this, "backgroundImageSliceBottom", _descriptor8, this);

          _initializerDefineProperty(this, "backgroundImageSliceLeft", _descriptor9, this);

          _initializerDefineProperty(this, "backgroundImageSliceRight", _descriptor10, this);

          _initializerDefineProperty(this, "backgroundImageSliceTop", _descriptor11, this);

          _initializerDefineProperty(this, "borderBottomColor", _descriptor12, this);

          _initializerDefineProperty(this, "borderBottomLeftRadius", _descriptor13, this);

          _initializerDefineProperty(this, "borderBottomRightRadius", _descriptor14, this);

          _initializerDefineProperty(this, "borderBottomWidth", _descriptor15, this);

          _initializerDefineProperty(this, "borderLeftColor", _descriptor16, this);

          _initializerDefineProperty(this, "borderLeftWidth", _descriptor17, this);

          _initializerDefineProperty(this, "borderRightColor", _descriptor18, this);

          _initializerDefineProperty(this, "borderRightWidth", _descriptor19, this);

          _initializerDefineProperty(this, "borderTopColor", _descriptor20, this);

          _initializerDefineProperty(this, "borderTopLeftRadius", _descriptor21, this);

          _initializerDefineProperty(this, "borderTopRightRadius", _descriptor22, this);

          _initializerDefineProperty(this, "borderTopWidth", _descriptor23, this);

          _initializerDefineProperty(this, "bottom", _descriptor24, this);

          _initializerDefineProperty(this, "color", _descriptor25, this);

          _initializerDefineProperty(this, "cursor", _descriptor26, this);

          _initializerDefineProperty(this, "display", _descriptor27, this);

          _initializerDefineProperty(this, "flexBasis", _descriptor28, this);

          _initializerDefineProperty(this, "flexDirection", _descriptor29, this);

          _initializerDefineProperty(this, "flexGrow", _descriptor30, this);

          _initializerDefineProperty(this, "flexShrink", _descriptor31, this);

          _initializerDefineProperty(this, "flexWrap", _descriptor32, this);

          _initializerDefineProperty(this, "font", _descriptor33, this);

          _initializerDefineProperty(this, "fontSize", _descriptor34, this);

          _initializerDefineProperty(this, "height", _descriptor35, this);

          _initializerDefineProperty(this, "justifyContent", _descriptor36, this);

          _initializerDefineProperty(this, "left", _descriptor37, this);

          _initializerDefineProperty(this, "marginBottom", _descriptor38, this);

          _initializerDefineProperty(this, "marginLeft", _descriptor39, this);

          _initializerDefineProperty(this, "marginRight", _descriptor40, this);

          _initializerDefineProperty(this, "marginTop", _descriptor41, this);

          _initializerDefineProperty(this, "maxHeight", _descriptor42, this);

          _initializerDefineProperty(this, "maxWidth", _descriptor43, this);

          _initializerDefineProperty(this, "minHeight", _descriptor44, this);

          _initializerDefineProperty(this, "minWidth", _descriptor45, this);

          _initializerDefineProperty(this, "opacity", _descriptor46, this);

          _initializerDefineProperty(this, "overflow", _descriptor47, this);

          _initializerDefineProperty(this, "overflowClipBox", _descriptor48, this);

          _initializerDefineProperty(this, "paddingBottom", _descriptor49, this);

          _initializerDefineProperty(this, "paddingLeft", _descriptor50, this);

          _initializerDefineProperty(this, "paddingRight", _descriptor51, this);

          _initializerDefineProperty(this, "paddingTop", _descriptor52, this);

          _initializerDefineProperty(this, "position", _descriptor53, this);

          _initializerDefineProperty(this, "right", _descriptor54, this);

          _initializerDefineProperty(this, "textOverflow", _descriptor55, this);

          _initializerDefineProperty(this, "top", _descriptor56, this);

          _initializerDefineProperty(this, "textAlign", _descriptor57, this);

          _initializerDefineProperty(this, "textOverflowPosition", _descriptor58, this);

          _initializerDefineProperty(this, "visibility", _descriptor59, this);

          _initializerDefineProperty(this, "whiteSpace", _descriptor60, this);

          _initializerDefineProperty(this, "width", _descriptor61, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "alignContent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Alignment.STRETCH;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "alignItems", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Alignment.STRETCH;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "alignSelf", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Alignment.STRETCH;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "backgroundColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "backgroundImage", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "backgroundImageTintColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "backgroundImageScaleMode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ScaleMode.SCALE_AND_CROP;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "backgroundImageSliceBottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "backgroundImageSliceLeft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "backgroundImageSliceRight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "backgroundImageSliceTop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "borderBottomColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color();
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "borderBottomLeftRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "borderBottomRightRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "borderBottomWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "borderLeftColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color();
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "borderLeftWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "borderRightColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color();
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "borderRightWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "borderTopColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color();
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "borderTopLeftRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "borderTopRightRadius", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "borderTopWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "bottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "color", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return color();
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "cursor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "pointer";
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "display", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Display.FLEX;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "flexBasis", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "flexDirection", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return FlexDirection.COLUMN;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "flexGrow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "flexShrink", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "flexWrap", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Wrap.NO_WRAP;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "font", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "fontSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "height", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "justifyContent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Justify.START;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "left", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "marginBottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "marginLeft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "marginRight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "marginTop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "maxHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "maxWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "minHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "minWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "opacity", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "overflow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Overflow.VISIBLE;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "overflowClipBox", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return OverflowClipBox.PADDING_BOX;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "paddingBottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "paddingLeft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "paddingRight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, "paddingTop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, "position", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Position.RELATIVE;
        }
      }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, "right", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, "textOverflow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return TextOverflow.CLIP;
        }
      }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, "top", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, "textAlign", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return TextAnchor.MIDDLE_CENTER;
        }
      }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, "textOverflowPosition", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return TextOverflowPosition.END;
        }
      }), _descriptor59 = _applyDecoratedDescriptor(_class2.prototype, "visibility", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Visibility.VISIBLE;
        }
      }), _descriptor60 = _applyDecoratedDescriptor(_class2.prototype, "whiteSpace", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return WhiteSpace.NORMAL;
        }
      }), _descriptor61 = _applyDecoratedDescriptor(_class2.prototype, "width", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c054b599d54195416f80473564027aff07f5b59.js.map