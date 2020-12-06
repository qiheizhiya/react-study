import { createStore, bindActionCreators } from "../redux";
import reducer from "./reducer"
// import { createAddUserAction, createDeleteUserAction } from "./action/usersAction"
import * as usersActions from './action/usersAction'

const store = createStore(reducer);

console.log(store.getState())

const unListen = store.subscribe(() => {
    console.log(store.getState());
})
const bindUserActions = bindActionCreators(usersActions, store.dispatch)
console.log(bindUserActions);
bindUserActions.createAddUserAction({
    id: 3,
    name: "abc",
    age: 10
});

unListen(); //取消监听

// store.dispatch(createDeleteUserAction(3));