import { registerPlugin } from '@yank-note/runtime-api'

const extensionName = __EXTENSION_ID__
export default function () {
  registerPlugin({
    name: extensionName,
    register (ctx) {
      const i18n = ctx.i18n.createI18n({
        en: {
          'asa-enhance-create-txt': 'create txt',
        },
        'zh-CN': {
          'asa-enhance-create-txt': '生成TXT文件',
        }
      })

      ctx.tree.tapContextMenus((items, node) => {
        const createTxt = () => {
          const currentRepo = ctx.store.state.currentRepo
          const path = currentRepo ? ctx.utils.path.join(currentRepo.path, node.path) : ''
          console.log(path)
          // runShellCode('ls')
        }

        if (node.type === 'dir' || node.path === '/') {
          items.push(
            { type: 'separator' },
            {
              id: extensionName + '-asa-enhance-create-txt',
              label: i18n.t('asa-enhance-create-txt'),
              onClick: createTxt
            }
          )
        }
        return items
      })
    }
  })
}
