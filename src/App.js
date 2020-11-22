import React, { useState, useMemo } from 'react'

function Item(props) {
    return <li>{props.value}</li>
}

export default function App() {
    const [range] = useState({ min: 1, max: 1000 })
    const [n, setN] = useState(0)
    const list = useMemo(() => {
        const list = []
        for (let i = range.min; i <= range.max; i++) {
            list.push(<Item key={i} value={i}></Item>)
        }
        return list
    }, [range])

    
    return (
        <div>
            {list}
            <p>
                <input type="number" value={n} onChange={e => {
                    setN(e.target.value)
                }} />
            </p>
        </div>
    )
}
