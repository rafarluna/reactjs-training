"use strict";

/*
 * 
 * Using to define routes
 */

var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute; //Default Route
var Route = Router.Route; //used to define each route

var NotFoundRoute = Router.NotFoundRoute; //Defines the not foun route as a component

var Redirect = Router.Redirect;

var routes = (
    <Route name="app" path="/" handler={require("./components/app")}>
        <DefaultRoute handler={require("./components/homePage")} />
        <NotFoundRoute handler={require("./components/notFound/notFoundPage")} />


        <Redirect from="about-us" to="about" />
        <Redirect from="awthurs" to="authors" />
        <Redirect from="about/*" to="about" />

        <Route name="authors" handler={require("./components/authors/authorPage")} />

        <Route name="about" handler={require("./components/about/aboutPage")} />
        <Route name="manageAuthor" path="author/:id" handler={require("./components/authors/manageAuthorPage")} />
        <Route name="addAuthor" path="author" handler={require("./components/authors/manageAuthorPage")} />

    </Route>
);

/*
¡¡¡¡ NOTES !!!!

--- "path" property is used for defining tha path after "/"
in this case the route is gonna be "/about-us"
if this property does not exist, then the path is gonna be the name
<Route name="about" path="about-us" handler={require("./components/about/aboutPage")} />
*******************************
¡¡¡¡ NOTES !!!!
--- With this we can redirect all the paths named "about-us" to the new path call "about"
so when the user uses "about-us" he is gonna redirect to "about"
<Redirect from="about-us" to="about" />
****

--- We can use it to avoid misspelling and redirect them to the correct one
<Redirect from="awthurs" to="about" />

--- Or we use wildcards for any path they use for example
as we dont have any "about/..." we can use this wildcard to redirect
all the paths that use this pattern, to only "about"
<Redirect from="about/*" to="about" />

 */

module.exports = routes;