System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ccenum, CCObject, CCString, Color, color, Component, Director, director, Graphics, ImageAsset, Label, Mask, Node, NodePool, Sprite, SpriteFrame, Texture2D, UITransform, v3, _decorator, AS, getFontsLoadedEvent, BoxNode, HorizontalLineNode, SvgNode, TextNode, VerticalLineNode, VirtualContainerNode, VirtualNodeBuilder, error, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, executeInEditMode, requireComponent, gfxNodePool, labelNodePool, imgNodePool, baseNodePool, fontsLoadedEvent, INPUT_CLASS, Overflow, inputMacros, LatexRenderer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function checkInputBoxNode(virtualNode) {
    var isInputBoxNode = false;
    var inputBoxNodeIndex = -1;
    var charCount = 6;

    for (var {
      name,
      index
    } of virtualNode.classes) {
      if (name === INPUT_CLASS) {
        isInputBoxNode = true;
        inputBoxNodeIndex = index;
        break;
      } else if (name.startsWith(INPUT_CLASS)) {
        isInputBoxNode = true;
        inputBoxNodeIndex = index;
        charCount = +name.substring(INPUT_CLASS.length);
      }
    }

    return {
      isInputBoxNode,
      inputBoxNodeIndex,
      charCount
    };
  }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetFontsLoadedEvent(extras) {
    _reporterNs.report("getFontsLoadedEvent", "./FontManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIOptions(extras) {
    _reporterNs.report("IOptions", "./latex/RenderingState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoxNode(extras) {
    _reporterNs.report("BoxNode", "./latex/virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHorizontalLineNode(extras) {
    _reporterNs.report("HorizontalLineNode", "./latex/virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSvgNode(extras) {
    _reporterNs.report("SvgNode", "./latex/virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTextNode(extras) {
    _reporterNs.report("TextNode", "./latex/virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVerticalLineNode(extras) {
    _reporterNs.report("VerticalLineNode", "./latex/virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualCanvasNode(extras) {
    _reporterNs.report("VirtualCanvasNode", "./latex/virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualContainerNode(extras) {
    _reporterNs.report("VirtualContainerNode", "./latex/virtualCanvasNodes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualNodeBuilder(extras) {
    _reporterNs.report("VirtualNodeBuilder", "./latex/VirtualNodeBuilder", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      ccenum = _cc.ccenum;
      CCObject = _cc.CCObject;
      CCString = _cc.CCString;
      Color = _cc.Color;
      color = _cc.color;
      Component = _cc.Component;
      Director = _cc.Director;
      director = _cc.director;
      Graphics = _cc.Graphics;
      ImageAsset = _cc.ImageAsset;
      Label = _cc.Label;
      Mask = _cc.Mask;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      getFontsLoadedEvent = _unresolved_3.getFontsLoadedEvent;
    }, function (_unresolved_4) {
      BoxNode = _unresolved_4.BoxNode;
      HorizontalLineNode = _unresolved_4.HorizontalLineNode;
      SvgNode = _unresolved_4.SvgNode;
      TextNode = _unresolved_4.TextNode;
      VerticalLineNode = _unresolved_4.VerticalLineNode;
      VirtualContainerNode = _unresolved_4.VirtualContainerNode;
    }, function (_unresolved_5) {
      VirtualNodeBuilder = _unresolved_5.VirtualNodeBuilder;
    }, function (_unresolved_6) {
      error = _unresolved_6.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9d28pn8EhKF5+pogbk6hjK", "LatexRenderer", undefined);

      ({
        ccclass,
        property,
        executeInEditMode,
        requireComponent
      } = _decorator);
      gfxNodePool = new NodePool();
      labelNodePool = new NodePool();
      imgNodePool = new NodePool();
      baseNodePool = new NodePool();
      fontsLoadedEvent = (_crd && getFontsLoadedEvent === void 0 ? (_reportPossibleCrUseOfgetFontsLoadedEvent({
        error: Error()
      }), getFontsLoadedEvent) : getFontsLoadedEvent)();
      INPUT_CLASS = "asInput";

      (function (Overflow) {
        Overflow[Overflow["NONE"] = 0] = "NONE";
        Overflow[Overflow["CLAMP"] = 1] = "CLAMP";
        Overflow[Overflow["SHRINK"] = 2] = "SHRINK";
      })(Overflow || (Overflow = {}));

      ccenum(Overflow);
      inputMacros = {
        "\\input": "\\htmlClass{" + INPUT_CLASS + "#1}{\\boxed{#1}}"
      };

      _export("LatexRenderer", LatexRenderer = (_dec = ccclass("LatexRenderer"), _dec2 = requireComponent(UITransform), _dec3 = property({
        type: CCString,
        displayName: "Latex Source",
        multiline: true
      }), _dec4 = property({
        min: 1
      }), _dec5 = property(Color), _dec6 = property({
        type: Overflow
      }), _dec7 = property(UITransform), _dec(_class = executeInEditMode(_class = _dec2(_class = (_class2 = (_class3 = class LatexRenderer extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_latexSrc", _descriptor, this);

          _initializerDefineProperty(this, "_baseSize", _descriptor2, this);

          _initializerDefineProperty(this, "_defaultTextColor", _descriptor3, this);

          _initializerDefineProperty(this, "_inputNodes", _descriptor4, this);

          _initializerDefineProperty(this, "_overflow", _descriptor5, this);

          this._dirty = true;
          this._baseNode = null;
          this._baseNodePositionOffset = v3();
          this._gfxNodes = new Array();
          this._labelNodes = new Array();
          this._imgNodes = new Array();
          this._inputClassData = Array();
        }

        get latex() {
          return this._latexSrc;
        }

        get baseSize() {
          return this._baseSize;
        }

        get defaultTextColor() {
          return this._defaultTextColor;
        }

        get overflow() {
          return this._overflow;
        }

        get inputNodes() {
          return this._inputNodes;
        }

        set latex(value) {
          if (this._latexSrc === value) return;
          this._latexSrc = value;
          this.markRendererDirty();
        }

        set baseSize(value) {
          if (this._baseSize === value) return;
          this._baseSize = value;
          this.markRendererDirty();
        }

        set defaultTextColor(value) {
          if (this._defaultTextColor === value) return;
          this._defaultTextColor = value;
          this.markRendererDirty();
        }

        set overflow(value) {
          this._overflow = value;

          this._updateOverflow();
        }

        set inputNodes(value) {
          if (this._inputNodes === value) return;
          this._inputNodes = value;
          this.markRendererDirty();
        }

        onEnable() {
          this.node.on(Node.EventType.ANCHOR_CHANGED, this._updateBaseNodePosition, this);
          this.node.on(Node.EventType.TRANSFORM_CHANGED, this._transformChanged, this);
          this.node.on(Node.EventType.SIZE_CHANGED, this._updateOverflow, this);
          director.on(Director.EVENT_BEFORE_DRAW, this._onBeforeDraw, this);
          fontsLoadedEvent.on(this.markRendererDirty, this);
        }

        onDisable() {
          this.node.off(Node.EventType.ANCHOR_CHANGED, this._updateBaseNodePosition, this);
          this.node.off(Node.EventType.TRANSFORM_CHANGED, this._transformChanged, this);
          this.node.off(Node.EventType.SIZE_CHANGED, this._updateOverflow, this);
          director.off(Director.EVENT_BEFORE_DRAW, this._onBeforeDraw, this);
          fontsLoadedEvent.off(this.markRendererDirty, this);
        }

        onDestroy() {
          this._cleanup();
        }

        markRendererDirty() {
          this._dirty = true;
        }

        _onBeforeDraw() {
          if (!this._dirty) return;

          this._render();
        }

        _transformChanged(type) {
          if (!(type & Node.TransformBit.POSITION)) return;

          this._updateInputNodes(); // if (EDITOR) {
          // }

        }

        _render() {
          var _baseNodePool$get, _this$_baseNode$getCo;

          this._cleanup();

          var options = {
            output: "html",
            displayMode: true,
            baseSize: this._baseSize,
            defaultTextColor: this._defaultTextColor.toCSS(),
            macros: inputMacros,
            strict: false,
            trust: true
          };
          var nodeBuilder = new (_crd && VirtualNodeBuilder === void 0 ? (_reportPossibleCrUseOfVirtualNodeBuilder({
            error: Error()
          }), VirtualNodeBuilder) : VirtualNodeBuilder)(this._latexSrc, options);
          var nodeData = nodeBuilder.build();
          if (!nodeData) return; // Get the position and bounds data required from root node.

          var rootWidth = nodeData.rootNode.bounds.width;
          var rootHeight = nodeData.rootNode.strutBounds.height;
          var rootX = nodeData.rootNode.strutBounds.x;
          var rootY = nodeData.rootNode.strutBounds.y; // The position offset used to adjust position based on anchor.

          this._baseNodePositionOffset = v3(-rootX, rootY); // Create or get from pool

          this._baseNode = (_baseNodePool$get = baseNodePool.get()) != null ? _baseNodePool$get : new Node("BaseNode");
          this._baseNode.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
          this._baseNode.layer = this.node.layer;
          this.node.addChild(this._baseNode);
          var baseUiXform = (_this$_baseNode$getCo = this._baseNode.getComponent(UITransform)) != null ? _this$_baseNode$getCo : this._baseNode.addComponent(UITransform);
          baseUiXform.setAnchorPoint(0, 0);
          baseUiXform.setContentSize(rootWidth, rootHeight);

          this._updateBaseNodePosition();

          this._updateOverflow(); // Recursively create the node tree required.


          this._convertRecursive(nodeData.rootNode, this._baseNode);

          this._updateInputNodes();

          this._dirty = false;
        }

        _cleanup() {
          for (var node of this._gfxNodes) {
            gfxNodePool.put(node);
          }

          for (var _node of this._labelNodes) {
            labelNodePool.put(_node);
          }

          for (var _node2 of this._imgNodes) {
            imgNodePool.put(_node2);
          }

          if (this._baseNode) {
            this._baseNode.parent = null;
            baseNodePool.put(this._baseNode);
          }

          this._baseNode = null;
          this._gfxNodes = new Array();
          this._labelNodes = new Array();
          this._imgNodes = new Array();
          this._inputClassData = [];
        }

        _updateBaseNodePosition() {
          if (this._baseNode && this._baseNode.isValid) {
            var rootUiTransform = this.node._uiProps.uiTransformComp;
            var baseNodeUITransform = this._baseNode._uiProps.uiTransformComp;
            var rootWidth = rootUiTransform.contentSize.width;
            var rootHeight = rootUiTransform.contentSize.height;
            this._baseNode.position = v3(-rootWidth * rootUiTransform.anchorX, rootHeight * (1 - rootUiTransform.anchorY)).add(this._baseNodePositionOffset.clone().multiply(this._baseNode.scale));
          }
        }

        _updateOverflow() {
          var _this$getComponent;

          if (!this._baseNode) return;
          var uiTransform = this.node._uiProps.uiTransformComp;
          var fullWidth = this._baseNode._uiProps.uiTransformComp.width;
          var fullHeight = this._baseNode._uiProps.uiTransformComp.height;
          var scale = 1;

          switch (this._overflow) {
            case Overflow.NONE:
              uiTransform.setContentSize(fullWidth, fullHeight);
              break;

            case Overflow.CLAMP:
              // The position offset used to adjust position based on anchor.
              var mask = (_this$getComponent = this.getComponent(Mask)) != null ? _this$getComponent : this.addComponent(Mask);
              mask.type = Mask.Type.RECT;
              mask.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
              break;

            case Overflow.SHRINK:
              var designRatio = uiTransform.width / uiTransform.height;
              var originalRatio = fullWidth / fullHeight;

              if (designRatio >= originalRatio) {
                scale = uiTransform.height / fullHeight;
              } else {
                scale = uiTransform.width / fullWidth;
              }

            default:
              break;
          }

          this._baseNode.setScale(scale, scale, 1);

          this._updateBaseNodePosition();
        }

        _updateInputNodes() {
          var _this$_baseNode;

          var baseUI = (_this$_baseNode = this._baseNode) == null ? void 0 : _this$_baseNode._uiProps.uiTransformComp;

          if (baseUI == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Unable to place input nodes. The base node for latex rendering is invalid!!");
          }

          this._inputClassData.forEach((_ref, ind) => {
            var {
              x,
              y,
              width,
              height
            } = _ref;
            var inputUI = this.inputNodes[ind];

            if (inputUI == null) {
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)("No valid input node at index " + ind);
            }

            inputUI.setContentSize(width, height); // Calc world position of the left corner.

            var worldPos = baseUI.convertToWorldSpaceAR(v3(x, -y)); // Offset the position based on anchor point of the input ui.

            worldPos.add3f(inputUI.anchorX * width, inputUI.anchorY * height, 0);
            inputUI.node.worldPosition = worldPos;
          });
        }

        _convertRecursive(node, baseNode) {
          if (node instanceof (_crd && VirtualContainerNode === void 0 ? (_reportPossibleCrUseOfVirtualContainerNode({
            error: Error()
          }), VirtualContainerNode) : VirtualContainerNode)) {
            // Container nodes don't get rendered. We only care about
            // the children
            node.nodes.forEach(child => {
              this._convertRecursive(child, baseNode);
            });
          } else {
            this._virtualNodeToCocosMapping(node, baseNode);
          }
        }

        _virtualNodeToCocosMapping(node, baseNode) {
          // This padding doesn't get rendered.
          if (node.type === "HPaddingNode") return;

          switch (node.type) {
            case (_crd && VerticalLineNode === void 0 ? (_reportPossibleCrUseOfVerticalLineNode({
              error: Error()
            }), VerticalLineNode) : VerticalLineNode).typeId:
              this._virtualLineNodeToCocos(node, baseNode);

              break;

            case (_crd && TextNode === void 0 ? (_reportPossibleCrUseOfTextNode({
              error: Error()
            }), TextNode) : TextNode).typeId:
              this._virtualTextNodeToCocos(node, baseNode);

              break;

            case (_crd && SvgNode === void 0 ? (_reportPossibleCrUseOfSvgNode({
              error: Error()
            }), SvgNode) : SvgNode).typeId:
              this._virtualSvgNodeToCocos(node, baseNode);

              break;

            case (_crd && HorizontalLineNode === void 0 ? (_reportPossibleCrUseOfHorizontalLineNode({
              error: Error()
            }), HorizontalLineNode) : HorizontalLineNode).typeId:
              this._virtualLineNodeToCocos(node, baseNode);

              break;

            case (_crd && BoxNode === void 0 ? (_reportPossibleCrUseOfBoxNode({
              error: Error()
            }), BoxNode) : BoxNode).typeId:
              this._virtualBoxNodeToCocos(node, baseNode);

              break;

            default:
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)("Node " + node.type + " is not a renderable node.");
          }
        }

        _virtualLineNodeToCocos(virtualNode, baseNode) {
          var _gfxNodePool$get, _node$getComponent, _node$getComponent2;

          // if color is empty/transparent don't add any node.
          if (!virtualNode.color) return;
          var node = (_gfxNodePool$get = gfxNodePool.get()) != null ? _gfxNodePool$get : new Node("LatexGraphics");
          node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
          node.layer = this.node.layer;
          baseNode.addChild(node);
          var {
            x,
            y,
            width,
            height
          } = virtualNode.getBounds();
          var uiXform = (_node$getComponent = node.getComponent(UITransform)) != null ? _node$getComponent : node.addComponent(UITransform);
          uiXform.setAnchorPoint(0, 0);
          uiXform.setContentSize(width, height);
          var gfx = (_node$getComponent2 = node.getComponent(Graphics)) != null ? _node$getComponent2 : node.addComponent(Graphics);
          gfx.lineCap = Graphics.LineCap.BUTT;
          gfx.lineJoin = Graphics.LineJoin.MITER;
          gfx.miterLimit = 4;
          gfx.fillColor = color(virtualNode.color);
          gfx.fillRect(0, 0, width, height);
          node.position = v3(x, -y);

          this._gfxNodes.push(node);
        }

        _virtualBoxNodeToCocos(virtualNode, baseNode) {
          var _gfxNodePool$get2, _node$getComponent3, _node$getComponent4;

          // if color is empty/transparent don't add any node.
          if (!virtualNode.backgroundColor && !virtualNode.borderColor) return;
          var {
            isInputBoxNode,
            inputBoxNodeIndex,
            charCount
          } = checkInputBoxNode(virtualNode);

          if (isInputBoxNode) {
            this._inputClassData[inputBoxNodeIndex] = virtualNode.getBounds();
            return;
          }

          var node = (_gfxNodePool$get2 = gfxNodePool.get()) != null ? _gfxNodePool$get2 : new Node("LatexGraphics");
          node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
          node.layer = this.node.layer;
          baseNode.addChild(node);
          var {
            x,
            y,
            width,
            height
          } = virtualNode.getBounds();
          var uiXform = (_node$getComponent3 = node.getComponent(UITransform)) != null ? _node$getComponent3 : node.addComponent(UITransform);
          uiXform.setAnchorPoint(0, 0);
          uiXform.setContentSize(width, height);
          var gfx = (_node$getComponent4 = node.getComponent(Graphics)) != null ? _node$getComponent4 : node.addComponent(Graphics);
          gfx.lineCap = Graphics.LineCap.BUTT;
          gfx.lineJoin = Graphics.LineJoin.MITER;
          gfx.miterLimit = 4;
          gfx.fillColor = color(virtualNode.backgroundColor);
          gfx.strokeColor = color(virtualNode.borderColor);
          gfx.lineWidth = virtualNode.borderWidth;
          gfx.rect(0, 0, width, height);
          gfx.stroke();
          if (virtualNode.backgroundColor) gfx.fill();
          node.position = v3(x, -y);

          this._gfxNodes.push(node);
        }

        _virtualTextNodeToCocos(virtualNode, baseNode) {
          var _labelNodePool$get, _node$getComponent5, _node$getComponent6;

          // if color is empty/transparent don't add any node.
          if (!virtualNode.color) return;
          if (checkInputBoxNode(virtualNode).isInputBoxNode) return;
          var node = (_labelNodePool$get = labelNodePool.get()) != null ? _labelNodePool$get : new Node("LatexText");
          node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
          node.layer = this.node.layer;
          baseNode.addChild(node);
          var uiXform = (_node$getComponent5 = node.getComponent(UITransform)) != null ? _node$getComponent5 : node.addComponent(UITransform);
          var {
            x,
            y,
            width,
            height
          } = virtualNode.getBounds();
          var fontData = virtualNode.font.split(" "); // px to pt conversion 1px = 0.75pts

          var fontSize = +fontData[2].replace(/px/gi, "") * 0.75; // The cocos creator label is a bit wierd with base line height. Hence this adjustment.

          uiXform.setAnchorPoint(0, 0.18);
          uiXform.setContentSize(width, height);
          var label = (_node$getComponent6 = node.getComponent(Label)) != null ? _node$getComponent6 : node.addComponent(Label);
          label.horizontalAlign = Label.HorizontalAlign.CENTER;
          label.verticalAlign = Label.VerticalAlign.CENTER;
          label.overflow = Label.Overflow.SHRINK; // label.fontSize = fontSize;

          label.enableWrapText = false;
          label.color = color(virtualNode.color);
          label.isItalic = fontData[0] === "italic";
          label.isBold = fontData[1] === "bold";
          label.fontFamily = fontData[3];
          label.string = virtualNode.text;
          label.markForUpdateRenderData();
          node.position = v3(x, -y);

          this._labelNodes.push(node);
        }

        _virtualSvgNodeToCocos(virtualNode, baseNode) {
          var _node$getComponent7, _node$getComponent8;

          var node = new Node("LatexSVG");
          node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
          node.layer = this.node.layer;
          baseNode.addChild(node);
          var uiXform = (_node$getComponent7 = node.getComponent(UITransform)) != null ? _node$getComponent7 : node.addComponent(UITransform);
          uiXform.setAnchorPoint(0, 0);
          var sprite = (_node$getComponent8 = node.getComponent(Sprite)) != null ? _node$getComponent8 : node.addComponent(Sprite);
          var {
            x,
            y
          } = virtualNode.bounds;
          node.position = v3(x, -y);
          var img = new Image();
          var svg = new Blob([virtualNode.virtualHtmlNode.toMarkup()], {
            type: "image/svg+xml"
          });
          var url = URL.createObjectURL(svg);

          img.onload = () => {
            URL.revokeObjectURL(url);
            var spriteFrame = new SpriteFrame();
            var texture = new Texture2D();
            texture.image = new ImageAsset(img);
            spriteFrame.texture = texture;
            sprite.spriteFrame = spriteFrame;
          };

          img.src = url;

          this._imgNodes.push(node);
        }

      }, _class3.Overflow = Overflow, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_latexSrc", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_baseSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_defaultTextColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Color.WHITE.clone();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_inputNodes", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Array();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_overflow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Overflow.NONE;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "latex", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "latex"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "baseSize", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "baseSize"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "defaultTextColor", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "defaultTextColor"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "overflow", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "overflow"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "inputNodes", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "inputNodes"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=70f1e4896d9a66addb1bd4f6f62cbed04a3184e8.js.map