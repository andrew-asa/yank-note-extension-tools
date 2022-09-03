import * as base_utils from './ghost_base_utils'
import * as base_dom from './base_dom'
import * as string_utils from './StringUtils'
import * as pinyin_utils from './ghost_base_pinyin'

const ghost = Object.freeze({
  base_dom,
  base_utils,
  string_utils,
  pinyin_utils
})

export type Ghost = typeof ghost
export default ghost

export function installGhost () {
  console.log('enhance installGhost')
  try {
    Object.defineProperty(window, 'yank_enhance', {
      configurable: false,
      writable: false,
      value: ghost,
    })
  } catch (e) {
    console.log('error install yank_enhance')
    console.log(e)
  }
  console.log('success install yank_enhance')
}
