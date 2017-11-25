import React , { Component } from 'react'
import PropTypes from 'prop-types'
import './toast.scss'

const Toast = ({bool , toastText , onClick}) => {
	let display = ''
	switch ( bool ){
		case true:
			display = 'flex'
			break
		default:
			display = 'none'
			break
	}
	return (
		<div className = "toast" style = {{ display:display }} >
			<div className = "toast-model">
				<div className = "toast-header">温馨提示
					<i className="close" onClick = { onClick }>×</i>
				</div>
				<div className = "toast-body">{toastText}</div>
			</div>
		</div>
	)
}

Toast.propTypes = {
    bool: PropTypes.bool,
	toastText: PropTypes.string.isRequired,
  	onClick: PropTypes.func
}

export default Toast
