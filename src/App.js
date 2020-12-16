import React from 'react'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './store'
export default function App() {
    return (
        <div>
            <Provider store={store} >
                <Counter />
            </Provider>
        </div>
    )
}
