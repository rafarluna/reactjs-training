//This file is the entry point of the app
"use strict";

var React = require("react");
var Router = require("react-router");

var routes = require("./routes");

//--Router.HistoryLocation => remove from the URL the "#" character
//to get some like url/about, instead of
//to get some like url/#about
//*******
//Router.run(routes, Router.HistoryLocation, function(Handler){
//*******
Router.run(routes, function(Handler){
    React.render(<Handler/>, document.getElementById("app"));
});