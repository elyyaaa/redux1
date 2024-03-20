import {type} from "./types";

export function changeTitleAction(){
    return {
        type: type.CHANGE_TITLE
    }
}
export function withParamsAction(title){
    return{
        type:type.WITH_PARAMS,
        payload: title
    }
}

export function changeInputAction(value){
    return{
        type:type.VALUE,
        payload: value,
    }
}

export function addUserAction(name){
    return{
        type:type.ADD,
        payload:name
    }
}
export function deleteUserAction(user){
    return {
        type:type.DELETE,

    }
}
export function plusAction(number1,number2){
    return{
        type:type.PLUS,
        payload:{ number1, number2 }
    }

}
export function mineAction(number1,number2){
    return{
        type:type.MINE,
        payload:{ number1, number2 }
    }

}
export function multiplyAction(number1,number2){
    return{
        type:type.MULTIPLY,
        payload:{ number1, number2 }
    }

}
export function divideAction(number1,number2){
    return{
        type:type.DIVIDE,
        payload:{ number1, number2 }
    }

}