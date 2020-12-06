/**
 * 判断这个对象是不是一个平面对象
 * @param {Object} obj 
 */
export function isPlainObject (obj) {
    if (typeof obj !== 'object') {
        return false
    }
    return Object.getPrototypeOf(obj) === Object.prototype
}

function getRandomString (length) {
    return Math.random().toString(36).substr(2, length).split("").join('.')
}
export const actionTypes = {
    INIT: `@redux/INIT${getRandomString(6)}`,
    PROBE_UNKNOWN_ACTION: `@redux/PROBE_UNKNOWN_ACTION${getRandomString(6)}`
}