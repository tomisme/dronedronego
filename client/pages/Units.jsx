"use strict"

var React = require("react");
var Bootstrap = require("react-bootstrap");
var Router = require("react-router");

var { Link, RouteHandler } = Router;
var { Panel, Row, Col, Input, Button, ButtonGroup, ButtonToolbar, DropdownButton, MenuItem } = Bootstrap;

var UnitResults = require("../components/UnitResults");
var Icon = require("../components/Icon");
var Dropdown = require("../components/Dropdown");

var Units = React.createClass({
  getInitialState() {
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

  handleSearchTextChange() {
    this.setState({
      searchText: this.refs.searchText.getValue()
    });
  },

  handleSortOrderClick() {
    this.setState({
      sortOrder: this.state.sortOrder === "Ascending" ? "Descending" : "Ascending"
    });
  },

  handleResultsPerPageClick(resultsPerPage) {
    this.setState({
      resultsPerPage: resultsPerPage
    });
  },

  handleDisplayAsClick(displayAs) {
    this.setState({
      displayAs: displayAs
    });
  },

  handleSearchTextTargetClick(searchTextTarget) {
    this.setState({
      searchTextTarget: searchTextTarget
    });
  },

  handleSortByClick(sortMethod) {
    this.setState({
      sortBy: sortMethod
    });
  },

  handleToggleClick(target) {
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

  handleAllColorsClick() {
    let { showRed, showGreen, showBlue, showGold } = this.state;
    let allShown = showRed && showGreen && showBlue && showGold;
    this.setState({
      showRed: allShown ? false : true,
      showGreen: allShown ? false : true,
      showBlue: allShown ? false : true,
      showGold: allShown ? false : true,
      showEnergy: allShown ? false : true
    });
  },

  handleAllAttributesClick() {
    let { showFrontline, showFragile, showBlocker, showPrompt } = this.state;
    let allShown = showFrontline && showFragile && showBlocker && showPrompt;
    this.setState({
      showFrontline: allShown ? false : true,
      showFragile: allShown ? false : true,
      showBlocker: allShown ? false : true,
      showPrompt: allShown ? false : true
    });
  },

  render() {
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

    let searchTextDropdown = (
      <Dropdown
        value={this.state.searchTextTarget}
        onSelect={this.handleSearchTextTargetClick}
        options={["Name", "Text"]}
        prefix="Filter by"
      />
    );

    let sortByDropdown = (
      <Dropdown
        value={this.state.sortBy}
        onSelect={this.handleSortByClick}
        options={["Name", "Gold", "Supply", "Health", "Attack"]}
        prefix="Sort by"
      />
    );

    let resultsPerPageDropdown = (
      <Dropdown
        value={this.state.resultsPerPage}
        onSelect={this.handleResultsPerPageClick}
        options={[10, 40, 100]}
        prefix="Load"
        postfix="Results"
      />
    );

    let displayAsDropdown = (
      <Dropdown
        value={this.state.displayAs}
        onSelect={this.handleDisplayAsClick}
        options={["Panels", "Table"]}
        prefix="Display as"
      />
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
