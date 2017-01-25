"use strict";

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

var Header = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="app" className="navbar-brand">
                        <img src="images/logo.png" alt="" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="app"> Home </Link></li>
                        <li><Link to="authors"> Authors </Link></li>
                        <li><Link to="about"> About </Link></li>
                    </ul>
                </div>
            </nav>
        );
    } 
});

module.exports = Header;



/**
 * NOTES !!!
 * "Link" is the object to generate link, "to" is a property to set the NAME of the route 
 * (specified in "routers.js")
 * <Link to="app"> Home </Link>
 * 
 * 
 */