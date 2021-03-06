import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Car from './Car/Car';

class App extends Component {

state = {
  cars:[
    {name: 'Ford', year: 2018},
    {name: 'Audi', year: 2016},
    {name: 'Skoda', year: 2013},
  ],
  pageTitle: 'React components'
}

changeTitleHandler=(newTitle)=> {
// console.log('Clicked');
// const oldTitle = this.state.pageTitle;
// console.log(oldTitle);
// const newTitle = oldTitle + '(changed)';
this.setState({
  pageTitle: newTitle
})
}

  render() {
    const divStyle = {
        'textAlign': 'center'
    }
    
    const cars = this.state.cars

    return (
      <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>
      <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>Change title</button>
      <h2>you</h2>
        <Car
         name={cars[0].name}
         year={cars[0].year}
         onChangeTitle = {this.changeTitleHandler.bind(this, cars[0].name)}
         />
        
        <Car name={cars[1].name} year={cars[1].year}
        onChangeTitle = {this.changeTitleHandler.bind(this, cars[1].name)}
                 />     
        <Car name={cars[2].name} year={cars[2].year}
        onChangeTitle = {this.changeTitleHandler.bind(this, cars[2].name)}
                 />
      
      </div>
    );
  }
}

export default App;
