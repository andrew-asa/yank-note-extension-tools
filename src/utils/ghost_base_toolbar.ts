import { ctx } from '@yank-note/runtime-api'
import {
  getCurrentLineContent,
  getCurrentLineNumber, getLineContent, getSection, getSelectionInfo,
  getSelectText, insertAt, isSelectText,
  replaceLine,
  replaceSelect,
  global_resize, insert
} from '@/utils/ghost_base_utils'
import { isEmpty, isNoEmpty, startWith, testStr } from '@/utils/StringUtils'
import store from '@/render/store'
import { htmlStrToSpanDom } from '@/utils/base_dom'

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
  selectLineOp(replaceUlLine)
}

/**
 * 替换无序列表一行
 * @param lineNumber
 */
export function replaceUlLine (lineNumber: number) {
  var content = getLineContent(lineNumber)
  replaceLine(lineNumber, '- ' + content)
}

/**
 * 有序列表
 */
export function ol () {
  selectLineOp(replaceOlLine)
}

/**
 * 替换有序列表一行
 * @param lineNumber
 */
export function replaceOlLine (lineNumber: number) {
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

export function createUnCheckContent (content: string): string {
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

/**
 * 插入链接
 */
export function link () {
  var text: string = getSelectText()
  replaceSelect(buildLinkText(text))
}

export const DEFAULT_LINk = 'https://url/'

export function buildLinkText (content: string) {
  return '[' + content + ']' + '(' + DEFAULT_LINk + ')'
}

/**
 * 插入图片链接
 */
export function linkImg () {
  replaceSelect(buildLinkImgText(getSelectText()))
}

export function buildLinkImgText (content: string) {
  return '![' + content + ']' + '(' + DEFAULT_LINk + ')'
}

/**
 * 内嵌代码
 */
export function embedCode () {
  replaceSelect(buildEmbedCodeText(getSelectText()))
}

export function buildEmbedCodeText (content: string) {
  return '`' + content + '`'
}

/**
 * 插入代码块
 */
export function code () {
  replaceSelect(buildCodeText(getSelectText()))
}

export function buildCodeText (content: string) {
  return '\n```\n' + content + '\n```\n'
}

/**
 * 插入公式
 */
export function formula () {
  replaceSelect(buildFormulaText(getSelectText()))
}

/**
 * 默认插入的公式
 */
export const DEFAULT_FORMULA = 'E = mc^2'

export function buildFormulaText (content: string) {
  if (isEmpty(content)) {
    content = DEFAULT_FORMULA
  }
  return '\n```math\n' + content + '\n```\n'
}

/**
 * 工具类的显示以及隐藏
 * @param visible
 */
export function toggleToolbar (visible?: boolean) {
  store.commit('setShowToolbar', typeof visible === 'boolean' ? visible : !store.state.showToolbar)
  global_resize()
}

export const DEFAULT_TABLE_DEMO =
  '| 标题1 | 标题2 | 标题3 |\n' +
  '| :-- | :-- | :-- |\n' +
  '| 1 | 2 | 3 |'

/**
 * 插入表格
 */
export function insertTable () {
  insert(DEFAULT_TABLE_DEMO)
}

export function backgroundColor (color: string) {
  replaceSelect(buildBackgroundColorText(getSelectText(),color))
}

export const TD_BACKGROUND_COLOR_TEST = /^\s*<td bgcolor=[^>]*>[\s\S]*<\/td>\s*$/
export const TD_REG = /<td[^>]*>([\s\S]*?)<\/td>/

export function parseTdContent (content: string) {
  if (isNoEmpty(content)) {
    var items = content.match(TD_REG)
    if (items && items.length > 1) {
      return items[1]
    }
  }
  return ''
}

/**
 * 是否是内置的背景颜色文本
 * @param content
 */
export function isInnerBackgroundColorText (content: string) {
  return testStr(content, TD_BACKGROUND_COLOR_TEST)
}

export function buildBackgroundColorText (content: string, colorStr: string) {
  // 原先就有背景色
  // var rc = content
  // if (isInnerBackgroundColorText(content)) {
  //   rc = parseTdContent(content)
  // }
  // return '<td bgcolor="' + colorStr + '">' + rc + '</td>'
  var dom = htmlStrToSpanDom(content)
  // @ts-ignore
  dom.style.background=colorStr
  // @ts-ignore
  return dom?.outerHTML
}

/**
 * 字体设置
 * @param setting {color:"red"}
 */
export function fontSetting (setting) {
  // console.log(setting)
  replaceSelect(buildFontSettingText(getSelectText(),setting))
}

export function buildFontSettingText (content: string, setting) {
  var dom = htmlStrToSpanDom(content)
  if (setting) {
    for (var k in setting) {
      // @ts-ignore
      dom.style[k] = setting[k]
    }
  }
  // @ts-ignore
  return dom?.outerHTML
}
