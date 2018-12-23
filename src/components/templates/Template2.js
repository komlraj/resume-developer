import React, { Component } from 'react'

export default class Template2 extends Component {
  render() {
    console.log("template 2 render")
    const {data} = this.props;
  // if(data.message) { return (<h1> {data.message} </h1>) } else 
    return (
      <div>
       <div className='row'>
         <div className='col-1-3'>
           <p>
             <span>Your nameHere</span>
             <span>Job Title</span>
           </p>
         </div>
         <div className='col-1-3'>image</div>
         <div className='col-1-3'>
           <p>
           <i className="fas fa-home"></i>
           <span></span>
           </p>
           <p>
            <i className="fas fa-phone"></i>
            <span></span>
           </p>
           <p>
            <i className="fas fa-envelope"></i>
            <span></span>
           </p>
         </div>
       </div>

       <div className='row'>
          <div className='col-1-2'>
            <h5>Summary</h5>
            <p>{  }</p>
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
            <p>{  }</p>
            <p>{ }</p>
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
