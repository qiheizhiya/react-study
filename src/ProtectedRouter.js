import React from 'react'
import { Route, Redirect } from 'react-router-dom'


export default function ProtectedRouter({component: Component, render, children, ...rest}) {
  const token = localStorage.getItem('token')
  console.log(token)
  return (
    <Route {...rest} render={values => {
      if (token) return <Component />
      else return <Redirect to={{
        pathname: '/login',
        state: values.location.pathname
      }} ></Redirect>
    }}>
      
    </Route>
  )
}
