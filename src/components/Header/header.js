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
import { onResizeAction } from "../../redux/actions/globalActions";

// Styles & Images
import "./header.scss";


class Header extends Component  {
    constructor(){
        super();
        this.responsiveUtils = new ResponsiveUtils();
    }
    componentDidMount(){
        // On Resize and On Orientation Change Handler added to ResponsiveUtils Object
        this.responsiveUtils.__proto__.onResize = () => {
            this.responsiveUtils.viewPortSelector();
            this.props.resize(this.responsiveUtils.getViewPort());
        };
        // Component starts listening to 'resize' and 'onOrientationChange' events
        this.responsiveUtils.init();

        // Set the value of viewport on component mount
        this.responsiveUtils.onResize();
        
        //Optimizing Image as per the viewPort.

        this.imageOptimizer = new ImageOptimize({
            mobile_image : "../../assets/images/walking-dog-bg-320.png", 
            large_image : "../../assets/images/walking-dog-bg.png", 
            viewport : this.responsiveUtils.getViewPort()
        });

        this.bgImage = {
            backgroundImage: `url(${this.imageOptimizer.optimizeImage()})`
        };

    }

    render(){
        console.log(this.props.viewport);
        return(
            <div style={this.bgImage}   className="header">
                <Container>
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

const mapStateToProps = ( state ) => {
    return {
        viewport : state.resizeReducer.viewport
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        resize : ( viewport ) => {
            dispatch(onResizeAction(viewport));  
        }
    };
};

Header.propTypes = {
    resize : PropTypes.func,
    viewport : PropTypes.object
};

// Exporting the Header Component
export default connect(mapStateToProps, mapDispatchToProps)(Header);
