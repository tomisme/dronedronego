var React = require("react");
var { Input } = require("react-bootstrap");

var UnitFilter = React.createClass({
  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },
  handleChange: function(event) {
    this.props.onChange({
      searchText: event.target.value
    });
  },
  render: function() {
    return (
      <Input
        type="text"
        label="Filter by name:"
        ref="input"
        onChange={this.handleChange} />
    );
  }
});

module.exports = UnitFilter;
