import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    titileReducer: titleReducer,
    userReducer,



})