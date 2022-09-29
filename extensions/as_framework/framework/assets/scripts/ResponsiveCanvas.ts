import { Component, ResolutionPolicy, screen, view, _decorator } from "cc";
import { AS } from "./ASComponent";

const { ccclass, disallowMultiple } = _decorator;

/**
 * Make the canvas responsive for any aspect ratio.
 */
@ccclass("ResponsiveCanvas")
@disallowMultiple
export class ResponsiveCanvas extends AS(Component) {
  makeResponsive() {
    if (!this.enabledInHierarchy) return;
    const deviceResolution = screen.windowSize;
    const designResolution = view.getDesignResolutionSize();

    // calculte design ratio
    const desiredRatio = designResolution.width / designResolution.height;
    // calculte device ratio
    const deviceRatio = deviceResolution.width / deviceResolution.height;

    if (deviceRatio >= desiredRatio) {
      view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
    } else if (deviceRatio < desiredRatio) {
      view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
    }
  }

  awake() {
    view.setResizeCallback(this.makeResponsive);
    this.makeResponsive();
  }
}
