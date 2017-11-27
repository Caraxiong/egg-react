import React, { Component } from 'react';
import PropType from 'prop-types'

class ListItem extends Component {
	static contextType = {
		color: PropTypes.string,
	};
	render() {
		const { value } = this.props;

		return (
			<li style={{ background: this.context.color }}>
				<span>{ value }</span>
			</li>
		);
	}
}
class List extends Component {
	static childContextTypes = {
		color: PropTypes.string,
	};
	getChildContext() {
		return {
			color: 'red',
		}
	}
	render() {
		const { list } = this.props;
		
		return (
			<div>
				<ul>
					{list.map((entry, index) => {
						<ListItem key={`list-${index}`} value={entry.text} />
					})}
				</ul>
			</div>
		)
	}
}
export default List