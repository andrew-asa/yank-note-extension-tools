import { getDateString, getDay, tomorrow, yestoday } from "@/utils/ghost_base_date";
import dayjs from "dayjs";

/**
 * 内置行数
 */
export const builtinFn = [
    {
        name: "星期几",
        fn: function () {
            return getDay()
        },
        describe: "星期几"
    }, {
        name: "今天",
        fn: function () {
            return getDateString()
        },
        describe: "当前日期"
    },
    {
        name: "昨天",
        fn: function () {
            return yestoday()
        },
        describe: "昨天"
    },
    {
        name: "明天",
        fn: function () {
            return tomorrow()
        },
        describe: "明天"
    }
]
export function findByName(name, fns = builtinFn) {
    for (let i in fns) {
        if (fns[i].name == name) {
            return fns[i]
        }
    }
}
export function findFunctionByName(name, fns = builtinFn) {
    var item = findByName(name, fns)
    return item ? item.fn : () => { return "" }
}
export function evalByName(name, fns = builtinFn) {
    return findFunctionByName(name, fns)()
}
export function compile(template) {
    var cb = (template + "").replaceAll(/{{(.+?)}}/g, "${evalByName('$1')}")
    return eval("`" + cb + "`")
}