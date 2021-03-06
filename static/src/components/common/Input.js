import React from 'react'
import PropTypes from 'prop-types'

const Input = ({input, type, name, placeholder}) => (
    <div className="input-box">
        <input { ...input } type={ type } name={ name } placeholder={ placeholder } />
    </div>
)
Input.propTypes = {
}

export default Input
