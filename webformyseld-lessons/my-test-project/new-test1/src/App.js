import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Car from '/Car/Car.js';

class App extends Component {
  render() {
    const divStyle = {
        'textAlign': 'center'
    }
    return (

      <div style={divStyle}>
      <h1>hej!</h1>
      <h2>you</h2>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Car/>
      </div>
  
    );
    // return React.createElement(
    //   'div',
    //   {
    //     className: "App"
    //   },
    //   React.createElement(
    //     'h1',
    //     null,
    //     'Hello World!+'
    //   )
      

    // )
  }
}

export default App;
