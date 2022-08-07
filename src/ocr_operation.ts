import { registerPlugin } from '@yank-note/runtime-api'
import { EXTENSION_NAME } from '@/utils/base_constant'
import {
  clipboardOcr,
  clipboardTableOcr,
} from '@/utils/ghost_base_utils'

export default function () {
  registerPlugin({
    name: EXTENSION_NAME + 'plugin-ocr-operation',
    register: ctx => {
      // 添加状态栏菜单
      ctx.statusBar.tapMenus(menus => {
        menus[EXTENSION_NAME + 'plugin-ocr-operation'] = {
          id: EXTENSION_NAME + 'plugin-ocr-operation',
          position: 'left',
          title: 'OCR',
          list: [
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
          }]
        }
      })
    }
  })
}
