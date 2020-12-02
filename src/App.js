import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import Login from './login'
import Home from './Home'
import UserInfo from './userInfo'
import ProtectedRoute from './ProtectedRouter'
import './App.css'

export default function App() {
    return (
        <div>
            <Router>
                <nav>
                    <NavLink to="/login">去登陆页面</NavLink>
                    <NavLink to="/">去Home页面</NavLink>
                    <NavLink to="/userInfo">鉴权页面，用户信息页面</NavLink>
                </nav>

                <main>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <ProtectedRoute path="/userInfo" component={UserInfo}></ProtectedRoute>   
                        <Route path="/" exact component={Home} />
                    </Switch>
                </main>
            </Router>
        </div>
    )
}
