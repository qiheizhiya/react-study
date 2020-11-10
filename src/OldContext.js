import React, { Component } from 'react'
import propTypes from 'prop-types'

const types = {
    a: propTypes.number,
    b: propTypes.number,
    onChangeA: propTypes.func
}

class A extends Component {
    /**
     * 声明需要使用哪些上下文中的数据
     */
    static contextTypes = types

    render () {
        console.log(this.context);
        return (
            <>
            <h1>我是类组件A: {this.context.a}</h1>
            <button onClick={() => {
                this.context.onChangeA(this.context.a + 2)
            }}>a+2</button>
            </>
        )
    }
}

function B (props, context) {

    console.log(context);
    return (
        <h1>我是函数组件B</h1>
    )
}
B.contextTypes = types

export default class oldContext extends Component {
    

    /**
     * 约束上下文中数据的类型
     */
    static childContextTypes = types

    state = {
        a: 1,
        b: 2
    }

    /**
     * 得到上下文中的数据
     */
    getChildContext() {
        console.log("获取新的上下文");
        return {
            a: this.state.a,
            b: this.state.b,
            onChangeA: (newA) => {
                this.setState({
                    a: newA
                })
            }
        }
    }

    render() {
        return (
            <div>
                <A />
                <B />
            </div>
        )
    }
}
