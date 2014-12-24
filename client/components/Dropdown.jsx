"use strict"

var React = require("react");
var { DropdownButton, MenuItem } = require("react-bootstrap");

var Dropdown = React.createClass({
  propTypes: {
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    onSelect: React.PropTypes.func.isRequired,
    options: React.PropTypes.array.isRequired,
    prefix: React.PropTypes.string.isRequired,
    postfix: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      prefix: "",
      postfix: ""
    };
  },

  handleSelect(option) {
    this.props.onSelect(option);
  },

  render() {
    let { value, onSelect, options, prefix, postfix } = this.props;
    let menuItems = options.map((option) => {
      return (
        <MenuItem onSelect={this.handleSelect.bind(null, option)} key={option}>
          {option}
        </MenuItem>
      );
    });

    return (
      <DropdownButton title={`${prefix} ${value} ${postfix}`}>
        {menuItems}
      </DropdownButton>
    );
  }
});

module.exports = Dropdown;
