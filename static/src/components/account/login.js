import React, {Component, PropTypes } from 'react'
import {
	Link
} from 'react-router-dom'
import { reduxForm , Field, SubmissionError } from 'redux-form'
import {
	loginInFun, loginInSuccessFun, loginInFailureFun
} from '../../actions/userActions'

const loginIn = (values, dispatch) => {
	return dispatch(loginInFun(values))
		.then((result) => {
			if(result.payload.response && result.payload.response.status !== 200) {
				dispatch(loginInFailureFun(result.payload.response.data))
				throw new SubmissionError(result.payload.response.data);
			}

			dispatch(loginInSuccessFun(result.payload.data))
		})
}

class LoginForm extends Component {
	static contextTypes = {
		router: PropTypes.object
	}
	componentWillMount() {

	}
	componentWillReceiveProps(nextProps) {
		if(nextProps.user.status === 'authenticated' && nextProps.user.user && !nextProps.user.error) {
			this.context.router.push('/');
		}

		if(nextProps.user.status === 'signin' && !nextProps.user.user && nextProps.user.error && !this.props.user.error) {
			alert(nextProps.user.error.message)
		}
	}

	render() {
		const {asyncValidating, handleSubmit, submitting } = this.props
		return (
			<div className = "container">
				<form onSubmit={ handleSubmit(validateAndSignInUser) }>
					<Field
						name="username"
						type="text"
						component={ renderField }
						label="@username*" />
					<Field
						name="password"
						type="password"
						component={ renderField }
						label="Password" />
					<div>
						<button
							type="submit"
							className="btn btn-primary"
							disabled={ submitting }>
							提交
						</button>
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
