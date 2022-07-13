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
