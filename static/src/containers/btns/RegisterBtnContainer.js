import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signUpFun } from '../../actions/userActions'
import Btn from '../../components/common/Button'

const BtnContainer = ({ signUpFun }) => (
    <Btn type={'submit'} onClick = { () => signUpFun()} btnName={'注册'} classes = {'btn btn-sign'}/>
)

BtnContainer.propTypes = {
    signUpFun: PropTypes.func
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
    { signUpFun }
)(BtnContainer)
