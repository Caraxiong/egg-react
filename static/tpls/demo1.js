//组件的挂载和卸载
import React, { Component, PropTypes } from 'react;

class App extends Component {
	static propTypes = {
		//props 类型检查
	};

	static defaultProps = {
		//props 默认类型,
		//这两个属性被声明成静态属性，意味着从类外面也可以访问它们，比如可以这么访问：App.propTypes 和 App.defaultProps。
	};
	constructor(props) {
		super(props);
		this.state = {
			//初始化时的 state
		}
	}
	componentWillMount() {
	 	//render 方法之前执行,在组件初始化时运行一次
	}
	componentDidMount() {
		//render 方法之后执行,在组件初始化时运行一次
		//componentDidMount 中执行 setState 方法,组件当然会再次更新，不过在初始化过程就渲染了两次组件
	}
	componentWillUnmount() {
		//执行一些清理方法，如事件回收或是清除定时器
	}
	render() {
		return <div>this is a demo</div>;
	}
}