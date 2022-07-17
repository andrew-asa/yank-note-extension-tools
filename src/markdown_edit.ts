import { EXTENSION_NAME } from '@/utils/base_constant'
import {
  createIdElement,
  existIdElement,
  getElementById,
  getParentById,
  getParentFirstChildById
} from '@/utils/base_dom'
import edit from '@/edit/edit'

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
      edit("#"+id)
    } else {
      console.log('install exist')
    }
  }
  installEditPanel()
}

export function triggerEditPanel () {

}
