import React,{ Component } from 'react';
import classnames from 'classnames'
import './Film.scss'

class Film extends Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount () {

  }

  componentDidMount(){

  }
  render(){
    return(
      <section>
        <div id="v-slide-content" className="rel">
          <ul className="v-slide-box slide-action abs" ref="slideBox" style={{transform: `translateX(${this.state.moveLength}px)`}}>
            {
this.state.filmLists.map((item, index) => {
  return <li key={item.id}>
  <img className={classnames({
    'click-select': index === 0
  })} style={{height: '1.8rem'}} src={`https://gw.alicdn.com/${item.poster}`} data-id={item.id}/>
  </li>
})
            }
          </ul>
        </div>
        <div id="sel-film">
          <p>{this.state.film.showName}</p>
          <div className="full-star rel"></div>
        </div>
      </section>
    )
  }
}