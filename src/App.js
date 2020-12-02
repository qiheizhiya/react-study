import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import RouteGuard from './HookRouteGuard'

function Page1() {
    return <h1>Page1</h1>
}

function Page2() {
    return <h1>Page2</h1>
}


export default function App() {
    return (
        <RouteGuard
            onBeforeChange={(prevLocation, location, action, callback, unBlock) => {
                callback(true)
            }}
            onChange={(prevLocation, location, action, unListen) => {
                console.log(`日志：从${prevLocation.pathname}进入页面${location.pathname},进入方式${action}`)
            }}
        >
            <ul>
                <li>
                    <NavLink to='/page1'>页面1</NavLink>
                </li>
                <li>
                    <NavLink to='/page2'>页面2</NavLink>
                </li>
            </ul>

            <main>
                <Route path='/page1' component={Page1} />
                <Route path='/page2' component={Page2} />
            </main>
        </RouteGuard>
    )
}
