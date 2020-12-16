import React, { useEffect } from 'react'
import StudentSearchBar from './ProjectAdmin/StudentSearchBar'
import StudentTable from './ProjectAdmin/StudentTable'
import Pager from './Pager'
import Loading from './Loading'
import { connect } from 'react-redux'
import { change as changeCondiation } from '../store/action/student/searchCondition'
import { fetchStudents  } from '../store/action/student/searchResult'
import store from '../store'
let mapStateToProps = state => ({
  defaultValue: {
    key: state.student.condition.key,
    sex: state.student.condition.sex
  }
})
let mapDispatchToProps = dispatch => ({
  onSearch: newCondiation => {
    newCondiation.page = 1
    dispatch(changeCondiation(newCondiation))
    dispatch(fetchStudents())
  }
})

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(StudentSearchBar)

mapStateToProps = state => ({
  stus: state.student.result.students
})
const Table = connect(mapStateToProps)(StudentTable)

mapStateToProps = state => ({
  current: state.student.condition.page,
  total: state.student.result.total,
  limit: state.student.condition.size,
  panelNumber: 5
})
mapDispatchToProps = dispatch => ({
  onPageChange: newPage => {
    dispatch(changeCondiation({ page: newPage }))
    dispatch(fetchStudents())
  }
})
const PagerTemp = connect(mapStateToProps, mapDispatchToProps)(Pager)

mapStateToProps = state => ({
  show: state.student.result.isLoading
})
const LoadingTemp = connect(mapStateToProps)(Loading)

export default function StudentSearch() {
  useEffect(() => {
    store.dispatch(fetchStudents())
  }, [])
  return (
    <>
      <SearchBar />
      <Table />
      <PagerTemp />
      <LoadingTemp />
    </>
  )
}
