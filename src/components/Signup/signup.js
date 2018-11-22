/**
 * Sign up layout
 * 
 * 
 */

 import React from "React";
 import Header from "../Header/header";
 import SignupForm from "../SignUpForm/signupform";
 import {Container} from "reactstrap";

 const Signup = () =>{
     return(
         <div>
            <Header headerTemplate="static"/>
            <Container>
                <SignupForm/>
            </Container>
           
         </div>
     );
 };

 export default Signup;
