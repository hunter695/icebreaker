import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import Navigation from './Navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navigation />
          <Route path="/" component={Home} />
        </main>
      </Router>
    );
  }
}

export default App;
