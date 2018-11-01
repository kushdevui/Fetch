import { breakpoints } from '../../../../config';

class ResponsiveUtil {
    
    constructor(){
        this.viewPort;
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
        if(window.innerWidth > breakpoints.desktop){
            this.viewPort='Desktop'
        }
        else if(window.innerWidth > breakpoints.mobile){
            this.viewPort='Tablet'
        }
        else if(window.innerWidth < breakpoints.mobile){
            this.viewPort='Mobile'
        }

    }
}


export default ResponsiveUtil;