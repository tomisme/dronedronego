var React = require("react");

var Unit = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    size: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      size: "panel"
    }
  },
  render: function() {
    let urlName = this.props.name.replace(/\s+/g, ""); // remove spaces
    let size = this.props.size;
    let imgSrc; 

    if (size === "panel") {
      imgSrc = `images/units/${urlName}-panel.png`;
    }

    return <img src={imgSrc} />;
  }
});

module.exports = Unit;
