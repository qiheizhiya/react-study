import { takeEvery, put, select, call } from 'redux-saga/effects'
import { actionTypes, setIsLoading, setStudentsAndTotal } from '../action/student/searchResult'
import { getSearchStud } from '../../fetch'

function* fetchStudent () {
  const condition = yield select(data => data.student.condition)
  yield put(setIsLoading(true))
  const resp = yield call(getSearchStud, condition)
  yield put(setStudentsAndTotal(resp.searchList, resp.cont))
  yield put(setIsLoading(false))
}

export default function* () {
  yield takeEvery(actionTypes.fetchStudents, fetchStudent)
}