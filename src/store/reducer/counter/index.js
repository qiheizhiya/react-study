import { actionTypes } from '../../action/counter'
const initialState = 10

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.increase:
        return state + 1
    
    case actionTypes.decrease:
        return state - 1

    default:
        return state
    }
}
