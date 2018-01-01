import React from 'react'
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from '../views/Home'
import Login from '../views/Account/Login'
import Register from '../views/Account/Register'
import CoreLayout from '../layouts/coreLayout/CoreLayout'
import PageNoFound from '../components/error/404/PageNoFound'
import Cinema from '../components/list/ListContainer'

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={CoreLayout}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/cinema" component={Cinema}/>
            <Route component={PageNoFound} />
        </Switch> 
    </BrowserRouter>
)
export default routes