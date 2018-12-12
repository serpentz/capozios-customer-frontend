import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <NavBar />
      </div>
    );
  }
}

export default App;
