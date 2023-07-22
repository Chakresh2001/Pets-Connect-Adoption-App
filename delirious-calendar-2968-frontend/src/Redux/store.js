
import thunk from "redux-thunk";

import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as catProductReducer } from "./Cat_product_reducer/reducer";
const rootReducer=combineReducers({
     catProductReducer
})
export const Store=legacy_createStore(rootReducer, applyMiddleware(thunk))