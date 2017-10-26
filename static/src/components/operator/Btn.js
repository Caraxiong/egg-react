import React from 'react'
import PropTypes from 'prop-types'

const Btn = ({ onClick ,btnName }) => (
    <a href="javascript:void(0)" className="btn btn-blue" onClick = { onClick }><i></i>{ btnName }</a>
)

Btn.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Btn
