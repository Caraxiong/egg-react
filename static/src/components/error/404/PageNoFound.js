import React, {
	Component,
	PropTypes
} from 'react'
import NotFoundImage from './assets/404.jpg'
import classes from './PageNotFound.scss'

const PageNotFound = ({
	location
}) => (
	<div className = {classes.container}>
		<h1>Page not found!!!</h1>
		<h3>
			<a className={classes.link}>Back</a>
		</h3>
		<h1 style={{ color:'red', marginTop: '30px'}}>not found {location.pathname}</h1>
	</div>
)

// PageNotFound.propTypes = {
// 	router: React.PropTypes.object.isRequired
// }
export default PageNotFound