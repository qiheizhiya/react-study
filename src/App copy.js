import React, { PureComponent } from 'react'
import FadeTransition from './components/FadeTransition'

export default class App extends PureComponent {
    state = {
        show: true
    }
    render() {
        return (
            <div>
                <FadeTransition appear in={this.state.show}>
                    <h1>标题</h1>
                </FadeTransition>
                <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })
                }}>切换显示状态</button>
            </div>
        )
    }
}
