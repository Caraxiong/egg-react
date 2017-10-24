import { combineReducers } from 'redux'
import comments from './comments'
import toast from './toast'
import dialog from './dialog'

const commentsApp = combineReducers({
  toast
})

export default commentsApp
