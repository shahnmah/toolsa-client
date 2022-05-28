import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='ms-5'>
            <div>
                <h5>Name: {user?.displayName}</h5>
                <h5>Email: {user.email}</h5>
            </div>
        </div>
    );
};

export default MyProfile;