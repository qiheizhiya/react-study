import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { v1 } from 'uuid'
import './App.css'
import 'animate.css'


export default function App() {
    const [taskList, setTaskList] = useState([
        { id: v1(), name: '任务1' },
        { id: v1(), name: '任务2' },
        { id: v1(), name: '任务3' }
    ])
    return (
        <div>
            <TransitionGroup component="ul" className="container" appear>
                {
                    taskList.map(it => (
                        <CSSTransition timeout={2000} key={it.id}>
                            <li>
                                {it.name}
                                <button onClick={() => {
                                    setTaskList(taskList.filter(item => item.name !== it.name))
                                }}>删除</button>
                            </li>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
            <button onClick={() => {
                const name = window.prompt('请输入任务名称')
                setTaskList([...taskList, { id: v1(), name }])
            }}>添加一个任务</button>
        </div>
    )
}
