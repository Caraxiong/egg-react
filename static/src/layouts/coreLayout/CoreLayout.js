import React, {
	PropTypes
} from 'react'
import Footer from '../../components/footer/Footer'
import City from '../../components/city/CityContainer'


const CoreLayout = ({
	location
}) => {
	return (
		<div className='container tc'>
		{/* <div className='cl-viewport'>
		</div> */}
    <City/>
	  <Footer { ...location } />
	</div>
	)
}

// CoreLayout.propTypes = {
// 	children: PropTypes.element.isRequired
// }

export default CoreLayout