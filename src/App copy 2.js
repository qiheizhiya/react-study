import React, { PureComponent } from 'react'
import FadeTransition from './components/FadeTransition'
import { SwitchTransition } from 'react-transition-group'

export default class App extends PureComponent {
    state = {
        show: true
    }
    render() {
        return (
            <div>
                <SwitchTransition>
                    <FadeTransition appear timeout={1000} in={this.state.show}>
                        <h1>{this.state.show ? 'title1' : 'title2'}</h1>
                    </FadeTransition>
                </SwitchTransition>
                
                <button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })
                }}>切换显示状态</button>
            </div>
        )
    }
}
