import loginUser from './loginUser'
import users from './users'
import { combineReducers } from 'redux'

// export default (state = {}, action) => {
//     return {
//         loginUser: loginUser(state.loginUser, action),
//         users: users(state.users, action)
//     }
// }
export default combineReducers({ loginUser, users })