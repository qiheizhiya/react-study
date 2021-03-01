import { combineReducers } from 'redux'
import counter from './counter'
import student from './student'
import { connectRouter } from 'connected-react-router'

export default combineReducers({ counter, student, router: connectRouter })