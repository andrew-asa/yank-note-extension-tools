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
