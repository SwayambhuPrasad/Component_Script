import { State } from "./RenderingState";
import {
  BoxNode,
  HorizontalLineNode,
  HPaddingNode,
  VerticalLineNode,
  VerticalList,
  VerticalListRow,
} from "./virtualCanvasNodes";

function withSize(state: State, size: number) {
  if (state.delimSizing) {
    return state.withFamily(`KaTeX_Size${size}`);
  } else {
    return state.withSize(size);
  }
}

function withHorizLine(state: State, node: any) {
  const lineHeight = parseFloat(node.style.borderBottomWidth?.replace("em", "") ?? "0") * state.em;
  const lineNode = new HorizontalLineNode(state.color, state.minWidth, state.classes);
  lineNode.setPosition(state.nextX, state.y);
  lineNode.bounds.set({ height: lineHeight });
  lineNode.margin.set({ left: state.marginLeft, right: state.marginRight });
  state.vlist.addCell(lineNode);
  return state.withResetMargin();
}

function withVertLine(state: State, node: any) {
  const sepHeight = parseFloat(node.style.height?.replace("em", "") ?? "0") * state.em;
  const sepWidth = 0.05 * state.em;
  const sepVerticalAlign =
    parseFloat(node.style.verticalAlign?.replace("em", "") ?? "0") * state.em;
  const sepY = state.y - sepVerticalAlign;
  const lineNode = new VerticalLineNode(state.color, state.classes);
  lineNode.setPosition(state.nextX, sepY);
  lineNode.bounds.set({ width: sepWidth, height: sepHeight });
  lineNode.margin.set({ left: state.marginLeft, right: state.marginRight });
  state.vlist.addCell(lineNode);
  return state.withResetMargin();
}

function withBox(state: State, node: any, hasBorder: boolean) {
  const TRANSPARENT_COLOR = "";
  const isTransparentBackground =
    !node.style.backgroundColor || node.style.backgroundColor === "none";
  const backgroundColor = isTransparentBackground ? TRANSPARENT_COLOR : node.style.backgroundColor;
  const isDefaultColor = !node.style.borderColor || node.style.borderColor === "default";
  const borderColor = isDefaultColor ? state.color : node.style.borderColor;
  const borderWidth = hasBorder ? 0.04 * state.em : 0.0000001;
  const height = parseFloat(node.style.height?.replace("em", "") ?? "0") * state.em;
  const minWidth = state.em * 0.3 * 2;
  state.vlist.alignment = "center";
  const x = state.nextX;
  const box = new BoxNode(
    backgroundColor ?? "",
    borderColor ?? "",
    borderWidth,
    minWidth,
    state.classes,
  );
  box.setPosition(x, state.y);
  box.bounds.set({ height });
  box.margin.set({ left: state.marginLeft, right: state.marginRight });
  state.vlist.addCell(box);
  return state.withResetMargin();
}

function hasChildNodes(obj: any): obj is any & { children: any[] } {
  return "children" in obj;
}

class ClassStateMapping {
  colorbox(state: State, node: any) {
    return withBox(state, node, false);
  }

  fbox(state: State, node: any) {
    return withBox(state, node, true);
  }

  fcolorbox(state: State, node: any) {
    return withBox(state, node, true);
  }

  vlist(state: State, node: any) {
    if (
      hasChildNodes(node) &&
      hasChildNodes(node.children[0]) &&
      node.children[0].children.length
    ) {
      const vlist = new VerticalList(state.textAlign, state.nextX, state.classes);
      vlist.setPosition(state.nextX, state.y);
      vlist.margin.set({
        left: state.marginLeft,
        right: state.marginRight,
      });
      return state.withVlist(vlist).withResetMargin();
    }
    return state;
  }

  pstrut(state: State, node: any) {
    const height = parseFloat(node.style.height?.replace("em", "") ?? "0") * state.em;
    const tableRow = new VerticalListRow(state.classes);
    state.vlist.addRow(tableRow);
    tableRow.setPosition(state.nextX, state.y + height);
    tableRow.bounds.set({ height });
    tableRow.margin.set({
      left: state.marginLeft,
      right: state.marginRight,
    });
    return state.withPstrut(height);
  }

  base(state: State, node: any) {
    const height = node.height * state.em;
    const strut = new HPaddingNode(state.classes);
    const depth = node.depth * state.em;
    strut.setPosition(state.nextX, state.y - height);
    strut.bounds.set({ height: height + depth });
    const lastRow = state.vlist.last() as VerticalListRow;
    // lastRow.depth = depth;
    lastRow.addBaseStrut(strut);
    return state;
  }

  newline(state: State, node: any) {
    const tableRow = new VerticalListRow(state.classes);
    const strutBounds = (state.vlist.last() as VerticalListRow).strutBounds;
    const marginTop = node.style.marginTop;
    const topPadding = marginTop ? +marginTop.replace("em", "") * state.em : 0;
    state.vlist.addRow(tableRow);
    tableRow.setPosition(state.nextX, state.y);
    const lineHeight = state.em * 1.2;
    const strutHeight = strutBounds?.height ?? 0;
    const yOffset = Math.max(lineHeight, strutHeight);
    return state.withPstrut(yOffset + topPadding);
  }

