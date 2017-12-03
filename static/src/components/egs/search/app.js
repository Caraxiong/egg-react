const FinalSelector = compose(asyncSelectDecorator, searchDecorator, selectedItemDecorator)(Selector);

class SearchSelect extends Component {
	render() {
		return (
			<FinalSelector {...this.props}>
				<SelectInput /> 
				<SearchSelect />
				<List /> 
			</FinalSelector>
		)
	}
}