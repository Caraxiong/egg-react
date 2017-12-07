import React from 'react'
import PropTypes from 'prop-types'

const Btn = ({ onClick ,btnName, classes }) => (
    <a href="javascript:void(0)" className={ classes } onClick = { onClick }><i></i>{ btnName }</a>
)

Btn.propTypes = {
    onClick: PropTypes.func.isRequired,
    btnName: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired
}

export default Btn
