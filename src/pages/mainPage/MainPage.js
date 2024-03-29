import React from 'react';
import {useDispatch} from "react-redux";
import changeTitle from "../../components/ChangeTitle";

const MainPage = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=> dispatch(changeTitle())}>change title</button>
        </div>
    );
};

export default MainPage;