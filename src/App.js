import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainMenu from './MainMenu/mainMenu';
import FooterLogin from './MainMenu/Login/loginFooter';
import Register from './MainMenu/Register/register';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={MainMenu} />
          <Route path="/accounts/signup/" exact component={Register} />
          <FooterLogin />
        </Router>
      </div>
    );
  }
}

export default App;
