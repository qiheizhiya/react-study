import { takeEvery, put, select, call } from 'redux-saga/effects'
import { actionTypes, setIsLoading, setStudentsAndTotal } from '../action/student/searchResult'
import { getSearchStud } from '../../fetch'

// function mockStudents(condition, callback) {
//   console.log('mockStudent', condition);
//   setTimeout(() => {
//     if (Math.random() < 0.5) {
//       callback(null, {
//         cont: 3,
//         searchList: [
//           { id: 1, name: '瓜瓜1号' },
//           { id: 2, name: '瓜瓜2号' },
//           { id: 3, name: '瓜瓜3号' }
//         ]
//       })
//     } else {
//       callback(new Error('出错了！！！！'), null)
//     }
//   })
// }

function* fetchStudent () {
  const condition = yield select(data => data.student.searchCondition)
  yield put(setIsLoading(true))
  // const resp = yield apply(null, getSearchStud, [condition])
  // const resp = yield cps(mockStudents, condition)
  const resp = yield call(getSearchStud, condition)
  yield put(setStudentsAndTotal(resp.searchList, resp.cont))
  yield put(setIsLoading(false))
}

export default function* () {
  yield takeEvery(actionTypes.fetchStudents, fetchStudent)
}