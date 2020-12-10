export const actionTypes = {
    setStudentsAndTotal: 'setStudentAndTotal',
    setIsLoading: Symbol('setIsLoading'),
    fetchStudents: Symbol('fetchStudents')
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