
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';


export let rerenderTree = (State, addElement) => {
    ReactDOM.render(
        <BrowserRouter>
        <App State={State}
             addElement={addElement}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

