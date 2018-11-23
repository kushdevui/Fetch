/**
 * Reducer to decide which template to render on Signup route
 * 
 */

// Dependencies
import { RENDER_SIGNUP_LANDING_TEMPLATE, RENDER_SIGNUP_FORM_TEMPLATE } from "../actions/constants";

// Initial State of Reducer
const initialState = {
    signUpTemplate : "landing"
};

const signUpRenderReducer = (state = initialState , action) => {
    switch(action.type) {
        case RENDER_SIGNUP_LANDING_TEMPLATE : {
            return {
                ...state,
                signUpTemplate : action.payload
            };
        }

        case RENDER_SIGNUP_FORM_TEMPLATE : {
            return {
                ...state,
                signUpTemplate : action.payload
            };
        }

        default : return state;
    }
};

// Exporting the Module
export default signUpRenderReducer;