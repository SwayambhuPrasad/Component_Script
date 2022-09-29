import {
  ccenum,
  CCObject,
  CCString,
  Color,
  color,
  Component,
  Director,
  director,
  Graphics,
  ImageAsset,
  Label,
  Mask,
  Node,
  NodePool,
  Sprite,
  SpriteFrame,
  Texture2D,
  UITransform,
  v3,
  _decorator,
} from "cc";
import { AS } from "./ASComponent";
import { getFontsLoadedEvent } from "./FontManager";
import {
  BoxNode,
  HorizontalLineNode,
  SvgNode,
  TextNode,
  VerticalLineNode,
  VirtualCanvasNode,
  VirtualContainerNode,
} from "./latex/virtualCanvasNodes";
import { VirtualNodeBuilder } from "./latex/VirtualNodeBuilder";
import { error } from "./Logger";
const { ccclass, property, executeInEditMode, requireComponent } = _decorator;

const gfxNodePool = new NodePool();
const labelNodePool = new NodePool();
const imgNodePool = new NodePool();
const baseNodePool = new NodePool();
const fontsLoadedEvent = getFontsLoadedEvent();

const INPUT_CLASS = "asInput";

enum Overflow {
  NONE,
  CLAMP,
  SHRINK,
}
ccenum(Overflow);

interface InputNodeData {
  x: number;
  y: number;
  width: number;
  height: number;
}

const inputMacros = {
  "\\input": `\\htmlClass{${INPUT_CLASS}#1}{\\boxed{#1}}`,
};

function checkInputBoxNode(virtualNode: VirtualCanvasNode) {
  let isInputBoxNode = false;
  let inputBoxNodeIndex = -1;
  let charCount = 6;
  for (const { name, index } of virtualNode.classes) {
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
    charCount,
  };
}

@ccclass("LatexRenderer")
@executeInEditMode
@requireComponent(UITransform)
export class LatexRenderer extends AS(Component) {
  static readonly Overflow = Overflow;

  @property protected _latexSrc = "";

  @property protected _baseSize = 20;

  @property protected _defaultTextColor = Color.WHITE.clone();

  @property protected _inputNodes = Array<UITransform>();

  @property protected _overflow = Overflow.NONE;

  protected _dirty = true;

  private _baseNode: Node | null = null;

  private _baseNodePositionOffset = v3();

  private _gfxNodes = new Array<Node>();

  private _labelNodes = new Array<Node>();

  private _imgNodes = new Array<Node>();

  private _inputClassData = Array<InputNodeData>();

  @property({ type: CCString, displayName: "Latex Source", multiline: true })
  get latex() {
    return this._latexSrc;
  }

  @property({ min: 1 })
  get baseSize() {
    return this._baseSize;
  }

  @property(Color)
  get defaultTextColor() {
    return this._defaultTextColor;
  }

  @property({ type: Overflow }) get overflow() {
    return this._overflow;
  }

  @property(UITransform)
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

  private _onBeforeDraw() {
    if (!this._dirty) return;
    this._render();
  }

  private _transformChanged(type: number) {
    if (!(type & Node.TransformBit.POSITION)) return;
    this._updateInputNodes();
    // if (EDITOR) {
    // }
  }

  private async _render() {
    this._cleanup();

    const options = {
      output: "html",
      displayMode: true,
      baseSize: this._baseSize,
      defaultTextColor: this._defaultTextColor.toCSS(),
      macros: inputMacros,
      strict: false,
      trust: true,
    };

    const nodeBuilder = new VirtualNodeBuilder(this._latexSrc, options);
    const nodeData = await nodeBuilder.build();
    if (!nodeData) return;

    // Get the position and bounds data required from root node.
    const rootWidth = nodeData.rootNode.bounds.width;
    const rootHeight = nodeData.rootNode.strutBounds.height;
    const rootX = nodeData.rootNode.strutBounds.x;
    const rootY = nodeData.rootNode.strutBounds.y;
    // The position offset used to adjust position based on anchor.
    this._baseNodePositionOffset = v3(-rootX, rootY);

    // Create or get from pool
    this._baseNode = baseNodePool.get() ?? new Node("BaseNode");
    this._baseNode.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
    this._baseNode.layer = this.node.layer;
    this.node.addChild(this._baseNode);

    const baseUiXform =
      this._baseNode.getComponent(UITransform) ?? this._baseNode.addComponent(UITransform);
    baseUiXform.setAnchorPoint(0, 0);
    baseUiXform.setContentSize(rootWidth, rootHeight);
    this._updateBaseNodePosition();

    this._updateOverflow();

    // Recursively create the node tree required.
    this._convertRecursive(nodeData.rootNode, this._baseNode);
    this._updateInputNodes();

    this._dirty = false;
  }

