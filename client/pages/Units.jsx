"use strict"

var React = require("react");
var Bootstrap = require("react-bootstrap");
var Router = require("react-router");

var { Link, RouteHandler } = Router;
var { Panel, Row, Col, Input, Button, ButtonGroup, ButtonToolbar, DropdownButton, MenuItem } = Bootstrap;

var UnitResults = require("../components/UnitResults");
var Icon = require("../components/Icon");

var Units = React.createClass({
  getInitialState: function() {
    return { 
      sortBy: "Name",
      sortOrder: "Ascending",
      searchText: "",
      searchTextTarget: "Name",
      resultsPerPage: 10,
      displayAs: "Panels",
      showGold: true,
      showEnergy: true,
      showRed: true,
      showGreen: true,
      showBlue: true,
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

  handleSortOrderClick: function() {
    this.setState({
      sortOrder: this.state.sortOrder === "Ascending" ? "Descending" : "Ascending"
    });
  },

  handleResultsPerPageClick: function(resultsPerPage) {
    this.setState({
      resultsPerPage: resultsPerPage
    });
  },

  handleDisplayAsClick: function(displayAs) {
    this.setState({
      displayAs: displayAs
    });
  },

  handleSearchTextTargetClick: function(searchTextTarget) {
    this.setState({
      searchTextTarget: searchTextTarget
    });
  },

  handleSortByClick: function(sortMethod) {
    this.setState({
      sortBy: sortMethod
    });
  },

  handleToggleClick: function(target) {
    switch(target) {
      case "Gold":
        this.setState({
          showGold: this.state.showGold ? false : true
        });
        break;
      case "Energy":
        this.setState({
          showEnergy: this.state.showEnergy ? false : true
        });
        break;
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
    let { showRed, showGreen, showBlue, showGold } = this.state;
    if (showRed && showGreen && showBlue && showGold) {
      this.setState({
        showRed: false,
        showGreen: false,
        showBlue: false,
        showGold: false,
        showEnergy: false
      });
    } else {
      this.setState({
        showRed: true,
        showGreen: true,
        showBlue: true,
        showGold: true,
        showEnergy: true
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
    let { displayAs, resultsPerPage, searchTextTarget } = this.state;

    let { showRed, showGreen, showBlue, showGold, showEnergy } = this.state;
    let allColorsSelected = (showRed && showGreen && showBlue && showGold && showEnergy);
    let allColorsButtonText = allColorsSelected ? "Hide All" : "Show All";

    let { showFrontline, showFragile, showBlocker, showPrompt } = this.state;
    let allAttributesSelected = (showFrontline && showFragile && showBlocker && showPrompt);
    let allAttributesButtonText = allAttributesSelected ? "Hide All" : "Show All";

    let toggleButton = (target, toggledState) => {
      return (
        <Button
          bsStyle={toggledState ? "success" : "default"}
          onClick={this.handleToggleClick.bind(null, target)}>
          <Icon name={target} />
        </Button>
      );
    };

    let dropdown = (target, handler, options, prefix, postfix) => {
      return (
        <DropdownButton title={`${prefix} ${target} ${postfix}`}>
          {options.map((option) => {
            return (
              <MenuItem
                onSelect={handler.bind(null, option)}
                key={option}>
                {option}
              </MenuItem>
            );
          })}
        </DropdownButton>
      )
    };

    let searchTextDropdown = dropdown(
      searchTextTarget,
      this.handleSearchTextTargetClick, 
      ["Name", "Unit Text"], 
      "Filter by", 
      ""
    );

    let sortByDropdown = dropdown(
      this.state.sortBy,
      this.handleSortByClick,
      ["Name", "Gold", "Supply", "Health", "Attack"],
      "Sort by",
      ""
    );

    let resultsPerPageDropdown = dropdown(
      resultsPerPage,
      this.handleResultsPerPageClick,
      [10, 40, 100],
      "Load",
      "Results"
    );

    let displayAsDropdown = dropdown(
      displayAs,
      this.handleDisplayAsClick,
      ["Panels", "Table"],
      "Display as",
      ""
    );

    let UnitFilter = (
      <Row>
        <Col md={6}>
          <Input
            type="text"
            ref="searchText"
            value={this.state.searchText}
            buttonAfter={searchTextDropdown}
            onChange={this.handleSearchTextChange}
          />

          <ButtonToolbar>
            <ButtonGroup>
              <Button onClick={this.handleSortOrderClick}>
                {this.state.sortOrder}
              </Button>
            </ButtonGroup>

            {sortByDropdown}
            {resultsPerPageDropdown}
            {displayAsDropdown}
          </ButtonToolbar>
        </Col>

        <Col md={4}>
          <ButtonToolbar style={{marginBottom: 14}}>
            {toggleButton("Gold", showGold)}
            {toggleButton("Energy", showEnergy)}
            {toggleButton("Red", showRed)}
            {toggleButton("Green", showGreen)}
            {toggleButton("Blue", showBlue)}
            <Button onClick={this.handleAllColorsClick}>
              {allColorsButtonText}
            </Button>
          </ButtonToolbar>

          <ButtonToolbar>
            {toggleButton("Frontline", showFrontline)}
            {toggleButton("Fragile", showFragile)}
            {toggleButton("Blocker", showBlocker)}
            {toggleButton("Prompt", showPrompt)}
            <Button onClick={this.handleAllAttributesClick}>
              {allAttributesButtonText}
            </Button>
          </ButtonToolbar>

        </Col>
        <Col md={1}>
          <Button bsStyle="danger" style={{marginBottom: 14}}>
            Include Unselected
          </Button>
          <Button bsStyle="danger" >
            Match with OR
          </Button>
        </Col>
      </Row>
    );

    return (
      <div>
        <Row>
          <Col md={12}>
            <Panel>
              {UnitFilter}
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Panel>
              <UnitResults {...this.state} />
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
});

module.exports = Units;
