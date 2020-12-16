import React from 'react'
import StudentSearch from './components/StudentSearch'
import { Provider } from 'react-redux'
import store from './store'
export default function App() {
    return (
        <div>
            <Provider store={store} >
                <StudentSearch />
            </Provider>
        </div>
    )
}
