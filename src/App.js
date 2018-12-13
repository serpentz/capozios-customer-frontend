import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <NavBar />
        {/* <SignUp /> */}
      </div>
    );
  }
}

export default App;
