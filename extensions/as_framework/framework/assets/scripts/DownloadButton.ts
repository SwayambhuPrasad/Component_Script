import { Button, director, Director, EventHandler, _decorator } from "cc";
import { networkReplicator } from "./NetworkReplicator";
import { Screenshot } from "./Screenshot";

const { ccclass, requireComponent } = _decorator;

@ccclass("DownloadButton")
@requireComponent(Button)
export class DownloadButton extends Screenshot {
  onEnable() {
    this.node.on(Button.EventType.CLICK, this._onClickDownload, this);
  }

  onDisable() {
    this.node.off(Button.EventType.CLICK, this._onClickDownload, this);
  }

  private _onClickDownload() {
    this.setScreenshotCamera();
    EventHandler.emitEvents(this.beforeCaptureEvents, this);
    this.node.emit(DownloadButton.EventType.BEFORE_CAPTURE, this);
    this.node.active = false;
    director.once(Director.EVENT_AFTER_DRAW, () => {
      const dataURL = this.getImageURL();
      this._downloadURL(dataURL, "screenshot");
      // Send to platform as well to ensure download on mobile devices.
      networkReplicator.sendScreenShot(dataURL);
      this.node.active = true;
      this.unsetScreenshotCamera();
      EventHandler.emitEvents(this.afterCaptureEvents, this);
      this.node.emit(DownloadButton.EventType.AFTER_CAPTURE, this);
    });
  }

  private _downloadURL(url: string, name: string) {
    const link = document.createElement("a");
    link.download = name;
    link.href = url;
    document.body.appendChild(link);
    link.click();
  }
}
