import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.css'

FadeTransition.defaultProps = {
  timeout: 500
}

export default function FadeTransition(props) {

  function addTransition (e) {
    e.style.transition = `opacity ${props.timeout}ms`
  }

  function removeTransition (e) {
    e.style.transition = ''
    props.onExited && props.onExited(e)
  }
  return (
    <CSSTransition {...props} classNames='fade'
     onEnter={addTransition} 
     onEntered = {e => {
      removeTransition(e)
      props.onExited && props.onExited(e)
    }} 
    onExit={addTransition} 
    onExited={(e, isAppear) => {
      removeTransition(e)
      props.onExited && props.onExited(e, isAppear)
    }}>
      {props.children}
    </CSSTransition>
  )
}
