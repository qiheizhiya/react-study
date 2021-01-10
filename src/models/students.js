import { searchStudents } from '../services/student'
import { history } from 'umi'
export default {
    state: {
        condition: {
            key: '',
            sex: -1,
            page: 1,
            limit: 10
        },
        result: {
            total: 0,
            datas: []
        }
    },
    subscriptions: {
        listenUrl({ history, dispatch }) {
            history.listen((newCondition) => {
                if (newCondition.pathname === '/student'){
                    console.log('我bian le ');
                    const query = newCondition.query
                    query.limit = +query.limit
                    query.page = +query.page
                    query.sex = +query.sex
                    dispatch({
                        type: 'changeCondition',
                        payload: newCondition.query
                    })
                    dispatch({
                        type: 'fetchStudent'
                    })
                }
            })
        }
    },
    reducers: {
        changeCondition (state, action) {
            return {
                ...state,
                condition: {
                    ...state.condition,
                    ...action.payload
                }
            }
        },
        setResult(state, action) {
            return {
                ...state,
                result: action.payload
            }
        }
    },
    effects: {
        *setCondition (action, { put, select }) {
            yield put({
                type: "changeCondition",
                payload: action.payload
            })
            const {page, limit, key, sex} = yield select(state => state.students.condition)
            history.push(`?page=${page}&limit=${limit}&sex=${sex}&key=${key}`)
        },
        *fetchStudent ({ payload }, { put, select, call }) {
            const condition = yield select(state => state.students.condition)
            console.log(condition);
            const result = yield call(searchStudents, condition)
            yield put({
                type: 'setResult',
                payload: {
                    total: result.cont,
                    datas: result.datas
                }
            })
        }
    }
}