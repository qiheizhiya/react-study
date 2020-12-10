import { takeEvery, fork, take, delay, put, cancel } from 'redux-saga/effects'
import { actionTypes, decrease, increase } from '../action/counter'

function* asytncIncrease () {
    let task
    while (true) {
        yield take(actionTypes.asyncIncrease)
        if (task) yield cancel(task)
        task = yield fork(function* (){
            yield delay(2000)
            yield put(increase())
        })
    }
}

function* asyncDecrease () {
    yield delay(2000)
    yield put(decrease())
}

export default function* () {

    yield fork(asytncIncrease)
    yield takeEvery(actionTypes.asyncDecrease, asyncDecrease)
    console.log('asyncIncrease和asyncDecrease被监听了');

}