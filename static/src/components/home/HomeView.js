import React, {Component} from 'react'
import HomeHeader from './Header';
import Slide from './Slide';
import './HomeView.scss';
class HomeView extends Component{
  render () {
    return (
      <section id="home">
        <HomeHeader {...this.props}/>
        <Slide {...this.props}/>
      </section>
    )
  }
}
export default HomeView