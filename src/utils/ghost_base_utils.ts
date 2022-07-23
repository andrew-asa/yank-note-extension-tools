import { ctx } from '@yank-note/runtime-api'

/**
 * 运行脚本
 * @param code
 */
export function runShellCode (code: string) {
  ctx.action.getActionHandler('xterm.run')(code)
}

export function runCode (language: string, code: string, exit: boolean) {
  ctx.action.getActionHandler('xterm.run-code')(language, code, exit)
}

/**
 * 异步运行代码
 * @param code
 * @param success
 */
export function asynRunShellCode (code: string, success: Function) {
  ctx.api.runCode('sh', code).then(function (p) {
    success && success(p)
  })
}

export function getEditor () {
  return ctx.editor.getEditor()
}

export function getMonaco () {
  return ctx.editor.getMonaco()
}

export function setPosition (line: number, column: number) {
  var editor = getEditor()
  var monaco = getMonaco()
  editor.setPosition(new monaco.Position(line, column))
  editor.focus()
}

export function createPosition (line, column) {
  var monaco = getMonaco()
  return new monaco.Position(line, column)
}

export function getPosition () {
  return ctx.editor.getEditor().getPosition()
}

export function getCurrentLineNumber () {
  // @ts-ignore
  return ctx.editor.getEditor().getPosition().lineNumber
}

export function getCurrentColumnNumber () {
  // @ts-ignore
  return ctx.editor.getEditor().getPosition().column
}

/**
 * 获取当前文档的行数
 */
export function getLineCount () {
  // @ts-ignore
  return ctx.editor.getEditor().getModel().getLineCount()
}

/**
 * 获取指定行的文本内容
 * @param lineNumber
 */
export function getLineContent (lineNumber: number) {
  return ctx.editor.getLineContent(lineNumber)
}

export function getCurrentLineContent () {
  return getLineContent(getCurrentLineNumber())
}

/**
 * 获取当前仓库
 */
export function getCurrentRepo () {
  return ctx.storage.get('currentRepo')
}

export function getCurrentFile () {
  return ctx.storage.get('currentFile')
}

/**
 * 插入字符
 * @param text
 */
export function insert (text: string) {
  ctx.editor.insert(text)
}

export function insertAt (line: number, column: number, text: string) {
  ctx.editor.insertAt(createPosition(line, column), text)
}

export function replaceLines (lineStart, lineEnd, text) {
  ctx.editor.replaceLines(lineStart, lineEnd, text)
}

export function replaceLine (lineNumber, text) {
  ctx.editor.replaceLine(lineNumber, text)
}

export function replaceCurrentLine (text) {
  var ln = getCurrentLineNumber()
  replaceLine(ln, text)
}

/**
 * 删除光标起的行
 */
export function deleteAfter () {
  var startLineNumber = getCurrentLineNumber()
  var endLineNumber = getLineCount()
  replaceLines(startLineNumber, endLineNumber, null)
}

/**
 * 重复行
 */
export function duplicateLine () {
  var lineNumber = getCurrentLineNumber()
  var content = getLineContent(lineNumber)
  if (content) {
    ctx.editor.replaceLine(lineNumber, content + '\n' + content)
  }
}

/**
 * 行上移
 */
export function moveLineUp () {
  var lineNumber = getCurrentLineNumber()
  if (lineNumber > 1) {
    var column = getCurrentColumnNumber()
    var upNumber = lineNumber - 1
    var uS = getLineContent(upNumber)
    var tS = getLineContent(lineNumber)
    replaceLines(upNumber, lineNumber, tS + '\n' + uS)
    setPosition(upNumber, column)
  }
}

/**
 * 行下移
 */
export function moveLineDown () {
  var lineNumber = getCurrentLineNumber()
  var lineCount = getLineCount()
  if (lineNumber < lineCount) {
    var downNumber = lineNumber + 1
    var dS = getLineContent(downNumber)
    var tS = getLineContent(lineNumber)
    replaceLines(lineNumber, downNumber, dS + '\n' + tS)
  }
}

/**
 * 是否是选中一片文字
 */
export function isSelectText () {
  return ctx.editor.getSelectionInfo().selectedLength > 0
}

/**
 * 获取选中的信息
 */
export function getSelectionInfo () {
  return ctx.editor.getSelectionInfo()
}

/**
 * 获取选中的信息
 */
export function getSection () {
  return ctx.editor.getEditor().getSelection()
}

/**
 * 替换选中的文档
 * @param text
 */
export function replaceSelect (text: string) {
  const selection = ctx.editor.getEditor().getSelection()!
  ctx.editor.getEditor().executeEdits('', [
    {
      range: new (ctx.editor.getMonaco().Range)(selection.startLineNumber, selection.startColumn, selection.endLineNumber, selection.endColumn),
      text,
      forceMoveMarkers: true
    }
  ])
  ctx.editor.getEditor().focus()
}

