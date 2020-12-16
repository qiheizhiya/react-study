import { combineReducers } from 'redux'
import counter from './counter'
import student from './student'

export default combineReducers({ counter, student })