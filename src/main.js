import React from 'react';
import ReactDOM from 'react-dom';
// import { render } from 'react-dom';
// import { Router, Route, browserHistory,IndexRoute } from 'react-router';
// import App from './components/App/App.jsx';

import routes from './config/routes.js';

// render((
//   // <App />,
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Main} />
//       <Route path="/dashboard" component={Recibo} />
//     </Route>
//   </Router>
//   ), document.getElementById('container'));

ReactDOM.render(routes, document.getElementById('container'));
