import { nodeModule } from '@yank-note/runtime-api/types/types/renderer/support/env'

export function getElementById (id: string): HTMLElement | null {
  return document.getElementById(id)
}

export function getParentById (id: string) {
  var el = getElementById(id)
  if (el) {
    return el.parentNode
  }
  return null
}

export function getParentFirstChildById (id: string) {
  var p = getParentById(id)
  if (p) {
    return p.firstChild
  }
  return null
}

export function createIdElement (tag: string, id: string) {
  var newNode = document.createElement(tag)
  newNode.setAttribute('id', id)
  return newNode
}

export function existIdElement (id: string) {
  return getElementById(id) != null
}

// export function getChildrenAttr (select,attr) {
//   var childrens = $(select).children()
//   var cl = childrens.length
//   var ret = []
//   for (let i = 0; i < cl; i++) {
//     var c = childrens[i]
//     ret.push($(c).attr(attr))
//   }
//   return ret
// }

export function htmlStrToSpanDom (str) {
  let placeholder = document.createElement('div')
  placeholder.innerHTML = str
  // 文本node直接用一个span包装
  // if (placeholder?.firstChild?.nodeType == 3) {
  if (haveNoStyleAttr(placeholder?.firstChild)) {
    let t = document.createElement('span')
    t.innerHTML = str
    return t
  } else {
    return placeholder.firstChild
  }
}

export function haveStyleAttr (node) {
  return node ? (node.style ? true : false) : false
}

export function haveNoStyleAttr (node) {
  return !haveStyleAttr(node)
}
