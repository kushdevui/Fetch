import React from "react";
import "./app.scss";
import { hot } from "react-hot-loader";
import Routes from "../routes";
import { BrowserRouter } from "react-router-dom";
import { browserHistory } from "react-router";

const App = ()=> {
    return(
        <BrowserRouter history = {browserHistory}>
            <Routes></Routes>
        </BrowserRouter>
    );
};


export default hot(module)(App);

