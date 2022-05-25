import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSignInWithMicrosoft, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { async } from '@firebase/util';



const Register = () => {
    const [createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate= useNavigate();
    const handleRegister = async event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // signup
        createUserWithEmailAndPassword(email, password)
        // update name
        await updateProfile({ displayName : name });

        navigate('/login')
        event.target.reset();
    }
    return (
        <div className='register my-5'>
            <div className="container">
                <form className='w-25 mx-auto' onSubmit={handleRegister}>
                    <h2 className='fw-bold my-3'><i>Register</i></h2>
                    <div class="mb-3">
                        <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
                    </div>
                    <div class="mb-3">
                        <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
                    </div>
                    <div>
                        <input type="password" name='password' class="form-control" id="exampleInputPassword1" placeholder='Password'/> 
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mt-3">Register</button>
                    <small><Link to='/login' className='text-muted text-decoration-none'>Already have an account?</Link></small>
                    <hr />
                    <button onClick={()=> signInWithGoogle()} class="btn btn-primary w-100">Google Login</button>
                </form>
            </div>
        </div>
    );
};

export default Register;