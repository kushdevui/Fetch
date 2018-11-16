/**
 *  Header Component
 */

// Dependencies
import React, {Component} from 'react';
import Search from '../Search/search';
import ResponsiveUtils from '../Widgets/ResponsiveUtils/responsiveUtils';
import ImageOptimize from '../../components/Widgets/ImageOptimize/imageOptimize'
import NavigationBar from '../Navbar/navbar';
import { Button , Container, Row, Col } from 'reactstrap';

// Styles & Images
import './header.scss';




class Header extends Component  {
    constructor(){
        super();

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
            })
        }
        // Component starts listening to 'resize' and 'onOrientationChange' events
        this.responsiveUtils.init();

        // Set the value of viewport on component mount
        this.responsiveUtils.onResize();
        
        //Optimizing Image as per the viewPort.

        this.imageOptimizer = new ImageOptimize({
            mobile_image : '../../assets/images/walking-dog-bg-320.png', 
            large_image : '../../assets/images/walking-dog-bg.png', 
            viewport : this.state.viewport
        })

        this.bgImage = {
            backgroundImage: `url(${this.imageOptimizer.optimizeImage()})`
        }

    }

    render(){
        return(
            <div style={this.bgImage}   className="header">
                <Container>
                    <Row>
                        <Col xs="12" className="pt-3">
                            <NavigationBar/>
                        </Col>
                    </Row>
                    <h1 xs="12" className="d-sm-none pt-1 pl-1 text-white">
                        Love & care, when you’re not there
                    </h1>
                </Container>
            </div>
        )
    }
}

// Exporting the Header Component
export default Header;
