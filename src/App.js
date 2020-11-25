import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.css'
import 'animate.css'

function MyTransition ({visible, children}) {
    return <CSSTransition appear mountOnEnter in={visible} timeout={800}
        classNames={{
            exitActive: 'animate__fadeOutLeft',
            exitDone: 'exit-done',
            enterActive: 'animate__fadeInRight',
            appearActive: 'animate__fadeInRight'
        }}
    >
        {children}
    </CSSTransition>
}


function Comp1() {
    return <h1 className='title animate__animated animate__faster'>组件1</h1>
}

function Comp2() {
    return <h1 className='title animate__animated animate__faster'>组件2</h1>
}

export default function App() {
    const [showComp1, setShowComp1] = useState(true)
    return (
        <div className='container'>
            <div className="copContainer">
                <MyTransition visible={showComp1}>
                    <Comp1 />
                </MyTransition>
                <MyTransition visible={!showComp1}>
                    <Comp2 />
                </MyTransition>
            </div>
            <button type="button" onClick={() => setShowComp1(!showComp1)}>
                切换显示状态
          </button>
        </div>
    );
}