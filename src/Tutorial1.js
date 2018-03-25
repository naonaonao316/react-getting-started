import React, { Component } from 'react';

class Tutorial1 extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <button>{this.state.counter}</button>
    );
  }
}

export default Tutorial1;
