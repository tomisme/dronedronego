"use strict"

var React = require("react");
var _ = require("lodash");
var Unit = require("./Unit");
var { units } = require("../data");

var UnitResults = React.createClass({
  propTypes: {
    sortBy: React.PropTypes.string.isRequired,
    sortOrder: React.PropTypes.string.isRequired,
    searchText: React.PropTypes.string.isRequired,
    searchTextTarget: React.PropTypes.string.isRequired,
    showGold: React.PropTypes.bool.isRequired,
    showEnergy: React.PropTypes.bool.isRequired,
    showRed: React.PropTypes.bool.isRequired,
    showGreen: React.PropTypes.bool.isRequired,
    showBlue: React.PropTypes.bool.isRequired,
    showFrontline: React.PropTypes.bool.isRequired,
    showFragile: React.PropTypes.bool.isRequired,
    showBlocker: React.PropTypes.bool.isRequired,
    showPrompt: React.PropTypes.bool.isRequired,
  },

  render: function() {
    let { searchText, searchTextTarget, sortBy, sortOrder } = this.props;
    let { showRed, showGreen, showBlue, showGold, showEnergy } = this.props;
    let { showFrontline, showFragile, showBlocker, showPrompt } = this.props;

    let filteredResults = _.filter(units, function(unit) {
      let searchIsInsideName = unit.name.toLowerCase().indexOf(searchText) != -1;
      
      if (searchText && !searchIsInsideName) return false;
      if (!showRed && unit.red > 0) return false;
      if (!showGreen && unit.green > 0) return false;
      if (!showBlue && unit.blue > 0) return false;
      if (!showGold && unit.gold > 0) return false;
      if (!showEnergy && unit.energy > 0) return false;

      if (!showFrontline && unit.frontline) return false;
      if (!showFragile && unit.fragile) return false;
      if (!showBlocker && unit.blocker) return false;
      if (!showPrompt && unit.prompt) return false;

      return true;
    });

    let sortedResults = _.sortBy(filteredResults, function(unit) {
      if (sortBy === "Gold") return unit.gold;
      if (sortBy === "Supply") return unit.supply;
      if (sortBy === "Health") return unit.health;
      if (sortBy === "Attack") return unit.attack;
    });

    let finishedResults = sortOrder === "Descending" ? sortedResults.reverse() : sortedResults;

    let elements = _.map(finishedResults, function(unit) {
      return <Unit key={unit.name} name={unit.name} />;
    });

    return ( <div> {elements} </div> );
  }
});

module.exports = UnitResults;
