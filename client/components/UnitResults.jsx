var React = require("react");

var UnitResults = React.createClass({
  propTypes: {
    searchText: React.PropTypes.string
  },
  render: function() {
    return (
      <div>{this.props.searchText}</div>
    );
  }
});

module.exports = UnitResults;
