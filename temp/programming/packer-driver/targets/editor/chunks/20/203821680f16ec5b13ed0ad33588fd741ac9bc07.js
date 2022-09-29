System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, Director, director, Sprite, SpriteFrame, _decorator, AS, error, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, requireComponent, gif, GifPlayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      Director = _cc.Director;
      director = _cc.director;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "60d778GVAlBQaBD7fcsZfk9", "GifPlayer", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      _export("GifPlayer", GifPlayer = (_dec = ccclass("GifPlayer"), _dec2 = requireComponent(Sprite), _dec(_class = _dec2(_class = (_class2 = class GifPlayer extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_url", _descriptor, this);

          _initializerDefineProperty(this, "_playOnLoad", _descriptor2, this);

          this._frames = [];
          this._frameIndex = 0;
          this._frameDelay = 0;
          this._isInQueue = false;
          this._isPlaying = false;
          this._width = 0;
          this._height = 0;
          this._sprite = null;
          this._tempCtx = null;
          this._tempCanvas = null;
          this._gifCanvas = null;
          this._gifCtx = null;
          this._frameImageData = null;
        }

        get url() {
          return this._url;
        }

        get playOnLoad() {
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
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`GifSprite requires a Sprite component`);
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

        async _loadGif() {
          if (!this._url) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`GifSprite requires a url`);
            return;
          }

          try {
            const response = await fetch(this._url);
            const arrayBuffer = await response.arrayBuffer(); // @ts-ignore

            if (!gif) gif = (await _context.import("__unresolved_3")).default;
            const gifParsed = gif.parseGIF(arrayBuffer);
            const frames = gif.decompressFrames(gifParsed, true); // gif patch canvas

            if (!this._tempCanvas || !this._tempCtx) {
              this._tempCanvas = document.createElement("canvas");
              this._tempCtx = this._tempCanvas.getContext("2d");
            } // full gif canvas


            if (!this._gifCanvas || !this._gifCtx) {
              this._gifCanvas = document.createElement("canvas");
              this._gifCtx = this._gifCanvas.getContext("2d");
            }

            if (!this._tempCtx || !this._gifCtx) {
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)("Failed to create canvas context");
              return;
            }

            this._width = this._gifCanvas.width = frames[0].dims.width;
            this._height = this._gifCanvas.height = frames[0].dims.height;
            this._frames = frames; // debug(`Loaded ${this._frames.length} frames`, this._frames);
          } catch (err) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`Error loading gif ${this._url}`, err);
          }
        }

        async _queueRenderFrame() {
          if (!this.enabledInHierarchy || !this._frames || this._frames.length <= 0 || this._isInQueue) return;
          this._isInQueue = true;
          await Promise.all([new Promise(resolve => setTimeout(resolve, this._frameDelay)), new Promise(resolve => director.once(Director.EVENT_BEFORE_DRAW, () => {
            this._renderFrame();

            resolve();
          }))]);
          this._isInQueue = false;
          if (this._isPlaying) this._queueRenderFrame();
        }

        _renderFrame() {
          const frame = this._frames[this._frameIndex]; // debug(`Rendering frame ${this._frameIndex}`, frame);

          this._frameDelay = frame.delay;

          if (frame.disposalType === 2) {
            this._gifCtx.clearRect(0, 0, this._width, this._height);
          }

          const dims = frame.dims;

          if (!this._frameImageData || dims.width !== this._frameImageData.width || dims.height !== this._frameImageData.height) {
            this._tempCanvas.width = dims.width;
            this._tempCanvas.height = dims.height;
            this._frameImageData = this._tempCtx.createImageData(dims.width, dims.height);
          } // set the patch data as an override


          this._frameImageData.data.set(frame.patch); // draw the patch back over the canvas


          this._tempCtx.putImageData(this._frameImageData, 0, 0);

          this._gifCtx.drawImage(this._tempCanvas, dims.left, dims.top);

          this._sprite.spriteFrame = SpriteFrame.createWithImage(this._gifCanvas);
          this._frameIndex++;

          if (this._frameIndex >= this._frames.length) {
            this._frameIndex = 0;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_url", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_playOnLoad", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "url", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "url"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "playOnLoad", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "playOnLoad"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=203821680f16ec5b13ed0ad33588fd741ac9bc07.js.map