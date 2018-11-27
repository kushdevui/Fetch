/**
 * Sign up Landing Page
 * 
 * 
 */

 import React , {Component} from "react";
 import PropTypes from "prop-types";
 import { ButtonGroup , Button , Row , Col } from "reactstrap";
 import { withRouter } from "react-router-dom";

 import "./sign_up_landing.scss";

 class SignupLanding extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    loginClick() {
        console.log(this.props.history);
        this.props.history.push("/login");
        console.log(this.props.history);
    }

    render () {
        return (
            <Row className="signup-landing-section">
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
                        <Button color="btn email-login button-full" onClick = {() => this.props.renderForm("form")}>
                            Sign up in with Email
                        </Button>
                    </ButtonGroup>
                    <p className="pt-2">
                        By clicking Sign up or Continue with, I agree to Fetch’s Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.
                    </p>
                    <hr/>
                    <h3>Already have an Fetch account ?</h3>
                    <ButtonGroup>
                        <Button color="btn btn-danger button-full" onClick = {()=> this.loginClick()}>
                            Login
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        );
    }  
}

SignupLanding.propTypes = {
    renderForm : PropTypes.func,
    history : PropTypes.object
};

export default withRouter(SignupLanding);

