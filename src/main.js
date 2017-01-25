//This file is the entry point of the app

$ = jQuery = require("jquery");
var React = require("react");
var Home = require("./components/homePage");
var About = require("./components/about/aboutPage");
var Header = require("./components/common/headers");

var Authors = require("./components/authors/authorPage");

(function (win) { //catching all parameters we need useing an alias
    "use strict";

    var App = React.createClass({
        render: function () {
            var Child;

            switch (this.props.route) {
                case "about": Child = About; break;
                case "authors": Child = Authors; break;
                default: Child = Home;
            }

            return (
                <div>
                    <Header />
                    <Child />
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById("app"));
    }

    win.addEventListener("hashchange", render);

    //Call render to define the componet to display
    render();

})(window); //injecting all dependencies we need
