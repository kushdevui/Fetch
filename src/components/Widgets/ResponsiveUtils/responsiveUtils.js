import { breakpoints } from '../../../../config';

class ResponsiveUtil {
    
    constructor(){
        this.viewport;
    }

    init(){
        window.addEventListener("resize" , ()=> {
            this.onResize();
        });
        window.addEventListener("onOrientationChange" , ()=> {
            this.onResize();
        });
    }

    viewPortSelector(){
        if(window.innerWidth >= breakpoints.desktop){
            this.viewport='Desktop'
        }
        else if(window.innerWidth >= breakpoints.tablet){
            this.viewport='Tablet'
        }
        else if(window.innerWidth <= breakpoints.mobile){
            this.viewport='Mobile'
        }

    }
}


export default ResponsiveUtil;