/**
 * Login Page Component
 * 
 */


// Dependencies
import React from "react";
import { Row, Container, Col } from "reactstrap";

// importing Components
import Header from "../../components/Header/header";
import LoginForm from "../LoginForm/loginForm";


const Login = () => {
    return (
        <div>
            <Row>
                <Header headerTemplate="static"/>
                <Container>
                    <Row className = "d-flex flex-column">
                        <Col lg={5} sm={12} className="m-auto">
                            <LoginForm/>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </div>
    );
};

export default Login;