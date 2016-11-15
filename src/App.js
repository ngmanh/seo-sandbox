import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello! My name is Halasuzitakarii</h2>
        </div>
        <p className="App-intro">
          This app does everything you could possibly want it to do and not only that, it is beautifully designed and extremely intuitive to use. Download it from the App Store for FREE if you don’t mind some adverts popping up or if you prefer an ad-free experience then you can down load the ad-free version for 99p.
        </p>
        <p className="App-intro">
          Who is this app aimed at?<br />
          Everyone who could possibly need to do anything! It really is the full experience.
        </p>
        <p className="App-intro">
          That’s a big claim, does it really work?<br />
          Yes it does and has been given 5 out of 5 stars on all the reviews we’ve seen so far, so download it now and let us know what you think.
        </p>
      </div>
    );
  }
}

export default App;
