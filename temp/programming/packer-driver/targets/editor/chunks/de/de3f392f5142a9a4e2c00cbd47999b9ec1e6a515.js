System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Director, director, game, EDITOR, BiDirectionalMap, SimpleEvent, error, info, warn, NetworkReplicator, _crd, PayloadType, RELOAD_PAYLOAD, networkReplicator;

  // Send message from applet to platform.
  function sendMessageToPlatform(payload) {
    (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
      error: Error()
    }), info) : info)("Message to platform:", payload);
    parent.postMessage(payload, "*");
  }

  function _reportPossibleCrUseOfBiDirectionalMap(extras) {
    _reporterNs.report("BiDirectionalMap", "./BiDirectionalMap", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleEvent(extras) {
    _reporterNs.report("SimpleEvent", "./LiteEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfinfo(extras) {
    _reporterNs.report("info", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwarn(extras) {
    _reporterNs.report("warn", "./Logger", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Director = _cc.Director;
      director = _cc.director;
      game = _cc.game;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      BiDirectionalMap = _unresolved_2.BiDirectionalMap;
    }, function (_unresolved_3) {
      SimpleEvent = _unresolved_3.SimpleEvent;
    }, function (_unresolved_4) {
      error = _unresolved_4.error;
      info = _unresolved_4.info;
      warn = _unresolved_4.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f193bxXnEZFJoLLwpQV5MgK", "NetworkReplicator", undefined);

      PayloadType = {
        GET_ACTIVITY_STATE: "GetActivityState",
        RELOAD_APPLET: "ReloadApplet",
        GET_SCREEN_CAPTURE: "GetScreenCapture",
        SEND_SCREEN_CAPTURE: "ScreenCapture",
        ACTIVITY_EVENT: "ActivityState",
        LOCK_APPLET: "LockApplet",
        ANALYTICS: "Analytics",
        ACTIVITY_ERROR: "ActivityError"
      };
      RELOAD_PAYLOAD = "HOME";
      NetworkReplicator = class NetworkReplicator {
        constructor() {
          this._screenShotRequested = new (_crd && SimpleEvent === void 0 ? (_reportPossibleCrUseOfSimpleEvent({
            error: Error()
          }), SimpleEvent) : SimpleEvent)();
          this._analyticsInjected = new (_crd && SimpleEvent === void 0 ? (_reportPossibleCrUseOfSimpleEvent({
            error: Error()
          }), SimpleEvent) : SimpleEvent)();
          this._registeredEvents = new (_crd && BiDirectionalMap === void 0 ? (_reportPossibleCrUseOfBiDirectionalMap({
            error: Error()
          }), BiDirectionalMap) : BiDirectionalMap)();
          this._analyticsData = null;
          this._enabled = false;
        }

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
            this._init(); // Recieve message from platform to applet.
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


        sendEvent(event) {
          if (!this._enabled) return;
          sendMessageToPlatform({
            type: PayloadType.ACTIVITY_EVENT,
            message: event
          });
        }
        /**
         * Send the state of the activity as an JSON object to the platform, which
         * allows other participants to synchronize their state.
         * @param syncData The `SyncData` object that contains the state.
         */


        sendState(syncData) {
          if (!this._enabled) return;
          sendMessageToPlatform({
            type: PayloadType.GET_ACTIVITY_STATE,
            message: syncData
          });
        }

        requestState() {
          if (!this._enabled) return;
          sendMessageToPlatform({
            type: PayloadType.GET_ACTIVITY_STATE,
            message: null
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
            message: RELOAD_PAYLOAD
          });
        }
        /**
         * Send the the canvas element link, which contains the screen shot image,
         * to the platform. The platform can then download the image or display
         * it.
         * @param imageURI The URI to the canvas element that contains the screen
         * shot.
         */


        sendScreenShot(imageURI) {
          if (!this._enabled) return;
          sendMessageToPlatform({
            type: PayloadType.SEND_SCREEN_CAPTURE,
            message: imageURI
          });
        }

        requestAnalyticsData() {
          if (!this._enabled) return;
          sendMessageToPlatform({
            type: PayloadType.ANALYTICS,
            message: null
          });
        }

        sendAnalyticsData(current_q, correctAnswers, isLastQuestion) {
          if (!this._enabled) return;

          if (this._analyticsData == null) {
            (_crd && warn === void 0 ? (_reportPossibleCrUseOfwarn({
              error: Error()
            }), warn) : warn)("Analytics is disabled!");
            return;
          }

          const totalQuestions = correctAnswers.length;
          const qIndex = current_q - 1;

          if (qIndex > -1) {
            this._analyticsData.current_q = current_q;
            this._analyticsData.questions[qIndex].answeredCorrectly = correctAnswers[qIndex];
            this._analyticsData.totalQuestions = totalQuestions;
          }

          this._analyticsData.marks = this._analyticsData.questions.reduce((marks, question) => question.answeredCorrectly ? marks + 1 : marks, 0);
          let allAnsweredCorrectly = totalQuestions === this._analyticsData.marks;

          for (let q = 0; q < totalQuestions; q++) {
            if (this._analyticsData.questions[q].answeredCorrectly !== true) {
              allAnsweredCorrectly = false;
            }
          }

          this._analyticsData.lmsQuizCompleted = allAnsweredCorrectly && isLastQuestion;
          sendMessageToPlatform({
            type: PayloadType.ANALYTICS,
            message: this._analyticsData
          });
          (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
            error: Error()
          }), info) : info)("JSON Data sent to platform is ", this._analyticsData);
        }

        sendError(...args) {
          if (!this._enabled) return;
          sendMessageToPlatform({
            type: PayloadType.ACTIVITY_ERROR,
            message: JSON.stringify(args)
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


        registerEvent(event) {
          const index = this._registeredEvents.size.toString();

          this._registeredEvents.set(index, event);

          return index;
        }

        getEventId(event) {
          return this._registeredEvents.getKey(event);
        }

        getEvent(id) {
          return this._registeredEvents.getValue(id);
        }

        onMessageFromPlatform(e) {
          // Ignore message if origin is self.
          if (e.source === window) {
            return;
          }

          const payload = e.data;
          (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
            error: Error()
          }), info) : info)("Message from platform:", e.origin, payload);

          if (!payload.type) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`Invalid message recieved from platform${payload}`);
          }

          switch (payload.type) {
            case PayloadType.GET_ACTIVITY_STATE:
              {
                if (payload.message) {
                  const activityState = payload.message;

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
                  const activityState = {};

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

            case PayloadType.RELOAD_APPLET:
              {
                game.restart();

                this._registeredEvents.clear();

                this._screenShotRequested.clear();

                this._analyticsInjected.clear();

                if (!payload.message) {
                  this.propagateReload();
                }

                break;
              }

            case PayloadType.GET_SCREEN_CAPTURE:
              {
                if (!payload.message) {
                  this._screenShotRequested.trigger();
                }

                break;
              }

            case PayloadType.ACTIVITY_EVENT:
              {
                const event = payload.message;
                const handler = this.getEvent(event.id);

                if (handler && handler.onActivityEvent) {
                  handler.onActivityEvent(event.name, event.data);
                }

                break;
              }

            case PayloadType.LOCK_APPLET:
              {
                if (payload.message) {
                  game.pause();
                } else if (game.isPaused()) {
                  game.resume();
                }

                break;
              }

            case PayloadType.ANALYTICS:
              {
                this._analyticsData = payload.message;
                (_crd && info === void 0 ? (_reportPossibleCrUseOfinfo({
                  error: Error()
                }), info) : info)("The injected JSON is:", this._analyticsData);

                this._analyticsInjected.trigger(this._analyticsData);

                break;
              }

            default:
              (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
                error: Error()
              }), error) : error)(`Unknown payload type: ${payload.type}`);
          }
        }

        _init() {
          if (EDITOR) return;

          if (director.getScene()) {
            this.requestAnalyticsData();
            this.requestState();
          } else {
            director.once(Director.EVENT_AFTER_SCENE_LAUNCH, () => {
              this.requestAnalyticsData();
              this.requestState();
            }, this);
          }
        }

      };

      _export("networkReplicator", networkReplicator = new NetworkReplicator());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de3f392f5142a9a4e2c00cbd47999b9ec1e6a515.js.map