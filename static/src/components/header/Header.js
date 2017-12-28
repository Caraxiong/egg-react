import React, { Component } from 'react' 
import classnames from 'classnames'
import  './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hot: true
    }
  }

  componentDidMount () {

  }

  showCity () {
    this.props.showCity()
  }

  render() {
    return (
        <header className="h-header">
          <div className="l" onClick={this.showCity.bind(this)}>
            <span>{this.props.city.name}</span>
            <span></span>
          </div>
          {/* <div className="r sel-list rel" onClick={this.switchList.bind(this)}>
            <div className={classnames({
              'list-action':this.state.hot
            })} data-list="hot">
              正在热映
            </div>
            <div className={classnames({
              'list-action':this.state.hot
            })} data-list="coming">
              即将上映
            </div>
            <span className={classnames({
              'abs': true,
              'col': !this.state.hot
            })}></span>
          </div> */}
        </header>
    )
  }
}

Header.propTypes = {
  // switchList: React.PropTypes.func.isRequired,
  showCity: React.PropTypes.func.isRequired,
  city: React.PropTypes.object.isRequired
}

export default Header