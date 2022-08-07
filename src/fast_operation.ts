import { registerPlugin } from '@yank-note/runtime-api'
import { EXTENSION_NAME } from '@/utils/base_constant'
import {
  addPeerDirectoryAfter, addPeerDirectoryBefore,
  deleteAfter,
  deleteOutLinkLocationImage,
  duplicateLine, moveLineDown, moveLineUp
} from '@/utils/ghost_base_utils'

export default function () {
  registerPlugin({
    name: EXTENSION_NAME + 'plugin-fast-operation',
    register: ctx => {
      // 添加状态栏菜单
      ctx.statusBar.tapMenus(menus => {
        menus[EXTENSION_NAME + 'plugin-fast-operation'] = {
          id: EXTENSION_NAME + 'plugin-fast-operation',
          position: 'left',
          title: '快捷操作',
          list: [{
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
          },
            {
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
            }, {
              id: EXTENSION_NAME + 'plugin-fast-operation-up-add-peer-directory-after',
              type: 'normal',
              title: '后方同级目录',
              onClick: () => {
                addPeerDirectoryAfter()
              }
            }, {
              id: EXTENSION_NAME + 'plugin-fast-operation-up-add-peer-directory-before',
              type: 'normal',
              title: '前方同级目录',
              onClick: () => {
                addPeerDirectoryBefore()
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
