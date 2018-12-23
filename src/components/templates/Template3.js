import React, { Component } from 'react'

export default class Template3 extends Component {
  render() {
    const {data} = this.props;
  if(data.message) { return (<h1> {data.message} </h1>) } else 
    return (
      <div>
        <h1>Template-3</h1>
       <div className='row'>
         <div className='col-1-3'>
           <p>
             <span>{data.personalDetails.firstName}</span>
             <span>{ data.personalDetails.firstName}</span>
           </p>
         </div>
         <div className='col-1-3'>image</div>
         <div className='col-1-3'>
           <p>
           <i className="fas fa-home"></i>
           <span>{ data.personalDetails.address }</span>
           </p>
           <p>
            <i className="fas fa-phone"></i>
            <span>{ data.personalDetails.mob_no }</span>
           </p>
           <p>
            <i className="fas fa-envelope"></i>
            <span>{ data.personalDetails.email }</span>
           </p>
         </div>
       </div>

       <div className='row'>
          <div className='col-1-2'>
            <h5>Summary</h5>
            <p>{ data.personalDetails.about }</p>
            <h5>Skills & Abilities</h5>
            <p>Well versed in computers: Ms Office applications and E-marketing, Excellent communication skills and sales experience, training and development of new employess.</p>
            <h5>Languages</h5>
            <h5>Interests</h5>
          </div>
          <div className='col-1-2'>
            <p>
              <span>Job Session</span>
              <i className="fas fa-graduation-cap"></i>
            </p>
            <p>{ data.qualificationDetails.college }</p>
            <p>{ data.qualificationDetails.course }</p>
            <p>Professional Experience</p>
            <div>
              <span>Comapny address</span>
              <span>job session</span>
              <span>position: </span>
              <p>Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task.</p>
            </div>
            <div>
              <span>Comapny address</span>
              <span>job session</span>
              <span>position: </span>
              <p>Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task.</p>
            </div>
          </div>
       </div>
      </div>
    )
  }
}
