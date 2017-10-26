import React,{Component} from 'react'
import ToastContainer from '../containers/constants/ToastContainer'
import WriteAnsterBtnContainer from '../containers/btns/WriteAnsterBtnContainer'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <ToastContainer />
                <WriteAnsterBtnContainer />
            </div>
        )
    }
}
export default Home
