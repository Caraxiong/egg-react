import { UPDATECITY, SHOWCITY, CLOSECITY } from '../actions/ActionTypes'

const ACTION_HANDLERS = {
  [UPDATECITY]: (state, action) => ({...action.payload, show: false}),
  [SHOWCITY]: (state) => ({...state, show:true}),
  [CLOSECITY]: (state) => ({...state,show: false})
}

const initialState = {
  name: '北京',
  show: false
}

const cityReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}


export default cityReducer


