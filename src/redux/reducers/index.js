import { combineReducers } from 'redux'
import animal from './animal'
import auth from './auth'

const rootReducer = combineReducers({
  animal,
  auth,
})

export default rootReducer
