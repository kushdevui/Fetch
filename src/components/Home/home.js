/**
 *  Home Component { Rendering the complete layout of landing page }
 */


// Dependencies
import React from "react";
import Header from "../Header/header";
import {Row} from "reactstrap";

// Styles & Images
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";


const Home = () =>{
    return(
        <Row>
            <Header headerTemplate="landing"/>
        </Row>     
    );
};

export default Home;
