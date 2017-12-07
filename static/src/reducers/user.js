import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
} from '../actions/ActionTypes'

const initState = {
    user: null,
    status: null,
    error: null,
    loading: false
};

const global = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, ...{
                user: null,
                status: 'login',
                error: null,
                loading: true
            }}
        case LOGIN_USER_SUCCESS:
            return { ...state, ...{
                user: action.payload.user,
                status: 'authenticated',
                error: null,
                loading: false
            }}
        case LOGIN_USER_FAILURE:
            return { ...state, ...{
                user: null,
                status: 'login',
                error: action.payload.error,
                loading: false
            }}
        case LOGOUT_USER:
            return { ...state, ...{
                user: null,
                status: 'logout',
                error: null,
                loading: false
            }}
        case SIGNUP_USER:
            return { ...state, ...{
                user: null,
                status: 'signup',
                error: null,
                loading: true
            }}
        case SIGNUP_USER_SUCCESS:
            return { ...state, ...{
                user: action.payload.user,
                status: 'authenticated',
                error: null,
                loading: false
            }}
        case SIGNUP_USER_FAILURE:
            return { ...state, ...{
                user: null,
                status: 'signup',
                error: action.payload.error,
                loading: false
            }}
        default:
            return state
    }
}
export default global
