import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Plan from './components/pages/Plan';
import Invest from './components/pages/Invest';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/plan" component={Plan} />
          <Route exact path="/invest" component={Invest} />
        </div>
      </Router>
    );
  }
}

export default App;
