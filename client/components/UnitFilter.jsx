"use strict"

var React = require("react");
var { Input, Row, Col, Button } = require("react-bootstrap");
var Icon = require("./Icon");

var UnitFilter = React.createClass({
  propTypes: {
    onSearchTextChange: React.PropTypes.func.isRequired,
    onToggleClick: React.PropTypes.func.isRequired,
    onAllColorsClick: React.PropTypes.func.isRequired,
    onAllAttributesClick: React.PropTypes.func.isRequired,
    searchText: React.PropTypes.string.isRequired,
    showRed: React.PropTypes.bool.isRequired,
    showGreen: React.PropTypes.bool.isRequired,
    showBlue: React.PropTypes.bool.isRequired,
    showColorless: React.PropTypes.bool.isRequired,
    showFrontline: React.PropTypes.bool.isRequired,
    showFragile: React.PropTypes.bool.isRequired,
    showBlocker: React.PropTypes.bool.isRequired,
    showPrompt: React.PropTypes.bool.isRequired
  },

  handleSearchTextChange: function(element) {
    let searchText = this.refs.searchText.getValue();
    this.props.onSearchTextChange(searchText);
  },

  render: function() {
    let { showRed, showGreen, showBlue, showColorless } = this.props;
    let allColorsSelected = (showRed && showGreen && showBlue && showColorless);
    let allColorsButtonText = allColorsSelected ? "Unselect All" : "Select All";

    let { showFrontline, showFragile, showBlocker, showPrompt } = this.props;
    let allAttributesSelected = (showFrontline && showFragile && showBlocker && showPrompt);
    let allAttributesButtonText = allAttributesSelected ? "Unselect All" : "Select All";

    return (
      <Row>
        <Col md={6}>
          <Input
            type="text"
            label="Filter by name:"
            ref="searchText"
            value={this.props.searchText}
            onChange={this.handleSearchTextChange}
          />
        </Col>

        <Col md={6}>
          <Row>
            <Col md={12}>
              <Button
                bsStyle={showRed ? "success" : "danger"}
                onClick={this.props.onToggleClick.bind(null, "Red")}>
                <Icon name={"Red"} />
              </Button>
              <Button
                bsStyle={showGreen ? "success" : "danger"}
                onClick={this.props.onToggleClick.bind(null, "Green")}>
                <Icon name={"Green"} />
              </Button>
              <Button
                bsStyle={showBlue ? "success" : "danger"}
                onClick={this.props.onToggleClick.bind(null, "Blue")}>
                <Icon name={"Blue"} />
              </Button>
              <Button
                bsStyle={showColorless ? "success" : "danger"}
                onClick={this.props.onToggleClick.bind(null, "Colorless")}>
                Colorless
              </Button>
              <Button onClick={this.props.onAllColorsClick}>
                {allColorsButtonText}
              </Button>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Button
                bsStyle={showFrontline ? "success" : "danger"}
                onClick={this.props.onToggleClick.bind(null, "Frontline")}>
                <Icon name={"Frontline"} />
              </Button>
              <Button
                bsStyle={showFragile ? "success" : "danger"}
                onClick={this.props.onToggleClick.bind(null, "Fragile")}>
                <Icon name={"Fragile"} />
              </Button>
              <Button
                bsStyle={showBlocker ? "success" : "danger"}
                onClick={this.props.onToggleClick.bind(null, "Blocker")}>
                <Icon name={"Blocker"} />
              </Button>
              <Button
                bsStyle={showPrompt ? "success" : "danger"}
                onClick={this.props.onToggleClick.bind(null, "Prompt")}>
                <Icon name={"Prompt"} />
              </Button>
              <Button onClick={this.props.onAllAttributesClick}>
                {allAttributesButtonText}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
});

module.exports = UnitFilter;
