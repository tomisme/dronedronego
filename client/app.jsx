var React = require("react");
var Bootstrap = require("react-bootstrap");
var Router = require("react-router");
var RouterBootstrap = require("react-router-bootstrap");

var { Nav, Navbar, Grid } = Bootstrap;
var { RouteHandler, Route, Link } = Router;
var { NavItemLink, ButtonLink } = RouterBootstrap;

var { Articles, Article } = require("./pages/articles");

var logoStyle = {
  float: "left",
  paddingRight: 12,
  paddingTop: 2
};

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar>
          <Nav>
            <Link to="/">
              <img style={logoStyle} src="images/logo-small.png" />
              <div className="navbar-brand">
                drone drone go
              </div>
            </Link>
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
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
