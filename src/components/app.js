import React from 'react';
import './app.scss';
import { hot } from 'react-hot-loader';

const App = ()=> {
    return(
        <div className="header">
            <h1>Hello worsfld!!</h1> 
        </div>
    )
}

export default hot(module)(App);

