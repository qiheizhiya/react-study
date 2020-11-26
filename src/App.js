import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
        <Router>
            <Switch>
                <Route path='/a' sensitive exact component={A}></Route>
                <Route path='/b' exact component={B}></Route>
                <Route path='/c' exact component={C}></Route>
            </Switch>
        </Router>
    )
}
