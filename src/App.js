import React, { useState, useCallback } from 'react'

class Test extends React.PureComponent {
    render () {
        console.log("Test Render");
        return (
            <div>
                <h1>{this.props.text}</h1>
                <button onClick={this.props.onClick}>点我啊</button>
            </div>
        )
    }
    
}

export default function App() {
    console.log('App render222222');
    const [txt, setTxt] = useState(123)
    const [n, setN] = useState(0)

    const handleClick = useCallback(() => {
        setTxt(Math.random())
    }, [])

    return (
        <div>
            <Test text={txt} onClick={handleClick} />
            <input type="number" value={n} onChange={e => {
                setN(e.target.value)
            }} />
        </div>
    )
}
