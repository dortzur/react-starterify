'use strict';

var React = require('react');
window.React = React;


var App = React.createClass({
  getInitialState: function () {
    return {
      red: 0,
      green: 0,
      blue: 0,
      text: ""
    }
  },
  update: function (e) {
    this.setState({
      text: e.target.value
      //red: this.refs.red.getDOMNode().value,
      //green: this.refs.green.getDOMNode().value,
      //blue: this.refs.blue.getDOMNode().value

    })
  },
  render: function () {
    return (
      <div>
        <Widget text={this.state.text} update={this.update} />
        //<h1>{this.state.red}</h1>
        //<hr/>

        //<Slider ref="red" update={this.update} />
        //<Slider ref="green" update={this.update} />
        //<Slider ref="blue" update={this.update} />
      </div>
    )
  }
});


var Slider = React.createClass({
  render: function () {
    return (
      <input type="range" min="0" max="255" onChange="this.props.update" />
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
