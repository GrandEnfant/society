import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './Components/serviceWorker';

let users = [
    {id: 0, name: "Ivan", photo: "img/Ivan.jpg"},
    {id: 1, name: "Victor Reznov", photo: "img/Reznov.png"},
    {id: 2, name: "Vladimir Lenin", photo: "img/VLenin.jpg"}
]
let messages = [
    {id: 0, text: "Hey! I'm not a cop"},
    {id: 1, text: "I'm Victor Reznov!"},
    {
        id: 2,
        text: "Freedom in capitalist society always remains about the same as it was in ancient Greek republics: Freedom for slave owners."
    }
]
ReactDOM.render(<App messages = {messages} users = {users}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
