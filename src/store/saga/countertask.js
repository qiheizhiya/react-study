import { take, takeEvery, all } from 'redux-saga/effects'
import { actionTypes } from '../action/counter'
export default function* () {

    const action = yield take(actionTypes.asyncIncrease)
    console.log('asyncIncrease被监听了', action);

}