import { State } from "./RenderingState";
import { HPaddingNode } from "./virtualCanvasNodes";

/**
 * Each function in this singleton represents a mapping between a styleName and
 * how it affects the RenderingState.
 *
 * For example, color would change the color of nodes.
 *
 * While top would shift nodes down (i.e. y) by a certain factor.
 */
class StyleStateMapping {
  color(state: State, value: string) {
    return state.withColor(value);
  }

  top(state: State, value: string) {
    const yShift = +value.replace("em", "") * state.em;
    return state.withYShift(yShift);
  }

  paddingLeft(state: State, value: string) {
    const spacingLeft = +value.replace("em", "") * state.em;
    const padLeftNode = new HPaddingNode(state.classes);
    padLeftNode.setPosition(state.nextX, state.y);
    padLeftNode.bounds.set({ width: spacingLeft });
    state.vlist.addCell(padLeftNode);
    return state.withResetMargin();
  }

  marginLeft(state: State, value: string) {
    const marginLeft = +value.replace("em", "") * state.em;
    return state.withMarginLeft(marginLeft);
  }

  marginRight(state: State, value: string) {
    const marginRight = +value.replace("em", "") * state.em;
    return state.withMarginRight(marginRight);
  }

  minWidth(state: State, value: string) {
    const minWidth = +value.replace("em", "") * state.em;
    return state.withMinWidth(minWidth);
  }
}

export const styleStateMapping = new StyleStateMapping();
