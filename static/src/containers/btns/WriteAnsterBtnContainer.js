import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { showToastFun } from '../../actions/toastActions'
import Btn from '../../components/operator/Btn'

const BtnContainer = ({ showToastFun }) => (
    <Btn onClick = { () => showToastFun()} btnName={'写回答'}/>
)

BtnContainer.propTypes = {
    showToastFun: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        bool: state.toast.bool,
        toastText: state.toast.toastText
    }
}

export default connect(
    mapStateToProps,
    { showToastFun }
)(BtnContainer)
