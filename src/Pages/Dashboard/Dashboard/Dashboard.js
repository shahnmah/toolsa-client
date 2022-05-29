import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
// import './Dashboard.css'

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [currentUser, setCurrentUser] = useState([])

    const email = user.email;
    useEffect(() => {
        fetch(`https://mysterious-anchorage-92670.herokuapp.com/users/${email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data =>{
            setCurrentUser(data)
        })
    }, [])
    return (
        <div>
            <div className="container">
                <h2>Welcome {user?.displayName}, to your DashBoard</h2>
                <div className='d-flex dashboard'>
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link className="nav-link" to='/dashboard/myProfile'>My Profile</Link>
                        {currentUser.role !== 'admin' && <Link className="nav-link" id="review" data-toggle="pill" role="tab" aria-controls="review" aria-selected="true" to='/dashboard/addReview'>Add A Review</Link>}
                       {currentUser.role !== 'admin' && <Link className="nav-link" id="review" data-toggle="pill" role="tab" aria-controls="review" aria-selected="true" to='/dashboard/myOrder'>My Orders</Link>}
                        {currentUser.role === 'admin' && <Link className="nav-link" id="review" data-toggle="pill" role="tab" aria-controls="review" aria-selected="true" to='/dashboard/addProduct'>Add A Product</Link>}
                        {currentUser.role === 'admin' && <Link className="nav-link" id="review" data-toggle="pill" role="tab" aria-controls="review" aria-selected="true" to='/dashboard/makeAdmin'>Make Admin</Link>}
                        {currentUser.role === 'admin' && <Link className="nav-link" id="review" data-toggle="pill" role="tab" aria-controls="review" aria-selected="true" to='/dashboard/manageProducts'>Manage Products</Link>}
                        {currentUser.role === 'admin' && <Link className="nav-link" id="review" data-toggle="pill" role="tab" aria-controls="review" aria-selected="true" to='/dashboard/manageAllOrders'>Manage All Orders</Link>}
                    </div>
                    <div className="tab-content" id="v-pills-tabContent" style={{ width: '80%' }}>
                        {/* <div className="tab-pane fade show active" id="review"></div> */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};
// 
export default Dashboard;