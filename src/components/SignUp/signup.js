/**
 * Sign up form
 * 
 * 
 */

//  Dependencies
import React from "react";
import PropTypes from "prop-types";
// import ResponsiveUtils from "../Widgets/ResponsiveUtils/responsiveUtils";
import { Row , Col , FormGroup , Input , Label , Form , FormFeedback } from "reactstrap";
import { Field, reduxForm } from "redux-form";

// Styles & Images
import "./signup.scss";

const validate = values => {
    console.log(values);
    const errors = {};

    if(!values.signup_first_name) {
        errors.signup_first_name = "First Name is Required";
    } else if(!/[A-Za-z]/.test(values.signup_first_name)) {
        errors.signup_first_name = "Please enter only alphabets";
    }

    if(!values.signup_last_name) {
        errors.signup_last_name = "Last Name is Required";
    } else if(!/[A-Za-z]/.test(values.signup_last_name)) {
        errors.signup_last_name = "Please enter only alphabets";
    }

    if (!values.signup_email) {
        errors.signup_email = "Email Address is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.signup_email)) {
        errors.signup_email = "Invalid email address";
    }

    if(!values.signup_phone) {
        errors.signup_phone = "Phone number is required";
    } else if(values.signup_phone.length != 10) {
        errors.signup_phone = "Invalid Phone Number";
    }

    return errors;
};

const RenderField = ({
    input,
    type,
    id,
    label,
    meta: { touched, error }
}) => (
    <FormGroup>
        <Label for = {id}>{label}</Label>
        <Input {...input} invalid = {touched && error} valid = {!error} type = {type} id = {id} name = {name}></Input>
        <FormFeedback invalid>{error}</FormFeedback>
    </FormGroup>
);

const SignUpForm = (props) => {
    const { handleSubmit } = props; 
    return (
    <Form onSubmit = {handleSubmit} className = "mt-5">
        <Row>
            <Col md = {6} sm = {12}>
                <Field 
                    name = "signup_first_name"
                    type = "text"
                    id = "signup_first_name"
                    label = "First Name"
                    component = { RenderField }
                />
            </Col>
            <Col md = {6} sm = {12}>
                <Field 
                    name = "signup_last_name"
                    type = "text"
                    id = "signup_last_name"
                    label = "Last Name"
                    component = { RenderField }
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <Field 
                    name = "signup_email"
                    type = "email"
                    id = "signup_email"
                    label = "Email Address"
                    component = { RenderField }
                />
            </Col>
            <Col>
                <Field 
                    name = "signup_phone"
                    type = "text"
                    id = "signup_phone"
                    label = "Phone Number"
                    component = { RenderField }
                />
            </Col>
        </Row>
    </Form>
    );
};

RenderField.propTypes = {
    input: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    type : PropTypes.string,
    id : PropTypes.string,
    label : PropTypes.string,
    meta : PropTypes.object
};

SignUpForm.propTypes = {
    handleSubmit : PropTypes.func
};



export default reduxForm({
    form : "signUpForm",
    validate
})(SignUpForm);