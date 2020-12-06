export const ADDUSER = Symbol('add-user')
export const DELETEUSER = Symbol('delete-user')
export const UPDATEUSER = Symbol('update-user')

export const createAddUserAction = (payload) => ({
    type: ADDUSER,
    payload
})

export const createDeleteUserAction = (payload) => ({
    type: DELETEUSER,
    payload
})

export const createUpdateUserAction = (id, newUserData) => ({
    type: UPDATEUSER,
    payload: {
        ...newUserData,
        id
    }
})
