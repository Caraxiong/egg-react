import React, {
	Component
} from 'react'

class SelectInput extends Component {
	static displayName = 'SelectInput';

	render() {
		// selectItem: 显示用户所选项
		// isActive: 当前下拉状态
		// onClickHeader: 反馈下拉状态
		// placeholder:下拉框提示
		const {
			selectItem,
			isActive,
			onClickHeader,
			placeholder
		} = this.props

		const {
			text
		} = selectItem

		return (
			<div>
				<div onClick = {onClickHeader} >
					<Input 
						type="text" 
						disabled 
						value="text" 
						placeholder={placeholder}
						/>
					<Icon className={isActive} name="angle-down" />
				</div>
			</div>
		)
	}
}
export default SelectInput