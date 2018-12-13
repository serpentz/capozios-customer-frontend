import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
// import Login from './components/Login';
// import NavBar from './components/NavBar';
// import SignUp from './components/SignUp';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
