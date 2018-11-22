/**
 * Sign up Landing Page
 * 
 * 
 */

 import React from "react";
 import { ButtonGroup , Button , Row , Col } from "reactstrap";

 import "./signup.scss";

 const SignupLanding = () =>{
    return(<Row className="signup-landing-section">
        <Col className="d-signup-inner" lg={5} xs={12}>
            <ButtonGroup>
                <Button color=" facbook-login-btn button-full">
                    Sign up with Facebook
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button color="btn btn-outline-secondary button-full">
                    Sign up in with Google
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <hr/>
            </ButtonGroup>
            <ButtonGroup>
                <Button color="btn email-login button-full">
                    Sign up in with Email
                </Button>
            </ButtonGroup>
            <p className="pt-2">
                By clicking Sign up or Continue with, I agree to Fetch’s Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.
            </p>
            <hr/>
            <h3>Already have an Fetch account ?</h3>
            <ButtonGroup>
                <Button color="btn btn-danger button-full">
                    Login
                </Button>
            </ButtonGroup>
        </Col>
    </Row>);
 };

 export default SignupLanding;

