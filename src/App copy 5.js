import React from 'react'
// import qs from 'query-string'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function News (props) {
    const { year, month, date } = props.match.params
    return <h1>我是新闻页面，今天是{year}年{month}月{date}日</h1>

}

function NotFound (props) {
    return <h1>没有找到页面</h1>
} 

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/news/:year(\d+)/:month/:date/*" component={News} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
