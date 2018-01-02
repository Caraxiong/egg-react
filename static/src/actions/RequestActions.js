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
    .then(response => response.json())
    .then(json => {
      dispatch(receiveData(json))
      dispatch(popLoadStack())
      if(!getState().request.loadStack.length){
        /*延时是为了更好显示loading，可去掉*/
        window.setTimeout(() => {
          Toast.hide()
        },1000)
      }
      return json
    })
} 

export const actions = {
  receiveData,
  requestData
}