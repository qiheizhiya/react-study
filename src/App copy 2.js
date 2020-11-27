import React from 'react'
import qs from 'query-string'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function A (props) {
    return (
        <div>
            <p>我是组件A</p>
            <button onClick={() => {
                props.history.replace('/b')
            }}>到B</button>
        </div>
    )
}

function B (props) {
    return (
        <div>
            <p>我是组件b</p>
            <button onClick={() => {
                props.history.push('/a')
            }}>到A</button>
        </div>
    )
}

function NotFound (props) {
    return <h1>没有找到页面</h1>
} 

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/a" component={A} />
                <Route path="/b" component={B} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
