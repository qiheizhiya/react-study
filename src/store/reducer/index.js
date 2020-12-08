import { addUser } from '../action'

const initialState = []

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case addUser:
        return [...state, payload]

    default:
        return state
    }
}
