import React , {Component, PropTypes} from 'react'
import './Slide.scss'
import SwiperAction from '../../lib/swiper.min.js';

class Slide extends Component {
  constructor(props){
    super(props)
    this.state = {
      imgs: []
    }
  }

  componentWillMount(){
    this.props.requestData('http://127.0.0.1:7001/movie/swiper').then(data => {
      this.setState({
        imgs: data.data.returnValue
      });
      new SwiperAction('.swiper-container', {
        loop:true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction:false
      })
    })
  }

  render(){
    return(
      <section>
        <div className="swiper-container" id="swiper">
          <div className="swiper-wrapper">
            {
              this.state.imgs.map((item) => {
                return <div className="swiper-slide" key={item.id}>
                          <img className="imgs" src={`https://gw.alicdn.com/${item.smallPicUrl}`}/>
                      </div>
              })
            }
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    )
  }
}
Slide.propTypes = {
  requestData: PropTypes.func.isRequired
}

export default Slide