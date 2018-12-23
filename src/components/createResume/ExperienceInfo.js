import React, { Component } from 'react';
import { setExperienceInfo } from '../../actions';
import { connect } from 'react-redux';

class ExperienceInfo extends Component {

  state = {
    session : '',
    jobTitle : '',
    company : '',
    workExperience : ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch(setExperienceInfo(this.state));
  } 

  render() {
    return (
      <div>
        <p><input id='session' className='input-box' placeholder='Experience session' onChange={this.handleChange} /></p>
        <p><input id='company' className='input-box' placeholder='Company Name' onChange={this.handleChange} /></p>
        <p><input id='jobTitle' className='input-box' placeholder='Designation' onChange={this.handleChange} /></p>
        <p><input id='workExperience' className='input-box' placeholder='Work Experience' onChange={this.handleChange} /></p>

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

export default connect(mapDispatchToProps)(ExperienceInfo) ;