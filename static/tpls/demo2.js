//数据更新过程
import React, { Component , PropTypes } from 'react';

class App extends Component {
	componentWillReceiveProps(nextProps) {
		//此方法可以作为 React 在 props 传入后，渲染之前 setState 的机会。在此方法中调用 setState 是不会二次渲染的
	}
	shouldComponentUpdate(nextProps , nextState) {
		//return true
		//当方法返回 false 的时候，组件不再向下执行生命周期方法。
	}
	componentWillUpdate(nextProps,nextState) {
		//不能在 componentWillUpdate 中执行 setState
	}
	componentDidUpdate(prevProps, prevState) {
		//
	}
	render() {
		return <div>this is a demo</div>
	}
}