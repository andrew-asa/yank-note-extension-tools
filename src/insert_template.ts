import { registerPlugin } from '@yank-note/runtime-api'
import { insert } from './utils/ghost_base_utils'
import dayjs from 'dayjs'

export default function () {
  registerPlugin({
    name: 'asa-enhance-insert-template',
    register: ctx => {
      // 添加状态栏菜单
      ctx.statusBar.tapMenus(menus => {
        menus['asa-enhance-insert-template'] = {
          id: 'asa-enhance-insert-template',
          position: 'left',
          title: '模板',
          list: [{
            id: 'asa-enhance-insert-template-new-line',
            type: 'normal',
            title: '换行符',
            onClick: () => {
              insert('<br>')
            }
          }, {
            id: 'asa-enhance-insert-template-YYYY-MM-DD-HH:mm:ss',
            type: 'normal',
            title: '当前时间',
            onClick: () => {
              insert(dayjs().format('YYYY-MM-DD HH:mm:ss'))
            }
          }, {
            id: 'asa-enhance-insert-template-week-day',
            type: 'normal',
            title: '星期几',
            onClick: () => {
              insert('星期' + '天一二三四五六'.charAt(new Date().getDay()))
            }
          }]
        }
      })
    }
  })
}

