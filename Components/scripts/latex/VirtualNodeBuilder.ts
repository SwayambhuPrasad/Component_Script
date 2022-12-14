import { error, warn } from "../Logger";
import { classStateMapping } from "./classStateMapping";
import { State } from "./RenderingState";
import { styleStateMapping } from "./styleStateMapping";
import {
  HPaddingNode,
  SvgNode,
  TextNode,
  VerticalList,
  VerticalListRow,
} from "./virtualCanvasNodes";
import { Bounds } from "./virtualCanvasNodes/VirtualCanvasNode";

const IDENTIFIER_CLASS = "enclosing";

var katex: any;

function isHtmlDomNode(obj: any) {
  return "classes" in obj;
}
function isSymbolNode(obj: any) {
  return obj instanceof katex.__domTree.SymbolNode;
}
function isSvgNode(obj: any) {
  return obj instanceof katex.__domTree.SvgNode;
}
function hasChildNodes(obj: any) {
  return "children" in obj;
}
function isClassName(name: string): name is keyof typeof classStateMapping {
  return name in classStateMapping;
}
function isStyleName(name: string): name is keyof typeof styleStateMapping {
  return name in styleStateMapping;
}

/**
 * NodeData represents the data returned from the build method
 */
class NodeData {
  rootNode: VerticalList;

  attributes: { baselineHeight: number; strutBounds: Bounds };

  constructor(rootNode: VerticalList, attributes: { baselineHeight: number; strutBounds: Bounds }) {
    this.rootNode = rootNode;
    this.attributes = attributes;
  }
}

/**
 * The NodeBuilder represents the entry point for all renderers.
 * The only public method available is the "build method".
 */
export class VirtualNodeBuilder {
  private _latex: string;

  private _options: any;

  private _state: State;

  private _enclosedClassIndexes: Record<string, number>;

  /**
   * Constructor
   *
   * @param  {String} latex - Sets the initial latex expression
   * @param  {KatexOptions} options - Any options to apply to the expression
   */
  constructor(latex: string, options?: any) {
    this._latex = latex;
    this._options = options ?? {};
    this._state = new State(State.defaultOptions(this._options));
    this._enclosedClassIndexes = {};
  }

  /**
   * Builds all the Virtual Nodes and retrieves the appropriate attributes
   * for the given latex/options. This is the entry point for any renderer
   * implementation.
   */
  async build() {
    this._state = new State(State.defaultOptions(this._options));
    const row = new VerticalListRow([]);
    this._state.vlist.addRow(row);
    this._enclosedClassIndexes = {};
    let virtualDomTree;
    try {
      // @ts-ignore
      if (!katex) katex = (await import("./katex/katex.js")).default;
      // @ts-ignore
      virtualDomTree = katex.__renderToHTMLTree(this._latex, this._options).children[0];
    } catch (err) {
      error(err);
      return;
    }
    this._createRenderingState(virtualDomTree);
    const rootNode = this._state.vlist;
    rootNode.align();
    const attributes = this._getNodeAttributes(virtualDomTree, rootNode);
    const nodeData = new NodeData(rootNode, attributes);
    return nodeData;
  }

  private _getNodeAttributes(virtualDomTree: any, root: VerticalList) {
    const strutBounds = root.getStrutBounds();
    const attributes = {
      baselineHeight: strutBounds.height - virtualDomTree.depth * this._state.em,
      strutBounds,
    };
    return attributes;
  }

  private _createRenderingState(node: any) {
    const parentState = this._state;
    this._getGlyphDataFromNode(node);
    if (hasChildNodes(node)) {
      node.children.forEach((child: any) => this._createRenderingState(child));
    }
    this._resetState(parentState);
  }

  private _resetState(parentState: State) {
    const vlist = this._state.vlist;
    const parentVlist = parentState.vlist;
    if (vlist !== parentVlist) {
      vlist.setStretchyWidths();
      vlist.align();
      parentVlist.addCell(vlist);
    }
    if (this._state.classes !== parentState.classes) {
      this._state.classes.forEach((classData) => {
        this._enclosedClassIndexes[classData.name]++;
      });
    }
    if (this._state.pstrut) {
      parentState = parentState.withYShift(this._state.pstrut).withResetMargin();
    }
    this._state = parentState;
  }

