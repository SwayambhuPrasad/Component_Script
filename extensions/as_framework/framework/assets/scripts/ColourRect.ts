import { CCBoolean, CCInteger, clamp, color, Color, Graphics, UITransform, _decorator } from "cc";
import { AS } from "./ASComponent";

const { ccclass, property, requireComponent, disallowMultiple, executeInEditMode } = _decorator;

@ccclass("ColourRect")
@disallowMultiple
@executeInEditMode
@requireComponent(UITransform)
export class ColourRect extends AS(Graphics) {
  @property protected _isRounded = false;

  @property protected _radius = 4;

  @property protected _useFill = true;

  private _uiTransform: UITransform | null = null;

  private _opacity = 1;

  @property({ type: CCBoolean, tooltip: "Enable to create rect with rounded corners." })
  get isRounded() {
    return this._isRounded;
  }

  @property({
    type: CCInteger,
    visible: function (this: ColourRect) {
      return this.isRounded;
    },
    tooltip: "If is rounded the radius to use for the corners.",
  })
  get radius() {
    return this._radius;
  }

  @property({ type: CCBoolean, tooltip: "Enable to fill rect." })
  get useFill() {
    return this._useFill;
  }

  // Override the existing color property.
  @property({ type: Color, override: true, visible: true })
  get color() {
    return this.fillColor;
  }

  @property({
    override: true,
    visible: function (this: ColourRect) {
      return !this.useFill;
    },
  })
  get lineWidth() {
    return this._lineWidth;
  }

  @property({ override: true, visible: false })
  get lineJoin() {
    return this._lineJoin;
  }

  @property({ override: true, visible: false })
  get lineCap() {
    return this._lineCap;
  }

  @property({ override: true, visible: false })
  get strokeColor(): Readonly<Color> {
    return this._strokeColor;
  }

  @property({ override: true, visible: false })
  get fillColor(): Readonly<Color> {
    return this._fillColor;
  }

  @property({ override: true, visible: false })
  get miterLimit() {
    return this._miterLimit;
  }

  set isRounded(value) {
    if (this._isRounded === value) {
      return;
    }

    this._isRounded = value;
    this.updateDraw();
  }

  set radius(value) {
    if (this._radius === value) {
      return;
    }

    this._radius = value;
    this.updateDraw();
  }

  set useFill(value) {
    if (this._useFill === value) {
      return;
    }

    this._useFill = value;
    this.updateDraw();
  }

  set color(value: Color) {
    if (this._color === value) {
      return;
    }

    this._color.set(value);
    this.updateDraw();
  }

  set lineWidth(value) {
    if (this._lineWidth === value) {
      return;
    }

    this._lineWidth = value;
    if (!this.impl) {
      return;
    }

    this.impl.lineWidth = value;
    this.updateDraw();
  }

  set lineJoin(value) {
    if (this._lineJoin === value) {
      return;
    }

    this._lineJoin = value;
    if (!this.impl) {
      return;
    }
    this.impl.lineJoin = value;
    this.updateDraw();
  }

  set lineCap(value) {
    if (this._lineCap === value) {
      return;
    }

    this._lineCap = value;
    if (!this.impl) {
      return;
    }
    this.impl.lineCap = value;
    this.updateDraw();
  }

  set miterLimit(value) {
    if (this._miterLimit === value) {
      return;
    }

    this._miterLimit = value;
    this.updateDraw();
  }

  onLoad() {
    super.onLoad();
    this._uiTransform = this.getComponent(UITransform);
  }

  onEnable() {
    super.onEnable();
    this.node.on(UITransform.EventType.SIZE_CHANGED, this.updateDraw, this);
    this.updateDraw();
  }

  onDisable() {
    super.onDisable();
    this.node.off(UITransform.EventType.SIZE_CHANGED, this.updateDraw, this);
  }

  update() {
    if (this._opacity !== this.node._uiProps.opacity) {
      this._opacity = this.node._uiProps.opacity;
      this.updateDraw();
    }
  }

  updateDraw() {
    if (!this._uiTransform) return;
    this.clear();
    const temp = this._color.clone();
    const alpha = clamp(Math.round(this.node._uiProps.opacity * this._color.a), 0, 255);
    this._strokeColor = this._fillColor = color(temp.r, temp.g, temp.b, alpha);
    const anchorX = this._uiTransform.anchorX;
    const anchorY = this._uiTransform.anchorY;
    const width = this._uiTransform.width;
    const height = this._uiTransform.height;
    if (this.isRounded)
      this.roundRect(-anchorX * width, -anchorY * height, width, height, this.radius);
    else this.rect(-anchorX * width, -anchorY * height, width, height);

    if (this.useFill) this.fill();
    else this.stroke();
    this._strokeColor = this._fillColor = temp;
  }
}
