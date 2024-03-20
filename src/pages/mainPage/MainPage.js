// import React from 'react';
// import {useDispatch, useSelector } from 'react-redux';
//
// const MainPage = () => {
//     const title = useSelector(state => state.title)
//     const dispatch = useDispatch()
//
//     const changeTitle = ()=>{
//         dispatch({
//             type: "CHANGE_TITLE"
//         })
//     }
//     return (
//         <div>
//             <h1>{title}</h1>
//             <button onClick={changeTitle}>change title</button>
//         </div>
//     );
// };
//
// export default MainPage;
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeTitleAction, withParamsAction} from "../../redux/action";


const MainPage = () => {
    const title = useSelector(state => state.titileReducer.title)
    const dispatch = useDispatch()
    const changeTitle = ()=>{
        dispatch(changeTitleAction())
    }
    const withParams = ()=>{
        dispatch(withParamsAction("Goodbye Elya!"))
    }




    return (
        <div>
            <h1>{ title }</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={withParams}>with params</button>
        </div>
    );
};

export default MainPage;