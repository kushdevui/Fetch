

/**
 * Global actions that used by several components\
 * 
 */

//  Dependencies
import { RESIZE_VIEWPORT } from "./constants";


//  Action for Window Resize and Orientation Change
export const onResizeAction = (viewport) => {
    return {
        type : RESIZE_VIEWPORT,
        payload : viewport
    };
};