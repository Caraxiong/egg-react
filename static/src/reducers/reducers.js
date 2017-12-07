import { combineReducers } from 'redux'
import toast from './toast'
import user from './user'

const commentsApp = combineReducers({
  toast,
  user
})

export default commentsApp
