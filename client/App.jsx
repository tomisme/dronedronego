var React = require("react");
var Bootstrap = require("react-bootstrap");
var Router = require("react-router");
var RouterBootstrap = require("react-router-bootstrap");

var { Nav, Navbar, Grid } = Bootstrap;
var { RouteHandler, Route, Link } = Router;
var { NavItemLink, ButtonLink } = RouterBootstrap;
var { Articles, Article } = require("./pages/Articles");
var Units = require("./pages/Units");

var styles = require("./styles/styles.js");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar>
          <Nav>
            <Link to="/">
              <img style={styles.navLogo} src="images/logo-33x35.png" />
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
    <Route name="articles" path="articles" handler={Articles}>
      <Route name="article" path=":articleId" handler={Article} />
    </Route>
    <Route name="units" path="units" handler={Units} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
