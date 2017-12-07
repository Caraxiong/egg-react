import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginInFun } from '../../actions/userActions'
import Btn from '../../components/common/Btn'

const BtnContainer = ({ loginInFun }) => (
    <Btn onClick = { () => loginInFun()} btnName={'登录'} classes = {'btn btn-sign'}/>
)

BtnContainer.propTypes = {
    loginInFun: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        bool: state.toast.bool,
        toastText: state.toast.toastText
    }
}

export default connect(
    mapStateToProps,
    { loginInFun }
)(BtnContainer)
