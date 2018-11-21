import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
//Classes properties
class Counter {
  constructor() {
    this.count = 0;
    this.inc = () => {
      this.count += Counter.incrementStep;
    }
  }
}
Counter.incrementStep = 5;
Counter.incrementAll = function (arr){
    arr.forEach((c)=> c.inc());
  }
Counter.incrementAll([]);
const cnt = new Counter ();
// console.log(cnt.count);
cnt.inc();
setTimeout(cnt.inc,2000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
