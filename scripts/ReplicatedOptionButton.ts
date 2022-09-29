import { Component, EventHandler, _decorator } from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { IReplicatedEvent, networkReplicator } from "./NetworkReplicator";
import { OptionButton } from "./OptionButton";

const { ccclass, disallowMultiple, requireComponent } = _decorator;

/**
 * Class to automate replication of option-update events for the option button
 * attached to the same node using the `NetworkReplicator`.
 */
@ccclass("ReplicatedOptionButton")
@requireComponent(OptionButton)
@disallowMultiple
export class ReplicatedOptionButton extends AS(Component) implements IReplicatedEvent {
  private _replicationIndex: string;

  private _optionButton: OptionButton | null = null;

  constructor() {
    super();
    this._replicationIndex = networkReplicator.registerEvent(this);
  }

  awake() {
    this._optionButton = this.getComponent(OptionButton);
    if (this._optionButton == null) {
      error("The replicated option button must be attached to a node with option button.");
      return;
    }
    this.node.on(OptionButton.EventType.OPTION_CHANGED, this._onOptionChanged, this);
  }

  onActivityEvent(name: string, data?: number): void {
    if (this._optionButton == null || name !== OptionButton.EventType.OPTION_CHANGED) return;
    if (data == null) {
      error("The data recieved on option-changed event cannot be null.");
      return;
    }
    this._optionButton.selectedIndex = data;
    EventHandler.emitEvents(this._optionButton.optionChangedEvents, this._optionButton);
    this.node.emit(OptionButton.EventType.OPTION_CHANGED, this._optionButton, true);
  }

  getStateData() {
    return this._optionButton?.selectedIndex;
  }

  updateStateData(data: number) {
    if (this._optionButton == null) return;
    this._optionButton.selectedIndex = data;
    EventHandler.emitEvents(this._optionButton.optionChangedEvents, this._optionButton);
    this.node.emit(OptionButton.EventType.OPTION_CHANGED, this._optionButton, true);
  }

  private _onOptionChanged(button: OptionButton, isReplicated?: boolean) {
    // The button is valid only if button triggered.
    if (isReplicated) return;
    networkReplicator.sendEvent({
      id: this._replicationIndex,
      name: OptionButton.EventType.OPTION_CHANGED,
      data: button.selectedIndex,
    });
  }
}
