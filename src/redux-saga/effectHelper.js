export const effectTypes = {
    CALL: "CALL",
    TAKE: "TAKE",
    FORK: "FORK",
    ALL: "ALL"
}

/**
 * effect对象特殊的属性名
 */
const specialEffectName = "@@redux-saga/IO"

/**
 * 创建effect
 * @param {*} type 
 * @param {*} payload 
 */
export function createEffect(type, payload) {
    // 验证type值
    if (Object.values(effectTypes).includes(type)) {
        throw new TypeError("这是一个无效的type值");
    }
    return {
        [specialEffectName]: true,
        type,
        payload
    }
}

/**
 * 判断一个对象是否是effect
 */

export function isEffect(obj) {
    if (typeof obj !== 'object') {
        return false
    }
    return obj[specialEffectName] === true
}