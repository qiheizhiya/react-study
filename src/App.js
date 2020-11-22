import React, { useContext } from 'react'

const ctx = React.createContext()

function Test () {
    const value = useContext(ctx)
    return (
        <div>我的值是：{value}</div>
    )
}

export default function App() {
    return (
        <ctx.Provider value="abc">
            <Test />
        </ctx.Provider>
    )
}
