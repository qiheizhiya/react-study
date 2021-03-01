import React from 'react'
<<<<<<< HEAD
// import StudentSearch from './components/StudentSearch'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Admin from './pages/Admin'
import Login from './pages/Login'
export default function App() {
    return (
        <div>
            <Provider store={store} >
                <BrowserRouter>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Admin} />
                </BrowserRouter>
            </Provider>
        </div>
=======
import { Provider } from "react-redux"
import store from "./store"
import { Route, Switch } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import history from "./store/history"

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Admin} />
                </Switch>
            </ConnectedRouter>
        </Provider>
>>>>>>> 714bf38157e9072db852f4981efebcbc4105071c
    )
}
