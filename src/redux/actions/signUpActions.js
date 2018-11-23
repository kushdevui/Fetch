/**
 * Actions used by Sign Up flow
 * 
 */

//  Dependencies
import { RENDER_SIGNUP_LANDING_TEMPLATE, RENDER_SIGNUP_FORM_TEMPLATE } from "./constants";


// Action dispatched to render Landing Signup template 
export const renderLandingTemplateAction = (template) => {
    return {
        type : RENDER_SIGNUP_LANDING_TEMPLATE,
        payload : template
    };
};

// Action dispatched to render Signup form template 
export const renderFormTemplateAction = (template) => {
    return {
        type : RENDER_SIGNUP_FORM_TEMPLATE,
        payload : template
    };
};