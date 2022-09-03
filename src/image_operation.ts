import { registerPlugin } from '@yank-note/runtime-api'
import { EXTENSION_NAME } from '@/utils/base_constant'
import {
  addQuotationMarks,
  deleteOutLinkLocationImage,
  runPaddleEnvCode,
  runPaddleEnvWithParameter
} from '@/utils/ghost_base_utils'

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
function splicingOfMovieLines () {

}

/**
 * 截图笔记ocr
 */
function screenshotNotesOcr () {

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
              deleteOutLinkLocationImage()
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
              title: '电影台词拼接',
              onClick: () => {
                splicingOfMovieLines()
              }
            }, {
              id: EXTENSION_NAME + 'screenshot-notes-ocr-md',
              type: 'normal',
              title: '截图笔记OCR',
              onClick: () => {
                screenshotNotesOcr()
              }
            }]
        }
      })
    }
  })
}
