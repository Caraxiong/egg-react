import React, {
  Component,
  PropTypes
} from 'react'
import provinceData from './assets/province'
import { ListView, List } from 'antd-mobile';

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
	constructor(props) {
    super(props)
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID]
    const getRowData = (dataBlob, secitonID, rowID) => dataBlob[rowID] 

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    const dataBlob = {}; //dataBlob原始数据
    const secitonIDs = [];
    const rowIDs = [];
    Object.keys(province).forEach((item, index) => {
      secitonIDs.push(item);
      dataBlob[item] = item;
      rowIDs[index] = [];

      province[item].forEach(jj => {
        rowIDs[index].push(jj.value);
        dataBlob[jj.value] = jj.label;
      })
    })

    this.state =  {
      dataSource: dataSource.cloneWithRowsAndSections(dataBlob, secitonIDs, rowIDs), //要更新datasource中的数据,clone方法会自动提取新数据并进行逐行对比（使用rowHasChanged方法中的策略），这样ListView就知道哪些行需要重新渲染了
      headerPressCount: 0,
      show: false
    }
  }
  
  componentWillReceiveProps (nextProps) {
    if(nextProps.city.show) {
      this.setState({
        show: true
      })
    }else{
      this.setState({
        show: false
      })
    }
  }

  getCityItem (event) {
    let ele = event.target
    if (ele.className === 'am-list-content' && !/div/.test(ele.innerHTML)) {
      this.props.updateCity(ele.innerHTML);
    }
  }

  closeCity () {
    this.props.closeCity();
  }

	render() {
    console.log('this.props',this.props)
		return (
			<div id="city" className="fadeInDown" onClick={this.getCityItem}
			style={{display: this.state.show ? 'block' : 'none'}}>
				<span className="close-city" onClick={this.closeCity}>×</span>
				<ListView.IndexedList
					dataSource={this.state.dataSource}
					renderHeader={() => <span>城市选择</span>}
					renderSectionHeader={(sectionData) => (<div className='ih'>{sectionData}</div>)}
					renderRow={(rowData) => (<Item>{rowData}</Item>)}
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

export default City