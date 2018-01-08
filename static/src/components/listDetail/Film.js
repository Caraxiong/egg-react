import React,{ Component } from 'react';
import classnames from 'classnames'
import './Film.scss'

class Film extends Component {
  constructor (props) {
    super(props);
    this.state = {
      film: {},
      filmLists:[],
      moveLength:0
    }

  }

  componentWillMount () {
    let cinemaData = this.props.list.data;
    if(this.isEmptyObject(cinemaData)){
      return false;
    }
    this.props.requestData('/movie/cinema_detail').then((data) => {
      let filmLists = data.data.returnValue.shows;
      this.setState({
        filmLists: filmLists,
        film: filmLists[0]
      });
      let liEle = this.refs.slideBox.querySelector('li');
      this.imgGap = parseInt(window.getComputedStyle(liEle, null).getPropertyValue('margin-right'));
      this.computeSlideWidth.call(this, this.refs.slideBox);
    })
  }

  componentDidMount(){

  }

  computeSlideWidth(slideBox) {
    let imgEles = slideBox.querySelectorAll('img');
    let loadNumber = 0;
    let content = this;
    this.imgNumbers = imgEles.length;
    [...imgEles].forEach((item) => {
      item.onload = function(){
        this.setAttribute('data-width', this.clientWidth);
        content.slideWidth += this.clientWidth;
        loadNumber++;
        if(loadNumber === content.imgNumbers){
          
        }
      }
    })
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
          <div className="full-star rel">
            <div className="score-start" style={{width: `${this.state.film.remark*10}%`}}></div>
            <span className="score abs">{this.state.file.remark}</span>
          </div>
        </div>
      </section>
    )
  }
}