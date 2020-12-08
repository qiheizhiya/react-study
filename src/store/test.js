import store from './index'
import { createAddUserAction } from './action'
store.dispatch(createAddUserAction({id: 1, name: '呱呱1号'}))