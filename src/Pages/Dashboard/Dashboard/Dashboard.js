import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
// import './Dashboard.css'

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <div className="container">
                <h2>Welcome {user?.displayName}, to your DashBoard</h2>
                <div className='d-flex dashboard'>
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link className="nav-link" to='/dashboard/myProfile'>My Profile</Link>
                        <Link className="nav-link" id="review" data-toggle="pill" role="tab" aria-controls="review" aria-selected="true" to='/dashboard/addReview'>Add A Review</Link>
                        <Link className="nav-link" id="review" data-toggle="pill" role="tab" aria-controls="review" aria-selected="true" to='/dashboard/myOrder'>My Orders</Link>
                        <Link className="nav-link" id="review" data-toggle="pill" role="tab" aria-controls="review" aria-selected="true" to='/dashboard/addProduct'>Add A Product</Link>
                        <Link className="nav-link" id="review" data-toggle="pill" role="tab" aria-controls="review" aria-selected="true" to='/dashboard/makeAdmin'>Make Admin</Link>


                    </div>
                    <div className="tab-content" id="v-pills-tabContent" style={{width: '80%'}}>
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