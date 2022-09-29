import chokidar from "chokidar";
import express from "express";
import { AddressInfo } from "net";
import { join } from "path";
import { argv } from "process";
import { Server, Socket } from "socket.io";

const appletPath = argv[2];
const testPlatformPath = join(__dirname, "../static");

interface AnalyticsData {
  totalQuestions: number;
  current_q: number;
  questions: { question: number; answeredCorrectly: boolean }[];
  marks: number;
  lmsQuizCompleted: boolean;
}

var analyticsData: AnalyticsData = {
  totalQuestions: 15,
  current_q: -1,
  questions: Array(15)
    .fill(null)
    .map((_, ind) => {
      return { question: ind + 1, answeredCorrectly: false };
    }),
  marks: 0,
  lmsQuizCompleted: false,
};

console.log(`Create server for build at ${appletPath}`);
try {
  const app = express();
  app.use("/", express.static(testPlatformPath, { index: "appletTestPlatform.html" }));
  app.use("/applet", express.static(appletPath));
  const server = app.listen(0, () => {
    const address = server.address()! as AddressInfo;
    console.log(`Server successfully started. Opened server at http://localhost:${address.port}`);
    process.send?.({ success: true, address });
  });
  const io = new Server(server, { cors: { origin: "*" } });
  io.sockets.on("connection", (socket: Socket) => {
    console.log("Established a new connection:", socket.id);

    socket.on("msg2socket", (data: any) => {
      if (data.type === "Analytics") {
        if (data.message == null) {
          // socket.emit("msg2app", { type: "Analytics", message: analyticsData });
          return;
        } else {
          analyticsData = data.message;
        }
      }

      console.log(
        `Socket message from id: ${socket.id}\n`,
        data.type === "ScreenCapture" ? "Screen capture request" : data,
      );

      socket.broadcast.emit("msg2app", data);
    });
  });

  const watcher = chokidar.watch(appletPath).on("all", () => {
    io.emit("reload");
  });
} catch (err) {
  console.error(err);
  console.log("Failed to start the server.");
  process.send?.({ success: false });
}
