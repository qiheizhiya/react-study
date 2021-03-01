export const actionTypes = {
    setStudentsAndTotal: 'SET_STUDENTS_AND_TOTAL',
    setIsLoading: 'SET_IS_LOADING',
    fetchStudents: 'FETCH_STUDENTS'
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

export const fetchStudents = () => ({ type: actionTypes.fetchStudents })