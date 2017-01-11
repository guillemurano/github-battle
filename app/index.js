var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./config/routes')
var Raven =  require('raven-js');

ReactDOM.render(
    Routes,
    document.getElementById('app'));