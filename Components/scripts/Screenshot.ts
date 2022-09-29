import {
  Camera,
  Canvas,
  Component,
  director,
  Director,
  EventHandler,
  find,
  instantiate,
  RenderTexture,
  UITransform,
  view,
  _decorator,
} from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";
import { networkReplicator } from "./NetworkReplicator";
import { findParentCanvas, readPixels } from "./Utils";

const { ccclass, property } = _decorator;

const CAMERA_NAME = "_screenShotCamera";

@ccclass("Screenshot")
export class Screenshot extends AS(Component) {
  static EventType = {
    BEFORE_CAPTURE: "before-capture",
    AFTER_CAPTURE: "after-capture",
  };

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be trggered before capture",
    displayOrder: 30,
  })
  beforeCaptureEvents = new Array<EventHandler>();

  @property({
    type: [EventHandler],
    tooltip: "The event handler to be trggered after capture",
    displayOrder: 31,
  })
  afterCaptureEvents = new Array<EventHandler>();

  @property _targetRect: UITransform | null = null;

  private _parentCanvas: Canvas | null = null;

  private _mainCamera: Camera | null = null;

  private _camera: Camera | null = null;

  private _texture: RenderTexture | null = null;

  @property({
    type: UITransform,
    tooltip: "The area to be captured. Use full screen if width or height is zero.",
  })
  get targetRect() {
    return this._targetRect;
  }

  set targetRect(value) {
    this._targetRect = value;
  }

  onLoad() {
    // Get the current canvas.
    this._parentCanvas = findParentCanvas(this.node);
    if (this._parentCanvas == null) {
      error("Screenshot initialization failed. Could not find any canvas in the scene.");
      return;
    }
    let cameraNode = find(CAMERA_NAME, this._parentCanvas.node);
    if (!cameraNode) {
      // Create a copy of the existing camera node.
      if (this._parentCanvas.cameraComponent == null) {
        error("The canvas does not have a valid camera attached.");
        return;
      }
      cameraNode = instantiate(this._parentCanvas.cameraComponent.node);
      cameraNode.name = CAMERA_NAME;
      this._parentCanvas.node.addChild(cameraNode);
    }
    this._camera = cameraNode.getComponent(Camera);
    if (this._camera == null) {
      error("Screenshot initialization failed. Camera could not be cloned.");
      return;
    }
    this._camera.enabled = false;
    this._texture = this._camera.targetTexture;

    if (!this._texture) {
      // Create a new RenderTexture and set this new RenderTexture to the
      // camera's targetTexture so that the camera content will be
      // rendered to this new RenderTexture.
      this._texture = new RenderTexture();
      const canvasSize = view.getDesignResolutionSize();
      this._texture.initialize(canvasSize);
      this._camera.targetTexture = this._texture;
    }
  }

  onEnable() {
    networkReplicator.screenShotRequested.on(this._onScreenshotRequested, this);
  }

  onDisable() {
    networkReplicator.screenShotRequested.off(this._onScreenshotRequested, this);
  }

  protected setScreenshotCamera() {
    if (this._parentCanvas == null || this._camera == null) return;
    this._camera.enabled = true;
    this._mainCamera = this._parentCanvas.cameraComponent;
    this._parentCanvas.cameraComponent = this._camera;
  }

  protected unsetScreenshotCamera() {
    if (this._parentCanvas == null || this._camera == null) return;
    this._camera.enabled = false;
    this._parentCanvas.cameraComponent = this._mainCamera;
  }

  protected getImageURL(fullQuality = true) {
    if (this._camera == null || this._texture == null) {
      error("The screenshot camera or render texture was not initialized correctly!");
      return "";
    }
    // let x, y, width, height;
    const { x, y, width, height } = this._targetRect?.getBoundingBoxToWorld() ?? {
      x: 0,
      y: 0,
      width: this._texture.width,
      height: this._texture.height,
    };

    const data = readPixels.call(this._texture, x, y, width, height);
    if (data == null) {
      error("Unabel to read pixels from the render texture.");
      return "";
    }
    // Converting to base64 data
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (ctx == null) {
      error("Unable to find '2d' context on the newly created canvas.");
      return "";
    }
    canvas.width = width;
    canvas.height = height;
    const rowBytes = width * 4;
    for (let row = 0; row < height; row++) {
      const srow = height - 1 - row;
      const imageData = ctx.createImageData(width, 1);
      const start = srow * width * 4;
      for (let i = 0; i < rowBytes; i++) {
        imageData.data[i] = data[start + i];
      }
      ctx.putImageData(imageData, 0, row);
    }

    return canvas.toDataURL(`image/${fullQuality ? "png" : "jpeg"}`, fullQuality ? 1.0 : 0.6);
  }

  private _onScreenshotRequested() {
    this.setScreenshotCamera();
    EventHandler.emitEvents(this.beforeCaptureEvents, this);
    this.node.emit(Screenshot.EventType.BEFORE_CAPTURE, this);
    director.once(Director.EVENT_AFTER_DRAW, () => {
      networkReplicator.sendScreenShot(this.getImageURL(false));
      this.unsetScreenshotCamera();
      EventHandler.emitEvents(this.afterCaptureEvents, this);
      this.node.emit(Screenshot.EventType.AFTER_CAPTURE, this);
    });
  }
}
