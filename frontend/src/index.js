import React from 'react';
import {Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import history from "./history";
import './scss/app.scss';

const app = (
    <Router history={history}>
        <App/>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);