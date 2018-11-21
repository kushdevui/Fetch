/**
 *  Header Component
 */

// Dependencies
import React, {Component} from "react";
import PropTypes from "prop-types";
import ResponsiveUtils from "../Widgets/ResponsiveUtils/responsiveUtils";
import ImageOptimize from "../../components/Widgets/ImageOptimize/imageOptimize";
import NavigationBar from "../Navbar/navbar";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

// Styles & Images
import "./header.scss";

class Header extends Component  {
    constructor(){
        super();
        this.responsiveUtils = new ResponsiveUtils();
    }
    componentDidMount(){

        //Optimizing Image as per the viewPort.
        this.imageOptimizer = new ImageOptimize({
            mobile_image : "../../assets/images/walking-dog-bg-320.png", 
            large_image : "../../assets/images/walking-dog-bg.png", 
            viewport : this.props.viewport
        });

        this.bgImage = {
            backgroundImage: `url(${this.imageOptimizer.optimizeImage()})`
        };

    }

    render(){
        switch(this.props.headerTemplate){
            case "static"  :
                return "Single Image" ;
            case "landing" :   
                return(
                <div style={this.bgImage} className="header">
                    <Container fluid>
                        <Row>
                            <Col xs="12" className="pt-3">
                                <NavigationBar/>
                            </Col>
                        </Row>
                        <h1 xs="12" className="d-sm-none pt-5 text-white">
                            Love & care, when you’re not there
                        </h1>
                    </Container>
                </div>
                );
            default:
        }
    }
}

Header.propTypes = {
    viewport:PropTypes.object,
    headerTemplate:PropTypes.string.isRequired
};

const mapStateToProps = ( state ) => {
    return {
        viewport : state.resizeReducer.viewport
    };
};


// Exporting the Header Component
export default connect(mapStateToProps)(Header);
