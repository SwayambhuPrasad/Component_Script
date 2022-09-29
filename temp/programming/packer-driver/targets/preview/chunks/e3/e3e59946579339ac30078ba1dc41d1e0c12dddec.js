System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Director, director, EventHandler, WebView, _decorator, EDITOR, AS, debug, error, info, networkReplicator, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _ref, _class3, _crd, ccclass, property, GGB_EVENT, APPLET_LOADED, GGB_EVENT_BATCH_SIZE, GGB_EVENT_BATCH_FLUSH_TIMEOUT, GGB_TEMPLATE_URL, GGBEventType, GeogebraView;

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAS(extras) {
    _reporterNs.report("AS", "./ASComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdebug(extras) {
    _reporterNs.report("debug", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinfo(extras) {
    _reporterNs.report("info", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIReplicatedEvent(extras) {
    _reporterNs.report("IReplicatedEvent", "./NetworkReplicator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetworkReplicator(extras) {
    _reporterNs.report("networkReplicator", "./NetworkReplicator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Director = _cc.Director;
      director = _cc.director;
      EventHandler = _cc.EventHandler;
      WebView = _cc.WebView;
      _decorator = _cc._decorator;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      AS = _unresolved_2.AS;
    }, function (_unresolved_3) {
      debug = _unresolved_3.debug;
      error = _unresolved_3.error;
      info = _unresolved_3.info;
    }, function (_unresolved_4) {
      networkReplicator = _unresolved_4.networkReplicator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57f66xKVwZNQ5qtpbjgIbHV", "GeogebraView", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      GGB_EVENT = "ggbEvent";
      APPLET_LOADED = "appletLoaded";
      GGB_EVENT_BATCH_SIZE = 50;
      GGB_EVENT_BATCH_FLUSH_TIMEOUT = 250;
      GGB_TEMPLATE_URL = "https://s3-whjr-prod-cocos-applet.whjr.online/Utils/ggb-frame-template/index.html";

      (function (GGBEventType) {
        GGBEventType["UPDATE_STYLE"] = "updateStyle";
        GGBEventType["SET_MODE"] = "setMode";
        GGBEventType["DESELECT"] = "deselect";
        GGBEventType["SELECT"] = "select";
        GGBEventType["MOUSE_DOWN"] = "mouseDown";
        GGBEventType["ADD_POLYGON"] = "addPolygon";
        GGBEventType["ADD_POLYGON_COMPLETE"] = "addPolygonComplete";
        GGBEventType["VIEW_CHANGED2D"] = "viewChanged2D";
        GGBEventType["DRAG_END"] = "dragEnd";
        GGBEventType["SHOW_STYLE_BAR"] = "showStyleBar";
        GGBEventType["UPDATE"] = "update";
        GGBEventType["ADD"] = "add";
        GGBEventType["REMOVE"] = "remove";
      })(GGBEventType || (GGBEventType = {}));

      _export("GeogebraView", GeogebraView = (_dec = ccclass("GeogebraView"), _dec2 = property({
        override: true,
        visible: false
      }), _dec(_class = (_class2 = (_class3 = class GeogebraView extends (_ref = (_crd && AS === void 0 ? (_reportPossibleCrUseOfAS({
        error: Error()
      }), AS) : AS)(WebView)) {
        constructor() {
          super();

          _initializerDefineProperty(this, "_materialId", _descriptor, this);

          _initializerDefineProperty(this, "_width", _descriptor2, this);

          _initializerDefineProperty(this, "_height", _descriptor3, this);

          this._ggbApp = null;
          this._ggbApi = null;
          this._replicationId = void 0;
          this._ggbEventQueue = [];
          this._timeoutHandle = undefined;
          this._isUpdatingState = false;
          this._replicationId = (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
            error: Error()
          }), networkReplicator) : networkReplicator).registerEvent(this);
        }

        get materialId() {
          return this._materialId;
        }

        get width() {
          return this._width;
        }

        get height() {
          return this._height;
        }

        get url() {
          return super._url;
        }

        set materialId(value) {
          if (this._materialId === value) return;
          this._materialId = value;

          this._updateUrl();
        }

        set width(value) {
          if (this._width === value) return;
          this._width = value;

          this._updateUrl();
        }

        set height(value) {
          if (this._height === value) return;
          this._height = value;

          this._updateUrl();
        }

        awake() {
          if (EDITOR) return;

          if (!this.nativeWebView || !this.nativeWebView.contentWindow) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("GeogebraView: the frame is null");
            return;
          }

          this._updateUrl();

          var frame = this.nativeWebView.contentWindow;
          this.nativeWebView.addEventListener("loaderror", ev => {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)("GeogebraView: " + this.materialId + " failed to load");
          });
          this.nativeWebView.addEventListener("load", () => {
            (_crd && debug === void 0 ? (_reportPossibleCrUseOfdebug({
              error: Error()
            }), debug) : debug)("GeogebraView: " + this.materialId + " loaded");
            frame.addEventListener("message", event => {
              (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                error: Error()
              }), info) : info)("GeogebraView: " + this.materialId + " received message:", event.data);

              if (event.data.type === APPLET_LOADED) {
                this._ggbApp = frame.ggbApp;
                this._ggbApi = frame.ggbApi;

                this._onAppletLoaded();
              }
            });
          });
        }

        getStateData() {
          var _this$_ggbApi;

          return (_this$_ggbApi = this._ggbApi) == null ? void 0 : _this$_ggbApi.getXML();
        }

        updateStateData(xml) {
          if (!this._ggbApi) {
            this.node.once(GeogebraView.EventType.GGB_APPLET_LOADED, () => {
              this._evalXML(xml);
            });
          } else this._evalXML(xml);
        }

        onActivityEvent(name, data) {
          if (name === GGB_EVENT) {
            var {
              eventQueue,
              xml
            } = data;

            this._evalXML(xml);
          }
        }

        _updateUrl() {
          var query = "?materialId=" + this.materialId + "&width=" + this.width + "&height=" + this.height;
          this._url = GGB_TEMPLATE_URL + query;
          (_crd && debug === void 0 ? (_reportPossibleCrUseOfdebug({
            error: Error()
          }), debug) : debug)("GeogebraView: " + this.materialId + " url:", this.url);
        }

        _onAppletLoaded() {
          this._ggbApi.registerUpdateListener(this._updateListener.bind(this));

          this._ggbApi.registerRemoveListener(this._removeListener.bind(this));

          this._ggbApi.registerAddListener(this._addListener.bind(this)); // this._ggbApi.registerClientListener(this._clientListener.bind(this));


          EventHandler.emitEvents(this.webviewEvents, this, GeogebraView.EventType.GGB_APPLET_LOADED);
          this.node.emit(GeogebraView.EventType.GGB_APPLET_LOADED, this);
        }

        _evalXML(xml) {
          this._isUpdatingState = true;

          this._ggbApi.setXML(xml);

          this._ggbApi.evalCommand("UpdateConstruction()");

          director.once(Director.EVENT_BEFORE_UPDATE, () => {
            this._isUpdatingState = false;
          });
        }

        _queueGGBEvent(ggbEventType) {
          if (this._isUpdatingState) return;

          this._ggbEventQueue.push(ggbEventType);

          if (!this._timeoutHandle) {
            this._timeoutHandle = setTimeout(this._flushGGBEventQueue.bind(this), GGB_EVENT_BATCH_FLUSH_TIMEOUT);
          }

          if (this._ggbEventQueue.length >= GGB_EVENT_BATCH_SIZE) {
            this._flushGGBEventQueue();
          }
        }

        _flushGGBEventQueue() {
          if (this._ggbEventQueue.length > 0) {
            (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
              error: Error()
            }), networkReplicator) : networkReplicator).sendEvent({
              id: this._replicationId,
              name: GGB_EVENT,
              data: {
                eventQueue: this._ggbEventQueue,
                xml: this._ggbApi.getXML()
              }
            });
          }

          clearTimeout(this._timeoutHandle);
          this._ggbEventQueue = [];
          this._timeoutHandle = undefined;
        }

        _clientListener(event) {
          switch (event[0]) {
            case GGBEventType.UPDATE_STYLE:
              {
                var label = event[1];
                (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                  error: Error()
                }), info) : info)("GeogebraView: " + this.materialId + " received updateStyle:", label);

                var xml = this._ggbApi.getXML(label);

                this._queueGGBEvent(GGBEventType.UPDATE_STYLE);

                break;
              }

            case GGBEventType.SET_MODE:
              {
                (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                  error: Error()
                }), info) : info)("GeogebraView: " + this.materialId + " received setMode:", event[2]); // this._sendGGBEvent(GGBEventType.SET_MODE, { label, xml });

                break;
              }

            case GGBEventType.DESELECT:
              {
                (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                  error: Error()
                }), info) : info)("GeogebraView: " + this.materialId + " received deselect", event); // unregisterListeners();
                // xapi2.evalCommand("SelectObjects[]");
                // registerListeners();

                break;
              }

            case GGBEventType.SELECT:
              (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                error: Error()
              }), info) : info)("GeogebraView: " + this.materialId + " received select", event); //unregisterListeners();
              //xapi2.evalCommand("SelectObjects[" + event[1] + "]");
              //registerListeners();

              break;

            case GGBEventType.MOUSE_DOWN:
              (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                error: Error()
              }), info) : info)("GeogebraView: " + this.materialId + " received mouseDown", event);
              var hits = "";

              for (var i = 0; i < event.hits.length; i++) {
                hits += event.hits[i];
                hits += " ";
              }

              if (!hits) {
                hits = "(none)";
              }

              (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                error: Error()
              }), info) : info)("GeogebraView: " + this.materialId + " received mouseDown in view " + event.viewNo + " at (" + event.x + ", " + event.y + ") hitting " + hits);
              break;

            case GGBEventType.ADD_POLYGON:
              (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                error: Error()
              }), info) : info)("GeogebraView: " + this.materialId + " received addPolygon", event);
              break;

            case GGBEventType.ADD_POLYGON_COMPLETE:
              (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                error: Error()
              }), info) : info)("GeogebraView: " + this.materialId + " received addPolygonComplete", event);
              break;

            case GGBEventType.VIEW_CHANGED2D:
              var props = JSON.parse(this._ggbApi.getViewProperties());
              var xMin = props.xMin;
              var yMin = props.yMin;
              var xMax = props.xMin + props.width * props.invXscale;
              var yMax = props.yMin + props.height * props.invYscale;
              (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                error: Error()
              }), info) : info)("GeogebraView: " + this.materialId + " received viewChanged2D", "(" + xMin + ", " + yMin + ", " + xMax + ", " + yMax + ")", event); // xapi2.setCoordSystem(xMin, xMax, yMin, yMax);

              break;

            case GGBEventType.DRAG_END:
              (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                error: Error()
              }), info) : info)("GeogebraView: " + this.materialId + " received dragEnd", event[1]);
              break;

            case GGBEventType.SHOW_STYLE_BAR:
              (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                error: Error()
              }), info) : info)("GeogebraView: " + this.materialId + " received showStyleBar", event);
              break;

            default:
              (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                error: Error()
              }), info) : info)("GeogebraView: " + this.materialId + " received unknown event", event);
              break;
          }
        }

        _updateListener(label) {
          var xml = this._ggbApi.getXML(label);

          (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
            error: Error()
          }), info) : info)("GeogebraView: " + this.materialId + " update:", label, xml);
          var tempXml = "<root>" + xml + "</root>";
          var parsedTempXml = new window.DOMParser().parseFromString(tempXml, "text/xml");
          var temp = parsedTempXml.getElementsByTagName("element");

          if (temp[0].getAttribute("type") === "image") {
            return;
          }

          if (label === "finalResult") {
            (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
              error: Error()
            }), info) : info)("GeogebraView: " + this.materialId + " received finalResult", xml);
            var parsedXml = new window.DOMParser().parseFromString(xml, "text/xml");

            if (parsedXml) {
              var htmlCollection = parsedXml.getElementsByTagName("value");

              if (htmlCollection && htmlCollection.length > 0) {
                var valueTag = htmlCollection[0] ? htmlCollection[0].getAttribute("val") : "";

                if (valueTag) {
                  (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                    error: Error()
                  }), info) : info)("Value tag: " + valueTag);
                }
              }
            }
          }

          if (label.indexOf("{") > -1 || label.indexOf("angle") > -1) {
            return;
          }

          this._queueGGBEvent(GGBEventType.UPDATE);
        }

        _addListener(label) {
          (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
            error: Error()
          }), info) : info)("GeogebraView: " + this.materialId + " add:", label);

          var xml = this._ggbApi.getXML(label);

          (_crd && debug === void 0 ? (_reportPossibleCrUseOfdebug({
            error: Error()
          }), debug) : debug)("GeogebraView: " + this.materialId, xml);

          var definition = this._ggbApi.getCommandString(label);

          (_crd && debug === void 0 ? (_reportPossibleCrUseOfdebug({
            error: Error()
          }), debug) : debug)("GeogebraView: " + this.materialId, definition);

          this._queueGGBEvent(GGBEventType.ADD);
        }

        _removeListener(label) {
          (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
            error: Error()
          }), info) : info)("GeogebraView: " + this.materialId + " remove:", label);

          var xml = this._ggbApi.getXML(label);

          this._queueGGBEvent(GGBEventType.REMOVE);
        }

      }, _class3.EventType = _extends({}, _ref.EventType, {
        GGB_APPLET_LOADED: "ggbAppletLoaded"
      }), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_materialId", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_width", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2000;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_height", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1500;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "materialId", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "materialId"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "width", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "width"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "height", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "height"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "url", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "url"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e3e59946579339ac30078ba1dc41d1e0c12dddec.js.map