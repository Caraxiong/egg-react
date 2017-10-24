import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import ThunkMiddleware from 'redux-thunk'
//引入请求 middleware 的工厂方法
import createFetchMiddleware from 'redux-composable-fetch'
import rootReducer from './reducers'
//创建一个请求middleware的示例
const FetchMiddleware = createFetchMiddleware()

const finalCreateStore = compose(
    applyMiddleware(
        ThunkMiddleware,
        //将请求middleware注入store增强器中
        FetchMiddleware
    )
)(createStore)
const reducer = combineReducers(Object.assign({}, rootReducer, {
    routing: routerReducer,
}));
export default function configureStore(initialState) {
    const store = finalCreateStore(reducer, initialState)
    return store
}
