import React,{Component} from 'react'
import InputNameContainer from '../../containers/account/InputNameContainer'
import InputPswContainer from '../../containers/account/InputPswContainer'
import RegisterBtnContainer from '../../containers/btns/RegisterBtnContainer'

class Register extends Component{
    render(){
        return(
            <div className="account-box">
                <form>
                    <div className = "account-form">
                        <InputNameContainer />
                        <InputPswContainer />
                        <InputPswContainer />
                    </div>
                    <RegisterBtnContainer />
                </form>
            </div>
        )
    }
}
export default Register
