import React , { Component }from 'react';

class Select extends Component {
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			vals: ['1','2']
		}
	}
	handleChange(e){
		const { options } = e.target;
		//这里options是一个对象 ，并非数组
		const vals = Object.keys(options)
					.filter( i => options[i].selected === true )
					.map( i => options[i].value );

		this.setState({
			vals,
		})
	}
	render(){
		const { vals } = this.state; 
		return (
			<select multiple = {true} value = {vals} onChange = { this.handleChange }>
				<option value = '1'>1</option>
				<option value = '2'>2</option>
				<option value = '3'>3</option>
			</select>
			)
	}
}
export default Select