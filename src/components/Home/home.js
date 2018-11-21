/**
 *  Home Component { Rendering the complete layout of landing page }
 */


// Dependencies
import React from "react";
import Header from "../Header/header";
import SignUpForm from "../SignUpForm/signupform";

// Styles & Images
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.scss";


const Home = () =>{
    return(
        <div>
            <Header headerTemplate="landing"/>
            <SignUpForm/>
        </div>     
    );
};

export default Home;
