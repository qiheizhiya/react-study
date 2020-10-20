import React, { Component } from 'react'
import Tick from './Tick'

export default class TickControl extends Component {
    state = {
        isOver: false
    }
    handleOver = () => {
        this.setState({
            isOver: true
        })
    }
    handleClick () {
        console.log(this)
        console.log('点击了')
    }
    render() {
        let status = "正在倒计时"
        if (this.state.isOver) {
            status = '倒计时完成'
        }
        return (
            <div>
                <Tick onOver={this.handleOver} onClick={this.handleClick} number={5}/>
                <h2>
                    {status}
                </h2>
            </div>
        )
    }
}
