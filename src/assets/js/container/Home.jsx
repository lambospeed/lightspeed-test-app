import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home;
