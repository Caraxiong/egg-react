import React, {
	PropTypes
} from 'react'
import Footer from '../../components/footer/Footer'
import City from '../../components/city/CityContainer'


const CoreLayout = ({
	children,
	location
}) => {
  console.log('children',children)
	return (
		<div className='container tc'>
		<div className='cl-viewport'>
			{children}
		</div>
    <City/>
	  <Footer { ...location } />
	</div>
	)
}

// CoreLayout.propTypes = {
// 	children: PropTypes.element.isRequired
// }

export default CoreLayout