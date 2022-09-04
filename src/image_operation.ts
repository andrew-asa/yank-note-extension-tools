import { registerPlugin } from '@yank-note/runtime-api'
import { EXTENSION_NAME } from '@/utils/base_constant'
import {
  addQuotationMarks, appendText, buildMdSrcContent,
  deleteOutLinkLocationImage,
  dirname, getCurrentFile,
  getCurrentRepo,
  getLocalImgPaths,
  getSection, getSectionLineRange,
  getSelectionImgPaths,
  join, randomString, refreshSelectLocalImgs, refreshTree,
  resolve,
  runPaddleEnvCode,
  runPaddleEnvWithParameter,
  splicingOfMovieLines
} from '@/utils/ghost_base_utils'
import { info } from '@/utils/base_ui'

/**
 * 粘贴板图片ocr
 */
function clipboardOcr () {
  var shell =
    'from python_tools.ocr.img_ocr import ImageOcr\n' +
    'ocr = ImageOcr()\n' +
    'ocr.ocr_clipboard_img()\n'
  runPaddleEnvCode(shell)
}

/**
 * 表格ocr识别
 */
function clipboardTableOcr () {
  var shell =
    'from python_tools.ocr.img_ocr import ImageOcr\n' +
    'from python_tools.utils.ClipboardUtils import ClipboardUtils\n' +
    'from python_tools.utils.StringUtils import StringUtils\n' +
    'ocr = ImageOcr()\n' +
    'content = ocr.ocr_clipboard_img(print_in_console=False,copy_to_clipboard=False,colSequence=" | ",rowSequence=" |\\n| ")\n' +
    'content = "| " + content + " |"\n' +
    'ClipboardUtils.copyToClipboard(content)\n' +
    'print("--ocr table result --")\n' +
    'print(content)\n' +
    'print("--ocr table result --")\n'
  runPaddleEnvCode(shell)
}

/**
 * 电影台词拼接
 */
function splicingOfMovieLine (all = true) {
  var imgs = []
  // @ts-ignore
  if (all) {
    imgs = getLocalImgPaths()
  } else {
    imgs = getSelectionImgPaths()
  }
  if (imgs.length > 0) {
    imgs = removeAb(imgs)
    // @ts-ignore
    var repPath = getCurrentRepo().path
    // @ts-ignore
    var fileDir = dirname(getCurrentFile().path)
    var fn = randomString(4) + '_concat_all.png'
    var concatName = join(repPath, fileDir, fn)
    // @ts-ignore
    splicingOfMovieLines(repPath, imgs.join(';'), concatName, 5, 2)
    appendText(buildMdSrcContent('IMG', './' + fn))
  }

}

function removeAb (imgs) {
  var ret = []
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i]
    if (img.startsWith('/')) {
      // @ts-ignore
      ret.push(img.substring(1))
    }
  }
  return ret
}



/**
 * 删除选中的图片外链以及本地图片
 */
function deleteOutLinkLocationImages () {
  var {
    startLineNumber,
    endLineNumber
  } = getSectionLineRange()
  if (startLineNumber == endLineNumber) {
    deleteOutLinkLocationImage()
  } else if (endLineNumber > startLineNumber) {
    for (var i = endLineNumber; i >= startLineNumber; i--) {
      deleteOutLinkLocationImage(i, true)
    }
  }
}

/**
 * 刷新图片
 */
function refreshImg () {
  refreshSelectLocalImgs()
}

export default function () {
  registerPlugin({
    name: EXTENSION_NAME + 'plugin-ocr-operation',
    register: ctx => {
      // 添加状态栏菜单
      ctx.statusBar.tapMenus(menus => {
        menus[EXTENSION_NAME + 'plugin-ocr-operation'] = {
          id: EXTENSION_NAME + 'plugin-ocr-operation',
          position: 'left',
          title: '图片',
          list: [{
            id: EXTENSION_NAME + 'plugin-delete-out-link-location-image',
            type: 'normal',
            title: '删除外链图片',
            onClick: () => {
              deleteOutLinkLocationImages()
            }
          },
            {
              id: EXTENSION_NAME + 'paste-img-orc',
              type: 'normal',
              title: '粘贴板图片OCR',
              onClick: () => {
                clipboardOcr()
              }
            }, {
              id: EXTENSION_NAME + 'paste-img-table-ocr-md',
              type: 'normal',
              title: '表格OCR',
              onClick: () => {
                clipboardTableOcr()
              }
            }, {
              id: EXTENSION_NAME + 'splicing-movie-line-md',
              type: 'normal',
              title: '选中图片台词拼接',
              onClick: () => {
                splicingOfMovieLine(false)
              }
            }, {
              id: EXTENSION_NAME + 'file-splicing-movie-line-md',
              type: 'normal',
              title: '所有图片台词拼接',
              onClick: () => {
                splicingOfMovieLine()
              }
            }, {
              id: EXTENSION_NAME + 'screenshot-notes-ocr-md',
              type: 'normal',
              title: '刷新选中图片',
              onClick: () => {
                refreshImg()
              }
            }]
        }
      })
    }
  })
}
