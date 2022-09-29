System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Enum, tween, v3, bezierEasings, SimpleEvent, error, findParentCanvas, AnimController, _crd, UIAnimationLibrary, editorUtils;

  function promisify(controllerOrNode, ...targetTween) {
    if (controllerOrNode instanceof AnimController) {
      controllerOrNode.addTween(...targetTween);
    }

    return Promise.all(targetTween.map(t => new Promise(resolve => {
      if (controllerOrNode instanceof AnimController) controllerOrNode.stopEvent.on(resolve);
      t.call(resolve).start();
    })));
  }

  function animController(target) {
    return new AnimController(target);
  }

  function _reportPossibleCrUseOfbezierEasings(extras) {
    _reporterNs.report("bezierEasings", "./bezier-easings.js", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimpleEvent(extras) {
    _reporterNs.report("SimpleEvent", "./LiteEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOferror(extras) {
    _reporterNs.report("error", "./Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOffindParentCanvas(extras) {
    _reporterNs.report("findParentCanvas", "./Utils", _context.meta, extras);
  }

  _export({
    AnimController: void 0,
    animController: animController
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Enum = _cc.Enum;
      tween = _cc.tween;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      bezierEasings = _unresolved_2.default;
    }, function (_unresolved_3) {
      SimpleEvent = _unresolved_3.SimpleEvent;
    }, function (_unresolved_4) {
      error = _unresolved_4.error;
    }, function (_unresolved_5) {
      findParentCanvas = _unresolved_5.findParentCanvas;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0386e88NNpAO6Lv9TXAyApz", "UIAnimLibrary", undefined);

      _export("AnimController", AnimController = class AnimController {
        constructor(target) {
          this._target = void 0;
          this._tweens = [];
          this._stopEvent = new (_crd && SimpleEvent === void 0 ? (_reportPossibleCrUseOfSimpleEvent({
            error: Error()
          }), SimpleEvent) : SimpleEvent)();
          this._target = target;
        }

        get target() {
          return this._target;
        }

        get stopEvent() {
          return this._stopEvent.expose();
        }

        addTween(...animTween) {
          this._tweens.push(...animTween);
        }

        stop() {
          this._tweens.forEach(animTween => animTween.stop());

          this._tweens = [];

          this._stopEvent.trigger();
        }

      });

      _export("UIAnimationLibrary", UIAnimationLibrary = {
        none() {},

        //#region attention Seekers
        bounce(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target).delay(0.2 * duration).by(0.2 * duration, {
            position: v3(0, 30, 0),
            scale: v3(0, 0.1, 0)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.755, 0.05, 0.855, 0.06)
          }).delay(0.03 * duration).by(0.1 * duration, {
            position: v3(0, -30, 0),
            scale: v3(0, -0.1, 0)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.755, 0.05, 0.855, 0.06)
          }).by(0.17 * duration, {
            position: v3(0, 15, 0),
            scale: v3(0, 0.05, 0)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.755, 0.05, 0.855, 0.06)
          }).by(0.1 * duration, {
            position: v3(0, -15, 0),
            scale: v3(0, -0.1, 0)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.215, 0.61, 0.355, 1)
          }).by(0.1 * duration, {
            position: v3(0, 4, 0),
            scale: v3(0, 0.07, 0)
          }).by(0.1 * duration, {
            position: v3(0, -4, 0),
            scale: v3(0, -0.02, 0)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.215, 0.61, 0.355, 1)
          }));
        },

        flash(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(0.75 * duration, {
            localOpacity: 0
          }).to(0.25 * duration, {
            localOpacity: 1
          }));
        },

        pulse(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target).by(0.5 * duration, {
            scale: v3(0.1, 0.1, 0.1)
          }, {
            easing: "quadInOut"
          }).by(0.5 * duration, {
            scale: v3(-0.1, -0.1, -0.1)
          }, {
            easing: "quadInOut"
          }));
        },

        rubberBand(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target).by(0.3 * duration, {
            scale: v3(0.25, -0.25, 0)
          }).by(0.1 * duration, {
            scale: v3(-0.5, 0.5, 0)
          }).by(0.1 * duration, {
            scale: v3(0.4, -0.4, 0)
          }).by(0.15 * duration, {
            scale: v3(-0.2, 0.2, 0)
          }).by(0.1 * duration, {
            scale: v3(0.1, -0.1, 0)
          }).by(0.25 * duration, {
            scale: v3(-0.05, 0.05, 0)
          }));
        },

        shakeX(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target).by(0.1 * duration, {
            position: v3(10, 0, 0)
          }).by(0.1 * duration, {
            position: v3(-10, 0, 0)
          }).by(0.1 * duration, {
            position: v3(10, 0, 0)
          }).by(0.1 * duration, {
            position: v3(-10, 0, 0)
          }).by(0.1 * duration, {
            position: v3(10, 0, 0)
          }).by(0.1 * duration, {
            position: v3(-10, 0, 0)
          }).by(0.1 * duration, {
            position: v3(10, 0, 0)
          }).by(0.1 * duration, {
            position: v3(-10, 0, 0)
          }).by(0.1 * duration, {
            position: v3(10, 0, 0)
          }).by(0.1 * duration, {
            position: v3(-10, 0, 0)
          }));
        },

        shakeY(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target).by(0.1 * duration, {
            position: v3(0, 10, 0)
          }).by(0.1 * duration, {
            position: v3(0, -10, 0)
          }).by(0.1 * duration, {
            position: v3(0, 10, 0)
          }).by(0.1 * duration, {
            position: v3(0, -10, 0)
          }).by(0.1 * duration, {
            position: v3(0, 10, 0)
          }).by(0.1 * duration, {
            position: v3(0, -10, 0)
          }).by(0.1 * duration, {
            position: v3(0, 10, 0)
          }).by(0.1 * duration, {
            position: v3(0, -10, 0)
          }).by(0.1 * duration, {
            position: v3(0, 10, 0)
          }).by(0.1 * duration, {
            position: v3(0, -10, 0)
          }));
        },

        headShake(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target).by(0.065 * duration, {
            position: v3(-6, 0, 0),
            eulerAngles: v3(0, -9, 0)
          }, {
            easing: "smooth"
          }).by(0.12 * duration, {
            position: v3(11, 0, 0),
            eulerAngles: v3(0, 16, 0)
          }, {
            easing: "smooth"
          }).by(0.13 * duration, {
            position: v3(-8, 0, 0),
            eulerAngles: v3(0, -12, 0)
          }, {
            easing: "smooth"
          }).by(0.12 * duration, {
            position: v3(5, 0, 0),
            eulerAngles: v3(0, 8, 0)
          }, {
            easing: "smooth"
          }).by(0.065 * duration, {
            position: v3(-2, 0, 0),
            eulerAngles: v3(0, -3, 0)
          }, {
            easing: "smooth"
          }).repeat(1));
        },

        swing(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target).by(0.2 * duration, {
            eulerAngles: v3(0, 0, 15)
          }, {
            easing: "smooth"
          }).by(0.2 * duration, {
            eulerAngles: v3(0, 0, -25)
          }, {
            easing: "smooth"
          }).by(0.2 * duration, {
            eulerAngles: v3(0, 0, 15)
          }, {
            easing: "smooth"
          }).by(0.2 * duration, {
            eulerAngles: v3(0, 0, -10)
          }, {
            easing: "smooth"
          }).by(0.2 * duration, {
            eulerAngles: v3(0, 0, 5)
          }, {
            easing: "smooth"
          }));
        },

        tada(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target).by(0.1 * duration, {
            scale: v3(-0.1, -0.1, -0.1),
            eulerAngles: v3(0, 0, -3)
          }, {
            easing: "smooth"
          }).delay(0.1 * duration).by(0.1 * duration, {
            scale: v3(0.2, 0.2, 0.2),
            eulerAngles: v3(0, 0, 6)
          }, {
            easing: "smooth"
          }).by(0.1 * duration, {
            eulerAngles: v3(0, 0, -6)
          }, {
            easing: "smooth"
          }).by(0.1 * duration, {
            eulerAngles: v3(0, 0, 6)
          }, {
            easing: "smooth"
          }).by(0.1 * duration, {
            eulerAngles: v3(0, 0, -6)
          }, {
            easing: "smooth"
          }).by(0.1 * duration, {
            eulerAngles: v3(0, 0, 6)
          }, {
            easing: "smooth"
          }).by(0.1 * duration, {
            eulerAngles: v3(0, 0, -6)
          }, {
            easing: "smooth"
          }).by(0.1 * duration, {
            scale: v3(-0.1, -0.1, -0.1),
            eulerAngles: v3(0, 0, 3)
          }, {
            easing: "smooth"
          }));
        },

        wobble(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const width = target._uiProps.uiTransformComp.width;
          return promisify(controllerOrNode, tween(target).by(0.15 * duration, {
            position: v3(-0.25 * width, 0, 0),
            eulerAngles: v3(0, 0, -5)
          }, {
            easing: "smooth"
          }).by(0.15 * duration, {
            position: v3(0.45 * width, 0, 0),
            eulerAngles: v3(0, 0, 8)
          }, {
            easing: "smooth"
          }).by(0.15 * duration, {
            position: v3(-0.35 * width, 0, 0),
            eulerAngles: v3(0, 0, -6)
          }, {
            easing: "smooth"
          }).by(0.15 * duration, {
            position: v3(0.25 * width, 0, 0),
            eulerAngles: v3(0, 0, 5)
          }, {
            easing: "smooth"
          }).by(0.15 * duration, {
            position: v3(-0.15 * width, 0, 0),
            eulerAngles: v3(0, 0, -3)
          }, {
            easing: "smooth"
          }).by(0.15 * duration, {
            position: v3(0.05 * width, 0, 0),
            eulerAngles: v3(0, 0, 1)
          }, {
            easing: "smooth"
          }));
        },

        // jello(controllerOrNode:AnimController| Node, duration: number) {
        // const target = controllerOrNode instanceof AnimController? controllerOrNode.target : controllerOrNode;
        //   const nodeMatrix = Mat4.fromRTS(mat4(), target.rotation, target.position, target.scale);
        //   const skew = v2(0, 0);
        //   const opts: ITweenOption = {
        //     easing: "smooth",
        //     //@ts-expect-error
        //     onUpdate: ({ x, y }: IVec2) => {
        //       const skewMatrix = Mat4.IDENTITY.clone();
        //       skewMatrix.m01 = Math.tan(math.toRadian(x));
        //       skewMatrix.m04 = Math.tan(math.toRadian(y));
        //       target.matrix = Mat4.multiply(mat4(), nodeMatrix, skewMatrix);
        //     },
        //   };
        //   return promisify(controllerOrNode,
        //     tween(skew)
        //
        //       .delay(0.111 * duration)
        //       .to(0.111 * duration, v2(-12.5, -12.5), opts)
        //       .to(0.111 * duration, v2(6.25, 6.25), opts)
        //       .to(0.111 * duration, v2(-3.125, -3.125), opts)
        //       .to(0.111 * duration, v2(1.5625, 1.5625), opts)
        //       .to(0.111 * duration, v2(-0.78125, -0.78125), opts)
        //       .to(0.111 * duration, v2(0.390625, 0.390625), opts)
        //       .to(0.111 * duration, v2(-0.1953125, -0.1953125), opts)
        //       .to(0.222 * duration, v2(0, 0), opts),
        //   );
        // },
        heartBeat(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "quadInOut"
          };
          return promisify(controllerOrNode, tween(target).by(0.14 * duration, {
            scale: v3(0.3, 0.3, 0.3)
          }, opts).by(0.14 * duration, {
            scale: v3(-0.3, -0.3, -0.3)
          }, opts).by(0.14 * duration, {
            scale: v3(0.3, 0.3, 0.3)
          }, opts).by(0.28 * duration, {
            scale: v3(-0.3, -0.3, -0.3)
          }, opts).delay(0.28 * duration));
        },

        //#endregion
        //#region back entrances
        backInDown(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMax + target._uiProps.uiTransformComp.height;

          const initialPosition = v3(currentPosition.x, initialY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0.7
          }).delay(0.8 * duration).to(0.2 * duration, {
            localOpacity: 1
          }, {
            easing: "smooth"
          }), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(0.7, 0.7, 0.7)
          }).call(() => target.active = true).to(0.8 * duration, {
            worldPosition: currentPosition
          }, {
            easing: "smooth"
          }).to(0.2 * duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: "smooth"
          }));
        },

        backInLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMin - target._uiProps.uiTransformComp.width;

          const initialPosition = v3(initialX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0.7
          }).delay(0.8 * duration).to(0.2 * duration, {
            localOpacity: 1
          }, {
            easing: "smooth"
          }), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(0.7, 0.7, 0.7)
          }).call(() => target.active = true).to(0.8 * duration, {
            worldPosition: currentPosition
          }, {
            easing: "smooth"
          }).to(0.2 * duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: "smooth"
          }));
        },

        backInRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMax + target._uiProps.uiTransformComp.width;

          const initialPosition = v3(initialX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0.7
          }).delay(0.8 * duration).to(0.2 * duration, {
            localOpacity: 1
          }, {
            easing: "smooth"
          }), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(0.7, 0.7, 0.7)
          }).call(() => target.active = true).to(0.8 * duration, {
            worldPosition: currentPosition
          }, {
            easing: "smooth"
          }).to(0.2 * duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: "smooth"
          }));
        },

        backInUp(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMin - target._uiProps.uiTransformComp.height;

          const initialPosition = v3(currentPosition.x, initialY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0.7
          }).delay(0.8 * duration).to(0.2 * duration, {
            localOpacity: 1
          }, {
            easing: "smooth"
          }), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(0.7, 0.7, 0.7)
          }).call(() => target.active = true).to(0.8 * duration, {
            worldPosition: currentPosition
          }, {
            easing: "smooth"
          }).to(0.2 * duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: "smooth"
          }));
        },

        //#endregion
        //#region back exits
        backOutDown(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMin - target._uiProps.uiTransformComp.height;

          const targetPosition = v3(currentPosition.x, targetY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(0.2 * duration, {
            localOpacity: 0.7
          }, {
            easing: "smooth"
          }).delay(0.8 * duration), tween(target).set({
            scale: v3(1, 1, 1)
          }).to(0.2 * duration, {
            scale: v3(0.7, 0.7, 0.7)
          }, {
            easing: "smooth"
          }).to(0.8 * duration, {
            worldPosition: targetPosition
          }, {
            easing: "smooth"
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        backOutLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMin - target._uiProps.uiTransformComp.width;

          const targetPosition = v3(targetX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(0.2 * duration, {
            localOpacity: 0.7
          }, {
            easing: "smooth"
          }).delay(0.8 * duration), tween(target).set({
            scale: v3(0.7, 0.7, 0.7)
          }).to(0.2 * duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: "smooth"
          }).to(0.8 * duration, {
            worldPosition: targetPosition
          }, {
            easing: "smooth"
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        backOutRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMax + target._uiProps.uiTransformComp.width;

          const targetPosition = v3(targetX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(0.2 * duration, {
            localOpacity: 0.7
          }, {
            easing: "smooth"
          }).delay(0.8 * duration), tween(target).set({
            scale: v3(0.7, 0.7, 0.7)
          }).to(0.2 * duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: "smooth"
          }).to(0.8 * duration, {
            worldPosition: targetPosition
          }, {
            easing: "smooth"
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        backOutUp(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMax + target._uiProps.uiTransformComp.height;

          const targetPosition = v3(currentPosition.x, targetY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(0.2 * duration, {
            localOpacity: 0.7
          }, {
            easing: "smooth"
          }).delay(0.8 * duration), tween(target).set({
            scale: v3(1, 1, 1)
          }).to(0.2 * duration, {
            scale: v3(0.7, 0.7, 0.7)
          }, {
            easing: "smooth"
          }).to(0.8 * duration, {
            worldPosition: targetPosition
          }, {
            easing: "smooth"
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        //#endregion
        //#region bounce entrances
        bounceIn(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.215, 0.61, 0.355, 1)
          };
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(0.6 * duration, {
            localOpacity: 1
          }, opts), tween(target).set({
            scale: v3(0.3, 0.3, 0.3)
          }).call(() => target.active = true).to(0.2 * duration, {
            scale: v3(1.1, 1.1, 1.1)
          }, opts).to(0.2 * duration, {
            scale: v3(0.9, 0.9, 0.9)
          }, opts).to(0.2 * duration, {
            scale: v3(1.03, 1.03, 1.03)
          }, opts).to(0.2 * duration, {
            scale: v3(0.97, 0.97, 0.97)
          }, opts).to(0.2 * duration, {
            scale: v3(1, 1, 1)
          }, opts));
        },

        bounceInDown(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.215, 0.61, 0.355, 1)
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMax + target._uiProps.uiTransformComp.height;

          const initialPosition = v3(currentPosition.x, initialY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0.7
          }).to(0.6 * duration, {
            localOpacity: 1
          }, opts), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(1, 3, 1)
          }).call(() => target.active = true).to(0.6 * duration, {
            worldPosition: currentPosition.clone().add3f(0, -25, 0),
            scale: v3(1, 0.9, 1)
          }, opts).to(0.15 * duration, {
            worldPosition: currentPosition.clone().add3f(0, 10, 0),
            scale: v3(1, 0.95, 1)
          }, opts).to(0.15 * duration, {
            worldPosition: currentPosition.clone().add3f(0, -5, 0),
            scale: v3(1, 0.985, 1)
          }, opts).to(0.1 * duration, {
            worldPosition: currentPosition,
            scale: v3(1, 1, 1)
          }, opts));
        },

        bounceInLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.215, 0.61, 0.355, 1)
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMin - target._uiProps.uiTransformComp.width;

          const initialPosition = v3(initialX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0.7
          }).to(0.6 * duration, {
            localOpacity: 1
          }, opts), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(3, 1, 1)
          }).call(() => target.active = true).to(0.6 * duration, {
            worldPosition: currentPosition.clone().add3f(25, 0, 0),
            scale: v3(0.9, 1, 1)
          }, opts).to(0.15 * duration, {
            worldPosition: currentPosition.clone().add3f(-10, 0, 0),
            scale: v3(0.95, 1, 1)
          }, opts).to(0.15 * duration, {
            worldPosition: currentPosition.clone().add3f(5, 0, 0),
            scale: v3(0.985, 1, 1)
          }, opts).to(0.1 * duration, {
            worldPosition: currentPosition,
            scale: v3(1, 1, 1)
          }, opts));
        },

        bounceInRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.215, 0.61, 0.355, 1)
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMax + target._uiProps.uiTransformComp.width;

          const initialPosition = v3(initialX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0.7
          }).to(0.6 * duration, {
            localOpacity: 1
          }, opts), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(3, 1, 1)
          }).call(() => target.active = true).to(0.6 * duration, {
            worldPosition: currentPosition.clone().add3f(-25, 0, 0),
            scale: v3(0.9, 1, 1)
          }, opts).to(0.15 * duration, {
            worldPosition: currentPosition.clone().add3f(10, 0, 0),
            scale: v3(0.95, 1, 1)
          }, opts).to(0.15 * duration, {
            worldPosition: currentPosition.clone().add3f(-5, 0, 0),
            scale: v3(0.985, 1, 1)
          }, opts).to(0.1 * duration, {
            worldPosition: currentPosition,
            scale: v3(1, 1, 1)
          }, opts));
        },

        bounceInUp(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.215, 0.61, 0.355, 1)
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMin - target._uiProps.uiTransformComp.height;

          const initialPosition = v3(currentPosition.x, initialY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0.7
          }).to(0.6 * duration, {
            localOpacity: 1
          }, opts), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(1, 3, 1)
          }).call(() => target.active = true).to(0.6 * duration, {
            worldPosition: currentPosition.clone().add3f(0, 25, 0),
            scale: v3(1, 0.9, 1)
          }, opts).to(0.15 * duration, {
            worldPosition: currentPosition.clone().add3f(0, -10, 0),
            scale: v3(1, 0.95, 1)
          }, opts).to(0.15 * duration, {
            worldPosition: currentPosition.clone().add3f(0, 5, 0),
            scale: v3(1, 0.985, 1)
          }, opts).to(0.1 * duration, {
            worldPosition: currentPosition,
            scale: v3(1, 1, 1)
          }, opts));
        },

        //#endregion
        //#region bouncing exits
        bounceOut(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).delay(0.55 * duration).to(0.45 * duration, {
            localOpacity: 0
          }, opts), tween(target).set({
            scale: v3(1, 1, 1)
          }).to(0.2 * duration, {
            scale: v3(0.9, 0.9, 0.9)
          }, opts).to(0.3 * duration, {
            scale: v3(1.1, 1.1, 1.1)
          }, opts).delay(0.05 * duration).to(0.45 * duration, {
            scale: v3(0.3, 0.3, 0.3)
          }, opts).call(() => target.active = false));
        },

        bounceOutDown(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMin - target._uiProps.uiTransformComp.height;

          const targetPosition = v3(currentPosition.x, targetY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).delay(0.45 * duration).to(0.55 * duration, {
            localOpacity: 0
          }, {
            easing: "smooth"
          }).delay(0.8 * duration), tween(target).set({
            scale: v3(1, 1, 1)
          }).to(0.2 * duration, {
            worldPosition: currentPosition.clone().add3f(0, -10, 0),
            scale: v3(1, 0.98, 1)
          }, {
            easing: "smooth"
          }).to(0.2 * duration, {
            worldPosition: currentPosition.clone().add3f(0, 25, 0),
            scale: v3(1, 0.9, 1)
          }, {
            easing: "smooth"
          }).delay(0.05 * duration).to(0.55 * duration, {
            worldPosition: targetPosition,
            scale: v3(1, 3, 1)
          }, {
            easing: "smooth"
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        bounceOutLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMin - target._uiProps.uiTransformComp.width;

          const targetPosition = v3(targetX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).delay(0.45 * duration).to(0.55 * duration, {
            localOpacity: 0
          }, {
            easing: "smooth"
          }).delay(0.8 * duration), tween(target).set({
            scale: v3(1, 1, 1)
          }).to(0.2 * duration, {
            worldPosition: currentPosition.clone().add3f(-10, 0, 0),
            scale: v3(0.98, 1, 1)
          }, {
            easing: "smooth"
          }).to(0.2 * duration, {
            worldPosition: currentPosition.clone().add3f(25, 0, 0),
            scale: v3(0.9, 1, 1)
          }, {
            easing: "smooth"
          }).delay(0.05 * duration).to(0.55 * duration, {
            worldPosition: targetPosition,
            scale: v3(3, 1, 1)
          }, {
            easing: "smooth"
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        bounceOutRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMax + target._uiProps.uiTransformComp.width;

          const targetPosition = v3(targetX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).delay(0.45 * duration).to(0.55 * duration, {
            localOpacity: 0
          }, {
            easing: "smooth"
          }).delay(0.8 * duration), tween(target).set({
            scale: v3(1, 1, 1)
          }).to(0.2 * duration, {
            worldPosition: currentPosition.clone().add3f(10, 0, 0),
            scale: v3(0.98, 1, 1)
          }, {
            easing: "smooth"
          }).to(0.2 * duration, {
            worldPosition: currentPosition.clone().add3f(-25, 0, 0),
            scale: v3(0.9, 1, 1)
          }, {
            easing: "smooth"
          }).delay(0.05 * duration).to(0.55 * duration, {
            worldPosition: targetPosition,
            scale: v3(3, 1, 1)
          }, {
            easing: "smooth"
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        bounceOutUp(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMax + target._uiProps.uiTransformComp.height;

          const targetPosition = v3(currentPosition.x, targetY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).delay(0.45 * duration).to(0.55 * duration, {
            localOpacity: 0
          }, {
            easing: "smooth"
          }).delay(0.8 * duration), tween(target).set({
            scale: v3(1, 1, 1)
          }).to(0.2 * duration, {
            worldPosition: currentPosition.clone().add3f(0, 10, 0),
            scale: v3(1, 0.98, 1)
          }, {
            easing: "smooth"
          }).to(0.2 * duration, {
            worldPosition: currentPosition.clone().add3f(0, -25, 0),
            scale: v3(1, 0.9, 1)
          }, {
            easing: "smooth"
          }).delay(0.05 * duration).to(0.55 * duration, {
            worldPosition: targetPosition,
            scale: v3(1, 3, 1)
          }, {
            easing: "smooth"
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        //#endregion
        //#region fading entrances
        fadeIn(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).call(() => target.active = true).to(duration, {
            localOpacity: 1
          }, {
            easing: "smooth"
          }));
        },

        fadeInDown(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: currentPosition.clone().add3f(0, height, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInDownBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMax + target._uiProps.uiTransformComp.height;

          const initialPosition = v3(currentPosition.x, initialY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: initialPosition
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: currentPosition.clone().add3f(-width, 0, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInLeftBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMin - target._uiProps.uiTransformComp.width;

          const initialPosition = v3(initialX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: initialPosition
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: currentPosition.clone().add3f(width, 0, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInRightBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMax + target._uiProps.uiTransformComp.width;

          const initialPosition = v3(initialX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: initialPosition
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInUp(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: currentPosition.clone().add3f(0, -height, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInUpBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMin - target._uiProps.uiTransformComp.height;

          const initialPosition = v3(currentPosition.x, initialY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: initialPosition
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInTopLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: currentPosition.clone().add3f(-width, height, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInTopRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: currentPosition.clone().add3f(width, height, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInBottomLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: currentPosition.clone().add3f(-width, -height, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        fadeInBottomRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: currentPosition.clone().add3f(width, -height, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        //#endregion
        //#region fading exits
        fadeOut(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }).call(() => target.active = false));
        },

        fadeOutDown(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(0, -height, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadeOutDownBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMin - target._uiProps.uiTransformComp.height;

          const targetPosition = v3(currentPosition.x, targetY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: targetPosition
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadeOutLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(-width, 0, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadeOutLeftBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMin - target._uiProps.uiTransformComp.width;

          const targetPosition = v3(targetX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: targetPosition
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadeOutRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(width, 0, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadeOutRightBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMax + target._uiProps.uiTransformComp.width;

          const targetPosition = v3(targetX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: targetPosition
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadeOutUp(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(0, height, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadeOutUpBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMax + target._uiProps.uiTransformComp.height;

          const targetPosition = v3(currentPosition.x, targetY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: targetPosition
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadOutnTopLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(-width, height, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadeOutTopRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(width, height, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadeOutBottomLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(-width, -height, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        fadeOutBottomRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }), tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(width, -height, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        //#endregion
        //#region rotating entrances
        rotateIn(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const targetAngles = target.eulerAngles.clone();
          const initialAngles = targetAngles.clone().add3f(0, 0, -200);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }, {
            easing: "smooth"
          }), tween(target).set({
            eulerAngles: initialAngles
          }).call(() => target.active = true).to(duration, {
            eulerAngles: targetAngles
          }, {
            easing: "smooth"
          }));
        },

        //#endregion
        //#region rotating exits
        rotateOut(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const initialAngles = target.eulerAngles.clone();
          const targetAngles = target.eulerAngles.clone().add3f(0, 0, -200);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }, {
            easing: "smooth"
          }), tween(target).to(duration, {
            eulerAngles: targetAngles
          }, {
            easing: "smooth"
          }).call(() => target.active = false).set({
            eulerAngles: initialAngles
          }));
        },

        //#endregion
        //#region specials
        rollIn(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const targetAngles = target.eulerAngles.clone();
          const initialAngles = targetAngles.clone().add3f(0, 0, 120);
          const targetPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          const initialPosition = target.worldPosition.clone().add3f(-width, 0, 0);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(duration, {
            localOpacity: 1
          }, {
            easing: "smooth"
          }), tween(target).set({
            eulerAngles: initialAngles,
            worldPosition: initialPosition
          }).call(() => target.active = true).to(duration, {
            eulerAngles: targetAngles,
            worldPosition: targetPosition
          }, {
            easing: "smooth"
          }));
        },

        rollOut(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const initialAngles = target.eulerAngles.clone();
          const targetAngles = target.eulerAngles.clone().add3f(0, 0, -120);
          const initialPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          const targetPosition = target.worldPosition.clone().add3f(width, 0, 0);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(duration, {
            localOpacity: 0
          }, {
            easing: "smooth"
          }), tween(target).to(duration, {
            eulerAngles: targetAngles,
            worldPosition: targetPosition
          }, {
            easing: "smooth"
          }).call(() => target.active = false).set({
            eulerAngles: initialAngles,
            worldPosition: initialPosition
          }));
        },

        //#endregion
        //#region zoom entrances
        zoomIn(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(0.5 * duration, {
            localOpacity: 1
          }), tween(target).set({
            scale: v3(0.3, 0.3, 0.3)
          }).call(() => target.active = true).to(duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: "smooth"
          }));
        },

        zoomInX(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(0.5 * duration, {
            localOpacity: 1
          }), tween(target).set({
            scale: v3(0.3, 1, 1)
          }).call(() => target.active = true).to(duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: "smooth"
          }));
        },

        zoomInY(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(0.5 * duration, {
            localOpacity: 1
          }), tween(target).set({
            scale: v3(1, 0.3, 1)
          }).call(() => target.active = true).to(duration, {
            scale: v3(1, 1, 1)
          }, {
            easing: "smooth"
          }));
        },

        zoomInDown(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialY = (canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMax - target.worldPosition.y) / 2;
          const initialPosition = v3(currentPosition.x, initialY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(0.6 * duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(0.1, 0.1, 0.1)
          }).call(() => target.active = true).to(0.6 * duration, {
            worldPosition: currentPosition.clone().add3f(0, -30, 0),
            scale: v3(0.475, 0.475, 0.475)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }).to(0.4 * duration, {
            worldPosition: currentPosition,
            scale: v3(1, 1, 1)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.175, 0.885, 0.32, 1)
          }));
        },

        zoomInLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialX = (canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMin + target.worldPosition.x) / 2;
          const initialPosition = v3(initialX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(0.6 * duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(0.1, 0.1, 0.1)
          }).call(() => target.active = true).to(0.6 * duration, {
            worldPosition: currentPosition.clone().add3f(30, 0, 0),
            scale: v3(0.475, 0.475, 0.475)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }).to(0.4 * duration, {
            worldPosition: currentPosition,
            scale: v3(1, 1, 1)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.175, 0.885, 0.32, 1)
          }));
        },

        zoomInRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialX = (canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMax - target.worldPosition.x) / 2;
          const initialPosition = v3(initialX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(0.6 * duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(0.1, 0.1, 0.1)
          }).call(() => target.active = true).to(0.6 * duration, {
            worldPosition: currentPosition.clone().add3f(-30, 0, 0),
            scale: v3(0.475, 0.475, 0.475)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }).to(0.4 * duration, {
            worldPosition: currentPosition,
            scale: v3(1, 1, 1)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.175, 0.885, 0.32, 1)
          }));
        },

        zoomInUp(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialY = (canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMin + target.worldPosition.y) / 2;
          const initialPosition = v3(currentPosition.x, initialY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 0
          }).to(0.6 * duration, {
            localOpacity: 1
          }), tween(target).set({
            worldPosition: initialPosition,
            scale: v3(0.1, 0.1, 0.1)
          }).call(() => target.active = true).to(0.6 * duration, {
            worldPosition: currentPosition.clone().add3f(0, 30, 0),
            scale: v3(0.475, 0.475, 0.475)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }).to(0.4 * duration, {
            worldPosition: currentPosition,
            scale: v3(1, 1, 1)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.175, 0.885, 0.32, 1)
          }));
        },

        //#endregion
        //#region zoom exits
        zoomOut(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(0.5 * duration, {
            localOpacity: 0
          }), tween(target).set({
            scale: v3(1, 1, 1)
          }).to(0.5 * duration, {
            scale: v3(0.3, 0.3, 0.3)
          }, {
            easing: "smooth"
          }).delay(0.5 * duration).call(() => target.active = false));
        },

        zoomOutX(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(0.5 * duration, {
            localOpacity: 0
          }), tween(target).set({
            scale: v3(1, 1, 1)
          }).to(0.5 * duration, {
            scale: v3(0.3, 1, 1)
          }, {
            easing: "smooth"
          }).delay(0.5 * duration).call(() => target.active = false));
        },

        zoomOutY(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).to(0.5 * duration, {
            localOpacity: 0
          }), tween(target).set({
            scale: v3(1, 1, 1)
          }).to(0.5 * duration, {
            scale: v3(1, 0.3, 1)
          }, {
            easing: "smooth"
          }).delay(0.5 * duration).call(() => target.active = false));
        },

        zoomOutDown(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetY = (canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMin + target.worldPosition.y) / 2;
          const targetPosition = v3(currentPosition.x, targetY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).delay(0.4 * duration).to(0.6 * duration, {
            localOpacity: 0
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }), tween(target).to(0.4 * duration, {
            worldPosition: currentPosition.clone().add3f(0, 30, 0),
            scale: v3(0.45, 0.45, 0.45)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }).to(duration, {
            worldPosition: targetPosition,
            scale: v3(0.1, 0.1, 0.1)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.175, 0.885, 0.32, 1)
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        zoomOutLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetX = (canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMin + target.worldPosition.y) / 2;
          const targetPosition = v3(targetX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).delay(0.4 * duration).to(0.6 * duration, {
            localOpacity: 0
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }), tween(target).to(0.4 * duration, {
            worldPosition: currentPosition.clone().add3f(30, 0, 0),
            scale: v3(0.45, 0.45, 0.45)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }).to(duration, {
            worldPosition: targetPosition,
            scale: v3(0.1, 0.1, 0.1)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.175, 0.885, 0.32, 1)
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        zoomOutRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetX = (canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMax - target.worldPosition.y) / 2;
          const targetPosition = v3(targetX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).delay(0.4 * duration).to(0.6 * duration, {
            localOpacity: 0
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }), tween(target).to(0.4 * duration, {
            worldPosition: currentPosition.clone().add3f(-30, 0, 0),
            scale: v3(0.45, 0.45, 0.45)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }).to(duration, {
            worldPosition: targetPosition,
            scale: v3(0.1, 0.1, 0.1)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.175, 0.885, 0.32, 1)
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        zoomOutUp(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetY = (canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMax - target.worldPosition.y) / 2;
          const targetPosition = v3(currentPosition.x, targetY, currentPosition.z);
          return promisify(controllerOrNode, tween(target._uiProps).set({
            localOpacity: 1
          }).delay(0.4 * duration).to(0.6 * duration, {
            localOpacity: 0
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }), tween(target).to(0.4 * duration, {
            worldPosition: currentPosition.clone().add3f(0, -30, 0),
            scale: v3(0.45, 0.45, 0.45)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.55, 0.055, 0.675, 0.19)
          }).to(duration, {
            worldPosition: targetPosition,
            scale: v3(0.1, 0.1, 0.1)
          }, {
            easing: (_crd && bezierEasings === void 0 ? (_reportPossibleCrUseOfbezierEasings({
              error: Error()
            }), bezierEasings) : bezierEasings)(0.175, 0.885, 0.32, 1)
          }).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        //#endregion
        //#region sliding entrances
        slideInDown(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target).set({
            worldPosition: currentPosition.clone().add3f(0, height, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        slideInDownBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMax + target._uiProps.uiTransformComp.height;

          const initialPosition = v3(currentPosition.x, initialY, currentPosition.z);
          return promisify(controllerOrNode, tween(target).set({
            worldPosition: initialPosition
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        slideInLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          return promisify(controllerOrNode, tween(target).set({
            worldPosition: currentPosition.clone().add3f(-width, 0, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        slideInLeftBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMin - target._uiProps.uiTransformComp.width;

          const initialPosition = v3(initialX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target).set({
            worldPosition: initialPosition
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        slideInRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          return promisify(controllerOrNode, tween(target).set({
            worldPosition: currentPosition.clone().add3f(width, 0, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        slideInRightBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMax + target._uiProps.uiTransformComp.width;

          const initialPosition = v3(initialX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target).set({
            worldPosition: initialPosition
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        slideInUp(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target).set({
            worldPosition: currentPosition.clone().add3f(0, -height, 0)
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        slideInUpBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const initialY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMin - target._uiProps.uiTransformComp.height;

          const initialPosition = v3(currentPosition.x, initialY, currentPosition.z);
          return promisify(controllerOrNode, tween(target).set({
            worldPosition: initialPosition
          }).call(() => target.active = true).to(duration, {
            worldPosition: currentPosition
          }, opts));
        },

        //#endregion
        //#region sliding exits
        slideOutDown(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(0, -height, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        slideOutDownBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMin - target._uiProps.uiTransformComp.height;

          const targetPosition = v3(currentPosition.x, targetY, currentPosition.z);
          return promisify(controllerOrNode, tween(target).to(duration, {
            worldPosition: targetPosition
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        slideOutLeft(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          return promisify(controllerOrNode, tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(-width, 0, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        slideOutLeftBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMin - target._uiProps.uiTransformComp.width;

          const targetPosition = v3(targetX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target).to(duration, {
            worldPosition: targetPosition
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        slideOutRight(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const width = target._uiProps.uiTransformComp.width;
          return promisify(controllerOrNode, tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(width, 0, 0)
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        slideOutRightBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetX = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().xMax + target._uiProps.uiTransformComp.width;

          const targetPosition = v3(targetX, currentPosition.y, currentPosition.z);
          return promisify(controllerOrNode, tween(target).to(duration, {
            worldPosition: targetPosition
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        },

        slideOutUp(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const height = target._uiProps.uiTransformComp.height;
          return promisify(controllerOrNode, tween(target).to(duration, {
            worldPosition: currentPosition.clone().add3f(0, height, 0)
          }, opts).call(() => target.active = true).set({
            worldPosition: currentPosition
          }));
        },

        slideOutUpBig(controllerOrNode, duration) {
          const target = controllerOrNode instanceof AnimController ? controllerOrNode.target : controllerOrNode;
          const opts = {
            easing: "smooth"
          };
          const currentPosition = target.worldPosition.clone();
          const canvas = (_crd && findParentCanvas === void 0 ? (_reportPossibleCrUseOffindParentCanvas({
            error: Error()
          }), findParentCanvas) : findParentCanvas)(target);

          if (!canvas) {
            (_crd && error === void 0 ? (_reportPossibleCrUseOferror({
              error: Error()
            }), error) : error)(`No canvas found while animating backInDown for ${target.name}`);
            return;
          }

          const targetY = canvas.node._uiProps.uiTransformComp.getBoundingBoxToWorld().yMax + target._uiProps.uiTransformComp.height;

          const targetPosition = v3(currentPosition.x, targetY, currentPosition.z);
          return promisify(controllerOrNode, tween(target).to(duration, {
            worldPosition: targetPosition
          }, opts).call(() => target.active = false).set({
            worldPosition: currentPosition
          }));
        } //#endregion


      });

      _export("editorUtils", editorUtils = {
        enumType: Enum(Object.keys(UIAnimationLibrary).reduce((enumObj, key, i) => {
          enumObj[key] = i;
          return enumObj;
        }, {})),

        getName(val) {
          return Object.keys(this.enumType)[val];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=30d26e1486737513b575e203d78eb5baaafffb10.js.map