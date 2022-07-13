import { EXTENSION_NAME } from '@/utils/base_constant'
import { jQuery } from 'jquery'
import {
  createIdElement,
  existIdElement,
  getElementById,
  getParentById,
  getParentFirstChildById
} from '@/utils/base_dom'

export default function install_editPane () {
  const id = EXTENSION_NAME + '-markdown_edit'
  const mdContainerId = 'editor'
  let isInstall = false

  function installEditPanel () {
    if (!existIdElement(id)) {
      var parentElement = getParentById(mdContainerId)
      // @ts-ignore
      var theFirstChild = getParentFirstChildById(mdContainerId)
      var content = createIdElement('div', id)
      parentElement?.insertBefore(content, theFirstChild)
      isInstall = true
      console.log('install ' + id)
    } else {
      console.log('install exist')
    }
  }
  installEditPanel()

  // jQuery('#' + id)
  // const $edit = $('#' + id)
  // if ($edit.length > 0) {
  //   console.log('edit is exist')
  // } else {
  //   if ($edit.is(':hidden')) {
  //     console.log('edit is hidden show it')
  //     $edit.show()
  //   } else {
  //     console.log('edit no exist create it')
  //     $('#editor').parent().prepend('<div id =' + id + '> 测试<div>')
  //   }
  // }
  // ctx.editor.whenEditorReady().then(({ editor }) => {
  //   editor.addAction({
  //     id: id,
  //     contextMenuGroupId: 'modification',
  //     label: i18n.t('asa-enhance-edit') + ' (编辑)',
  //     run: edit,
  //   })
  // })
}

export function triggerEditPanel () {

}
