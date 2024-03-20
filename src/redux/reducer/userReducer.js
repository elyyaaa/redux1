import {type} from "../types";

const initialState ={
    value:"",
    users: [],
}
export default function userReducer(state = initialState,action){
    if (action.type === type.VALUE){
        return {...state,value: action.payload}
    }else if (action.type === type.ADD){
        return {...state,users: [...state.users,action.payload],value: ""}
    }else if (action.type === type.DELETE){
        return {...state,users: [],value: ""}
    }
    return state
}