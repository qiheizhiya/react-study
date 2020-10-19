import React, { Component } from 'react'

export default class Tick extends Component {
    // JS Next 语法， 处于实验阶段
    state = {
        left: this.props.number
    }
    constructor (props) {
        super(props)
        // 初始化状态
        // this.state = {
        //     left: this.props.number
        // }
        this.timer = setInterval(() => {
            this.setState({left: this.state.left - 1}) // 重新设置状态
            if (this.state.left === 0) {
                clearInterval(this.timer)
            }
        }, 1000)
    }

    render () {
        return (
            <h1>
                倒计时剩余时间：{this.state.left}
            </h1>
        )
    }
}