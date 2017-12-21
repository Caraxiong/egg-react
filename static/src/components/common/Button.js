import React from 'react'
import PropTypes from 'prop-types'

const Btn = ({ btnName, type }) => (
    <button type={type} className="btn btn-blue"><i></i>{ btnName }</button>
)

Btn.propTypes = {
}

export default Btn
