"use strict"

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Rafas Administration</h1>
                <p>Rect, React Router, and flux for ultra-responsive web app.s</p>
                <Link to="about" className="btn btn-primary btn-lg">Lear more...</Link>                
            </div>
        );
    }
});


module.exports = Home;