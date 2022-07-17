import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import  "element-plus/dist/index.css";
import { start } from "@/render/startup/startup";
const app = createApp(App)
start(app)
app.use(router)
app.mount('#app')



