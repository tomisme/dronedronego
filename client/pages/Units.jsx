"use strict"

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
      showColorless: true,
      showFrontline: true,
      showFragile: true,
      showBlocker: true,
      showPrompt: true
    };
  },

  handleSearchTextChange: function(searchText) {
    this.setState({
      searchText: searchText
    });
  },

  handleToggleClick: function(target) {
    switch(target) {
      case "Red":
        this.setState({
          showRed: this.state.showRed ? false : true
        });
        break;
      case "Green":
        this.setState({
          showGreen: this.state.showGreen ? false : true
        });
        break;
      case "Blue":
        this.setState({
          showBlue: this.state.showBlue ? false : true
        });
        break;
      case "Colorless":
        this.setState({
          showColorless: this.state.showColorless ? false : true
        });
        break;
      case "Frontline":
        this.setState({
          showFrontline: this.state.showFrontline ? false : true
        });
        break;
      case "Fragile":
        this.setState({
          showFragile: this.state.showFragile ? false : true
        });
        break;
      case "Blocker":
        this.setState({
          showBlocker: this.state.showBlocker ? false : true
        });
        break;
      case "Prompt":
        this.setState({
          showPrompt: this.state.showPrompt ? false : true
        });
        break;
    }
  },

  handleAllColorsClick: function() {
    let { showRed, showGreen, showBlue, showColorless } = this.state;
    if (showRed && showGreen && showBlue && showColorless) {
      this.setState({
        showRed: false,
        showGreen: false,
        showBlue: false,
        showColorless: false
      });
    } else {
      this.setState({
        showRed: true,
        showGreen: true,
        showBlue: true,
        showColorless: true
      });
    }
  },

  handleAllAttributesClick: function() {
    let { showFrontline, showFragile, showBlocker, showPrompt } = this.state;
    if (showFrontline && showFragile && showBlocker && showPrompt) {
      this.setState({
        showFrontline: false,
        showFragile: false,
        showBlocker: false,
        showPrompt: false
      });
    } else {
      this.setState({
        showFrontline: true,
        showFragile: true,
        showBlocker: true,
        showPrompt: true
      });
    }
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
                showFrontline={this.state.showFrontline}
                showFragile={this.state.showFragile}
                showBlocker={this.state.showBlocker}
                showPrompt={this.state.showPrompt}
                onToggleClick={this.handleToggleClick}
                onAllColorsClick={this.handleAllColorsClick}
                onAllAttributesClick={this.handleAllAttributesClick}
                onSearchTextChange={this.handleSearchTextChange}
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
                showFrontline={this.state.showFrontline}
                showFragile={this.state.showFragile}
                showBlocker={this.state.showBlocker}
                showPrompt={this.state.showPrompt}
              />
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
});

module.exports = Units;
