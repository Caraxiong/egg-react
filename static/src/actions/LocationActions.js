import { LOCATION_CHANGE } from './ActionTypes'

const locationChange = (location = '/') => {
  return {
    type: LOCATION_CHANGE,
    payload: location
  }
}

const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}

export { updateLocation }