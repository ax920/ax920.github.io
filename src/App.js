import React, { Component } from 'react';
import './App.css';
import SocialMedia from './SocialMedia/SocialMedia'
import ProfilePhoto from './images/alvin_profile.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  componentDidMount() {
    document.title = "Alvin Xu";
  }

  render() {
    return (
      <div className="App" >
        <body class="background">
          <header className="App-header">
            <div id="resume-link-wrapper">
              <a class="roboto" id="resume-link" href="google.com">Resume</a>
            </div>
          </header>
          <br></br>
          <img class="profile-photo" src={ProfilePhoto} alt="Avatar"></img>
          <h1 class="roboto" style={{ color: 'black' }}>Alvin Xu</h1>
          <h7 id="blurb-description" class="roboto" style={{ color: 'black' }}>Computer Science Student at the University of British Columbia</h7>
          <br></br>
          <br></br>
          <SocialMedia />

        </body>
      </div>
    );
  }

}

export default App;
