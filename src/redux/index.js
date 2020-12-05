import { createStore } from 'redux'
/**
 * 
 * @param {*} state 之前仓库中的状态（数据）
 * @param {*} action 描述要做什么的函数
 */
function reducer(state, action) {
  if (action.type === 'increase') {
    return state + 1
  } else if (action.type === 'decrease') {
    return state - 1
  }
  return state
}

const state = createStore(reducer, 10)
const action = { type: 'increase' }

console.log(state.getState())

state.dispatch(action)

console.log(state.getState())