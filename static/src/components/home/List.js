import React, { PropTypes } from 'react'

const Item = ( { item } ) => (
	<li className="">
		{ item }
		<i></i>
	</li>
)

Item.propTypes = {
	item: PropTypes.string.isRequired
}


class List = ( { list }) => (
	<ul>
		{ list.map (item => 
			<Item key = { item.id } {...item} />
		)}
	</ul>
)
List.propTypes = {
	list: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		item: PropTypes.string
	}).isRequired).isRequired
}
export default List