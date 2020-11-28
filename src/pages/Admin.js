import React from 'react'
import Layout from '../components/ProjectAdmin/Layout'
import Header from '../components/ProjectAdmin/Header'
import Aside from '../components/ProjectAdmin/Menu'
import Index from './Index'
import StudentList from './student/StudentList'
import StudentAdd from './student/StudentAdd'
import StudentDetail from './student/StudentDetail'
import CoursesList from './courses/CoursesList'
import CoursesAdd from './courses/CoursesAdd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default function Admin() {
  return (
    <Layout header={<Header />} aside={<Aside />}>
      <Router>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/students' exact component={StudentList} />
          <Route path='/students/add' exact component={StudentAdd} />
          <Route path='/students/:sNo' exact component={StudentDetail} />
          <Route path='/courses' exact component={CoursesList} />
          <Route path='/courses/add' exact component={CoursesAdd} />
        </Switch>
      </Router>
    </Layout>
  )
}
