System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BoxNode, HorizontalLineNode, HPaddingNode, VerticalLineNode, VerticalList, VerticalListRow, ClassStateMapping, _crd, classStateMapping;

  function withSize(state, size) {
    if (state.delimSizing) {
      return state.withFamily("KaTeX_Size" + size);
    } else {
      return state.withSize(size);
    }
  }

  function withHorizLine(state, node) {
    var _node$style$borderBot, _node$style$borderBot2;

    var lineHeight = parseFloat((_node$style$borderBot = (_node$style$borderBot2 = node.style.borderBottomWidth) == null ? void 0 : _node$style$borderBot2.replace("em", "")) != null ? _node$style$borderBot : "0") * state.em;
    var lineNode = new (_crd && HorizontalLineNode === void 0 ? (_reportPossibleCrUseOfHorizontalLineNode({
      error: Error()
    }), HorizontalLineNode) : HorizontalLineNode)(state.color, state.minWidth, state.classes);
    lineNode.setPosition(state.nextX, state.y);
    lineNode.bounds.set({
      height: lineHeight
    });
    lineNode.margin.set({
      left: state.marginLeft,
      right: state.marginRight
    });
    state.vlist.addCell(lineNode);
    return state.withResetMargin();
  }

  function withVertLine(state, node) {
    var _node$style$height$re, _node$style$height, _node$style$verticalA, _node$style$verticalA2;

    var sepHeight = parseFloat((_node$style$height$re = (_node$style$height = node.style.height) == null ? void 0 : _node$style$height.replace("em", "")) != null ? _node$style$height$re : "0") * state.em;
    var sepWidth = 0.05 * state.em;
    var sepVerticalAlign = parseFloat((_node$style$verticalA = (_node$style$verticalA2 = node.style.verticalAlign) == null ? void 0 : _node$style$verticalA2.replace("em", "")) != null ? _node$style$verticalA : "0") * state.em;
    var sepY = state.y - sepVerticalAlign;
    var lineNode = new (_crd && VerticalLineNode === void 0 ? (_reportPossibleCrUseOfVerticalLineNode({
      error: Error()
    }), VerticalLineNode) : VerticalLineNode)(state.color, state.classes);
    lineNode.setPosition(state.nextX, sepY);
    lineNode.bounds.set({
      width: sepWidth,
      height: sepHeight
    });
    lineNode.margin.set({
      left: state.marginLeft,
      right: state.marginRight
    });
    state.vlist.addCell(lineNode);
    return state.withResetMargin();
  }

  function withBox(state, node, hasBorder) {
    var _node$style$height$re2, _node$style$height2;

    var TRANSPARENT_COLOR = "";
    var isTransparentBackground = !node.style.backgroundColor || node.style.backgroundColor === "none";
    var backgroundColor = isTransparentBackground ? TRANSPARENT_COLOR : node.style.backgroundColor;
    var isDefaultColor = !node.style.borderColor || node.style.borderColor === "default";
    var borderColor = isDefaultColor ? state.color : node.style.borderColor;
    var borderWidth = hasBorder ? 0.04 * state.em : 0.0000001;
    var height = parseFloat((_node$style$height$re2 = (_node$style$height2 = node.style.height) == null ? void 0 : _node$style$height2.replace("em", "")) != null ? _node$style$height$re2 : "0") * state.em;
    var minWidth = state.em * 0.3 * 2;
    state.vlist.alignment = "center";
    var x = state.nextX;
    var box = new (_crd && BoxNode === void 0 ? (_reportPossibleCrUseOfBoxNode({
      error: Error()
    }), BoxNode) : BoxNode)(backgroundColor != null ? backgroundColor : "", borderColor != null ? borderColor : "", borderWidth, minWidth, state.classes);
    box.setPosition(x, state.y);
    box.bounds.set({
      height
    });
    box.margin.set({
      left: state.marginLeft,
      right: state.marginRight
    });
    state.vlist.addCell(box);
    return state.withResetMargin();
  }

  function hasChildNodes(obj) {
    return "children" in obj;
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./RenderingState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoxNode(extras) {
    _reporterNs.report("BoxNode", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHorizontalLineNode(extras) {
    _reporterNs.report("HorizontalLineNode", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHPaddingNode(extras) {
    _reporterNs.report("HPaddingNode", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVerticalLineNode(extras) {
    _reporterNs.report("VerticalLineNode", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVerticalList(extras) {
    _reporterNs.report("VerticalList", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVerticalListRow(extras) {
    _reporterNs.report("VerticalListRow", "./virtualCanvasNodes", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      BoxNode = _unresolved_2.BoxNode;
      HorizontalLineNode = _unresolved_2.HorizontalLineNode;
      HPaddingNode = _unresolved_2.HPaddingNode;
      VerticalLineNode = _unresolved_2.VerticalLineNode;
      VerticalList = _unresolved_2.VerticalList;
      VerticalListRow = _unresolved_2.VerticalListRow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5768b61MzBNrpFDGtED1ZMw", "classStateMapping", undefined);

      ClassStateMapping = class ClassStateMapping {
        colorbox(state, node) {
          return withBox(state, node, false);
        }

        fbox(state, node) {
          return withBox(state, node, true);
        }

        fcolorbox(state, node) {
          return withBox(state, node, true);
        }

        vlist(state, node) {
          if (hasChildNodes(node) && hasChildNodes(node.children[0]) && node.children[0].children.length) {
            var vlist = new (_crd && VerticalList === void 0 ? (_reportPossibleCrUseOfVerticalList({
              error: Error()
            }), VerticalList) : VerticalList)(state.textAlign, state.nextX, state.classes);
            vlist.setPosition(state.nextX, state.y);
            vlist.margin.set({
              left: state.marginLeft,
              right: state.marginRight
            });
            return state.withVlist(vlist).withResetMargin();
          }

          return state;
        }

        pstrut(state, node) {
          var _node$style$height$re3, _node$style$height3;

          var height = parseFloat((_node$style$height$re3 = (_node$style$height3 = node.style.height) == null ? void 0 : _node$style$height3.replace("em", "")) != null ? _node$style$height$re3 : "0") * state.em;
          var tableRow = new (_crd && VerticalListRow === void 0 ? (_reportPossibleCrUseOfVerticalListRow({
            error: Error()
          }), VerticalListRow) : VerticalListRow)(state.classes);
          state.vlist.addRow(tableRow);
          tableRow.setPosition(state.nextX, state.y + height);
          tableRow.bounds.set({
            height
          });
          tableRow.margin.set({
            left: state.marginLeft,
            right: state.marginRight
          });
          return state.withPstrut(height);
        }

        base(state, node) {
          var height = node.height * state.em;
          var strut = new (_crd && HPaddingNode === void 0 ? (_reportPossibleCrUseOfHPaddingNode({
            error: Error()
          }), HPaddingNode) : HPaddingNode)(state.classes);
          var depth = node.depth * state.em;
          strut.setPosition(state.nextX, state.y - height);
          strut.bounds.set({
            height: height + depth
          });
          var lastRow = state.vlist.last(); // lastRow.depth = depth;

          lastRow.addBaseStrut(strut);
          return state;
        }

        newline(state, node) {
          var _strutBounds$height;

          var tableRow = new (_crd && VerticalListRow === void 0 ? (_reportPossibleCrUseOfVerticalListRow({
            error: Error()
          }), VerticalListRow) : VerticalListRow)(state.classes);
          var strutBounds = state.vlist.last().strutBounds;
          var marginTop = node.style.marginTop;
          var topPadding = marginTop ? +marginTop.replace("em", "") * state.em : 0;
          state.vlist.addRow(tableRow);
          tableRow.setPosition(state.nextX, state.y);
          var lineHeight = state.em * 1.2;
          var strutHeight = (_strutBounds$height = strutBounds == null ? void 0 : strutBounds.height) != null ? _strutBounds$height : 0;
          var yOffset = Math.max(lineHeight, strutHeight);
          return state.withPstrut(yOffset + topPadding);
        }

        root(state) {
          var mu = state.em * (1.0 / 18.0);
          return state.withMarginRight(mu * -10).withMarginLeft(mu * 5);
        }

        arraycolsep(state, node) {
          var _node$style$width$rep, _node$style$width;

          var colWidth = parseFloat((_node$style$width$rep = (_node$style$width = node.style.width) == null ? void 0 : _node$style$width.replace("em", "")) != null ? _node$style$width$rep : "0") * state.em;
          var hPad = new (_crd && HPaddingNode === void 0 ? (_reportPossibleCrUseOfHPaddingNode({
            error: Error()
          }), HPaddingNode) : HPaddingNode)(state.classes);
          hPad.setPosition(state.nextX, state.y);
          hPad.bounds.set({
            width: colWidth
          });
          state.vlist.addCell(hPad);
          return state.withResetMargin();
        }

        colAlignR(state) {
          return state.withTextAlign("right");
        }

        colAlignL(state) {
          return state.withTextAlign("left");
        }

        xArrow(state) {
          return state.withTextAlign("center");
        }

        accent(state, _node, options) {
          var _options$defaultSansS;

          var family = (_options$defaultSansS = options == null ? void 0 : options.defaultSansSerifText) != null ? _options$defaultSansS : "KaTeX_SansSerif";
          return state.withTextAlign("center").withFamily(family);
        }

        colAlignC(state) {
          return state.withTextAlign("center");
        }

        opLimits(state) {
          return state.withTextAlign("center");
        }

        mfrac(state) {
          return state.withTextAlign("center");
        }

        verticalSeparator(state, node) {
          return withVertLine(state, node);
        }

        hline(state, node) {
          return withHorizLine(state, node);
        }

        overlineLine(state, node) {
          return withHorizLine(state, node);
        }

        underlineLine(state, node) {
          return withHorizLine(state, node);
        }

        fracLine(state, node) {
          return withHorizLine(state, node);
        }

        svgAlign(state) {
          return state.withTextAlign("left");
        }

        delimcenter(state, node) {
          var height = node.height * state.em;
          return state.withYShift(0.32 * height);
        }

        delimsizing(state) {
          return state.withDelimSizing();
        }

        size1(state) {
          return withSize(state, 1);
        }

        size2(state) {
          return withSize(state, 2);
        }

        size3(state) {
          return withSize(state, 3);
        }

        size4(state) {
          return withSize(state, 4);
        }

        size5(state) {
          return withSize(state, 5);
        }

        size6(state) {
          return withSize(state, 6);
        }

        size7(state) {
          return withSize(state, 7);
        }

        size8(state) {
          return withSize(state, 8);
        }

        size9(state) {
          return withSize(state, 9);
        }

        size10(state) {
          return withSize(state, 10);
        }

        size11(state) {
          return withSize(state, 11);
        }

        nulldelimiter(state) {
          var ptperem = 10.0;
          var nullDelimSpace = 1.2 / ptperem;
          var nullPaddWidth = nullDelimSpace * state.em;
          var node = new (_crd && HPaddingNode === void 0 ? (_reportPossibleCrUseOfHPaddingNode({
            error: Error()
          }), HPaddingNode) : HPaddingNode)(state.classes);
          node.setPosition(state.nextX, state.y);
          node.bounds.set({
            width: nullPaddWidth
          });
          state.vlist.addCell(node);
          return state.withResetMargin();
        }

        textbf(state) {
          return state.withWeight("bold");
        }

        textit(state) {
          return state.withVariant("italic");
        }

        textrm(state) {
          return state.withFamily("KaTeX_Main");
        }

        textsf(state) {
          return state.withFamily("KaTeX_SansSerif");
        }

        texttt(state) {
          return state.withFamily("KaTeX_Typewriter");
        }

        mathit(state) {
          return state.withWeight("normal").withVariant("italic").withFamily("KaTeX_Math");
        }

        mspace(state, node) {
          if (node.style.marginRight) {
            var mspace = +node.style.marginRight.replace("em", "");
            return state.withMSpace(mspace);
          }

          return state;
        }

        mathbf(state) {
          return state.withWeight("bold").withVariant("normal").withFamily("KaTeX_Main");
        }

        mathbb(state) {
          return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_AMS");
        }

        mathcal(state) {
          return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Caligraphic");
        }

        mathfrak(state) {
          return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Fraktur");
        }

        mathtt(state) {
          return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Typewriter");
        }

        mathscr(state) {
          return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Script");
        }

        mathsf(state) {
          return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_SansSerif");
        }

        mathrm(state) {
          return state.withWeight("normal").withVariant("normal").withFamily("Katex_Main");
        }

        mainit(state) {
          return state.withVariant("italic").withFamily("KaTeX_Main");
        }

        amsrm(state) {
          return state.withFamily("KaTeX_AMS");
        }

        boldsymbol(state) {
          return state.withWeight("bold").withVariant("italic").withFamily("KaTeX_Math");
        }

        smallOp(state) {
          return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Size1");
        }

        largeOp(state) {
          return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Size2");
        }

      };
      /**
       * Each function in this singleton represents a mapping between className and
       * how it affects the RenderingState.
       *
       * For example, textbf maps to a bold weight for text.
       *
       * While an mfrac state maps to a center-aligned VerticalList
       * (think how fractions are centered)
       */

      _export("classStateMapping", classStateMapping = new ClassStateMapping());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ffd3cec53a6a2708be2c846f9dcc75561ab785ea.js.map