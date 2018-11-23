/**
 * Sign up form
 * 
 * 
 */

//  Dependencies
import React from "react";
import PropTypes from "prop-types";

import { Form , FormGroup , Input , Label } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faMobile, faKey } from "@fortawesome/free-solid-svg-icons";
import { validate , warn } from "../../global/libs/signUpFormValidations";

// Styles & Images
import "./sign_up_form.scss";

/**
 * Render Input Fields here
 * 
 * @param {*} param0 
 */
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
                    <Label for = {id} className = "form-icons">
                        <FontAwesomeIcon icon = {icon}/>
                    </Label>
                </div>
                
                {<div className = "errors-warnings-section">
                    {touched && error.isEmpty && <div className = "input-field-error-msg">{error.isEmpty}</div>}
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
                    <Label for = {id} className = "form-icons">
                        <FontAwesomeIcon icon = {icon} />
                    </Label>
                </div>
                { touched && error && <div className = "input-field-error-msg">{error}</div>}
                
            </FormGroup>
        );
    }
};


/**
 * 
 * @param {Store variables} props 
 */
const SignUpForm = (props) => {
    const { handleSubmit } = props; 
    return (
    <Form onSubmit = {handleSubmit} className = "mt-5 sign-up-form">
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

// Prop validations for fields
RenderField.propTypes = {
    input: PropTypes.object,
    type : PropTypes.string,
    id : PropTypes.string,
    label : PropTypes.string,
    meta : PropTypes.object,
    icon : PropTypes.object
};

// Prop validations for Sign Up form
SignUpForm.propTypes = {
    handleSubmit : PropTypes.func
};

// Making the Sign up form as Redux Form
export default reduxForm({
    form : "signUpForm",
    validate,
    warn
})(SignUpForm);