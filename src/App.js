import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = () => {
    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    import('./print')
      .then(module => {
       const print = module.default;

       print();
    });
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
