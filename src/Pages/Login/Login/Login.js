import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, resetError] = useSendPasswordResetEmail(auth);

    let errorElement;
    const  navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // login using email password
    const handleLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    if(user || googleUser){
        navigate(from, { replace: true });
    }

    // forgot password
    const handleForgotPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email send successful');
        }
        else {
            toast.error('Please inter your email first');
        }
    }


    if(loading || googleLoading){
        return <Loading/>
    }
    if (error || googleError || resetError) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {googleError?.message}</p>
        </div>
    }
    return (
        <div className='register my-5'>
        <div className="container">
            <form className='w-25 mx-auto' onSubmit={handleLogin}>
                <h2 className='fw-bold my-3'><i>Login</i></h2>
                <div class="mb-3">
                    <input required type="email" onBlur={(e)=> setEmail(e.target.value)} name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
                </div>
                <div>
                    <input required type="password" onBlur={(e)=> setPassword(e.target.value)} name='password' class="form-control" id="exampleInputPassword1" placeholder='Password'/> 
                    <span className='text-muted' role='button'><small onClick={()=> handleForgotPassword()}>Forgot Password?</small></span>
                </div>
                {errorElement}
                <button class="btn btn-primary w-100 mt-3">Login</button>
                <small><Link to='/register' role='button' className='text-muted text-decoration-none'>Don't have an account?</Link></small>
                <hr />
                <button onClick={()=> signInWithGoogle()} class="btn btn-primary w-100">Google Login</button>
            </form>
            <ToastContainer/>
        </div>
    </div>
    );
};

export default Login;