import React, { useState, useEffect } from 'react'
import StudentSearchBar from '../../components/ProjectAdmin/StudentSearchBar'
import StudentTable from '../../components/ProjectAdmin/StudentTable'
import qs from 'query-string'
import Pager from '../../components/Pager'
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

function useGetResp (query) {
  console.log(query)
  const [stus, setStus] = useState({
    cont: 0,
    searchList: []
  })
  useEffect(() => {
    (async() => {
      const result = await getSearchStud({
        search: query.key,
        size: query.size,
        sex: query.sex,
        page: query.page
      })
      setStus(result)
    })()
  }, [query.key, query.size, query.sex, query.page])
  return stus
}

function changeLocation (query, history) {
  const newQuery = qs.stringify(query)
  history.push(`?${newQuery}`)
}

export default function StudentList(props) {
  const query = getQuery(props.location.search)
  const resp = useGetResp(query)
  return (
    <div>
      <StudentSearchBar defaultValue={{ key: query.key, sex: query.sex, }} onSearch={e => {
        const newQuery = { ...query, ...e, page: 1 }
        changeLocation(newQuery, props.history)
      }} ></StudentSearchBar>
      <StudentTable stus={resp.searchList} />
      <Pager current={query.page} limit={query.size} total={resp.cont} onPageChange={e => {
        const newQuery = { ...query, page: e }
        changeLocation(newQuery, props.history)
      }} />
    </div>
  )
}
