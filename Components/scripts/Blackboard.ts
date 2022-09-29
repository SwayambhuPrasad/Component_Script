import { Director, director } from "cc";
import { SimpleEvent } from "./LiteEvent";

class Blackboard {
  private _data: Record<string, any> = {};

  private _changedEvent = new SimpleEvent<{ key: string; oldVal: any; newVal: any }>();

  constructor() {
    director.on(Director.EVENT_AFTER_SCENE_LAUNCH, () => {
      this._data = {};
    });
  }

  get changedEvent() {
    return this._changedEvent.expose();
  }

  get(key: string) {
    return this._data[key];
  }

  set(key: string, newVal: any) {
    if (newVal === this._data[key]) return;
    const oldVal = this._data[key];
    this._data[key] = newVal;
    this._changedEvent.trigger({ key, oldVal, newVal });
  }
}

export const blackboard = new Blackboard();