  root(state: State) {
    const mu = state.em * (1.0 / 18.0);
    return state.withMarginRight(mu * -10).withMarginLeft(mu * 5);
  }

  arraycolsep(state: State, node: any) {
    const colWidth = parseFloat(node.style.width?.replace("em", "") ?? "0") * state.em;
    const hPad = new HPaddingNode(state.classes);
    hPad.setPosition(state.nextX, state.y);
    hPad.bounds.set({ width: colWidth });
    state.vlist.addCell(hPad);
    return state.withResetMargin();
  }

  colAlignR(state: State) {
    return state.withTextAlign("right");
  }

  colAlignL(state: State) {
    return state.withTextAlign("left");
  }

  xArrow(state: State) {
    return state.withTextAlign("center");
  }

  accent(state: State, _node: any, options?: Partial<{ defaultSansSerifText: string }>) {
    const family = options?.defaultSansSerifText ?? "KaTeX_SansSerif";
    return state.withTextAlign("center").withFamily(family);
  }

  colAlignC(state: State) {
    return state.withTextAlign("center");
  }

  opLimits(state: State) {
    return state.withTextAlign("center");
  }

  mfrac(state: State) {
    return state.withTextAlign("center");
  }

  verticalSeparator(state: State, node: any) {
    return withVertLine(state, node);
  }

  hline(state: State, node: any) {
    return withHorizLine(state, node);
  }

  overlineLine(state: State, node: any) {
    return withHorizLine(state, node);
  }

  underlineLine(state: State, node: any) {
    return withHorizLine(state, node);
  }

  fracLine(state: State, node: any) {
    return withHorizLine(state, node);
  }

  svgAlign(state: State) {
    return state.withTextAlign("left");
  }

  delimcenter(state: State, node: any) {
    const height = node.height * state.em;
    return state.withYShift(0.32 * height);
  }

  delimsizing(state: State) {
    return state.withDelimSizing();
  }

  size1(state: State) {
    return withSize(state, 1);
  }

  size2(state: State) {
    return withSize(state, 2);
  }

  size3(state: State) {
    return withSize(state, 3);
  }

  size4(state: State) {
    return withSize(state, 4);
  }

  size5(state: State) {
    return withSize(state, 5);
  }

  size6(state: State) {
    return withSize(state, 6);
  }

  size7(state: State) {
    return withSize(state, 7);
  }

  size8(state: State) {
    return withSize(state, 8);
  }

  size9(state: State) {
    return withSize(state, 9);
  }

  size10(state: State) {
    return withSize(state, 10);
  }

  size11(state: State) {
    return withSize(state, 11);
  }

  nulldelimiter(state: State) {
    const ptperem = 10.0;
    const nullDelimSpace = 1.2 / ptperem;
    const nullPaddWidth = nullDelimSpace * state.em;
    const node = new HPaddingNode(state.classes);
    node.setPosition(state.nextX, state.y);
    node.bounds.set({ width: nullPaddWidth });
    state.vlist.addCell(node);
    return state.withResetMargin();
  }

  textbf(state: State) {
    return state.withWeight("bold");
  }

  textit(state: State) {
    return state.withVariant("italic");
  }

  textrm(state: State) {
    return state.withFamily("KaTeX_Main");
  }

  textsf(state: State) {
    return state.withFamily("KaTeX_SansSerif");
  }

  texttt(state: State) {
    return state.withFamily("KaTeX_Typewriter");
  }

  mathit(state: State) {
    return state.withWeight("normal").withVariant("italic").withFamily("KaTeX_Math");
  }

  mspace(state: State, node: any) {
    if (node.style.marginRight) {
      const mspace = +node.style.marginRight.replace("em", "");
      return state.withMSpace(mspace);
    }
    return state;
  }

  mathbf(state: State) {
    return state.withWeight("bold").withVariant("normal").withFamily("KaTeX_Main");
  }

  mathbb(state: State) {
    return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_AMS");
  }

  mathcal(state: State) {
    return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Caligraphic");
  }

  mathfrak(state: State) {
    return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Fraktur");
  }

  mathtt(state: State) {
    return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Typewriter");
  }

  mathscr(state: State) {
    return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Script");
  }

  mathsf(state: State) {
    return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_SansSerif");
  }

  mathrm(state: State) {
    return state.withWeight("normal").withVariant("normal").withFamily("Katex_Main");
  }

  mainit(state: State) {
    return state.withVariant("italic").withFamily("KaTeX_Main");
  }

  amsrm(state: State) {
    return state.withFamily("KaTeX_AMS");
  }

  boldsymbol(state: State) {
    return state.withWeight("bold").withVariant("italic").withFamily("KaTeX_Math");
  }

  smallOp(state: State) {
    return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Size1");
  }

  largeOp(state: State) {
    return state.withWeight("normal").withVariant("normal").withFamily("KaTeX_Size2");
  }
}

/**
 * Each function in this singleton represents a mapping between className and
 * how it affects the RenderingState.
 *
 * For example, textbf maps to a bold weight for text.
 *
 * While an mfrac state maps to a center-aligned VerticalList
 * (think how fractions are centered)
 */
export const classStateMapping = new ClassStateMapping();
