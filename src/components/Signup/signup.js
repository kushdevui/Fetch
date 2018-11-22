/**
 * Sign up layout
 * 
 * 
 */

 import React from "React";
 import Header from "../Header/header";
 import SignupForm from "../SignUpForm/signupform";
 import {Container,Row} from "reactstrap";

 const Signup = () =>{
     return(
         <Row>
            <Header headerTemplate="landing"/>
            <Container>
                <SignupForm/>
            </Container>
         </Row>
     );
 };

 export default Signup;
