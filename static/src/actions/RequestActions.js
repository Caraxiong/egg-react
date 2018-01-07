import * as types from './ActionTypes'
import {
  Toast
} from 'antd-mobile'
const receiveData = (json) => {
  return {
    type:types.RECEIVE_DATA,
    payload: {
      data: json
    }
  }
}

const pushLoadStack = () => {
  return {
    type: types.PUSHLOADSTACK
  }
}

const popLoadStack = () => {
  return {
    type: types.POPLOADSTACK
  }
}

export const requestData = url => (dispatch, getState) => {
  if(!getState().request.loadStack.length) {
    Toast.loading('加载中……',1000000)
  }
  dispatch(pushLoadStack())
  return fetch(url)
    .then(response => console.log('response',response))
   
} 

export const actions = {
  receiveData,
  requestData
}