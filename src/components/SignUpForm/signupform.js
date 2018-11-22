/**
 * Sign up form
 * 
 * 
 */

//  Dependencies
import React from "react";
import PropTypes from "prop-types";

import { Form , FormGroup , Input } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faMobile, faKey } from "@fortawesome/free-solid-svg-icons";

// Styles & Images
import "./signupform.scss";

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
        errors.signup_email = "Enter a valid email.";
    }

    if(!values.signup_phone) {
        errors.signup_phone = "Phone Number is Required";
    } else if(!(/\b\d\d\d\d\d\d\d\d\d\d\b/.test(values.signup_phone))) {
        errors.signup_phone = "Enter a valid phone number.";
    }

    errors.signup_password = {};
    if(!values.signup_password) {
        errors.signup_password.isEmpty = "Enter a Password";

    } else if(values.signup_password.length < 8) {
        errors.signup_password.isSmall = "Must contain atleast 8 characters";

        if(!(/[!@#$%^&*./0-9]{1,}/.test(values.signup_password))) {
            errors.signup_password.isInvalid = "Must contain atleast one number or symbol";
        }
    }

    return errors;
};

const warn = values => {
    const warnings = {};
    warnings.signup_password = {};
    if(values.signup_password && (/123456789?0?/.test(values.signup_password) || /\d\d\d\d\d\d\d\d[0-9]{0,}/.test(values.signup_password) || values.signup_password.length <= 8)) {
        warnings.signup_password.isWeak = "Weak Password";
    } else if(values.signup_password && values.signup_password.length >8 && values.signup_password.length <= 12) {
        warnings.signup_password.isFair = "Fair Password";
    } else if(values.signup_password && values.signup_password.length > 12) {
        warnings.signup_password.isStrong = "Strong Password";
    }
    return warnings;
};

const RenderField = ({
    input,
    type,
    id,
    label,
    meta: { touched, error, warning},
    icon
}) => {
    switch(type) {
        case "password" : return (
            <FormGroup>
                <div className = "d-flex input-fields-container">
                    <Input className = "rounded-0" {...input} invalid = {touched && Object.keys(error).length} valid = {!Object.keys(error).length} bsSize = "lg" type = {type} id = {id} name = {name} placeholder = {label}></Input>
                    <FontAwesomeIcon icon = {icon} className = "form-icons"/>
                </div>
                {touched && error.isEmpty && <div className = "input-field-error-msg">{error.isEmpty}</div>}
                {<div>
                    {warning && <div className = { ((warning.isWeak && "weak-password") || (warning.isFair && "fair-password") || (warning.isStrong && "strong-password")) }>{warning.isWeak || warning.isFair || warning.isStrong}</div>}
                    {error.isSmall &&<div className = "input-field-error-msg">{error.isSmall}</div>}
                    {error.isInvalid && <div className = "input-field-error-msg">{error.isInvalid}</div>}
                </div>}
                
            </FormGroup>
        );

        default: return (
            <FormGroup>
                <div className = "d-flex input-fields-container">
                    <Input className = "rounded-0" {...input} invalid = {touched && error} valid = {!error} bsSize = "lg" type = {type} id = {id} name = {name} placeholder = {label}></Input>
                    <FontAwesomeIcon icon = {icon} className = "form-icons"/>
                </div>
                { touched && error && <div className = "input-field-error-msg">{error}</div>}
                
            </FormGroup>
        );
    }
};


const SignUpForm = (props) => {
    const { handleSubmit } = props; 
    return (
    <Form onSubmit = {handleSubmit} className = "mt-5">
        <Field 
            name = "signup_first_name"
            type = "text"
            id = "signup_first_name"
            label = "First Name"
            component = { RenderField }
            icon = {faUser}
        />
    
        <Field 
            name = "signup_last_name"
            type = "text"
            id = "signup_last_name"
            label = "Last Name"
            component = { RenderField }
            icon = {faUser}
        />
    
        <Field 
            name = "signup_email"
            type = "email"
            id = "signup_email"
            label = "Email Address"
            component = { RenderField }
            icon = {faEnvelope}
        />
    
        <Field 
            name = "signup_phone"
            type = "text"
            id = "signup_phone"
            label = "Phone Number"
            component = { RenderField }
            icon = {faMobile}
        />

        <Field
            name = "signup_password"
            type = "password"
            id = "signup_password"
            label = "Create a Password"
            component = { RenderField }
            icon = {faKey}
        />
    </Form>
    );
};

RenderField.propTypes = {
    input: PropTypes.object,
    type : PropTypes.string,
    id : PropTypes.string,
    label : PropTypes.string,
    meta : PropTypes.object,
    icon : PropTypes.object
};

SignUpForm.propTypes = {
    handleSubmit : PropTypes.func
};

export default reduxForm({
    form : "signUpForm",
    validate,
    warn
})(SignUpForm);