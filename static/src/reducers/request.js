import { Toast } from 'ant-mobile'
import { RECEIVE_DATA, PUSHLOADSTACK, POPLOADSTACK } from '../ActionTypes'

const ACTION_HANDLERS = {
  [RECEIVE_DATA]: (state, action) => {
    return ({...state, json: action.payload})
  },
  [PUSHLOADSTACK]: (state, action) => {
    state.loadStack.push(1)
     return { ...state }
  },
  [POPLOADSTACK]: (state, action) => {
    state.loadStack.pop()
    return { ...state }
  }
}

const initialState = {
  json: {},
  loadStack: []
}

const requestReducer = (state = initialState, action) => {
  const hanlder = ACTION_HANDLERS[action.type]
  return hanlder? hanlder(state, action) : state
}

export default requestReducer