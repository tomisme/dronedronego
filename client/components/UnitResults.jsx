"use strict"

var React = require("react");
var Unit = require("./Unit");
var { units } = require("../data");

var UnitResults = React.createClass({
  propTypes: {
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
  render: function() {
    let unitResults = []
    let { searchText, showRed, showGreen, showBlue, showColorless } = this.props;
    let { showFrontline, showFragile, showBlocker, showPrompt } = this.props;

    units.map(function(unit, i) { 
      let isRed = unit.red > 0;
      let isGreen = unit.green > 0;
      let isBlue = unit.blue > 0;
      let isColorless = !(isRed || isGreen || isBlue);

      let searchIsInsideName = unit.name.toLowerCase().indexOf(searchText) != -1;
      
      if (searchText && !searchIsInsideName) return;
      if (!showRed && isRed) return;
      if (!showGreen && isGreen) return;
      if (!showBlue && isBlue) return;
      if (!showColorless && isColorless) return;

      if (!showFrontline && unit.frontline) return;
      if (!showFragile && unit.fragile) return;
      if (!showBlocker && unit.blocker) return;
      if (!showPrompt && unit.prompt) return;

      unitResults.push(<Unit key={`unitResult${i}`} name={unit.name} />);
    });

    return ( <div> {unitResults} </div> );
  }
});

module.exports = UnitResults;
