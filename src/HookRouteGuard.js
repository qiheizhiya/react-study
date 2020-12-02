import React, { useEffect } from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

let prevLocation, location, action, unBlock
function _GuardHelper (props) {
  useEffect(() => {
    // 添加阻塞
    unBlock = props.history.block((newLocation, ac) => {
      prevLocation = props.location
      location = newLocation
      action = ac
      return ''
    })
    // 添加监听器
    const unListen = props.history.listen((location, action) => {
      if (props.onChange) {
        const prevLocation = props.location
        props.onChange(prevLocation, location, action, unListen)
      }
    })
    return () => {
      unBlock()
      unListen()
    }
  }, [props])
  return null
}

const GuardHelper = withRouter(_GuardHelper)

export default function HookRouteGuard(props) {

  function handleConfirm (msg, callback) {
    if (props.onBeforeChange) props.onBeforeChange(prevLocation, location, action, callback, unBlock)
    else callback(true)
  }

  return (
    <Router getUserConfirmation={handleConfirm}>
      <GuardHelper onChange={props.onChange} />
      {props.children}
    </Router>
  )
}
