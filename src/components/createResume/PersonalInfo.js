import React, { Component } from 'react';
import { setPersonalInfo } from '../../actions';
import { connect } from 'react-redux';

class PersonalInfo extends Component {

  state = {
    firstName: '',
    lastName: '',
    mob_no: null,
    email: '',
    about: '',
    address : ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch(setPersonalInfo(this.state));
  }

  render() {
    return (
      <div>
        <p>
          <input className='input-box' placeholder='First Name' id='firstName' onChange={this.handleChange} />
          <input className='input-box' placeholder='Last Name' id='lastName' onChange={this.handleChange} />
        </p>
        <p>
          <input className='input-box' placeholder='Mob No' id='mob_no' onChange={this.handleChange} />
          <input className='input-box' placeholder='email' id='email' onChange={this.handleChange} />
        </p>
        <p>
          <textarea className='textarea-box' placeholder='About your self' id='about' onChange={this.handleChange} ></textarea>
        </p>
        <p>
          <textarea className='textarea-box' placeholder='Address' id='address' onChange={this.handleChange} >

          </textarea>
        </p>
        <button className='btn save-btn' onClick={this.handleClick} > save </button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapDispatchToProps)(PersonalInfo) ;