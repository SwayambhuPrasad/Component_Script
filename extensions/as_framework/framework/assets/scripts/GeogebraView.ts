import { Director, director, EventHandler, WebView, _decorator } from "cc";
import { EDITOR } from "cc/env";
import { AS } from "./ASComponent";
import { debug, error, info } from "./Logger";
import { IReplicatedEvent, networkReplicator } from "./NetworkReplicator";

const { ccclass, property } = _decorator;

const GGB_EVENT = "ggbEvent";
const APPLET_LOADED = "appletLoaded";

const GGB_EVENT_BATCH_SIZE = 50;
const GGB_EVENT_BATCH_FLUSH_TIMEOUT = 250;

const GGB_TEMPLATE_URL =
  "https://s3-whjr-prod-cocos-applet.whjr.online/Utils/ggb-frame-template/index.html";

enum GGBEventType {
  UPDATE_STYLE = "updateStyle",
  SET_MODE = "setMode",
  DESELECT = "deselect",
  SELECT = "select",
  MOUSE_DOWN = "mouseDown",
  ADD_POLYGON = "addPolygon",
  ADD_POLYGON_COMPLETE = "addPolygonComplete",
  VIEW_CHANGED2D = "viewChanged2D",
  DRAG_END = "dragEnd",
  SHOW_STYLE_BAR = "showStyleBar",
  UPDATE = "update",
  ADD = "add",
  REMOVE = "remove",
}

@ccclass("GeogebraView")
export class GeogebraView extends AS(WebView) implements IReplicatedEvent {
  static readonly EventType = {
    ...super.EventType,
    GGB_APPLET_LOADED: "ggbAppletLoaded",
  };

  @property _materialId: string = "";

  @property _width: number = 2000;

  @property _height: number = 1500;

  private _ggbApp: any | null = null;

  private _ggbApi: any | null = null;

  private _replicationId: string;

  private _ggbEventQueue: GGBEventType[] = [];

  private _timeoutHandle: number | undefined = undefined;

  private _isUpdatingState = false;

  constructor() {
    super();

    this._replicationId = networkReplicator.registerEvent(this);
  }

  @property get materialId(): string {
    return this._materialId;
  }

  @property get width() {
    return this._width;
  }

  @property get height() {
    return this._height;
  }

  @property({ override: true, visible: false }) get url() {
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
      error(`GeogebraView: the frame is null`);
      return;
    }

    this._updateUrl();
    const frame = this.nativeWebView.contentWindow as Window & { ggbApp: any; ggbApi: any };

    this.nativeWebView.addEventListener("loaderror", (ev) => {
      error(`GeogebraView: ${this.materialId} failed to load`);
    });

