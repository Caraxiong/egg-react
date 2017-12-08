import React,{Component} from 'react'
import InputNameContainer from '../../containers/account/InputNameContainer'
import InputPswContainer from '../../containers/account/InputPswContainer'
import LoginBtnContainer from '../../containers/btns/LoginBtnContainer'
import '../../style/common.scss'

class Login extends Component{
    render(){
        return(
            <div className="account-box">
                <form >
                    <div className = "account-form">
                        <InputNameContainer />
                        <InputPswContainer />
                    </div>
                    <LoginBtnContainer />
                </form>
            </div>
        )
    }
}
export default Login
