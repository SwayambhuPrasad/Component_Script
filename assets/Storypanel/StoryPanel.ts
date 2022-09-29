import { Button, Component, instantiate, Node, UIOpacity, Vec3, _decorator } from "cc";
import { AS, UIDrag, UIDrop, UIView } from "db://as_framework/scripts";
const { ccclass, property } = _decorator;

@ccclass("StoryPanel")
export class StoryPanel extends AS(Component) {
  // @property({ type: SpriteFrame }) panelSlots: SpriteFrame[] = [];
  @property({ type: Node }) panel: Node = null;

  @property({ type: UIView }) popup: UIView | null = null;

  @property({ type: Node }) DragContainer: Node = null;

  @property numberOfElementPerpage: number = 4;

  private _dragNodes = [];
  private _pageNumber = 0;
  private _draggables: UIDrag[] = [];
  private _panelPosition = new Vec3(0, 0, 0);

  awake() {
    this._arrangeDraggable();
    this._addComponent();
  }

  _addComponent() {
    this.panel.addComponent(Button);
    this.panel.on(Button.EventType.CLICK, this._onButtonClick, this);
    const slot = this.panel.getComponentsInChildren(UIDrop);
    slot.forEach((s) => {
      s.node.on(UIDrop.EventType.DRAG_ADDED, this._DragEnd.bind(this));
      s.node.on(UIDrop.EventType.DRAG_REMOVED, this._removed.bind(this));
    });

    for (let i = 0; i < this.DragContainer.children.length; i++) {
      const drag = this.DragContainer.children[i].addComponent(UIDrag);
      this.DragContainer.children[i].addComponent(UIOpacity);
      // drag.node.on(UIDrag.EventType.DRAG_DID_END, () => {
      //   this._DragEnd(drag);
      // });

      this._dragNodes.push(this.DragContainer.children[i]);
      this._draggables.push(drag);
    }

    let Arrows = this.popup.node.getComponentsInChildren(Button);
    Arrows.forEach((Arrow, i) => {
      Arrow.node.on(
        Button.EventType.CLICK,
        () => {
          this._arrowNavigator(i);
        },
        this,
      );
    });

    this._dragNodes.forEach((n) => (n.active = false));

    this.popup.node.on(UIView.EventType.SHOW_COMPLETE, () => {
      this._dragNodes.forEach((n) => (n.active = true));
      this._pageNavigation(0);
    });
    this.popup.node.on(UIView.EventType.ABOUT_TO_HIDE, this._onpopuphide, this);
  }
  _DragEnd(_slot, drag) {
    const slot = drag.validUIDrop;
    if (slot == null) return;
    slot.node.destroyAllChildren();
    const dragCopy = instantiate(slot.dragsInside[0].node);
    dragCopy.getComponent(UIDrag).destroy();
    dragCopy.parent = slot.node;
    dragCopy.name = slot.node.name;
    dragCopy.worldPosition = slot.node.worldPosition;
    console.log(slot.replacedNode, slot.dragsInside[0], slot);
    //drag.node.active = false;
    drag.node.getComponent(UIOpacity).opacity = 0;
    drag.interactable = false;
    // if (slot.replacedNode.length != 0) {
    //   //slot.replacedNode[0].node.active = true;
    //   slot.replacedNode[0].node.getComponent(UIOpacity).opacity = 255;
    //   slot.replacedNode[0].interactable = true;
    // }

    //drag.node.getComponent(UIDrag).reset();
    //drag.interactable = false;
  }
  _removed(slot, removed) {
    //  console.log(removed);
    removed.node.getComponent(UIOpacity).opacity = 255;
    removed.interactable = true;
  }

  _arrangeDraggable() {
    let offsetx = this.panel.position.x - this.popup.node.position.x;
    let offsety = this.panel.position.y - this.popup.node.position.y;
    console.log("offset", offsetx, offsety);
    let gridPositions = [
      [
        [-150 - offsetx, 80 - offsety],
        [150 - offsetx, 80 - offsety],
        [-150 - offsetx, -120 - offsety],
        [150 - offsetx, -120 - offsety],
      ],
      [
        [-150 - offsetx, 0 - offsety],
        [150 - offsetx, 0 - offsety],
      ],
      [[0 - offsetx, 0 - offsety]],
    ];
    let gridSelector;
    if (this.numberOfElementPerpage == 2) gridSelector = 1;
    else if (this.numberOfElementPerpage == 4) gridSelector = 0;
    else if (this.numberOfElementPerpage == 1) gridSelector = 2;

    for (let i = 0; i < this.DragContainer.children.length; i++) {
      this.DragContainer.children[i].position = new Vec3(
        gridPositions[gridSelector][i % this.numberOfElementPerpage][0],
        gridPositions[gridSelector][i % this.numberOfElementPerpage][1],
        0,
      );
    }
  }

  async close() {
    await this.popup.hide();
    this.panel.setPosition(this._panelPosition);
    this._onpopuphide();
  }
  _onButtonClick() {
    this._panelPosition = this.panel.position.clone();
    this.panel.position = new Vec3(0, 300, 0);
    this.popup.show();
  }

  _onpopuphide() {
    this._dragNodes.forEach((n) => (n.active = false));
  }

  _pageNavigation(pageNumber) {
    let pageGrouping = [[]];
    let j = 0;
    for (let i = 0; i < this._dragNodes.length; i++) {
      if (i % this.numberOfElementPerpage == 0 && i != 0) {
        j++;
        pageGrouping[j] = [];
      }
      pageGrouping[j].push(this._dragNodes[i]);
    }

    for (let i = 0; i < pageGrouping.length; i++)
      for (let j = 0; j < pageGrouping[i].length; j++) {
        if (i == pageNumber) {
          pageGrouping[i][j].active = true;
        } else {
          pageGrouping[i][j].active = false;
        }
      }
  }

  _arrowNavigator(direction) {
    if (
      direction == 1 &&
      this._dragNodes.length != (this._pageNumber + 1) * this.numberOfElementPerpage
    )
      this._pageNumber++;
    else if (direction == 0 && this._pageNumber != 0) this._pageNumber--;

    this._pageNavigation(this._pageNumber);
  }
}
