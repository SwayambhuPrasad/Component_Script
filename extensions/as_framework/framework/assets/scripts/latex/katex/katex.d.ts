/* eslint-disable @typescript-eslint/naming-convention */
declare namespace katex {
  export interface TrustContext {
    command: string;
    url: string;
    protocol: string;
  }

  export type NodeAttributes = { [index: string]: string };

  /** Documentation: https://katex.org/docs/options.html */
  export interface KatexOptions {
    /**
     * If `true`, math will be rendered in display mode, which puts the math
     * in display style (so `\int` and `\sum` are large, for example), and
     * centers the math on the page on its own line.
     *
     * If `false`, math will be rendered in inline mode
     * @default false
     *
     */
    displayMode?: boolean;
    /**
     * Determines the markup language of the output. The valid choices are:
     * - `html`: Outputs KaTeX in HTML only.
     * - `mathml`: Outputs KaTeX in MathML only.
     * - `htmlAndMathml`: Outputs HTML for visual rendering
     *   and includes MathML for accessibility.
     *
     * @default 'htmlAndMathml'
     */
    output?: "html" | "mathml" | "htmlAndMathml";
    /**
     * Render display math in leqno style (left-justified tags).
     * If `true`, display math has `\tags` rendered on the left
     * instead of the right, like `\usepackage[leqno]{amsmath}` in LaTeX.
     *
     * @default false
     */
    leqno?: boolean;
    /**
     * Render display math flush left.
     * If `true`, display math renders flush left with a 2em left margin,
     * like `\documentclass[fleqn]` in LaTeX with the amsmath package.
     *
     * @default false
     */
    fleqn?: boolean;
    /**
     * If `true`, KaTeX will throw a `ParseError` when
     * it encounters an unsupported command or invalid LaTex
     *
     * If `false`, KaTeX will render unsupported commands as
     * text, and render invalid LaTeX as its source code with
     * hover text giving the error, in color given by `errorColor`.
     * @default true
     */
    throwOnError?: boolean;
    /**
     * A Color string given in format `#XXX` or `#XXXXXX`.
     * This option determines the color of errors rendered.
     */
    errorColor?: string;
    /**
     * A collection of custom macros.
     * Define custom macro of the form `\foo:expansion`
     *
     * See `src/macros.js` for its usage
     */
    macros?: NodeAttributes;
    /**
     * Specifies a minimum thickness, in ems, for fraction lines,
     * `\sqrt` top lines, `{array}` vertical lines, `\hline`, `\hdashline`,
     * `\underline`, `\overline`, and the borders of `\fbox`, `\boxed`, and
     * `\fcolorbox`.
     */
    minRuleThickness?: number;
    /**
     * If `true`, `\color` will work like LaTeX's `\textcolor`
     * and takes 2 arguments
     *
     * If `false`, `\color` will work like LaTeX's `\color`
     * and takes 1 argument
     *
     * In both cases, `\textcolor` works as in LaTeX
     *
     * @default false
     */
    colorIsTextColor?: boolean;
    /**
     * All user-specified sizes will be caped to `maxSize` ems
     *
     * If set to Infinity, users can make elements and space
     * arbitrarily large
     *
     * @default Infinity
     */
    maxSize?: number | undefined;
    /**
     * Limit the number of macro expansions to specified number
     *
     * If set to `Infinity`, marco expander will try to fully expand
     * as in LaTex
     *
     * @default 1000
     */
    maxExpand?: number | undefined;
    /**
     * If `false` or `"ignore"`, allow features that make
     * writing in LaTex convenient but not supported by LaTex
     *
     * If `true` or `"error"`, throw an error for such transgressions
     *
     * If `"warn"`, warn about behavior via `console.warn`
     *
     * @default "warn"
     */
    strict?: boolean | string | Function | undefined;
    /**
     * If `false` (do not trust input), prevent any commands that could enable adverse behavior, rendering them instead in errorColor.
     *
     * If `true` (trust input), allow all such commands.
     *
     * @default false
     */
    trust?: boolean | ((context: TrustContext) => boolean) | undefined;
    /**
     * Place KaTeX code in the global group.
     *
     * @default false
     */
    globalGroup?: boolean | undefined;
  }

  export class ParseError implements Error {
    name: string;

    message: string;

    position: number;

    constructor(message: string, lexer: any, position: number);
  }

  /**
   * Renders a TeX expression into the specified DOM element
   * @param tex A TeX expression
   * @param element The DOM element to render into
   * @param options KaTeX options
   */
  export function render(tex: string, element: HTMLElement, options?: Partial<KatexOptions>): void;

