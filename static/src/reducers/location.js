import { LOCATION_CHANGE } from '../actions/ActionTypes'

const initialState = null

const locationReducer = (state = initialState, action) => {
  return action.type === LOCATION_CHANGE ? action.payload : state
}

export default locationReducer
