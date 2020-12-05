
import { createStore, bindActionCreators } from 'redux'
import loginUser from './reducer/loginUser'
import * as all from './action/loginUserAction'


const store = createStore(loginUser)
const boundActions = bindActionCreators(all, store.dispatch)
console.log(store.getState())

boundActions.createSetLoginUserAction({id: 1, name: '呱呱'})

console.log(store.getState())