import React, {
	Component
} from 'react'
import PropTypes from 'prop-types'
class TabNav extends Component {
	static propTypes = {
		classPrefix: React.PropTypes.string,
		panels: PropTypes.node,
		activeIndex: PropTypes.number,
	}
	getTabs() {
		const {
			panels,
			classPrefix,
			activeIndex
		} = this.props

		return React.Children.map(panels, (child) => {
			if (!child) {
				return;
			}

			const order = parseInt(child.props.order, 10);

		})
	}
}