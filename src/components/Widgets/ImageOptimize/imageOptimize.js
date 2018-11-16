//optimize images according to view port changes.
import { breakpoints } from '../../../../config';

class ImageOptimize {
    constructor(props){
        this.props = props;
    }

    optimizeImage(){
        if(this.props.viewport== breakpoints.mobile){
            return this.props.mobile_image
        }
        else{
            return this.props.large_image
        }
    }

}

export default ImageOptimize;