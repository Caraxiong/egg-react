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
    type: types.SHOWCITY
  }
}

const showCity = () => {
  return {
    type: types.CLOSECITY
  }
}

export { updateCity, closeCity, showCity}