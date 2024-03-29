import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const UserDetailsPage = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user:', error.message);
            }
        };

        fetchUser();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>

                <h1> {user.name}</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company.name}</p>
            </div>
        </div>
    );
};

export default UserDetailsPage;
