System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Camera, Component, director, Director, EventHandler, find, instantiate, RenderTexture, UITransform, view, _decorator, AS, error, networkReplicator, findParentCanvas, readPixels, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, CAMERA_NAME, Screenshot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetworkReplicator(extras) {
    _reporterNs.report("networkReplicator", "./NetworkReplicator", _context.meta, extras);
  }

  function _reportPossibleCrUseOffindParentCanvas(extras) {
    _reporterNs.report("findParentCanvas", "./Utils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfreadPixels(extras) {
    _reporterNs.report("readPixels", "./Utils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Camera = _cc.Camera;
      Component = _cc.Component;
      director = _cc.director;
      Director = _cc.Director;
      EventHandler = _cc.EventHandler;
      find = _cc.find;
      instantiate = _cc.instantiate;
      RenderTexture = _cc.RenderTexture;
      UITransform = _cc.UITransform;
      view = _cc.view;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      error = _unresolved_3.error;
    }, function (_unresolved_4) {
      networkReplicator = _unresolved_4.networkReplicator;
    }, function (_unresolved_5) {
      findParentCanvas = _unresolved_5.findParentCanvas;
      readPixels = _unresolved_5.readPixels;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce2e1fMP49MxId1GKkvJZKe", "Screenshot", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      CAMERA_NAME = "_screenShotCamera";

      _export("Screenshot", Screenshot = (_dec = ccclass("Screenshot"), _dec2 = property({
        type: [EventHandler],
        tooltip: "The event handler to be trggered before capture",
        displayOrder: 30
      }), _dec3 = property({
        type: [EventHandler],
        tooltip: "The event handler to be trggered after capture",
        displayOrder: 31
      }), _dec4 = property({
        type: UITransform,
        tooltip: "The area to be captured. Use full screen if width or height is zero."
      }), _dec(_class = (_class2 = (_class3 = class Screenshot extends (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(Component) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "beforeCaptureEvents", _descriptor, this);

          _initializerDefineProperty(this, "afterCaptureEvents", _descriptor2, this);

          _initializerDefineProperty(this, "_targetRect", _descriptor3, this);

          this._parentCanvas = null;
          this._mainCamera = null;
          this._camera = null;
          this._texture = null;
        }

        get targetRect() {
          return this._targetRect;
        }

        set targetRect(value) {
          this._targetRect = value;
        }

        onLoad() {
          // Get the current canvas.
          this._parentCanvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(this.node);

          if (this._parentCanvas == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Screenshot initialization failed. Could not find any canvas in the scene.");
            return;
          }

          let cameraNode = find(CAMERA_NAME, this._parentCanvas.node);

          if (!cameraNode) {
            // Create a copy of the existing camera node.
            if (this._parentCanvas.cameraComponent == null) {
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)("The canvas does not have a valid camera attached.");
              return;
            }

            cameraNode = instantiate(this._parentCanvas.cameraComponent.node);
            cameraNode.name = CAMERA_NAME;

            this._parentCanvas.node.addChild(cameraNode);
          }

          this._camera = cameraNode.getComponent(Camera);

          if (this._camera == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Screenshot initialization failed. Camera could not be cloned.");
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
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).screenShotRequested.on(this._onScreenshotRequested, this);
        }

        onDisable() {
          (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).screenShotRequested.off(this._onScreenshotRequested, this);
        }

        setScreenshotCamera() {
          if (this._parentCanvas == null || this._camera == null) return;
          this._camera.enabled = true;
          this._mainCamera = this._parentCanvas.cameraComponent;
          this._parentCanvas.cameraComponent = this._camera;
        }

        unsetScreenshotCamera() {
          if (this._parentCanvas == null || this._camera == null) return;
          this._camera.enabled = false;
          this._parentCanvas.cameraComponent = this._mainCamera;
        }

        getImageURL(fullQuality = true) {
          var _this$_targetRect$get, _this$_targetRect;

          if (this._camera == null || this._texture == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("The screenshot camera or render texture was not initialized correctly!");
            return "";
          } // let x, y, width, height;


          const {
            x,
            y,
            width,
            height
          } = (_this$_targetRect$get = (_this$_targetRect = this._targetRect) == null ? void 0 : _this$_targetRect.getBoundingBoxToWorld()) != null ? _this$_targetRect$get : {
            x: 0,
            y: 0,
            width: this._texture.width,
            height: this._texture.height
          };
          const data = (_crd && readPixels === void 0 ? (_reportPossibleCrUseOfreadPixels({
            error: Error()
          }), readPixels) : readPixels).call(this._texture, x, y, width, height);

          if (data == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Unabel to read pixels from the render texture.");
            return "";
          } // Converting to base64 data


          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          if (ctx == null) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("Unable to find '2d' context on the newly created canvas.");
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

        _onScreenshotRequested() {
          this.setScreenshotCamera();
          EventHandler.emitEvents(this.beforeCaptureEvents, this);
          this.node.emit(Screenshot.EventType.BEFORE_CAPTURE, this);
          director.once(Director.EVENT_AFTER_DRAW, () => {
            (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
              error: Error()
            }), networkReplicator) : networkReplicator).sendScreenShot(this.getImageURL(false));
            this.unsetScreenshotCamera();
            EventHandler.emitEvents(this.afterCaptureEvents, this);
            this.node.emit(Screenshot.EventType.AFTER_CAPTURE, this);
          });
        }

      }, _class3.EventType = {
        BEFORE_CAPTURE: "before-capture",
        AFTER_CAPTURE: "after-capture"
      }, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "beforeCaptureEvents", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "afterCaptureEvents", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Array();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_targetRect", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "targetRect", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "targetRect"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cfce1f7a31a79e14c72de478a0de6faa852c3d84.js.map