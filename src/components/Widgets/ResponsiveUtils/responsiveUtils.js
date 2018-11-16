import { breakpoints } from "../../../../config";

class ResponsiveUtil {
    
    constructor(){
        this.viewport = {};
    }

    init(){
        window.addEventListener("resize" , ()=> {
            this.onResize();
        });
        window.addEventListener("onOrientationChange" , ()=> {
            this.onResize();
        });
    }

    resetViewPort() {
        this.viewport = {
            isMobile : false,
            isTablet : false,
            isDesktop : false
        };
    }

    viewPortSelector(){
        this.resetViewPort();

        if(window.innerWidth >= breakpoints.desktop){
            this.viewport.isDesktop = true;
        }
        else if(window.innerWidth >= breakpoints.tablet){
            this.viewport.isTablet = true;
        }
        else if(window.innerWidth <= breakpoints.mobile){
            this.viewport.isMobile = true;
        }

    }

    getViewPort () {
        return this.viewport;
    }
}


export default ResponsiveUtil;