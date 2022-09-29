import { ClassData, ClassList, VerticalList } from "./virtualCanvasNodes";

const SIZES = [null, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.2, 1.44, 1.728, 2.074, 2.488];

export class State {
  private _y = 0;

  private _baseSize = 44;

  private _sizeIndex = 6;

  private _family = "KaTeX_Main";

  private _variant = "normal";

  private _weight = "normal";

  private _vlist = new VerticalList("center", 0, []);

  private _textAlign: "left" | "center" | "right" = "left";

  private _minWidth = 0;

  private _marginRight = 0;

  private _marginLeft = 0;

  private _delimSizing = false;

  private _classes: ClassList = [];

  private _mspace = 0;

  private _pstrut: number | undefined = undefined;

  private _color = "black";

  constructor(state: Partial<State> = {}) {
    Object.assign(this, state);
  }

  get classes() {
    return this._classes;
  }

  get pstrut() {
    return this._pstrut;
  }

  get mspace() {
    return this._mspace;
  }

  get nextX() {
    return this.vlist.getNextNodePlacement() + this.marginLeft;
  }

  get marginLeft() {
    return this._marginLeft;
  }

  get marginRight() {
    return this._marginRight;
  }

  get delimSizing() {
    return this._delimSizing;
  }

  get minWidth() {
    return this._minWidth;
  }

  get color() {
    return this._color;
  }

  get textAlign() {
    return this._textAlign;
  }

  get y() {
    return this._y;
  }

  get vlist() {
    return this._vlist;
  }

  get em() {
    return this._baseSize * (SIZES[this._sizeIndex] ?? 0);
  }

  get font() {
    const weight = this._weight ? `${this._weight} ` : "";
    const variant = this._variant ? `${this._variant} ` : "";
    const font = `${variant}${weight}${this.em}px ${this._family}`;
    return font;
  }

  static defaultOptions(options: any): State {
    const state = new State();
    state._baseSize = options.baseSize ?? 44;
    state._sizeIndex = options.sizeIndex ?? 6;
    state._vlist = new VerticalList(options.alignment ?? "center", 0, []);
    state._color = options.defaultTextColor ?? "black";

    return state;
  }

  withMarginLeft(marginLeft: number) {
    const state = new State(this);
    state._marginLeft += marginLeft;
    return state;
  }

  withMarginRight(marginRight: number) {
    const state = new State(this);
    state._marginRight += marginRight;
    return state;
  }

  withResetMargin() {
    const state = new State(this);
    state._marginRight = 0;
    state._marginLeft = 0;
    return state;
  }

  withDelimSizing() {
    const state = new State(this);
    state._delimSizing = true;
    return state;
  }

  withColor(color: string) {
    const state = new State(this);
    state._color = color;
    return state;
  }

  withYShift(y: number) {
    const state = new State(this);
    state._y += y;
    return state;
  }

  withFamily(family: string) {
    const state = new State(this);
    state._family = family;
    return state;
  }

  withWeight(weight: string) {
    const state = new State(this);
    state._weight = weight;
    return state;
  }

  withVlist(table: VerticalList) {
    const state = new State(this);
    state._vlist = table;
    return state;
  }

  withClass(classData: ClassData) {
    const state = new State(this);
    const clonedClasses = [];
    state._classes.forEach((val) => clonedClasses.push(Object.assign({}, val)));
    clonedClasses.push(classData);
    state._classes = clonedClasses;
    return state;
  }

  withMSpace(mspace: number) {
    const state = new State(this);
    state._mspace = mspace;
    return state;
  }

  withVariant(variant: string) {
    const state = new State(this);
    state._variant = variant;
    return state;
  }

  withSize(size: number) {
    const state = new State(this);
    state._sizeIndex = size;
    return state;
  }

  withTextAlign(align: "left" | "center" | "right") {
    const state = new State(this);
    state._textAlign = align;
    return state;
  }

  withMinWidth(width: number) {
    const state = new State(this);
    state._minWidth = width;
    return state;
  }

  withPstrut(pstrut: number) {
    const state = new State(this);
    state._pstrut = pstrut;
    return state;
  }
}