/**
 * 获取选中的内容
 */
export function getSelectText () {
  const selection = ctx.editor.getEditor().getSelection()
  // @ts-ignore
  return ctx.editor.getEditor().getModel().getValueInRange(selection)
}

/**
 * 粘贴板图片ocr
 */
export function clipboardOcr () {
  var sell = 'source ~/.bash_profile\n' +
    'conda activate  paddleenv\n' +
    'cd /Users/andrew_asa/Documents/code/github/andrew-asa/exec/python\n' +
    'result=`python - <<EOF\n' +
    'from python_tools.ocr.img_ocr import ImageOcr\n' +
    'ocr = ImageOcr()\n' +
    'ocr.ocr_clipboard_img()\n' +
    'EOF` \n ' +
    'echo $result \n' +
    'exit'
  runShellCode(sell)
}

/**
 * 表格ocr识别
 */
export function clipboardTableOcr () {
  var sell = 'source ~/.bash_profile\n' +
    'conda activate  paddleenv\n' +
    'cd /Users/andrew_asa/Documents/code/github/andrew-asa/exec/python\n' +
    'result=`python - <<EOF\n' +
    'from python_tools.ocr.img_ocr import ImageOcr\n' +
    'from python_tools.utils.ClipboardUtils import ClipboardUtils\n' +
    'from python_tools.utils.StringUtils import StringUtils\n' +
    'ocr = ImageOcr()\n' +
    'content = ocr.ocr_clipboard_img(print_in_console=False,copy_to_clipboard=False,colSequence=" | ",rowSequence=" |\\n| ")\n' +
    'content = "| " + content + " |"\n' +
    'ClipboardUtils.copyToClipboard(content)\n' +
    'print("--ocr result --")\n' +
    'print(content)\n' +
    'print("--ocr result --")\n' +
    'EOF` \n ' +
    'echo $result \n' +
    'exit'
  // 'exit'
  runShellCode(sell)
  // asynRunShellCode(sell,function (echo){
  //     ctx.ui.useToast().show('info', 'OCR识别完成', 2000)
  //     // console.log(echo)
  // });
}

/**
 * 删除文档
 * @param doc
 */
export function deleteDoc (doc) {
  ctx.doc.deleteDoc(doc)
}

export function basename (p) {
  return ctx.utils.path.basename(p)
}

export function dirname (p) {
  return ctx.utils.path.dirname(p)
}

export function resolve (dir, name) {
  return ctx.utils.path.resolve(dir, name)
}

/**
 * 是否是本地文档的图片
 * @param link
 * @returns {boolean}
 */
export function isOutLocationImage (link) {
  return link && link.startsWith('./FILES/')
}

// 删除外链图片
export function deleteOutLinkLocationImage () {
  var content = getCurrentLineContent()
  var links = parseImgLink(content)
  var self = this
  var currentFile = getCurrentFile()
  // var rpStr = "";
  // @ts-ignore
  if (links.length > 0 && currentFile.path) {
    // @ts-ignore
    var dir = dirname(currentFile.path)
    var ln = getCurrentLineNumber()
    links.forEach((item) => {
      var oStr = item[0]
      var link = item[2]
      var linkPath = resolve(dir, link)
      var name = basename(link)
      deleteDoc({
        name: name,
        path: linkPath,
        // @ts-ignore
        repo: currentFile.repo,
        type: 'file'
      })
      content = content.replace(oStr, '')
      console.log('delete' + oStr + '-->' + link + '-->' + linkPath)
    })
    replaceLine(ln, content)
  }
}

export function containLink (link) {
  var r = /\!\[(.*?)\]\(.+\)/g
  return link && r.test(link)
}

export function parseImgLink (link) {
  const pattern = /!\[(.*?)\]\((.*?)\)/mg
  let matcher
  var ret = []
  while ((matcher = pattern.exec(link)) !== null) {
    // @ts-ignore
    ret.push(matcher)
  }
  return ret
}

export function createI18n (key: string, cn: string, en: string) {
  const enI = {}
  enI[key] = en
  const cnI = {}
  cnI[key] = cn
  ctx.i18n.createI18n({
    en: enI,
    'zh-CN': cnI
  })
}

/**
 * resize
 */
export function global_resize () {
  try {

  } catch (e) {

  }
}

/**
 * 执行错误了也要忽略
 * @param fn
 * @param paras
 */
export function run_no_exception (fn: Function, ...paras) {
  try {
    fn(paras)
  } catch (e){

  }
}
