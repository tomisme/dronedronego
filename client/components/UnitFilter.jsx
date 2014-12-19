var React = require("react");
var { Input, Row, Col } = require("react-bootstrap");

var UnitFilter = React.createClass({
  propTypes: {
    onFilterChange: React.PropTypes.func.isRequired,
    searchText: React.PropTypes.string.isRequired,
    showRed: React.PropTypes.bool.isRequired,
    showGreen: React.PropTypes.bool.isRequired,
    showBlue: React.PropTypes.bool.isRequired
  },

  handleChange: function(element) {
    this.props.onFilterChange({
      searchText: this.refs.searchText.getValue(),
      showRed: this.refs.showRed.getChecked(),
      showGreen: this.refs.showGreen.getChecked(),
      showBlue: this.refs.showBlue.getChecked(),
      showColorless: this.refs.showColorless.getChecked()
    });
  },

  render: function() {
    return (
      <Row>
        <Col md={6}>
          <Input
            type="text"
            label="Filter by name:"
            ref="searchText"
            value={this.props.searchText}
            onChange={this.handleChange}
          />
        </Col>
        <Col md={6}>
          <Input
            type="checkbox"
            label="Red"
            ref="showRed"
            checked={this.props.showRed}
            onChange={this.handleChange}
          />
          <Input
            type="checkbox"
            label="Green"
            ref="showGreen"
            checked={this.props.showGreen}
            onChange={this.handleChange}
          />
          <Input
            type="checkbox"
            label="Blue"
            ref="showBlue"
            checked={this.props.showBlue}
            onChange={this.handleChange}
          />
          <Input
            type="checkbox"
            label="Colorless"
            ref="showColorless"
            checked={this.props.showColorless}
            onChange={this.handleChange}
          />
        </Col>
      </Row>
    );
  }
});

module.exports = UnitFilter;
