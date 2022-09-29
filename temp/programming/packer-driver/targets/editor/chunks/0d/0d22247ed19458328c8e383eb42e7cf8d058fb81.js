System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Button, director, Director, EventHandler, _decorator, networkReplicator, Screenshot, _dec, _dec2, _class, _crd, ccclass, requireComponent, DownloadButton;

  function _reportPossibleCrUseOfnetworkReplicator(extras) {
    _reporterNs.report("networkReplicator", "./NetworkReplicator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenshot(extras) {
    _reporterNs.report("Screenshot", "./Screenshot", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Button = _cc.Button;
      director = _cc.director;
      Director = _cc.Director;
      EventHandler = _cc.EventHandler;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      networkReplicator = _unresolved_2.networkReplicator;
    }, function (_unresolved_3) {
      Screenshot = _unresolved_3.Screenshot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d902dQQK/lKNK+x605Ae9dv", "DownloadButton", undefined);

      ({
        ccclass,
        requireComponent
      } = _decorator);

      _export("DownloadButton", DownloadButton = (_dec = ccclass("DownloadButton"), _dec2 = requireComponent(Button), _dec(_class = _dec2(_class = class DownloadButton extends (_crd && Screenshot === void 0 ? (_reportPossibleCrUseOfScreenshot({
        error: Error()
      }), Screenshot) : Screenshot) {
        onEnable() {
          this.node.on(Button.EventType.CLICK, this._onClickDownload, this);
        }

        onDisable() {
          this.node.off(Button.EventType.CLICK, this._onClickDownload, this);
        }

        _onClickDownload() {
          this.setScreenshotCamera();
          EventHandler.emitEvents(this.beforeCaptureEvents, this);
          this.node.emit(DownloadButton.EventType.BEFORE_CAPTURE, this);
          this.node.active = false;
          director.once(Director.EVENT_AFTER_DRAW, () => {
            const dataURL = this.getImageURL();

            this._downloadURL(dataURL, "screenshot"); // Send to platform as well to ensure download on mobile devices.


            (_crd && networkReplicator === void 0 ? (_reportPossibleCrUseOfnetworkReplicator({
              error: Error()
            }), networkReplicator) : networkReplicator).sendScreenShot(dataURL);
            this.node.active = true;
            this.unsetScreenshotCamera();
            EventHandler.emitEvents(this.afterCaptureEvents, this);
            this.node.emit(DownloadButton.EventType.AFTER_CAPTURE, this);
          });
        }

        _downloadURL(url, name) {
          const link = document.createElement("a");
          link.download = name;
          link.href = url;
          document.body.appendChild(link);
          link.click();
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0d22247ed19458328c8e383eb42e7cf8d058fb81.js.map