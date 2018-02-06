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
    this.slideAction = false; //标志是否可滑，false:可以
    this.clickAction = false; //标志是否可点，false:可以
    this.flagTimer = false; //setTimeout时间参数
    this.imgNumber = 0; //轮播图数量
    this.slideWidth = 0; //所有轮播图宽度和
    this.imgGap = 0; //轮播图间距
    this.slideBoxLength = 0; //轮播图盒子宽度
    this.slideMaxLength = 0; //最大滑动距离
    this.changeLength = 0; //touch滑动的距离
    this.moveLength = 0; //滑动的距离左边的距离
    this.startX = 0; //开始滑动的位置
    this.moveX = 0; //滑动到的位置
    this.prevMoveX = 0; //上一次滑动到的位置
    this.moveSpeed = 0; //滑动速度
    this.speedMultiple = 40;  //滑动的倍数
    this.slideOffset = 0; //用来判断位置
    this.leftBoundary = false; //左边界
    this.rightBoundary = false; //右边界
  }

  componentWillMount () {
    let cinemaData = this.props.list.data;
    if(this.isEmptyObject(cinemaData)){
      return false;
    }
    this.props.requestData('http://127.0.0.1:7001/movie/cinema_detail').then((data) => {
      let filmLists = data.data.returnValue.shows;
      this.setState({
        filmLists: filmLists,
        film: filmLists[0]
      });
      let liEle = this.refs.slideBox.querySelector('li');
      this.imgGap = parseInt(window.getComputedStyle(liEle, null).getPropertyValue('margin-right'));
      //给轮播的ul赋宽度值
      this.computeSlideWidth.call(this, this.refs.slideBox);
    })
  }

  componentDidMount(){
    let slideBox = this.refs.slideBox;
    this.addListenEvent(slideBox)
  }

  computeSlideWidth(slideBox) {
    let imgEles = slideBox.querySelectorAll('img');
    let loadNumber = 0;
    let content = this;
    this.imgNumbers = imgEles.length;
    [...imgEles].forEach((item) => {
      item.onload = function(){
        this.setAttribute('data-width', this.clientWidth);
        //计算轮播图总宽度
        content.slideWidth += this.clientWidth;
        loadNumber++;
        //当全部计算完成
        if(loadNumber === content.imgNumbers){
          //屏幕宽度
          let winWidth = document.documentElement.clientWidth || document.body.clientWidth;
          //轮播图盒子宽度为所有图片长度加间距
          let slideBoxLength = content.slideWidth + ((content.imgNumbers-1)*content.imgGap);
          //最多轮播图数量
          content.slideMaxLength = slideBoxLength - winWidth - 16;
          slideBox.style.width = slideBoxLength + 'px'
        }
      }
    })
  }

  selectFilm(event, slideBox) {
    let ele = event.target;
    this.slideAction = true;
    this.clickAction = true;
    clearTimeout(this.flagTimer);
    if(ele.tagName === 'IMG'){
      let winWidth = document.documentElement.clientWidth || document.body.clientWidth;
      let selfWidth = +ele.getAttribute('data-width');
      let id = ele.getAttribute('data-id');
      console.log('film',this.getObjById(id, this.state.filmLists))
      this.setState({
        film: this.getObjById(id, this.state.filmLists)
      })
      //清空选中 重新选中
      let imgEles = slideBox.querySelectorAll('img');
      for(let i =0;i < imgEles.length;i++){
        if(imgEles[i].className === 'click-select') {
          imgEles[i].className = '';
          break;
        }
      }
      ele.className = 'click-select';
      //重新计算宽度
      this.reComputeSlideWidth(slideBox);
      //判断位置定位
      this.slideOffset = (winWidth - selfWidth)/2 - ele.offsetLeft;
      if(this.slideOffset > 0){
        this.slideOffset = 0
      }else if(this.slideOffset < -this.slideMaxLength){
        this.slideOffset = -this.slideMaxLength;
      }
      this.setTranslate(slideBox, this.slideOffset);
      this.flagTimer = setTimeout(() => {
        this.clickAction = false;
      }, 200)
    }
  }

  slideStart (event) {
    this.slideAction = false;
    this.startX = event.touches[0].clientX;
  }

  slideMove(event, slideBox){
    //左右边界
    this.leftBoundary = false;
    this.rightBoundary = true;
    this.moveX = event.touches[0].clientX;
    this.changeLength = this.moveX - this.startX;
    this.moveLength = this.slideOffset + this.changeLength;
    if(this.moveLength > 0 && this.changeLength > 0){
      this.leftBoundary = true;
      this.setTranslate(slideBox, 0);
      return;
    }
    if(this.moveLength < -this.slideMaxLength && this.changeLength < 0){
      this.rightBoundary = true;
      this.setTranslate(slideBox, -this.slideMaxLength);
      return;
    }
    this.setTranslate(slideBox, this.moveLength)
    this.moveSpeed = this.moveX - this.prevMoveX;
    this.prevMoveX = this.moveX;
  }

  slideEnd(event, slideBox){
    if(this.leftBoundary) {
      this.slideOffset = 0;
    }else if(this.rightBoundary){
      this.slideOffset = -this.slideMaxLength;
    }else {
      this.slideAction = true;
      if(Math.abs(this.moveSpeed) < 2){
        this.moveSpeed = 0;
      }
      this.slideOffset = this.moveLength + this.moveSpeed * this.speedMultiple;
      if(this.slideOffset > 0 ){
        this.slideOffset = 0
      }else if(this.slideOffset < -this.slideMaxLength){
        this.slideOffset = -this.slideMaxLength;
      }
      this.setTranslate(slideBox, this.slideOffset);
    }
  }

  addListenEvent(slideBox) {
    slideBox.addEventListener('click', event => {
      this.selectFilm.call(this, event, slideBox);
    },false);
    
    slideBox.addEventListener('touchstart', event => {
      if(this.clickAction === false){
        this.slideStart.call(this, event);
      }
    },false)

    slideBox.addEventListener('touchmove', event => {
      if(this.clickAction === false) {
        this.slideMove.call(this, event , slideBox);
      }
    },false)

    slideBox.addEventListener('touchend', event => {
      if(this.clickAction === false) {
        this.slideEnd.call(this, event , slideBox);
      }
    },false)
  }

  reComputeSlideWidth(slideBox) {
    let imgEles = slideBox.querySelectorAll('img');
    let winWidth = 0;
    let slideBoxLength = 0;
    this.slideWidth = 0;
    Array.prototype.forEach.call(imgEles, item => {
      this.slideWidth += item.clientWidth;
      item.setAttribute('data-width',item.clientWidth);
    })
    winWidth = document.documentElement.clientWidth || document.body.clientWidth;
    slideBoxLength = this.slideWidth + ((this.imgNumbers-1) * this.imgGap);
    this.slideMaxLength = slideBoxLength - winWidth - 8;
    slideBox.style.width = slideBoxLength + 'px';
  }
  // 根据id获取对象
  getObjById(id, lists){
    for(let i = 0; i< lists.length; i++){
      if(+lists[i].id === +id){
        return lists[i]
      }
    }
    return false
  }
  setTranslate(slideBox, length){
    this.setState({
      moveLength: length
    })
  }
  isEmptyObject(e){
    let t;
    for(t in e){
      return !1;
    }
    return !0
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
            <span className="score abs">{this.state.film.remark}</span>
          </div>
        </div>
      </section>
    )
  }
}
export default Film