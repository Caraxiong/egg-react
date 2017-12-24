import React, {
	PropTypes
} from 'react'
import Footer from '../../components/footer/Footer'


const CoreLayout = ({
	children,
	location
}) => (
	<div className='container tc'>
		<div className='cl-viewport'>
			{children}
		</div>
		<Footer/>
	</div>
)

// CoreLayout.propTypes = {
// 	children: PropTypes.element.isRequired
// }

export default CoreLayout