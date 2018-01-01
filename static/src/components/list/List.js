import React, {
	Component
} from 'react'
import CinameViewHeader from './Header'
import CinameItem from './Item'

class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<section>
				<CinameViewHeader {...this.props} />
				<CinameItem {...this.props}/>
			</section>
		)
	}
}

List.propTypes = {

}

export default List