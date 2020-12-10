import {  fork, take, delay, put, cancel } from 'redux-saga/effects'
import { actionTypes, increase } from '../action/counter'

function* autoIncreasae () {
    let task
    while (true) {
        yield take(actionTypes.autoIncrease)
        if (task) yield cancel(task)
        task = yield fork(function* (){
            yield delay(2000)
            yield put(increase())
        })
    }
}

export default function* () {

    yield fork(autoIncreasae)
    console.log('autoIncrease被监听了');

}
