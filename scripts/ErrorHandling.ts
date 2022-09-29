import { error } from "./Logger";

window.onerror = (message) => error(message);
