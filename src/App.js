import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Home from './pages/home/';
import Set from './pages/set/';
import Chart from './pages/chart/';

function App() {
  return (
    <Router className="App">
      <Route path="/" exact component={ Home } />
      <Route path="/set" exact component={ Set } />
      <Route path="/chart" exact component={ Chart } />
    </Router>
  );
}

export default App;
