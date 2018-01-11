import { connect } from 'react-redux';
import Header from './Header'
import { requestData,receiveData } from '../../reducers/request';
import {
	showCity
} from '../../actions/CityActions'

const mapDispatchtoProps = {
  requestData,
  receiveData,
  showCity
}

const mapStateToProps = (state) => ({
  home: state.home,
  request: state.request,
  city: state.city,
  user: state.user
})

const HeaderContainer = connect(mapStateToProps, mapDispatchtoProps)(Header)

export default HeaderContainer