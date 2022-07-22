import { createApp } from 'vue'
import App from '@/components/Edit.vue'
import { getExtensionBasePath, registerPlugin } from '@yank-note/runtime-api'
import { start } from "@/render/startup/startup";
import store from '@/render/store'
const extensionId = __EXTENSION_ID__

function startInternal (id: string) {
  installCss()
  const app = createApp(App)
  start(app)
  app.use(store)
  app.mount(id)
}

export default function (id: string) {
  console.log('mount s' + id)
  startInternal(id)
}

function loadStyle (url) {
  var link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  var head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

function installCss () {
  const baseUrl = getExtensionBasePath(extensionId)
  console.log('baseurl: ' + baseUrl)
  // const html = `
  //       <link rel="stylesheet" href="${baseUrl}/dist/style.css">
  //     `
  const cssUrl = baseUrl + '/dist/style.css'
  loadStyle(cssUrl)
}
