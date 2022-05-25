import React from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='register my-5'>
            <div className="container">
                <form className='w-25 mx-auto'>
                    <h2 className='fw-bold my-3'><i>Register</i></h2>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
                    </div>
                    <div>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'/> 
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mt-3">Register</button>
                    <small><Link to='/login' className='text-muted text-decoration-none'>Already have an account?</Link></small>
                    <hr />
                    <button class="btn btn-primary w-100">Google Login</button>
                </form>
            </div>
        </div>
    );
};

export default Register;