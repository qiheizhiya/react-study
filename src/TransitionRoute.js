import React from 'react'
import { Route } from 'react-router-dom'
import './transition.css'
import { CSSTransition } from 'react-transition-group'
import 'animate.css'

export default function TransitionRoute(props) {
  const { component: Component, ...rest } = props
  return (
    <Route {...rest}>
      {({ match }) => {
        return <CSSTransition in={!!match} timeout={800} mountOnEnter unmountOnExit
          classNames={{
            enter: "animate__animated animate__fast animate__fadeInRight",
            exit: "animate__animated animate__fast animate__fadeOutLeft"
          }}
        >
          <Component />
        </CSSTransition>
      }}
    </Route>
  )
}
