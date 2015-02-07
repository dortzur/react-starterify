var React = require('react');

var Slider = React.createClass({
  render: function () {
    return (
      <input type="range" min="0" max="255" onChange="this.props.update" />
    )
  }
});

module.exports = Slider;

