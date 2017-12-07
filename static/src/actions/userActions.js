import * as types from './ActionTypes'

const loginIn = ( formValues ) => {
    // 需要发送请求，todo
    return {
        type: types.LOGIN_USER,
        payload: formValues
    }
}

const loginInSuccess = ( user ) => {
    // 需要发送请求，todo
    return {
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    }
}

const loginInFailure = ( error ) => {
    // 需要发送请求，todo
    return {
        type: types.LOGIN_USER_FAILURE,
        payload: error
    }
}

const loginOut = () => {
    return {
        type: types.LOGOUT_USER
    }
}

const signUp = ( formValues ) => {
    // 需要发送请求，todo
    return {
        type: types.SIGNUP_USER,
        payload: formValues
    }
}

const signUpSuccess = ( user ) => {
    // 需要发送请求，todo
    return {
        type: types.SIGNUP_USER_SUCCESS,
        payload: user
    }
}

const signUpFailure = ( error ) => {
    // 需要发送请求，todo
    return {
        type: types.SIGNUP_USER_FAILURE,
        payload: error
    }
}

export const loginInFun = () => dispatch => {
    dispatch(loginIn(formValues))
}

export const loginInSuccessFun = () => dispatch => {
    dispatch(loginInSuccess(user))
}

export const loginInFailureFun = () => dispatch => {
    dispatch(loginInFailure(error))
}

export const loginOutFun = () => dispatch => {
    dispatch(loginOut())
}

export const signUpFun = () => dispatch => {
    dispatch(signUp(formValues))
}

export const signUpSuccessFun = () => dispatch => {
    dispatch(signUpSuccess(user))
}

export const signUpFailureFun = () => dispatch => {
    dispatch(signUpFailure(error))
}
