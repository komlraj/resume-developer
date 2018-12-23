import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Navbar from './components/Navbar';
import App from './App';
import Templates from './components/Templates';
import TemplatePreview from './components/TemplatePreview';
import CreateResume from './components/createResume/CreateResume';
import Resume from './components/Resume';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Template2 from './components/templates/Template2';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='body'>
        <Navbar />
        <div className='main'>
          <Switch>
            <Route path='/' component={App} exact />
            <Route path='/templates' component={Templates} />
            <Route path='/preview' component={TemplatePreview} />
            <Route path='/create' component={CreateResume} />
            <Route path='/resume' component={Resume} />
            <Route path='/temp' component={Template2} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));













// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
