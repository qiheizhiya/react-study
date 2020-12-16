import { all } from 'redux-saga/effects'
import counterTask from './countertask'
import studentTask from './studentTask'


export default function* () {
    yield all([counterTask(), studentTask()])
    console.log("all完成")
}