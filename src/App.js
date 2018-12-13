import React, { Component } from 'react';
import HomePage from './components/HomePage';
import { fetchItems } from './actions/items'; 
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.fetchItems();
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
    fetchItems: () => dispatch(fetchItems())
  }
};

export default connect(null, mapDispatchToProps)(App);
