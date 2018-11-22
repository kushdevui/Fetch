/**
 * Sign up layout
 * 
 * 
 */
 import React from "React";
 import Header from "../Header/header";
 import SignupLanding from "./signuplanding";
 import {Container,Row} from "reactstrap";

 const Signup = () =>{
     return(
         <Row>
            <Header headerTemplate="static"/>
            <Container>
                <SignupLanding/>
            </Container>
         </Row>
     );
 };

 export default Signup;
