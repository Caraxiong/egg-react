import React,{Component} from 'react'
import ToastContainer from '../containers/constants/ToastContainer'
import WriteAnsterBtnContainer from '../containers/btns/WriteAnsterBtnContainer'
import Header from '../components/header/Header'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header />
                <ToastContainer />
                <WriteAnsterBtnContainer />
            </div>
        )
    }
}
export default Home
