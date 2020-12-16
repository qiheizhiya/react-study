import { all, call } from 'redux-saga/effects'
import counterTask from './countertask'
import studentTask from './studentTask'

async function a () {
    return 1
}
export default function* () {
    console.log(call(a))
    const action = yield call(a)
    console.log('all调用了', action);
}