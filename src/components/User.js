import React from 'react';
import { Link } from 'react-router-dom';

function User({ userInfo }) {
    return (
        <Link to={`/user/${userInfo.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
                width: "250px",
                height: "250px",
                border: "2px solid "
            }}>
                <img style={{
                    paddingTop: "10px",
                    width: "50px"
                }} src="https://cdn-icons-png.freepik.com/256/1077/1077063.png" alt="userIcon" />
                <div>
                    <h1>{userInfo?.name}</h1>
                    <p>{userInfo?.username}</p>
                    <p>{userInfo?.email}</p>
                </div>
            </div>
        </Link>
    );
}

export default User;
