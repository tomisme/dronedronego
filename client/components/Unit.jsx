var React = require("react");

var Unit = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    size: React.PropTypes.string
  },
  render: function() {
    return (
      <div>
        <img src="images/units/Amporilla-panel.png" />
      </div>
    );
  }
});

module.exports = Unit;
