import React from 'react';
import { } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div className="mt-5 py-5 bg-light">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 fw-bold">
                            <p className='mb-0'>© 2022 Toolsa. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <img className='me-3' height={'32px'} src="https://i.ibb.co/0CP1jpF/facebook-2.png" alt="" />
                            <img className='me-3' height={'32px'} src="https://i.ibb.co/zXhGyrL/instagram.png" alt="" />
                            <img className='me-3' height={'32px'} src="https://i.ibb.co/dgpHbRn/twitter.png" alt="" />
                            <img className='me-3' height={'32px'} src="https://i.ibb.co/0KyWg3w/whatsapp.png" alt="" />
                            <img className='me-3' height={'32px'} src="https://i.ibb.co/YjPS6wD/linkedin.png" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;