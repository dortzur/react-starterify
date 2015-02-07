'use strict';

var React = require('react');
window.React = React;


var App = React.createClass({
  getInitialState: function () {
    return {
      red: 128,
      green: 128,
      blue: 128
      //text: ""
    }
  },
  update: function (e) {
    this.setState({
      red: this.refs.red.refs.range.getDOMNode().value,
      green: this.refs.green.refs.range.getDOMNode().value,
      blue: this.refs.blue.refs.range.getDOMNode().value

    })
  },
  render: function () {
    return (
      <div>


        <h2>{this.state.red}</h2>
        <Slider ref="red" update={this.update} />
        <h2>{this.state.green}</h2>
        <Slider ref="green" update={this.update} />
        <h2>{this.state.blue}</h2>
        <Slider ref="blue" update={this.update} />
      </div>
    )
  }
});


var Slider = React.createClass({
  render: function () {
    return (
      <div>
        <input ref="range" type="range" min="0" max="255" onChange={this.props.update} />
      </div>
    )
  }
});

var Widget = React.createClass({
  render: function () {
    return (
      <div>
        <h1>{this.props.text} </h1>
        <input type="text" onChange={this.props.update} />
      </div>
    )
  }
});
React.renderComponent(<App />, document.body);
