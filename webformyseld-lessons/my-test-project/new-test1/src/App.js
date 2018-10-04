import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

class App extends Component {
  render() {
    const divStyle = {
        'textAlign': 'center'
    }
    return (
      <div style={divStyle}>
      <h1 style={{'color':"blue"}}>hej!</h1>
      <h2>you</h2>
        <Car name={'Ford'} year={2011}>
        <p style={{'color':"blue"}}>COLOR</p>
          </Car>
        <Car name= 'Audi' year={2018}>
          <p style={{'color':"red"}}>COLOR</p>
          </Car>
        <Car name= 'Skoda' year={2013}>
        <p style={{'color':"silver"}}>COLOR</p>
          </Car>
      </div>
  
    );
   
  }
}

export default App;
