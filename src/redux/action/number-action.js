import { INCREASE, DECREASE, SET } from './action-type'
/**
 * 得到一个用于增加数字操作的action
 */

export function getIncreaseAction () {
    return {
        type: INCREASE
    }
}

export function getDecreaseAction () {
    return {
        type: DECREASE
    }
}

export function getSetAction (newNumber) {
    return {
        type: SET,
        payload: newNumber
    }
}