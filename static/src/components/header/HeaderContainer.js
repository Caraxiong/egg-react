import {
	connect
} from 'react-redux';
import {
	Header
} from './Header'
import {
	showCity
} from '../../actions/CityActions'

const mapDispatchtoProps = {
	showCity
}
export default connect(mapDispatchtoProps)(Header)