import React,{Component} from 'react'
import LoginContainer from '../../containers/account/LoginContainer'
import '../../style/common.scss'

class Login extends Component{
    render(){
        return(
            <div className="account-box">
                <div className = "account-form">
                   <LoginContainer />
                </div>
            </div>
        )
    }
}
export default Login
