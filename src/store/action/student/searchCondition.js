export const actionTypes = {
    change: 'CHANGE'
}
/**
 * action creator创建函数
 * 根据新的查询条件，产生一个action
 * @param {*} payload 
 */
export const change = (payload) => ({
    type: actionTypes.change,
    payload
})
