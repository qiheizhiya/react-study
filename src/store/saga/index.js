import { takeEvery, put, delay } from 'redux-saga/effects'
// import counterTask from './countertask'
import { actionTypes, increase, decrease } from '../action/counter'
// import studentTask from './studentTask'

function* asyncIncrease () {
    yield delay(2000)
    yield put(increase())
}

function* asyncDecrease () {
    yield delay(2000)
    yield put(decrease())
}

export default function* () {
    yield takeEvery(actionTypes.asyncIncrease, asyncIncrease)
    yield takeEvery(actionTypes.asyncDecrease, asyncDecrease)
    console.log("正在监听asyncIncrease、asyncDecrease")
}