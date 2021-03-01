import React from 'react'
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
    )
}
