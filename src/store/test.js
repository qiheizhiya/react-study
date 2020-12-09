import store from './index'
// import { change } from './action/student/searchCondition'
import { fetchStudents } from './action/student/searchResult'

store.dispatch(fetchStudents())