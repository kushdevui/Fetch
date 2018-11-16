/**
 *  Navbar Component
 */

// Dependencies
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { 
    Button , 
    Container, 
    Row, 
    Col,  
    Collapse,
    NavbarBrand,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropDown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Logo  from '../Logo/logo' ;

// Styles & Images
import './navbar.scss';

class  NavigationBar extends Component {

    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state={
            isOpen:false,
            isActive:false
        };
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen,
            isActive: !this.state.isActive
        })
        
    }

    render(){
        return(
            <div className="navbar-section">
                <Navbar color="transparent" light expand="md">
                    <NavbarBrand href="/">
                        <Logo/>
                    </NavbarBrand>
                    <FontAwesomeIcon className={"d-sm-none " + (this.state.isActive ? "toggle-animate": "toggle-animate-inactive")} onClick={this.toggle} icon={faAngleDown} color="white" size="2x"/>
                    <Collapse className={this.state.isOpen ? "show-collapse" : ""} navbar>
                    <FontAwesomeIcon  onClick={this.toggle}  className="close d-sm-none" icon={faTimes} color="black" size="1x"/>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Become a Sitter</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">SignUp | Login</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }   
}

//exporting the module
export default NavigationBar;