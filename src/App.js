import React from 'react'
// import qs from 'query-string'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom"

const AWrapper = withRouter(A)

function News (props) {
    return <div>
        <h1>我是新闻页面</h1>
        <AWrapper />
        {/* <A {...props} /> */}
    </div>
}

function A (props) {
    console.log(props)
    return <div>
        <p>我是A组件</p>
        <button onClick={() => {
            props.history.push('/')
        }}>去主页</button>
    </div>
}

function Index () {
    return <div>我是主页</div>
}

function NotFound (props) {
    return <h1>没有找到页面</h1>
} 

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/news" exact component={News} />
                <Route path='/' component={Index} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