    this.nativeWebView.addEventListener("load", () => {
      debug(`GeogebraView: ${this.materialId} loaded`);
      frame.addEventListener("message", (event: MessageEvent) => {
        info(`GeogebraView: ${this.materialId} received message:`, event.data);
        if (event.data.type === APPLET_LOADED) {
          this._ggbApp = frame.ggbApp;
          this._ggbApi = frame.ggbApi;
          this._onAppletLoaded();
        }
      });
    });
  }

  getStateData() {
    return this._ggbApi?.getXML();
  }

  updateStateData(xml: string) {
    if (!this._ggbApi) {
      this.node.once(GeogebraView.EventType.GGB_APPLET_LOADED, () => {
        this._evalXML(xml);
      });
    } else this._evalXML(xml);
  }

  onActivityEvent(name: string, data: { eventQueue: GGBEventType[]; xml: string }) {
    if (name === GGB_EVENT) {
      const { eventQueue, xml } = data;
      this._evalXML(xml);
    }
  }

  private _updateUrl() {
    const query = `?materialId=${this.materialId}&width=${this.width}&height=${this.height}`;
    this._url = GGB_TEMPLATE_URL + query;
    debug(`GeogebraView: ${this.materialId} url:`, this.url);
  }

  private _onAppletLoaded() {
    this._ggbApi.registerUpdateListener(this._updateListener.bind(this));
    this._ggbApi.registerRemoveListener(this._removeListener.bind(this));
    this._ggbApi.registerAddListener(this._addListener.bind(this));
    // this._ggbApi.registerClientListener(this._clientListener.bind(this));

    EventHandler.emitEvents(this.webviewEvents, this, GeogebraView.EventType.GGB_APPLET_LOADED);
    this.node.emit(GeogebraView.EventType.GGB_APPLET_LOADED, this);
  }

  private _evalXML(xml: string) {
    this._isUpdatingState = true;

    this._ggbApi.setXML(xml);
    this._ggbApi.evalCommand("UpdateConstruction()");

    director.once(Director.EVENT_BEFORE_UPDATE, () => {
      this._isUpdatingState = false;
    });
  }

  private _queueGGBEvent(ggbEventType: GGBEventType) {
    if (this._isUpdatingState) return;
    this._ggbEventQueue.push(ggbEventType);
    if (!this._timeoutHandle) {
      this._timeoutHandle = setTimeout(
        this._flushGGBEventQueue.bind(this),
        GGB_EVENT_BATCH_FLUSH_TIMEOUT,
      );
    }

    if (this._ggbEventQueue.length >= GGB_EVENT_BATCH_SIZE) {
      this._flushGGBEventQueue();
    }
  }

  private _flushGGBEventQueue() {
    if (this._ggbEventQueue.length > 0) {
      networkReplicator.sendEvent({
        id: this._replicationId,
        name: GGB_EVENT,
        data: { eventQueue: this._ggbEventQueue, xml: this._ggbApi.getXML() },
      });
    }
    clearTimeout(this._timeoutHandle);
    this._ggbEventQueue = [];
    this._timeoutHandle = undefined;
  }

  private _clientListener(event: any) {
    switch (event[0]) {
      case GGBEventType.UPDATE_STYLE: {
        const label = event[1];
        info(`GeogebraView: ${this.materialId} received updateStyle:`, label);

        const xml = this._ggbApi.getXML(label);
        this._queueGGBEvent(GGBEventType.UPDATE_STYLE);
        break;
      }

      case GGBEventType.SET_MODE: {
        info(`GeogebraView: ${this.materialId} received setMode:`, event[2]);
        // this._sendGGBEvent(GGBEventType.SET_MODE, { label, xml });
        break;
      }

      case GGBEventType.DESELECT: {
        info(`GeogebraView: ${this.materialId} received deselect`, event);
        // unregisterListeners();
        // xapi2.evalCommand("SelectObjects[]");
        // registerListeners();
        break;
      }

      case GGBEventType.SELECT:
        info(`GeogebraView: ${this.materialId} received select`, event);
        //unregisterListeners();
        //xapi2.evalCommand("SelectObjects[" + event[1] + "]");
        //registerListeners();
        break;

      case GGBEventType.MOUSE_DOWN:
        info(`GeogebraView: ${this.materialId} received mouseDown`, event);
        let hits = "";
        for (let i = 0; i < event.hits.length; i++) {
          hits += event.hits[i];
          hits += " ";
        }
        if (!hits) {
          hits = "(none)";
        }
        info(
          `GeogebraView: ${this.materialId} received mouseDown in view ${event.viewNo} at (${event.x}, ${event.y}) hitting ${hits}`,
        );
        break;
      case GGBEventType.ADD_POLYGON:
        info(`GeogebraView: ${this.materialId} received addPolygon`, event);
        break;
      case GGBEventType.ADD_POLYGON_COMPLETE:
        info(`GeogebraView: ${this.materialId} received addPolygonComplete`, event);
        break;

      case GGBEventType.VIEW_CHANGED2D:
        const props = JSON.parse(this._ggbApi.getViewProperties());
        const xMin = props.xMin;
        const yMin = props.yMin;
        const xMax = props.xMin + props.width * props.invXscale;
        const yMax = props.yMin + props.height * props.invYscale;
        info(
          `GeogebraView: ${this.materialId} received viewChanged2D`,
          `(${xMin}, ${yMin}, ${xMax}, ${yMax})`,
          event,
        );

        // xapi2.setCoordSystem(xMin, xMax, yMin, yMax);
        break;

      case GGBEventType.DRAG_END:
        info(`GeogebraView: ${this.materialId} received dragEnd`, event[1]);
        break;

      case GGBEventType.SHOW_STYLE_BAR:
        info(`GeogebraView: ${this.materialId} received showStyleBar`, event);
        break;

      default:
        info(`GeogebraView: ${this.materialId} received unknown event`, event);
        break;
    }
  }

  private _updateListener(label: string) {
    const xml = this._ggbApi.getXML(label);
    info(`GeogebraView: ${this.materialId} update:`, label, xml);
    const tempXml = `<root>${xml}</root>`;

    let parsedTempXml = new window.DOMParser().parseFromString(tempXml, "text/xml");
    const temp = parsedTempXml.getElementsByTagName("element");
    if (temp[0].getAttribute("type") === "image") {
      return;
    }

    if (label === "finalResult") {
      info(`GeogebraView: ${this.materialId} received finalResult`, xml);
      let parsedXml = new window.DOMParser().parseFromString(xml, "text/xml");
      if (parsedXml) {
        let htmlCollection = parsedXml.getElementsByTagName("value");
        if (htmlCollection && htmlCollection.length > 0) {
          let valueTag = htmlCollection[0] ? htmlCollection[0].getAttribute("val") : "";
          if (valueTag) {
            info(`Value tag: ${valueTag}`);
          }
        }
      }
    }

    if (label.indexOf("{") > -1 || label.indexOf("angle") > -1) {
      return;
    }

    this._queueGGBEvent(GGBEventType.UPDATE);
  }

  private _addListener(label: string) {
    info(`GeogebraView: ${this.materialId} add:`, label);

    const xml = this._ggbApi.getXML(label);
    debug(`GeogebraView: ${this.materialId}`, xml);

    const definition = this._ggbApi.getCommandString(label);
    debug(`GeogebraView: ${this.materialId}`, definition);

    this._queueGGBEvent(GGBEventType.ADD);
  }

  private _removeListener(label: string) {
    info(`GeogebraView: ${this.materialId} remove:`, label);
    const xml = this._ggbApi.getXML(label);
    this._queueGGBEvent(GGBEventType.REMOVE);
  }
}
