import { Component, Constructor, Director, director } from "cc";
import { EDITOR, TEST } from "cc/env";

type ComponentConstructor = Constructor<Component>;

export function AS<TBase extends ComponentConstructor>(base: TBase) {
  class WrappedComponent extends base {
    private _isAwake = false;

    constructor(..._args: any[]) {
      super();
      // @ts-expect-error
      if ((EDITOR || TEST) && !base._executeInEditMode) return;
      director.once(Director.EVENT_AFTER_SCENE_LAUNCH, () => {
        if (this.awake && !this._isAwake) {
          this.awake();
          this._isAwake = true;
        }
      });
    }

    protected get _isAwakeCalled() {
      return this._isAwake;
    }

    protected get _isAnimating() {
      //@ts-expect-error
      return this.node._isAnimating;
    }

    protected set _isAnimating(value) {
      //@ts-expect-error
      this.node._isAnimating = value;
    }

    __preload() {
      if (super.__preload) super.__preload();
      if (this.awake && !this._isAwake) {
        this.awake();
        this._isAwake = true;
      }
    }

    /**
     * This method is called at scene load regardless of active
     * state.
     */
    awake?(): void;
  }

  return WrappedComponent;
}
