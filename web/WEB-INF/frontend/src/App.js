import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Home from './components/pages/Home';
import Plan from './components/pages/Plan';
import Plan1 from './components/pages/Plan1';
import Invest from './components/pages/Invest';
import Chat from './components/pages/Chat';
import Comingsoon from './components/pages/Comingsoon';

// import background from './assets/background.jpg';

class App extends Component {
  render() {
    return (
      <Router>

        <Header />
        <div className="App" style={styles.background}>
          <div style={styles.overlay}>
            <Route exact path="/" component={Home} />
            <Route exact path="/plan" component={Plan} />
            <Route exact path="/plan1" component={Plan1} />
            <Route exact path="/invest" component={Invest} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/comingsoon" component={Comingsoon} />
          </div>
        </div>
      </Router>
    );
  }
}

const styles = {
  background: {
    backgroundImage: "url('https://i.redd.it/f17uhjo3xye01.jpg')",
    height: '1500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
}

export default App;
