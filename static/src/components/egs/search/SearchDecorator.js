import React, {
	Component
} from 'react'

//完成SearchInput 与 List的交互
const searchDecorator = WrappedComponent => {
	class SearchDecorator extends Component {
		constructor(props) {
			super(props);
			this.handleSearch = this.handleSearch.bind(this);
		}

		handleSearch(keyword) {
			this.setState({
				data: this.props.data,
				keyword,
			});
			this.props.onSearch(keyword);
		}

		render() {
			const {
				data,
				keyword
			} = this.state;
			return (
				<WrappedComponent
					{...this.props}
					data = { data }
					keyword = { keyword }
					onSearch = {this.handleSearch }
				/>
			)
		}
	}
	return SearchDecorator;
}