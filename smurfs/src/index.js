import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import { reducer } from './reducers'

const store =createStore(reducer, applyMiddleware(thunk))

// console.log(store)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);
