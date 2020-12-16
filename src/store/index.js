import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import countertask from './saga'
import createSagaMiddleware from 'redux-saga'

const sagaMid = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMid, logger))

sagaMid.run(countertask)

export default store