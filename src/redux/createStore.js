import actionTypes from './utils/actionTypes'
import isPlainObject from './utils/isPlainObject'

/**
 * 实现createStore的功能
 * 一个项目只能有一个仓库
 * @param {function} reducer reducer
 * @param {any} defaultValue 默认值
 * @param {function} enhancer 增强器
 * @returns {Store} 返回一个redux存储，允许你读取状态、分派操作和订阅更改
 */
export default function createStore (reducer, defaultValue, enhancer) {

    // 如果用户传了两个函数
    if (typeof defaultValue === 'function' && typeof enhancer === 'function' ) {
        throw new Error('只能有一个增强器')
    }

    // 如果第二个参数是函数且第三个参数没有，则是增强器
    if (typeof defaultValue === 'function' && enhancer === void 0) {
        enhancer = defaultValue
        defaultValue = undefined
    }
    
    // 如果有增强器，则通过增强器来创建仓库 本质上就是 applyMiddleware(logger1, logger2)(createStore)(reducer)
    if (typeof enhancer === 'function') {
        return enhancer(createStore)(reducer, defaultValue)
    }

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