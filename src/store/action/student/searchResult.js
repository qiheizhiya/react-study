import { getSearchStud } from '../../../fetch'

export const actionTypes = {
    setStudentsAndTotal: Symbol('setStudentAndTotal'),
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

export const fetchStudents = () => {
    return async function(dispatch, getState) {
        const state = getState()
        dispatch(setIsLoading(true))
        const { cont, searchList } = await getSearchStud(state.student.searchCondition)
        const action = setStudentsAndTotal(searchList, cont)
        dispatch(action)
        dispatch(setIsLoading(false))
    }
}
