import {type} from "../types";

const initialState = {
    title: ""
}
export default function titileReducer(state= initialState,action){
if (action.type === type.CHANGE_TITLE){
    return {...state,title: "Hello Elya!"}
}else if (action.type === type.WITH_PARAMS){
    return {...state,title: action.payload}
}
    return  state
}