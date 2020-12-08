import { addUser } from '../action'

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case addUser:
        if (Array.isArray(payload)) {
            return [...state, ...payload]
        }
        return [...state, payload]
    default:
        return state
    }
}
