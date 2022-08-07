import * as base_utils from './ghost_base_utils'
import * as base_dom from './base_dom'
import * as string_utils from './StringUtils'

const ghost = Object.freeze({
  base_dom,
  base_utils,
  string_utils
})

export type Ghost = typeof ghost
export default ghost

export function installGhost () {
  console.log('installGhost')
  try {
    Object.defineProperty(window, 'ghost', {
      configurable: false,
      writable: false,
      value: ghost,
    })
  } catch (e) {
    console.log('error installGhost')
  }
  console.log('success installGhost')
}
