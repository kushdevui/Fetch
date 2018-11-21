/**
 * Reducer for Window resize or orientation change
 * 
 */

// Dependencies
import { RESIZE_VIEWPORT } from "../actions/constants";


const initialState = {
    viewport : {}
};

 const resizeReducer = ( state = initialState , action) => {
    switch (action.type) {
        case RESIZE_VIEWPORT:
            return {
                ...state,
                viewport : action.payload
            };

        default : 
            return state;
    }
 };

 export default resizeReducer;