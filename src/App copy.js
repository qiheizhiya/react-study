import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom'

function Page1() {
    return <h1>Page1</h1>
}

function Page2() {
    return <h1>Page2</h1>
}

function Guard(props) {
    useEffect(() => {
        const unListen = props.history.listen((location, action) => {
            console.log(`页面从${props.location.pathname}跳转到${location.pathname}，方式是${action}`)
        })
        const unBlock = props.history.block((location, action) => {
            console.log(location, action)
            return '消息'
        })
        return () => {
            unListen()
            unBlock()
        }
    }, [props])
    return null
}
const WithGuard = withRouter(Guard)

export default function App() {
    return (
        <Router
            getUserConfirmation={(msg, callback) => {
                callback(true)
            }}>
            <ul>
                <li>
                    <NavLink to='/page1'>页面1</NavLink>
                </li>
                <li>
                    <NavLink to='/page2'>页面2</NavLink>
                </li>
            </ul>

            <main>
                <WithGuard />
                <Route path='/page1' component={Page1} />
                <Route path='/page2' component={Page2} />
            </main>
        </Router>
    )
}
