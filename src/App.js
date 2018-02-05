import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Div from './Div';
import './main.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Div className = "s1">
              <p id="s2">123</p>
              <p>456</p>
          </Div>
      </div>
    );
  }
}

export default App;
