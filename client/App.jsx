"use strict"

var React = require("react");
var Bootstrap = require("react-bootstrap");
var Router = require("react-router");
var RouterBootstrap = require("react-router-bootstrap");

var { Nav, Navbar, Grid } = Bootstrap;
var { RouteHandler, Route, Link, DefaultRoute } = Router;
var { NavItemLink, ButtonLink } = RouterBootstrap;

var Articles = require("./pages/Articles");
var Article = require("./pages/Article");
var Units = require("./pages/Units");
var Index = require("./pages/Index");

var Logo = require("./components/Logo");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar>
          <Nav>
            <Link to="/">
              <Logo />
              <div className="navbar-brand">
                drone drone go
              </div>
            </Link>

            <NavItemLink to="units">
              Units
            </NavItemLink>

            <NavItemLink to="articles">
              Articles
            </NavItemLink>
          </Nav>
        </Navbar>

        <Grid>
          <RouteHandler />
        </Grid>
      </div>
    );
  }
});

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Index} />
    <Route name="articles" path="articles" handler={Articles}>
      <Route name="article" path=":articleId" handler={Article} />
    </Route>
    <Route name="units" path="units" handler={Units} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
