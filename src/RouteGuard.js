import React, { PureComponent } from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'
let prevLoaction, location, action, unBlock

class _GuardHelper extends PureComponent {
  componentDidMount() {
    // 添加阻塞
    unBlock = this.props.history.block((newLocation, ac) => {
      prevLoaction = this.props.location
      location = newLocation
      action = ac
      return ''
    })

    this.unListen = this.props.history.listen((location, action) => {
      if (this.props.onChange) {
        const prevLocation = this.props.location
        this.props.onChange(prevLocation, location, action, this.unListen)
      }
    })
  }
  componentWillUnmount() {
    unBlock()
    this.unListen()
  }

  render () {
    return null
  }
}

const GuardHelper = withRouter(_GuardHelper)

export default class RouteGuard extends PureComponent {

  handleConfirm = (mag, callback) => {
    if (this.props.onBeforeChange) this.props.onBeforeChange(prevLoaction, location, action, callback, unBlock)
    else callback(true)
  }

  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm} >
        <GuardHelper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    )
  }
}
