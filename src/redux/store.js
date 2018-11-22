/**
 * Global Application Store
 * 
 * Container for every state of the application
 */


//  Dependencies
import {createStore, combineReducers, applyMiddleware} from "redux"; 
import { createLogger } from "redux-logger";
// Thunk is for receiving Async Actions
import thunk from "redux-thunk";
import resizeReducer from "./reducers/resizeReducer";
import { reducer as formReducer } from "redux-form";

// Initial State of Store
const initialStoreState = () => {
    return {};
};

/**
 * Store Module
 * 
 * Parameters of createStore:-
 * 
 * 1. combineReducers is to combine all reducers for the store to use as store can use only one reducer
 * 2. InitialState of store, here {} as can be overwritten by each reducer's own initial state
 * 3. applyMiddlware takes every middleware stack them and performs each's tasks everytime store's state is updated
 */
export default createStore(
    combineReducers({
        resizeReducer  : resizeReducer,
        form : formReducer
    }),
    initialStoreState(),
    applyMiddleware(createLogger() , thunk)
);