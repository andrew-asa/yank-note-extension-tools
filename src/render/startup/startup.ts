import { App } from "@vue/runtime-core";
import elementplus from "./elementplus";
import fortawesome from "./fortawesome";
export function start (app:App) {
    elementplus(app)
    fortawesome(app)
}
