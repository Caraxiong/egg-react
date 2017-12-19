import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import toast from './toast'
import user from './user'

const commentsApp = combineReducers({
  form: formReducer,  // <-- redux-form
  toast,
  user
})

export default commentsApp
