import React from 'react'
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Login from '../views/Account/Login'
import Register from '../views/Account/Register'
import CoreLayout from '../layouts/coreLayout/CoreLayout'
import PageNoFound from '../taopiaopiao/error/404/PageNoFound'

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={({location}) => (<CoreLayout location= {location}/>)}/>
            <Route exact path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route component={PageNoFound} />
        </Switch> 
    </BrowserRouter>
)
export default routes