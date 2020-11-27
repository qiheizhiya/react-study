import React from 'react'
import qs from 'query-string'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function News (props) {
    const { search, hash } = props.location
    console.log('search', qs.parse(search))
    console.log('hash', qs.parse(hash))
    return <h1>我是新闻页面</h1>
}

function NotFound (props) {
    return <h1>没有找到页面</h1>
} 

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/news" component={News} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
