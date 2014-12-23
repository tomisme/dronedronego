"use strict"

var React = require("react");
var { Link, RouteHandler } = require("react-router");
var { Panel, Row, Col, Input, Button } = require("react-bootstrap");

var UnitResults = require("../components/UnitResults");
var Icon = require("../components/Icon");

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

  handleSearchTextChange: function() {
    this.setState({
      searchText: this.refs.searchText.getValue()
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
    let { showRed, showGreen, showBlue, showColorless } = this.state;
    let allColorsSelected = (showRed && showGreen && showBlue && showColorless);
    let allColorsButtonText = allColorsSelected ? "Unselect All" : "Select All";

    let { showFrontline, showFragile, showBlocker, showPrompt } = this.state;
    let allAttributesSelected = (showFrontline && showFragile && showBlocker && showPrompt);
    let allAttributesButtonText = allAttributesSelected ? "Unselect All" : "Select All";

    return (
      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <Row>
                <Col md={6}>
                  <Input
                    type="text"
                    label="Filter by name:"
                    ref="searchText"
                    value={this.state.searchText}
                    onChange={this.handleSearchTextChange}
                  />
                </Col>

                <Col md={6}>
                  <Row>
                    <Col md={12}>
                      <Button
                        bsStyle={showRed ? "success" : "danger"}
                        onClick={this.handleToggleClick.bind(null, "Red")}>
                        <Icon name={"Red"} />
                      </Button>
                      <Button
                        bsStyle={showGreen ? "success" : "danger"}
                        onClick={this.handleToggleClick.bind(null, "Green")}>
                        <Icon name={"Green"} />
                      </Button>
                      <Button
                        bsStyle={showBlue ? "success" : "danger"}
                        onClick={this.handleToggleClick.bind(null, "Blue")}>
                        <Icon name={"Blue"} />
                      </Button>
                      <Button
                        bsStyle={showColorless ? "success" : "danger"}
                        onClick={this.handleToggleClick.bind(null, "Colorless")}>
                        Colorless
                      </Button>
                      <Button onClick={this.handleAllColorsClick}>
                        {allColorsButtonText}
                      </Button>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={12}>
                      <Button
                        bsStyle={showFrontline ? "success" : "danger"}
                        onClick={this.handleToggleClick.bind(null, "Frontline")}>
                        <Icon name={"Frontline"} />
                      </Button>
                      <Button
                        bsStyle={showFragile ? "success" : "danger"}
                        onClick={this.handleToggleClick.bind(null, "Fragile")}>
                        <Icon name={"Fragile"} />
                      </Button>
                      <Button
                        bsStyle={showBlocker ? "success" : "danger"}
                        onClick={this.handleToggleClick.bind(null, "Blocker")}>
                        <Icon name={"Blocker"} />
                      </Button>
                      <Button
                        bsStyle={showPrompt ? "success" : "danger"}
                        onClick={this.handleToggleClick.bind(null, "Prompt")}>
                        <Icon name={"Prompt"} />
                      </Button>
                      <Button onClick={this.handleAllAttributesClick}>
                        {allAttributesButtonText}
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
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
