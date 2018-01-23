import React, {
	PropTypes
} from 'react'
import {
	BrowserRouter as Router,
	Route,
  Link,
  NavLink
} from 'react-router-dom'
import classnames from 'classnames'
import './Footer.scss'

import List from '../list/ListContainer'
import Me from '../me/meView'
import Home from '../home/HomeContainer'
import Detail from '../listDetail/ListDetailContainer'
import hokIcon from './assets/hok.svg'
import hnoIcon from './assets/hno.svg'
import mokIcon from './assets/mok.svg'
import mnoIcon from './assets/mno.svg'
import eokIcon from './assets/eok.svg'
import enoIcon from './assets/eno.svg'

const MenuLink = ({to, okIcon , noIcon, activeOnlyWhenExact}) => (
  <Route path = {to} exact={activeOnlyWhenExact} children={({match}) => (
    <Link to={to}>
      <div className={classnames({
        'nav-icon':true,'rel':true,'hic':true,'nav-s':match
      })}>
        <img src={match? okIcon: noIcon} />
      </div>
    </Link>
  )}/>
)
export const Footer = (
	location
) => {
	let pathName = location.pathname
	let ft = null
	if (pathName === '/' || pathName === '/list' || pathName === '/me') {
		ft = (
			<section className = "footer-nav">
				<nav>
          <MenuLink activeOnlyWhenExact={true} to='/' okIcon={hokIcon} noIcon={hnoIcon}/>
				</nav>
				<nav>
          <MenuLink to='/list' okIcon={mokIcon} noIcon={mnoIcon}/>
				</nav> 
				<nav>
          <MenuLink to='/me' okIcon={eokIcon} noIcon={enoIcon}/>
				</nav>
			</section>
		)
  }
  // const routes = [
  //   {
  //     path : 'list',
  //     component : List,
  //     routes :[
  //       {
  //         path : '/list/detail/:id',
  //         component : Detail,
  //       }
  //     ]
  //   }
  // ]
  // const RouteWithSubRoutes = (route) => (
  //   <Route path={route.path} render={ props => (
  //     <route.component { ...props } routes={route.routes} />
  //   )
  //   }/>
  // )
  // console.log('RouteWithSubRoutes', RouteWithSubRoutes(routes))
	return (
		<Router>
			<section>
				{ft}
       
        <Route exact path="/" render={() => <Home/>}/>
        <Route path="/list" render={() => <List/>}/>
        <Route path="/me" render={() => <Me/>}/>
        <Route path="/list/detail/:id" component={Detail}/>
			</section>
		</Router>
	)
}


export default Footer