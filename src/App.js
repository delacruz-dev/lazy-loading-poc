import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import domain from './domain';

class App extends Component {
  handleClick = async () => {
    const printService = await domain.print()
    printService.console();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.handleClick}>Lazy load component</button>
        </p>
      </div>
    );
  }
}

export default App;
