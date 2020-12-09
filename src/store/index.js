import { createStore, bindActionCreators, applyMiddleware } from "../redux";
import logger from 'redux-logger'
import reducer from "./reducer"
import thunk from 'redux-thunk'
// import { createAddUserAction, createDeleteUserAction } from "./action/usersAction"
import * as usersActions from './action/usersAction'

// function logger1 (store) {
//     return function(next) {
//         console.log(next, '我是1next');
//         return function (action) {
//             console.log('我是中间件1');
//             console.log('我是中间件1的next方法', next);
//             console.log(store.getState());
//             console.log('我去next了');
//             next(action)
//             console.log(store.getState());
//             console.log('我next回来了');
//         }
//     }
// }

const logger1 = store => next => action => {
    console.log('我是中间件1');
    console.log('我是中间件1的next方法', next);
    console.log(store.getState());
    console.log('我去next了');
    next(action)
    console.log(store.getState());
    console.log('我next回来了');
}

function logger2 (store) {
    return function(next) {
        console.log(next, '我是2next');
        return function (action) {
            console.log('我是中间件2');
            console.log('我是中间件2的next方法', next);
            console.log(store.getState());
            next(action)
            console.log('我next完啦');
            console.log(store.getState());
            console.log('我打了');
        }
    }
}

const store = createStore(reducer, applyMiddleware(thunk, logger1, logger2, logger));
// const store = applyMiddleware(logger1, logger2)(createStore)(reducer)

const bindUserActions = bindActionCreators(usersActions, store.dispatch)
bindUserActions.fetchUsers()
// store.dispatch(usersActions.fetchUsers())

// store.dispatch(createDeleteUserAction(3));