import { Director, director } from "cc";
import { debug } from "./Logger";

function onGameInit() {
  const loader = document.getElementById("GameLoading");
  if (loader) {
    loader.style.display = "none";
  }
  debug(`Page loaded in ${performance.now()}ms`);
}

director.once(Director.EVENT_AFTER_SCENE_LAUNCH, onGameInit);
