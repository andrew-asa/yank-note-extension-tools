import dayjs from "dayjs";

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

/**
 * 
 * @returns 星期几
 */
export function getDay() {
    return '星期' + '天一二三四五六'.charAt(new Date().getDay())
}
/**
 * 昨天
 * @param 格式
 * @returns 
 */
export function yestoday(format = "YYYY-MM-DD") {

    return dayjs().subtract(1, 'days').format(format)
}

/**
 * 明天
 * @param p 格式
 * @returns 
 */
export function tomorrow(format = "YYYY-MM-DD") {
    return dayjs().add(1, 'days').format(format)
}

/**
 * 获取当前时间
 */
export function getDateString(format = "YYYY-MM-DD"){
    return dayjs().format(format)
}