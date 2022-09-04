import { ctx } from '@yank-note/runtime-api'
import { isEqual, isNoEmpty, testStr } from '@/utils/StringUtils'
import { info, warning } from '@/utils/base_ui'

/**
 * 运行脚本
 * @param code
 */
export function runShellCode (code: string) {
  return ctx.action.getActionHandler('xterm.run')(code)
}

export function runCode (language: string, code: string, exit: boolean) {
  return ctx.action.getActionHandler('xterm.run-code')(language, code, exit)
}

export function runPaddleEnvCode (code, exit = true) {
  var shell = 'source ~/.bash_profile\n' +
    'conda activate  paddleenv\n' +
    'cd /Users/andrew_asa/Documents/code/github/andrew-asa/exec/python\n' +
    'result=`python - <<EOF\n' +
    code +
    'EOF` \n ' +
    'echo $result'
  if (exit) {
    shell = '\n' + 'exit'
  }
  return runShellCode(shell)
}

export function asynRunPaddleEnvCode (code, exit = true) {
  var shell = 'source ~/.bash_profile\n' +
    'conda activate  paddleenv\n' +
    'cd /Users/andrew_asa/Documents/code/github/andrew-asa/exec/python\n' +
    'result=`python - <<EOF\n' +
    code +
    'EOF` \n ' +
    'echo $result'
  if (exit) {
    shell = '\n' + 'exit'
  }
  return asynRunShellCode(shell)
}

export function runPaddleEnvWithParameter (code, p) {
  return runPaddleEnvCode(formatParameterStr(code, p))
}

/**
 * 添加引号 a = "a"
 * @param str
 */
export function addQuotationMarks (str) {
  return '"' + str + '"'
}

/**
 * a="${a}" b=${b} , {a:2,b:2} = > a=2 b=2
 * @param str
 * @param p
 */
export function formatParameterStr (str = '', p = {}) {
  if (str && p) {
    var r = str
    for (let key in p) {
      r = r.replaceAll('${' + key + '}', p[key])
    }
    return r
  }
  return ''
}

/**
 * 异步运行代码
 * @param code
 */
