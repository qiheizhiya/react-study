import React from 'react'
import { NavLink } from 'react-router-dom'
import RouterConfig from './RouterConfig'
export default function BetterLink({ to, ...rest }) {
  if (to.name && typeof to !== 'string') {
    to.pathname = getPathFromName(to.name, '', RouterConfig)
  }
  return (
    <NavLink to={to} {...rest} />
  )
}

function getPathFromName(name, baseUrl, routers) {
  for (const item of routers) {
    const newPathName = baseUrl + item.path
    if (item.name === name) {
      return newPathName
    } else {
      if (Array.isArray(item.children)) {
        const path = getPathFromName(name, newPathName, item.children)
        if (path) return path
      }
    }
  }
}