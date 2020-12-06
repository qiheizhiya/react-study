/**
 * 判断这个对象是不是一个平面对象
 * @param {Object} obj 
 */
function isPlainObject (obj) {
    if (typeof obj !== 'object') {
        return false
    }
    return Object.getPrototypeOf(obj) === Object.prototype
}

function getRandomString (length) {
    return Math.random().toString(36).substr(2, length).split("").join('.')
}
const actionTypes = {
    INIT: `@redux/INIT${getRandomString(6)}`,
    PROBE_UNKNOWN_ACTION: `@redux/PROBE_UNKNOWN_ACTION${getRandomString(6)}`
}

/**
 * 实现createStore的功能
 * @param {function} reducer reducer
 * @param {any} defaultValue 默认值
 */
export default function (reducer, defaultValue) {

    const currentReducer = reducer
    let currentValue = defaultValue
    const listeners = []
    
    function dispatch (action) {
        // 验证action
        if (!isPlainObject(action)) {
            throw new Error('action must be a plain object')
        }
        if (!action.type) {
            throw new Error('action must has a property of type')
        }

        currentValue = currentReducer(currentValue, action)

        for (const listener of listeners) {
            listener()
        }
    }

    function getState () {
        return currentValue
    }
    /**
     * 添加一个监听器（订阅器）
     */

    function subscribe (listener) {
        listeners.push(listener)
        return () => {
            const index = listeners.indexOf(listener)
            index >= 0 && listeners.splice(index, 1)
        }
    }

    // 创建仓库时，需要分发一次初始的action。目的是给currentValue赋值，否贼dispatch之前调用getState会是undefined
    dispatch({
        type: actionTypes.INIT
    })
    return {
        dispatch,
        getState,
        subscribe
    }
}