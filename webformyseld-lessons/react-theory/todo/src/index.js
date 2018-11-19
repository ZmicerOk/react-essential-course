import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// function sq(x){
//     return x*x;
// }

function fetchOrders( count=11, start=1){

    console.log('Getting', count, 'orders starting from', start);
}
fetchOrders();
// const Person = () =>{''};

// new Person();
// console.log(Person);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
