import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginInFun } from '../../actions/userActions'
import Btn from '../../components/common/Button'

const BtnContainer = ({ loginInFun }) => (
    <Btn type={'submit'} onClick = { () => loginInFun()} btnName={'登录'} classes = {'btn btn-sign'}/>
)

BtnContainer.propTypes = {
    loginInFun: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        status: state.user.status,
        error: state.user.error,
        loading: state.user.loading
    }
}

export default connect(
    mapStateToProps,
    { loginInFun }
)(BtnContainer)
