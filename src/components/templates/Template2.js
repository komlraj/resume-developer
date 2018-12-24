import React, { Component } from 'react';
import '../../scss/temp2.scss';

export default class Template2 extends Component {
  render() {
    console.log("template 2 render")
    const {data} = this.props;
  // if(data.message) { return (<h1> {data.message} </h1>) } else 
    return (
      <div className='temp2'>
       <div className='aside'>
        <div className='aside-wrapper'>
          <div className='top'>
            <div className='user'>
              <div className='img'></div>
              <p>Your NameHere</p>
              <p>job Title</p>
            </div>
            <p></p>
          </div>
          <div className='down'>
            <p>Adress-Street line City, ST 100003</p> 
            <div>
              <p>T 000 000 0000</p>
              <p>M 000 000 000</p>
            </div>
          </div>
        </div>
       </div>
       <main className='main'>
        <div className='experience'>
          <div className='logo'></div>
          <div className='user_experience-container'>
          <div className='user_experience'>
            <p className='job-title'>JOB TITLE, COMPANY NAME</p>
            <span>city, State  2012-2015</span>
            <p>Ut enim ad minil veniam, quis nostrud exerc. irure dolor in reprehend incididunt ut labore et dolore magra alique. Ut enim ad minil viniam, quis nostrud exerci es.  </p>
            <ul>
              Accomplishments:
              <li>
                Ut enim ad minil veniam, quis nostrud exerc
              </li>
              <li>
                Exercitation ulamco laboris nisi ut aliquip ex co mmodo consequat.
              </li>
              <li>
              Ut enim ad minil veniam, quis nostrud exerc
              </li>
            </ul>
          </div>
          <div className='user_experience'>
            <p className='job-title'>JOB TITLE, COMPANY NAME</p>
            <span>city, State  2012-2015</span>
            <p>Ut enim ad minil veniam, quis nostrud exerc. irure dolor in reprehend incididunt ut labore et dolore magra alique. Ut enim ad minil viniam, quis nostrud exerci es.  </p>
            <ul>
              Accomplishments:
              <li>
                Ut enim ad minil veniam, quis nostrud exerc
              </li>
              <li>
                Exercitation ulamco laboris nisi ut aliquip ex co mmodo consequat.
              </li>
              <li>
              Ut enim ad minil veniam, quis nostrud exerc
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className='education'>
          <div className='logo'></div>
          <div className='user_education-container'>
            <div className='user_education'>
              <span>DIPLOMA</span>
              <span>School Name  2003-2005</span>
              <p>Ut enim ad minil veniam, quis nostrud exerc. irure dolor in reprehend incididunt ut labore et dolore magra alique. Ut enim ad minil viniam, quis nostrud exerci es.  </p>
            </div>
            <div className='user_education'>
              <span>DIPLOMA</span>
              <span>School Name  2003-2005</span>
              <p>Ut enim ad minil veniam, quis nostrud exerc. irure dolor in reprehend incididunt ut labore et dolore magra alique. Ut enim ad minil viniam, quis nostrud exerci es.  </p>
            </div>
          </div>
        </div>
        <div className='skills'>
        <div className='logo'></div>
          <div className='user_skills-container'>
            <table>
              <tr>
                Professional
                <td>skill #1</td>
                <td>skill #2</td>
                <td>skill #3</td>
                <td>skill #4</td>
              </tr>
              <tr>
                Software
                <td>skill #1</td>
                <td>skill #2</td>
                <td>skill #3</td>
                <td>skill #4</td>
              </tr>
              <tr>
                Languages
                <td>skill #1</td>
                <td>skill #2</td>
                <td>skill #3</td>
                <td>skill #4</td>
              </tr>
            </table>
          </div>
        </div>
       </main>
      </div>
    )
  }
}
