"use strict"

var React = require("react");
var Router = require("react-router");
var Bootstrap = require("react-bootstrap");

var Article = React.createClass({
  mixins: [Router.State],
  render: function() {
    var { articleId } = this.getParams();
    return (
      <div>Hello, {articleId}</div>
    )
  }
});

module.exports = Article;
