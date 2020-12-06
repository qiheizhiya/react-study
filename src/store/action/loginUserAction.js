export const SETLOGINUSERTYPE = Symbol('set-login-user')

/**
 * 设置登录用户的action
 * @param {*} payload 
 */
export const createSetLoginUserAction = (payload) => ({
    type: SETLOGINUSERTYPE,
    payload
})
