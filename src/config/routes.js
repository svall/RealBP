var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
// var App = require('../components/App/App');
// var Home = require('../components/Recibo/Recibo');
// var Recibo = require('../components/Recibo/Recibo');
import App from '../components/App/App';
import Home from '../components/Home/Home';
import Recibo from '../components/Recibo/Recibo';
import Resumen from '../components/Resumen/Resumen';


var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/recibo' component={Recibo} />
      <Route path='/resumen' component={Resumen} />
    </Route>
  </Router>
);

module.exports = routes;
