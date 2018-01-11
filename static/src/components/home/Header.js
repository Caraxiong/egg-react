import React, {
  Component,
  PropTypes
} from 'react'
import classnames from 'classnames'
import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  showCity() {
    this.props.showCity()
  }

  loginOut() {
    this.props.loginOutFun()
  }

  render() {
    const props = this.props;
    console.log('props',props)
    return (
      <header className="h-header">
          <div className="l" onClick={this.showCity.bind(this)}>
            <span>{props.city.name}</span>
            <span></span>
          </div>
          <div className="r sel-list rel">
            welcome!
            {  props.user.user !== null ? props.user.user.username : 'cara' }
            <button onClick={ this.loginOut.bind(this) }>Sign out</button>
          </div>
        </header>
    )
  }
}

Header.propTypes = {
  // switchList: React.PropTypes.func.isRequired,
  showCity: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
}

export default Header