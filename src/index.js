import * as serviceWorker from './serviceWorker';
import store from "./components/redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>

            <BrowserRouter>

                < App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />

            </BrowserRouter>

        </React.StrictMode>,
        document.getElementById('root')
    )
    ;
};


rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});
