import React from 'react';
import './MyPortfolio.css'
const MyPortfolio = () => {
    return (
        <div>
            <div className="container my-5 portfolio">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <img src="https://i.ibb.co/3SywncM/pexels-italo-melo-2379004-1.jpg" alt="" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-6 col-12">
                        <h2>Shahin Miah</h2>
                        <h6>Email: shahn.mah@gmail.com</h6>
                        <h6>Education: Currently I am studying in Department of Marketing, National University </h6>
                        <h6>Technologies: html, css, bootstrap, tailwind, javascript,  react, node js, express, mongodb
                        </h6>
                        <h6>Best 3 projects</h6>
                        <a href="https://shahmah-dronezhouse.netlify.app/" target="_blank">1. Drone House</a>
                        <a href="https://travel-guide-c24c4.web.app/" target="_blank">2. Travel Assistant</a>
                        <a href="https://inventory-website-2239c.web.app/" target="_blank">3. Inventory</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;