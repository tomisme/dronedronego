"use strict"

var React = require("react");

var Icon = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function() {
    let { name } = this.props;

    if ( name === "Red" || name === "Blue" || name === "Green" ) {
      name += "_resource";
    }

    let url = `/images/icons/16px-${name}_icon.png`;

    return <img src={url} />;
  }
});

module.exports = Icon;
