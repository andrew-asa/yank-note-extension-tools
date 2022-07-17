import { App } from "@vue/runtime-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default function (app: App) {
    app.component('font-awesome-icon', FontAwesomeIcon)
};
