/**
 * Sign up layout
 * 
 * 
 */
import React , {Component} from "React";
import PropTypes from "prop-types";
import Header from "../../components/Header/header";
import SignupLanding from "../SignUpLanding/signuplanding";
import SignUpForm from "../SignUpForm/signupform";
import {Container, Row, Col} from "reactstrap";
import { connect } from "react-redux";
import { renderFormTemplateAction } from "../../redux/actions/signUpActions.js";

class SignUp extends Component {

    renderLandingTemplate() {
        return <SignupLanding renderForm = {this.props.dispatchFormRenderAction}/>;
    }

    renderFormTemplate() {
        return (
            <Row className = "d-flex flex-column">
                <Col lg={5} sm={12} className="m-auto">
                    <SignUpForm/>
                </Col>
            </Row>
        );
    }

    renderTemplates() {
        if(this.props.renderTemplate == "landing") {
            return this.renderLandingTemplate();
        } else if(this.props.renderTemplate == "form") {
            return this.renderFormTemplate();
        }
    }

    render(){
         return (
            <Row>
                <Header headerTemplate="static"/>
                <Container>
                    {this.renderTemplates()}
                </Container>
            </Row>
        );
    }
}

SignUp.propTypes = {
    renderTemplate : PropTypes.string,
    dispatchFormRenderAction : PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        renderTemplate : state.signUpTemplate.signUpTemplate
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFormRenderAction : (template) => {
            dispatch(renderFormTemplateAction(template));
        }
    };
};


export default connect(mapStateToProps , mapDispatchToProps)(SignUp);
