import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
  <Router>
   <div>
    <Route
    exact
    path="/login"
    component={Login}
    />
     <Route
       exact
       path='/'
       component={App}
     />

   </div>
   </Router>,
  document.getElementById('root'));
registerServiceWorker();
