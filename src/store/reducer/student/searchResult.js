import { actionTypes } from '../../action/student/searchResult'

const initialState = {
    students: [],
    total: 0,
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.setStudentsAndTotal:
            return { ...state, ...payload }
        case actionTypes.setIsLoading:
            return { ...state, isLoading: payload }
        default:
            return state
    }
}
