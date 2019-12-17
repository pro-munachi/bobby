import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactRouter from './router/router';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <PersistGate persistor={persistor}>
                    <ReactRouter />
                </PersistGate>
            </Router>
        </Provider>,
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();