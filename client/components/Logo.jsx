"use strict"

var React = require("react");

var style = {
  float: "left",
  paddingRight: 12,
  paddingTop: 7
};

var Logo = React.createClass({
  render: function() {
    return (
      <img style={style} src={"/images/logo-35x35.png"} />
    );
  }
});

module.exports = Logo;
