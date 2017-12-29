import { connect } from 'react-redux';
import City from './City';
import { requestData } from '../../reducers/request';
import { updateCity, closeCity } from '../../actions/CityActions'

const mapDispatchtoProps = {
  requestData,
  updateCity,
  closeCity
}

const mapStateToProps = ( state ) => ({
  home: state.home,
  request: state.request,
  city: state.city
})

export default connect(mapStateToProps, mapDispatchtoProps)(City)