  private _cleanup() {
    for (const node of this._gfxNodes) {
      gfxNodePool.put(node);
    }

    for (const node of this._labelNodes) {
      labelNodePool.put(node);
    }

    for (const node of this._imgNodes) {
      imgNodePool.put(node);
    }

    if (this._baseNode) {
      this._baseNode.parent = null;
      baseNodePool.put(this._baseNode);
    }

    this._baseNode = null;
    this._gfxNodes = new Array<Node>();
    this._labelNodes = new Array<Node>();
    this._imgNodes = new Array<Node>();
    this._inputClassData = [];
  }

  private _updateBaseNodePosition() {
    if (this._baseNode && this._baseNode.isValid) {
      const rootUiTransform = this.node._uiProps.uiTransformComp!;
      const baseNodeUITransform = this._baseNode._uiProps.uiTransformComp!;
      const rootWidth = rootUiTransform.contentSize.width;
      const rootHeight = rootUiTransform.contentSize.height;

      this._baseNode.position = v3(
        -rootWidth * rootUiTransform.anchorX,
        rootHeight * (1 - rootUiTransform.anchorY),
      ).add(this._baseNodePositionOffset.clone().multiply(this._baseNode.scale));
    }
  }

  private _updateOverflow() {
    if (!this._baseNode) return;
    const uiTransform = this.node._uiProps.uiTransformComp!;
    const fullWidth = this._baseNode._uiProps.uiTransformComp!.width;
    const fullHeight = this._baseNode._uiProps.uiTransformComp!.height;
    let scale = 1;
    switch (this._overflow) {
      case Overflow.NONE:
        uiTransform.setContentSize(fullWidth, fullHeight);
        break;
      case Overflow.CLAMP:
        // The position offset used to adjust position based on anchor.
        const mask = this.getComponent(Mask) ?? this.addComponent(Mask)!;
        mask.type = Mask.Type.RECT;
        mask.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
        break;
      case Overflow.SHRINK:
        const designRatio = uiTransform.width / uiTransform.height;
        const originalRatio = fullWidth / fullHeight;

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

  private _updateInputNodes() {
    const baseUI = this._baseNode?._uiProps.uiTransformComp;
    if (baseUI == null) {
      error(`Unable to place input nodes. The base node for latex rendering is invalid!!`);
    }

    this._inputClassData.forEach(({ x, y, width, height }, ind) => {
      const inputUI = this.inputNodes[ind];
      if (inputUI == null) {
        error(`No valid input node at index ${ind}`);
      }

      inputUI.setContentSize(width, height);
      // Calc world position of the left corner.
      const worldPos = baseUI!.convertToWorldSpaceAR(v3(x, -y));
      // Offset the position based on anchor point of the input ui.
      worldPos.add3f(inputUI.anchorX * width, inputUI.anchorY * height, 0);
      inputUI.node.worldPosition = worldPos;
    });
  }

  private _convertRecursive(node: VirtualCanvasNode, baseNode: Node) {
    if (node instanceof VirtualContainerNode) {
      // Container nodes don't get rendered. We only care about
      // the children
      node.nodes.forEach((child) => {
        this._convertRecursive(child, baseNode);
      });
    } else {
      this._virtualNodeToCocosMapping(node, baseNode);
    }
  }

  private _virtualNodeToCocosMapping(node: VirtualCanvasNode, baseNode: Node) {
    // This padding doesn't get rendered.
    if (node.type === "HPaddingNode") return;
    switch (node.type) {
      case VerticalLineNode.typeId:
        this._virtualLineNodeToCocos(node as VerticalLineNode, baseNode);
        break;
      case TextNode.typeId:
        this._virtualTextNodeToCocos(node as TextNode, baseNode);
        break;
      case SvgNode.typeId:
        this._virtualSvgNodeToCocos(node as SvgNode, baseNode);
        break;
      case HorizontalLineNode.typeId:
        this._virtualLineNodeToCocos(node as HorizontalLineNode, baseNode);
        break;
      case BoxNode.typeId:
        this._virtualBoxNodeToCocos(node as BoxNode, baseNode);
        break;
      default:
        error(`Node ${node.type} is not a renderable node.`);
    }
  }

  private _virtualLineNodeToCocos(
    virtualNode: VerticalLineNode | HorizontalLineNode,
    baseNode: Node,
  ) {
    // if color is empty/transparent don't add any node.
    if (!virtualNode.color) return;

    const node = gfxNodePool.get() ?? new Node("LatexGraphics");
    node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
    node.layer = this.node.layer;
    baseNode.addChild(node);

    const { x, y, width, height } = virtualNode.getBounds();
    const uiXform = node.getComponent(UITransform) ?? node.addComponent(UITransform);
    uiXform.setAnchorPoint(0, 0);
    uiXform.setContentSize(width, height);

    const gfx = node.getComponent(Graphics) ?? node.addComponent(Graphics);
    gfx.lineCap = Graphics.LineCap.BUTT;
    gfx.lineJoin = Graphics.LineJoin.MITER;
    gfx.miterLimit = 4;
    gfx.fillColor = color(virtualNode.color);
    gfx.fillRect(0, 0, width, height);
    node.position = v3(x, -y);

    this._gfxNodes.push(node);
  }

  private _virtualBoxNodeToCocos(virtualNode: BoxNode, baseNode: Node) {
    // if color is empty/transparent don't add any node.
    if (!virtualNode.backgroundColor && !virtualNode.borderColor) return;

    const { isInputBoxNode, inputBoxNodeIndex, charCount } = checkInputBoxNode(virtualNode);

    if (isInputBoxNode) {
      this._inputClassData[inputBoxNodeIndex] = virtualNode.getBounds();
      return;
    }

    const node = gfxNodePool.get() ?? new Node("LatexGraphics");
    node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
    node.layer = this.node.layer;
    baseNode.addChild(node);

    const { x, y, width, height } = virtualNode.getBounds();
    const uiXform = node.getComponent(UITransform) ?? node.addComponent(UITransform);
    uiXform.setAnchorPoint(0, 0);
    uiXform.setContentSize(width, height);

    const gfx = node.getComponent(Graphics) ?? node.addComponent(Graphics);
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

  private _virtualTextNodeToCocos(virtualNode: TextNode, baseNode: Node) {
    // if color is empty/transparent don't add any node.
    if (!virtualNode.color) return;

    if (checkInputBoxNode(virtualNode).isInputBoxNode) return;

    const node = labelNodePool.get() ?? new Node("LatexText");
    node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
    node.layer = this.node.layer;
    baseNode.addChild(node);

    const uiXform = node.getComponent(UITransform) ?? node.addComponent(UITransform);
    const { x, y, width, height } = virtualNode.getBounds();
    const fontData = virtualNode.font.split(" ");
    // px to pt conversion 1px = 0.75pts
    const fontSize = +fontData[2].replace(/px/gi, "") * 0.75;
    // The cocos creator label is a bit wierd with base line height. Hence this adjustment.
    uiXform.setAnchorPoint(0, 0.18);
    uiXform.setContentSize(width, height);

    const label = node.getComponent(Label) ?? node.addComponent(Label);
    label.horizontalAlign = Label.HorizontalAlign.CENTER;
    label.verticalAlign = Label.VerticalAlign.CENTER;
    label.overflow = Label.Overflow.SHRINK;
    // label.fontSize = fontSize;
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

  private _virtualSvgNodeToCocos(virtualNode: SvgNode, baseNode: Node) {
    const node = new Node("LatexSVG");
    node.hideFlags |= CCObject.Flags.DontSave | CCObject.Flags.HideInHierarchy;
    node.layer = this.node.layer;
    baseNode.addChild(node);
    const uiXform = node.getComponent(UITransform) ?? node.addComponent(UITransform);
    uiXform.setAnchorPoint(0, 0);
    const sprite = node.getComponent(Sprite) ?? node.addComponent(Sprite);
    const { x, y } = virtualNode.bounds;
    node.position = v3(x, -y);

    const img = new Image();
    const svg = new Blob([virtualNode.virtualHtmlNode.toMarkup()], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svg);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const spriteFrame = new SpriteFrame();
      const texture = new Texture2D();
      texture.image = new ImageAsset(img);
      spriteFrame.texture = texture;
      sprite.spriteFrame = spriteFrame;
    };

    img.src = url;
    this._imgNodes.push(node);
  }
}
