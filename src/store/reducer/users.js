import { ADDUSER, DELETEUSER, UPDATEUSER } from '../action/usersAction'
const initialState = [
    { id: 1, name: '呱呱1号' },
    { id: 2, name: '呱呱2号' }
]

export default (state = initialState, { type, payload }) => {
    console.log(type)
    switch (type) {

    case ADDUSER:
        return [...state, payload]

    case DELETEUSER:
        return state.filter(item => item.id !== payload.id)
    
    case UPDATEUSER:
        return state.map(item => item.id === payload.id ? {...item, ...payload} : item)
    
    default:
        return state
    }
}
