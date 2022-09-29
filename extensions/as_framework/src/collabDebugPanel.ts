import { ChildProcess, fork } from "child_process";
import { readFileSync } from "fs";
import { AddressInfo } from "net";
import { join } from "path";
import { createApp, ref } from "vue";

var serverProcess: ChildProcess | null = null;
var serverPort: number;

const collabDebugPanel = Editor.Panel.define({
  template: `<div id="app" class="container-fluid mt-4"><server /></div>`,
  style: readFileSync(
    join(__dirname, "../node_modules/bootstrap/dist/css/bootstrap.min.css"),
    "utf-8",
  ),
  $: {
    app: "#app",
  },
  async ready() {
    const panel = this;
    if (panel.$.app) {
      const builderConfigData = await Editor.Profile.getConfig("builder");
      const app = createApp({});
      app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("ui-");
      app.component("server", {
        template: readFileSync(
          join(__dirname, "../static/collabDebugServerComponent.html"),
          "utf-8",
        ),
        setup() {
          const buildSelect = ref();

          return { buildSelect };
        },
        data() {
          return {
            selectedOption: -1,
            serverRunning: false,
          };
        },
        computed: {
          options() {
            const options: { value: number; name: string; path: string }[] = [];
            const buildTaskMap = builderConfigData.BuildTaskManager.taskMap;
            for (const key in buildTaskMap) {
              if (Object.prototype.hasOwnProperty.call(buildTaskMap, key)) {
                const element = buildTaskMap[key];
                const outputName = element.options.outputName;
                const buildPath = element.options.buildPath;
                const option = {
                  value: options.length,
                  name: outputName,
                  path: buildPath.startsWith("project://")
                    ? join(Editor.Project.path, buildPath.substring(8)) + "/" + outputName
                    : join(buildPath, outputName),
                };
                options.push(option);
              }
            }

            return options;
          },
          isBuildSelected() {
            return this.selectedOption > -1;
          },
          isServerValid() {
            return this.serverRunning;
          },
          serverLink() {
            return `http://localhost:${serverPort}`;
          },
        },

        methods: {
          onBuildSelect() {
            this.selectedOption = +this.buildSelect.value;
          },
          onStartServer() {
            if (serverProcess) {
              serverProcess.kill();
              serverProcess = null;
            }
            const command = "node";
            const params = [this.options[this.buildSelect.value].path];

            serverProcess = fork(join(__dirname, "./server.js"), params, {
              stdio: ["pipe", "pipe", "pipe", "ipc"],
            });
            serverProcess.stdout?.on("data", (data) => {
              console.log(`Server process: ${data}`);
            });
            serverProcess.stderr?.on("data", (data) => {
              console.error(`Server process: ${data}`);
            });
            serverProcess.on("message", (msg: { success: boolean; address?: AddressInfo }) => {
              this.serverRunning = msg.success;
              if (msg.address) serverPort = msg.address.port;
            });
          },
          onOpenPreview1() {
            Editor.Panel.open("as_framework.collabPreview1");
          },
          onOpenPreview2() {
            Editor.Panel.open("as_framework.collabPreview2");
          },
          onCustomUrlInput() {},
        },
      });
      app.mount(panel.$.app);
    }
  },
  close() {
    Editor.Panel.close("as_framework.collabPreview1");
    Editor.Panel.close("as_framework.collabPreview2");
    serverProcess?.kill();
    serverProcess = null;
  },
  methods: {
    getServerPort() {
      return serverPort;
    },
  },
});

module.exports = collabDebugPanel;
