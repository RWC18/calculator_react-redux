import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux"
import {Provider} from "react-redux";
import calcFunc from "./store/reducer";


let state = createStore(calcFunc);
ReactDOM.render(<Provider store={state}> <App /> </Provider>, document.getElementById('root'));

serviceWorker.unregister();
