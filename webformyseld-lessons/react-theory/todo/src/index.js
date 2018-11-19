import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//Spread aoperator

const arr = [1,2,3,4,5];
// const res = Math.max.apply(Math, arr);
// console.log(res);
const arr2 = [3112,122,1213,1224,1245];

const shallowCopy = [...arr, ...arr2];

console.log(shallowCopy);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
