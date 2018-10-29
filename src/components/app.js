import React from 'react';
import './app.scss';
import { hot } from 'react-hot-loader';
import Routes from '../routes';
import { BrowserRouter } from 'react-router-dom';

const App = ()=> {
    return(
        <BrowserRouter>
            <Routes></Routes>
        </BrowserRouter>
    )
}

export default hot(module)(App);