  /**
   * Renders a TeX expression into an HTML string
   * @param tex A TeX expression
   * @param options KaTeX options
   */
  export function renderToString(tex: string, options?: Partial<KatexOptions>): string;

  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  export function __parse(expression: string, options?: Partial<KatexOptions>): any;

  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  export function __renderToDomTree(
    expression: string,
    options?: Partial<KatexOptions>,
  ): domTree.DomSpan;

  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  export function __renderToHTMLTree(
    expression: string,
    options?: Partial<KatexOptions>,
  ): domTree.DomSpan;
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
   */
  export function __setFontMetrics(fontName: string, metrics: { [index: string]: number[] }): void;
  /**
   * adds a new symbol to builtin symbols table
   */
  export function __defineSymbol(
    mode: "math" | "text",
    font: "main" | "ams",
    group:
      | "bin"
      | "close"
      | "inner"
      | "open"
      | "punct"
      | "rel"
      | "accent-token"
      | "mathord"
      | "op-token"
      | "spacing"
      | "textord",
    replace?: string,
    name?: string,
    acceptUnicodeChar?: boolean,
  ): void;

  /**
   * adds a new macro to builtin macro list
   */
  export function __defineMacro(name: string, body: string): void;

  export namespace domTree {
    export interface VirtualNode {
      toNode(): Node;
      toMarkup(): string;
    }

    export type CssStyle = Partial<{
      backgroundColor: string;
      borderBottomWidth: string;
      borderColor: string;
      borderRightStyle: string;
      borderRightWidth: string;
      borderTopWidth: string;
      borderStyle: string;
      borderWidth: string;
      bottom: string;
      color: string;
      height: string;
      left: string;
      margin: string;
      marginLeft: string;
      marginRight: string;
      marginTop: string;
      minWidth: string;
      paddingLeft: string;
      position: string;
      top: string;
      width: string;
      verticalAlign: string;
    }>;

    export interface HtmlDomNode extends VirtualNode {
      classes: string[];
      height: number;
      depth: number;
      maxFontSize: number;
      style: CssStyle;

      hasClass(className: string): boolean;
    }

    /**
     * This node represents a span node, with a className, a list of children, and
     * an inline style. It also contains information about its height, depth, and
     * maxFontSize.
     *
     * Represents two types with different uses: SvgSpan to wrap an SVG and DomSpan
     * otherwise. This typesafety is important when HTML builders access a span's
     * children.
     */
    export interface Span<ChildType extends VirtualNode> extends HtmlDomNode {
      children: ChildType[];
      attributes: NodeAttributes;
      width?: number;

      /**
       * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
       * all browsers support attributes the same, and having too many custom
       * attributes is probably bad.
       */
      setAttribute(attribute: string, value: string): void;
    }

    /**
     * This node represents an anchor (<a>) element with a hyperlink.  See `span`
     * for further details.
     */
    export interface Anchor extends HtmlDomNode {
      children: HtmlDomNode[];
      attributes: NodeAttributes;

      setAttribute(attribute: string, value: string): void;
    }

    /**
     * This node represents an image embed (<img>) element.
     */
    export interface Img extends HtmlDomNode {
      src: string;
      alt: string;
    }

    /**
     * A symbol node contains information about a single symbol. It either renders
     * to a single text node, or a span with a single text node in it, depending on
     * whether it has CSS classes, styles, or needs italic correction.
     */
    export interface SymbolNode extends HtmlDomNode {
      text: string;
      depth: number;
      italic: number;
      skew: number;
      width: number;
    }

    export type SvgChildNode = PathNode | LineNode;

    /**
     * SVG nodes are used to render stretchy wide elements.
     */
    export interface SvgNode extends VirtualNode {
      children: SvgChildNode[];
      attributes: NodeAttributes;
    }

    export interface PathNode extends VirtualNode {
      pathName: string;
      alternate?: string;
    }

    export interface LineNode extends VirtualNode {
      attributes: NodeAttributes;
    }

    // Span wrapping other DOM nodes.
    export type DomSpan = Span<HtmlDomNode>;
    // Span wrapping an SVG node.
    export type SvgSpan = Span<SvgNode>;
  }

  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  export const __domTree: {
    Span: any;
    Anchor: any;
    SymbolNode: any;
    SvgNode: any;
    PathNode: any;
    LineNode: any;
  };
}

export default katex;
