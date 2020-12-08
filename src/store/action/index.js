import { getAllStud } from '../../fetch'
export const addUser = Symbol('addUser')

export const createAddUserAction = (payload) => ({
    type: addUser,
    payload
})

export function fetchUsers() {
    return async function (dispatch) {
        const datas = await getAllStud()
        const action = createAddUserAction(datas.data)
        dispatch(action)
    }
}