export function asynRunShellCode (code: string) {
  // ctx.api.runCode('sh', code).then(function (p) {
  //   success && success(p)
  // })
  var tc = '# --run-- \n' + code
  return ctx.api.runCode({
    cmd: 'bash',
    args: ['-c']
  }, tc, true)
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

/**
 * 设置选择范围
 * @param startLineNumber
 * @param startColumn
 * @param endLineNumber
 * @param endColumn
 */
export function setSelection (startLineNumber, startColumn, endLineNumber, endColumn) {
  var editor = getEditor()
  editor.setSelection({
    endColumn: endColumn,
    endLineNumber: endLineNumber,
    startColumn: startColumn,
    startLineNumber: startLineNumber
  })
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

/**
 * 获取指定行文本
 * @param lineStart
 * @param lineEnd
 */
export function getLinesContent (lineStart: number, lineEnd: number) {
  return ctx.editor.getLinesContent(lineStart, lineEnd)
}

/**
 * 获取当前光标后行文本内容
 */
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

/**
 * 后面添加行
 * @param text
 */
export function appendText (text: string) {
  var lc = getLineCount()
  insertLineAt('\n', lc)
  insertLineAt(text, lc + 1)
}

/**
 * 插入行
 * @param text
 * @param line
 */
export function insertLineAt (text: string, line: number) {
  ctx.editor.insertAt(createPosition(line, 1), text + '\n')
}

export function insertAt (line: number, column: number, text: string) {
  ctx.editor.insertAt(createPosition(line, column), text)
}

export function replaceLines (lineStart, lineEnd, text) {
  ctx.editor.replaceLines(lineStart, lineEnd, text)
}

/**
 * 替换行
 * @param lineNumber
 * @param text
 */
export function replaceLine (lineNumber, text) {
  ctx.editor.replaceLine(lineNumber, text)
}

/**
 * 删除行
 * @param lineNumber
 */
export function deleteLine (lineNumber: number) {
  ctx.editor.deleteLine(lineNumber)
}

/**
 * 删除多行
 * @param line
 * @param endLine
 */
export function deleteLines (line: number, endLine: number) {
  const editor = getEditor()
  editor.executeEdits('', [
    {
      range: new (getMonaco().Range)(line, 1, endLine + 1, 1),
      text: null
    }
  ])
  editor.setPosition(new (getMonaco().Position)(line, 1))
  editor.focus()
}

/**
 * 重复当前行
 * @param text
 */
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
  var selectionInfo = getSection()
  let startLine = selectionInfo?.startLineNumber || 0
  let endLine = selectionInfo?.endLineNumber || 0
  var lineNumber = startLine
  // 单行
  // @ts-ignore
  if (startLine > 1) {
    var column = getCurrentColumnNumber()
    var upNumber = lineNumber - 1
    var uS = getLineContent(upNumber)
    var tS = getLinesContent(startLine, endLine)
    replaceLines(upNumber, endLine, tS + '\n' + uS)
    // setPosition(upNumber, column)
    setSelection(startLine - 1, selectionInfo?.startColumn, endLine - 1, selectionInfo?.endColumn)
  }
}

/**
 * 行下移
 */
export function moveLineDown () {
  var selectionInfo = getSection()
  let startLine = selectionInfo?.startLineNumber || 0
  let endLine = selectionInfo?.endLineNumber || 0
  var lineCount = getLineCount()
  if (endLine < lineCount) {
    var downNumber = endLine + 1
    var dS = getLineContent(downNumber)
    var tS = getLinesContent(startLine, endLine)
    replaceLines(startLine, downNumber, dS + '\n' + tS)
    setSelection(startLine + 1, selectionInfo?.startColumn, endLine + 1, selectionInfo?.endColumn)
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
 * 获取选中的行范围
 */
export function getSectionLineRange () {
  var s = getSection()
  var startLineNumber = s?.startLineNumber || 1
  var endLineNumber = s?.endLineNumber || 1
  return {
    startLineNumber,
    endLineNumber
  }
}

export function getViewDom () {
  // @ts-ignore
  return ctx.view.getViewDom()
}

/**
 * 改变url参数
 * @param url
 * @param arg
 * @param arg_val
 */
export function changeURLArg (url, arg, arg_val) {
  var pattern = arg + '=([^&]*)'
  var replaceText = arg + '=' + arg_val
  if (url.match(pattern)) {
    var tmp = '/(' + arg + '=)([^&]*)/gi'
    tmp = url.replace(eval(tmp), replaceText)
    return tmp
  } else {
    if (url.match('[\?]')) {
      return url + '&' + replaceText
    } else {
      return url + '?' + replaceText
    }
  }
}

/**
 * 刷新本地图片
 * @param originSrc
 */
export function refreshLocalImg (originSrc: string) {
  var imgDoms = getImgDom()
  if (imgDoms && imgDoms.length) {
    for (var i = 0; i < imgDoms.length; i++) {
      var img = imgDoms[i]
      var imgAttrSrc = img.getAttribute('origin-src') || ''
      var local = img.getAttribute('local-image') || false
      if (local && isEqual(imgAttrSrc, originSrc)) {
        var src = img.getAttribute('src') || ''
        if (src) {
          var rt = new Date().getTime()
          src = changeURLArg(src, '_r_time', rt)
          img.setAttribute('src', src)
        }
      }
    }
  }
}

/**
 * 刷新选中行的本地图片
 */
export function refreshSelectLocalImgs () {

  travelSelectionLine(function (i) {
    console.log("Refresh Select Local Img Line " +i)
    var links = getLineImgLinks(i)
    links.forEach(function (link) {
      refreshLocalImg(link)
    })
  })

}

export function travelSelectionLine (fun) {
  var {
    startLineNumber,
    endLineNumber
  } = getSectionLineRange()
  for (var i = startLineNumber; i <= endLineNumber; i++) {
    fun(i)
  }
}

export function getImgDom () {
  // @ts-ignore
  return ctx.view.getViewDom().querySelectorAll('img')
}

/**
 * 获取当前文档的所有本地图片
 */
export function getLocalImgPaths () {
  var imgList = getImgDom()
  var result = []
  for (let i = 0; i < imgList.length; i++) {
    var img = imgList[i]
    var imgAttrSrc = img.getAttribute('origin-src') || ''
    var local = img.getAttribute('local-image') || false
    if (isNoEmpty(imgAttrSrc) && local) {
      // @ts-ignore
      result.push(resolveCurrentImgPath(imgAttrSrc))
    }
  }
  return result
}

/**
 * src内容
 * @param content
 * @param src
 */
export function buildMdSrcContent (content, src) {
  return '![' + content + '](' + src + ')'
}

/**
 * 获取选中文本的所有本地图片
 */
export function getSelectionImgPaths () {
  var s = getSection()
  var startLineNumber = s?.startLineNumber || 0
  var endLineNumber = s?.endLineNumber || 1
  var ret = []
  for (var i = startLineNumber; i <= endLineNumber; i++) {
    ret = ret.concat(getLineImgPaths(i))
  }
  return ret
}

/**
 * 获取指定行的图片地址
 * @param line
 */
export function getLineImgPaths (line: number) {
  var content = getLineContent(line)
  var links = parseImgLink(content)
  var currentFile = getCurrentFile()
  var ret = []
  // var rpStr = "";
  // @ts-ignore
  if (links.length > 0 && currentFile.path) {
    links.forEach((item) => {
      var link = item[2]
      var linkPath = resolveCurrentImgPath(link)
      // @ts-ignore
      ret.push(linkPath)
    })
  }
  return ret
}

/**
 * 获取图片链接
 * @param line
 */
export function getLineImgLinks (line: number) {
  var content = getLineContent(line)
  var links = parseImgLink(content)
  var ret = []
  // @ts-ignore
  if (links.length >0) {
    links.forEach((item) => {
      var link = item[2]
      ret.push(link)
    })
  }
  return ret
}

export function resolveCurrentImgPath (link) {
  var currentFile = getCurrentFile()
  // @ts-ignore
  var dir = dirname(currentFile.path)
  return resolve(dir, link)
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
 * 删除文档
 * @param doc
 */
export function deleteDoc (doc) {
  ctx.doc.deleteDoc(doc)
}

/**
 * 直接删除文件，没有
 * @param doc
 */
export async function deleteFile (doc) {
  try {
    await ctx.api.deleteFile(doc)
  } catch (error: any) {
    warning(error.message)
    throw error
  }
  refreshTree()
}

/**
 * 文件名
 * @param p
 */
export function basename (p) {
  return ctx.utils.path.basename(p)
}

/**
 * 目录名
 * @param p
 */
export function dirname (p) {
  return ctx.utils.path.dirname(p)
}

/**
 * 刷新目录树
 */
export function refreshTree () {
  ctx.tree.refreshTree()
}

/**
 * 路径拼接
 * @param dir
 * @param name
 */
export function resolve (dir, name) {
  return ctx.utils.path.resolve(dir, name)
}

/**
 * 路径拼接
 * @param paths
 */
export function join (...paths: string[]) {
  return ctx.utils.path.join(...paths)
}

/**
 * 是否是本地文档的图片
 * @param link
 * @returns {boolean}
 */
export function isOutLocationImage (link) {
  return link && link.startsWith('./FILES/')
}

export function createLinkImgFileDoc () {

}

/**
 * 删除外链链接
 * @param lineNumber  第几行
 * @param force   是否强制删除没有提示
 */
export function deleteOutLinkLocationImage (lineNumber = -1, force = false) {
  var ln = lineNumber == -1 ? getCurrentLineNumber() : lineNumber
  var content = getLineContent(ln)
  var links = parseImgLink(content)
  var currentFile = getCurrentFile()
  // @ts-ignore
  if (links.length > 0 && currentFile.path) {
    // @ts-ignore
    var dir = dirname(currentFile.path)
    links.forEach((item) => {
      var oStr = item[0]
      var link = item[2]
      var linkPath = resolve(dir, link)
      var name = basename(link)
      var doc = {
        name: name,
        path: linkPath,
        // @ts-ignore
        repo: currentFile.repo,
        type: 'file'
      }
      force ? deleteFile(doc) : deleteDoc(doc)
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
    fn(...paras)
  } catch (e) {

  }
}

/**
 * 随机字符串
 * @param len
 */
export function randomString (len: number) {
  len = len || 32
  var t = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678',
    a = t.length,
    n = ''
  for (var i = 0; i < len; i++) n += t.charAt(Math.floor(Math.random() * a))
  return n
}

export const HEADING_REG = /^#{1,6}\s/

export function getHeadingLevel (text: string) {
  if (isNoEmpty(text)) {
    let r = text.match(HEADING_REG)
    if (r != null && r.length > 0) {
      let ht = r[0]
      return ht.trim().length
    }
  }
  return 0
}

/**
 * 后方增加同级目录
 */
export function addPeerDirectoryAfter () {
  let ln = getCurrentLineNumber()
  let text = getCurrentLineContent()
  if (testStr(text, HEADING_REG)) {
    let currentLevel = getHeadingLevel(text)
    let endLine = getLineCount()
    let insertLine = ln + 1
    for (; insertLine <= endLine; insertLine++) {
      let ct = getLineContent(insertLine)
      let level = getHeadingLevel(ct)
      if (level > 0 && level <= currentLevel) {
        break
      }
    }
    addHeading(currentLevel, insertLine)
  }
}

/**
 * 添加标题行
 * @param level
 * @param lineNumber
 */
export function addHeading (level: number, lineNumber: number) {
  if (level > 0) {
    let insertText = '#'.repeat(level) + ' '
    // insertLineAt(insertText, lineNumber)
    let lc = getLineCount()
    if (lineNumber >= lc) {
      // 需要处理
      replaceLine(lc, getLineContent(lc) + '\n' + insertText)
    } else if (lineNumber < 0) {
      insertLineAt(insertText + '\n', 1)
    } else {
      insertLineAt(insertText, lineNumber)
    }
    setPosition(lineNumber, insertText.length + 1)
  }
}

/**
 * 前方增加同级目录
 */
export function addPeerDirectoryBefore () {
  let ln = getCurrentLineNumber()
  let text = getCurrentLineContent()
  if (testStr(text, HEADING_REG)) {
    let currentLevel = getHeadingLevel(text)
    addHeading(currentLevel, ln)
  }
}

/**
 * 删除当前目录
 */
export function removeCurrentDirectory () {
  let range = getCurrentDirectoryRange()
  deleteLines(range.startLine, range.endLine)
}

/**
 * 获取当前目录范围
 */
export function getCurrentDirectoryRange () {
  return getDirectoryRange(getCurrentLineNumber())
}

/**
 * 获取当前目录范围
 */
export function getDirectoryRange (line: number) {
  let startLine = line < 1 ? 1 : line
  let text = getLineContent(line)
  let endLine = startLine
  let currentLevel = getHeadingLevel(text)
  if (currentLevel != 0) {
    let lineCount = getLineCount()
    for (let i = startLine + 1; i <= lineCount; i++) {
      let ct = getLineContent(i)
      let level = getHeadingLevel(ct)
      if (level > 0 && level <= currentLevel) {
        endLine = i - 1
        break
      } else {
        endLine = i
      }
    }
  }
  return {
    startLine: startLine,
    endLine: endLine
  }
}

export function createSplicingOfMovieLinesScript (img_folder, img_list, out, top_padding, bottom_padding) {
  var shell = 'from python_tools.img.screenshots.join_screenshots import Screenshot_Join\n' +
    'img_folder = "${img_folder}"\n' +
    'img_list = "${img_list}"\n' +
    'out = "${out}"\n' +
    'top_padding = "${top_padding}"\n' +
    'bottom_padding = "${bottom_padding}"\n' +
    'sj = Screenshot_Join()\n' +
    'sj.join(img_folder=img_folder,img_list=img_list, out=out, top_padding=top_padding, bottom_padding=bottom_padding)\n'
  return formatParameterStr(shell, splicingOfMovieLinesParameter(img_folder, img_list, out, top_padding, bottom_padding))
}

export function splicingOfMovieLines (img_folder, img_list, out, top_padding, bottom_padding) {
  var shell = createSplicingOfMovieLinesScript(img_folder, img_list, out, top_padding, bottom_padding)
  return runPaddleEnvCode(shell, false)
}

export function splicingOfMovieLinesParameter (img_folder, img_list, out, top_padding, bottom_padding) {
  return {
    img_folder: img_folder,
    img_list: img_list,
    out: out,
    top_padding: top_padding,
    bottom_padding: bottom_padding
  }
}
