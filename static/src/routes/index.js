import React from 'react'
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom'

import Home from '../views/Home'
import Login from '../views/Account/Login'
import Register from '../views/Account/Register'

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
)
export default routes
