import { createStore, bindActionCreators } from 'redux'
import * as actionTypes from './action/action-type'
import * as numberActions from './action/number-action'
/**
 * 
 * @param {*} state 之前仓库中的状态（数据）
 * @param {*} action 描述要做什么的函数
 */
function reducer(state, action) {
  if (action.type === actionTypes.INCREASE) {
    return state + 1
  } else if (action.type === actionTypes.DECREASE) {
    return state - 1
  } else if (action.type === actionTypes.SET) {
    return action.payload
  }
  return state
}

const store = createStore(reducer, 10)
const boundActions = bindActionCreators(numberActions, store.dispatch)

console.log(store.getState())

// store.dispatch(numberActions.getSetAction(20))
boundActions.getSetAction(20)

console.log(store.getState())