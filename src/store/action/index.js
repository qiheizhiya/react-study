export const addUser = Symbol('addUser') 

export const createAddUserAction = (payload) => ({
    type: addUser,
    payload
})
