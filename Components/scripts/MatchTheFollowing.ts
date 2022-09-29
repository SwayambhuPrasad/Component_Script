import { Component, Graphics, Node, _decorator } from "cc";
import { error, warn } from "./Logger";
import { UIDrag } from "./UIDrag";
import { UIDrop } from "./UIDrop";
const { ccclass, property, requireComponent } = _decorator;

// enum MatchType {
//   ONE_TO_ONE,
//   ONE_TO_MANY,
//   MANY_TO_ONE,
//   MANY_TO_MANY,
// }

@ccclass("MatchTheFollowing")
@requireComponent(Graphics)
export class MatchTheFollowing extends Component {
  @property(UIDrag) lineDragHandles: UIDrag[] = [];

  @property(UIDrop) dropSlots: UIDrop[] = [];

  @property
  private _gfx: Graphics | null = null;

  private _tempGfx: Graphics | null = null;

  onLoad() {
    this._gfx = this.getComponent(Graphics);

    if (this._gfx === null) {
      error("MatchTheFollowing: Graphics component is null.");
      return;
    }

    if (this.lineDragHandles.length !== this.dropSlots.length) {
      error("MatchTheFollowing: The drag handles count is not same as the slots count.");
      return;
    }

    this.dropSlots.forEach((drop) => (drop.behaviour = UIDrop.DropBehaviour.ALLOW_SINGLE));

    this.lineDragHandles.forEach((drag) => {
      drag.node.on(UIDrag.EventType.DRAG_MOVE, this._onDragMove, this);
      drag.node.on(UIDrag.EventType.DRAG_DID_END, this._updateDraw, this);
    });

    const temp = new Node("TempDraw");
    this.node.addChild(temp);
    temp.layer = this.node.layer;
    this._tempGfx = temp.addComponent(Graphics);
    this._tempGfx.lineCap = this._gfx.lineCap;
    this._tempGfx.lineJoin = this._gfx.lineJoin;
    this._tempGfx.lineWidth = this._gfx.lineWidth;
    this._tempGfx.strokeColor = this._gfx.strokeColor;
  }

  checkPairs() {
    if (this.lineDragHandles.length !== this.dropSlots.length) {
      warn("The drag handles count is not same as the slots count.");
      return false;
    }

    for (let index = 0; index < this.lineDragHandles.length; index++) {
      const drag = this.lineDragHandles[index];
      if (drag.validUIDrop !== this.dropSlots[index]) return false;
    }

    return true;
  }

  reset() {
    this.lineDragHandles.forEach((drag) => drag.reset());
    this._gfx?.clear();
    this._tempGfx?.clear();
  }

  private _updateDraw() {
    this._gfx!.clear();
    this._tempGfx!.clear();
    this.lineDragHandles
      .filter((drag) => drag.validUIDrop)
      .forEach((drag) => {
        const xForm = this.node._uiProps.uiTransformComp!;
        const localStart = xForm.convertToNodeSpaceAR(drag.resetScreenPoint);
        const localEnd = xForm.convertToNodeSpaceAR(drag.targetPosition);

        this._gfx!.moveTo(localStart.x, localStart.y);
        this._gfx!.lineTo(localEnd.x, localEnd.y);
        this._gfx!.stroke();
      });
  }

  private _onDragMove(drag: UIDrag) {
    const xForm = this.node._uiProps.uiTransformComp!;
    const localStart = xForm.convertToNodeSpaceAR(drag.resetScreenPoint);
    const localEnd = xForm.convertToNodeSpaceAR(drag.targetPosition);

    this._updateDraw();

    this._tempGfx!.clear();
    this._tempGfx!.moveTo(localStart.x, localStart.y);
    this._tempGfx!.lineTo(localEnd.x, localEnd.y);
    this._tempGfx!.stroke();
  }
}
