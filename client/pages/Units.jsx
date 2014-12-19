var React = require("react");
var { Link, RouteHandler } = require("react-router");
var { Panel, Row, Col, Input } = require("react-bootstrap");

var Unit = require("../components/Unit");
var UnitFilter = require("../components/UnitFilter");
var UnitResults = require("../components/UnitResults");

var Units = React.createClass({

  getInitialState: function() {
    return { 
      searchText: "",
      showRed: true,
      showGreen: true,
      showBlue: true,
      showColorless: true
    };
  },

  handleFilterChange: function(data) {
    this.setState(data);
  },

  render: function() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <UnitFilter
                searchText={this.state.searchText}
                showRed={this.state.showRed}
                showGreen={this.state.showGreen}
                showBlue={this.state.showBlue}
                showColorless={this.state.showColorless}
                onFilterChange={this.handleFilterChange}
              />
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Panel>
              <UnitResults
                searchText={this.state.searchText}
                showRed={this.state.showRed}
                showGreen={this.state.showGreen}
                showBlue={this.state.showBlue}
                showColorless={this.state.showColorless}
              />
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
});

module.exports = Units;
