import { connect } from 'react-redux';
import Header from './Header'
import { requestData,receiveData } from '../../reducers/request';
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
  return {
    home: state.home,
    request: state.request,
    city: state.city,
    user: state.user,
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchtoProps)(Header)

export default HeaderContainer