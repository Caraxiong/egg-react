import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import toast from './toast'
import user from './user'
import city from './city'
import location from './location'
import request from './request'

const commentsApp = combineReducers({
  form: formReducer,  // <-- redux-form
  toast,
  user,
  city,
  request
})

export default commentsApp
