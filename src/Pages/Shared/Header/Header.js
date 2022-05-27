import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-blue1.png'
import auth from '../../../firebase.init';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogOut = () =>{
        ;
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active fw-bold" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/' className="nav-link active fw-bold">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/' className="nav-link active fw-bold">Product</Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/' className="nav-link active fw-bold">Contact</Link>
                            </li>
                            {
                                user && <Link to='/dashboard' className="nav-link active fw-bold">Dashboard</Link>
                            }
                            <li className="nav-item">
                            {
                                user ? <button style={{backgroundColor:'#3366cc'}} className='btn btn-link text-white text-decoration-none' onClick={()=>signOut(auth)}>Sign Out</button>
                                : 
                                <Link to='/login' className="nav-link active fw-bold">Login</Link>
                            }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;