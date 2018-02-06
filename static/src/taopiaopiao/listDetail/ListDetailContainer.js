import { connect } from 'react-redux';
import { updateArea, getAreaData } from '../../actions/ListActions';
import { requestData, receiveData } from '../../actions/RequestActions';
import CinemaDetailView from './ListDetail';

const mapDispatchtoProps = {
	updateArea,
	getAreaData,
  requestData,
  receiveData
}

const mapStateToProps = (state) => ({
	list: state.list,
  request: state.request
})

export default connect(mapStateToProps, mapDispatchtoProps)(CinemaDetailView)
