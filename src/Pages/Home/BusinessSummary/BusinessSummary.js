import React from 'react';
import NumberCounter from 'number-counter';
import { faUsers, faShoppingCart, faFlag, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BusinessSummary.css'


const BusinessSummary = () => {
    return (
        <div className='counter'>
            <div className="container text-center py-5 my-5 text-white">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-md-6 col-12">
                        <FontAwesomeIcon className='fs-2 mb-2' icon={faUsers}></FontAwesomeIcon>
                        <h2><NumberCounter end={1200} delay={2} /></h2>
                        <h5>Happy Clients</h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-md-6 col-12">
                        <FontAwesomeIcon className='fs-2 mb-2' icon={faShoppingCart}></FontAwesomeIcon>
                        <h2><NumberCounter end={900} delay={2} /></h2>
                        <h5>Oders</h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-md-6 col-12">
                        <FontAwesomeIcon className='fs-2 mb-2' icon={faFlag}></FontAwesomeIcon>
                        <h2><NumberCounter end={48} delay={2} /></h2>
                        <h5>Country</h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-md-6 col-12">
                        <FontAwesomeIcon className='fs-2 mb-2' icon={faMoneyBillWave}></FontAwesomeIcon>
                        <h2><NumberCounter className="d-inline-block" end={25} delay={2} /><span>M</span></h2>
                        <h5>Revenue</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;