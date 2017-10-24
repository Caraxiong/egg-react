import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { hideToastFun } from '../../actions/toastActions'
import Toast from '../../constants/Toast'

const ToastContainer = ({ bool , toastText , hideToastFun }) => (
    <Toast bool = { bool } toastText = {toastText} onClick = {() => hideToastFun()} />
)

ToastContainer.propTypes = {
    bool: PropTypes.bool,
    toastText: PropTypes.string,
    hideToastFun: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        bool: state.toast.bool,
        toastText: state.toast.toastText
    }
}

export default connect(
    mapStateToProps,
    { hideToastFun }
)(ToastContainer)
