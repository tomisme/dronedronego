"use strict"

var React = require("react");
var Router = require("react-router");
var Bootstrap = require("react-bootstrap");

var { Link, RouteHandler } = Router;
var { Panel, Row, Col } = Bootstrap;

var Articles = React.createClass({
  render() {
    return (
      <Row>
        <Col md={8}>
          <Panel>
            <RouteHandler />
          </Panel>
        </Col>
        <Col md={4}>
          <Panel header="Latest Articles">
            <Link to="article" params={{articleId: "abc"}}>
              abc
            </Link>
          </Panel>
        </Col>
      </Row>
    );
  }
});

module.exports = Articles;
