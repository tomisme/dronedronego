"use strict"

var React = require("react");

var Unit = require("../components/Unit");

var Index = React.createClass({
  render: function() {
    return (
      <div>
        <Unit name="Drone" />
        <Unit name="Drone" />
      </div>
    );
  }
});

module.exports = Index
