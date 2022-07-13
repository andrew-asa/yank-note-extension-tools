import { registerPlugin } from '@yank-note/runtime-api'
import { EXTENSION_NAME } from '@/utils/base_constant'
import {
  clipboardOcr,
  clipboardTableOcr,
  deleteAfter,
  deleteOutLinkLocationImage,
  duplicateLine, moveLineDown, moveLineUp
} from '@/utils/ghost_base_utils'
import { triggerEditPanel } from '@/markdown_edit'

export default function () {
  registerPlugin({
    name: EXTENSION_NAME + 'plugin-fast-operation',
    register: ctx => {
      // 添加状态栏菜单
      ctx.statusBar.tapMenus(menus => {
        menus[EXTENSION_NAME+ 'plugin-fast-operation'] = {
          id: EXTENSION_NAME + 'plugin-fast-operation',
          position: 'left',
          title: '编辑',
          list: [{
            id: EXTENSION_NAME + 'edit',
            type: 'normal',
            title: '编辑',
            onClick: triggerEditPanel
          },{
            id: EXTENSION_NAME + 'plugin-delete-after',
            type: 'normal',
            title: '删除光标后的行',
            onClick: () => {
              deleteAfter()
            }
          }, {
            id: EXTENSION_NAME + 'plugin-delete-out-link-location-image',
            type: 'normal',
            title: '删除外链图片',
            onClick: () => {
              deleteOutLinkLocationImage()
            }
          }, {
            id: EXTENSION_NAME + 'plugin-fast-orc',
            type: 'normal',
            title: '粘贴板图片OCR',
            onClick: () => {
              clipboardOcr()
            }
          }, {
            id: EXTENSION_NAME + 'plugin-fast-table-ocr-md',
            type: 'normal',
            title: '表格OCR',
            onClick: () => {
              clipboardTableOcr()
            }
          }, {
            id: EXTENSION_NAME + 'plugin-fast-operation-duplicate-line',
            type: 'normal',
            title: '复制一行',
            subTitle: ctx.command.getKeysLabel([ctx.command.CtrlCmd, 'd']),
            onClick: () => {
              duplicateLine()
            }
          }, {
            id: EXTENSION_NAME + 'plugin-fast-operation-up-line',
            type: 'normal',
            title: '行上移',
            subTitle: ctx.command.getKeysLabel([ctx.command.CtrlCmd, ctx.command.Shift, 'u']),
            onClick: () => {
              moveLineUp()
            }
          }, {
            id: EXTENSION_NAME + 'plugin-fast-operation-up-line',
            type: 'normal',
            title: '行下移',
            subTitle: ctx.command.getKeysLabel([ctx.command.CtrlCmd, ctx.command.Shift, 'd']),
            onClick: () => {
              moveLineDown()
            }
          }]
        }
      })
      ctx.action.registerAction({
        name: EXTENSION_NAME + 'plugin-fast-operation-duplicate-line',
        keys: [ctx.command.CtrlCmd, 'd'],
        handler: () => {
          duplicateLine()
        }
      })
      ctx.action.registerAction({
        name: EXTENSION_NAME + 'plugin-fast-operation-line-up',
        keys: [ctx.command.CtrlCmd, ctx.command.Shift, 'u'],
        handler: () => {
          moveLineUp()
        }
      })
      ctx.action.registerAction({
        name: EXTENSION_NAME + 'plugin-fast-operation-line-down',
        keys: [ctx.command.CtrlCmd, ctx.command.Shift, 'd'],
        handler: () => {
          moveLineDown()
        }
      })
    }
  })
}
