import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signUpFun } from '../../actions/userActions'
import Btn from '../../components/common/Btn'

const BtnContainer = ({ signUpFun }) => (
    <Btn onClick = { () => signUpFun()} btnName={'注册'} classes = {'btn btn-sign'}/>
)

BtnContainer.propTypes = {
    signUpFun: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        bool: state.toast.bool,
        toastText: state.toast.toastText
    }
}

export default connect(
    mapStateToProps,
    { signUpFun }
)(BtnContainer)
