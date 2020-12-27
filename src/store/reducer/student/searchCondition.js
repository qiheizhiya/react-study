import { actionTypes } from '../../action/student/searchCondition'

const initialState = {
    search: '',
    page: 1,
    size: 10,
    age: -1
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.change:
        return { ...state, ...payload }

    default:
        return state
    }
}
