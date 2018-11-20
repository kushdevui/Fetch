import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//importing components

import Home from "./components/Home/home";
//import Signup from "./components/Signup/singup";

class Routes extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <Switch>
                    <Route path="/" exact  component={Home}/>
                    <Route path="/Signup" exact component={singup}/>
                </Switch>
            </div>
            
        );
    }
}

export default Routes; 