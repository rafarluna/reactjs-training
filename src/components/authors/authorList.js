"use strict";

var React = require("react");

var AuthorList = React.createClass({

    propTypes:{
        authors: React.PropTypes.array.isRequired //indicates this is an array and is required, passed as a property
    },

    render: function () {
        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        }
        return (
            <div>
                <table className="table">
                    <thead>
                        <td>Id</td>
                        <td>Name</td>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;