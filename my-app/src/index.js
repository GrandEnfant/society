import React from 'react';
import './index.css';
import * as serviceWorker from './Components/serviceWorker';
import {rerenderTree} from "./render";
import store from './redux/state'




rerenderTree(store);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
