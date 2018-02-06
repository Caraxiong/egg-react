import React, { Component } from 'react';
import { 
  withRouter,
  Route
} from 'react-router-dom';
import CinemaDetailHeader from './Header';
import Film from './Film';
import Period from './Period';
import Back from '../back/Back';

class ListDetail extends Component {
    render () {
        return (
          <Route render={({location: pathname,history}) => (
            <section>
              <CinemaDetailHeader {...this.props} /> 
              <Film {...this.props} /> 
              <Period />
              <Back router={history} location={location} />
            </section>
          )}/>
        )
  }
}

export default withRouter(ListDetail);
