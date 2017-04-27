// Application entrypoint. Load up the application styles
require("../styles/application.scss");
require("react-places-autocomplete");
require("react-google-places")
import $ from 'jquery';

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Launch from './LaunchPage.jsx';
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

ReactDOM.render(
  <App/>, document.getElementById('react-root'));
  //  <Router>
  //   <div>
  //     <Route path="/trips" component={App} />
  //     <Route exact path="/" component={Launch} />
  //   </div>
  // </Router>
