import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tutorial1 from './Tutorial1';
import Tutorial2 from './Tutorial2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tutorial2 />
      </div>
    );
  }
}

export default App;
