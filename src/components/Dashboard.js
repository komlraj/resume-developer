import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
        <div className="App">
        <Link to='/templates' className='btn' >Get Start</Link>
      </div>
    )
  }
}

export default Dashboard ;