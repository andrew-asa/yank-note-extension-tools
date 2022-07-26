import { registerPlugin } from '@yank-note/runtime-api'
import { EXTENSION_NAME } from '@/utils/base_constant'
import { toggleToolbar } from '@/utils/ghost_base_toolbar'
import store from '@/render/store'
export default function (){
  registerPlugin({
    name: EXTENSION_NAME + 'plugin-fast-toolbar',
    register: ctx => {
      const i18n = ctx.i18n.createI18n({
        en: {
          present: 'show toolbar',
        },
        'zh-CN': {
          present: '显示工具栏',
        }
      })
      ctx.statusBar.tapMenus(menus => {
        menus['status-bar-tool']?.list?.push(
          { type: 'separator', order: 999 },
          {
            id: EXTENSION_NAME + 'edit',
            type: 'normal',
            title: i18n.t('present'),
            checked: store.state.showToolbar,
            onClick: () => {
              toggleToolbar()
            }
          }
        )
      })
    }
  })
}

