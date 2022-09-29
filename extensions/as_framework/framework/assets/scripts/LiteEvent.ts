export interface ISimpleEvent<T> {
  /**
   * Register a callback to this event.
   * @param handler The callback that will be invoked when the event is
   * dispatched.
   */
  on(handler: { (data?: T): void }, thisArg?: unknown): void;
  /**
   * Removes the callback previously registered.
   * @param handler The callback to remove.
   */
  off(handler: { (data?: T): void }, thisArg?: unknown): void;
}

export class SimpleEvent<T> implements ISimpleEvent<T> {
  private _handlers = new Set<{ (data?: T): void } | { (data?: T): Promise<void> }>();

  on(handler: (data?: T) => void, thisArg?: unknown): void {
    if (thisArg) handler = handler.bind(thisArg);
    this._handlers.add(handler);
  }

  off(handler: (data?: T) => void, thisArg?: unknown): void {
    if (thisArg) handler = handler.bind(thisArg);
    this._handlers.delete(handler);
  }

  trigger(data?: T) {
    return Promise.all(Array.from(this._handlers).map((h) => h(data)));
  }

  expose(): ISimpleEvent<T> {
    return this;
  }

  clear() {
    this._handlers.clear();
  }
}
