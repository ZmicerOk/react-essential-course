import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function() {
  console.log(this.name, "goes", this.voice);
};
const dog = new Animal("Dog", "woof");
const cat = new Animal("Cat", "meou");
dog.say();
cat.say();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
