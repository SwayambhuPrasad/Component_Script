import { Button, Component, EventHandler, EventTouch, SystemEvent, Touch, _decorator } from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { IReplicatedEvent, networkReplicator } from "./NetworkReplicator";

const { ccclass, disallowMultiple, requireComponent } = _decorator;

interface EventTouchLike {
  touches: Touch[];
  bubbles: boolean;
  eventType: SystemEvent.EventType;
  allTouches?: Touch[];
}

const IS_REPLICATED = "IS_REPLICATED";

/**
 * Class to automate replication of click events for the button attached to
 * the same node using the `NetworkReplicator`.
 */
@ccclass("ReplicatedButton")
@requireComponent(Button)
@disallowMultiple
export class ReplicatedButton extends AS(Component) implements IReplicatedEvent {
  private _replicationIndex: string;

  private _button: Button | null = null;

  constructor() {
    super();
    this._replicationIndex = networkReplicator.registerEvent(this);
  }

  awake() {
    this._button = this.getComponent(Button);
    if (this._button == null) {
      error("The replicated button must be attached to a node with button component.");
      return;
    }
    const clickEvent = new EventHandler();
    clickEvent.target = this.node;
    clickEvent.component = "ReplicatedButton";
    clickEvent.handler = "_onClick";
    clickEvent.customEventData = IS_REPLICATED;
    this._button.clickEvents.push(clickEvent);
  }

  onActivityEvent(name: string, data: EventTouchLike): void {
    if (this._button == null) return;
    if (name === Button.EventType.CLICK) {
      const eventData = new EventTouch(data.touches, data.bubbles, data.eventType, data.allTouches);
      eventData.target = eventData.currentTarget = this.node;
      EventHandler.emitEvents(
        this._button.clickEvents.filter((event) => event.customEventData !== IS_REPLICATED),
        eventData,
      );
      this.node.emit(Button.EventType.CLICK, this._button, true);
    }
  }

  private _onClick(event: EventTouch, customEventData?: string) {
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: Button.EventType.CLICK,
      data: <EventTouchLike>{
        touches: event.getTouches(),
        bubbles: event.bubbles,
        eventType: event.type,
        allTouches: event.getAllTouches(),
      },
    });
  }
}
