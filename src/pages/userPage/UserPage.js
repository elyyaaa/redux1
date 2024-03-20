import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUserAction, changeInputAction, deleteUserAction} from "../../redux/action";
import User from "../../components/User";
const UserPage = () => {
    const {users,value} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const changeInput = (event) =>{
        dispatch(changeInputAction(event.target.value))
    }
    const addUser = ()=>{
        dispatch(addUserAction(value))
    }
    const deleteUser =()=>{
        dispatch(deleteUserAction([]))
    }

    return (
        <div>
            <input onChange={changeInput} type="text" placeholder="name"/>
            <button onClick={addUser}>add</button>
            <button onClick={deleteUser}>delete all</button>

            {users.map((users,idx) => <User key={idx} userName={users}/>)}
        </div>
    );
};

export default UserPage;