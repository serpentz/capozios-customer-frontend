import React, { Component } from 'react';
// import { BrowserRouter as Route } from "react-router-dom";

import HomePage from './components/HomePage';

// Actions
import { fetchItems } from './actions/items';
import { checkForToken } from './actions/login'; 
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchItems();
    this.props.checkForToken();
  }

  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems()),
    checkForToken: () => dispatch(checkForToken())
  }
};

export default connect(null, mapDispatchToProps)(App);
