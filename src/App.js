import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'
import Templates from './components/Templates';
import TemplatePreview from './components/TemplatePreview';
import CreateResume from './components/createResume/CreateResume';
import Resume from './components/Resume';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Template1 from './components/templates/Template1';

class App extends Component {
   
  render() {
    return (
      <div>
        <BrowserRouter>
      <div className='body'>
        <Navbar />
        <div className='wrapper'>
          <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path='/templates' component={Templates} />
            <Route path='/preview' component={TemplatePreview} />
            <Route path='/create' component={CreateResume} />
            <Route path='/resume' component={Resume} />
            <Route path='/temp' component={Template1} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
      </div>
    );
  }
}

export default App;
