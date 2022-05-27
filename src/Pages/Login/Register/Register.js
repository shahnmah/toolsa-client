import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';






const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile] = useUpdateProfile(auth);

    const navigate = useNavigate()
    const handleRegister = async event => {
        event.preventDefault();
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
    }
    let errorElement;
    if (user) {
        navigate('/login')
    }
    if (googleUser) {
        navigate('/home')
    }
    if(error || googleError){
        errorElement = <div>
        <p className='text-danger'>Error: {error?.message} {googleError?.message}</p>
    </div>
    }
    if(loading || googleLoading){
        return <Loading/>
    }
    return (
        <div className='register my-5'>
            <div className="container">
                <form className='w-25 mx-auto' onSubmit={handleRegister}>
                    <h2 className='fw-bold my-3'><i>Register</i></h2>
                    <div class="mb-3">
                        <input required type="text" onBlur={(e)=> setName(e.target.value)} name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
                    </div>
                    <div class="mb-3">
                        <input required type="email" onBlur={(e)=> setEmail(e.target.value)} name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
                    </div>
                    <div>
                        <input required type="password" onBlur={(e)=> setPassword(e.target.value)} name='password' class="form-control" id="exampleInputPassword1" placeholder='Password'/> 
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mt-3">Register</button>
                    <small><Link to='/login' className='text-muted text-decoration-none'>Already have an account?</Link></small>
                    <hr />
                    <button onClick={()=> signInWithGoogle()} class="btn btn-primary w-100">Google Sign Up</button>
                    <p>{errorElement}</p>
                </form>
            </div>
        </div>
    );
};

export default Register;