import React, { Component } from 'react';
import { createResume } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import QualificationInfo from './QualificationInfo';
import SkillsInfo from './SkillsInfo';
import ExperienceInfo from './ExperienceInfo';

class CreateResume extends Component {

  state ={
    step : 1
  }

  handleClick = (e) => {
    if(e.target.id === 'next') {
      this.setState({
        step: this.state.step + 1
      })
    } else {
      this.props.dispatch(createResume(this.state))
    }
  }

  render() {
    const view = (this.state.step === 1) ? <PersonalInfo /> :
    (this.state.step === 2) ? <QualificationInfo />  :
    (this.state.step === 3) ? <SkillsInfo /> : <ExperienceInfo /> ;

    const next = (this.state.step === 4) 
    ?  <Link to='/resume'><button id='submit' className='btn submit-btn' onClick={this.handleClick}>Submit</button></Link>
     : <button id='next' className='btn next-btn' onClick={this.handleClick} > Next </button> ;
    return (
      <div className='App'>
        <div className='process-logos'>
        <i className="fas fa-user"></i>
        <i className="fas fa-user-graduate"></i>
        <i className="fas fa-wrench"></i>
        <i className="fas fa-users-cog"></i>
        </div>

          { view }        
          { next }
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapDispatchToProps)(CreateResume) ;







 // state = {
  //   firstName: '',
  //   lastName: '',
  //   mob_no: null,
  //   email: '',
  //   about: '',
  //   other_link: [],
  //   address: '',
  //   skill: [],
  //   languages: [],
  //   intrests: [],
  //   qualification: []
  // }