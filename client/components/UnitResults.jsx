var React = require("react");
var Unit = require("./Unit");
var { units } = require("../data");

var UnitResults = React.createClass({
  propTypes: {
    searchText: React.PropTypes.string,
    showRed: React.PropTypes.bool,
    showGreen: React.PropTypes.bool,
    showBlue: React.PropTypes.bool,
    showColorless: React.PropTypes.bool
  },
  render: function() {
    let unitResults = []
    let { searchText, showRed, showGreen, showBlue, showColorless } = this.props;

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

      unitResults.push(<Unit key={`unitResult${i}`} name={unit.name} />);
    });

    return ( <div> {unitResults} </div> );
  }
});

module.exports = UnitResults;
