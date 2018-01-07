import React, {
	PropTypes
} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import classnames from 'classnames'
import './Footer.scss'

import List from '../list/ListContainer'
import hokIcon from './assets/hok.svg'
import hnoIcon from './assets/hno.svg'
import mokIcon from './assets/mok.svg'
import mnoIcon from './assets/mno.svg'
import eokIcon from './assets/eok.svg'
import enoIcon from './assets/eno.svg'

export const Footer = (
	location
) => {
	let pathName = location.pathname
	let ft = null
	if (pathName === '/' || pathName === '/list' || pathName === '/me') {
		ft = (
			<section className = "footer-nav">
				<nav>
					<Link to='/'>
						<div className={classnames({
							'nav-icon':true,'rel':true,'hic':true,
							'nav-s':pathName==='/'
						})}>
							<img src={pathName === '/'? hokIcon: hnoIcon} />
						</div>
					</Link>
				</nav>
				<nav>
					<Link to="/list">
						<div className={classnames({
							'nav-icon': true, 'rel': true, 'nic': true,
							'nav-s': pathName === '/list'
						})}>
							<img src={pathName === '/list' ? mokIcon : mnoIcon} />
						</div>
					</Link> 
				</nav> 
				<nav>
					<Link to="/me">
						<div className={classnames({
							'nav-icon': true, 'rel': true, 'eic': true,
							'nav-s': pathName === '/me'
						})}>
							<img src={pathName === '/me' ? eokIcon : enoIcon} />
						</div>
					</Link> 
				</nav>
			</section>
		)
	}
	return (
		<Router>
			<section>
				{ft}
				<Route path="/list" component={List}/>
				<Route path="/list" component={List}/>
			</section>
		</Router>
	)
}


export default Footer