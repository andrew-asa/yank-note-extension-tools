/**
 * 获取当前时间戳
 */
export function getCurrentTimestamp() {
    return new Date().getTime();
}

/**
 * 将时间戳转换为YYYY-MM-dd HH:mm:ss格式
 * @param value
 * @returns 
 */
export function formatDate(value) {
    var date = new Date(parseInt(value));
    var y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        h = date.getHours(),
        i = date.getMinutes(),
        s = date.getSeconds();
    if (m < 10) { m = '0' + m; }
    if (d < 10) { d = '0' + d; }
    if (h < 10) { h = '0' + h; }
    if (i < 10) { i = '0' + i; }
    if (s < 10) { s = '0' + s; }
    var t = y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
    return t;
}
