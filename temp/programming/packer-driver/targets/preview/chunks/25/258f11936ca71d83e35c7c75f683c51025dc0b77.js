System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, warn, classStateMapping, State, styleStateMapping, HPaddingNode, SvgNode, TextNode, VerticalListRow, NodeData, VirtualNodeBuilder, _crd, IDENTIFIER_CLASS, katex;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function isHtmlDomNode(obj) {
    return "classes" in obj;
  }

  function isSymbolNode(obj) {
    return obj instanceof katex.__domTree.SymbolNode;
  }

  function isSvgNode(obj) {
    return obj instanceof katex.__domTree.SvgNode;
  }

  function hasChildNodes(obj) {
    return "children" in obj;
  }

  function isClassName(name) {
    return name in (_crd && classStateMapping === void 0 ? (_reportPossibleCrUseOfclassStateMapping({
      error: Error()
    }), classStateMapping) : classStateMapping);
  }

  function isStyleName(name) {
    return name in (_crd && styleStateMapping === void 0 ? (_reportPossibleCrUseOfstyleStateMapping({
      error: Error()
    }), styleStateMapping) : styleStateMapping);
  }
  /**
   * NodeData represents the data returned from the build method
   */


  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "../Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwarn(extras) {
    _reporterNs.report("warn", "../Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclassStateMapping(extras) {
    _reporterNs.report("classStateMapping", "./classStateMapping", _context.meta, extras);
  }

  function _reportPossibleCrUseOfState(extras) {
    _reporterNs.report("State", "./RenderingState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstyleStateMapping(extras) {
    _reporterNs.report("styleStateMapping", "./styleStateMapping", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHPaddingNode(extras) {
    _reporterNs.report("HPaddingNode", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSvgNode(extras) {
    _reporterNs.report("SvgNode", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTextNode(extras) {
    _reporterNs.report("TextNode", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVerticalList(extras) {
    _reporterNs.report("VerticalList", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVerticalListRow(extras) {
    _reporterNs.report("VerticalListRow", "./virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBounds(extras) {
    _reporterNs.report("Bounds", "./virtualCanvasNodes/VirtualCanvasNode", _context.meta, extras);
  }

  _export("VirtualNodeBuilder", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      error = _unresolved_2.error;
      warn = _unresolved_2.warn;
    }, function (_unresolved_3) {
      classStateMapping = _unresolved_3.classStateMapping;
    }, function (_unresolved_4) {
      State = _unresolved_4.State;
    }, function (_unresolved_5) {
      styleStateMapping = _unresolved_5.styleStateMapping;
    }, function (_unresolved_6) {
      HPaddingNode = _unresolved_6.HPaddingNode;
      SvgNode = _unresolved_6.SvgNode;
      TextNode = _unresolved_6.TextNode;
      VerticalListRow = _unresolved_6.VerticalListRow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b08c28Sv5BCKSXQCe3DjMZ", "VirtualNodeBuilder", undefined);

      IDENTIFIER_CLASS = "enclosing";
      NodeData = class NodeData {
        constructor(rootNode, attributes) {
          this.rootNode = void 0;
          this.attributes = void 0;
          this.rootNode = rootNode;
          this.attributes = attributes;
        }

      };
      /**
       * The NodeBuilder represents the entry point for all renderers.
       * The only public method available is the "build method".
       */

      _export("VirtualNodeBuilder", VirtualNodeBuilder = class VirtualNodeBuilder {
        /**
         * Constructor
         *
         * @param  {String} latex - Sets the initial latex expression
         * @param  {KatexOptions} options - Any options to apply to the expression
         */
        constructor(latex, options) {
          this._latex = void 0;
          this._options = void 0;
          this._state = void 0;
          this._enclosedClassIndexes = void 0;
          this._latex = latex;
          this._options = options != null ? options : {};
          this._state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State)((_crd && State === void 0 ? (_reportPossibleCrUseOfState({
            error: Error()
          }), State) : State).defaultOptions(this._options));
          this._enclosedClassIndexes = {};
        }
        /**
         * Builds all the Virtual Nodes and retrieves the appropriate attributes
         * for the given latex/options. This is the entry point for any renderer
         * implementation.
         */


        build() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this._state = new (_crd && State === void 0 ? (_reportPossibleCrUseOfState({
              error: Error()
            }), State) : State)((_crd && State === void 0 ? (_reportPossibleCrUseOfState({
              error: Error()
            }), State) : State).defaultOptions(_this._options));
            var row = new (_crd && VerticalListRow === void 0 ? (_reportPossibleCrUseOfVerticalListRow({
              error: Error()
            }), VerticalListRow) : VerticalListRow)([]);

            _this._state.vlist.addRow(row);

            _this._enclosedClassIndexes = {};
            var virtualDomTree;

            try {
              // @ts-ignore
              if (!katex) katex = (yield _context.import("__unresolved_6")).default; // @ts-ignore

              virtualDomTree = katex.__renderToHTMLTree(_this._latex, _this._options).children[0];
            } catch (err) {
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)(err);
              return;
            }

            _this._createRenderingState(virtualDomTree);

            var rootNode = _this._state.vlist;
            rootNode.align();

            var attributes = _this._getNodeAttributes(virtualDomTree, rootNode);

            var nodeData = new NodeData(rootNode, attributes);
            return nodeData;
          })();
        }

        _getNodeAttributes(virtualDomTree, root) {
          var strutBounds = root.getStrutBounds();
          var attributes = {
            baselineHeight: strutBounds.height - virtualDomTree.depth * this._state.em,
            strutBounds
          };
          return attributes;
        }

        _createRenderingState(node) {
          var parentState = this._state;

          this._getGlyphDataFromNode(node);

          if (hasChildNodes(node)) {
            node.children.forEach(child => this._createRenderingState(child));
          }

          this._resetState(parentState);
        }

        _resetState(parentState) {
          var vlist = this._state.vlist;
          var parentVlist = parentState.vlist;

          if (vlist !== parentVlist) {
            vlist.setStretchyWidths();
            vlist.align();
            parentVlist.addCell(vlist);
          }

          if (this._state.classes !== parentState.classes) {
            this._state.classes.forEach(classData => {
              this._enclosedClassIndexes[classData.name]++;
            });
          }

          if (this._state.pstrut) {
            parentState = parentState.withYShift(this._state.pstrut).withResetMargin();
          }

          this._state = parentState;
        }

        _getGlyphDataFromNode(node) {
          this._extractClassDataFromNode(node);

          this._extractStyleDataFromNode(node);

          this._createMSpace();

          this._createSvgNode(node);

          this._createTextNode(node);

          this._createItalicNode(node);
        }

        _extractClassDataFromNode(node) {
          var nextClassIsEnclosedClass = false;
          if (!isHtmlDomNode(node)) return;
          node.classes.forEach(name => {
            if (name === IDENTIFIER_CLASS) {
              nextClassIsEnclosedClass = true;
            } else if (nextClassIsEnclosedClass) {
              var _this$_enclosedClassI;

              nextClassIsEnclosedClass = false;
              var index = this._enclosedClassIndexes[name] = (_this$_enclosedClassI = this._enclosedClassIndexes[name]) != null ? _this$_enclosedClassI : 0;
              this._state = this._state.withClass({
                name,
                index
              });
            } else {
              var camelName = this._toCamelCase(name);

              if (isClassName(camelName)) {
                this._state = (_crd && classStateMapping === void 0 ? (_reportPossibleCrUseOfclassStateMapping({
                  error: Error()
                }), classStateMapping) : classStateMapping)[camelName](this._state, node);
              }
            }
          });
        }

        _toCamelCase(str) {
          return str.replace(/-([a-z])/g, function (g) {
            return g[1].toUpperCase();
          });
        }

        _createMSpace() {
          if (this._state.mspace) {
            var mspace = new (_crd && HPaddingNode === void 0 ? (_reportPossibleCrUseOfHPaddingNode({
              error: Error()
            }), HPaddingNode) : HPaddingNode)(this._state.classes);
            mspace.setPosition(this._state.nextX, this._state.y);
            mspace.bounds.set({
              width: this._state.mspace * this._state.em
            });

            this._state.vlist.addCell(mspace);

            this._state = this._state.withResetMargin();
          }
        }

        _extractStyleDataFromNode(node) {
          if (!isHtmlDomNode(node)) return;

          for (var key in node.style) {
            if (Object.prototype.hasOwnProperty.call(node.style, key)) {
              var value = node.style[key];

              if (isStyleName(key) && value != null) {
                this._state = (_crd && styleStateMapping === void 0 ? (_reportPossibleCrUseOfstyleStateMapping({
                  error: Error()
                }), styleStateMapping) : styleStateMapping)[key](this._state, value);
              }
            }
          }
        }

        _createSvgNode(node) {
          if (!isSvgNode(node)) return;
          var virtualSvg = node;
          var state = this._state;
          var height = +virtualSvg.attributes.height.replace("em", "") * this._state.em;

          if (virtualSvg.attributes.style) {
            // for `\oiint`, the width gets specified in a style="xx.xxem"
            // attribute however this causes it to become rendered vert
            // small as em isn't scaled properly; we can either remove the
            // style attribute and let the externally-set height determine
            // the bounds, or we can scale the em similar to what is done to
            // the height earlier in this function. We do the former, while
            // adding a console warning in case another (unexpected)
            // condition is encountered - in which case the developer should
            // handle this new case accordingly.
            if (!/^width:[+-]?(?:[0-9]*[.])?[0-9]+em$/.test(virtualSvg.attributes.style)) {
              (_crd && warn === void 0 ? (_reportPossibleCrUseOfwarn({
                error: Error()
              }), warn) : warn)("Unsupported SVG node explicit style attribute", virtualSvg.attributes.style);
            } else {
              // width will be determined by height
              delete virtualSvg.attributes.style;
            }
          }

          virtualSvg.attributes.height = height.toString();
          virtualSvg.attributes.fill = this._state.color;
          var svgNode = new (_crd && SvgNode === void 0 ? (_reportPossibleCrUseOfSvgNode({
            error: Error()
          }), SvgNode) : SvgNode)(virtualSvg, state.minWidth, state.classes);
          svgNode.setPosition(state.nextX, state.y);
          svgNode.bounds.set({
            height
          });
          svgNode.margin.set({
            left: state.marginLeft,
            right: state.marginRight
          });

          this._state.vlist.addCell(svgNode);

          this._state = this._state.withResetMargin();
        }

        _createTextNode(node) {
          // The '' is NOT an empty string. It's some invisible character (U+200B)
          // aka ZERO-WIDTH Space
          if (isSymbolNode(node) && node.text !== "​") {
            var state = this._state;
            var textNode = new (_crd && TextNode === void 0 ? (_reportPossibleCrUseOfTextNode({
              error: Error()
            }), TextNode) : TextNode)(node.text, state.font, state.color, state.classes); // const width = parseFloat(node.style.width?.replace("em", "") ?? "0") * state.em;
            // const height = parseFloat(node.style.height?.replace("em", "") ?? "0") * state.em;

            textNode.setPosition(state.nextX, state.y);
            textNode.margin.set({
              left: state.marginLeft,
              right: state.marginRight
            }); // textNode.setSize(width, height);

            this._state.vlist.addCell(textNode);

            this._state = this._state.withResetMargin();
          }
        }

        _createItalicNode(node) {
          if (isSymbolNode(node)) {
            var italic = this._state.em * node.italic;
            var italicNode = new (_crd && HPaddingNode === void 0 ? (_reportPossibleCrUseOfHPaddingNode({
              error: Error()
            }), HPaddingNode) : HPaddingNode)(this._state.classes);
            italicNode.setPosition(this._state.nextX, 0);
            italicNode.bounds.set({
              width: italic
            });

            this._state.vlist.addCell(italicNode);

            this._state = this._state.withResetMargin();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=258f11936ca71d83e35c7c75f683c51025dc0b77.js.map