import reducer from './reducer'
import { createStore } from 'redux'
// import { createSetLoginUserAction } from './action/loginUserAction'
import { createAddUserAction } from './action/usersAction'
const store = createStore(reducer)


console.log(store.getState())
store.dispatch(createAddUserAction({id: 3, name: '呱呱3号'}))
console.log(store.getState())
store.dispatch(createAddUserAction({id: 4, name: '呱呱4号'}))
console.log(store.getState())
store.dispatch(createAddUserAction({id: 5, name: '呱呱5号'}))
console.log(store.getState())