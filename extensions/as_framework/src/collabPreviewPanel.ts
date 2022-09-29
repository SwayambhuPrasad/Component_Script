import { WebviewTag } from "electron";

const collabPreviewPanel = Editor.Panel.define({
  template: `
  <webview id="view"></webview>
  <footer>
    <ui-button id="reload-btn"><ui-icon value="reset" /></ui-button>
    <ui-button id="dev-tools-btn"><ui-icon value="dev-tools" /></ui-button>
  </footer>
  `,
  style: `
  webview {
    width: 100%;
    height: 100%;
  }
  footer {
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 10;
  }
  `,
  $: {
    view: "#view",
    reload: "#reload-btn",
    devTools: "#dev-tools-btn",
  },

  async ready() {
    const view = this.$.view as WebviewTag;
    const reload = this.$.reload;
    const devTools = this.$.devTools;
    if (view) {
      if (reload) reload.addEventListener("confirm", () => view.reload());
      if (devTools) devTools.addEventListener("confirm", () => view.openDevTools());
      const serverPort = await Editor.Message.request("as_framework", "get-server-port");
      view.src = `http://localhost:${serverPort}`;
    }
  },
});

module.exports = collabPreviewPanel;
