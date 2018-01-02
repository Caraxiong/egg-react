import React from 'react'
import {
	render
} from 'react-dom'
import {
	createStore,
	applyMiddleware
} from 'redux'
import {
	Provider
} from 'react-redux'
import thunk from 'redux-thunk'
import {
	BrowserRouter,
	Route,
	Link,
	Switch
} from 'react-router-dom'
import routes from './routes/'
import reducer from './reducers/reducers'
import Home from './views/Home'
import './style/normalize.scss'
//测试二维码案例
// import QrCode from './components/egs/qr.js'
// render(<QrCode />,document.getElementById('root'))

//测试list checkbox
// import ListApp from './components/egs/eventemitter/list.js'
// render(<ListApp />, document.getElementById('root'))

// 测试tab
// import Tabs from './components/egs/tabs/Tabs.js'
// render(<Tabs />, document.getElementById('root'))

const middleware = [thunk]


const store = createStore(
	reducer,
	applyMiddleware(...middleware)
)

const init = () => {
	// console.log(store.getState())
}
init()
let unsubscribe = store.subscribe(init)
// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render(<Provider store={store}>
            {routes}
        </Provider>, document.getElementById('root'))