import * as types from '../constants/ActionTypes'

const showToast = (bool,toastText) => {
	return {
		type : types.SHOW_TOAST,
		bool,
		toastText
	}
}

const hideToast = (bool,toastText) => {
	return {
		type : types.HIDE_TOAST,
		bool,
		toastText
	}
}

export const showToastFun = (bool,toastText) => dispatch => {
	dispatch(showToast(bool,toastText))
}

export const hideToastFun = (bool,toastText) => dispatch => {
	dispatch(hideToast(bool,toastText))
}
