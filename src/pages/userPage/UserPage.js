import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserAction} from "../../redux/action";
import User from "../../components/User";
import {Link} from "react-router-dom";

const UserPage = () => {

    const dispatch = useDispatch()
    const{users} = useSelector(state => state.userReducer)

    useEffect(() => {
       dispatch(fetchUserAction())

    }, []);


    return (
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            gap:"10px",

        }}>
            {/*{users.map(userInfo => <User userInfo={userInfo}/>) }*/}
                {users.map(userInfo => (
                    <Link to={`/user/${userInfo.id}`} key={userInfo.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <User userInfo={userInfo} />
                    </Link>
                ))}

        </div>
    );
};

export default UserPage;
