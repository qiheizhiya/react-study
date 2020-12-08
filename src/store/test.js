import store from './index'
import { fetchUsers } from './action'
store.dispatch(fetchUsers())