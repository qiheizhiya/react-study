import React, { PureComponent } from 'react'
import FadeTransition from './components/FadeTransition'
import { TransitionGroup } from 'react-transition-group'
import { v1 } from 'uuid'
export default class App extends PureComponent {
    state = {
        show: true,
        tasks: [
            { id: v1(), name: '任务1' },
            { id: v1(), name: '任务2' },
            { id: v1(), name: '任务3' }
        ]
    }
    render() {
        return (
            <div>
                <TransitionGroup>
                    {
                        this.state.tasks.map(it => <FadeTransition key={it.id}>
                            <li>
                                {it.name}
                                <button onClick={() => {
                                    this.setState({
                                        tasks: this.state.tasks.filter(item => item.name !== it.name)
                                    })
                                }}>删除</button>
                            </li>
                        </FadeTransition>)
                    }
                </TransitionGroup>
                
                <button onClick={() => {
                    const name = window.prompt('请输入任务名称')
                    this.setState({
                        tasks: [...this.state.tasks, { id: v1(), name }]
                    })
                }}>添加一个任务</button>
            </div>
        )
    }
}
