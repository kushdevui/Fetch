/**
 * Sign up form
 * 
 * 
 */

//  Dependencies
import React from "react";
// import ResponsiveUtils from "../Widgets/ResponsiveUtils/responsiveUtils";
import { Container , Row , Col , Form , FormGroup , Input , Label } from "reactstrap";

// Styles & Images
import "./signup.scss";

const SignUp = () => {

    return (
        <div>
            <Container fluid>
            <div className = "px-md-5">
                <div>
                    <h1 className = "sign-up-heading">Sign Up for Fetch</h1>
                </div>
                <Form className = "px-md-5 mt-5">
                    <Row>
                        <Col md = {6} sm = {12}>
                            <FormGroup>
                                <Label for="signup_first_name">First Name</Label>
                                <Input type="text" name="signup_first_name" id="signup_first_name" />
                            </FormGroup>
                        </Col>
                        <Col md = {6} sm = {12}>
                            <FormGroup>
                                <Label for="signup_last_name">Last Name</Label>
                                <Input type="text" name="signup_last_name" id="signup_last_name" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md = {6} sm = {12}>
                            <FormGroup>
                                <Label for="signup_email">Email</Label>
                                <Input type="email" name="signup_email" id="signup_email" />
                            </FormGroup>
                        </Col>
                        <Col  md = {6} sm = {12}>
                            <FormGroup>
                                <Label for="signup_phone">Phone</Label>
                                <Input type="phone" name="signup_phone" id="signup_phone" />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
            </Container>
        </div>
    );
};

export default SignUp;