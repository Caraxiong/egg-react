import React, {
	PropTypes
} from 'react'
import Footer from '../../components/footer/Footer'
import City from '../../components/city/CityContainer'


const CoreLayout = ({
	children,
	location
}) => (
	<div className='container tc'>
		<div className='cl-viewport'>
			{children}
		</div>
    	<City/>
		<Footer/>
	</div>
)

// CoreLayout.propTypes = {
// 	children: PropTypes.element.isRequired
// }

export default CoreLayout