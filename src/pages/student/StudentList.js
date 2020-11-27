import React, { useState, useEffect } from 'react'
import StudentSearchBar from '../../components/ProjectAdmin/StudentSearchBar'
import StudentTable from '../../components/ProjectAdmin/StudentTable'
import qs from 'query-string'
import { getSearchStud } from '../../fetch'

function getQuery (search) {
  const queryDefault = {
    page: 1,
    size: 10,
    key: '',
    sex: -1
  }
  const query = {...queryDefault, ...qs.parse(search)}
  query.size = +query.size
  query.page = +query.page
  query.sex = +query.sex
  return query
} 

// function getResp (query) {
//   useState
// }

export default function StudentList(props) {
  const query = getQuery(props.location.search)
  console.log(query)
  const [stus, setStus] = useState([])
  useEffect(() => {
    (async() => {
      const result = await getSearchStud()
      setStus(result.searchList)
    })()
  }, [])
  return (
    <div>
      <StudentSearchBar defaultValue={{ key: query.key, sex: query.sex, }} onSearch={e => {
        console.log('我查询了', e)
      }} ></StudentSearchBar>
      <StudentTable stus={stus} />
    </div>
  )
}
