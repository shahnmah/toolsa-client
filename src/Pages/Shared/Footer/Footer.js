import React from 'react';
import { } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (

        <footer className="mt-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 pt-5 pb-4">
                        <div className="row">
                            <div className="col-lg-6 fw-bold">
                                <form class="row g-3">
                                    <div class="col-auto">
                                        <input type="text" readonly class="form-control" placeholder='Email'/>
                                    </div>
                                    <div class="col-auto">
                                        <button style={{backgroundColor:'#3366cc'}} type="submit" class="btn mb-3 fw-bold text-white">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-end">
                               <a href="https://www.facebook.com/" target={'_blank'}> <img className='me-3' height={'32px'} src="https://i.ibb.co/0CP1jpF/facebook-2.png" alt="" /></a>
                                <img className='me-3' height={'32px'} src="https://i.ibb.co/zXhGyrL/instagram.png" alt="" />
                                <img className='me-3' height={'32px'} src="https://i.ibb.co/dgpHbRn/twitter.png" alt="" />
                                <img className='me-3' height={'32px'} src="https://i.ibb.co/0KyWg3w/whatsapp.png" alt="" />
                                <img className='me-3' height={'32px'} src="https://i.ibb.co/YjPS6wD/linkedin.png" alt="" />
                            </div>
                        </div>
                        
                    </div>
                    <hr />
                    <div className="col-12 text-center pb-3">
                        <img className='w-25' src="https://i.ibb.co/yyMWSrF/Logos-01-1-74.png" alt="" />
                    </div>
                    <hr />
                    <div className="col-12 text-center">
                        <p>&copy; {(new Date().getFullYear())} | All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;