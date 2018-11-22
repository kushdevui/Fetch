/**
 *  Navbar Component
 */

// Dependencies
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { 
    Collapse,
    NavbarBrand,
    Navbar,
    Nav,
    NavItem,
    NavLink
    } from "reactstrap";
    
import Logo  from "../Logo/logo" ;

// Styles & Images
import "./navbar.scss";



class  NavigationBar extends Component {

    constructor(props){
        super(props);
        this.props = props;
        this.toggle = this.toggle.bind(this);

        this.state={
            isOpen:false,
            isActive:false
        };
    }

    componentDidMount(){
       
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen,
            isActive: !this.state.isActive
        });
    }

    render(){
        switch(this.props.navbarTemplate){
            case "black":
                return ( 
                    <div className="navbar-section">
                        <Navbar className="p-0" color="transparent" dark expand="md">
                            <NavbarBrand href="/">
                                <Logo logoTemplate="black"/>
                            </NavbarBrand>
                            <Collapse className={this.state.isOpen ? "show-collapse" : ""} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="#">Become a Sitter</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Help</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/signup">SignUp</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">login</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>);
            case "white":
                return(
                    <div className="navbar-section">
                        <Navbar className="p-0" color="transparent" light expand="md">
                            <NavbarBrand href="/">
                                <Logo logoTemplate="basic"/>
                            </NavbarBrand>
                            <FontAwesomeIcon className={"d-sm-none " + (this.state.isActive ? "toggle-animate": "toggle-animate-inactive")} onClick={this.toggle} icon={faAngleDown} color="white" size="2x"/>
                            <Collapse className={this.state.isOpen ? "show-collapse" : ""} navbar>
                            <FontAwesomeIcon  onClick={this.toggle}  className="close d-sm-none" icon={faTimes} color="black" size="1x"/>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink href="#">Become a Sitter</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">Help</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/signup">SignUp</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#">login</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                );
            default:
        }

       
    }
}

// React prototype rules
NavigationBar.propTypes = {
    template:PropTypes.string,
    navbarTemplate:PropTypes.string
};

//exporting the module
export default NavigationBar;