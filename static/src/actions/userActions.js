import * as types from './ActionTypes'

const loginInFun = ( formValues ) => {
    console.log(formValues)
    // 需要发送请求，todo
    return {
        type: types.LOGIN_USER,
        payload: {
            response: {
                status: 200,
                data: formValues
            }
        }
    }
}

const loginInSuccessFun = ( user ) => {
    // 需要发送请求，todo
    return {
        type: types.LOGIN_USER_SUCCESS,
        payload: user
    }
}

const loginInFailureFun = ( error ) => {
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

const signUpFun = ( formValues ) => {
    // 需要发送请求，todo
    return {
        type: types.SIGNUP_USER,
        payload: {
            response: {
                status: 200,
                data: formValues
            }
        }
    }
}

const signUpSuccessFun = ( user ) => {
    // 需要发送请求，todo
    return {
        type: types.SIGNUP_USER_SUCCESS,
        payload: user
    }
}

const signUpFailureFun = ( error ) => {
    // 需要发送请求，todo
    return {
        type: types.SIGNUP_USER_FAILURE,
        payload: error
    }
}

export { loginInFun, loginInSuccessFun, loginInFailureFun, signUpFun, signUpSuccessFun, signUpFailureFun}

export const loginOutFun = () => dispatch => {
  dispatch(loginOut())
}