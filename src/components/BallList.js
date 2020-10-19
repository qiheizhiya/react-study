import React, { Component } from 'react'
import Ball from './Ball'
function getRandom (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

export default class BallList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            ballInfos: []
        }
        const timer = setInterval(() => {
            const info = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandom(50, 500),
                ySpeed: getRandom(50, 550)
            }
            this.setState({
                ballInfos: [...this.state.ballInfos, info]
            })
            if (this.state.ballInfos.length === 10) {
                clearInterval(timer)
            }
        }, 1000)
    }
    render () {
        return (
            <div>
                {this.state.ballInfos.map((item, i) => <Ball key={i} {...item} />)}
            </div>
        )
    }
} 