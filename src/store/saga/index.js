import { all } from 'redux-saga/effects'
import counterTask from './countertask'
import studentTask from './studentTask'

export default function* () {
    const action = yield all([counterTask(), studentTask()])
    console.log('all调用了', action);
}