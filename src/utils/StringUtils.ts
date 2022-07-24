/**
 * 字符串是否为空
 * @param str
 */

export function isEmpty (str: string | undefined | null) {
  return str == null || str == undefined || str.length == 0
}

/**
 * 字符串非空
 * @param str
 */
export function isNoEmpty (str: string) {
  return !isEmpty(str)
}

/**
 * str字符串是否start开始
 * @param str
 * @param start
 */
export function startWith (str: string, start: string) {
  if (str == null && start == null) {
    return true
  }
  if (isNoEmpty(str) && isNoEmpty(start)) {
    return str.startsWith(start)
  }
  return false
}

/**
 * 颜色正则
 */
// #开头，后面是数字和a-f的字符（大写或小写），这个值是6位或3位。
export const COLOR_REG = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/
export const COLOR_REG_STR = '^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$'
/**
 * 两位数的字体大小正则
 */
export const FONT_SIZE_PX_REG = /^[1-9]?[0-9]?(px|PX)?$/
/**
 * 非负整数
 */
export const NO_NEGATIVE_INT_REG = /^[0-9]+$/

/**
 * 字符串判断是否符合某个正则表达式
 * @param str
 * @param regStr
 */
export function testStr (str: string, regStr: string | RegExp) {
  let reg: RegExp
  if (regStr instanceof RegExp) {
    reg = regStr
  } else {
    reg = new RegExp(regStr)
  }
  if (str != null && str != undefined) {
    return reg.test(str)
  }
  return false
}

export function isNoNegativeInteger (s:string) {
  return testStr(s, NO_NEGATIVE_INT_REG)
}
