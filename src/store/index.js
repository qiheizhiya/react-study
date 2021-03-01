import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import countertask from './saga'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMid = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMid, logger)))
console.log(store.getState())
sagaMid.run(countertask)

export default store