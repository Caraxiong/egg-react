import React from 'react'
import PropType from 'prop-types'

const Search = ({onClick}) => {
	<div>
		<input type="text">
		<a href="javascript" onClick = { onClick }></a>
	</div>
}

Search.propTypes = {
	onClick: PropTypes.func.isRequired
}
export default Search