import React, { Component } from 'react';
import { setSkillsInfo } from '../../actions';
import { connect } from 'react-redux';

class SkillsInfo extends Component {

  state = {
    
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleClick = () => {
    this.props.dispatch(setSkillsInfo(this.state));
  }

  render() {
    return (
      <div>
        <p><input className='input-box' placeholder='Skill Type' onChange={this.handleChange} /></p>
        <p>
          <label>skill Percentage</label>
          <input placeholder='enter digit for percentage' onChange={this.handleChange} />
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

export default connect(mapDispatchToProps)(SkillsInfo) ;