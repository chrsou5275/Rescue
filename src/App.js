import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Dogs from './components/Dogs';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="Rescue"/>
          <Route exact path="/" render={() => <Home title="Dog Rescue" />} />
          <Route path="/dogs" render={() => < Dogs title="Dogs Rescue" />} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
