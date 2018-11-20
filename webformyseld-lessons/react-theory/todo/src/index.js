import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//Prototypes

const animal = {
    say:function(){
        console.log(this.name, 'goes', this.voice);
    }
}
const dog={
    name: 'dog',
    voice: 'woof'
};
Object.setPrototypeOf(dog, animal);
const cat={
    name: 'cat',
    voice: 'meow'
};
Object.setPrototypeOf(cat, animal);
dog.say();
cat.say();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
