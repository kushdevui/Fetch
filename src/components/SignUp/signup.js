/**
 * Sign up form
 * 
 * 
 */

//  Dependencies
import React , { Component } from "react";
// import ResponsiveUtils from "../Widgets/ResponsiveUtils/responsiveUtils";
import { Container , Row , Col , Form , FormGroup , Input , Label , FormFeedback , FormText} from "reactstrap";

// Styles & Images
import "./signup.scss";

class SignUp extends Component {
     constructor() {
        super();
        this.state = {
            validate : {}
        };

        this.validateEmail = this.validateEmail.bind(this);
     }
    

    validateEmail(e) {
        const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state;
        if(email_regex.test(e.target.value)) {
            validate.emailState = "valid";
        } else {
            validate.emailState = "invalid";
        }
        this.setState({
            validate 
        });
    }

    render() {
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
                                    <Input valid={ this.state.validate.emailState === "valid" }
                                        invalid={ this.state.validate.emailState === "invalid" }
                                        type="email" name="signup_email" id="signup_email" onChange = {this.validateEmail} />
                                        <FormFeedback valid>
                                            You have entered a valid Email.
                                        </FormFeedback>
                                        <FormFeedback invalid>
                                            Invalid Email.
                                        </FormFeedback>
                                        <FormText>abc@example.com</FormText>
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
    }
}

export default SignUp;