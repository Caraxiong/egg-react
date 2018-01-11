import { connect } from 'react-redux';
import HomeView from './HomeView'
import { requestData,receiveData } from '../../actions/RequestActions';
import {
	showCity
} from '../../actions/CityActions'
import {
	loginOutFun
} from '../../actions/userActions'

const mapDispatchtoProps = {
  requestData,
  receiveData,
  showCity,
  loginOutFun
}

const mapStateToProps = (state) => {
  console.log('HeaderContainer',state.user)
  return {
    home: state.home,
    request: state.request,
    city: state.city,
    user: state.user,
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(HomeView)