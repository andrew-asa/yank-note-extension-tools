import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import  "element-plus/dist/index.css";
import { start } from "@/render/startup/startup";
import  "@/utils/ghost_utils";
import store from '@/render/store'
const app = createApp(App)
start(app)
app.use(router)
app.use(store)
app.mount('#app')



