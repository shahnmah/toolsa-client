import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login my-5'>
            <div className="container">
                <form className='w-25 mx-auto'>
                    <h2 className='fw-bold my-3'><i>Login</i></h2>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'/>
                    </div>
                    <div>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'/> 
                        <span className='text-muted' role='button'><small>Forgot Password?</small></span>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mt-3">Login</button>
                    <small><Link to='/register' className='text-muted text-decoration-none'>Don't have an account?</Link></small>
                    <hr />
                    <button class="btn btn-primary w-100">Google Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;