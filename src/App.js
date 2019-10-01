import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import { MainPage } from './components/MainPage/MainPage'
import { BubbleSort } from './components/sorting/BubbleSort/BubbleSort'
import { MergeSort } from './components/sorting/MergeSort/MergeSort';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <nav className="main-header">
              <Link to="/">Home</Link>
              <Link to="/sorting/bubble-sort">Bubble sort</Link>
              <Link to="/sorting/merge-sort">Merge sort</Link>
            </nav>
          </header>

          <Route exact path="/" component={MainPage}></Route>

          <Route path="/sorting/bubble-sort" component={BubbleSort}></Route>
          <Route path="/sorting/merge-sort" component={MergeSort}></Route>
        </Router>
      </div>
    );
  }
}

export default App;