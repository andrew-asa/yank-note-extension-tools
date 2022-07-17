import { ctx } from '@yank-note/runtime-api'
import {
  getCurrentLineContent,
  getCurrentLineNumber,
  getSelectText, isSelectText,
  replaceLine,
  replaceSelect
} from '@/utils/ghost_base_utils'


/**
 * 加粗
 */
export function bold () {
  if (isSelectText()) {
    boldSelect()
  } else {
    boldCurrentLine()
  }
}

export function boldText (text: string) {
  return '**' + text + '**'
}

/**
 * 当前行加粗
 */
export function boldCurrentLine () {
  var content = getCurrentLineContent()
  var lineNumber = getCurrentLineNumber()
  replaceLine(lineNumber, boldText(content))
}

/**
 * 当前选中文本加粗
 */
export function boldSelect () {
  replaceSelect(boldText(getSelectText()))
}

/**
 * ------------------------------------------------------------------------
 */
/**
 * 斜体
 */
export function italic () {
  if (isSelectText()) {
    italicSelect()
  } else {
    italicCurrentLine()
  }
}

export function italicText (text: string) {
  return '*' + text + '*'
}

/**
 * 当前行斜体
 */
export function italicCurrentLine () {
  var content = getCurrentLineContent()
  var lineNumber = getCurrentLineNumber()
  replaceLine(lineNumber, italicText(content))
}

/**
 * 当前选中文本斜体
 */
export function italicSelect () {
  replaceSelect(italicText(getSelectText()))
}

/**
 * ------------------------------------------------------------------------
 */
/**
 * 下划线
 */
export function underline () {
  if (isSelectText()) {
    underlineSelect()
  } else {
    underlineCurrentLine()
  }
}

/**
 * 文本下划线
 * @param text
 */
export function underlineText (text: string) {
  return '<u>' + text + '</u>'
}

/**
 * 当前行下划线
 */
export function underlineCurrentLine () {
  var content = getCurrentLineContent()
  var lineNumber = getCurrentLineNumber()
  replaceLine(lineNumber, underlineText(content))
}

/**
 * 当前选中文本下划线
 */
export function underlineSelect () {
  replaceSelect(underlineText(getSelectText()))
}

/**
 * ------------------------------------------------------------------------
 */
/**
 * 删除线
 */
export function strikethrough () {
  if (isSelectText()) {
    strikethroughSelect()
  } else {
    strikethroughCurrentLine()
  }
}

/**
 * 文本删除线
 * @param text
 */
export function strikethroughText (text: string) {
  return '~~' + text + '~~'
}

/**
 * 当前行删除线
 */
export function strikethroughCurrentLine () {
  var content = getCurrentLineContent()
  var lineNumber = getCurrentLineNumber()
  replaceLine(lineNumber, strikethroughText(content))
}

/**
 * 当前选中删除线
 */
export function strikethroughSelect () {
  replaceSelect(strikethroughText(getSelectText()))
}



