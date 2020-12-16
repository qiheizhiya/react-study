import { actionTypes } from '../../action/student/searchCondition'

const initialState = {
    key: '',
    page: 1,
    size: 10,
    sex: -1
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.change:
        console.log({ ...state, ...payload })
        return { ...state, ...payload }

    default:
        return state
    }
}
