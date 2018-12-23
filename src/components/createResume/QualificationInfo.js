import React, { Component } from 'react';
import { setQualificationInfo } from '../../actions';
import { connect } from 'react-redux';

class QualificationInfo extends Component {

  state = {
    session : '',
    college : '',
    course : '',
    courseDetails : ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch(setQualificationInfo(this.state));
  }

  render() {
    return (
      <div>
        <p><input id='session' className='input-box' placeholder='Session' onChange={this.handleChange} /></p>
        <p><input id='college' className='input-box' placeholder='University' onChange={this.handleChange} /></p>
        <p><input id='course' className='input-box' placeholder='Course' onChange={this.handleChange} /></p>
        <textarea id='courseDetails' className='textarea-box' placeholder='About your course' onChange={this.handleChange} ></textarea>

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

export default connect(mapDispatchToProps)(QualificationInfo) ;