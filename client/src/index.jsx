// Application entrypoint. Load up the application styles
require("../styles/application.scss");
require("react-places-autocomplete");
require("react-google-places")
import $ from 'jquery';

// Render the top-level React component
import React from 'react';
import { Router, Route, Switch } from 'react-router'
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(
  <App/>, document.getElementById('react-root'));
