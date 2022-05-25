import React from 'react';
import './About.css'
import { faStairs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-6 col-12 p-5">
                        <img className='img-fluid' src="https://i.ibb.co/bvh2C13/businessman-leader-modern-office-with-businesspeople-working-1-overlay.png" alt="" />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 col-12 px-3 p-5">
                        <h2>Our Capabilities</h2>
                        <FontAwesomeIcon style={{color: '#3366cc', fontSize:'20px'}} icon={faStairs}></FontAwesomeIcon>
                        <p className='my-4 fs-5'>Order with us and have your product available in the right place at the right time.</p>
                        <h5>Oliver Kahn</h5>
                        <h6>CEO and Co Founder</h6>
                        <img src="https://i.ibb.co/K0JgMhj/Screenshot-10-removebg-preview.png" alt="" />
                        <button className='btn fw-bold text-white d-block mt-5' style={{backgroundColor:'#3366cc'}}>Know More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;