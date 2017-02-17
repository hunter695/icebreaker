import React, { Component } from 'react';
import Home from './Home';
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Home />
      </div>
    );
  }
}

export default App;
