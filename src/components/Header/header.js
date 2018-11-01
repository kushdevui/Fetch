import React, {Component} from 'react';
import ResponsiveUtils from '../Widgets/ResponsiveUtils/responsiveUtils';
import './header.scss';
import Background from '../../../public/assets/images/walking-dog-bg.png';

var bgImage = {
    backgroundImage: "url(" + Background + ")",
}

class Header extends Component  {
    constructor(){
        super();

        this.state = {
            viewport : ''
        };

        this.responsiveUtils = new ResponsiveUtils();
    }
    componentDidMount(){

        // On Resize and On Orientation Change Handler added to ResponsiveUtils Object
        this.responsiveUtils.__proto__.onResize = () => {
            this.responsiveUtils.viewPortSelector();
            this.setState ({
                viewport : this.responsiveUtils.viewPort
            })
        }
        // Component starts listening to 'resize' and 'onOrientationChange' events
        this.responsiveUtils.init();

        // Get the value of viewport on component mount
        this.responsiveUtils.onResize();
    }

    render(){
        return(
            <div style={bgImage} className="header">
                
            </div>
        )
    }
}

export default Header;