  private _getGlyphDataFromNode(node: any) {
    this._extractClassDataFromNode(node);
    this._extractStyleDataFromNode(node);
    this._createMSpace();
    this._createSvgNode(node);
    this._createTextNode(node);
    this._createItalicNode(node);
  }

  private _extractClassDataFromNode(node: any) {
    let nextClassIsEnclosedClass = false;
    if (!isHtmlDomNode(node)) return;
    node.classes.forEach((name: string) => {
      if (name === IDENTIFIER_CLASS) {
        nextClassIsEnclosedClass = true;
      } else if (nextClassIsEnclosedClass) {
        nextClassIsEnclosedClass = false;
        const index = (this._enclosedClassIndexes[name] = this._enclosedClassIndexes[name] ?? 0);
        this._state = this._state.withClass({ name, index });
      } else {
        const camelName = this._toCamelCase(name);
        if (isClassName(camelName)) {
          this._state = classStateMapping[camelName](this._state, node);
        }
      }
    });
  }

  private _toCamelCase(str: string) {
    return str.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  }

  private _createMSpace() {
    if (this._state.mspace) {
      const mspace = new HPaddingNode(this._state.classes);
      mspace.setPosition(this._state.nextX, this._state.y);
      mspace.bounds.set({ width: this._state.mspace * this._state.em });
      this._state.vlist.addCell(mspace);
      this._state = this._state.withResetMargin();
    }
  }

  private _extractStyleDataFromNode(node: any) {
    if (!isHtmlDomNode(node)) return;
    for (const key in node.style) {
      if (Object.prototype.hasOwnProperty.call(node.style, key)) {
        const value = node.style[key];
        if (isStyleName(key) && value != null) {
          this._state = styleStateMapping[key](this._state, value);
        }
      }
    }
  }

  private _createSvgNode(node: any) {
    if (!isSvgNode(node)) return;

    const virtualSvg = node;
    const state = this._state;
    const height = +virtualSvg.attributes.height.replace("em", "") * this._state.em;
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
        warn("Unsupported SVG node explicit style attribute", virtualSvg.attributes.style);
      } else {
        // width will be determined by height
        delete virtualSvg.attributes.style;
      }
    }
    virtualSvg.attributes.height = height.toString();
    virtualSvg.attributes.fill = this._state.color;
    const svgNode = new SvgNode(virtualSvg, state.minWidth, state.classes);
    svgNode.setPosition(state.nextX, state.y);
    svgNode.bounds.set({ height });
    svgNode.margin.set({
      left: state.marginLeft,
      right: state.marginRight,
    });
    this._state.vlist.addCell(svgNode);
    this._state = this._state.withResetMargin();
  }

  private _createTextNode(node: any) {
    // The '' is NOT an empty string. It's some invisible character (U+200B)
    // aka ZERO-WIDTH Space
    if (isSymbolNode(node) && node.text !== "???") {
      const state = this._state;
      const textNode = new TextNode(node.text, state.font, state.color, state.classes);
      // const width = parseFloat(node.style.width?.replace("em", "") ?? "0") * state.em;
      // const height = parseFloat(node.style.height?.replace("em", "") ?? "0") * state.em;
      textNode.setPosition(state.nextX, state.y);
      textNode.margin.set({
        left: state.marginLeft,
        right: state.marginRight,
      });
      // textNode.setSize(width, height);
      this._state.vlist.addCell(textNode);
      this._state = this._state.withResetMargin();
    }
  }

  private _createItalicNode(node: any) {
    if (isSymbolNode(node)) {
      const italic = this._state.em * node.italic;
      const italicNode = new HPaddingNode(this._state.classes);
      italicNode.setPosition(this._state.nextX, 0);
      italicNode.bounds.set({ width: italic });
      this._state.vlist.addCell(italicNode);
      this._state = this._state.withResetMargin();
    }
  }
}
