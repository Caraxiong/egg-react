import React,{Component} from 'react'
import Banner from '../layouts/Banner.js'
import Content from '../components/Home/Content.js'
import IssuesList from '../components/Home/IssuesList.js'
import Live from '../components/Home/Live.js'
import Answer from '../components/Home/Answer.js'

class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Banner />
                <Content />
                <div className = "w center">
                    <div className ="fl left-box">
                        <Answer />
                    </div>
                    <div className="fr right-box">
                        <IssuesList />
                        <Live />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home
