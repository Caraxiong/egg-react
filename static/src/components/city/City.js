import React, {
	PropTypes
} from 'react'
import provinceData from './assets/province'

for (let key in provinceData) {
	for (let i = 0; i < provinceData[key].length; i++) {
		provinceData[key][i].QF = key
		provinceData[key][i].label = provinceData[key][i].regionName
		provinceData[key][i].spell = provinceData[key][i].pinYin
		provinceData[key][i].value = provinceData[key][i].cityCode
	}
}

let hotArr = [{
	QF: "热门",
	label: "北京",
	spell: "Beijing",
	value: "34"
}, {
	QF: "热门",
	label: "上海",
	spell: "Shanghai",
	value: "35"
}, {
	QF: "热门",
	label: "广州",
	spell: "Guangzhou",
	value: "36"
}]


let province = {
	'热门': hotArr,
	...provinceData
}

const {
	Item
} = List

class City extends Component {
	getInitialState() {

	}
	render() {
		return (
			<div id="city" className="fadeInDown" onClick={this.getCityItem}
			style={{display: this.state.show ? 'block' : 'none'}}>
				<span className="close-city" onclick={this.closeCity}>×</span>
				<ListView.IndexedList
					dataSource={this.state.dataSource}
					renderHeader={() => <span>城市选择</span>}
					renderSectionHeader={(sectionData) => (<div className='ih'>{sectionData}</div>)}
					renderRow={(rowData) => (<Item>{rowData</Item>)}
					className="fortest"
					style={{
						height: '100%',
						overflow: 'auto',
					}}
					quickSearchBarStyle={{
						position: 'absolute',
						top: 150,
					}}
				/>
			</div>
		)
	}
}