import React, {Component, PropTypes } from 'react'
import {
	Link
} from 'react-router-dom'
import { reduxForm , Field, SubmissionError } from 'redux-form'
import {
	signUpFun, signUpSuccessFun, signUpFailureFun
} from '../../actions/userActions'
import Input from '../common/Input'
import Btn from '../common/Button'

const signUp = (values, dispatch) => {
	return new Promise((resolve, reject) => {
		let response = dispatch(signUpFun(values))
		// response.payload.then((result) => {
		let result = response.payload
		if(result.response && result.response.status !== 200) {
			dispatch(signUpFailureFun(result.response.data))
			// throw new SubmissionError(result.response.data);
			reject(result.response.data)
		}
		dispatch(signUpSuccessFun(result.response.data))
		resolve();
		// }).catch( result => {
		// 	dispatch(loginInFailureFun(result.response.data))
		// 	reject(result.response.data)
		// })
	})
}

class RegisterForm extends Component {
	static contextTypes = {
		router: PropTypes.object
	}
	componentWillMount() {

	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
			this.context.router.history.push('/');
		}

		if(nextProps.user.status === 'signup' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
			alert(nextProps.user.error.message)
		}
	}

	render() {
		const {asyncValidating, handleSubmit, submitting } = this.props
		return (
			<div className = "container">
				<form onSubmit={ handleSubmit(signUp) }>
					<Field
						name="username"
						type="text"
						component={ Input }
						placeholder="@username*" />
					<Field
						name="password"
						type="password"
						component={ Input }
						placeholder="Password" />
					<Field
						name="password"
						type="password"
						component={ Input }
						placeholder="Sure Password" />
					<div>
						<Btn type={'submit'} btnName={'注册'} classes = {'btn btn-sign'} disabled={ submitting } />
						<Link
							to="/"
							className="btn btn-error"
							>取消</Link>
					</div>
				</form>
			</div>
		)
	}
}


export default reduxForm({
	form: 'register'  //a unique name for the form
})(RegisterForm)
