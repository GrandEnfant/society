import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';


export let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
        <App state={state}
             addElement={store.addElement.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

