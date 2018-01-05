import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Follow } from 'holochain-web-components';

class App extends Component {
  render() {
    const following = [
      {"handle":"@philt3r", "userHash": "wegwtrwrt"},
      {"handle":"Test 2", "userHash": "dddd"}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Follow following={following}/>
        </p>
      </div>
    );
  }
}

export default App;
