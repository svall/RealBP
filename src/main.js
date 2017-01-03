'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router';
import App from './components/App/App.jsx';

ReactDOM.render(
  <App />,
  /*<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/dashboard" component={App} />
  </Router>*/
  document.getElementById('container'));
