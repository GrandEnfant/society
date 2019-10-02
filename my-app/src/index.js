import React from 'react';
import './index.css';
import * as serviceWorker from './Components/serviceWorker';
import store from './redux/state';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './App';



let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root'));
};
debugger;
rerenderTree(store.getState);
store.subscribe(rerenderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
