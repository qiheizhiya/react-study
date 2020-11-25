import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
import './index.css'

export default function App() {
    const [inProp, setInProp] = useState(true);
    return (
        <div>
            <Transition in={inProp} appear timeout={1000}>
                {state => {
                    console.log(state)
                    return <h1 className={state}>eqweqwqweeqweqwqweeqwqweqweqweewq</h1>
                }}
            </Transition>
            <button onClick={() => setInProp(!inProp)}>
                Click to Enter
        </button>
        </div>
    );
}