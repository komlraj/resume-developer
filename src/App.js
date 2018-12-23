import React, { Component } from 'react';
import './App.scss';
import {Link} from 'react-router-dom';

class App extends Component {
   
  render() {
    return (
      <div className="App">
        <Link to='/templates' className='btn' >Get Start</Link>
      </div>
    );
  }
}

export default App;
