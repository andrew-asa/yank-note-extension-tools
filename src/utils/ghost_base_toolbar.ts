import { ctx } from '@yank-note/runtime-api'
import {
  getCurrentLineContent,
  getCurrentLineNumber, getLineContent, getSection, getSelectionInfo,
  getSelectText, insertAt, isSelectText,
  replaceLine,
  replaceSelect
} from '@/utils/ghost_base_utils'
import { faListOl } from '@fortawesome/free-solid-svg-icons'
import { isNoEmpty, startWith } from '@/utils/StringUtils'

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

/**
 * 当前行标题
 * @param prefix
 */
export function heading (prefix: string) {
  var content = getCurrentLineContent()
  var lineNumber = getCurrentLineNumber()
  replaceLine(lineNumber, headingText(prefix, content))
}

/**
 *
 * @param prefix
 * @param text
 */
export function headingText (prefix: string, text: string) {
  text = text || ''
  if (prefix != '') {
    prefix = prefix + ' '
  }
  text = text.replace(/^#{1,5}\s/, '')
  return prefix + text
}

/**
 * 水平线
 */
export function horizontal () {
  var content = getCurrentLineContent()
  var lineNumber = getCurrentLineNumber()
  replaceLine(lineNumber, content + '\n' + '---')
}

/**
 * 引用
 */
export function quote () {
  // var content = getCurrentLineContent()
  // var lineNumber = getCurrentLineNumber()
  // replaceLine(lineNumber, '>' + content)
  // insertAt(lineNumber, 1, '>')
  // var selectionInfo = getSection()
  // let startLine = selectionInfo?.startLineNumber
  // let endLine = selectionInfo?.endLineNumber
  // // @ts-ignore
  // let i: number = startLine
  // // @ts-ignore
  // for (; i <= endLine; i++) {
  //   quoteLine(i)
  // }
  selectLineOp(quoteLine)
}

/**
 * 单行引用
 * @param lineNumber
 */
export function quoteLine (lineNumber: number) {
  var content = getLineContent(lineNumber)
  replaceLine(lineNumber, '> ' + content)
}

/**
 * 无序列表
 */
export function ul () {
  // var selectionInfo = getSection()
  // let startLine = selectionInfo?.startLineNumber
  // let endLine = selectionInfo?.endLineNumber
  // // @ts-ignore
  // let i: number = startLine
  // // @ts-ignore
  // for (; i <= endLine; i++) {
  //   replaceUlLine(i)
  // }
  selectLineOp(replaceUlLine)
}

/**
 * 替换无序列表一行
 * @param lineNumber
 */
export function replaceUlLine (lineNumber: number) {
  var content = getLineContent(lineNumber)
  replaceLine(lineNumber, '- ' + content)
  // insertAt(lineNumber, 1, '- ')
}

/**
 * 有序列表
 */
export function ol () {
  // var selectionInfo = getSection()
  // let startLine = selectionInfo?.startLineNumber
  // let endLine = selectionInfo?.endLineNumber
  // // @ts-ignore
  // let i: number = startLine
  // // @ts-ignore
  // for (; i <= endLine; i++) {
  //   replaceOlLine(i)
  // }

  selectLineOp(replaceOlLine)
}

/**
 * 替换有序列表一行
 * @param lineNumber
 */
export function replaceOlLine (lineNumber: number) {
  // insertAt(lineNumber, 1, '1. ')
  var content = getLineContent(lineNumber)
  replaceLine(lineNumber, '1. ' + content)
}

/**
 * 任务标记完成
 */
export function listCheck () {
  selectLineOp(listCheckLine)
}

export const checkPrefix = '- [x] '
export const uncheckPrefix = '- [ ] '

/**
 * 已经完成任务
 * @param lineNumber
 */
export function listCheckLine (lineNumber: number) {
  let content: string = getLineContent(lineNumber)
  replaceLine(lineNumber, createCheckContent(content))
}

export function createCheckContent (content: string): string {
  if (startWith(content, uncheckPrefix)) {
    content = content.replace(uncheckPrefix, checkPrefix)
  } else {
    content = checkPrefix + content
  }
  return content
}

/**
 * 任务没有完成
 */
export function listUnCheck () {
  selectLineOp(listUnCheckLine)
}

/**
 * 任务没有完成
 * @param lineNumber
 */
export function listUnCheckLine (lineNumber: number) {
  let content: string = getLineContent(lineNumber)
  replaceLine(lineNumber, createUnCheckContent(content))
}

export function createUnCheckContent(content:string):string{
  if (startWith(content, checkPrefix)) {
    content = content.replace(checkPrefix, uncheckPrefix)
  } else {
    content = uncheckPrefix + content
  }
  return content
}

/**
 * 选中逐行进行操作
 * @param op
 */
export function selectLineOp (op: Function) {
  var selectionInfo = getSection()
  let startLine = selectionInfo?.startLineNumber
  let endLine = selectionInfo?.endLineNumber
  // @ts-ignore
  let i: number = startLine
  // @ts-ignore
  for (; i <= endLine; i++) {
    op(i)
  }
}
