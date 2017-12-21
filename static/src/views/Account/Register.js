import React,{Component} from 'react'
import RegisterContainer from '../../containers/account/RegisterContainer'

class Register extends Component{
    render(){
        return(
            <div className="account-box">
                <div className = "account-form">
                    <RegisterContainer />
                </div>
            </div>
        )
    }
}
export default Register
