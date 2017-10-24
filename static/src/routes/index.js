import React from 'react'
import {BrowserRouter,Route, Link,Switch} from 'react-router-dom'

import Home from '../views/Home'

const routes = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
)
export default routes
