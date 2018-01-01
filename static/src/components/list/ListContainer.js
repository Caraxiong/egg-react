import {
	connect
} from 'react-redux'
import {
	updateArea,
	getAreaData
} from '../../actions/ListActions'

import {
	requestData,
	receiveData
} from '../../actions/RequestActions'

import {
	showCity
} from '../../actions/CityActions'

import List from './List'

const mapDispatchtoProps = {
	updateArea,
	getAreaData,
	requestData,
	receiveData,
	showCity
}

const mapStateToProps = (state) => ({
	cinema: state.cinema,
	request: state.request,
	city: state.city
})

export default connect(mapStateToProps, mapDispatchtoProps)(List)