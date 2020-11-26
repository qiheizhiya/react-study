import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

function A () {
    return <h1>组件1</h1>
}

function B () {
    return <h1>组件2</h1>
}

function C () {
    return <h1>组件3</h1>
}

export default function App() {
    return (
        <HashRouter>
            <Route path='/a' exact component={A}></Route>
            <Route path='/a/b' exact component={B}></Route>
            <Route path='/c' exact component={C}></Route>
        </HashRouter>
    )
}
