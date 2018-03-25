import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick} >
        +1
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>...</div>
  );
};

class Tutorial1 extends React.Component {
  render() {
    return ( 
      <div>
        <Button />
        <Result />
      </div>
    );
  }
};

export default Tutorial1;
