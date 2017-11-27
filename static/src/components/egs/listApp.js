import React,{ Component } from 'react'
import List from './kuajitongxin'

class ListApp extends Component {
	constructor(props) {
		super(props);
		this.handleItemChange = this.handleItemChange.bind(this);
	}
	handleItemChange(item) {
		console.log(item);
	}
	render() {
		return (
			<List list={[{text: 1, checked: true},{text: 2}]} handleItemChange={this.handleItemChange} />
		)
	}
}

export default ListApp