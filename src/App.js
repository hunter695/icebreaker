import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
        </main>
      </Router>
    );
  }
}

export default App;
