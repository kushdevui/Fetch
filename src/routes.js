import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//importing components

import Home from './components/Home/home';

class Routes extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <Switch>
                    <Route path="/" exact  component={Home}/>
                </Switch>
            </div>
            
        );
    }
}

export default Routes; 