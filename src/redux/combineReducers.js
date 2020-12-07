import actionTypes from './utils/actionTypes'
import isPlainObject from './utils/isPlainObject'
function validateReducers (reducers) {
    if (typeof reducers !== 'object') {
        throw new Error('reducers must be an object')
    }
    if(!isPlainObject(reducers)) {
        throw new Error('action must be a plain object')
    }

    for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
            const reducer = reducers[key];
            let state = reducer(undefined, { type: actionTypes.INIT })
            if (state === undefined) {
                throw new Error('reducers must not return undedfined')
            }
            state = reducer(undefined, { type: actionTypes.PROBE_UNKNOWN_ACTION })
            if (state === undefined) {
                throw new Error('reducers must not return undedfined')
            }
        }
    }
}

export default function (reducers) {
    validateReducers(reducers)
    /**
     * 返回的是一个reducer函数
     */
    return function (state = {}, action) {
        const newState = {} // 要返回的新的状态
        for (const key in reducers) {
            if (reducers.hasOwnProperty(key)) {
                const reducer = reducers[key];
                newState[key] = reducer(state[key], action)
            }
        }
        return newState
    }
}