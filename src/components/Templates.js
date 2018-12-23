import React, { Component } from 'react'
import *  as  data from '../data.js';
import { connect } from 'react-redux';
import {setTemplate} from '../actions';
import {Link} from 'react-router-dom';

class Templates extends Component {

  handleClick = (e) => {
    this.props.dispatch(setTemplate(e.target.id))
  }

  render() {
    return (
      <div>
        <h2>Templates</h2>
        <div>
          {
            data.default.map((image, i) => {
              return <Link to='/create' key={i}><img src={image.img} id={image.id} className='templates' onClick={this.handleClick} /></Link>
            })
          }
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapDispatchToProps)(Templates) ;