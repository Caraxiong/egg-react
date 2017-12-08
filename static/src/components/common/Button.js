import React from 'react'
import PropTypes from 'prop-types'

const Btn = ({ onClick ,btnName, type }) => (
    <button type={type} className="btn btn-blue" onClick = { onClick }><i></i>{ btnName }</button>
)

Btn.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Btn
