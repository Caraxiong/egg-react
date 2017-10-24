import {
    SHOW_TOAST,
    HIDE_TOAST
} from '../constants/ActionTypes'

const initState = {
    bool: false,
    toastText: ''
}

const global = (state = initState, action) => {
     switch(action.type) {
         case HIDE_TOAST:
             return { ...state, ...{bool: false, toastText: '' }}
         case SHOW_TOAST:
             return { ...state, ...{bool: true, toastText: 'toast 弹框提示' }}
        default:
            return state
     }
}

export default global
