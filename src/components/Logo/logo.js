/**
 *  Home Component { Rendering brand logo and optimize it as per the viewport }
 */

// Dependencies
import React from "react";

const Logo = (props) =>{
    switch(props.logoTemplate){
        case "black" :
        return(
            <img width="50" height="50" src="../../assets/images/logo-black.svg" alt="Fetch Logo"/>
        );
        case "basic" :
        return(
            <img width="50" height="50" src="../../assets/images/logo-320.svg" alt="Fetch Logo"/>
        );
        default:
    }
};

export default Logo;


