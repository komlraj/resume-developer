import React, { Component } from 'react';
import '../../scss/temp1.scss';

export default class Template1 extends Component {
  render() {
    // const {data} = this.props;
    // console.log(data, "data in template 1")
  // if(data.message) { return (<h1> {data.message} </h1>) } else 
    return (
      <div className='temp1 wrapper'> 
       <div className='row'>
         <div className='col-1-3'>
          <p className='user_name color2'>
            <span className='user_name-first'>Komal</span>
            <span className='user_name-last'>Raj</span>
          </p>
          <p className='user_designation color2'>Cutomer Service Professional</p>
         </div>
         <div className='col-1-3'><span className='user_img'></span></div>
         <div className='col-1-3'>
           <div className='user_shortDetails'>
           <p className='user_detail'>
           <i className="fas fa-home logo"></i>
           <span className='user_add'>altcampus,rakkar, himachal pradesh</span>
           </p>
           <p className='user_detail'>
            <i className="fas fa-phone logo"></i>
            <span className='user_no'>8674837392</span>
           </p>
           <p className='user_detail'>
            <i className="fas fa-envelope logo"></i>
            <span className='user_mail'>kmlraj131996@gmail.com</span>
           </p>
           </div>
         </div>
       </div>

       <div className='row'>
          <div className='col-1-2'>
            <h5 className='sub-title color2'>Summary</h5>
            <p className='summary-desc'>Hello, I am KOMAL RAJ from Muzaffarpur Bihar. My goal in life is to always love what I'm doing. This includes my study, my work and my past time, I want to love it all, who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to see the moonlight at night. I like to motivate people and like to get inspirations from great people. </p>
            <div>
            <h5 className='sub-title color2'>Skills & Abilities</h5>
              <ul className='skill-desc'>
                <li>Well versed in computers : MS office</li>
                <li>application and E-marketing,</li>
                <li>Excellent communication skill and sales ex[erience,</li>
                <li>Training and development of new employees.</li>
              </ul>
            </div>
            <div>
              <h5 className='sub-title color2'>Languages</h5>
              <div className='language'>
                <div className=''>
                  <div>90%</div>
                  <span>Hindi</span>
                </div>
                <div>
                  <div>70%</div>
                  <span>Hindi</span>
                </div>
                <div>
                  <div>50%</div>
                  <span>English</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className='sub-title color2'>Interests</h5>

            </div>
          </div>
          <div className='middle-border'></div>
          <div className='col-1-2'>
            <p className='education-wrapper'>
              <span className='color2'>2002-2009</span>
              <i className="fas fa-graduation-cap color2"></i>
            </p>
            <p className='edu-add color2'>University of Washington, Seattle, WA</p>
            <p className='edu-add'>Bachelor of Arts in Communication Studies</p>
            <p className='professional-exp color2'>Professional Experience</p>
            <div>
              <p className='company-session'>
                <span className='color2'>Comapny 1 Seattle, WA</span>
                <span className='color2'>2008-present</span>
              </p>
              <p className='color2  company-session'>position: Product Manager </p>
              <p className='work-desc'>Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task.</p>
            </div>
            <div>
              <p className='company-session'>
                <span className='color2'>Comapny 2 Seattle, WA</span>
                <span className='color2'>2004-2008</span>  
              </p>
              <p className='color2  company-session'>position: Developmental Edior </p>
              <p className='work-desc'>Recursion is a programming pattern that is useful in situations when a task can be naturally split into several tasks of the same kind, but simpler. Or when a task can be simplified into an easy action plus a simpler variant of the same task.</p>
            </div>
          </div>
       </div>
      </div>
    )
  }
}
