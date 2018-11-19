import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//Array Destructuring

const shape={
    type:"segment",
    coordinates: {
        start:[10,15],
        finish:[12,12]
    }
};

const {coordinates:{start:[strtX, StartY], finish:[f1,f2]}}=shape;
console.log(strtX,f2);
 //   connect();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
