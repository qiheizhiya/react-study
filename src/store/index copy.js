import { createStore, bindActionCreators, applyMiddleware } from "../redux";
import reducer from "./reducer"
// import { createAddUserAction, createDeleteUserAction } from "./action/usersAction"
import * as usersActions from './action/usersAction'

function logger1 (store) {
    return function(next) {
        return function (action) {
            console.log('我是中间件1');
            console.log(store.getState());
            next(action)
            console.log(store.getState());
        }
    }
}

function logger2 (store) {
    return function(next) {
        return function (action) {
            console.log('我是中间件2');
            console.log(store.getState());
            next(action)
            console.log(store.getState());
        }
    }
}

// const store = createStore(reducer, applyMiddleware(logger1, logger2));
const store = applyMiddleware(logger1, logger2)(createStore)(reducer)

const bindUserActions = bindActionCreators(usersActions, store.dispatch)
bindUserActions.createAddUserAction({
    id: 3,
    name: "abc",
    age: 10
});

// store.dispatch(createDeleteUserAction(3));