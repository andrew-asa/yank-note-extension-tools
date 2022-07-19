import { App } from "@vue/runtime-core";
import elementplus from "./elementplus";
import fortawesome from "./fortawesome";
import ghost from '@/utils/ghost_utils'
export function start (app:App) {
    elementplus(app)
    fortawesome(app)
    installGhost()
}

function installGhost () {
  console.log("installGhost")
  try {
    Object.defineProperty(window, 'ghost', {
      configurable: false,
      writable: false,
      value: ghost,
    })
  }catch (e) {
     console.log("error installGhost")
  }
  console.log("success installGhost")
}

