import React, {
	PropTypes
} from 'react'
import Footer from '../../components/footer/Footer'
import City from '../../components/city/CityContainer'
import HomeContainer from '../../components/home/HomeContainer'


const CoreLayout = ({
	children,
	location
}) => {
	return (
		<div className='container tc'>
		<div className='cl-viewport'>
			{children}
		</div>
    <HomeContainer />
    <City/>
	  <Footer { ...location } />
	</div>
	)
}

// CoreLayout.propTypes = {
// 	children: PropTypes.element.isRequired
// }

export default CoreLayout