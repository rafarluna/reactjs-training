"use strict"

var React = require("react");

var About = React.createClass({

    statics: { //this should be "statics"
        //willTransitionTo  ==> Is used when the transition is comming
        //willTransitionFrom    ==> Is used when the transition is leaving

        willTransitionTo: function (transition, params, query, callback) {
            if (!confirm("Are you sure you want to read this page?")) {
                //if the logic is false, so we cancel (abort) the transition
                transition.abort();
            }
            else {
                //if the logic is true, so we call the callback to finish the transition
                callback();
            }
        },
        willTransitionFrom: function (transition, component) {
            if (!confirm("Are you sure you want to LEAVER FROM this page?")) {
                //if the logic is false, so we cancel (abort) the transition
                transition.abort();
            }
        }
    },

    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>

        );
    }
});

module.exports = About;