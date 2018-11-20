/**
 *  Header Component
 */

// Dependencies
import React, {Component} from "react";
import ResponsiveUtils from "../Widgets/ResponsiveUtils/responsiveUtils";
import ImageOptimize from "../../components/Widgets/ImageOptimize/imageOptimize";
import NavigationBar from "../Navbar/navbar";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";

// Styles & Images
import "./header.scss";


class Header extends Component  {
    constructor(props){
        super();
        this.props = props;
        this.state = {
            viewport : {}
        };

        this.responsiveUtils = new ResponsiveUtils();
    }
    componentDidMount(){
        // On Resize and On Orientation Change Handler added to ResponsiveUtils Object
        this.responsiveUtils.__proto__.onResize = () => {
            this.responsiveUtils.viewPortSelector();
            this.setState ({
                viewport : this.responsiveUtils.getViewPort()
            });
        };
        // Component starts listening to 'resize' and 'onOrientationChange' events
        this.responsiveUtils.init();

        // Set the value of viewport on component mount
        this.responsiveUtils.onResize();
        
        //Optimizing Image as per the viewPort.

        this.imageOptimizer = new ImageOptimize({
            mobile_image : "../../assets/images/walking-dog-bg-320.png", 
            large_image : "../../assets/images/walking-dog-bg.png", 
            viewport : this.state.viewport
        });

        this.bgImage = {
            backgroundImage: `url(${this.imageOptimizer.optimizeImage()})`
        };

    }

    render(){
        switch(this.props.headerTemplate){
            case "static" :
                return "Single Image" ;
            default:     
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
        }
    }
}

// Define rules for props
Header.propTypes = {
    headerTemplate : PropTypes.string
};



// Exporting the Header Component
export default Header;
