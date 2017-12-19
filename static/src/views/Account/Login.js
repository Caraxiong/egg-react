import React,{Component} from 'react'
import LoginContainer from '../../containers/account/LoginContainer'
import '../../style/common.scss'

class Login extends Component{
    render(){
        return(
            <div className="account-box">
                <form >
                    <div className = "account-form">
                       <LoginContainer />
                    </div>
                </form>
            </div>
        )
    }
}
export default Login
