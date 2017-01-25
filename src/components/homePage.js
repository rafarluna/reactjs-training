"use strict"

var React = require("react");

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Rafas Administration</h1>
                <p>Rect, React Router, and flux for ultra-responsive web app.s</p>
            </div>
        );
    }
});


module.exports = Home;