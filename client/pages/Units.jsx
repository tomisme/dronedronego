var React = require("react");
var { Link, RouteHandler } = require("react-router");
var { Panel, Row, Col, Input } = require("react-bootstrap");

var Unit = require("../components/Unit");
var UnitFilter = require("../components/UnitFilter");
var UnitResults = require("../components/UnitResults");

var Units = React.createClass({
  getInitialState: function() {
    return { 
      searchText: ""
    };
  },
  handleFilterChange: function(data) {
    this.setState({
      searchText: data.searchText
    });
  },
  render: function() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <UnitFilter onChange={this.handleFilterChange} />
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Panel>
              <UnitResults searchText={this.state.searchText} />
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
});

module.exports = { Units };
