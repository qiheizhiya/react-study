import React, { useState } from 'react'

export default function App() {
    console.log('我渲染了')
    const [n, setN] = useState(0)
    return (
        <div>
            <button onClick={() => {
                setN(n - 1)
            }}>-</button>
            <h1>{n}</h1>
            <button onClick={() => {
                setN(n + 1)
            }}>+</button>
            <button onClick={() => {
                setN(n)
            }}>-----------</button>
        </div>
    )
}
