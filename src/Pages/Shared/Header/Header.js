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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link to='/' class="nav-link active fw-bold" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/' class="nav-link active fw-bold">About</Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/' class="nav-link active fw-bold">Product</Link>
                            </li>
                            <li class="nav-item">
                            <Link to='/' class="nav-link active fw-bold">Contact</Link>
                            </li>
                            <li class="nav-item">
                            {
                                user ? <button style={{backgroundColor:'#3366cc'}} className='btn btn-link text-white text-decoration-none' onClick={()=>signOut(auth)}>Sign Out</button>
                                : 
                                <Link to='/login' class="nav-link active fw-bold">Login</Link>
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