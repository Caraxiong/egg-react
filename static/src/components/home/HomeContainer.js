import { connect } from 'react-redux'
import { requestData, receiveData } from '../../actions/RequestActions';
import { showCity } from '../../actions/CityActions'
import HomeView from './HomeView';

const mapDispatchtoProps = {
  requestData,
  receiveData,
  showCity
}

const mapStateToProps = (state) => ({
  home: state.home,
  request: state.request,
  city: state.city
})

export default connect(mapStateToProps, mapDispatchtoProps)(HomeView)