import React, { Component } from 'react'
import './index.css'
export default class ThreeLayout extends Component {
  render() {
    const defaultProps = {
      leftWidth: 200,
      rightWidth: 200,
      minWidth: 800
    }
    const datas = Object.assign({}, defaultProps, this.props)
    return (
      <div className="threeLayout" style={{
        minWidth: datas.minWidth
      }}>
        <div className="main">
          {this.props.children}
        </div>
        <div className="aside-left" style={{width: datas.leftWidth}}>
          {this.props.leftContent}
        </div>
        <div className="aside-right" style={{width: datas.rightWidth}}>
          {this.props.rightContent}
        </div>
      </div>
    )
  }
}
