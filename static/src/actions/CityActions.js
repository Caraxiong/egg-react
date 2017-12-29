import * as types from './ActionTypes'

const updateCity = ( city ) => {
  return {
    type: types.UPDATECITY,
    payload: {
      name: city
    }
  }
}

const closeCity = () => {
  return {
    type: types.CLOSECITY
  }
}

const showCity = () => {
  return {
    type: types.SHOWCITY
  }
}

export { updateCity, closeCity, showCity}