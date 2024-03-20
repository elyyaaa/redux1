import {type} from "../types";

const initialState = {
    result: null
}
export default function calculatorReducer(state = initialState,action){
   if (action.type === type.PLUS){
       return  {...state,result: action.payload.number1 + action.payload.number2,}
   }else if (action.type === type.MINE){
       return  {...state,result: action.payload.number1 - action.payload.number2,}
   }else if (action.type === type.MULTIPLY){
       return  {...state,result: action.payload.number1 * action.payload.number2,}
   }else if (action.type === type.DIVIDE){
       return  {...state,result: action.payload.number1 / action.payload.number2,}
   }
   return  state
}