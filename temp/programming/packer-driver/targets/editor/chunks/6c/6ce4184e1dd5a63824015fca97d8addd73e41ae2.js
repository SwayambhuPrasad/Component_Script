System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Canvas, CCBoolean, ccenum, CCFloat, CCObject, Component, Director, director, Node, UITransform, v3, _decorator, EDITOR, AS, error, info, yoga, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _class3, _crd, ccclass, property, requireComponent, executeInEditMode, Alignment, Direction, Display, Edge, ExperimentalFeature, FlexDirection, JustifyContent, MeasureMode, Overflow, PositionType, Unit, SizeUnit, MarginUnit, MinMaxUnit, PaddingUnit, PositionUnit, Wrap, UIElement;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  //#endregion
  function pixelToPercent(currentPixels, parentPixels) {
    if (isNaN(parentPixels)) return 0;
    return currentPixels / parentPixels * 100;
  }

  function percentToPixel(currentPercent, parentPixels) {
    if (isNaN(parentPixels)) return 0;
    return currentPercent / 100 * parentPixels;
  }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinfo(extras) {
    _reporterNs.report("info", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfyoga(extras) {
    _reporterNs.report("yoga", "./yoga-layout/index.js", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Canvas = _cc.Canvas;
      CCBoolean = _cc.CCBoolean;
      ccenum = _cc.ccenum;
      CCFloat = _cc.CCFloat;
      CCObject = _cc.CCObject;
      Component = _cc.Component;
      Director = _cc.Director;
      director = _cc.director;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
      info = _unresolved_3.info;
    }, function (_unresolved_4) {
      yoga = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1f84VbT9tECZXft4wEixa0", "UIElement", undefined);

      ({
        ccclass,
        property,
        requireComponent,
        executeInEditMode
      } = _decorator); //#region enum defines

      (function (Alignment) {
        Alignment[Alignment["AUTO"] = 0] = "AUTO";
        Alignment[Alignment["FLEX_START"] = 1] = "FLEX_START";
        Alignment[Alignment["CENTER"] = 2] = "CENTER";
        Alignment[Alignment["FLEX_END"] = 3] = "FLEX_END";
        Alignment[Alignment["STRETCH"] = 4] = "STRETCH";
        Alignment[Alignment["BASELINE"] = 5] = "BASELINE";
        Alignment[Alignment["SPACE_BETWEEN"] = 6] = "SPACE_BETWEEN";
        Alignment[Alignment["SPACE_AROUND"] = 7] = "SPACE_AROUND";
      })(Alignment || (Alignment = {}));

      ccenum(Alignment);

      (function (Direction) {
        Direction[Direction["INHERIT"] = 0] = "INHERIT";
        Direction[Direction["LTR"] = 1] = "LTR";
        Direction[Direction["RTL"] = 2] = "RTL";
      })(Direction || (Direction = {}));

      ccenum(Direction);

      (function (Display) {
        Display[Display["FLEX"] = 0] = "FLEX";
        Display[Display["NONE"] = 1] = "NONE";
      })(Display || (Display = {}));

      ccenum(Display);

      (function (Edge) {
        Edge[Edge["LEFT"] = 0] = "LEFT";
        Edge[Edge["TOP"] = 1] = "TOP";
        Edge[Edge["RIGHT"] = 2] = "RIGHT";
        Edge[Edge["BOTTOM"] = 3] = "BOTTOM";
        Edge[Edge["START"] = 4] = "START";
        Edge[Edge["END"] = 5] = "END";
        Edge[Edge["HORIZONTAL"] = 6] = "HORIZONTAL";
        Edge[Edge["VERTICAL"] = 7] = "VERTICAL";
        Edge[Edge["ALL"] = 8] = "ALL";
      })(Edge || (Edge = {}));

      ccenum(Edge);

      (function (ExperimentalFeature) {
        ExperimentalFeature[ExperimentalFeature["WEB_FLEX_BASIS"] = 0] = "WEB_FLEX_BASIS";
      })(ExperimentalFeature || (ExperimentalFeature = {}));

      (function (FlexDirection) {
        FlexDirection[FlexDirection["COLUMN"] = 0] = "COLUMN";
        FlexDirection[FlexDirection["COLUMN_REVERSE"] = 1] = "COLUMN_REVERSE";
        FlexDirection[FlexDirection["ROW"] = 2] = "ROW";
        FlexDirection[FlexDirection["ROW_REVERSE"] = 3] = "ROW_REVERSE";
      })(FlexDirection || (FlexDirection = {}));

      ccenum(FlexDirection);

      (function (JustifyContent) {
        JustifyContent[JustifyContent["FLEX_START"] = 0] = "FLEX_START";
        JustifyContent[JustifyContent["CENTER"] = 1] = "CENTER";
        JustifyContent[JustifyContent["FLEX_END"] = 2] = "FLEX_END";
        JustifyContent[JustifyContent["SPACE_BETWEEN"] = 3] = "SPACE_BETWEEN";
        JustifyContent[JustifyContent["SPACE_AROUND"] = 4] = "SPACE_AROUND";
        JustifyContent[JustifyContent["SPACE_EVENLY"] = 5] = "SPACE_EVENLY";
      })(JustifyContent || (JustifyContent = {}));

      ccenum(JustifyContent);

      (function (MeasureMode) {
        MeasureMode[MeasureMode["UNDEFINED"] = 0] = "UNDEFINED";
        MeasureMode[MeasureMode["EXACTLY"] = 1] = "EXACTLY";
        MeasureMode[MeasureMode["AT_MOST"] = 2] = "AT_MOST";
      })(MeasureMode || (MeasureMode = {}));

      ccenum(MeasureMode);

      (function (Overflow) {
        Overflow[Overflow["VISIBLE"] = 0] = "VISIBLE";
        Overflow[Overflow["HIDDEN"] = 1] = "HIDDEN";
        Overflow[Overflow["SCROLL"] = 2] = "SCROLL";
      })(Overflow || (Overflow = {}));

      ccenum(Overflow);

      (function (PositionType) {
        PositionType[PositionType["RELATIVE"] = 0] = "RELATIVE";
        PositionType[PositionType["ABSOLUTE"] = 1] = "ABSOLUTE";
      })(PositionType || (PositionType = {}));

      ccenum(PositionType);

      (function (Unit) {
        Unit[Unit["UNDEFINED"] = 0] = "UNDEFINED";
        Unit[Unit["PIXEL"] = 1] = "PIXEL";
        Unit[Unit["PERCENT"] = 2] = "PERCENT";
        Unit[Unit["AUTO"] = 3] = "AUTO";
      })(Unit || (Unit = {}));

      ccenum(Unit);

      (function (SizeUnit) {
        SizeUnit[SizeUnit["PIXEL"] = 1] = "PIXEL";
        SizeUnit[SizeUnit["PERCENT"] = 2] = "PERCENT";
        SizeUnit[SizeUnit["AUTO"] = 3] = "AUTO";
      })(SizeUnit || (SizeUnit = {}));

      ccenum(SizeUnit);
      MarginUnit = SizeUnit;

      (function (MinMaxUnit) {
        MinMaxUnit[MinMaxUnit["UNDEFINED"] = 0] = "UNDEFINED";
        MinMaxUnit[MinMaxUnit["PIXEL"] = 1] = "PIXEL";
        MinMaxUnit[MinMaxUnit["PERCENT"] = 2] = "PERCENT";
      })(MinMaxUnit || (MinMaxUnit = {}));

      ccenum(MinMaxUnit);

      (function (PaddingUnit) {
        PaddingUnit[PaddingUnit["PIXEL"] = 1] = "PIXEL";
        PaddingUnit[PaddingUnit["PERCENT"] = 2] = "PERCENT";
      })(PaddingUnit || (PaddingUnit = {}));

      ccenum(PaddingUnit);
      PositionUnit = PaddingUnit;

      (function (Wrap) {
        Wrap[Wrap["WRAP_NO_WRAP"] = 0] = "WRAP_NO_WRAP";
        Wrap[Wrap["WRAP_WRAP"] = 1] = "WRAP_WRAP";
        Wrap[Wrap["WRAP_WRAP_REVERSE"] = 2] = "WRAP_WRAP_REVERSE";
      })(Wrap || (Wrap = {}));

      ccenum(Wrap);

      _export("UIElement", UIElement = (_dec = ccclass("UIElement"), _dec2 = requireComponent(UITransform), _dec3 = property({
        type: CCBoolean,
        readonly: true,
        tooltip: "Is true if this node has no parent UIElement."
      }), _dec4 = property({
        type: Alignment,
        group: {
          id: "align",
          name: "Align",
          displayOrder: 1
        },
        displayOrder: 3,
        tooltip: `Align content defines the distribution of lines along the cross-axis.
    This only has effect when items are wrapped to multiple lines using flex wrap.

    FLEX START (DEFAULT) Align wrapped lines to the start of the container's cross axis.

    FLEX END Align wrapped lines to the end of the container's cross axis.

    STRETCH Stretch wrapped lines to match the height of the container's cross axis.

    CENTER Align wrapped lines in the center of the container's cross axis.

    SPACE BETWEEN Evenly space wrapped lines across the container's main axis,
    distributing remaining space between the lines.

    SPACE AROUND Evenly space wrapped lines across the container's main axis,
    distributing remaining space around the lines.
    Compared to space between using space around will result in space being
    distributed to the begining of the first lines and end of the last line.`
      }), _dec5 = property({
        type: Alignment,
        group: {
          id: "align",
          name: "Align"
        },
        displayOrder: 1,
        tooltip: `Align items describes how to align children along the cross axis of their container.
    Align items is very similar to justify content but instead of applying to the main axis,
    align items applies to the cross axis.

    STRETCH (DEFAULT) Stretch children of a container to match the height of the container's cross axis.

    FLEX START Align children of a container to the start of the container's cross axis.

    FLEX END Align children of a container to the end of the container's cross axis.

    CENTER Align children of a container in the center of the container's cross axis.

    BASELINE Align children of a container along a common baseline.
    Individual children can be set to be the reference baseline for their parents.`
      }), _dec6 = property({
        type: Alignment,
        group: {
          id: "align",
          name: "Align"
        },
        displayOrder: 2,
        visible: function () {
          return !this.isRoot;
        },
        tooltip: `Align self has the same options and effect as align items but instead of affecting
    the children within a container, you can apply this property to a single child to change its
    alignment within its parent. align self overrides any option set by the parent with align items.`
      }), _dec7 = property({
        type: CCFloat,
        min: 0,
        group: {
          id: "align",
          name: "Align"
        },
        displayOrder: 4,
        tooltip: `AspectRatio is a property introduced by Yoga and is not present as a settable
    property in the css flexbox specification.
    Flexbox does has the notion of aspect ratio though for things with intrinsic aspect ratio such as images.

    The aspect ratio property in Yoga has the following properties:
    - Accepts any floating point value > 0, the default is undefined.
    - Defined as the ratio between the width and the height of a node e.g. if a node has an
      aspect ratio of 2 then its width is twice the size of its height.
    - Respects the min and max dimensions of an item.
    - Has higher priority than flex grow
    - If aspect ratio, width, and height are set then the cross axis dimension is overridden.`
      }), _dec8 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Border",
          displayOrder: 4
        },
        displayName: `Top`,
        tooltip: `BORDER acts exactly like padding and only exists as a seperate property
    to allow for any containers that also have rendering components with border.`
      }), _dec9 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Border"
        },
        displayName: `Bottom`,
        tooltip: `BORDER acts exactly like padding and only exists as a seperate property
    to allow for any containers that also have rendering components with border.`
      }), _dec10 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Border"
        },
        displayName: `Left`,
        tooltip: `BORDER acts exactly like padding and only exists as a seperate property
    to allow for any containers that also have rendering components with border.`
      }), _dec11 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Border"
        },
        displayName: `Right`,
        tooltip: `BORDER acts exactly like padding and only exists as a seperate property
    to allow for any containers that also have rendering components with border.`
      }), _dec12 = property({
        type: Display,
        group: `Flex`,
        displayName: `Display`
      }), _dec13 = property({
        type: FlexDirection,
        group: `Flex`,
        displayName: `Direction`,
        tooltip: `Flex direction controls the direction in which children of a node are laid out.
    This is also referred to as the main axis. The main axis is the direction in which
    children are laid out. The cross axis the the axis perpendicular to the main axis,
    or the axis which wrapping lines are laid out in.

    ROW (DEFAULT) Align children from left to right. If wrapping is enabled then the next
    line will start under the first item on the left of the container.

    COLUMN Align children from top to bottom. If wrapping is enabled then the next line
    will start to the left first item on the top of the container.

    ROW REVERSE Align children from right to left. If wrapping is enabled then the next
    line will start under the first item on the right of the container.

    COLUMN REVERSE Align children from bottom to top. If wrapping is enabled then the
    next line will start to the left first item on the bottom of the container.`
      }), _dec14 = property({
        type: CCFloat,
        min: 0,
        group: `Flex`,
        displayName: `Grow`,
        tooltip: `FLEX GROW describes how any space within a container should
    be distributed among its children along the main axis. After laying out its children,
    a container will distribute any remaining space according to the flex grow values specified
    by its children.

    Flex grow accepts any floating point value >= 0, with 0 being the default value.
    A container will distribute any remaining space among its children weighted by the child's
    flex grow value.`
      }), _dec15 = property({
        type: CCFloat,
        min: 0,
        group: `Flex`,
        displayName: `Shrink`,
        tooltip: `FLEX SHRINK describes how to shrink children along the main axis in the
    case that the total size of the children overflow the size of the container on the main axis.
    flex shrink is very similar to flex grow and can be thought of in the same way if any
    overflowing size is considered to be negative remaining space. These two properties also work
    well together by allowing children to grow and shrink as needed.

    Flex shrink accepts any floating point value >= 0, with 1 being the default value. A container
    will shrink its children weighted by the child's flex shrink value.`
      }), _dec16 = property({
        type: Wrap,
        group: `Flex`,
        displayName: `Wrap`,
        tooltip: `The flex wrap property is set on containers and controls what happens when children
    overflow the size of the container along the main axis. By default children are forced into a
    single line (which can shrink elements).

    If wrapping is allowed items are wrapped into multiple lines along the main axis if needed.
    wrap reverse behaves the same, but the order of the lines is reversed.

    When wrapping lines align content can be used to specify how the lines are placed in the container.`
      }), _dec17 = property({
        type: SizeUnit,
        group: {
          id: "layout",
          name: "Height",
          displayOrder: 0
        },
        displayName: `Unit`,
        displayOrder: 0,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The type of Unit used for height value.

    AUTO Is the default Value, the engine calculates the height for the element based on its content,
    whether that is other children, text, or an image.

    PIXEL Defines the height in absolute values. Depending on other properties set on the node
    this may or may not be the final dimension of the node.

    PERCENTAGE Defines the height in percentage of its parent's height.`
      }), _dec18 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Height"
        },
        displayName: `Value`,
        displayOrder: 1,
        unit: "px",
        visible: function () {
          return this.heightUnit === Unit.PIXEL && !this._hasCanvas;
        },
        tooltip: `The value for height in absolute units.`
      }), _dec19 = property({
        type: CCFloat,
        min: 0,
        group: {
          id: "layout",
          name: "Height"
        },
        displayName: `Value`,
        displayOrder: 1,
        unit: "%",
        visible: function () {
          return this.heightUnit === Unit.PERCENT && !this._hasCanvas;
        },
        tooltip: `The value for height in percentage.`
      }), _dec20 = property({
        type: JustifyContent,
        group: {
          id: "align",
          name: "Align"
        },
        displayOrder: 0,
        tooltip: `Justify content describes how to align children within the main axis of their container.
    For example, you can use this property to center a child horizontally within a container with
    flex direction set to row or vertically within a container with flex direction set to column.

    FLEX START (DEFAULT) Align children of a container to the start of the container's main axis.

    FLEX END Align children of a container to the end of the container's main axis.

    CENTER Align children of a container in the center of the container's main axis.

    SPACE BETWEEN Evenly space of children across the container's main axis, distributing
    remaining space between the children.

    SPACE AROUND Evenly space of children across the container's main axis, distributing
    remaining space around the children. Compared to space between using space around will result
    in space being distributed to the beginning of the first child and end of the last child.

    SPACE EVENLY Evenly distributed within the alignment container along the main axis.
    The spacing between each pair of adjacent items, the main-start edge and the first item,
    and the main-end edge and the last item, are all exactly the same.`
      }), _dec21 = property({
        type: MarginUnit,
        group: {
          id: "layout2",
          name: "Margin",
          displayOrder: 2
        },
        displayName: `Top Unit`,
        displayOrder: 0,
        visible: function () {
          return !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec22 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Top`,
        unit: "px",
        displayOrder: 1,
        visible: function () {
          return this.marginUnitTop === Unit.PIXEL && !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec23 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Top`,
        unit: "%",
        displayOrder: 1,
        visible: function () {
          return this.marginUnitTop === Unit.PERCENT && !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec24 = property({
        type: MarginUnit,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Bottom Unit`,
        displayOrder: 2,
        visible: function () {
          return !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec25 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Bottom`,
        unit: "px",
        displayOrder: 3,
        visible: function () {
          return this.marginUnitBottom === Unit.PIXEL && !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec26 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Bottom`,
        unit: "%",
        displayOrder: 3,
        visible: function () {
          return this.marginUnitBottom === Unit.PERCENT && !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec27 = property({
        type: MarginUnit,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Left Unit`,
        displayOrder: 4,
        visible: function () {
          return !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec28 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Left`,
        unit: "px",
        displayOrder: 5,
        visible: function () {
          return this.marginUnitLeft === Unit.PIXEL && !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec29 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Left`,
        unit: "%",
        displayOrder: 5,
        visible: function () {
          return this.marginUnitLeft === Unit.PERCENT && !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec30 = property({
        type: MarginUnit,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Right Unit`,
        displayOrder: 6,
        visible: function () {
          return !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec31 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Right`,
        unit: "px",
        displayOrder: 7,
        visible: function () {
          return this.marginUnitRight === Unit.PIXEL && !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec32 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Margin"
        },
        displayName: `Right`,
        unit: "%",
        displayOrder: 7,
        visible: function () {
          return this.marginUnitRight === Unit.PERCENT && !this.isRoot;
        },
        tooltip: `MARGIN effects the spacing around the outside of a node. A node with margin will
    offset itself from the bounds of its parent but also offset the location of any siblings.
    The margin of a node contributes to the total size of its parent if the parent is auto sized.`
      }), _dec33 = property({
        type: MinMaxUnit,
        group: {
          id: "layout",
          name: "Height"
        },
        displayName: `Max Unit`,
        displayOrder: 2,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The unit type of the max height value.`
      }), _dec34 = property({
        type: CCFloat,
        min: 0,
        group: {
          id: "layout",
          name: "Height"
        },
        displayName: `Max Value`,
        unit: "px",
        displayOrder: 3,
        visible: function () {
          return this.maxHeightUnit === Unit.PIXEL && !this._hasCanvas;
        },
        tooltip: `The maximum height constraints of an element.
    These properties have higher priority than all other properties and will always be respected.`
      }), _dec35 = property({
        type: CCFloat,
        min: 0,
        group: {
          id: "layout",
          name: "Height"
        },
        displayName: `Max Value`,
        unit: "%",
        displayOrder: 3,
        visible: function () {
          return this.maxHeightUnit === Unit.PERCENT && !this._hasCanvas;
        },
        tooltip: `The maximum height constraints of an element as a percent of parent height.
    These properties have higher priority than all other properties and will always be respected.`
      }), _dec36 = property({
        type: MinMaxUnit,
        group: {
          id: "layout",
          name: "Width",
          displayOrder: 1
        },
        displayName: `Max Unit`,
        displayOrder: 2,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The unit type of the max width value.`
      }), _dec37 = property({
        type: CCFloat,
        min: 0,
        group: {
          id: "layout",
          name: "Width"
        },
        displayName: `Max Value`,
        unit: "px",
        displayOrder: 3,
        visible: function () {
          return this.maxWidthUnit === Unit.PIXEL && !this._hasCanvas;
        },
        tooltip: `The maximum width constraints of an element.
    These properties have higher priority than all other properties and will always be respected.`
      }), _dec38 = property({
        type: CCFloat,
        min: 0,
        group: {
          id: "layout",
          name: "Width"
        },
        displayName: `Max Value`,
        unit: "%",
        displayOrder: 3,
        visible: function () {
          return this.maxWidthUnit === Unit.PERCENT && !this._hasCanvas;
        },
        tooltip: `The maximum width constraints of an element as a percent of parent width.
    These properties have higher priority than all other properties and will always be respected.`
      }), _dec39 = property({
        type: MinMaxUnit,
        group: {
          id: "layout",
          name: "Height"
        },
        displayName: `Min Unit`,
        displayOrder: 4,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The unit type of the min height value.`
      }), _dec40 = property({
        type: CCFloat,
        min: 0,
        group: {
          id: "layout",
          name: "Height"
        },
        displayName: `Min Value`,
        unit: "px",
        displayOrder: 5,
        visible: function () {
          return this.minHeightUnit === Unit.PIXEL && !this._hasCanvas;
        },
        tooltip: `The minimum height constraints of an element.
    These properties have higher priority than all other properties and will always be respected.`
      }), _dec41 = property({
        type: CCFloat,
        min: 0,
        group: {
          id: "layout",
          name: "Height"
        },
        displayName: `Min Value`,
        unit: "%",
        displayOrder: 5,
        visible: function () {
          return this.minHeightUnit === Unit.PERCENT && !this._hasCanvas;
        },
        tooltip: `The minimum height constraints of an element as a percent of parent height.
    These properties have higher priority than all other properties and will always be respected.`
      }), _dec42 = property({
        type: MinMaxUnit,
        group: {
          id: "layout",
          name: "Width"
        },
        displayName: `Min Unit`,
        displayOrder: 4,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The unit type of minimum width value.`
      }), _dec43 = property({
        type: CCFloat,
        min: 0,
        group: {
          id: "layout",
          name: "Width"
        },
        displayName: `Min Value`,
        unit: "px",
        displayOrder: 5,
        visible: function () {
          return this.minWidthUnit === Unit.PIXEL && !this._hasCanvas;
        },
        tooltip: `The minimum width constraints of an element.
    These properties have higher priority than all other properties and will always be respected.`
      }), _dec44 = property({
        type: CCFloat,
        min: 0,
        group: {
          id: "layout",
          name: "Width"
        },
        displayName: `Min Value`,
        unit: "%",
        displayOrder: 5,
        visible: function () {
          return this.minWidthUnit === Unit.PERCENT && !this._hasCanvas;
        },
        tooltip: `The minimum width constraints of an element as a percent of parent width.
    These properties have higher priority than all other properties and will always be respected.`
      }), _dec45 = property({
        type: PaddingUnit,
        group: {
          id: "layout2",
          name: "Padding",
          displayOrder: 1
        },
        displayName: `Top Unit`,
        displayOrder: 0,
        tooltip: `The unit type of top padding.`
      }), _dec46 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Top Value`,
        unit: "px",
        displayOrder: 1,
        visible: function () {
          return this.paddingTopUnit === Unit.PIXEL;
        },
        tooltip: `PADDING affects the size of the node it is applied to.
    Padding acts as if box-sizing: border-box; was set. That is padding will not
    add to the total size of an element if it has an explicit size set. For auto sized
    nodes padding will increase the size of the node as well as offset the location of any children.`
      }), _dec47 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Top Value`,
        unit: "%",
        displayOrder: 1,
        visible: function () {
          return this.paddingTopUnit === Unit.PERCENT;
        },
        tooltip: `PADDING affects the size of the node it is applied to.
    Padding acts as if box-sizing: border-box; was set. That is padding will not
    add to the total size of an element if it has an explicit size set. For auto sized
    nodes padding will increase the size of the node as well as offset the location of any children.`
      }), _dec48 = property({
        type: PaddingUnit,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Bottom Unit`,
        displayOrder: 2,
        tooltip: `The unit type of bottom padding.`
      }), _dec49 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Bottom Value`,
        unit: "px",
        displayOrder: 3,
        visible: function () {
          return this.paddingBottomUnit === Unit.PIXEL;
        },
        tooltip: `PADDING affects the size of the node it is applied to.
    Padding acts as if box-sizing: border-box; was set. That is padding will not
    add to the total size of an element if it has an explicit size set. For auto sized
    nodes padding will increase the size of the node as well as offset the location of any children.`
      }), _dec50 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Bottom Value`,
        unit: "%",
        displayOrder: 3,
        visible: function () {
          return this.paddingBottomUnit === Unit.PERCENT;
        },
        tooltip: `PADDING affects the size of the node it is applied to.
    Padding acts as if box-sizing: border-box; was set. That is padding will not
    add to the total size of an element if it has an explicit size set. For auto sized
    nodes padding will increase the size of the node as well as offset the location of any children.`
      }), _dec51 = property({
        type: PaddingUnit,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Left Unit`,
        displayOrder: 4,
        tooltip: `The unit type of left padding.`
      }), _dec52 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Left Value`,
        unit: "px",
        displayOrder: 5,
        visible: function () {
          return this.paddingLeftUnit === Unit.PIXEL;
        },
        tooltip: `PADDING affects the size of the node it is applied to.
    Padding acts as if box-sizing: border-box; was set. That is padding will not
    add to the total size of an element if it has an explicit size set. For auto sized
    nodes padding will increase the size of the node as well as offset the location of any children.`
      }), _dec53 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Left Value`,
        unit: "%",
        displayOrder: 5,
        visible: function () {
          return this.paddingLeftUnit === Unit.PERCENT;
        },
        tooltip: `PADDING affects the size of the node it is applied to.
    Padding acts as if box-sizing: border-box; was set. That is padding will not
    add to the total size of an element if it has an explicit size set. For auto sized
    nodes padding will increase the size of the node as well as offset the location of any children.`
      }), _dec54 = property({
        type: PaddingUnit,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Right Unit`,
        displayOrder: 6,
        tooltip: `The unit type of right padding.`
      }), _dec55 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Right Value`,
        unit: "px",
        displayOrder: 7,
        visible: function () {
          return this.paddingRightUnit === Unit.PIXEL;
        },
        tooltip: `PADDING affects the size of the node it is applied to.
    Padding acts as if box-sizing: border-box; was set. That is padding will not
    add to the total size of an element if it has an explicit size set. For auto sized
    nodes padding will increase the size of the node as well as offset the location of any children.`
      }), _dec56 = property({
        type: CCFloat,
        group: {
          id: "layout2",
          name: "Padding"
        },
        displayName: `Right Value`,
        unit: "%",
        displayOrder: 7,
        visible: function () {
          return this.paddingRightUnit === Unit.PERCENT;
        },
        tooltip: `PADDING affects the size of the node it is applied to.
    Padding acts as if box-sizing: border-box; was set. That is padding will not
    add to the total size of an element if it has an explicit size set. For auto sized
    nodes padding will increase the size of the node as well as offset the location of any children.`
      }), _dec57 = property({
        type: PositionUnit,
        group: {
          id: "layout",
          name: "Position",
          displayOrder: 2
        },
        displayName: `Top Unit`,
        displayOrder: 1,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The unit type of top position`
      }), _dec58 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Top Value`,
        unit: "px",
        displayOrder: 2,
        visible: function () {
          return this.positionTopUnit === Unit.PIXEL && !this._hasCanvas;
        },
        tooltip: `The position values top, right, bottom, and left behave differently depending
    on the position type of the element. For a relative element they offset the position of
    the element in the direction specified. For absolute element though these properties
    specify the offset of the element's side from the same side on the parent.`
      }), _dec59 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Top Value`,
        unit: "%",
        displayOrder: 2,
        visible: function () {
          return this.positionTopUnit === Unit.PERCENT && !this._hasCanvas;
        },
        tooltip: `The position values top, right, bottom, and left behave differently depending
    on the position type of the element. For a relative element they offset the position of
    the element in the direction specified. For absolute element though these properties
    specify the offset of the element's side from the same side on the parent.`
      }), _dec60 = property({
        type: PositionUnit,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Bottom Unit`,
        displayOrder: 3,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The unit type of bottom position`
      }), _dec61 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Top Value`,
        unit: "px",
        displayOrder: 4,
        visible: function () {
          return this.positionBottomUnit === Unit.PIXEL && !this._hasCanvas;
        },
        tooltip: `The position values top, right, bottom, and left behave differently depending
    on the position type of the element. For a relative element they offset the position of
    the element in the direction specified. For absolute element though these properties
    specify the offset of the element's side from the same side on the parent.`
      }), _dec62 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Top Value`,
        unit: "%",
        displayOrder: 4,
        visible: function () {
          return this.positionBottomUnit === Unit.PERCENT && !this._hasCanvas;
        },
        tooltip: `The position values top, right, bottom, and left behave differently depending
    on the position type of the element. For a relative element they offset the position of
    the element in the direction specified. For absolute element though these properties
    specify the offset of the element's side from the same side on the parent.`
      }), _dec63 = property({
        type: PositionUnit,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Left Unit`,
        displayOrder: 5,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The unit type of left position`
      }), _dec64 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Left Value`,
        unit: "px",
        displayOrder: 6,
        visible: function () {
          return this.positionLeftUnit === Unit.PIXEL && !this._hasCanvas;
        },
        tooltip: `The position values top, right, bottom, and left behave differently depending
    on the position type of the element. For a relative element they offset the position of
    the element in the direction specified. For absolute element though these properties
    specify the offset of the element's side from the same side on the parent.`
      }), _dec65 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Left Value`,
        unit: "%",
        displayOrder: 6,
        visible: function () {
          return this.positionLeftUnit === Unit.PERCENT && !this._hasCanvas;
        },
        tooltip: `The position values top, right, bottom, and left behave differently depending
    on the position type of the element. For a relative element they offset the position of
    the element in the direction specified. For absolute element though these properties
    specify the offset of the element's side from the same side on the parent.`
      }), _dec66 = property({
        type: PositionUnit,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Right Unit`,
        displayOrder: 7,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The unit type of right position`
      }), _dec67 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Right Value`,
        unit: "px",
        displayOrder: 8,
        visible: function () {
          return this.positionRightUnit === Unit.PIXEL && !this._hasCanvas;
        },
        tooltip: `The position values top, right, bottom, and left behave differently depending
    on the position type of the element. For a relative element they offset the position of
    the element in the direction specified. For absolute element though these properties
    specify the offset of the element's side from the same side on the parent.`
      }), _dec68 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Right Value`,
        unit: "%",
        displayOrder: 8,
        visible: function () {
          return this.positionRightUnit === Unit.PERCENT && !this._hasCanvas;
        },
        tooltip: `The position values top, right, bottom, and left behave differently depending
    on the position type of the element. For a relative element they offset the position of
    the element in the direction specified. For absolute element though these properties
    specify the offset of the element's side from the same side on the parent.`
      }), _dec69 = property({
        type: PositionType,
        group: {
          id: "layout",
          name: "Position"
        },
        displayName: `Type`,
        displayOrder: 0,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The position type of an element defines how it is positioned within its parent.

    RELATIVE (DEFAULT) By default an element is positioned relatively. This means an element
    is positioned according to the normal flow of the layout, and then offset relative to that
    position based on the values of top, right, bottom, and left. The offset does not affect
    the position of any sibling or parent elements.

    ABSOLUTE When positioned absolutely an element doesn't take part in the normal layout flow.
    It is instead laid out independent of its siblings. The position is determined based on the
    top, right, bottom, and left values.`
      }), _dec70 = property({
        type: SizeUnit,
        group: {
          id: "layout",
          name: "Width"
        },
        displayName: `Unit`,
        displayOrder: 0,
        visible: function () {
          return !this._hasCanvas;
        },
        tooltip: `The type of Unit used for width value.

    AUTO Is the default Value, the engine calculates the width for the element based on its content,
    whether that is other children, text, or an image.

    PIXEL Defines the width in absolute values. Depending on other properties set on the node
    this may or may not be the final dimension of the node.

    PERCENTAGE Defines the width in percentage of its parent's width.`
      }), _dec71 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Width"
        },
        displayName: `Value`,
        unit: "px",
        displayOrder: 1,
        visible: function () {
          return this.widthUnit === Unit.PIXEL && !this._hasCanvas;
        },
        tooltip: `The value of width of the element in absolute units.`
      }), _dec72 = property({
        type: CCFloat,
        group: {
          id: "layout",
          name: "Width"
        },
        displayName: `Value`,
        unit: "%",
        displayOrder: 1,
        visible: function () {
          return this.widthUnit === Unit.PERCENT && !this._hasCanvas;
        },
        tooltip: `The value of width of the element as a percentage of the parent width.`
      }), _dec(_class = executeInEditMode(_class = _dec2(_class = (_class2 = (_class3 = class UIElement extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_alignContent", _descriptor, this);

          _initializerDefineProperty(this, "_alignItems", _descriptor2, this);

          _initializerDefineProperty(this, "_alignSelf", _descriptor3, this);

          _initializerDefineProperty(this, "_aspectRatio", _descriptor4, this);

          _initializerDefineProperty(this, "_borderTop", _descriptor5, this);

          _initializerDefineProperty(this, "_borderBottom", _descriptor6, this);

          _initializerDefineProperty(this, "_borderLeft", _descriptor7, this);

          _initializerDefineProperty(this, "_borderRight", _descriptor8, this);

          _initializerDefineProperty(this, "_display", _descriptor9, this);

          _initializerDefineProperty(this, "_flexDirection", _descriptor10, this);

          _initializerDefineProperty(this, "_flexGrow", _descriptor11, this);

          _initializerDefineProperty(this, "_flexShrink", _descriptor12, this);

          _initializerDefineProperty(this, "_flexWrap", _descriptor13, this);

          _initializerDefineProperty(this, "_heightUnit", _descriptor14, this);

          _initializerDefineProperty(this, "_heightValue", _descriptor15, this);

          _initializerDefineProperty(this, "_justifyContent", _descriptor16, this);

          _initializerDefineProperty(this, "_marginUnitTop", _descriptor17, this);

          _initializerDefineProperty(this, "_marginValueTop", _descriptor18, this);

          _initializerDefineProperty(this, "_marginUnitBottom", _descriptor19, this);

          _initializerDefineProperty(this, "_marginValueBottom", _descriptor20, this);

          _initializerDefineProperty(this, "_marginUnitLeft", _descriptor21, this);

          _initializerDefineProperty(this, "_marginValueLeft", _descriptor22, this);

          _initializerDefineProperty(this, "_marginUnitRight", _descriptor23, this);

          _initializerDefineProperty(this, "_marginValueRight", _descriptor24, this);

          _initializerDefineProperty(this, "_maxHeightUnit", _descriptor25, this);

          _initializerDefineProperty(this, "_maxHeightValue", _descriptor26, this);

          _initializerDefineProperty(this, "_maxWidthUnit", _descriptor27, this);

          _initializerDefineProperty(this, "_maxWidthValue", _descriptor28, this);

          _initializerDefineProperty(this, "_minHeightUnit", _descriptor29, this);

          _initializerDefineProperty(this, "_minHeightValue", _descriptor30, this);

          _initializerDefineProperty(this, "_minWidthUnit", _descriptor31, this);

          _initializerDefineProperty(this, "_minWidthValue", _descriptor32, this);

          _initializerDefineProperty(this, "_paddingTopUnit", _descriptor33, this);

          _initializerDefineProperty(this, "_paddingTopValue", _descriptor34, this);

          _initializerDefineProperty(this, "_paddingBottomUnit", _descriptor35, this);

          _initializerDefineProperty(this, "_paddingBottomValue", _descriptor36, this);

          _initializerDefineProperty(this, "_paddingLeftUnit", _descriptor37, this);

          _initializerDefineProperty(this, "_paddingLeftValue", _descriptor38, this);

          _initializerDefineProperty(this, "_paddingRightUnit", _descriptor39, this);

          _initializerDefineProperty(this, "_paddingRightValue", _descriptor40, this);

          _initializerDefineProperty(this, "_positionTopUnit", _descriptor41, this);

          _initializerDefineProperty(this, "_positionTopValue", _descriptor42, this);

          _initializerDefineProperty(this, "_positionBottomUnit", _descriptor43, this);

          _initializerDefineProperty(this, "_positionBottomValue", _descriptor44, this);

          _initializerDefineProperty(this, "_positionLeftUnit", _descriptor45, this);

          _initializerDefineProperty(this, "_positionLeftValue", _descriptor46, this);

          _initializerDefineProperty(this, "_positionRightUnit", _descriptor47, this);

          _initializerDefineProperty(this, "_positionRightValue", _descriptor48, this);

          _initializerDefineProperty(this, "_positionType", _descriptor49, this);

          _initializerDefineProperty(this, "_widthUnit", _descriptor50, this);

          _initializerDefineProperty(this, "_widthValue", _descriptor51, this);

          this._yogaNode = (_crd && yoga === void 0 ? (_reportPossibleCrUseOfyoga({
            error: Error()
          }), yoga) : yoga).Node.createDefault();
          this._committedChildren = new Array();
          this._layoutDirty = false;
          this._isFloating = false;
        }

        get isRoot() {
          return this._yogaNode.getParent() == null;
        } //#region property getters


        get alignContent() {
          return this._alignContent;
        }

        get alignItems() {
          return this._alignItems;
        }

        get alignSelf() {
          return this._alignSelf;
        }

        get aspectRatio() {
          return this._aspectRatio;
        }

        get borderTop() {
          return this._borderTop;
        }

        get borderBottom() {
          return this._borderBottom;
        }

        get borderLeft() {
          return this._borderLeft;
        }

        get borderRight() {
          return this._borderRight;
        }

        get display() {
          return this._display;
        }
        /**
         * Flex direction controls the direction in which children of a node are laid out.
         * This is also referred to as the main axis. The main axis is the direction in which
         * children are laid out. The cross axis the the axis perpendicular to the main axis,
         * or the axis which wrapping lines are laid out in.
         *
         * ROW (DEFAULT) Align children from left to right. If wrapping is enabled then the next
         * line will start under the first item on the left of the container.
         *
         * COLUMN Align children from top to bottom. If wrapping is enabled then the next line
         * will start to the left first item on the top of the container.
         *
         * ROW REVERSE Align children from right to left. If wrapping is enabled then the next
         * line will start under the first item on the right of the container.
         *
         * COLUMN REVERSE Align children from bottom to top. If wrapping is enabled then the
         * next line will start to the left first item on the bottom of the container.
         */


        get flexDirection() {
          return this._flexDirection;
        }
        /**
         *FLEX GROW describes how any space within a container should
         * be distributed among its children along the main axis. After laying out its children,
         * a container will distribute any remaining space according to the flex grow values specified
         * by its children.
         *
         * Flex grow accepts any floating point value >= 0, with 0 being the default value.
         * A container will distribute any remaining space among its children weighted by the child's
         * flex grow value.
         */


        get flexGrow() {
          return this._flexGrow;
        }

        get flexShrink() {
          return this._flexShrink;
        }
        /**
         * The flex wrap property is set on containers and controls what happens when children
         * overflow the size of the container along the main axis. By default children are forced into a
         * single line (which can shrink elements).
         *
         * If wrapping is allowed items are wrapped into multiple lines along the main axis if needed.
         * wrap reverse behaves the same, but the order of the lines is reversed.
         *
         * When wrapping lines align content can be used to specify how the lines are placed in the container.
         */


        get flexWrap() {
          return this._flexWrap;
        }

        get heightUnit() {
          return this._heightUnit;
        }

        get heightValue() {
          return this._heightValue;
        }

        get heightValuePercentage() {
          return this._heightValue;
        }
        /**
         * Justify content describes how to align children within the main axis of their container.
         * For example, you can use this property to center a child horizontally within a container with
         * flex direction set to row or vertically within a container with flex direction set to column.
         *
         * FLEX START (DEFAULT) Align children of a container to the start of the container's main axis.
         *
         * FLEX END Align children of a container to the end of the container's main axis.
         *
         * CENTER Align children of a container in the center of the container's main axis.
         *
         * SPACE BETWEEN Evenly space of children across the container's main axis, distributing
         * remaining space between the children.
         *
         * SPACE AROUND Evenly space of children across the container's main axis, distributing
         * remaining space around the children. Compared to space between using space around will result
         * in space being distributed to the beginning of the first child and end of the last child.
         *
         * SPACE EVENLY Evenly distributed within the alignment container along the main axis.
         * The spacing between each pair of adjacent items, the main-start edge and the first item,
         * and the main-end edge and the last item, are all exactly the same.
         */


        get justifyContent() {
          return this._justifyContent;
        }

        get marginUnitTop() {
          return this._marginUnitTop;
        }

        get marginValueTop() {
          return this._marginValueTop;
        }

        get marginValuePercentageTop() {
          return this._marginValueTop;
        }

        get marginUnitBottom() {
          return this._marginUnitBottom;
        }

        get marginValueBottom() {
          return this._marginValueBottom;
        }

        get marginValuePercentageBottom() {
          return this._marginValueBottom;
        }

        get marginUnitLeft() {
          return this._marginUnitLeft;
        }

        get marginValueLeft() {
          return this._marginValueLeft;
        }

        get marginValuePercentageLeft() {
          return this._marginValueLeft;
        }

        get marginUnitRight() {
          return this._marginUnitRight;
        }

        get marginValueRight() {
          return this._marginValueRight;
        }

        get marginValuePercentageRight() {
          return this._marginValueRight;
        }

        get maxHeightUnit() {
          return this._maxHeightUnit;
        }

        get maxHeightValue() {
          return this._maxHeightValue;
        }

        get maxHeightValuePercentage() {
          return this._maxHeightValue;
        }

        get maxWidthUnit() {
          return this._maxWidthUnit;
        }

        get maxWidthValue() {
          return this._maxWidthValue;
        }

        get maxWidthValuePercentage() {
          return this._maxWidthValue;
        }

        get minHeightUnit() {
          return this._minHeightUnit;
        }

        get minHeightValue() {
          return this._minHeightValue;
        }

        get minHeightValuePercentage() {
          return this._minHeightValue;
        }

        get minWidthUnit() {
          return this._minWidthUnit;
        }

        get minWidthValue() {
          return this._minWidthValue;
        }

        get minWidthValuePercentage() {
          return this._minWidthValue;
        }

        get paddingTopUnit() {
          return this._paddingTopUnit;
        }

        get paddingTopValue() {
          return this._paddingTopValue;
        }

        get paddingTopValuePercentage() {
          return this._paddingTopValue;
        }

        get paddingBottomUnit() {
          return this._paddingBottomUnit;
        }

        get paddingBottomValue() {
          return this._paddingBottomValue;
        }

        get paddingBottomValuePercentage() {
          return this._paddingBottomValue;
        }

        get paddingLeftUnit() {
          return this._paddingLeftUnit;
        }

        get paddingLeftValue() {
          return this._paddingLeftValue;
        }

        get paddingLeftValuePercentage() {
          return this._paddingLeftValue;
        }

        get paddingRightUnit() {
          return this._paddingRightUnit;
        }

        get paddingRightValue() {
          return this._paddingRightValue;
        }

        get paddingRightValuePercentage() {
          return this._paddingRightValue;
        }

        get positionTopUnit() {
          return this._positionTopUnit;
        }

        get positionTopValue() {
          return this._positionTopValue;
        }

        get positionTopValuePercentage() {
          return this._positionTopValue;
        }

        get positionBottomUnit() {
          return this._positionBottomUnit;
        }

        get positionBottomValue() {
          return this._positionBottomValue;
        }

        get positionBottomValuePercentage() {
          return this._positionBottomValue;
        }

        get positionLeftUnit() {
          return this._positionLeftUnit;
        }

        get positionLeftValue() {
          return this._positionLeftValue;
        }

        get positionLeftValuePercentage() {
          return this._positionLeftValue;
        }

        get positionRightUnit() {
          return this._positionRightUnit;
        }

        get positionRightValue() {
          return this._positionRightValue;
        }

        get positionRightValuePercentage() {
          return this._positionRightValue;
        }

        get positionType() {
          return this._positionType;
        }

        get widthUnit() {
          return this._widthUnit;
        }

        get widthValue() {
          return this._widthValue;
        }

        get widthValuePercentage() {
          return this._widthValue;
        } //#endregion


        get _hasCanvas() {
          return this.getComponent(Canvas) != null;
        } //#region property setters


        set alignContent(value) {
          this._alignContent = value;

          this._yogaNode.setAlignContent(value);
        }

        set alignItems(value) {
          this._alignItems = value;

          this._yogaNode.setAlignItems(value);
        }

        set alignSelf(value) {
          if (this.isRoot) return;
          this._alignSelf = value;

          this._yogaNode.setAlignSelf(value);
        }

        set aspectRatio(value) {
          this._aspectRatio = value;
          if (value > 0) this._yogaNode.setAspectRatio(value);
        }

        set borderTop(value) {
          this._borderTop = value;

          this._yogaNode.setBorder(Edge.TOP, value);
        }

        set borderBottom(value) {
          this._borderBottom = value;

          this._yogaNode.setBorder(Edge.BOTTOM, value);
        }

        set borderLeft(value) {
          this._borderLeft = value;

          this._yogaNode.setBorder(Edge.LEFT, value);
        }

        set borderRight(value) {
          this._borderRight = value;

          this._yogaNode.setBorder(Edge.RIGHT, value);
        }

        set display(value) {
          this._display = value;

          this._yogaNode.setDisplay(value);
        }

        set flexDirection(value) {
          this._flexDirection = value;

          this._yogaNode.setFlexDirection(value);
        }

        set flexGrow(value) {
          this._flexGrow = value;

          this._yogaNode.setFlexGrow(value);
        }

        set flexShrink(value) {
          this._flexShrink = value;

          this._yogaNode.setFlexShrink(value);
        }

        set flexWrap(value) {
          this._flexWrap = value;

          this._yogaNode.setFlexWrap(value);
        }

        set heightUnit(value) {
          if (this._hasCanvas) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.AUTO:
              this._yogaNode.setHeightAuto();

              break;

            case Unit.PERCENT:
              if (this._heightUnit === Unit.PIXEL && parent) {
                this._heightValue = pixelToPercent(this._heightValue, parent.getComputedHeight());
              }

              this._yogaNode.setHeightPercent(this._heightValue);

              break;

            case Unit.PIXEL:
              if (this._heightUnit === Unit.PERCENT && parent) {
                this._heightValue = percentToPixel(this._heightValue, parent.getComputedHeight());
              }

              this._yogaNode.setHeight(this._heightValue);

              break;

            default:
              break;
          }

          this._heightUnit = value;
        }

        set heightValue(value) {
          if (this._hasCanvas || this._heightUnit !== Unit.PIXEL) return;
          this._heightValue = value;

          this._yogaNode.setHeight(value);
        }

        set heightValuePercentage(value) {
          if (this._hasCanvas || this._heightUnit !== Unit.PERCENT) return;
          this._heightValue = value;

          this._yogaNode.setHeightPercent(value);
        }

        set justifyContent(value) {
          this._justifyContent = value;

          this._yogaNode.setJustifyContent(value);
        }

        set marginUnitTop(value) {
          if (this.isRoot) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.AUTO:
              this._yogaNode.setMarginAuto(Edge.TOP);

              break;

            case Unit.PERCENT:
              if (this._marginUnitTop === Unit.PIXEL && parent) {
                this._marginValueTop = pixelToPercent(this._marginValueTop, parent.getComputedHeight());
              }

              this._yogaNode.setMarginPercent(Edge.TOP, this._marginValueTop);

              break;

            case Unit.PIXEL:
              if (this._marginUnitTop === Unit.PERCENT && parent) {
                this._marginValueTop = percentToPixel(this._marginValueTop, parent.getComputedHeight());
              }

              this._yogaNode.setMargin(Edge.TOP, this._marginValueTop);

              break;

            default:
              break;
          }

          this._marginUnitTop = value;
        }

        set marginValueTop(value) {
          if (this.isRoot || this._marginUnitTop !== Unit.PIXEL) return;
          this._marginValueTop = value;

          this._yogaNode.setMargin(Edge.TOP, value);
        }

        set marginValuePercentageTop(value) {
          if (this.isRoot || this._marginUnitTop !== Unit.PERCENT) return;
          this._marginValueTop = value;

          this._yogaNode.setMarginPercent(Edge.TOP, value);
        }

        set marginUnitBottom(value) {
          if (this.isRoot) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.AUTO:
              this._yogaNode.setMarginAuto(Edge.BOTTOM);

              break;

            case Unit.PERCENT:
              if (this._marginUnitBottom === Unit.PIXEL && parent) {
                this._marginValueBottom = pixelToPercent(this._marginValueBottom, parent.getComputedHeight());
              }

              this._yogaNode.setMarginPercent(Edge.BOTTOM, this._marginValueBottom);

              break;

            case Unit.PIXEL:
              if (this._marginUnitBottom === Unit.PERCENT && parent) {
                this._marginValueBottom = percentToPixel(this._marginValueBottom, parent.getComputedHeight());
              }

              this._yogaNode.setMargin(Edge.BOTTOM, this._marginValueBottom);

              break;

            default:
              break;
          }

          this._marginUnitBottom = value;
        }

        set marginValueBottom(value) {
          if (this.isRoot || this._marginUnitBottom !== Unit.PIXEL) return;
          this._marginValueBottom = value;

          this._yogaNode.setMargin(Edge.BOTTOM, value);
        }

        set marginValuePercentageBottom(value) {
          if (this.isRoot || this._marginUnitBottom !== Unit.PERCENT) return;
          this._marginValueBottom = value;

          this._yogaNode.setMarginPercent(Edge.BOTTOM, value);
        }

        set marginUnitLeft(value) {
          if (this.isRoot) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.AUTO:
              this._yogaNode.setMarginAuto(Edge.LEFT);

              break;

            case Unit.PERCENT:
              if (this._marginUnitLeft === Unit.PIXEL && parent) {
                this._marginValueLeft = pixelToPercent(this._marginValueLeft, parent.getComputedWidth());
              }

              this._yogaNode.setMarginPercent(Edge.LEFT, this._marginValueLeft);

              break;

            case Unit.PIXEL:
              if (this._marginUnitLeft === Unit.PERCENT && parent) {
                this._marginValueLeft = percentToPixel(this._marginValueLeft, parent.getComputedWidth());
              }

              this._yogaNode.setMargin(Edge.LEFT, this._marginValueLeft);

              break;

            default:
              break;
          }

          this._marginUnitLeft = value;
        }

        set marginValueLeft(value) {
          if (this.isRoot || this._marginUnitLeft !== Unit.PIXEL) return;
          this._marginValueLeft = value;

          this._yogaNode.setMargin(Edge.LEFT, value);
        }

        set marginValuePercentageLeft(value) {
          if (this.isRoot || this._marginUnitLeft !== Unit.PERCENT) return;
          this._marginValueLeft = value;

          this._yogaNode.setMarginPercent(Edge.LEFT, value);
        }

        set marginUnitRight(value) {
          if (this.isRoot) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.AUTO:
              this._yogaNode.setMarginAuto(Edge.RIGHT);

              break;

            case Unit.PERCENT:
              if (this._marginUnitRight === Unit.PIXEL && parent) {
                this._marginValueRight = pixelToPercent(this._marginValueRight, parent.getComputedWidth());
              }

              this._yogaNode.setMarginPercent(Edge.RIGHT, this._marginValueRight);

              break;

            case Unit.PIXEL:
              this._yogaNode.setMargin(Edge.RIGHT, this._marginValueRight);

              break;

            default:
              break;
          }

          this._marginUnitRight = value;
        }

        set marginValueRight(value) {
          if (this.isRoot || this._marginUnitRight !== Unit.PIXEL) return;
          this._marginValueRight = value;

          this._yogaNode.setMargin(Edge.RIGHT, value);
        }

        set marginValuePercentageRight(value) {
          if (this.isRoot || this._marginUnitRight !== Unit.PERCENT) return;
          this._marginValueRight = value;

          this._yogaNode.setMarginPercent(Edge.RIGHT, value);
        }

        set maxHeightUnit(value) {
          if (this._hasCanvas) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._maxHeightUnit === Unit.PIXEL && parent) {
                this._maxHeightValue = pixelToPercent(this._maxHeightValue, parent.getComputedHeight());
              }

              this._yogaNode.setMaxHeightPercent(this._maxHeightValue);

              break;

            case Unit.PIXEL:
              if (this._maxHeightUnit === Unit.PERCENT && parent) {
                this._maxHeightValue = percentToPixel(this._maxHeightValue, parent.getComputedHeight());
              }

              this._yogaNode.setMaxHeight(this._maxHeightValue);

              break;

            default:
              this._yogaNode.setMaxHeight(undefined);

              break;
          }

          this._maxHeightUnit = value;
        }

        set maxHeightValue(value) {
          if (this._hasCanvas || this._maxHeightUnit !== Unit.PIXEL) return;
          this._maxHeightValue = value;

          this._yogaNode.setMaxHeight(value);
        }

        set maxHeightValuePercentage(value) {
          if (this._hasCanvas || this._maxHeightUnit !== Unit.PERCENT) return;
          this._maxHeightValue = value;

          this._yogaNode.setMaxHeightPercent(value);
        }

        set maxWidthUnit(value) {
          if (this._hasCanvas) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._maxWidthUnit === Unit.PIXEL && parent) {
                this._maxWidthValue = pixelToPercent(this._maxWidthValue, parent.getComputedWidth());
              }

              this._yogaNode.setMaxWidthPercent(this._maxWidthValue);

              break;

            case Unit.PIXEL:
              if (this._maxWidthUnit === Unit.PERCENT && parent) {
                this._maxWidthValue = percentToPixel(this._maxWidthValue, parent.getComputedWidth());
              }

              this._yogaNode.setMaxWidth(this._maxWidthValue);

              break;

            default:
              this._yogaNode.setMaxWidth(undefined);

              break;
          }

          this._maxWidthUnit = value;
        }

        set maxWidthValue(value) {
          if (this._hasCanvas || this._maxWidthUnit !== Unit.PIXEL) return;
          this._maxWidthValue = value;

          this._yogaNode.setMaxWidth(value);
        }

        set maxWidthValuePercentage(value) {
          if (this._hasCanvas || this._maxWidthUnit !== Unit.PERCENT) return;
          this._maxWidthValue = value;

          this._yogaNode.setMaxWidthPercent(value);
        }

        set minHeightUnit(value) {
          if (this._hasCanvas) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._minHeightUnit === Unit.PIXEL && parent) {
                this._minHeightValue = pixelToPercent(this._minHeightValue, parent.getComputedHeight());
              }

              this._yogaNode.setMinHeightPercent(this._minHeightValue);

              break;

            case Unit.PIXEL:
              if (this._minHeightUnit === Unit.PERCENT && parent) {
                this._minHeightValue = percentToPixel(this._minHeightValue, parent.getComputedHeight());
              }

              this._yogaNode.setMinHeight(this._minHeightValue);

              break;

            default:
              this._yogaNode.setMinHeight(undefined);

              break;
          }

          this._minHeightUnit = value;
        }

        set minHeightValue(value) {
          if (this._hasCanvas || this._minHeightUnit !== Unit.PIXEL) return;
          this._minHeightValue = value;

          this._yogaNode.setMinHeight(value);
        }

        set minHeightValuePercentage(value) {
          if (this._hasCanvas || this._minHeightUnit !== Unit.PERCENT) return;
          this._minHeightValue = value;

          this._yogaNode.setMinHeightPercent(value);
        }

        set minWidthUnit(value) {
          if (this._hasCanvas) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._minWidthUnit === Unit.PIXEL && parent) {
                this._minWidthValue = pixelToPercent(this._minWidthValue, parent.getComputedWidth());
              }

              this._yogaNode.setMinWidthPercent(this._minWidthValue);

              break;

            case Unit.PIXEL:
              if (this._minWidthUnit === Unit.PERCENT && parent) {
                this._minWidthValue = percentToPixel(this._minWidthValue, parent.getComputedWidth());
              }

              this._yogaNode.setMinWidth(this._minHeightValue);

              break;

            default:
              this._yogaNode.setMinWidth(undefined);

              break;
          }

          this._minWidthUnit = value;
        }

        set minWidthValue(value) {
          if (this._hasCanvas || this._minWidthUnit !== Unit.PIXEL) return;
          this._minWidthValue = value;

          this._yogaNode.setMinWidth(value);
        }

        set minWidthValuePercentage(value) {
          if (this._hasCanvas || this._minWidthUnit !== Unit.PERCENT) return;
          this._minWidthValue = value;

          this._yogaNode.setMinWidthPercent(value);
        }

        set paddingTopUnit(value) {
          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._paddingTopUnit === Unit.PIXEL && parent) {
                this._paddingTopValue = pixelToPercent(this._paddingTopValue, parent.getComputedHeight());
              }

              this._yogaNode.setPaddingPercent(Edge.TOP, this._paddingTopValue);

              break;

            case Unit.PIXEL:
              if (this._paddingTopUnit === Unit.PERCENT && parent) {
                this._paddingTopValue = percentToPixel(this._paddingTopValue, parent.getComputedHeight());
              }

              this._yogaNode.setPadding(Edge.TOP, this._paddingTopValue);

              break;

            default:
              break;
          }

          this._paddingTopUnit = value;
        }

        set paddingTopValue(value) {
          if (this._paddingTopUnit !== Unit.PIXEL) return;
          this._paddingTopValue = value;

          this._yogaNode.setPadding(Edge.TOP, value);
        }

        set paddingTopValuePercentage(value) {
          if (this._paddingTopUnit !== Unit.PERCENT) return;
          this._paddingTopValue = value;

          this._yogaNode.setPaddingPercent(Edge.TOP, value);
        }

        set paddingBottomUnit(value) {
          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._paddingBottomUnit === Unit.PIXEL && parent) {
                this._paddingBottomValue = pixelToPercent(+this.paddingBottomValue, parent.getComputedHeight());
              }

              this._yogaNode.setPaddingPercent(Edge.BOTTOM, this._paddingBottomValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setPadding(Edge.BOTTOM, this._paddingBottomValue);

              break;

            default:
              break;
          }

          this._paddingBottomUnit = value;
        }

        set paddingBottomValue(value) {
          if (this._paddingBottomUnit !== Unit.PIXEL) return;
          this._paddingBottomValue = value;

          this._yogaNode.setPadding(Edge.BOTTOM, value);
        }

        set paddingBottomValuePercentage(value) {
          if (this._paddingBottomUnit !== Unit.PERCENT) return;
          this._paddingBottomValue = value;

          this._yogaNode.setPaddingPercent(Edge.BOTTOM, value);
        }

        set paddingLeftUnit(value) {
          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._paddingLeftUnit === Unit.PIXEL && parent) {
                this._paddingLeftValue = pixelToPercent(this._paddingLeftValue, parent.getComputedWidth());
              }

              this._yogaNode.setPaddingPercent(Edge.LEFT, this._paddingLeftValue);

              break;

            case Unit.PIXEL:
              if (this._paddingLeftUnit === Unit.PERCENT && parent) {
                this._paddingLeftValue = percentToPixel(this._paddingLeftValue, parent.getComputedWidth());
              }

              this._yogaNode.setPadding(Edge.LEFT, this._paddingLeftValue);

              break;

            default:
              break;
          }

          this._paddingLeftUnit = value;
        }

        set paddingLeftValue(value) {
          if (this._paddingLeftUnit !== Unit.PIXEL) return;
          this._paddingLeftValue = value;

          this._yogaNode.setPadding(Edge.LEFT, value);
        }

        set paddingLeftValuePercentage(value) {
          if (this._paddingLeftUnit !== Unit.PERCENT) return;
          this._paddingLeftValue = value;

          this._yogaNode.setPaddingPercent(Edge.LEFT, value);
        }

        set paddingRightUnit(value) {
          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._paddingRightUnit === Unit.PIXEL && parent) {
                this._paddingRightValue = pixelToPercent(this._paddingRightUnit, parent.getComputedWidth());
              }

              this._yogaNode.setPaddingPercent(Edge.RIGHT, this._paddingRightValue);

              break;

            case Unit.PIXEL:
              if (this._paddingRightUnit === Unit.PERCENT && parent) {
                this._paddingRightValue = percentToPixel(this._paddingRightUnit, parent.getComputedWidth());
              }

              this._yogaNode.setPadding(Edge.RIGHT, this._paddingRightValue);

              break;

            default:
              break;
          }

          this._paddingRightUnit = value;
        }

        set paddingRightValue(value) {
          if (this._paddingRightUnit !== Unit.PIXEL) return;
          this._paddingRightValue = value;

          this._yogaNode.setPadding(Edge.RIGHT, value);
        }

        set paddingRightValuePercentage(value) {
          if (this._paddingRightUnit !== Unit.PERCENT) return;
          this._paddingRightValue = value;

          this._yogaNode.setPaddingPercent(Edge.RIGHT, value);
        }

        set positionTopUnit(value) {
          if (this._hasCanvas) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._positionTopUnit === Unit.PIXEL && parent) {
                this._positionTopValue = pixelToPercent(this._positionTopValue, parent.getComputedHeight());
              }

              this._yogaNode.setPositionPercent(Edge.TOP, this._positionTopValue);

              break;

            case Unit.PIXEL:
              if (this._positionTopUnit === Unit.PERCENT && parent) {
                this._positionTopValue = percentToPixel(this._positionTopValue, parent.getComputedHeight());
              }

              this._yogaNode.setPosition(Edge.TOP, this._positionTopValue);

              break;

            default:
              break;
          }

          this._positionTopUnit = value;
        }

        set positionTopValue(value) {
          if (this._hasCanvas) return;
          this._positionTopValue = value;
          this._positionTopUnit = Unit.PIXEL;

          this._yogaNode.setPosition(Edge.TOP, value);
        }

        set positionTopValuePercentage(value) {
          if (this._hasCanvas || this._positionTopUnit !== Unit.PERCENT) return;
          this._positionTopValue = value;

          this._yogaNode.setPositionPercent(Edge.TOP, value);
        }

        set positionBottomUnit(value) {
          if (this._hasCanvas) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._positionBottomUnit === Unit.PIXEL && parent) {
                this._positionBottomValue = pixelToPercent(this._positionBottomValue, parent.getComputedHeight());
              }

              this._yogaNode.setPositionPercent(Edge.BOTTOM, this._positionBottomValue);

              break;

            case Unit.PIXEL:
              if (this._positionBottomUnit === Unit.PERCENT && parent) {
                this._positionBottomValue = percentToPixel(this._positionBottomValue, parent.getComputedHeight());
              }

              this._yogaNode.setPosition(Edge.BOTTOM, this._positionBottomValue);

              break;

            default:
              break;
          }

          this._positionBottomUnit = value;
        }

        set positionBottomValue(value) {
          if (this._hasCanvas) return;
          this._positionBottomValue = value;
          this._positionBottomUnit = Unit.PIXEL;

          this._yogaNode.setPosition(Edge.BOTTOM, value);
        }

        set positionBottomValuePercentage(value) {
          if (this._hasCanvas || this._positionBottomUnit !== Unit.PERCENT) return;
          this._positionBottomValue = value;

          this._yogaNode.setPositionPercent(Edge.BOTTOM, value);
        }

        set positionLeftUnit(value) {
          if (this._hasCanvas) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._positionLeftUnit === Unit.PIXEL && parent) {
                this._positionLeftValue = pixelToPercent(this._positionLeftValue, parent.getComputedWidth());
              }

              this._yogaNode.setPositionPercent(Edge.LEFT, this._positionLeftValue);

              break;

            case Unit.PIXEL:
              if (this._positionLeftUnit === Unit.PERCENT && parent) {
                this._positionLeftValue = percentToPixel(this._positionLeftValue, parent.getComputedWidth());
              }

              this._yogaNode.setPosition(Edge.LEFT, this._positionLeftValue);

              break;

            default:
              break;
          }

          this._positionLeftUnit = value;
        }

        set positionLeftValue(value) {
          if (this._hasCanvas) return;
          this._positionLeftValue = value;
          this._positionLeftUnit = Unit.PIXEL;

          this._yogaNode.setPosition(Edge.LEFT, value);
        }

        set positionLeftValuePercentage(value) {
          if (this._hasCanvas || this._positionLeftUnit !== Unit.PERCENT) return;
          this._positionLeftValue = value;

          this._yogaNode.setPositionPercent(Edge.LEFT, value);
        }

        set positionRightUnit(value) {
          if (this._hasCanvas) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.PERCENT:
              if (this._positionRightUnit === Unit.PIXEL && parent) {
                this._positionRightValue = percentToPixel(this._positionRightValue, parent.getComputedWidth());
              }

              this._yogaNode.setPositionPercent(Edge.RIGHT, this._positionRightValue);

              break;

            case Unit.PIXEL:
              if (this._positionRightUnit === Unit.PERCENT && parent) {
                this._positionRightValue = pixelToPercent(this._positionRightValue, parent.getComputedWidth());
              }

              this._yogaNode.setPosition(Edge.RIGHT, this._positionRightValue);

              break;

            default:
              break;
          }

          this._positionRightUnit = value;
        }

        set positionRightValue(value) {
          if (this._hasCanvas) return;
          this._positionRightValue = value;
          this._positionRightUnit = Unit.PIXEL;

          this._yogaNode.setPosition(Edge.RIGHT, value);
        }

        set positionRightValuePercentage(value) {
          if (this._hasCanvas || this._positionRightUnit !== Unit.PERCENT) return;
          this._positionRightValue = value;

          this._yogaNode.setPositionPercent(Edge.RIGHT, value);
        }

        set positionType(value) {
          if (this._hasCanvas) return;
          this._positionType = value;

          this._yogaNode.setPositionType(value);
        }

        set widthUnit(value) {
          if (this._hasCanvas) return;

          const parent = this._yogaNode.getParent();

          switch (value) {
            case Unit.AUTO:
              this._yogaNode.setWidthAuto();

              break;

            case Unit.PERCENT:
              if (this._widthUnit === Unit.PIXEL && parent) {
                this._widthValue = pixelToPercent(this._widthValue, parent.getComputedWidth());
              }

              this._yogaNode.setWidthPercent(this._widthValue);

              break;

            case Unit.PIXEL:
              if (this._widthUnit === Unit.PERCENT && parent) {
                this._widthValue = percentToPixel(this._widthValue, parent.getComputedWidth());
              }

              this._yogaNode.setWidth(this._widthValue);

              break;

            default:
              break;
          }

          this._widthUnit = value;
        }

        set widthValue(value) {
          if (this._hasCanvas || this._widthUnit !== Unit.PIXEL) return;
          this._widthValue = value;

          this._yogaNode.setWidth(value);
        }

        set widthValuePercentage(value) {
          if (this._hasCanvas || this._widthUnit !== Unit.PERCENT) return;
          this._widthValue = value;

          this._yogaNode.setWidthPercent(this._widthValue);
        } //#endregion


        _setIsFloating(value) {
          this._isFloating = value;
        }

        updateLayout(force = false) {
          if (force) this._markLayoutDirty();
          if (!this._layoutDirty && this._yogaNode.isDirty()) this._layoutDirty = true;

          if (this._layoutDirty && this.isRoot && !this._isAnimating) {
            try {
              // TODO: Handle right to left.
              this._yogaNode.calculateLayout();
            } catch (err) {
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)(`Error while calculating layout in ${this.node.name}\n${err}`);
            }

            this._updateLayoutInternal();
          }
        }

        awake() {
          if (this._hasCanvas) {
            this._canvasSizeChanged();
          }

          this._updateYogaNode();

          this._notifyParent();

          this.updateLayout(true);

          if (EDITOR && !this.isRoot) {
            // In Editor can not edit these attrs.
            // (Position in Node, contentSize in uiTransform)
            // (anchor in uiTransform, but it can edit, this is different from cocos creator)
            this._objFlags |= CCObject.Flags.IsPositionLocked | CCObject.Flags.IsSizeLocked | CCObject.Flags.IsAnchorLocked;
          }
        }

        onEnable() {
          this._addEventListeners();

          this._commitChildren();

          this.updateLayout(true);
        }

        onDisable() {
          var _this$node$parent;

          this._removeEventListeners();

          const parentElement = (_this$node$parent = this.node.parent) == null ? void 0 : _this$node$parent.getComponent(UIElement);

          if (parentElement != null) {
            parentElement._yogaNode.removeChild(this._yogaNode);
          }
        }

        onDestroy() {
          super.onDestroy == null ? void 0 : super.onDestroy();

          this._yogaNode.free();
        }

        onRestore() {
          this._updateYogaNode();
        }

        _updateYogaNode() {
          this._yogaNode.setAlignContent(this._alignContent);

          this._yogaNode.setAlignItems(this._alignItems);

          this._yogaNode.setAlignSelf(this._alignSelf);

          if (this._aspectRatio > 0) this._yogaNode.setAspectRatio(this._aspectRatio);else this._yogaNode.setAspectRatio(undefined);

          this._yogaNode.setBorder(Edge.TOP, this._borderTop);

          this._yogaNode.setBorder(Edge.BOTTOM, this._borderBottom);

          this._yogaNode.setBorder(Edge.LEFT, this._borderLeft);

          this._yogaNode.setBorder(Edge.RIGHT, this._borderRight);

          this._yogaNode.setDisplay(this._display);

          this._yogaNode.setFlexDirection(this._flexDirection);

          this._yogaNode.setFlexGrow(this._flexGrow);

          this._yogaNode.setFlexShrink(this._flexShrink);

          this._yogaNode.setFlexWrap(this._flexWrap);

          switch (this._heightUnit) {
            case Unit.AUTO:
              this._yogaNode.setHeightAuto();

              break;

            case Unit.PERCENT:
              this._yogaNode.setHeightPercent(this.heightValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setHeight(this.heightValue);

              break;

            default:
              break;
          }

          this._yogaNode.setJustifyContent(this._justifyContent);

          switch (this._marginUnitTop) {
            case Unit.AUTO:
              this._yogaNode.setMarginAuto(Edge.TOP);

              break;

            case Unit.PERCENT:
              this._yogaNode.setMarginPercent(Edge.TOP, this._marginValueTop);

              break;

            case Unit.PIXEL:
              this._yogaNode.setMargin(Edge.TOP, this._marginValueTop);

              break;

            default:
              break;
          }

          switch (this._marginUnitBottom) {
            case Unit.AUTO:
              this._yogaNode.setMarginAuto(Edge.BOTTOM);

              break;

            case Unit.PERCENT:
              this._yogaNode.setMarginPercent(Edge.BOTTOM, this._marginValueBottom);

              break;

            case Unit.PIXEL:
              this._yogaNode.setMargin(Edge.BOTTOM, this._marginValueBottom);

              break;

            default:
              break;
          }

          switch (this._marginUnitLeft) {
            case Unit.AUTO:
              this._yogaNode.setMarginAuto(Edge.LEFT);

              break;

            case Unit.PERCENT:
              this._yogaNode.setMarginPercent(Edge.LEFT, this._marginValueLeft);

              break;

            case Unit.PIXEL:
              this._yogaNode.setMargin(Edge.LEFT, this._marginValueLeft);

              break;

            default:
              break;
          }

          switch (this._marginUnitRight) {
            case Unit.AUTO:
              this._yogaNode.setMarginAuto(Edge.RIGHT);

              break;

            case Unit.PERCENT:
              this._yogaNode.setMarginPercent(Edge.RIGHT, this._marginValueRight);

              break;

            case Unit.PIXEL:
              this._yogaNode.setMargin(Edge.RIGHT, this._marginValueRight);

              break;

            default:
              break;
          }

          switch (this._maxHeightUnit) {
            case Unit.PERCENT:
              this._yogaNode.setMaxHeightPercent(this._maxHeightValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setMaxHeight(this._maxHeightValue);

              break;

            default:
              break;
          }

          switch (this._maxWidthUnit) {
            case Unit.PERCENT:
              this._yogaNode.setMaxWidthPercent(this._maxWidthValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setMaxWidth(this._maxWidthValue);

              break;

            default:
              break;
          }

          switch (this._minHeightUnit) {
            case Unit.PERCENT:
              this._yogaNode.setMinHeightPercent(this._minHeightValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setMinHeight(this._minHeightValue);

              break;

            default:
              break;
          }

          switch (this._minWidthUnit) {
            case Unit.PERCENT:
              this._yogaNode.setMinWidthPercent(this._minWidthValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setMinWidth(this._minHeightValue);

              break;

            default:
              break;
          }

          switch (this._paddingTopUnit) {
            case Unit.PERCENT:
              this._yogaNode.setPaddingPercent(Edge.TOP, this._paddingTopValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setPadding(Edge.TOP, this._paddingTopValue);

              break;

            default:
              break;
          }

          switch (this._paddingBottomUnit) {
            case Unit.PERCENT:
              this._yogaNode.setPaddingPercent(Edge.BOTTOM, this._paddingBottomValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setPadding(Edge.BOTTOM, this._paddingBottomValue);

              break;

            default:
              break;
          }

          switch (this._paddingLeftUnit) {
            case Unit.PERCENT:
              this._yogaNode.setPaddingPercent(Edge.LEFT, this._paddingLeftValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setPadding(Edge.LEFT, this._paddingLeftValue);

              break;

            default:
              break;
          }

          switch (this._paddingRightUnit) {
            case Unit.PERCENT:
              this._yogaNode.setPaddingPercent(Edge.RIGHT, this._paddingRightValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setPadding(Edge.RIGHT, this._paddingRightValue);

              break;

            default:
              break;
          }

          switch (this._positionTopUnit) {
            case Unit.PERCENT:
              this._yogaNode.setPositionPercent(Edge.TOP, this._positionTopValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setPosition(Edge.TOP, this._positionTopValue);

              break;

            default:
              break;
          }

          switch (this._positionBottomUnit) {
            case Unit.PERCENT:
              this._yogaNode.setPositionPercent(Edge.BOTTOM, this._positionBottomValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setPosition(Edge.BOTTOM, this._positionBottomValue);

              break;

            default:
              break;
          }

          switch (this._positionLeftUnit) {
            case Unit.PERCENT:
              this._yogaNode.setPositionPercent(Edge.LEFT, this._positionLeftValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setPosition(Edge.LEFT, this._positionLeftValue);

              break;

            default:
              break;
          }

          switch (this._positionRightUnit) {
            case Unit.PERCENT:
              this._yogaNode.setPositionPercent(Edge.RIGHT, this._positionRightValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setPosition(Edge.RIGHT, this._positionRightValue);

              break;

            default:
              break;
          }

          switch (this._widthUnit) {
            case Unit.AUTO:
              this._yogaNode.setWidthAuto();

              break;

            case Unit.PERCENT:
              this._yogaNode.setWidthPercent(this._widthValue);

              break;

            case Unit.PIXEL:
              this._yogaNode.setWidth(this._widthValue);

              break;

            default:
              break;
          }
        }

        _commitChildren() {
          const actualChildrenCount = this._yogaNode.getChildCount();

          const children = this.node.children.map(child => child.getComponent(UIElement)).filter(element => !!element && element.enabledInHierarchy && !element._hasCanvas && !element._isFloating);

          if (children.length === this._committedChildren.length && children.every((child, index) => child === this._committedChildren[index])) {
            return;
          }

          for (let i = 0; i < Math.max(children.length, this._committedChildren.length); i++) {
            const oldChild = this._committedChildren[i];
            const correctChild = children[i];

            if (oldChild !== correctChild) {
              if (correctChild != null) {
                this._yogaNode.removeChild(correctChild._yogaNode);

                this._yogaNode.insertChild(correctChild._yogaNode, i);
              } else if (i < actualChildrenCount) {
                this._yogaNode.removeChild(this._yogaNode.getChild(i));
              }
            }
          }

          this._committedChildren = children;
        }

        _notifyParent() {
          var _this$node$parent2, _this$node$parent2$ge;

          (_this$node$parent2 = this.node.parent) == null ? void 0 : (_this$node$parent2$ge = _this$node$parent2.getComponent(UIElement)) == null ? void 0 : _this$node$parent2$ge._commitChildren();
        }

        _addEventListeners() {
          director.on(Director.EVENT_AFTER_UPDATE, this.updateLayout, this);
          this.node.on(Node.EventType.TRANSFORM_CHANGED, this._transformChanged, this);
          this.node.on(Node.EventType.ANCHOR_CHANGED, this._markLayoutDirty, this);
          this.node.on(Node.EventType.CHILD_ADDED, this._markLayoutDirty, this);
          this.node.on(Node.EventType.CHILD_REMOVED, this._markLayoutDirty, this);
          this.node.on(Node.EventType.PARENT_CHANGED, this._markLayoutDirty, this);
          this.node.on(Node.EventType.SIBLING_ORDER_CHANGED, this._notifyParent, this);

          if (this._hasCanvas) {
            this.node.on(Node.EventType.SIZE_CHANGED, this._canvasSizeChanged, this);
          }
        }

        _removeEventListeners() {
          director.off(Director.EVENT_AFTER_UPDATE, this.updateLayout, this);
          this.node.off(Node.EventType.TRANSFORM_CHANGED, this._transformChanged, this);
          this.node.off(Node.EventType.ANCHOR_CHANGED, this._markLayoutDirty, this);
          this.node.off(Node.EventType.CHILD_ADDED, this._markLayoutDirty, this);
          this.node.off(Node.EventType.CHILD_REMOVED, this._markLayoutDirty, this);
          this.node.off(Node.EventType.PARENT_CHANGED, this._markLayoutDirty, this);
          this.node.off(Node.EventType.SIBLING_ORDER_CHANGED, this._notifyParent, this);

          if (this._hasCanvas) {
            this.node.off(Node.EventType.SIZE_CHANGED, this._canvasSizeChanged, this);
          }
        }

        _transformChanged(type) {
          if (!(type & Node.TransformBit.POSITION)) return;

          this._markLayoutDirty(); // if (EDITOR) {
          // }

        }

        _canvasSizeChanged() {
          const uiTransform = this.node._uiProps.uiTransformComp;
          this._heightUnit = Unit.PIXEL;
          this._heightValue = uiTransform.height;
          this._widthUnit = Unit.PIXEL;
          this._widthValue = uiTransform.width;
        }

        _markLayoutDirty() {
          // if (!this._yogaNode.isDirty()) this._yogaNode.markDirty();
          this._layoutDirty = true;
        }

        _updateLayoutInternal() {
          var _this$_yogaNode$getCo, _this$_yogaNode$getCo2;

          if (!this.enabledInHierarchy) return;
          const uiTransform = this.node._uiProps.uiTransformComp;

          if (uiTransform == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Layout Update failed! UIElement needs a UITransform component attached!");
            return;
          }

          if (this._yogaNode.isDirty()) {
            this._layoutDirty = true;
            return;
          }

          (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
            error: Error()
          }), info) : info)(`${this.node.name}: ${this._yogaNode.getComputedLayout().toString()}`); // Yoga layout calculates from the top left in local coordinates.

          const top = this._yogaNode.getComputedTop();

          const left = this._yogaNode.getComputedLeft();

          const height = (_this$_yogaNode$getCo = this._yogaNode.getComputedHeight()) != null ? _this$_yogaNode$getCo : 0;
          const width = (_this$_yogaNode$getCo2 = this._yogaNode.getComputedWidth()) != null ? _this$_yogaNode$getCo2 : 0;
          uiTransform.setContentSize(width, height);

          const yogaParent = this._yogaNode.getParent();

          if (yogaParent == null) {
            // is root node -
            if (!this._hasCanvas) this.node.position = v3(0, 0, 0);
          } else {
            var _this$node$parent3;

            // Cocos creator anchor of (0,0) corresponds to bottom left.
            const anchorX = uiTransform.anchorX;
            const anchorY = uiTransform.anchorY;
            const parentUiTransform = (_this$node$parent3 = this.node.parent) == null ? void 0 : _this$node$parent3._uiProps.uiTransformComp;

            if (parentUiTransform == null) {
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)("Layout Update failed! Parent UIElement does not have a UITransform attached.");
              return;
            } // Get the top left corner of parent in parent's (local) space.


            const parentLeft = -parentUiTransform.width * parentUiTransform.anchorX;
            const parentTop = parentUiTransform.height * (1 - parentUiTransform.anchorY); // Get the top left corner of current node using the parent's top left and the calculated
            // top and left values from Yoga.

            const localLeft = parentLeft + left;
            const localTop = parentTop - top; // +ve y is bottom to top.
            // Calculate the node position

            this.node.position = v3(localLeft + anchorX * width, localTop - (1 - anchorY) * height, 0);
          }

          this._layoutDirty = false; // Propagate to all children.

          this.node.children.map(child => child.getComponent(UIElement)).forEach(uiElement => uiElement == null ? void 0 : uiElement._updateLayoutInternal());
        }

      }, _class3.Alignment = Alignment, _class3.Direction = Direction, _class3.Display = Display, _class3.Edge = Edge, _class3.FlexDirection = FlexDirection, _class3.JustifyContent = JustifyContent, _class3.MeasureMode = MeasureMode, _class3.Overflow = Overflow, _class3.PositionType = PositionType, _class3.Unit = Unit, _class3.Wrap = Wrap, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_alignContent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Alignment.FLEX_START;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_alignItems", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Alignment.STRETCH;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_alignSelf", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Alignment.AUTO;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_aspectRatio", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_borderTop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_borderBottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_borderLeft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_borderRight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_display", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Display.FLEX;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_flexDirection", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return FlexDirection.ROW;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "_flexGrow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "_flexShrink", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "_flexWrap", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Wrap.WRAP_NO_WRAP;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "_heightUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.AUTO;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "_heightValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "_justifyContent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return JustifyContent.FLEX_START;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "_marginUnitTop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "_marginValueTop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "_marginUnitBottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "_marginValueBottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "_marginUnitLeft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "_marginValueLeft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "_marginUnitRight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "_marginValueRight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "_maxHeightUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.UNDEFINED;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "_maxHeightValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "_maxWidthUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.UNDEFINED;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "_maxWidthValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "_minHeightUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.UNDEFINED;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "_minHeightValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "_minWidthUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.UNDEFINED;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "_minWidthValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "_paddingTopUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "_paddingTopValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "_paddingBottomUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "_paddingBottomValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "_paddingLeftUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "_paddingLeftValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "_paddingRightUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "_paddingRightValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "_positionTopUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "_positionTopValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "_positionBottomUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "_positionBottomValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, "_positionLeftUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, "_positionLeftValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, "_positionRightUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.PIXEL;
        }
      }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, "_positionRightValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, "_positionType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return PositionType.RELATIVE;
        }
      }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, "_widthUnit", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Unit.AUTO;
        }
      }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, "_widthValue", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "isRoot", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "isRoot"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "alignContent", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "alignContent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "alignItems", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "alignItems"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "alignSelf", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "alignSelf"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "aspectRatio", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "aspectRatio"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "borderTop", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "borderTop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "borderBottom", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "borderBottom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "borderLeft", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "borderLeft"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "borderRight", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "borderRight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "display", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "display"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "flexDirection", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "flexDirection"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "flexGrow", [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, "flexGrow"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "flexShrink", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "flexShrink"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "flexWrap", [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, "flexWrap"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "heightUnit", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "heightUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "heightValue", [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, "heightValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "heightValuePercentage", [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "heightValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "justifyContent", [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, "justifyContent"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginUnitTop", [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "marginUnitTop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginValueTop", [_dec22], Object.getOwnPropertyDescriptor(_class2.prototype, "marginValueTop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginValuePercentageTop", [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, "marginValuePercentageTop"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginUnitBottom", [_dec24], Object.getOwnPropertyDescriptor(_class2.prototype, "marginUnitBottom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginValueBottom", [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, "marginValueBottom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginValuePercentageBottom", [_dec26], Object.getOwnPropertyDescriptor(_class2.prototype, "marginValuePercentageBottom"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginUnitLeft", [_dec27], Object.getOwnPropertyDescriptor(_class2.prototype, "marginUnitLeft"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginValueLeft", [_dec28], Object.getOwnPropertyDescriptor(_class2.prototype, "marginValueLeft"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginValuePercentageLeft", [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, "marginValuePercentageLeft"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginUnitRight", [_dec30], Object.getOwnPropertyDescriptor(_class2.prototype, "marginUnitRight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginValueRight", [_dec31], Object.getOwnPropertyDescriptor(_class2.prototype, "marginValueRight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "marginValuePercentageRight", [_dec32], Object.getOwnPropertyDescriptor(_class2.prototype, "marginValuePercentageRight"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxHeightUnit", [_dec33], Object.getOwnPropertyDescriptor(_class2.prototype, "maxHeightUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxHeightValue", [_dec34], Object.getOwnPropertyDescriptor(_class2.prototype, "maxHeightValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxHeightValuePercentage", [_dec35], Object.getOwnPropertyDescriptor(_class2.prototype, "maxHeightValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxWidthUnit", [_dec36], Object.getOwnPropertyDescriptor(_class2.prototype, "maxWidthUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxWidthValue", [_dec37], Object.getOwnPropertyDescriptor(_class2.prototype, "maxWidthValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "maxWidthValuePercentage", [_dec38], Object.getOwnPropertyDescriptor(_class2.prototype, "maxWidthValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "minHeightUnit", [_dec39], Object.getOwnPropertyDescriptor(_class2.prototype, "minHeightUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "minHeightValue", [_dec40], Object.getOwnPropertyDescriptor(_class2.prototype, "minHeightValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "minHeightValuePercentage", [_dec41], Object.getOwnPropertyDescriptor(_class2.prototype, "minHeightValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "minWidthUnit", [_dec42], Object.getOwnPropertyDescriptor(_class2.prototype, "minWidthUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "minWidthValue", [_dec43], Object.getOwnPropertyDescriptor(_class2.prototype, "minWidthValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "minWidthValuePercentage", [_dec44], Object.getOwnPropertyDescriptor(_class2.prototype, "minWidthValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingTopUnit", [_dec45], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingTopUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingTopValue", [_dec46], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingTopValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingTopValuePercentage", [_dec47], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingTopValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingBottomUnit", [_dec48], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingBottomUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingBottomValue", [_dec49], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingBottomValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingBottomValuePercentage", [_dec50], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingBottomValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingLeftUnit", [_dec51], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingLeftUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingLeftValue", [_dec52], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingLeftValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingLeftValuePercentage", [_dec53], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingLeftValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingRightUnit", [_dec54], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingRightUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingRightValue", [_dec55], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingRightValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "paddingRightValuePercentage", [_dec56], Object.getOwnPropertyDescriptor(_class2.prototype, "paddingRightValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionTopUnit", [_dec57], Object.getOwnPropertyDescriptor(_class2.prototype, "positionTopUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionTopValue", [_dec58], Object.getOwnPropertyDescriptor(_class2.prototype, "positionTopValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionTopValuePercentage", [_dec59], Object.getOwnPropertyDescriptor(_class2.prototype, "positionTopValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionBottomUnit", [_dec60], Object.getOwnPropertyDescriptor(_class2.prototype, "positionBottomUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionBottomValue", [_dec61], Object.getOwnPropertyDescriptor(_class2.prototype, "positionBottomValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionBottomValuePercentage", [_dec62], Object.getOwnPropertyDescriptor(_class2.prototype, "positionBottomValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionLeftUnit", [_dec63], Object.getOwnPropertyDescriptor(_class2.prototype, "positionLeftUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionLeftValue", [_dec64], Object.getOwnPropertyDescriptor(_class2.prototype, "positionLeftValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionLeftValuePercentage", [_dec65], Object.getOwnPropertyDescriptor(_class2.prototype, "positionLeftValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionRightUnit", [_dec66], Object.getOwnPropertyDescriptor(_class2.prototype, "positionRightUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionRightValue", [_dec67], Object.getOwnPropertyDescriptor(_class2.prototype, "positionRightValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionRightValuePercentage", [_dec68], Object.getOwnPropertyDescriptor(_class2.prototype, "positionRightValuePercentage"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "positionType", [_dec69], Object.getOwnPropertyDescriptor(_class2.prototype, "positionType"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "widthUnit", [_dec70], Object.getOwnPropertyDescriptor(_class2.prototype, "widthUnit"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "widthValue", [_dec71], Object.getOwnPropertyDescriptor(_class2.prototype, "widthValue"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "widthValuePercentage", [_dec72], Object.getOwnPropertyDescriptor(_class2.prototype, "widthValuePercentage"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6ce4184e1dd5a63824015fca97d8addd73e41ae2.js.map