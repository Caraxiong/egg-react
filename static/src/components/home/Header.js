import React, {
  Component,
  PropTypes
} from 'react'
import {
  loginOutFun
} from '../../actions/userActions'
import classnames from 'classnames'
import './Header.scss'

class Header extends Component {
  constructor(props) {
    super(props);
    this.loginOut = this.loginOut.bind(this);
  }

  componentDidMount() {

  }

  showCity() {
    this.props.showCity()
  }

  loginOut() {
    loginOutFun()
  }

  render() {
    const props = this.props;
    return (
      <header className="h-header">
          <div className="l" onClick={this.showCity.bind(this)}>
            <span>{this.props.city.name}</span>
            <span></span>
          </div>
          <div className="r sel-list rel">
            welcome!
            {/* {this.props} */}
            <button onClick={ this.loginOut }>Sign out</button>
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