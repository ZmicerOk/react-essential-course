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
  pageTitle: 'React compons',
  showCars: false,
}

changeTitleHandler=(pageTitle)=> {
  this.setState({pageTitle})
}

deleteHandler(index) {
  console.log("delete");
}

onChangeName = (name, index)=>{
  console.log(name, index);
  const car = this.state.cars[index];
  car.name = name;
  const cars = [...this.state.cars]
  cars[index]=car;
  this.setState({cars});
}

toggleCarshandler = () =>{
  this.setState({
    showCars: !this.state.showCars
  })
}

  render() {
    const divStyle = {
        'textAlign': 'center'
    }

    let cars=null

    if (this.state.showCars){
      cars = 
        this.state.cars.map((car, index)=>{
          return (
            <Car
            key={index}
              name={car.name}
              year={car.year}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event=>this.onChangeName(event.target.value, index)}
            />
          )  
          })
      }
    
    return (
      <div style={divStyle}>
      <h1>{this.state.pageTitle}</h1>
      <button onClick={this.toggleCarshandler}>Togle cars</button>
      <h2>you</h2>
      {cars}

  </div>
    );
  }
}

export default App;
