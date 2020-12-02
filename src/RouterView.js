import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routerConfig from './RouterConfig'

function getRouters(routes, basePath) {
  if (!Array.isArray(routes)) return null
  const result = routes.map((item, index) => {
    const { path, component: Component, render, children, ...rest } = item
    const newPath = basePath + path
    return <Route {...rest} path={newPath} key={index}
      render={
        values => <Component {...values}>
          {getRouters(children, newPath)}
        </Component>
      } />
  })
  return (
    <Switch>
      {result}
    </Switch>
  )
}

export default function RouterView() {
  return (
    <>
      {getRouters(routerConfig, '')}
    </>
  )
}
