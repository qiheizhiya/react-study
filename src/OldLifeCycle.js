import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    state = {
        n: 0
    }

    constructor (props) {
        super(props)
        console.log('一个新的组件诞生了！！！');
    }

    componentWillMount() {
        console.log('componentWillMount', '组件即将被挂载');
    }

    componentDidMount() {
        console.log('componentDidMount', '挂载完成');
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', '是否重新渲染', this.props, nextProps, this.state, nextState);
        if (this.props.n === nextProps.n && this.state.n === nextState.n) {
            return false
        }
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', '组件即将被重新渲染', nextProps, nextState);
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', '组件已完成渲染', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount', '组件被销毁');
    }
    
    
    render() {
        console.log('render', '渲染，返回的React元素会被挂载到虚拟DOM树中');
        return (
            <div>   
                <h1>旧版生命周期</h1>
                <h2>属性n：{this.props.n}</h2>
                <h2>状态n：{this.state.n}</h2>

                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }}>状态+1</button>
            </div>
        )
    }
}
