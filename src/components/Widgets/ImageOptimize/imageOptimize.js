//optimize images according to view port changes.

class ImageOptimize {
    constructor(props){
        this.props = props;
    }

    optimizeImage(){
        if(this.props.viewport.isMobile){
            return this.props.mobile_image;
        }
        else{
            return this.props.large_image;
        }
    }

}

export default ImageOptimize;