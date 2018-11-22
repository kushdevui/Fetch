import React, {Component} from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import ResponsiveUtils from "../../components/Widgets/ResponsiveUtils/responsiveUtils";
import { connect } from "react-redux";
import { onResizeAction } from "../../redux/actions/globalActions";

//importing Components 
import Home from "../../components/Home/home";
import SignUp from "../../components/Signup/signup";

class Layout extends Component {
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
    }

    render() {
        return (
            <div className="container-fluid">
                <Switch>
                    <Route path="/" exact  component={Home}/>
                    <Route path="/signup" exact component={SignUp}/>
                </Switch>
            </div>
        );
    }
}


const mapStateToProps = ( state ) => {
    return {
        viewport : state.viewport
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        resize : ( viewport ) => {
            dispatch(onResizeAction(viewport));  
        }
    };
};

Layout.propTypes = {
    resize : PropTypes.func
};

// Exporting the Layout Component
export default connect(mapStateToProps,mapDispatchToProps)(Layout);


