import { Director, director, game } from "cc";
import { EDITOR } from "cc/env";
import { BiDirectionalMap } from "./BiDirectionalMap";
import { SimpleEvent } from "./LiteEvent";
import { error, info, warn } from "./Logger";

const enum PayloadType {
  GET_ACTIVITY_STATE = "GetActivityState",
  RELOAD_APPLET = "ReloadApplet",
  GET_SCREEN_CAPTURE = "GetScreenCapture",
  SEND_SCREEN_CAPTURE = "ScreenCapture",
  ACTIVITY_EVENT = "ActivityState",
  LOCK_APPLET = "LockApplet",
  ANALYTICS = "Analytics",
  ACTIVITY_ERROR = "ActivityError",
}

const RELOAD_PAYLOAD = "HOME";

interface NetworkPayload {
  type: PayloadType;
  message: unknown;
}

export interface ActivityEvent {
  id: string;
  name: string;
  data?: unknown;
}

export interface AnalyticsData {
  totalQuestions: number;
  current_q: number;
  questions: { answeredCorrectly: boolean }[];
  marks: number;
  lmsQuizCompleted: boolean;
}

export interface IReplicatedEvent {
  onActivityEvent?(name: string, data?: unknown): void;
  getStateData?(): unknown;
  updateStateData?(data: unknown): void;
}

// Send message from applet to platform.
function sendMessageToPlatform(payload: NetworkPayload) {
  info("Message to platform:", payload);
  parent.postMessage(payload, "*");
}

class NetworkReplicator {
  private readonly _screenShotRequested = new SimpleEvent<void>();

  private readonly _analyticsInjected = new SimpleEvent<AnalyticsData>();

  private _registeredEvents = new BiDirectionalMap<string, IReplicatedEvent>();

  private _analyticsData: AnalyticsData | null = null;

  private _enabled = false;

  /**
   * Event triggered when screen shot is requested by the platform.
   */
  get screenShotRequested() {
    return this._screenShotRequested.expose();
  }

  get analyticsInjected() {
    return this._analyticsInjected.expose();
  }

