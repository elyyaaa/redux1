import countPage from "../pages/countPage/CountPage";

const initialState = {
    title: "old title",
    aboutTitle: "old about title",
    contactTitle: "",
    countTitle: 0
}
export default function reducer(state = initialState,action){

    if (action.type === "CHANGE_TITLE"){
        return {...state,title: "new title"}
    }else if (action.type === "CHANGE_ABOUT_TITLE"){
        return {...state,aboutTitle: "new about title"}
    }else if (action.type === "WITH_PARAMS"){
        return {...state,contactTitle: action.payload}
    }else if (action.type === "FROM_INPUT"){
        return  {...state,contactTitle: action.payload}
    }else if (action.type === "INCREMENT"){
        return {...state,countTitle: state.countTitle + 1}
    }else if (action.type === "DECREMENT") {
        if (state.countTitle > 0){
        return {...state,countTitle: state.countTitle -1}}
    }else if (action.type === "PLUS10"){
        return {...state,countTitle: state.countTitle +10}
    }else if (action.type === "RESET"){
        return {...state,countTitle: 0}
    }
    return state

}