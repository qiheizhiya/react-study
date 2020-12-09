import { getSearchStud } from '../../../fetch'

export const actionTypes = {
    setStudentsAndTotal: 'setStudentAndTotal',
    setIsLoading: Symbol('setIsLoading')
}

export const setStudentsAndTotal = (arr, total) => ({
    type: actionTypes.setStudentsAndTotal,
    payload: {
        students: arr,
        total
    }
})

export const setIsLoading = (isloading) => ({
    type: actionTypes.setIsLoading,
    payload: isloading
})

// export const fetchStudents = () => {
//     return async function(dispatch, getState) {
//         const state = getState()
//         dispatch(setIsLoading(true))
//         const { cont, searchList } = await getSearchStud(state.student.searchCondition)
//         const action = setStudentsAndTotal(searchList, cont)
//         dispatch(action)
//         dispatch(setIsLoading(false))
//     }
// }

// export const fetchStudents = async (condition) => {
//     const { cont, searchList } = await getSearchStud(condition)
//     return setStudentsAndTotal(searchList, cont)
// }

export const fetchStudents = (condition = {}) => {
    return {
        type: actionTypes.setStudentsAndTotal,
        payload: getSearchStud(condition).then(res => ({
            students: res.searchList,
            total: res.cont
        }))
    }
}