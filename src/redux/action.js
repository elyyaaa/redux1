import {type} from "./types";
export function changeTitleAction(){
    return {}
}
export function asyncFunctionAction(){
    return function (){
        setTimeout(()=>{
            alert("hello!")
        },2000)
    }

}

function getUserAction(users){
    return{
        type:type.USERS,
        payload:users
    }
}
export function fetchUserAction(){
    return async function (dispatch){
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await responce.json()
        dispatch(getUserAction(data))
    }
}