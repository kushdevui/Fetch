/**
 * Login Form Component
 * 
 */

// Dependencies
import React from "react";
import { Form,  Button, FormGroup, Input, Label } from "reactstrap"; 
import PropTypes from "prop-types";
import { Field , reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

// Styling
import "./login_form.scss";


const renderField = ({ input ,
                    label,
                    type,
                    id,
                    icon
                })=> {
    switch(type) {
        case "email":
            return (
                <FormGroup>
                    <div className = "d-flex input-fields-container">
                        <Input className = "rounded-0" {...input} bsSize = "lg" type = {type} id = {id} name = {name} placeholder = {label}></Input>
                        <Label for = {id} className = "form-icons">
                            <FontAwesomeIcon icon = {icon} />
                        </Label>
                    </div>
                </FormGroup>    
            );
        
        case "password":
            return (
                <FormGroup>
                    <div className = "d-flex input-fields-container">
                        <Input className = "rounded-0" {...input} bsSize = "lg" type = {type} id = {id} name = {name} placeholder = {label}></Input>
                        <Label for = {id} className = "form-icons">
                            <FontAwesomeIcon icon = {icon}/>
                        </Label>
                    </div>
                </FormGroup>
            );
        default: return "";
    }
};

const LoginForm = (props) => {
    const { error , handleSubmit , submitting } = props;
    return (
        <div>
            <Form onSubmit={handleSubmit} className = "mt-5 login-form">
                <Field
                    name="login_email"
                    type="email"
                    id="login_email"
                    label="Email"
                    component={renderField}
                    icon={faEnvelope}
                />
                <Field
                    name="login_password"
                    type="password"
                    id="login_password"
                    label="Password"
                    component={renderField}
                    icon={faKey}
                />
                {error && <strong>{error}</strong>}
                <div className="d-flex">
                <Button type="submit" disabled={submitting} className="login-submit-btn">
                    Log In
                </Button>
                </div>
            </Form>
        </div>
    );
};

LoginForm.propTypes = {
    error: PropTypes.object,
    handleSubmit: PropTypes.func,
    submitting: PropTypes.boolean
};

export default reduxForm({
    form: "loginForm"
})(LoginForm);