  get isAnalyticsWorking() {
    return this._analyticsData != null;
  }

  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    if (value === this._enabled) return;
    this._enabled = value;
    if (this._enabled) {
      this._init();
      // Recieve message from platform to applet.
      // Subscribe to the event `window.onmessage`.
      window.addEventListener("message", this.onMessageFromPlatform.bind(this));
    } else {
      window.removeEventListener("message", this.onMessageFromPlatform.bind(this));
    }
  }

  /**
   * Send an event from the activity to the platform (and hence other
   * participants).
   * @param event The `ActivityEvent` that needs to be transmitted.
   */
  sendEvent(event: ActivityEvent) {
    if (!this._enabled) return;
    sendMessageToPlatform({
      type: PayloadType.ACTIVITY_EVENT,
      message: event,
    });
  }

  /**
   * Send the state of the activity as an JSON object to the platform, which
   * allows other participants to synchronize their state.
   * @param syncData The `SyncData` object that contains the state.
   */
  sendState(syncData: unknown) {
    if (!this._enabled) return;
    sendMessageToPlatform({
      type: PayloadType.GET_ACTIVITY_STATE,
      message: syncData,
    });
  }

  requestState() {
    if (!this._enabled) return;
    sendMessageToPlatform({
      type: PayloadType.GET_ACTIVITY_STATE,
      message: null,
    });
  }

  /**
   * Send a message to platform to request other participants to reload.
   * NOTE: This should be used after reload is performed on this applet.
   */
  propagateReload() {
    if (!this._enabled) return;
    sendMessageToPlatform({
      type: PayloadType.RELOAD_APPLET,
      message: RELOAD_PAYLOAD,
    });
  }

  /**
   * Send the the canvas element link, which contains the screen shot image,
   * to the platform. The platform can then download the image or display
   * it.
   * @param imageURI The URI to the canvas element that contains the screen
   * shot.
   */
  sendScreenShot(imageURI: string) {
    if (!this._enabled) return;
    sendMessageToPlatform({
      type: PayloadType.SEND_SCREEN_CAPTURE,
      message: imageURI,
    });
  }

  requestAnalyticsData() {
    if (!this._enabled) return;
    sendMessageToPlatform({
      type: PayloadType.ANALYTICS,
      message: null,
    });
  }

  sendAnalyticsData(current_q: number, correctAnswers: boolean[], isLastQuestion: boolean) {
    if (!this._enabled) return;
    if (this._analyticsData == null) {
      warn("Analytics is disabled!");
      return;
    }

    const totalQuestions = correctAnswers.length;
    const qIndex = current_q - 1;
    if (qIndex > -1) {
      this._analyticsData.current_q = current_q;
      this._analyticsData.questions[qIndex].answeredCorrectly = correctAnswers[qIndex];
      this._analyticsData.totalQuestions = totalQuestions;
    }
    this._analyticsData.marks = this._analyticsData.questions.reduce(
      (marks, question) => (question.answeredCorrectly ? marks + 1 : marks),
      0,
    );

    let allAnsweredCorrectly = totalQuestions === this._analyticsData.marks;
    for (let q = 0; q < totalQuestions; q++) {
      if (this._analyticsData.questions[q].answeredCorrectly !== true) {
        allAnsweredCorrectly = false;
      }
    }
    this._analyticsData.lmsQuizCompleted = allAnsweredCorrectly && isLastQuestion;

    sendMessageToPlatform({
      type: PayloadType.ANALYTICS,
      message: this._analyticsData,
    });
    info("JSON Data sent to platform is ", this._analyticsData);
  }

  sendError(...args: any[]) {
    if (!this._enabled) return;
    sendMessageToPlatform({
      type: PayloadType.ACTIVITY_ERROR,
      message: JSON.stringify(args),
    });
  }

  /**
   * Register an `ReplicatedEvent` component attached to a node.
   * This mainly gives the event an id that is used to identify the node
   * during communication.
   * @summary Taking advantage of the fact that life cycle callbacks in the
   * scene is guaranteed to be the as the order of nodes in the scene tree
   * in a depth first fashion. Hence given the same scene tree is used in
   * all sessions we can assume the index remains the same. This index is
   * used to identify the node an event replication.
   * @param event The `ReplicatedEvent` component attached to a node that
   * has events that needs to be replicated to the platform.
   */
  registerEvent(event: IReplicatedEvent) {
    const index = this._registeredEvents.size.toString();
    this._registeredEvents.set(index, event);
    return index;
  }

  getEventId(event: IReplicatedEvent) {
    return this._registeredEvents.getKey(event);
  }

  getEvent(id: string) {
    return this._registeredEvents.getValue(id);
  }

  onMessageFromPlatform(e: MessageEvent) {
    // Ignore message if origin is self.
    if (e.source === window) {
      return;
    }

    const payload = e.data as NetworkPayload;
    info("Message from platform:", e.origin, payload);

    if (!payload.type) {
      error(`Invalid message recieved from platform${payload}`);
    }

    switch (payload.type) {
      case PayloadType.GET_ACTIVITY_STATE: {
        if (payload.message) {
          const activityState = payload.message as Record<string, unknown>;
          for (const id in activityState) {
            if (Object.prototype.hasOwnProperty.call(activityState, id)) {
              const stateData = activityState[id];
              const handler = this.getEvent(id);
              if (handler && handler.updateStateData) {
                handler.updateStateData(stateData);
              }
            }
          }
        } else {
          const activityState: Record<string, unknown> = {};
          for (const [id, handler] of this._registeredEvents.entries()) {
            if (handler && handler.getStateData) {
              const stateData = handler.getStateData();
              if (stateData != null) activityState[id] = stateData;
            }
          }

          this.sendState(activityState);
        }
        break;
      }
      case PayloadType.RELOAD_APPLET: {
        game.restart();
        this._registeredEvents.clear();
        this._screenShotRequested.clear();
        this._analyticsInjected.clear();
        if (!payload.message) {
          this.propagateReload();
        }
        break;
      }
      case PayloadType.GET_SCREEN_CAPTURE: {
        if (!payload.message) {
          this._screenShotRequested.trigger();
        }
        break;
      }
      case PayloadType.ACTIVITY_EVENT: {
        const event = payload.message as ActivityEvent;
        const handler = this.getEvent(event.id);
        if (handler && handler.onActivityEvent) {
          handler.onActivityEvent(event.name, event.data);
        }
        break;
      }
      case PayloadType.LOCK_APPLET: {
        if (payload.message) {
          game.pause();
        } else if (game.isPaused()) {
          game.resume();
        }
        break;
      }
      case PayloadType.ANALYTICS: {
        this._analyticsData = payload.message as AnalyticsData;
        info("The injected JSON is:", this._analyticsData);
        this._analyticsInjected.trigger(this._analyticsData);
        break;
      }

      default:
        error(`Unknown payload type: ${payload.type}`);
    }
  }

  private _init() {
    if (EDITOR) return;

    if (director.getScene()) {
      this.requestAnalyticsData();
      this.requestState();
    } else {
      director.once(
        Director.EVENT_AFTER_SCENE_LAUNCH,
        () => {
          this.requestAnalyticsData();
          this.requestState();
        },
        this,
      );
    }
  }
}

export const networkReplicator = new NetworkReplicator();
