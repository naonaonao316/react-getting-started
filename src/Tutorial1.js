import React, { Component } from 'react';

class Button extends Component {

//  handleClick = () => {
//    this.setState((prevState) => ({
//      counter: prevState.counter + 1
//    }));
//  };

  render() {
    return (
      <button onClick={this.props.onClickFunction} >
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
  state = { counter : 0 }

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    console.log(this.state.counter);
    return ( 
      <div>
        <Button onClickFunction={this.incrementCounter} />
        <Result />
      </div>
    );
  }
};

export default Tutorial1;
