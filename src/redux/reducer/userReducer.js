import {type} from "../types";

const initialState ={
    users: []

}
export default function userReducer(state = initialState,action){
    switch (action.type){
        case type.USERS:
            return {...state,users: action.payload}
        default: return state
    }

    return state
}

