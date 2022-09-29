import { Component, Director, director, Sprite, SpriteFrame, _decorator } from "cc";
import { AS } from "./ASComponent";
import { error } from "./Logger";

const { ccclass, property, requireComponent } = _decorator;

var gif: any;

@ccclass("GifPlayer")
@requireComponent(Sprite)
export class GifPlayer extends AS(Component) {
  @property _url = "";

  @property _playOnLoad = true;

  private _frames: any[] = [];

  private _frameIndex = 0;

  private _frameDelay = 0;

  private _isInQueue = false;

  private _isPlaying = false;

  private _width: number = 0;

  private _height: number = 0;

  private _sprite: Sprite | null = null;

  private _tempCtx: CanvasRenderingContext2D | null = null;

  private _tempCanvas: HTMLCanvasElement | null = null;

  private _gifCanvas: HTMLCanvasElement | null = null;

  private _gifCtx: CanvasRenderingContext2D | null = null;

  private _frameImageData: ImageData | null = null;

  @property get url() {
    return this._url;
  }

  @property get playOnLoad() {
    return this._playOnLoad;
  }

  get frameIndex() {
    return this._frameIndex;
  }

  set url(value) {
    if (this._url === value) return;
    this._url = value;
    this._loadGif();
  }

  set playOnLoad(value) {
    this._playOnLoad = value;
  }

  set frameIndex(value) {
    this._frameIndex = value;
  }

  play() {
    this._isPlaying = true;
    this._queueRenderFrame();
  }

  pause() {
    this._isPlaying = false;
  }

  awake() {
    this._sprite = this.getComponent(Sprite);
    if (!this._sprite) {
      error(`GifSprite requires a Sprite component`);
      return;
    }

    this._loadGif();
  }

  onLoad() {
    if (this._playOnLoad) {
      this.play();
    }
  }

  onEnable() {
    if (this._isPlaying) {
      this._queueRenderFrame();
    }
  }

  private async _loadGif() {
    if (!this._url) {
      error(`GifSprite requires a url`);
      return;
    }

    try {
      const response = await fetch(this._url);
      const arrayBuffer = await response.arrayBuffer();
      // @ts-ignore
      if (!gif) gif = (await import("./gif.js")).default as any;
      const gifParsed = gif.parseGIF(arrayBuffer);
      const frames = gif.decompressFrames(gifParsed, true);
      // gif patch canvas
      if (!this._tempCanvas || !this._tempCtx) {
        this._tempCanvas = document.createElement("canvas");
        this._tempCtx = this._tempCanvas.getContext("2d");
      }
      // full gif canvas
      if (!this._gifCanvas || !this._gifCtx) {
        this._gifCanvas = document.createElement("canvas");
        this._gifCtx = this._gifCanvas.getContext("2d");
      }

      if (!this._tempCtx || !this._gifCtx) {
        error("Failed to create canvas context");
        return;
      }

      this._width = this._gifCanvas.width = frames[0].dims.width;
      this._height = this._gifCanvas.height = frames[0].dims.height;

      this._frames = frames;

      // debug(`Loaded ${this._frames.length} frames`, this._frames);
    } catch (err) {
      error(`Error loading gif ${this._url}`, err);
    }
  }

  private async _queueRenderFrame() {
    if (!this.enabledInHierarchy || !this._frames || this._frames.length <= 0 || this._isInQueue)
      return;

    this._isInQueue = true;
    await Promise.all([
      new Promise<void>((resolve) => setTimeout(resolve, this._frameDelay)),
      new Promise<void>((resolve) =>
        director.once(Director.EVENT_BEFORE_DRAW, () => {
          this._renderFrame();
          resolve();
        }),
      ),
    ]);
    this._isInQueue = false;
    if (this._isPlaying) this._queueRenderFrame();
  }

  private _renderFrame() {
    const frame = this._frames[this._frameIndex];
    // debug(`Rendering frame ${this._frameIndex}`, frame);
    this._frameDelay = frame.delay;

    if (frame.disposalType === 2) {
      this._gifCtx!.clearRect(0, 0, this._width, this._height);
    }

    const dims = frame.dims;
    if (
      !this._frameImageData ||
      dims.width !== this._frameImageData.width ||
      dims.height !== this._frameImageData.height
    ) {
      this._tempCanvas!.width = dims.width;
      this._tempCanvas!.height = dims.height;
      this._frameImageData = this._tempCtx!.createImageData(dims.width, dims.height);
    }

    // set the patch data as an override
    this._frameImageData.data.set(frame.patch);

    // draw the patch back over the canvas
    this._tempCtx!.putImageData(this._frameImageData, 0, 0);
    this._gifCtx!.drawImage(this._tempCanvas!, dims.left, dims.top);

    this._sprite!.spriteFrame = SpriteFrame.createWithImage(this._gifCanvas!);
    this._frameIndex++;
    if (this._frameIndex >= this._frames.length) {
      this._frameIndex = 0;
    }
  }
}
