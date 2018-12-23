import React, { Component } from 'react';
import { connect } from 'react-redux';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import Template4 from './templates/Template4';
import Template5 from './templates/Template5';

class Resume extends Component {

  

    renderComponent = (id) => {
      console.log(Number(id),"in render component function")
      var tempId = Number(id) ;
      switch (tempId) {
        case 1:
        console.log('temp 1')
          return <Template1 data={this.props.data}/>;
        case 2:
          return <Template2 data={this.props.data}/>;
        case 3:
          return <Template3 data={this.props.data}/>;
        case 4:
          return <Template4 data={this.props.data}/>;
        case 5:
          return <Template5 data={this.props.data}/>;
        default:
          break;
      }
    }

  render() {
    const { id } = this.props;
    console.log(id, "template id in resume")
  return (
    <div>
      {this.renderComponent(id)}
    </div>
  )
  }
}

function mapStateToProps(state) {
  if(state) {
    return {
      id: state.templateId,
      data : state
    }
  } else {
    return {
      data : {
        message : 'Go To Home Page'
      }
    }
  }
  
}

export default connect(mapStateToProps)(Resume) ;