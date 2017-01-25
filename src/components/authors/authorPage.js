"use strict";

var React = require("react");

var App = require("../app");
var AuthorApi = require("../../api/authorApi");
var AuthorList = require("./authorList");

var AuthorPage = React.createClass({

    //initial state
    getInitialState: function () {
        return {
            authors: []
        };
    },
    componentDidMount: function () {
        //make sure if the component is mounted
        if (this.isMounted()) {
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;